export enum ChartModeEnum {
  SINGLE = 'single',
  DOUBLE = 'double',
}

export enum LayerModeEnum {
  THUMBNAIL = 'thumbnail',
  TEXT = 'text',
}

export enum LayoutStoreEnum {
  LAYERS = 'layers',
  CHARTS = 'charts',
  DETAILS = 'details',
  Chart_TYPE = 'chartType',
  LAYER_TYPE = 'layerType',
  PERCENTAGE = 'percentage',
  RE_POSITION_CANVAS = 'rePositionCanvas',
}
export interface LayoutStoreType {
  // 图层控制
  [LayoutStoreEnum.LAYERS]: boolean;
  // 图表组件
  [LayoutStoreEnum.CHARTS]: boolean;
  // 详情设置
  [LayoutStoreEnum.DETAILS]: boolean;
  // 组件展示方式
  [LayoutStoreEnum.Chart_TYPE]: ChartModeEnum;
  // 层级展示方式
  [LayoutStoreEnum.LAYER_TYPE]: LayerModeEnum;
  // 当前正在加载的数量
  [LayoutStoreEnum.PERCENTAGE]: number;
  // 是否重置当前画布位置
  [LayoutStoreEnum.RE_POSITION_CANVAS]: boolean;
}
