<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { loadAsyncComponent } from '/@/utils/components';
  const Header = loadAsyncComponent(() => import('./Header/index.vue'));
  const ComponentPanel = loadAsyncComponent(() => import('./ComponentPanel/index.vue'));
  const LayerPanel = loadAsyncComponent(() => import('./LayerPanel/index.vue'));
  const CanvasMain = loadAsyncComponent(() => import('./CanvasMain/index.vue'));
  const ConfigPanel = loadAsyncComponent(() => import('./ConfigPanel/index.vue'));
  const ContextMenu = loadAsyncComponent(() => import('./ContextMenu/index.vue'));

  export default defineComponent({
    setup() {
      return () => (
        <Layout class="h-full">
          <Header></Header>
          <Layout>
            <ComponentPanel></ComponentPanel>
            <LayerPanel></LayerPanel>
            <Layout>
              <CanvasMain></CanvasMain>
              <ConfigPanel></ConfigPanel>
            </Layout>
          </Layout>
          <ContextMenu></ContextMenu>
        </Layout>
      );
    },
  });
</script>
<style lang="less" scoped></style>
