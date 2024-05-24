<script lang="tsx">
  import { computed, defineComponent } from 'vue';
  import { useContextMenu } from './useContextMenu';
  import { useEditStore } from '/@/store/modules/edit';
  import { Divider } from 'ant-design-vue';
  export default defineComponent({
    setup() {
      const { mousePosition, menuOptions } = useContextMenu();
      const editStore = useEditStore();
      const contextMenuStyle = computed(() => {
        return {
          display: editStore.state.rightMenuShow ? 'block' : 'none',
          left: `${mousePosition.x + 10}px`,
          top: `${mousePosition.y + 10}px`,
          transform: document.documentElement.clientHeight - mousePosition.y < 250 ? 'translate(0px, -100%)' : '',
        };
      });
      return () => (
        <div class="context-menu-wrap" style={contextMenuStyle.value}>
          {menuOptions.value.map((i) => (
            <>
              {!i.type && !i.hidden && (
                <div class={['context-menu-item', { disable: i.disabled }]} onClick={() => i.fnHandle()}>
                  {i.label}
                </div>
              )}
              {i.type === 'divider' && <Divider class="m-0"></Divider>}
            </>
          ))}
        </div>
      );
    },
  });
</script>
<style lang="less" scoped>
  .context-menu-wrap {
    position: fixed;
    z-index: 9999;
    display: none;
    width: 111px;
    color: var(--text1);
    background: var(--color-bg-container);
    user-select: none;
    font-size: 12px;
  }

  .context-menu-item {
    display: flex;
    height: 28px;
    padding: 0 6px;
    padding-right: 3em;
    overflow: hidden;
    align-items: center;
    cursor: pointer;
    border-left: 2px solid transparent;

    &:hover {
      color: var(--color-primary);
      background-color: var(--color-primary-bg);
      border-left: 2px solid var(--color-primary-bg-hover);
    }

    .menu-icon {
      margin-right: 4px;
      font-size: 14px;
    }

    &.disable {
      color: var(--color-text-disabled);
      pointer-events: none;
      cursor: auto;
    }
  }

  .context-menu-divider {
    width: 100%;
    height: 1px;
    // background-color: var(--datav-border-color);
  }
</style>
