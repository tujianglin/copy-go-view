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
  layers: boolean;
  // 图表组件
  charts: boolean;
  // 详情设置
  details: boolean;
  // 组件展示方式
  chartType: ChartModeEnum;
  // 层级展示方式
  layerType: LayerModeEnum;
  // 当前正在加载的数量
  percentage: number;
  // 是否重置当前画布位置
  rePositionCanvas: boolean;
}
