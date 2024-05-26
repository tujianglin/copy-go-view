import { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { AppConfig } from '/#/storage';
import { PreviewScaleEnum } from '/@/enums/styleEnum';
import { RequestHttpIntervalEnum } from '/@/enums/httpEnum';

export const defaultSetting: AppConfig = {
  darkTheme: true,
  colorPrimary: '#3b8e8e',
  locale: 'zh_CN',
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

// 预览展示方式
export const previewScaleType = PreviewScaleEnum.FIT;

// 数据请求间隔
export const requestInterval = 30;

// 数据请求间隔单位
export const requestIntervalUnit = RequestHttpIntervalEnum.SECOND;

// 工作区域历史记录存储最大数量
export const editHistoryMax = 100;

// 分组名称
export const groupTitle = '分组';

// 图表初始配置(px)
export const chartInitConfig = {
  x: 50,
  y: 50,
  w: 500,
  h: 300,
  // 不建议动 offset
  offsetX: 0,
  offsetY: 0,
};

// 拖拽时蒙层的 z-index，需比所有图表高
export const canvasModelIndex = 9999;

// 框选时蒙层的 z-index，需比所有图表高
export const selectBoxIndex = canvasModelIndex + 10;

// 工作台大屏背景图片大小限制（5M）
export const backgroundImageSize = 5;
