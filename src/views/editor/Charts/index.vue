<script lang="tsx">
  import { Layout, Menu } from 'ant-design-vue';
  import { defineComponent, watch } from 'vue';
  import { useAsideHook } from './hooks';
  import OptionContent from './components/OptionContent/index.vue';
  export default defineComponent({
    setup() {
      const { selectOptions, selectValue, clickItemHandle, menuOptions } = useAsideHook();
      watch(selectOptions, (val) => {
        console.log(val);
      });
      return () => (
        <>
          <Layout.Sider class="charts-sider h-full overflow-y-auto !bg-elevated" collapsedWidth={60} collapsed>
            <Menu v-model:selectedKeys={selectValue.value} class="h-full" items={menuOptions} onClick={clickItemHandle}></Menu>
          </Layout.Sider>
          {selectOptions.value ? <OptionContent selectOptions={selectOptions.value} key={selectValue.value[0]}></OptionContent> : ''}
        </>
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
