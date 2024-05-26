import { RequestDataTypeEnum, RequestHttpEnum, RequestContentTypeEnum } from '/@/enums/httpEnum';
import { CreateComponentType, CreateComponentGroupType } from '/@/packages/types';

// 滤镜/背景色/宽高主题等
export enum EditCanvasConfigEnum {
  PROJECT_NAME = 'projectName',
  WIDTH = 'width',
  HEIGHT = 'height',
  CHART_THEME_COLOR = 'chartThemeColor',
  CHART_CUSTOM_THEME_COLOR_INFO = 'chartCustomThemeColorInfo',
  CHART_THEME_SETTING = 'chartThemeSetting',
  BACKGROUND = 'background',
  BACKGROUND_IMAGE = 'backgroundImage',
  SELECT_COLOR = 'selectColor',
  PREVIEW_SCALE_TYPE = 'previewScaleType',
}

// 编辑画布属性
export enum EditCanvasTypeEnum {
  EDIT_LAYOUT_DOM = 'editLayoutDom',
  EDIT_CONTENT_DOM = 'editContentDom',
  OFFSET = 'offset',
  SCALE = 'scale',
  USER_SCALE = 'userScale',
  LOCK_SCALE = 'lockScale',
  IS_CREATE = 'isCreate',
  IS_DRAG = 'isDrag',
  IS_SELECT = 'isSelect',
  IS_CODE_EDIT = 'isCodeEdit',
}
export interface EditCanvasConfigType {
  // 滤镜-启用
  filterShow: boolean;
  // 滤镜-色相
  hueRotate: number;
  // 滤镜-饱和度
  saturate: number;
  // 滤镜-亮度
  brightness: number;
  // 滤镜-对比度
  contrast: number;
  // 滤镜-不透明度
  opacity: number;
  // 变换（暂不使用）
  rotateZ: number;
  rotateX: number;
  rotateY: number;
  skewX: number;
  skewY: number;
  blendMode: string;
  // ----- 滤镜/背景色/宽高主题等
  // 大屏名称
  projectName?: string;
  // 大屏宽度
  width: number;
  // 大屏高度
  height: number;
  // 背景色
  background?: string;
  // 背景图片
  backgroundImage?: string | null;
  // 图表主题颜色
  chartThemeColor: ChartColorsNameType;
  // 自定义图表主题颜色
  chartCustomThemeColorInfo?: CustomColorsType[];
  // 图表全局配置
  chartThemeSetting: GlobalThemeJsonType;
  // 图表主题颜色
  selectColor: boolean;
  // 预览展示方式
  previewScaleType: PreviewScaleEnum;
}
// 编辑区域
export type EditCanvasType = {
  // 编辑区域 DOM
  editLayoutDom: HTMLElement | null;
  editContentDom: HTMLElement | null;
  // 偏移大小
  offset: number;
  // 缩放
  scale: number;
  // 缩放
  userScale: number;
  // 锁定缩放
  lockScale: boolean;
  // 初始化创建
  isCreate: boolean;
  // 拖拽中
  isDrag: boolean;
  // 框选中
  isSelect: boolean;
  // 代码编辑中
  isCodeEdit: boolean;
};
// 鼠标位置
export type MousePositionType = {
  // 开始 X
  startX: number;
  // 开始 Y
  startY: number;
  // X
  x: number;
  // y
  y: number;
};
// 操作目标
export type TargetChartType = {
  hoverId?: string;
  selectId: string[];
};
// 数据记录
export type RecordChartType = {
  charts: CreateComponentType | CreateComponentGroupType | Array<CreateComponentType | CreateComponentGroupType>;
  type: HistoryActionTypeEnum.CUT | HistoryActionTypeEnum.COPY;
};
// 数据池项类型
export type RequestDataPondItemType = {
  dataPondId: string;
  dataPondName: string;
  dataPondRequestConfig: RequestConfigType;
};
// 请求公共类型
type RequestPublicConfigType = {
  // 时间单位（时分秒）
  requestIntervalUnit: RequestHttpIntervalEnum;
  // 请求内容
  requestParams: RequestParams;
};
// 全局的图表请求配置
export interface RequestGlobalConfigType extends RequestPublicConfigType {
  // 组件定制轮询时间
  requestInterval: number;
  // 请求源地址
  requestOriginUrl?: string;
  // 公共数据池
  requestDataPond: RequestDataPondItemType[];
}
// 单个图表请求配置
export interface RequestConfigType extends RequestPublicConfigType {
  // 所选全局数据池的对应 id
  requestDataPondId?: string;
  // 组件定制轮询时间
  requestInterval?: number;
  // 获取数据的方式
  requestDataType: RequestDataTypeEnum;
  // 请求方式 get/post/del/put/patch
  requestHttpType: RequestHttpEnum;
  // 源后续的 url
  requestUrl?: string;
  // 请求内容主体方式 普通/sql
  requestContentType: RequestContentTypeEnum;
  // 请求体类型
  requestParamsBodyType: RequestBodyEnum;
  // SQL 请求对象
  requestSQLContent: {
    sql: string;
  };
}
// Store 类型
export interface EditStoreType {
  editCanvas: EditCanvasType;
  editCanvasConfig: EditCanvasConfigType;
  rightMenuShow: boolean;
  mousePosition: MousePositionType;
  targetChart: TargetChartType;
  recordChart?: RecordChartType;
  requestGlobalConfig: RequestGlobalConfigType;
  componentList: Array<CreateComponentType | CreateComponentGroupType>;
}

// 存储数据类型
export interface EditStorage {
  editCanvasConfig: EditCanvasConfigType;
  requestGlobalConfig: RequestGlobalConfigType;
  componentList: Array<CreateComponentType | CreateComponentGroupType>;
}
