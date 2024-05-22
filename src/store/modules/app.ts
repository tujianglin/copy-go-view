import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { defineStore } from 'pinia';
import { defaultSetting } from '/@/settings/designSetting';
import { AppConfig } from '/#/storage';
import { store } from '/@/store';
import { reactive, ref, watch } from 'vue';
import { theme as antdTheme } from 'ant-design-vue';
import { Storage } from '/@/utils/storage';
import { StorageEnum } from '/@/enums/storageEnum';

export const useAppStore = defineStore('app', () => {
  const { darkAlgorithm, compactAlgorithm } = antdTheme;

  const appConfig = reactive<AppConfig>(Storage.getLocal(StorageEnum.APP_CONFIG) || defaultSetting);
  const themeConfig = reactive<ThemeConfig>({
    algorithm: [darkAlgorithm, compactAlgorithm],
    token: {
      colorPrimary: appConfig.colorPrimary,
    },
  });
  const locale = ref<string>(appConfig.locale);

  watch(appConfig, (val) => {
    Storage.setLocal(StorageEnum.APP_CONFIG, val);
  });

  /**
   * 切换多语言
   * @param locale
   */
  const toggleLocale = (locale: string) => {
    appConfig.locale = locale;
  };

  /**
   * 切换主题色
   * @param color
   */
  const toggleColorPrimary = (color: string) => {
    appConfig.colorPrimary = color;
    if (themeConfig.token) {
      themeConfig.token.colorPrimary = color;
    }
  };
  return {
    theme: themeConfig,
    locale,
    toggleLocale,
    toggleColorPrimary,
  };
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
