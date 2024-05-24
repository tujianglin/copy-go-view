<script lang="tsx">
  import { Button, Divider, Space, Tooltip } from 'ant-design-vue';
  import { Ref, computed, defineComponent, reactive } from 'vue';
  import { LayoutStoreEnum, HistoryStackEnum } from '/@/store/types';
  import { useHistoryStore } from '/@/store/modules/history';
  import { useLayoutStore } from '/@/store/modules/layout';
  import { storeToRefs } from 'pinia';
  import { useEditStore } from '/@/store/modules/edit';
  interface ItemType<T = any> {
    key: T;
    select: Ref<boolean> | boolean;
    title: string;
  }
  export default defineComponent({
    setup() {
      const layoutStore = useLayoutStore();
      const editStore = useEditStore();
      const { state } = storeToRefs(layoutStore);
      const historyStore = useHistoryStore();
      const btnList = computed<ItemType<LayoutStoreEnum>[]>(() => {
        return [
          {
            key: LayoutStoreEnum.CHARTS,
            select: state.value[LayoutStoreEnum.CHARTS],
            title: '图表组件',
          },
          {
            key: LayoutStoreEnum.LAYERS,
            select: state.value[LayoutStoreEnum.LAYERS],
            title: '图层控制',
          },
          {
            key: LayoutStoreEnum.DETAILS,
            select: state.value[LayoutStoreEnum.DETAILS],
            title: '详情设置',
          },
        ];
      });
      const isBackStack = computed(() => historyStore.state.backStack.length > 0);

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

      function styleHandle(item: ItemType<LayoutStoreEnum>) {
        if (item.key === LayoutStoreEnum.DETAILS) {
          return item.select ? 'default' : 'primary';
        }
        return item.select ? 'primary' : 'default';
      }
      function onClick(i: ItemType) {
        layoutStore.setItem(i.key, !i.select);
      }
      function onClickHistory(item: ItemType<HistoryStackEnum>) {
        switch (item.key) {
          case HistoryStackEnum.BACK_STACK:
            editStore.setBack();
            break;
          case HistoryStackEnum.FORWARD_STACK:
            editStore.setForward();
            break;
        }
      }
      return () => (
        <Space>
          {btnList.value.map((i) => (
            <Tooltip title={i.title}>
              <Button type={styleHandle(i)} onClick={() => onClick(i)}>
                {i.title}
              </Button>
            </Tooltip>
          ))}
          <Divider type="vertical"></Divider>
          {historyList.map((i) => (
            <Tooltip title={i.title}>
              <Button type="primary" disabled={!i.select} onClick={() => onClickHistory(i)}>
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
