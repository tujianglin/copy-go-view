<script lang="tsx">
  import { throttle } from 'lodash-es';
  import { computed, defineComponent, onMounted, reactive, ref, watch, onUnmounted } from 'vue';
  import SketchRule from 'vue3-sketch-ruler';
  import { useAppStore } from '/@/store/modules/app';
  import { useEditStore } from '/@/store/modules/edit';
  import { storeToRefs } from 'pinia';
  import { useLayoutStore } from '/@/store/modules/layout';
  import { LayoutStoreEnum } from '/@/store/types';
  import { CSSProperties } from 'vue';
  export default defineComponent({
    setup() {
      const thick = 20;
      const appStore = useAppStore();
      const editStore = useEditStore();
      const layoutStore = useLayoutStore();
      const { state } = storeToRefs(editStore);
      const sketchRuleReDraw = ref(true);
      const editorRef = ref();
      const containerRef = ref();
      const sketchRuleBoxRef = ref();
      const startX = ref(0);
      const startY = ref(0);
      const lines = reactive({ h: [], v: [] });

      const scale = computed(() => state.value.editCanvas.scale);
      // 主题
      const paletteStyle = computed(() => {
        const isDarkTheme = appStore.appConfig.darkTheme;
        return isDarkTheme
          ? {
              bgColor: '#18181c',
              longfgColor: '#4d4d4d',
              shortfgColor: '#4d4d4d',
              fontColor: '#4d4d4d',
              shadowColor: '#18181c',
              borderColor: '#18181c',
              cornerActiveColor: '#18181c',
            }
          : {};
      });
      const containerStyle = computed((): CSSProperties => {
        return { width: `${state.value.editCanvasConfig.width + 2}px`, height: `${state.value.editCanvasConfig.height * 2}px` };
      });

      // 重绘标尺
      const reDraw = throttle(() => {
        sketchRuleReDraw.value = false;
        setTimeout(() => {
          sketchRuleReDraw.value = true;
        }, 10);
      }, 20);

      // 处理主题变化
      watch(
        () => appStore.appConfig.darkTheme,
        () => {
          reDraw();
        },
      );

      watch(
        () => scale.value,
        (nVal, oVal) => {
          if (oVal !== nVal && layoutStore.state.rePositionCanvas) {
            layoutStore.setItemUnHandle(LayoutStoreEnum.RE_POSITION_CANVAS, false);
            onScroll();
            setTimeout(() => {
              canvasPosCenter();
              reDraw();
            }, 400);
          } else {
            reDraw();
          }
        },
      );

      onMounted(() => {
        if (editorRef.value) {
          editorRef.value.addEventListener('wheel', handleWheel, { passive: false });
          canvasPosCenter();
        }
      });

      onUnmounted(() => {
        if (editorRef.value) {
          editorRef.value.removeEventListener('wheel', handleWheel);
        }
      });

      // 计算画布大小
      function canvasBox() {
        const layoutDom = document.getElementById('edit-layout');
        if (layoutDom) {
          // 此处减去滚动条的宽度和高度
          const scrollW = 20;
          return {
            height: layoutDom.clientHeight - scrollW,
            width: layoutDom.clientWidth - scrollW,
          };
        }
        return {
          width: state.value.editCanvasConfig.width,
          height: state.value.editCanvasConfig.height,
        };
      }
      // 滚动居中
      function canvasPosCenter() {
        const { width: containerWidth, height: containerHeight } = containerRef.value.getBoundingClientRect();
        const { width, height } = canvasBox();

        editorRef.value.scrollLeft = containerWidth / 2 - width / 2;
        editorRef.value.scrollTop = containerHeight / 2 - height / 2;
      }
      // 滚动条处理
      function onScroll() {
        if (!editorRef.value) return;
        const screensRect = editorRef.value.getBoundingClientRect();
        const canvasRect = sketchRuleBoxRef.value.getBoundingClientRect();
        // 标尺开始的刻度
        startX.value = (screensRect.left + thick - canvasRect.left) / scale.value;
        startY.value = (screensRect.top + thick - canvasRect.top) / scale.value;
      }

      // 处理鼠标拖动
      function handleWheel(e: any) {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          let resScale = scale.value;
          // 放大(200%)
          if (e.wheelDelta >= 0 && scale.value < 2) {
            resScale = scale.value + 0.05;
            editStore.setScale(resScale);
            return;
          }
          // 缩小(10%)
          if (e.wheelDelta < 0 && scale.value > 0.1) {
            resScale = scale.value - 0.05;
            editStore.setScale(resScale);
          }
        }
      }
      return () => (
        <div class="wh-full overflow-hidden">
          {sketchRuleReDraw.value ? (
            <>
              <SketchRule
                ratio={1}
                thick={thick}
                scale={scale.value}
                width={canvasBox().width}
                height={canvasBox().height}
                startX={startX.value}
                startY={startY.value}
                palette={paletteStyle.value}
                lines={lines}
              ></SketchRule>
              <div ref={editorRef} class="absolute wh-full overflow-auto select-none pb-0" onScroll={onScroll}>
                <div ref={containerRef} class="absolute top-0 left-0" style={containerStyle.value}>
                  <div ref={sketchRuleBoxRef}></div>
                </div>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      );
    },
  });
</script>
<style>
  /* 使用 SCSS 会报错，直接使用最基础的 CSS 进行修改，
此库有计划 Vue3 版本，但是开发的时候还没发布 */
  #mb-ruler {
    top: 0;
    left: 0;
  }

  /* 横线 */
  #mb-ruler .v-container .lines .line {
    /* 最大缩放 200% */
    width: 200vw !important;
    border-top: 1px dashed var(--color-primary) !important;
  }

  #mb-ruler .v-container .indicator {
    border-bottom: 1px dashed var(--color-primary) !important;
  }

  /* 竖线 */
  #mb-ruler .h-container .lines .line {
    /* 最大缩放 200% */
    height: 200vh !important;
    border-left: 1px dashed var(--color-primary) !important;
  }

  #mb-ruler .h-container .indicator {
    border-left: 1px dashed var(--color-primary) !important;
  }

  /* 坐标数值背景颜色 */
  #mb-ruler .indicator .value {
    background-color: rgba(0, 0, 0, 0);
  }

  /* 删除按钮 */
  #mb-ruler .line .del {
    padding: 0;
    color: var(--color-primary);
    font-size: 26px;
    font-weight: bolder;
  }

  #mb-ruler .corner {
    border-width: 0 !important;
  }
</style>
