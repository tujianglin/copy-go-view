<script lang="tsx">
  import { Layout } from 'ant-design-vue';
  import { defineComponent, onMounted } from 'vue';
  import { useLayout } from './hooks';
  import { useContextMenu } from '../ContextMenu/useContextMenu';
  import EditRule from './components/EditRule/index.vue';
  import EditRange from './components/EditRange/index.vue';
  import { useAddKeyboard } from '/@/hooks/events/useKeyboard';

  export default defineComponent({
    setup() {
      const { handleContextMenu } = useContextMenu();
      // 布局处理
      useLayout(async () => {});

      onMounted(() => {
        useAddKeyboard();
      });
      return () => (
        <Layout.Content>
          <div class="wh-full relative overflow-hidden" id="edit-layout">
            <EditRule>
              <div id="edit-content" class="bg-container overflow-hidden" onContextmenu={handleContextMenu}>
                <EditRange></EditRange>
                {/* <div class="relative  bg-cover overflow-hidden"></div> */}
              </div>
            </EditRule>
          </div>
        </Layout.Content>
      );
    },
  });
</script>
<style lang="less" scoped></style>
