<script lang="tsx">
  import { PropType, computed, defineComponent, h, resolveComponent } from 'vue';
  import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
  import EditShapeBox from '../EditShapeBox/index.vue';
  import { useEditStore } from '/@/store/modules/edit';
  import { MenuOptionsItemType, divider, useContextMenu } from '../../../ContextMenu/useContextMenu';
  import { MenuEnum } from '/@/enums/editPageEnum';
  import { animationsClass, colorCustomMerge, getBlendModeStyle, getFilterStyle, getTransformStyle } from '/@/utils';
  import { useComponentStyle, useSizeStyle } from '../../hooks/useStyle';
  import { useMouseHandle } from '../../hooks';
  export default defineComponent({
    props: {
      groupData: {
        type: Object as PropType<CreateComponentGroupType>,
        required: true,
      },
      groupIndex: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const editStore = useEditStore();
      const { handleContextMenu } = useContextMenu();
      const { mouseenterHandle, mouseleaveHandle, mousedownHandle, mouseClickHandle } = useMouseHandle();

      // 右键
      const optionsHandle = (targetList: MenuOptionsItemType[], allList: MenuOptionsItemType[], targetInstance: CreateComponentType) => {
        const filter = (menulist: MenuEnum[]) => {
          return allList.filter((i) => menulist.includes(i.key as MenuEnum));
        };

        // 多选处理
        if (editStore.state.targetChart.selectId.length > 1) {
          return filter([MenuEnum.GROUP, MenuEnum.DELETE]);
        } else {
          const statusMenuEnums: MenuEnum[] = [];
          if (targetInstance.status.lock) {
            statusMenuEnums.push(MenuEnum.LOCK);
          } else {
            statusMenuEnums.push(MenuEnum.UNLOCK);
          }
          if (targetInstance.status.hide) {
            statusMenuEnums.push(MenuEnum.HIDE);
          } else {
            statusMenuEnums.push(MenuEnum.SHOW);
          }
          // 单选
          const singleMenuEnums = [MenuEnum.UN_GROUP];
          return [...filter(singleMenuEnums), divider(), ...targetList.filter((i) => !statusMenuEnums.includes(i.key as MenuEnum))];
        }
      };

      // 配置项
      const themeColor = computed(() => {
        const colorCustomMergeData = colorCustomMerge(editStore.state.editCanvasConfig.chartCustomThemeColorInfo);
        return colorCustomMergeData[editStore.state.editCanvasConfig.chartThemeColor];
      });

      return () => (
        <div>
          <EditShapeBox
            key={props.groupData.id}
            item={props.groupData}
            hiddenPoint
            class={animationsClass(props.groupData.styles.animations)}
            style={{
              ...useComponentStyle(props.groupData.attr, props.groupIndex),
              ...useSizeStyle(props.groupData.attr),
              ...getFilterStyle(props.groupData.styles),
              ...getTransformStyle(props.groupData.styles),
              ...(getBlendModeStyle(props.groupData.styles) as any),
            }}
            onClick={(e) => mouseClickHandle(e, props.groupData)}
            onMousedown={(e) => mousedownHandle(e, props.groupData)}
            onMouseenter={(e) => mouseenterHandle(e, props.groupData)}
            onMouseleave={(e) => mouseleaveHandle(e)}
            onContextmenu={(e) => handleContextMenu(e, props.groupData, optionsHandle)}
          >
            {props.groupData.groupList.map((item) => (
              <EditShapeBox
                key={item.id}
                item={item}
                hiddenPoint
                class={animationsClass(item.styles.animations)}
                style={{
                  ...useComponentStyle(item.attr, props.groupIndex),
                }}
              >
                {h(resolveComponent(item.chartConfig.chartKey), {
                  class: [animationsClass(item.styles.animations)],
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
          </EditShapeBox>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
