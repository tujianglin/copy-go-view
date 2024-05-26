<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { CSSProperties, computed, defineComponent, h, onMounted, resolveComponent } from 'vue';
  import { dragHandle, dragoverHandle, mousedownHandleUnStop, useLayout } from './hooks';
  import { useContextMenu } from '../ContextMenu/useContextMenu';
  import { useAddKeyboard } from '/@/hooks/events/useKeyboard';
  import { useEditStore } from '/@/store/modules/edit';
  import { animationsClass, colorCustomMerge, getBlendModeStyle, getFilterStyle, getTransformStyle } from '/@/utils';

  import EditRule from './components/EditRule/index.vue';
  import EditRange from './components/EditRange/index.vue';
  import EditShapeBox from './components/EditShapeBox/index.vue';
  import { useComponentStyle, useSizeStyle } from './hooks/useStyle';
  export default defineComponent({
    setup() {
      const { handleContextMenu } = useContextMenu();
      const editStore = useEditStore();
      // 布局处理
      useLayout(async () => {});

      // 背景
      const rangeStyle = computed((): CSSProperties => {
        // 设置背景色和图片背景
        const background = editStore.state.editCanvasConfig.background;
        const backgroundImage = editStore.state.editCanvasConfig.backgroundImage;
        const selectColor = editStore.state.editCanvasConfig.selectColor;
        const backgroundColor = background ? background : undefined;

        const computedBackground = selectColor ? { background: backgroundColor } : { background: `url(${backgroundImage}) no-repeat center center / cover !important` };

        return {
          ...computedBackground,
          width: 'inherit',
          height: 'inherit',
        };
      });

      // 配置项
      const themeColor = computed(() => {
        const colorCustomMergeData = colorCustomMerge(editStore.state.editCanvasConfig.chartCustomThemeColorInfo);
        return colorCustomMergeData[editStore.state.editCanvasConfig.chartThemeColor];
      });

      onMounted(() => {
        useAddKeyboard();
      });
      return () => (
        <Layout.Content>
          <div class="wh-full relative overflow-hidden" id="edit-layout" onMousedown={mousedownHandleUnStop} onDrop={dragHandle} onDragover={dragoverHandle} onDragenter={dragoverHandle}>
            <EditRule>
              <div id="edit-content" class="overflow-hidden transition-all-400" onContextmenu={handleContextMenu}>
                <EditRange class="transition-all-400">
                  <div class={{ ...getFilterStyle(editStore.state.editCanvasConfig), ...rangeStyle.value }}>
                    {editStore.state.componentList.map((item, index) => (
                      <EditShapeBox key={index} item={item} style={{ ...useComponentStyle(item.attr, index), ...getBlendModeStyle(item.styles) }}>
                        {h(resolveComponent(item.chartConfig.chartKey), {
                          class: ['edit-content-chart', animationsClass(item.styles.animations)],
                          chartConfig: item,
                          themeSetting: editStore.state.editCanvasConfig.chartThemeSetting,
                          themeColor: themeColor.value,
                          style: {
                            ...useSizeStyle(item.attr),
                            ...getFilterStyle(item.styles),
                            ...getTransformStyle(item.styles),
                          },
                        })}
                      </EditShapeBox>
                    ))}
                  </div>
                </EditRange>
              </div>
            </EditRule>
          </div>
        </Layout.Content>
      );
    },
  });
</script>
<style lang="less" scoped>
  #edit-layout {
    background-image: linear-gradient(var(--color-bg-layout) 14px, transparent 0), linear-gradient(90deg, transparent 14px, var(--color-primary-active) 0);
    background-size:
      15px 15px,
      15px 15px;
    #edit-content {
      box-shadow: 0 8px 10px rgba(30, 30, 30, 0.1215686275);
    }
  }
</style>
