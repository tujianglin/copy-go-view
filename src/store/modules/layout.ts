import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { LayoutStoreType, ChartModeEnum, LayerModeEnum } from '../types';
import { Storage } from '/@/utils/storage';
import { StorageEnum } from '/@/enums/storageEnum';
import { useEditStore } from './edit';

const editStore = useEditStore();

const storageChartLayout: Partial<LayoutStoreType> = Storage.getLocal(StorageEnum.LAYOUT_CONFIG);

export const useLayoutStore = defineStore('layout', () => {
  const state = reactive<LayoutStoreType>({
    // 图层控制
    layers: true,
    // 图表组件
    charts: true,
    // 详情设置（收缩为true）
    details: false,
    // 组件列表展示类型（默认单列）
    chartType: ChartModeEnum.SINGLE,
    // 图层类型（默认图片）
    layerType: LayerModeEnum.THUMBNAIL,
    // 当前加载数量
    percentage: 0,
    // 是否重置当前画布位置
    rePositionCanvas: false,
    // 防止值不存在
    ...storageChartLayout,
  });
  function setItem<T extends keyof LayoutStoreType, K extends LayoutStoreType[T]>(key: T, value: K, computedScale = true) {
    state[key] = value;
    // 存储本地
    Storage.setLocal(StorageEnum.LAYOUT_CONFIG, state);
    // 这里需要标记重置画布位置
    state.rePositionCanvas = true;
    // 重新计算拖拽区域缩放比例
    if (computedScale) {
      setTimeout(() => {
        editStore.computedScale();
      }, 500);
    }
  }
  return {
    state,
    setItem,
  };
});
