<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { computed, defineComponent, ref, watch } from 'vue';
  import { useLayoutStore } from '/@/store/modules/layout';
  import { VueDraggable } from 'vue-draggable-plus';
  import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
  import { cloneDeep } from 'lodash-es';
  import { useEditStore } from '/@/store/modules/edit';

  import ListItem from './components/ListItem/index.vue';
  import GroupListItem from './components/GroupListItem/index.vue';
  import { MenuOptionsItemType, useContextMenu } from '../ContextMenu/useContextMenu';
  import { MenuEnum, MouseEventButton } from '/@/enums/editPageEnum';

  export default defineComponent({
    setup() {
      const { handleContextMenu, onClickOutSide } = useContextMenu();
      const layoutStore = useLayoutStore();
      const editStore = useEditStore();
      const layerList = ref([]);

      // 右键事件
      function optionsHandle(targetList: MenuOptionsItemType[], _: MenuOptionsItemType[], targetInstance: CreateComponentType) {
        // 多选处理
        if (editStore.state.targetChart.selectId.length > 1) {
          return targetList.filter((i) => i.key === MenuEnum.GROUP);
        }
        const statusMenuEnums: MenuEnum[] = [];
        // 处理锁定与隐藏
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
        return targetList.filter((item) => !statusMenuEnums.includes(item.key as MenuEnum));
      }

      const reverseList = computed(() => {
        const list: Array<CreateComponentType | CreateComponentGroupType> = cloneDeep(editStore.state.componentList);
        return list.reverse();
      });

      watch(reverseList, (val) => {
        layerList.value = val;
      });

      function onBoxMousedown(e: MouseEvent) {
        const box = document.querySelector('.layer-box');
        if ((e.target as any).contains(box)) {
          editStore.setTargetSelectChart();
        }
      }

      function onEnd({ newIndex, oldIndex }) {
        if (newIndex - oldIndex > 0) {
          // 从上往下
          const moveTarget = editStore.state.componentList.splice(-(oldIndex + 1), 1)[0];
          editStore.state.componentList.splice(-newIndex, 0, moveTarget);
        } else {
          // 从下往上
          const moveTarget = editStore.state.componentList.splice(-(oldIndex + 1), 1)[0];
          if (newIndex === 0) {
            editStore.state.componentList.push(moveTarget);
          } else {
            editStore.state.componentList.splice(-newIndex, 0, moveTarget);
          }
        }
      }

      function onMousedown(e: MouseEvent, item: CreateComponentType) {
        onClickOutSide();
        if (e.buttons === MouseEventButton.LEFT && window.$KeyboardActive?.ctrl) {
          // 若已选中，则去除
          if (editStore.state.targetChart.selectId.includes(item.id)) {
            const exList = editStore.state.targetChart.selectId.filter((e) => e !== item.id);
            editStore.setTargetSelectChart(exList);
          } else {
            editStore.setTargetSelectChart(item.id, true);
          }
          return;
        }
        editStore.setTargetSelectChart(item.id);
      }

      return () => (
        <Layout.Sider class="charts-sider  b-l b-solid b-layout h-full overflow-y-auto !bg-elevated" width={200} collapsedWidth={0} collapsed={!layoutStore.state.layers}>
          <div class="pt-2 h-full" onMousedown={onBoxMousedown}>
            <VueDraggable v-model={layerList.value} onEnd={onEnd}>
              {layerList.value.map((element) => (
                <div key={element.id} class="layer-box flex-center">
                  {element.isGroup ? (
                    <GroupListItem componentGroupData={element}></GroupListItem>
                  ) : (
                    <ListItem componentData={element} onMousedown={(e) => onMousedown(e, element)} onContextmenu={(e) => handleContextMenu(e, element, optionsHandle)}></ListItem>
                  )}
                </div>
              ))}
            </VueDraggable>
          </div>
        </Layout.Sider>
      );
    },
  });
</script>
<style lang="less" scoped></style>
