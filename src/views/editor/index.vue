<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { loadAsyncComponent } from '/@/utils/components';
  const Header = loadAsyncComponent(() => import('./Header/index.vue'));
  const Charts = loadAsyncComponent(() => import('./Charts/index.vue'));

  export default defineComponent({
    setup() {
      return () => (
        <Layout class="h-full">
          <Header></Header>
          <Layout>
            <Charts></Charts>
            <Layout.Content></Layout.Content>
          </Layout>
        </Layout>
      );
    },
  });
</script>
<style lang="less" scoped></style>
