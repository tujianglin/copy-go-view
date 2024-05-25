<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import EditRule from './components/EditRule/index.vue';
  import { useLayout } from './hooks';
  export default defineComponent({
    setup() {
      // 布局处理
      useLayout(async () => {});
      return () => (
        <Layout.Content>
          <div class="wh-full relative overflow-hidden" id="edit-layout">
            <EditRule>
              <div id="edit-content"></div>
            </EditRule>
          </div>
        </Layout.Content>
      );
    },
  });
</script>
<style lang="less" scoped></style>
