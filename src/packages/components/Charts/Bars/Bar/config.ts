import { echartOptionProfixHandle, PublicConfigClass } from '/@/packages/public';
import { BarConfig } from './index';
import { CreateComponentType } from '/@/packages/types';
import { cloneDeep } from 'lodash-es';
import dataJson from './data.json';

export const includes = ['legend', 'xAxis', 'yAxis', 'grid'];
export const seriesItem = {
  type: 'bar',
  barWidth: 15,
  label: {
    show: true,
    position: 'top',
    color: '#fff',
    fontSize: 12,
  },
  itemStyle: {
    color: null,
    borderRadius: 2,
  },
};
export const option = {
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      show: true,
      type: 'shadow',
    },
  },
  xAxis: {
    show: true,
    type: 'category',
  },
  yAxis: {
    show: true,
    type: 'value',
  },
  dataset: { ...dataJson },
  series: [seriesItem, seriesItem],
};

export default class Config extends PublicConfigClass implements CreateComponentType {
  public key = BarConfig.key;
  public chartConfig = cloneDeep(BarConfig);
  // 图表配置项
  public option = echartOptionProfixHandle(option, includes);
}
