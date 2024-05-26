import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { defineStore } from 'pinia';
import { defaultSetting } from '/@/settings/designSetting';
import { AppConfig } from '/#/storage';
import { store } from '/@/store';
import { reactive, ref, watch, CSSProperties } from 'vue';
import { theme as antdTheme } from 'ant-design-vue';
import { Storage } from '/@/utils/storage';
import { StorageEnum } from '/@/enums/storageEnum';
import { GlobalToken } from 'ant-design-vue/es/theme';

export const useAppStore = defineStore('app', () => {
  const { darkAlgorithm, compactAlgorithm } = antdTheme;
  const appConfig = reactive<AppConfig>(Storage.getLocal(StorageEnum.APP_CONFIG) || defaultSetting);
  const themeConfig = reactive<ThemeConfig>({
    algorithm: appConfig.darkTheme ? [darkAlgorithm, compactAlgorithm] : compactAlgorithm,
    token: {
      colorPrimary: appConfig.colorPrimary,
      sizeUnit: 3,
    },
  });
  const locale = ref<string>(appConfig.locale);
  const themeStyle = ref<CSSProperties>({
    background: appConfig.darkTheme ? '#101014' : '#fff',
  });

  watch(appConfig, (val) => {
    if (val.darkTheme) {
      themeStyle.value.background = '#101014';
    } else {
      themeStyle.value.background = '#fff';
    }
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

  function setAppStyle(val: GlobalToken) {
    const style = `
      --color-primary: ${val.colorPrimary};
      --color-primary-bg: ${val.colorPrimaryBg};
      --color-primary-active: ${val.colorPrimaryActive};
      --color-primary-bg-hover: ${val.colorPrimaryBgHover};
      --color-error: ${val.colorError};
      --color-warning: ${val.colorWarning};
      --color-text-disabled: ${val.colorTextDisabled};
      --color-bg-base: ${val.colorBgBase};
      --color-bg-layout: ${val.colorBgLayout};
      --color-bg-elevated: ${val.colorBgElevated};
      --color-bg-container: ${val.colorBgContainer};
      --text1: ${val.colorText};
      --text2: ${val.colorTextSecondary};
      --text3: ${val.colorTextTertiary};
      --text4: ${val.colorTextQuaternary};
    `;
    document.querySelector('html')?.setAttribute('style', style);
  }
  return {
    appConfig,
    theme: themeConfig,
    locale,
    themeStyle,
    setAppStyle,
    toggleLocale,
    toggleTheme,
    toggleColorPrimary,
  };
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
