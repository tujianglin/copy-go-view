import { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { AppConfig } from '/#/storage';

export const defaultSetting: AppConfig = {
  /* 主题色 */
  colorPrimary: '#3b8e8e',
  /* 多语言 */
  locale: 'zh_CN',
  collapsed: false,
};

/* 默认 主题颜色 */
export const colorPrimary = '#1890ff';

/* app 主题颜色列表 */
export const APP_PRESET_COLOR_LIST: string[] = [colorPrimary, '#0084f4', '#009688', '#536dfe', '#ff5c93', '#ee4f12', '#0096c7', '#9c27b0', '#ff9800'];

/* 主题配置 */
export const defThemeToken: ThemeConfig['token'] = {
  colorPrimary,
  borderRadius: 2,
};
