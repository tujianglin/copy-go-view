<script lang="tsx">
  import { computed, defineComponent } from 'vue';
  import { Button, Dropdown, Menu } from 'ant-design-vue';
  import type { MenuProps } from 'ant-design-vue';
  import { localeList } from '/@/settings/localeSetting';
  import { useAppStore } from '/@/store/modules/app';
  export default defineComponent({
    setup() {
      const appStore = useAppStore();
      const lang = computed(() => localeList.find((i) => i.key === appStore.locale)?.value);

      const onClick: MenuProps['onClick'] = ({ key }) => {
        appStore.toggleLocale(key as string);
      };
      return () => (
        <Dropdown trigger="click">
          {{
            default: () => <Button>{lang.value}</Button>,
            overlay: () => (
              <Menu onClick={onClick}>
                {localeList.map((i) => (
                  <Menu.Item key={i.key}>{i.value}</Menu.Item>
                ))}
              </Menu>
            ),
          }}
        </Dropdown>
      );
    },
  });
</script>
<style lang="less" scoped></style>
