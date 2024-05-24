<script lang="tsx">
  import { defineComponent, watch } from 'vue';
  import { RouterView } from 'vue-router';
  import { ConfigProvider, App, theme } from 'ant-design-vue';
  import 'dayjs/locale/zh-cn';
  import { useLocale } from '/@/locales/useLocale';
  import { useAppStore } from '/@/store/modules/app';
  export default defineComponent({
    setup() {
      const appStore = useAppStore();
      const { getAntdLocale } = useLocale();
      const { token } = theme.useToken();
      watch(
        token,
        (val) => {
          appStore.setAppStyle(val);
        },
        {
          deep: true,
        },
      );

      return () => (
        <ConfigProvider locale={getAntdLocale.value} theme={appStore.theme}>
          <App class="h-full relative">
            <RouterView></RouterView>
          </App>
        </ConfigProvider>
      );
    },
  });
</script>
<style lang="less">
  #app {
    width: 100%;
    height: 100%;
  }
</style>
