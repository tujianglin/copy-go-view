<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import LeftBtn from './components/LeftBtn.vue';
  import Title from './components/Title.vue';
  export default defineComponent({
    setup() {
      return () => (
        <Layout.Header class="flex-between">
          <LeftBtn></LeftBtn>
          <Title></Title>
        </Layout.Header>
      );
    },
  });
</script>
<style lang="less" scoped></style>
