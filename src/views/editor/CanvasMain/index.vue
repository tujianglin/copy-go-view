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
              <div id="edit-content" class="overflow-hidden transition-all-400" onContextmenu={handleContextMenu}>
                <EditRange class="transition-all-400">
                  <div class="wh-full relative bg-cover overflow-hidden bg-container"></div>
                </EditRange>
              </div>
            </EditRule>
          </div>
        </Layout.Content>
      );
    },
  });
</script>
<style lang="less" scoped>
  #edit-layout {
    background-image: linear-gradient(var(--color-bg-layout) 14px, transparent 0), linear-gradient(90deg, transparent 14px, var(--color-primary-active) 0);
    background-size:
      15px 15px,
      15px 15px;
    #edit-content {
      box-shadow: 0 8px 10px rgba(30, 30, 30, 0.1215686275);
    }
  }
</style>
