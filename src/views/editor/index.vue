<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { loadAsyncComponent } from '/@/utils/components';
  const Header = loadAsyncComponent(() => import('./Header/index.vue'));

  export default defineComponent({
    setup() {
      return () => (
        <Layout class="h-full">
          <Header></Header>
          <Layout.Content></Layout.Content>
        </Layout>
      );
    },
  });
</script>
<style lang="less" scoped></style>
