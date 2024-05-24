<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { useLayoutStore } from '/@/store/modules/layout';
  export default defineComponent({
    setup() {
      const layoutStore = useLayoutStore();
      return () => (
        <Layout.Sider class="charts-sider  b-l b-solid b-layout h-full overflow-y-auto !bg-elevated" width={200} collapsedWidth={0} collapsed={!layoutStore.state.layers}>
          11
        </Layout.Sider>
      );
    },
  });
</script>
<style lang="less" scoped></style>
