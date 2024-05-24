<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { loadAsyncComponent } from '/@/utils/components';
  const Header = loadAsyncComponent(() => import('./Header/index.vue'));
  const Charts = loadAsyncComponent(() => import('./Charts/index.vue'));
  const Layers = loadAsyncComponent(() => import('./Layers/index.vue'));
  const ContextMenu = loadAsyncComponent(() => import('./ContextMenu/index.vue'));

  export default defineComponent({
    setup() {
      return () => (
        <Layout class="h-full">
          <Header></Header>
          <Layout>
            <Charts></Charts>
            <Layers></Layers>
          </Layout>
          <ContextMenu></ContextMenu>
        </Layout>
      );
    },
  });
</script>
<style lang="less" scoped></style>
