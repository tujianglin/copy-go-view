import { ChartList } from '/@/packages/components/Charts';
import { ConfigType, FetchComFlagType, PackagesType } from './index.d';

const indexModules: Record<string, { default: string }> = import.meta.glob('./components/**/index.vue', {
  eager: true,
});

const configModules: Record<string, { default: string }> = import.meta.glob('./components/**/config.vue', {
  eager: true,
});

export const packagesList: PackagesType = {
  Charts: ChartList,
  Tables: [],
  Informations: [],
  Photos: [],
  Icons: [],
  Decorates: [],
};

// 组件缓存, 可以大幅度提升组件加载速度
const componentCacheMap = new Map<string, any>();
const loadConfig = (packageName: string, categoryName: string, keyName: string) => {
  const key = packageName + categoryName + keyName;
  if (!componentCacheMap.has(key)) {
    componentCacheMap.set(key, import(`./components/${packageName}/${categoryName}/${keyName}/config.ts`));
  }
  return componentCacheMap.get(key);
};

/**
 * * 获取组件
 * @param {string} chartName 名称
 * @param {FetchComFlagType} flag 标识 0为展示组件, 1为配置组件
 */
const fetchComponent = (chartName: string, flag: FetchComFlagType) => {
  const module = flag === FetchComFlagType.VIEW ? indexModules : configModules;
  for (const key in module) {
    const urlSplit = key.split('/');
    if (urlSplit[urlSplit.length - 2] === chartName) {
      return module[key];
    }
  }
};

/**
 * * 获取展示组件
 * @param {ConfigType} dropData 配置项
 */
export const fetchChartComponent = (dropData: ConfigType) => {
  const { key } = dropData;
  return fetchComponent(key, FetchComFlagType.VIEW)?.default;
};

/**
 * * 获取目标组件配置信息
 * @param targetData
 */
export const createComponent = async (targetData: ConfigType) => {
  const { redirectComponent, category, key } = targetData;
  // redirectComponent 是给图片组件库和图标组件库使用的
  if (redirectComponent) {
    const [packageName, categoryName, keyName] = redirectComponent.split('/');
    const redirectChart = await loadConfig(packageName, categoryName, keyName);
    return new redirectChart.default();
  }
  const chart = await loadConfig(targetData.package, category, key);
  return new chart.default();
};
