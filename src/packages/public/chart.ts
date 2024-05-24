import { merge, pick } from 'lodash-es';
import { globalThemeJson } from '/@/settings/chartSetting';

/**
 * 合并 color 和全局配置项
 * @param option
 * @param themeSetting
 * @param includes
 * @returns
 */
export const mergeTheme = <T, U>(option: T, themeSetting: U, includes: string[]) => {
  return (option = merge({}, pick(themeSetting, includes), option));
};

/**
 * ECharts option 统一前置处理
 * @param option
 * @return option
 */
export const echartOptionProfixHandle = (option: any, includes: string[]) => {
  option['backgroundColor'] = 'rgba(0,0,0,0)';
  return mergeTheme(option, globalThemeJson, includes);
};
