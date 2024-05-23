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
    algorithm: appConfig.darkTheme ? [darkAlgorithm, compactAlgorithm] : compactAlgorithm,
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
   * @param lang
   */
  function toggleLocale(lang: string) {
    locale.value = lang;
    appConfig.locale = lang;
    window.location.reload();
  }

  function toggleTheme() {
    appConfig.darkTheme = !appConfig.darkTheme;
    if (!appConfig.darkTheme) {
      themeConfig.algorithm = compactAlgorithm;
    } else {
      themeConfig.algorithm = [darkAlgorithm, compactAlgorithm];
    }
  }

  /**
   * 切换主题色
   * @param color
   */
  function toggleColorPrimary(color: string) {
    appConfig.colorPrimary = color;
    if (themeConfig.token) {
      themeConfig.token.colorPrimary = color;
    }
  }

  function setAppStyle(val) {
    const style = `
      --color-primary: ${val.colorPrimary};
      --color-primary-bg: ${val.colorPrimaryBg};
      --color-primary-active: ${val.colorPrimaryActive};
      --color-primary-bg-hover: ${val.colorPrimaryBgHover};
      --color-error: ${val.colorError};
      --color-warning: ${val.colorWarning};
      --color-text-disabled: ${val.colorTextDisabled};
    `;
    document.querySelector('html')?.setAttribute('style', style);
  }
  return {
    appConfig,
    theme: themeConfig,
    locale,
    setAppStyle,
    toggleLocale,
    toggleTheme,
    toggleColorPrimary,
  };
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
