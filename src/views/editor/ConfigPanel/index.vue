<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent, ref, watch } from 'vue';
  import { useLayoutStore } from '/@/store/modules/layout';
  import { LayoutStoreEnum } from '/@/store/types';
  export default defineComponent({
    setup() {
      const layoutStore = useLayoutStore();
      const collapsed = ref(layoutStore.state.charts);

      const collapsedHandle = () => {
        collapsed.value = true;
        layoutStore.setItem(LayoutStoreEnum.DETAILS, true);
      };

      const expandHandle = () => {
        collapsed.value = false;
        layoutStore.setItem(LayoutStoreEnum.DETAILS, false);
      };

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
      return () => <Layout.Sider class="charts-sider h-full overflow-y-auto !bg-elevated" collapsedWidth={0} v-model:collapsed={layoutStore.state.details}></Layout.Sider>;
    },
  });
</script>
<style lang="less" scoped></style>
