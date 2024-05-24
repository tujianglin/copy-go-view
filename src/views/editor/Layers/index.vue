<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { computed, defineComponent, ref, watch } from 'vue';
  import { useLayoutStore } from '/@/store/modules/layout';
  import Draggable from 'vuedraggable';
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

      return () => (
        <Layout.Sider class="charts-sider  b-l b-solid b-layout h-full overflow-y-auto !bg-elevated" width={200} collapsedWidth={0} collapsed={!layoutStore.state.layers}>
          <div class="mt-2">
            <Draggable item-key="id" list={layerList.value}>
              {{
                item: ({ element }) => <div class="flex-center">{element.isGroup ? <div>11</div> : <ListItem componentData={element}></ListItem>}</div>,
              }}
            </Draggable>
          </div>
        </Layout.Sider>
      );
    },
  });
</script>
<style lang="less" scoped></style>
