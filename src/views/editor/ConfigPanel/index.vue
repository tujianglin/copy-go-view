<script lang="tsx">
  import { Layout, Tabs } from 'ant-design-vue';
  import { defineComponent, ref, watch } from 'vue';
  import { useLayoutStore } from '/@/store/modules/layout';
  import { LayoutStoreEnum } from '/@/store/types';
  import { useEditStore } from '/@/store/modules/edit';
  import { TabsEnum } from './types';
  import { loadAsyncComponent } from '/@/utils/components';
  import { h } from 'vue';
  const CanvasPage = loadAsyncComponent(() => import('./components/CanvasPage/index.vue'));
  const ChartThemeColor = loadAsyncComponent(() => import('./components/ChartThemeColor/index.vue'));
  const ChartSetting = loadAsyncComponent(() => import('./components/ChartSetting/index.vue'));
  const ChartAnimation = loadAsyncComponent(() => import('./components/ChartAnimation/index.vue'));

  export default defineComponent({
    setup() {
      const layoutStore = useLayoutStore();
      const editStore = useEditStore();
      const collapsed = ref(layoutStore.state.charts);
      const tabsSelect = ref<TabsEnum>(TabsEnum.CHART_SETTING);
      const selectTarget = ref();

      watch(
        () => editStore.state.targetChart.selectId,
        (val) => {
          // 排除多个
          if (val.length !== 1) {
            selectTarget.value = undefined;
            return;
          }
          const target = editStore.state.componentList[editStore.fetchTargetIndex()];
          if (target?.isGroup) {
            tabsSelect.value = TabsEnum.CHART_SETTING;
          }
          selectTarget.value = target;
        },
      );

      watch(
        () => layoutStore.state.details,
        (val) => {
          if (val) {
            collapsedHandle();
          } else {
            expandHandle();
          }
        },
      );

      function collapsedHandle() {
        collapsed.value = true;
        layoutStore.setItem(LayoutStoreEnum.DETAILS, true);
      }

      function expandHandle() {
        collapsed.value = false;
        layoutStore.setItem(LayoutStoreEnum.DETAILS, false);
      }

      // 页面设置
      const globalTabList = [
        {
          key: TabsEnum.PAGE_SETTING,
          title: '页面配置',
          render: CanvasPage,
        },
        {
          key: TabsEnum.CHART_THEME,
          title: '主题颜色',
          render: ChartThemeColor,
        },
      ];

      const chartsDefaultTabList = [
        {
          key: TabsEnum.CHART_SETTING,
          title: '定制',
          render: ChartSetting,
        },
        {
          key: TabsEnum.CHART_ANIMATION,
          title: '动画',
          render: ChartAnimation,
        },
      ];

      const chartsTabList = [
        ...chartsDefaultTabList,
        {
          key: TabsEnum.CHART_DATA,
          title: '数据',
          render: '',
        },
        {
          key: TabsEnum.CHART_EVENT,
          title: '事件',
          render: '',
        },
      ];
      return () => (
        <Layout.Sider class="charts-sider h-full overflow-y-auto !bg-elevated" collapsedWidth={0} width={350} v-model:collapsed={layoutStore.state.details}>
          {!selectTarget.value ? (
            <Tabs class="h-full" centered>
              {globalTabList.map((i) => (
                <Tabs.TabPane key={i.key} tab={i.title}>
                  {h(i.render)}
                </Tabs.TabPane>
              ))}
            </Tabs>
          ) : (
            <Tabs class="h-full" centered>
              {(selectTarget.value?.isGroup ? chartsDefaultTabList : chartsTabList).map((i) => (
                <Tabs.TabPane key={i.key} tab={i.title}>
                  {i.render ? h(i.render) : '111'}
                </Tabs.TabPane>
              ))}
            </Tabs>
          )}
        </Layout.Sider>
      );
    },
  });
</script>
<style lang="less" scoped>
  :deep(.ant-tabs-content) {
    height: 100%;
  }
</style>
