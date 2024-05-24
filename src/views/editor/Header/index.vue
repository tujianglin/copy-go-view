<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { loadAsyncComponent } from '/@/utils/components';

  const LeftBtn = loadAsyncComponent(() => import('./components/LeftBtn.vue'));
  const Title = loadAsyncComponent(() => import('./components/Title.vue'));
  const RightBtn = loadAsyncComponent(() => import('./components/RightBtn.vue'));

  export default defineComponent({
    setup() {
      return () => (
        <Layout.Header class="!p-inline-0 !bg-elevated">
          <div class="flex-between px-3">
            <LeftBtn></LeftBtn>
            <Title></Title>
            <RightBtn></RightBtn>
          </div>
          <div class="bd-layout relative z-99"></div>
        </Layout.Header>
      );
    },
  });
</script>
<style lang="less" scoped></style>
