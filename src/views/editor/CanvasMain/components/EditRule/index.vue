<script lang="tsx">
  import { computed, defineComponent, onUnmounted, reactive, ref, watch } from 'vue';
  import { useEditStore } from '/@/store/modules/edit';
  import { CSSProperties } from 'vue';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
  import { throttle } from 'lodash-es';
  import SketchRule from 'vue3-sketch-ruler';
  import { listen } from 'dom-helpers';
  import { useAppStore } from '/@/store/modules/app';
  import { useLayoutStore } from '/@/store/modules/layout';
  import { LayoutStoreEnum } from '/@/store/types';
  export default defineComponent({
    setup(_, { slots }) {
      const editStore = useEditStore();
      const layoutStore = useLayoutStore();
      const { state } = storeToRefs(editStore);
      const thick = 20;
      let prevMoveXValue = [0, 0];
      let prevMoveYValue = [0, 0];
      const appStore = useAppStore();
      const startX = ref(0);
      const isPressSpace = ref(false);
      const startY = ref(0);
      const lines = reactive({ h: [], v: [] });
      const scale = computed(() => state.value.editCanvas.scale);
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
      // 布局处理
      const ruleBoxStyle = ref();
      const editorRef = ref<HTMLElement>();
      const containerRef = ref<HTMLElement>();
      const sketchRuleBoxRef = ref<HTMLElement>();
      const sketchRuleReDraw = ref(true);
      const containerStyle = computed((): CSSProperties => {
        return { width: `${state.value.editCanvasConfig.width * 2}px`, height: `${state.value.editCanvasConfig.height * 2}px` };
      });
      function canvasBox() {
        const layoutDom = document.getElementById('edit-layout');
        let width = 0;
        let height = 0;
        if (layoutDom) {
          // 此处减去滚动条的宽度和高度
          const scrollW = 20;
          height = layoutDom.clientHeight - scrollW;
          width = layoutDom.clientWidth - scrollW;
        } else {
          width = state.value.editCanvasConfig.width;
          height = state.value.editCanvasConfig.height;
        }
        return {
          width,
          height,
        };
      }
      // 滚动居中
      function canvasPosCenter() {
        const { width: containerWidth, height: containerHeight } = containerRef.value.getBoundingClientRect();
        editorRef.value.scrollLeft = containerWidth / 2 - canvasBox().width / 2;
        editorRef.value.scrollTop = containerHeight / 2 - canvasBox().height / 2;
        ruleBoxStyle.value = { marginLeft: '-' + (canvasBox().width / 2 - 25) + 'px' };
      }

      const reDraw = throttle(() => {
        sketchRuleReDraw.value = false;
        setTimeout(() => {
          sketchRuleReDraw.value = true;
        }, 10);
      }, 20);

      // 处理标尺重制大小
      watch(
        () => scale.value,
        (nVal, oVal) => {
          if (oVal !== nVal || layoutStore.state.rePositionCanvas) {
            layoutStore.setItemUnHandle(LayoutStoreEnum.RE_POSITION_CANVAS, false);
            onScroll();
            setTimeout(() => {
              canvasPosCenter();
              reDraw();
            }, 100);
          } else {
            reDraw();
          }
        },
      );
      // 处理主题变化
      watch(
        () => appStore.appConfig.darkTheme,
        () => {
          reDraw();
        },
      );

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

      function onMousedown(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        if (e.which == 2) isPressSpace.value = true;
        else if (!window.$KeyboardActive?.space) return;
        // @ts-ignore
        document.activeElement?.blur();
        const startX = e.pageX;
        const startY = e.pageY;

        const listenMousemove = listen(window, 'mousemove', (e: any) => {
          const nx = e.pageX - startX;
          const ny = e.pageY - startY;

          const [prevMoveX1, prevMoveX2] = prevMoveXValue;
          const [prevMoveY1, prevMoveY2] = prevMoveYValue;

          prevMoveXValue = [prevMoveX2, nx];
          prevMoveYValue = [prevMoveY2, ny];

          editorRef.value.scrollLeft -= prevMoveX2 > prevMoveX1 ? Math.abs(prevMoveX2 - prevMoveX1) : -Math.abs(prevMoveX2 - prevMoveX1);
          editorRef.value.scrollTop -= prevMoveY2 > prevMoveY1 ? Math.abs(prevMoveY2 - prevMoveY1) : -Math.abs(prevMoveY2 - prevMoveY1);
        });

        const listenMouseup = listen(window, 'mouseup', () => {
          listenMousemove();
          listenMouseup();
          prevMoveXValue = [0, 0];
          prevMoveYValue = [0, 0];
          isPressSpace.value = false;
        });
      }

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

      window.onKeySpacePressHold = (isHold: boolean) => {
        isPressSpace.value = isHold;
      };
      return () => (
        <div class="wh-full overflow-hidden">
          {sketchRuleReDraw.value ? (
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
          ) : (
            ''
          )}
          <div ref={editorRef} class="absolute wh-full overflow-auto select-none pb-0" onScroll={onScroll}>
            <div ref={containerRef} class="relative" style={containerStyle.value}>
              <div ref={sketchRuleBoxRef} class="canvas" style={ruleBoxStyle.value} onMousedown={onMousedown}>
                <div style={{ pointerEvents: isPressSpace.value ? 'none' : 'auto' }}>{slots?.default?.()}</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  });
</script>
<style>
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
<style lang="less" scoped>
  .canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 50% 0;
    transform: translateY(-50%);

    &:active {
      cursor: crosshair;
    }
  }
</style>
