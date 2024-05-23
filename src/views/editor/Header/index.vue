<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { loadAsyncComponent } from '/@/utils/components';
  import { useAppStore } from '/@/store/modules/app';

  const LeftBtn = loadAsyncComponent(() => import('./components/LeftBtn.vue'));
  const Title = loadAsyncComponent(() => import('./components/Title.vue'));
  const RightBtn = loadAsyncComponent(() => import('./components/RightBtn.vue'));

  export default defineComponent({
    setup() {
      const appStore = useAppStore();
      return () => (
        <Layout.Header class="flex-between !p-inline-4" style={{ background: appStore.appConfig.darkTheme ? '#101014' : '#fff' }}>
          <LeftBtn></LeftBtn>
          <Title></Title>
          <RightBtn></RightBtn>
        </Layout.Header>
      );
    },
  });
</script>
<style lang="less" scoped></style>
