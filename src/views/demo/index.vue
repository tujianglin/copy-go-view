<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Button } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/useI18n';
  import { useAppStore } from '/@/store/modules/app';
  import { useLocale } from '/@/locales/useLocale';
  export default defineComponent({
    setup() {
      const { t } = useI18n();
      const appStore = useAppStore();
      const localeStore = useLocale();
      const changeTheme = () => {
        appStore.toggleColorPrimary('red');
        localeStore.changeLocale('en_US');
      };
      return () => (
        <div>
          <Button type={'primary'} onClick={changeTheme}>
            切换主题色
          </Button>
          {t('layout.header.home')}
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
