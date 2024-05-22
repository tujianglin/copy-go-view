<script lang="tsx">
  import { Button, Divider, Space, Tooltip } from 'ant-design-vue';
  import { Ref, computed, defineComponent, reactive } from 'vue';
  import { ChartLayoutStoreEnum, HistoryStackEnum } from '/@/store/types';
  import { useHistoryStore } from '/@/store/modules/history';
  import { useLayoutStore } from '/@/store/modules/layout';
  import { storeToRefs } from 'pinia';
  interface ItemType<T> {
    key: T;
    select: Ref<boolean> | boolean;
    title: string;
  }
  export default defineComponent({
    setup() {
      const { state } = storeToRefs(useLayoutStore());
      const historyStore = useHistoryStore();
      const btnList = reactive<ItemType<ChartLayoutStoreEnum>[]>([
        {
          key: ChartLayoutStoreEnum.CHARTS,
          select: state.value.charts,
          title: '图表组件',
        },
        {
          key: ChartLayoutStoreEnum.LAYERS,
          select: state.value.layers,
          title: '图层控制',
        },
        {
          key: ChartLayoutStoreEnum.DETAILS,
          select: state.value.details,
          title: '详情设置',
        },
      ]);
      const isBackStack = computed(() => historyStore.state.backStack.length > 1);

      const isForwardStack = computed(() => historyStore.state.forwardStack.length > 0);

      const historyList = reactive<ItemType<HistoryStackEnum>[]>([
        {
          key: HistoryStackEnum.BACK_STACK,
          // 一定会有初始化画布
          select: isBackStack,
          title: '后退',
        },
        {
          key: HistoryStackEnum.FORWARD_STACK,
          select: isForwardStack,
          title: '前进',
        },
      ]);

      function styleHandle(item: ItemType<ChartLayoutStoreEnum>) {
        if (item.key === ChartLayoutStoreEnum.DETAILS) {
          return item.select ? 'default' : 'primary';
        }
        return item.select ? 'primary' : 'default';
      }
      return () => (
        <Space>
          {btnList.map((i) => (
            <Tooltip title={i.title}>
              <Button type={styleHandle(i)} ghost>
                {i.title}
              </Button>
            </Tooltip>
          ))}
          <Divider type="vertical"></Divider>
          {historyList.map((i) => (
            <Tooltip title={i.title}>
              <Button type="primary" disabled={!i.select} ghost>
                {i.title}
              </Button>
            </Tooltip>
          ))}
        </Space>
      );
    },
  });
</script>
<style lang="less" scoped></style>
../../../../store/types
