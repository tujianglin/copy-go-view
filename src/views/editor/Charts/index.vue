<script lang="tsx">
  import { Layout, Menu } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { useAppStore } from '/@/store/modules/app';
  import { useAsideHook } from './hooks';
  export default defineComponent({
    setup() {
      const appStore = useAppStore();
      const { selectValue, clickItemHandle, menuOptions } = useAsideHook();
      return () => (
        <Layout.Sider class="charts-sider" style={appStore.themeStyle}>
          <Layout.Sider class="h-full" collapsedWidth={60} collapsed style={appStore.themeStyle}>
            <Menu v-model:selectedKeys={selectValue.value} class="h-full" items={menuOptions} onClick={clickItemHandle}></Menu>
          </Layout.Sider>
        </Layout.Sider>
      );
    },
  });
</script>
<style lang="less" scoped>
  .charts-sider {
    :deep(.ant-menu-item) {
      display: flex;
      flex-direction: column;
      height: auto;
      padding-inline: 0;

      &-icon {
        line-height: 0;
        padding-top: 10px;
      }

      .ant-menu-title-content {
        opacity: 1;
        margin-inline-start: 0;
        text-align: center;
      }
      span {
        display: block;
      }
    }
  }
</style>
