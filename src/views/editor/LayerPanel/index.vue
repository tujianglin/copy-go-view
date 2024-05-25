<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { computed, defineComponent, ref, watch } from 'vue';
  import { useLayoutStore } from '/@/store/modules/layout';
  import { VueDraggable } from 'vue-draggable-plus';
  import ListItem from './components/ListItem/index.vue';
  import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
  import { cloneDeep } from 'lodash-es';
  import { useEditStore } from '/@/store/modules/edit';
  export default defineComponent({
    setup() {
      const layoutStore = useLayoutStore();
      const editStore = useEditStore();
      const layerList = ref([]);

      const reverseList = computed(() => {
        const list: Array<CreateComponentType | CreateComponentGroupType> = cloneDeep(editStore.state.componentList);
        return list.reverse();
      });

      watch(reverseList, (val) => {
        layerList.value = val;
      });

      function onMousedown(e: MouseEvent) {
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

      return () => (
        <Layout.Sider class="charts-sider  b-l b-solid b-layout h-full overflow-y-auto !bg-elevated" width={200} collapsedWidth={0} collapsed={!layoutStore.state.layers}>
          <div class="pt-2 h-full" onMousedown={onMousedown}>
            <VueDraggable v-model={layerList.value} onEnd={onEnd}>
              {layerList.value.map((element) => (
                <div key={element.id} class="layer-box flex-center">
                  {element.isGroup ? <div>11</div> : <ListItem componentData={element}></ListItem>}
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
