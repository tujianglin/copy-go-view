/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Alarm */
export interface Alarm {
  /** @format int32 */
  alarmNum?: number;
  /** @format date-time */
  alarmTime?: string;
}

/** BladeFile */
export interface BladeFile {
  attachId?: string;
  domain?: string;
  fullLink?: string;
  link?: string;
  name?: string;
  originalName?: string;
}

/** ChartDataTableVO */
export interface ChartDataTableVO {
  data?: IChartTableItem[];
  header?: object;
}

/** ChartGanttStatusDataVO */
export interface ChartGanttStatusDataVO {
  colorStatusInfo?: ColorStatus[];
  series?: SeriesItemGanttStatusVO[];
}

/** ChartNameValueDataVO */
export interface ChartNameValueDataVO {
  data?: MapStringObject[];
}

/** ChartSeriesDataVO */
export interface ChartSeriesDataVO {
  categories?: object[];
  categoriesExtra?: object[][];
  series?: SeriesItemSerializable[];
}

/** ColorStatus */
export interface ColorStatus {
  color?: string;
  /** @format int32 */
  status?: number;
  statusName?: string;
}

/** CompTypeTreeVO */
export interface CompTypeTreeVO {
  children?: CompTypeTreeVO[];
  /** 编码 */
  code?: string;
  /** 可点击 */
  disable?: boolean;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /** 非业务类 */
  notBiz?: boolean;
  /** 图表类型 */
  owningChart?: string;
  parentId?: string;
  /** url */
  url?: string;
  /**
   * url的类型GET POST
   * @format int32
   */
  urlType?: number;
}

/** DropDownVO */
export interface DropDownVO {
  id?: string;
  label?: string;
  name?: string;
  value?: string;
}

/** DynamicModel */
export interface DynamicModel {
  id?: string;
  sql?: string;
}

/** FmsArea */
export interface FmsArea {
  code?: string;
  id?: string;
  locationList?: FmsAreaLocation[];
  name?: string;
}

/** FmsAreaLocation */
export interface FmsAreaLocation {
  code?: string;
  id?: string;
  /** 托盘号 */
  trayCode?: string;
}

/** FmsWorkBench */
export interface FmsWorkBench {
  id?: string;
  /** 工作台名称 */
  name?: string;
  /** 托盘编码 */
  palletCode?: string;
  /**
   * 工作台顺序
   * @format int32
   */
  sort?: number;
  state?: string;
}

/** FmsWorkstation */
export interface FmsWorkstation {
  alarmInfo?: Alarm;
  code?: string;
  color?: string;
  id?: string;
  name?: string;
  programmName?: string;
  state?: string;
  time?: string;
  toolStatus?: string;
  ts?: string;
  workBenchList?: FmsWorkBench[];
  /** @format int32 */
  workType?: number;
}

/** GanttStatusVO */
export interface GanttStatusVO {
  endTime?: Timestamp;
  startTime?: Timestamp;
  /** @format int32 */
  status?: number;
}

/** IChartTableItem */
export interface IChartTableItem {
  title?: string;
}

/** OutputRankQueryVO */
export interface OutputRankQueryVO {
  /**
   * 结束时间
   * @format date
   */
  endDate?: string;
  /**
   * 排名
   * @format int32
   */
  rankCount?: number;
  /**
   * 开始时间
   * @format date
   */
  startDate?: string;
}

/**
 * R
 * 返回信息
 */
export interface R {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: object;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/** Serializable */
export type Serializable = object;

/** ThemeApiBizThreeVO */
export interface ThemeApiBizThreeVO {
  /**
   * 应用类型 1:标准大屏 2:实况产线
   * @format int32
   */
  applicationType?: number;
  bizType?: string;
  children?: ThemeApiBizThreeVO[];
  hasChildren?: boolean;
  id?: string;
  /** 名称 */
  name?: string;
  parentId?: string;
  /** 主题id */
  themeId?: string;
  /** 缩略图 */
  thumb?: string;
  /** url */
  url?: string;
}

/** TimeStatusVO */
export interface TimeStatusVO {
  /** 时间等级 */
  timeLevel?: string;
  /**
   * 设备top数据
   * @format int32
   */
  top?: number;
  /**
   * 工位id集合
   * @maxItems 2147483647
   * @minItems 1
   */
  workStationIdList?: string[];
}

/** Timestamp */
export interface Timestamp {
  /** @format int32 */
  date?: number;
  /** @format int32 */
  day?: number;
  /** @format int32 */
  hours?: number;
  /** @format int32 */
  minutes?: number;
  /** @format int32 */
  month?: number;
  /** @format int32 */
  nanos?: number;
  /** @format int32 */
  seconds?: number;
  /** @format int64 */
  time?: number;
  /** @format int32 */
  timezoneOffset?: number;
  /** @format int32 */
  year?: number;
}

/** VisualApiDataVO */
export interface VisualApiDataVO {
  /** url */
  apiUrl?: string;
  /** 接口中文名 */
  apiUrlName?: string;
  /** 接口类型 0 - POST； 1 - PUT； 2 - GET */
  apiUrlType?: string;
  /** 业务分类 */
  bizType?: string;
  /**
   * 父级业务分类
   * @format int32
   */
  interfaceParentBizType?: number;
  /** 1图表类型 bar-柱状 line-折线图 pie-饼图 GanttChart 甘特图 table-表格 */
  owningChart?: string;
}

/** VisualBaseVO */
export interface VisualBaseVO {
  /** 时间等级 */
  timeLevel?: string;
  /**
   * 工位id集合
   * @maxItems 2147483647
   * @minItems 1
   */
  workStationIdList?: string[];
}

/**
 * VisualCompMenuDetailVO
 * 大屏组件分类加组件列表
 */
export interface VisualCompMenuDetailVO {
  /** 组件或者分类 */
  children?: VisualCompMenuDetailVO[];
  hasChildren?: boolean;
  /** 图表 */
  icon?: string;
  id?: string;
  /** 名称 */
  label?: string;
  option?: string;
  /** 父类型ID */
  parentId?: string;
  /** 类型 */
  type?: string;
  /** 缩略图地址 */
  url?: string;
}

/** VisualDTO */
export interface VisualDTO {
  /** 可视化配置表 */
  config?: VisualConfig;
  globalApiId?: string[];
  nextId?: string;
  prevId?: string;
  /** 可视化表 */
  visual?: Visual;
}

/** VisualDbDTO */
export interface VisualDbDTO {
  /** 驱动类 */
  driverClass?: string;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
}

/** VisualInfoVO */
export interface VisualInfoVO {
  /** 大屏背景 */
  backgroundUrl?: string;
  /** 大屏详情 */
  component?: string;
  /** 大屏详情detail */
  detail?: string;
  /** 大屏标题 */
  title?: string;
}

/** VisualSingleBaseVO */
export interface VisualSingleBaseVO {
  /** 时间等级 */
  timeLevel?: string;
  /** 工位id */
  workStationId?: string;
}

/** VisualSqlVO */
export interface VisualSqlVO {
  /** 自定义sql字符串，区分大小写 */
  sql?: string;
}

/** VisualThemeComponentCopyVO */
export interface VisualThemeComponentCopyVO {
  originId?: string;
  targetApiUrl?: string;
  targetDisplayName?: string;
}

/** VisualThemeComponentCreateVO */
export interface VisualThemeComponentCreateVO {
  apiUrl?: string;
  /** @format int32 */
  applicationType?: number;
  displayName?: string;
  themeId?: string;
  thumb?: string;
}

/** VisualThemeComponentUpdateVO */
export interface VisualThemeComponentUpdateVO {
  apiUrl?: string;
  /** @format int32 */
  applicationType?: number;
  config?: string;
  displayName?: string;
  id?: string;
  thumb?: string;
  visionComponents?: string[];
}

/** VisualThemeComponentVO */
export interface VisualThemeComponentVO {
  apiType?: string;
  apiUrl?: string;
  /** @format int32 */
  applicationType?: number;
  config?: string;
  displayName?: string;
  id?: string;
  themeId?: string;
  thumb?: string;
  visionComponents?: string[];
}

/** VisualThemeImportVO */
export interface VisualThemeImportVO {
  /** 缺少接口数据列表 */
  missingApiDataList?: VisualApiDataVO[];
  /** 缺少接口列表 */
  missingApiList?: string[];
  /** 缺少组件列表 */
  missingComponentList?: string[];
  /**
   * 状态：0-成功，1-是否覆盖，2-错误
   * @format int32
   */
  status?: number;
}

/** VisualTimeTypeVO */
export interface VisualTimeTypeVO {
  /**
   * 日1/周2/月3
   * @format int32
   */
  timeType?: number;
  /**
   * 工位id集合
   * @maxItems 2147483647
   * @minItems 1
   */
  workStationIdList?: string[];
}

/** VisualTimeVO */
export interface VisualTimeVO {
  /** 时间等级 */
  timeLevel?: string;
  /**
   * 日1/周2/月3
   * @format int32
   */
  timeType?: number;
  /**
   * 工位id集合
   * @maxItems 2147483647
   * @minItems 1
   */
  workStationIdList?: string[];
}

/** WorkStationTreeVO */
export interface WorkStationTreeVO {
  children?: WorkStationTreeVO[];
  hasChildren?: boolean;
  id?: string;
  isGroup?: boolean;
  key?: string;
  parentId?: string;
  title?: string;
  value?: string;
}

/** WorkstationCountVisualQueryVO */
export interface WorkstationCountVisualQueryVO {
  /** 查询策略 */
  policy?: 'HOUR' | 'DAY' | 'SHIFT';
  /** 时间等级 */
  timeLevel?: string;
  /** 数据标签 */
  usageCode?: string;
  /**
   * 工位列表
   * @maxItems 2147483647
   * @minItems 1
   */
  workStationIdList?: string[];
}

/** WorkstationShiftOutput */
export interface WorkstationShiftOutput {
  /** 工位id集合 */
  workStationIdList?: string[];
}

/** ChartSeriesDataVO«int» */
export interface ChartSeriesDataVOInt {
  categories?: object[];
  categoriesExtra?: object[][];
  series?: SeriesItemInt[];
}

/** ChartSeriesDataVO«long» */
export interface ChartSeriesDataVOLong {
  categories?: object[];
  categoriesExtra?: object[][];
  series?: SeriesItemLong[];
}

/** ChartSeriesDataVO«string» */
export interface ChartSeriesDataVOString {
  categories?: object[];
  categoriesExtra?: object[][];
  series?: SeriesItemString[];
}

/** IPage«VisualCategory对象» */
export interface IPageVisualCategory {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: VisualCategory[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«VisualCompTypeVo对象» */
export interface IPageVisualCompTypeVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: VisualCompTypeVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«VisualCompVo对象» */
export interface IPageVisualCompVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: VisualCompVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«VisualDb对象» */
export interface IPageVisualDb {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: VisualDb[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«VisualGlobalApiVo对象» */
export interface IPageVisualGlobalApiVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: VisualGlobalApiVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«VisualMapVO对象» */
export interface IPageVisualMapVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: VisualMapVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«VisualThemeComponentVO» */
export interface IPageVisualThemeComponentVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: VisualThemeComponentVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«Visual对象» */
export interface IPageVisual {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: Visual[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Map«string,object» */
export type MapStringObject = Record<string, object>;

/** Map«string,object»_1 */
export type MapStringObject1 = Record<string, object>;

/** Map«string,object»_2 */
export type MapStringObject2 = Record<string, object>;

/** Map«string,object»_3 */
export type MapStringObject3 = Record<string, object>;

/** Map«string,object»_4 */
export type MapStringObject4 = Record<string, object>;

/** Map«string,object»_5 */
export type MapStringObject5 = Record<string, object>;

/** Map«string,object»_6 */
export type MapStringObject6 = Record<string, object>;

/** Map«string,object»_7 */
export type MapStringObject7 = Record<string, object>;

/** Map«string,object»_8 */
export type MapStringObject8 = Record<string, object>;

/** Map«string,object»_9 */
export type MapStringObject9 = Record<string, object>;

/**
 * R«BladeFile»
 * 返回信息
 */
export interface RBladeFile {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BladeFile;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ChartDataTableVO»
 * 返回信息
 */
export interface RChartDataTableVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ChartDataTableVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ChartGanttStatusDataVO»
 * 返回信息
 */
export interface RChartGanttStatusDataVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ChartGanttStatusDataVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ChartNameValueDataVO»
 * 返回信息
 */
export interface RChartNameValueDataVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ChartNameValueDataVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ChartSeriesDataVO«int»»
 * 返回信息
 */
export interface RChartSeriesDataVOInt {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ChartSeriesDataVOInt;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ChartSeriesDataVO«long»»
 * 返回信息
 */
export interface RChartSeriesDataVOLong {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ChartSeriesDataVOLong;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ChartSeriesDataVO«string»»
 * 返回信息
 */
export interface RChartSeriesDataVOString {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ChartSeriesDataVOString;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ChartSeriesDataVO»
 * 返回信息
 */
export interface RChartSeriesDataVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ChartSeriesDataVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«VisualCategory对象»»
 * 返回信息
 */
export interface RIPageVisualCategory {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageVisualCategory;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«VisualCompTypeVo对象»»
 * 返回信息
 */
export interface RIPageVisualCompTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageVisualCompTypeVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«VisualCompVo对象»»
 * 返回信息
 */
export interface RIPageVisualCompVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageVisualCompVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«VisualDb对象»»
 * 返回信息
 */
export interface RIPageVisualDb {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageVisualDb;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«VisualGlobalApiVo对象»»
 * 返回信息
 */
export interface RIPageVisualGlobalApiVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageVisualGlobalApiVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«VisualMapVO对象»»
 * 返回信息
 */
export interface RIPageVisualMapVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageVisualMapVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«VisualThemeComponentVO»»
 * 返回信息
 */
export interface RIPageVisualThemeComponentVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageVisualThemeComponentVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«Visual对象»»
 * 返回信息
 */
export interface RIPageVisual {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageVisual;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CompTypeTreeVO»»
 * 返回信息
 */
export interface RListCompTypeTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CompTypeTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DropDownVO»»
 * 返回信息
 */
export interface RListDropDownVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DropDownVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FmsArea»»
 * 返回信息
 */
export interface RListFmsArea {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsArea[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FmsWorkstation»»
 * 返回信息
 */
export interface RListFmsWorkstation {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsWorkstation[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ThemeApiBizThreeVO»»
 * 返回信息
 */
export interface RListThemeApiBizThreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ThemeApiBizThreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VisualCategory对象»»
 * 返回信息
 */
export interface RListVisualCategory {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualCategory[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VisualCompMenuDetailVO»»
 * 返回信息
 */
export interface RListVisualCompMenuDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualCompMenuDetailVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VisualCompTypeVo对象»»
 * 返回信息
 */
export interface RListVisualCompTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualCompTypeVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VisualCompVo对象»»
 * 返回信息
 */
export interface RListVisualCompVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualCompVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VisualDbDTO»»
 * 返回信息
 */
export interface RListVisualDbDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualDbDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VisualGlobalApiVo对象»»
 * 返回信息
 */
export interface RListVisualGlobalApiVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualGlobalApiVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VisualInfoVO»»
 * 返回信息
 */
export interface RListVisualInfoVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualInfoVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VisualThemeComponent对象»»
 * 返回信息
 */
export interface RListVisualThemeComponent {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualThemeComponent[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VisualTheme对象»»
 * 返回信息
 */
export interface RListVisualTheme {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualTheme[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«Visual对象»»
 * 返回信息
 */
export interface RListVisual {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Visual[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkStationTreeVO»»
 * 返回信息
 */
export interface RListWorkStationTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkStationTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List»
 * 返回信息
 */
export interface RList {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: object[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualCategory对象»
 * 返回信息
 */
export interface RVisualCategory {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualCategory;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualCompTypeVo对象»
 * 返回信息
 */
export interface RVisualCompTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualCompTypeVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualCompVo对象»
 * 返回信息
 */
export interface RVisualCompVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualCompVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualDTO»
 * 返回信息
 */
export interface RVisualDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualDb对象»
 * 返回信息
 */
export interface RVisualDb {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualDb;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualGlobalApiVo对象»
 * 返回信息
 */
export interface RVisualGlobalApiVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualGlobalApiVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualMap对象»
 * 返回信息
 */
export interface RVisualMap {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualMap;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualThemeComponentVO»
 * 返回信息
 */
export interface RVisualThemeComponentVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualThemeComponentVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualThemeImportVO»
 * 返回信息
 */
export interface RVisualThemeImportVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualThemeImportVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«VisualTheme对象»
 * 返回信息
 */
export interface RVisualTheme {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VisualTheme1;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«boolean»
 * 返回信息
 */
export interface RBoolean {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: boolean;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«long»
 * 返回信息
 */
export interface RLong {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: string;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«object»
 * 返回信息
 */
export interface RObject {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: object;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/** SeriesItem«GanttStatusVO» */
export interface SeriesItemGanttStatusVO {
  data?: GanttStatusVO[];
  name?: string;
}

/** SeriesItem«Serializable» */
export interface SeriesItemSerializable {
  data?: Serializable[];
  name?: string;
}

/** SeriesItem«int» */
export interface SeriesItemInt {
  data?: number[];
  name?: string;
}

/** SeriesItem«long» */
export interface SeriesItemLong {
  data?: string[];
  name?: string;
}

/** SeriesItem«string» */
export interface SeriesItemString {
  data?: string[];
  name?: string;
}

/**
 * VisualCategory对象
 * 可视化分类表
 */
export interface VisualCategory {
  /** 分类键值 */
  categoryKey?: string;
  /** 分类名称 */
  categoryValue?: string;
  /** 主键 */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
}

/**
 * VisualCompTypeVo对象
 * 大屏组件分类
 */
export interface VisualCompTypeVo {
  children?: VisualCompTypeVo[];
  hasChildren?: boolean;
  icon?: string;
  id?: string;
  /**
   * 分类名称
   * @minLength 0
   * @maxLength 50
   */
  name?: string;
  /**
   * 排序
   * @format int32
   */
  orderNum?: number;
  /** 父类型ID */
  parentId?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  /**
   * 分类类型
   * @minLength 0
   * @maxLength 50
   */
  type?: string;
}

/**
 * VisualCompTypeVo对象_1
 * 大屏组件分类
 */
export interface VisualCompTypeVo1 {
  children?: VisualCompTypeVo2[];
  icon?: string;
  id?: string;
  /**
   * 分类名称
   * @minLength 0
   * @maxLength 50
   */
  name?: string;
  /**
   * 排序
   * @format int32
   */
  orderNum?: number;
  /** 父类型ID */
  parentId?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  /**
   * 分类类型
   * @minLength 0
   * @maxLength 50
   */
  type?: string;
}

/**
 * VisualCompTypeVo对象_2
 * 大屏组件分类
 */
export interface VisualCompTypeVo2 {
  children?: VisualCompTypeVo2[];
  icon?: string;
  id?: string;
  /**
   * 分类名称
   * @minLength 0
   * @maxLength 50
   */
  name?: string;
  /**
   * 排序
   * @format int32
   */
  orderNum?: number;
  /** 父类型ID */
  parentId?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  /**
   * 分类类型
   * @minLength 0
   * @maxLength 50
   */
  type?: string;
}

/**
 * VisualCompVo对象
 * 大屏组件
 */
export interface VisualCompVo {
  /**
   * 组件详情信息
   * @minLength 0
   * @maxLength 65535
   */
  component?: string;
  id?: string;
  /**
   * 组件中文名称
   * @minLength 0
   * @maxLength 50
   */
  name?: string;
  /**
   * 顺序
   * @format int32
   */
  orderNum?: number;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  /**
   * 组件所在目录类别
   * @minLength 0
   * @maxLength 50
   */
  type?: string;
  /** 组件的类型名称 */
  typeName?: string;
  /**
   * 缩略图地址
   * @minLength 0
   * @maxLength 255
   */
  url?: string;
}

/**
 * VisualConfig对象
 * 可视化配置表
 */
export interface VisualConfig {
  /** 组件json */
  component?: string;
  /** 配置json */
  detail?: string;
  /** 主键 */
  id?: string;
  /** 可视化表主键 */
  visualId?: string;
}

/**
 * VisualDb对象
 * 数据源配置表
 */
export interface VisualDb {
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 驱动类 */
  driverClass?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 名称 */
  name?: string;
  /** 密码 */
  password?: string;
  /** 备注 */
  remark?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** 连接地址 */
  url?: string;
  /** 用户名 */
  username?: string;
}

/**
 * VisualGlobalApiVo对象
 * blade_visual_global_api
 */
export interface VisualGlobalApiVo {
  /** 接口id */
  configId?: string;
  /** 接口参数 */
  dataParams?: Record<string, object>;
  /** http头 */
  headers?: Record<string, object>;
  id?: string;
  /**
   * 接口方法
   * @minLength 0
   * @maxLength 20
   */
  method?: string;
  /**
   * 刷新时间
   * @format int32
   */
  time?: number;
  /** 请求地址 */
  url?: string;
  /**
   * 接口名称
   * @minLength 0
   * @maxLength 255
   */
  urlName?: string;
  /**
   * 可视化大屏的ID
   * @minLength 0
   * @maxLength 255
   */
  visualId?: string;
}

/**
 * VisualMapVO对象
 * 可视化地图配置表
 */
export interface VisualMapVO {
  /** 主键 */
  id?: string;
  /** 地图名称 */
  name?: string;
}

/**
 * VisualMap对象
 * 可视化地图配置表
 */
export interface VisualMap {
  /** 地图数据 */
  data?: string;
  /** 主键 */
  id?: string;
  /** 地图名称 */
  name?: string;
}

/**
 * VisualThemeComponent对象
 * 主题组件
 */
export interface VisualThemeComponent {
  /** 接口编号 */
  apiUrl?: string;
  /**
   * 应用类型 1:标准大屏 2:实况产线
   * @format int32
   */
  applicationType?: number;
  /** 配置 */
  config?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 组件名称 */
  displayName?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 主题id */
  themeId?: string;
  /** 缩略图 */
  thumb?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** 大屏元组件 */
  visionComponent?: string;
}

/**
 * VisualTheme对象
 * 主题表
 */
export interface VisualTheme {
  config?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  displayName?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  thumb?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/**
 * VisualTheme对象_1
 * 主题表
 */
export interface VisualTheme1 {
  config?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  displayName?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  thumb?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/**
 * Visual对象
 * 可视化表
 */
export interface Visual {
  /**
   * 应用类型 1:标准大屏 2:实况产线
   * @format int32
   */
  applicationType?: number;
  /** 大屏背景 */
  backgroundUrl?: string;
  /**
   * 大屏类型
   * @format int32
   */
  category?: number;
  /** visual_config.component */
  component?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** visual_config.detail */
  detail?: string;
  /**
   * 组排序
   * @format int32
   */
  groupIndex?: number;
  /** 组名称 */
  groupName?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 手动上传 默认为false
   * @format int32
   */
  manualUpload?: number;
  /** 发布密码 */
  password?: string;
  /** 预览图 */
  previewImage?: string;
  /**
   * 轮播间隔
   * @format int32
   */
  slidingSecond?: number;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 主题编号 */
  themeCode?: string;
  /** 主题是否被删除 */
  themeDeleted?: boolean;
  /** 大屏标题 */
  title?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';
import axios from '/@/utils/http';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios;
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams = ((typeof secure === 'boolean' ? secure : this.secure) && this.securityWorker && (await this.securityWorker(this.securityData))) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title BladeX 接口文档系统
 * @version 2.8.2.RELEASE
 * @license Powered By BladeX (https://bladex.vip)
 * @termsOfService https://bladex.vip
 * @baseUrl //192.168.3.100:31002
 * @contact smallchill <smallchill@163.com> (https://gitee.com/smallc)
 *
 * BladeX 接口文档系统
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  bladeVisual = {
    /**
     * @description 传入visualCategory
     *
     * @tags 可视化分类接口
     * @name VisualCategoryDetail
     * @summary 详情
     * @request GET:/blade-visual/category/detail
     * @secure
     */
    visualCategoryDetail: (
      query?: {
        /** 分类键值 */
        categoryKey?: string;
        /** 分类名称 */
        categoryValue?: string;
        /** 主键 */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RVisualCategory, void>({
        path: `/blade-visual/category/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualCategory
     *
     * @tags 可视化分类接口
     * @name VisualCategoryList
     * @summary 列表
     * @request GET:/blade-visual/category/list
     * @secure
     */
    visualCategoryList: (
      query?: {
        /** 分类键值 */
        categoryKey?: string;
        /** 分类名称 */
        categoryValue?: string;
        /** 主键 */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListVisualCategory, void>({
        path: `/blade-visual/category/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualCategory
     *
     * @tags 可视化分类接口
     * @name VisualCategoryPage
     * @summary 分页
     * @request GET:/blade-visual/category/page
     * @secure
     */
    visualCategoryPage: (
      query?: {
        /** 分类键值 */
        categoryKey?: string;
        /** 分类名称 */
        categoryValue?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 主键 */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageVisualCategory, void>({
        path: `/blade-visual/category/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 可视化分类接口
     * @name VisualCategoryRemove
     * @summary 删除
     * @request POST:/blade-visual/category/remove
     * @secure
     */
    visualCategoryRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-visual/category/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualCategory
     *
     * @tags 可视化分类接口
     * @name VisualCategorySave
     * @summary 新增
     * @request POST:/blade-visual/category/save
     * @secure
     */
    visualCategorySave: (visualCategory: VisualCategory, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/category/save`,
        method: 'POST',
        body: visualCategory,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualCategory
     *
     * @tags 可视化分类接口
     * @name VisualCategoryUpdate
     * @summary 修改
     * @request POST:/blade-visual/category/update
     * @secure
     */
    visualCategoryUpdate: (visualCategory: VisualCategory, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/category/update`,
        method: 'POST',
        body: visualCategory,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化离散工单相关接口
     * @name VisualCoproductionPlanCompletionRate
     * @summary 计划完成率
     * @request GET:/blade-visual/coproduction/plan-completion-rate
     * @secure
     */
    visualCoproductionPlanCompletionRate: (params: RequestParams = {}) =>
      this.request<RChartDataTableVO, void>({
        path: `/blade-visual/coproduction/plan-completion-rate`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 班制数据源接口
     *
     * @tags 可视化数据接口
     * @name VisualDataSourceShiftSystem
     * @summary 班制数据源接口
     * @request GET:/blade-visual/data-source/shift-system
     * @secure
     */
    visualDataSourceShiftSystem: (params: RequestParams = {}) =>
      this.request<RListDropDownVO, void>({
        path: `/blade-visual/data-source/shift-system`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 班制设备数据源接口
     *
     * @tags 可视化数据接口
     * @name VisualDataSourceShiftWorkStation
     * @summary 班制设备数据源接口
     * @request GET:/blade-visual/data-source/shift-workstation
     * @secure
     */
    visualDataSourceShiftWorkStation: (
      query: {
        /** shift */
        shift: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkStationTreeVO, void>({
        path: `/blade-visual/data-source/shift-workstation`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 时间等级数据源接口
     *
     * @tags 可视化数据接口
     * @name VisualDataSourceTimeType
     * @summary 时间等级数据源接口
     * @request GET:/blade-visual/data-source/time-level
     * @secure
     */
    visualDataSourceTimeType: (params: RequestParams = {}) =>
      this.request<RListDropDownVO, void>({
        path: `/blade-visual/data-source/time-level`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 日/月/周
     *
     * @tags 可视化数据接口
     * @name VisualDataSourceTimeTypes
     * @summary 时间类型数据源接口
     * @request GET:/blade-visual/data-source/time-type
     * @secure
     */
    visualDataSourceTimeTypes: (params: RequestParams = {}) =>
      this.request<RListDropDownVO, void>({
        path: `/blade-visual/data-source/time-type`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 工位工位组数据源
     *
     * @tags 可视化数据接口
     * @name VisualDataSourceWorkstationDataSource
     * @summary 工位工位组数据源
     * @request GET:/blade-visual/data-source/workstation
     * @secure
     */
    visualDataSourceWorkstationDataSource: (params: RequestParams = {}) =>
      this.request<RListWorkStationTreeVO, void>({
        path: `/blade-visual/data-source/workstation`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 数据源列表
     *
     * @tags 可视化数据源配置接口
     * @name VisualDbDbList
     * @summary 下拉数据源
     * @request GET:/blade-visual/db/db-list
     * @secure
     */
    visualDbDbList: (params: RequestParams = {}) =>
      this.request<RListVisualDbDTO, void>({
        path: `/blade-visual/db/db-list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 数据源测试连接
     *
     * @tags 可视化数据源配置接口
     * @name VisualDbDbTest
     * @summary 数据源测试连接
     * @request POST:/blade-visual/db/db-test
     * @secure
     */
    visualDbDbTest: (db: VisualDb, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-visual/db/db-test`,
        method: 'POST',
        body: db,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入datasource
     *
     * @tags 可视化数据源配置接口
     * @name VisualDbDetail
     * @summary 详情
     * @request GET:/blade-visual/db/detail
     * @secure
     */
    visualDbDetail: (
      query?: {
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /** 驱动类 */
        driverClass?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 名称 */
        name?: string;
        /** 密码 */
        password?: string;
        /** 备注 */
        remark?: string;
        /**
         * 业务状态
         * @format int32
         */
        status?: number;
        /**
         * 更新时间
         * @format date-time
         */
        updateTime?: string;
        /** 更新人 */
        updateUser?: string;
        /** 连接地址 */
        url?: string;
        /** 用户名 */
        username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RVisualDb, void>({
        path: `/blade-visual/db/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 动态执行SQL
     *
     * @tags 可视化数据源配置接口
     * @name VisualDbDynamicQuery
     * @summary 动态执行SQL
     * @request POST:/blade-visual/db/dynamic-query
     * @secure
     */
    visualDbDynamicQuery: (model: DynamicModel, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/db/dynamic-query`,
        method: 'POST',
        body: model,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入datasource
     *
     * @tags 可视化数据源配置接口
     * @name VisualDbList
     * @summary 分页
     * @request GET:/blade-visual/db/list
     * @secure
     */
    visualDbList: (
      query?: {
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 驱动类 */
        driverClass?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 名称 */
        name?: string;
        /** 密码 */
        password?: string;
        /** 备注 */
        remark?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 业务状态
         * @format int32
         */
        status?: number;
        /**
         * 更新时间
         * @format date-time
         */
        updateTime?: string;
        /** 更新人 */
        updateUser?: string;
        /** 连接地址 */
        url?: string;
        /** 用户名 */
        username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageVisualDb, void>({
        path: `/blade-visual/db/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 可视化数据源配置接口
     * @name VisualDbRemove
     * @summary 逻辑删除
     * @request POST:/blade-visual/db/remove
     * @secure
     */
    visualDbRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-visual/db/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入datasource
     *
     * @tags 可视化数据源配置接口
     * @name VisualDbSave
     * @summary 新增
     * @request POST:/blade-visual/db/save
     * @secure
     */
    visualDbSave: (db: VisualDb, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/db/save`,
        method: 'POST',
        body: db,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入datasource
     *
     * @tags 可视化数据源配置接口
     * @name VisualDbSubmit
     * @summary 新增或修改
     * @request POST:/blade-visual/db/submit
     * @secure
     */
    visualDbSubmit: (db: VisualDb, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/db/submit`,
        method: 'POST',
        body: db,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入datasource
     *
     * @tags 可视化数据源配置接口
     * @name VisualDbUpdate
     * @summary 修改
     * @request POST:/blade-visual/db/update
     * @secure
     */
    visualDbUpdate: (db: VisualDb, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/db/update`,
        method: 'POST',
        body: db,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化柔性线相关接口
     * @name VisualFmsFmsAreaStationTree
     * @summary 提供给可视化FMS库区-库位数据
     * @request GET:/blade-visual/fms/area-station
     * @secure
     */
    visualFmsFmsAreaStationTree: (params: RequestParams = {}) =>
      this.request<RListFmsArea, void>({
        path: `/blade-visual/fms/area-station`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化柔性线相关接口
     * @name VisualFmsPlanCompletionRate
     * @summary 计划完成率
     * @request GET:/blade-visual/fms/plan-completion-rate
     * @secure
     */
    visualFmsPlanCompletionRate: (params: RequestParams = {}) =>
      this.request<RChartDataTableVO, void>({
        path: `/blade-visual/fms/plan-completion-rate`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化柔性线相关接口
     * @name VisualFmsFmsWorkstation
     * @summary 可视化FMS工位
     * @request GET:/blade-visual/fms/workstation
     * @secure
     */
    visualFmsFmsWorkstation: (params: RequestParams = {}) =>
      this.request<RListFmsWorkstation, void>({
        path: `/blade-visual/fms/workstation`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 可视化地图配置接口
     * @name VisualMapData
     * @summary 数据详情
     * @request GET:/blade-visual/map/data
     * @secure
     */
    visualMapData: (
      query?: {
        /** id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Serializable, void>({
        path: `/blade-visual/map/data`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualMap
     *
     * @tags 可视化地图配置接口
     * @name VisualMapDetail
     * @summary 详情
     * @request GET:/blade-visual/map/detail
     * @secure
     */
    visualMapDetail: (
      query?: {
        /** 地图数据 */
        data?: string;
        /** 主键 */
        id?: string;
        /** 地图名称 */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RVisualMap, void>({
        path: `/blade-visual/map/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualMap
     *
     * @tags 可视化地图配置接口
     * @name VisualMapList
     * @summary 分页
     * @request GET:/blade-visual/map/list
     * @secure
     */
    visualMapList: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 主键 */
        id?: string;
        /** 地图名称 */
        name?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageVisualMapVO, void>({
        path: `/blade-visual/map/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 可视化地图配置接口
     * @name VisualMapRemove
     * @summary 删除
     * @request POST:/blade-visual/map/remove
     * @secure
     */
    visualMapRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-visual/map/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualMap
     *
     * @tags 可视化地图配置接口
     * @name VisualMapSave
     * @summary 新增
     * @request POST:/blade-visual/map/save
     * @secure
     */
    visualMapSave: (visualMap: VisualMap, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/map/save`,
        method: 'POST',
        body: visualMap,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualMap
     *
     * @tags 可视化地图配置接口
     * @name VisualMapUpdate
     * @summary 修改
     * @request POST:/blade-visual/map/update
     * @secure
     */
    visualMapUpdate: (visualMap: VisualMap, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/map/update`,
        method: 'POST',
        body: visualMap,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入timeStatusVO
     *
     * @tags 可视化产量接口
     * @name VisualOutputGetDaysOutput
     * @summary 设备近n天产量
     * @request POST:/blade-visual/output/days
     * @secure
     */
    visualOutputGetDaysOutput: (visualBaseVO: VisualSingleBaseVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/output/days`,
        method: 'POST',
        body: visualBaseVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 开始时间,结束时间, 排名数
     *
     * @tags 可视化产量接口
     * @name VisualOutputEmployeeOutputRank
     * @summary 员工产量排名大屏接口
     * @request POST:/blade-visual/output/employee-output-rank
     * @secure
     */
    visualOutputEmployeeOutputRank: (outputRankQueryVO: OutputRankQueryVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVOInt, void>({
        path: `/blade-visual/output/employee-output-rank`,
        method: 'POST',
        body: outputRankQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入timeStatusVO
     *
     * @tags 可视化产量接口
     * @name VisualOutputGetHoursOutput
     * @summary 设备近n小时产量
     * @request POST:/blade-visual/output/hours
     * @secure
     */
    visualOutputGetHoursOutput: (visualBaseVO: VisualSingleBaseVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/output/hours`,
        method: 'POST',
        body: visualBaseVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入workstationShiftOutput
     *
     * @tags 可视化产量接口
     * @name VisualOutputGetShiftIndexOutput
     * @summary 设备当前班次产量
     * @request POST:/blade-visual/output/shift-index-output
     * @secure
     */
    visualOutputGetShiftIndexOutput: (workstationShiftOutput: WorkstationShiftOutput, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/output/shift-index-output`,
        method: 'POST',
        body: workstationShiftOutput,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入对象
     *
     * @tags 可视化产量接口
     * @name VisualOutputGetCountPulseOutput
     * @summary 设备 脉冲 计数 相关数据标签统计
     * @request POST:/blade-visual/output/usage-type
     * @secure
     */
    visualOutputGetCountPulseOutput: (visualQueryVO: WorkstationCountVisualQueryVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/output/usage-type`,
        method: 'POST',
        body: visualQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 自定义sql查询，sql区分大小写
     *
     * @tags sql自定义接口
     * @name VisualSqlCustomSql
     * @summary 自定义sql查询，sql区分大小写
     * @request POST:/blade-visual/sql/custom
     * @secure
     */
    visualSqlCustomSql: (vo: VisualSqlVO, params: RequestParams = {}) =>
      this.request<RList, void>({
        path: `/blade-visual/sql/custom`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetCurrMonthAlarm
     * @summary 月设备报警时长排名
     * @request POST:/blade-visual/status/alarm-month
     * @secure
     */
    visualStatusGetCurrMonthAlarm: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/status/alarm-month`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetCurrWeekAlarm
     * @summary 周设备报警时长排名
     * @request POST:/blade-visual/status/alarm-week
     * @secure
     */
    visualStatusGetCurrWeekAlarm: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/status/alarm-week`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetStatusDistribution
     * @summary 状态分布饼图
     * @request POST:/blade-visual/status/distribution
     * @secure
     */
    visualStatusGetStatusDistribution: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/distribution`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetGroupRunning
     * @summary 班次-设备平均运行时长
     * @request POST:/blade-visual/status/group-running
     * @secure
     */
    visualStatusGetGroupRunning: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/group-running`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetNatureStatusRecord
     * @summary 当日设备状态记录
     * @request POST:/blade-visual/status/nature-record
     * @secure
     */
    visualStatusGetNatureStatusRecord: (visualBaseVO: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartGanttStatusDataVO, void>({
        path: `/blade-visual/status/nature-record`,
        method: 'POST',
        body: visualBaseVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetOeeAnalysis
     * @summary 设备稼动率
     * @request POST:/blade-visual/status/oee
     * @secure
     */
    visualStatusGetOeeAnalysis: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/oee`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetOeeAverageAnalysis
     * @summary 班次-设备平均稼动率
     * @request POST:/blade-visual/status/oee-average
     * @secure
     */
    visualStatusGetOeeAverageAnalysis: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/oee-average`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetCurrMonthOee
     * @summary 当月设备平均稼动率
     * @request POST:/blade-visual/status/oee-month
     * @secure
     */
    visualStatusGetCurrMonthOee: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/oee-month`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetOeeAnalysisShiftTop
     * @summary 当前班次稼动率TOP
     * @request POST:/blade-visual/status/oee-shift-top
     * @secure
     */
    visualStatusGetOeeAnalysisShiftTop: (timeStatusVO: TimeStatusVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/status/oee-shift-top`,
        method: 'POST',
        body: timeStatusVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetOeeAnalysisTop
     * @summary 设备近N时稼动率TOP
     * @request POST:/blade-visual/status/oee-top
     * @secure
     */
    visualStatusGetOeeAnalysisTop: (timeStatusVO: TimeStatusVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/status/oee-top`,
        method: 'POST',
        body: timeStatusVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetStatusRecordByDate
     * @summary 状态记录甘特图
     * @request POST:/blade-visual/status/record
     * @secure
     */
    visualStatusGetStatusRecordByDate: (visualBaseVO: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartGanttStatusDataVO, void>({
        path: `/blade-visual/status/record`,
        method: 'POST',
        body: visualBaseVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetCurrMonthRunning
     * @summary 当月设备平均运行率
     * @request POST:/blade-visual/status/running-month
     * @secure
     */
    visualStatusGetCurrMonthRunning: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/running-month`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入timeStatusVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetRunningStatusRecord
     * @summary 设备运行时长TOP
     * @request POST:/blade-visual/status/running-top
     * @secure
     */
    visualStatusGetRunningStatusRecord: (timeStatusVO: TimeStatusVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/status/running-top`,
        method: 'POST',
        body: timeStatusVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetStatusShiftDistribution
     * @summary 当前班次状态分布饼图
     * @request POST:/blade-visual/status/shift-distribution
     * @secure
     */
    visualStatusGetStatusShiftDistribution: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/shift-distribution`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetEquipmentStatusRecord
     * @summary 当前班次设备状态记录甘特图
     * @request POST:/blade-visual/status/shift-status-record
     * @secure
     */
    visualStatusGetEquipmentStatusRecord: (visualBaseVO: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartGanttStatusDataVO, void>({
        path: `/blade-visual/status/shift-status-record`,
        method: 'POST',
        body: visualBaseVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetTodayAverageOee
     * @summary 当日设备平均稼动率
     * @request POST:/blade-visual/status/today-average-oee
     * @secure
     */
    visualStatusGetTodayAverageOee: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/today-average-oee`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetStatusToDayDistribution
     * @summary 当日状态分布饼图
     * @request POST:/blade-visual/status/today-distribution
     * @secure
     */
    visualStatusGetStatusToDayDistribution: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/today-distribution`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetTodayOee
     * @summary 当日设备稼动率
     * @request POST:/blade-visual/status/today-oee
     * @secure
     */
    visualStatusGetTodayOee: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/status/today-oee`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入timeStatusVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusGetWaitingStatusRecord
     * @summary 设备待机时长TOP
     * @request POST:/blade-visual/status/waiting-top
     * @secure
     */
    visualStatusGetWaitingStatusRecord: (timeStatusVO: TimeStatusVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVO, void>({
        path: `/blade-visual/status/waiting-top`,
        method: 'POST',
        body: timeStatusVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusWorkstationAlarmData
     * @summary 工位实时报警数据
     * @request POST:/blade-visual/status/workstation-alarm
     * @secure
     */
    visualStatusWorkstationAlarmData: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartDataTableVO, void>({
        path: `/blade-visual/status/workstation-alarm`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualBaseVO
     *
     * @tags 可视化状态接口
     * @name VisualStatusWorkstationRealTimeStatus
     * @summary 工位实时数据(工位id)
     * @request POST:/blade-visual/status/workstation-status
     * @secure
     */
    visualStatusWorkstationRealTimeStatus: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartDataTableVO, void>({
        path: `/blade-visual/status/workstation-status`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 工位列表
     *
     * @tags 可视化状态接口
     * @name VisualStatusWorkstationStatusChart
     * @summary 工位状态统计
     * @request POST:/blade-visual/status/workstation-status-chart
     * @secure
     */
    visualStatusWorkstationStatusChart: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartNameValueDataVO, void>({
        path: `/blade-visual/status/workstation-status-chart`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualTheme
     *
     * @tags 主题表接口
     * @name VisualThemeSave
     * @summary 新增
     * @request POST:/blade-visual/theme
     * @secure
     */
    visualThemeSave: (visualTheme: VisualTheme, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/theme`,
        method: 'POST',
        body: visualTheme,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualTheme
     *
     * @tags 主题表接口
     * @name VisualThemeUpdate
     * @summary 修改
     * @request PUT:/blade-visual/theme
     * @secure
     */
    visualThemeUpdate: (visualTheme: VisualTheme, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/theme`,
        method: 'PUT',
        body: visualTheme,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualThemeComponent
     *
     * @tags 主题组件接口
     * @name VisualThemeComponentSave
     * @summary 新增
     * @request POST:/blade-visual/theme/component
     * @secure
     */
    visualThemeComponentSave: (createVO: VisualThemeComponentCreateVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/theme/component`,
        method: 'POST',
        body: createVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualThemeComponent
     *
     * @tags 主题组件接口
     * @name VisualThemeComponentUpdate
     * @summary 修改
     * @request PUT:/blade-visual/theme/component
     * @secure
     */
    visualThemeComponentUpdate: (updateVO: VisualThemeComponentUpdateVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/theme/component`,
        method: 'PUT',
        body: updateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 主题组件接口
     * @name VisualThemeComponentRemove
     * @summary 逻辑删除
     * @request DELETE:/blade-visual/theme/component
     * @secure
     */
    visualThemeComponentRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-visual/theme/component`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 复制visualThemeComponentVO
     *
     * @tags 主题组件接口
     * @name VisualThemeComponentCopy
     * @summary 复制
     * @request POST:/blade-visual/theme/component/copy
     * @secure
     */
    visualThemeComponentCopy: (copyVO: VisualThemeComponentCopyVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/theme/component/copy`,
        method: 'POST',
        body: copyVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visualThemeComponent
     *
     * @tags 主题组件接口
     * @name VisualThemeComponentList
     * @summary 分页
     * @request GET:/blade-visual/theme/component/list
     * @secure
     */
    visualThemeComponentList: (
      query?: {
        /** 接口编号 */
        apiUrl?: string;
        /**
         * 应用类型 1:标准大屏 2:实况产线
         * @format int32
         */
        applicationType?: number;
        /** 配置 */
        config?: string;
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /** 组件名称 */
        displayName?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /**
         * 业务状态
         * @format int32
         */
        status?: number;
        /** 主题id */
        themeId?: string;
        /** 缩略图 */
        thumb?: string;
        /**
         * 更新时间
         * @format date-time
         */
        updateTime?: string;
        /** 更新人 */
        updateUser?: string;
        /** 大屏元组件 */
        visionComponent?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListVisualThemeComponent, void>({
        path: `/blade-visual/theme/component/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入themeCode
     *
     * @tags 主题组件接口
     * @name VisualThemeComponentListComponentByApiBizType
     * @summary 查询主题组件结构列表
     * @request GET:/blade-visual/theme/component/list-by-api-biztype/{themeCode}
     * @secure
     */
    visualThemeComponentListComponentByApiBizType: (themeCode: string, params: RequestParams = {}) =>
      this.request<RListThemeApiBizThreeVO, void>({
        path: `/blade-visual/theme/component/list-by-api-biztype/${themeCode}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualThemeComponent
     *
     * @tags 主题组件接口
     * @name VisualThemeComponentPage
     * @summary 分页
     * @request GET:/blade-visual/theme/component/page
     * @secure
     */
    visualThemeComponentPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        apiType?: string;
        apiUrl?: string;
        /** @format int32 */
        applicationType?: number;
        config?: string;
        displayName?: string;
        id?: string;
        themeId?: string;
        thumb?: string;
        visionComponents?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageVisualThemeComponentVO, void>({
        path: `/blade-visual/theme/component/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualThemeComponent
     *
     * @tags 主题组件接口
     * @name VisualThemeComponentDetail
     * @summary 详情
     * @request GET:/blade-visual/theme/component/{id}
     * @secure
     */
    visualThemeComponentDetail: (id: string, params: RequestParams = {}) =>
      this.request<RVisualThemeComponentVO, void>({
        path: `/blade-visual/theme/component/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualTheme
     *
     * @tags 主题表接口
     * @name VisualThemeList
     * @summary 分页
     * @request GET:/blade-visual/theme/list
     * @secure
     */
    visualThemeList: (
      query?: {
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /**
         * 业务状态
         * @format int32
         */
        status?: number;
        /**
         * 更新时间
         * @format date-time
         */
        updateTime?: string;
        /** 更新人 */
        updateUser?: string;
        config?: string;
        displayName?: string;
        thumb?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListVisualTheme, void>({
        path: `/blade-visual/theme/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入主题Id
     *
     * @tags 主题表接口
     * @name VisualThemeVisualThemeDownload
     * @summary 主题导出
     * @request POST:/blade-visual/theme/zip/download
     * @secure
     */
    visualThemeVisualThemeDownload: (
      query: {
        /** 主题Id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBladeFile, void>({
        path: `/blade-visual/theme/zip/download`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 导入主题
     *
     * @tags 主题表接口
     * @name VisualThemeVisualThemeZipImport
     * @summary 导入主题
     * @request POST:/blade-visual/theme/zip/import
     * @secure
     */
    visualThemeVisualThemeZipImport: (
      data: {
        /** file */
        file: File;
      },
      query?: {
        /** 接口数据列表 */
        apiDataList?: string;
        /**
         * 操作方式：null-无操作，1-另存为新主题，2-覆盖
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RVisualThemeImportVO, void>({
        path: `/blade-visual/theme/zip/import`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入visualTheme
     *
     * @tags 主题表接口
     * @name VisualThemeDetail
     * @summary 详情
     * @request GET:/blade-visual/theme/{id}
     * @secure
     */
    visualThemeDetail: (id: string, params: RequestParams = {}) =>
      this.request<RVisualTheme, void>({
        path: `/blade-visual/theme/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 主题表接口
     * @name VisualThemeRemove
     * @summary 逻辑删除
     * @request DELETE:/blade-visual/theme/{id}
     * @secure
     */
    visualThemeRemove: (id: string, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/theme/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartCpsPlanCompletion
     * @summary cps计划完成率
     * @request POST:/blade-visual/version/cps-plan-completion
     * @secure
     */
    visualPartCpsPlanCompletion: (vo: VisualTimeTypeVO, params: RequestParams = {}) =>
      this.request<RChartDataTableVO, void>({
        path: `/blade-visual/version/cps-plan-completion`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartFmsPlanCompletion
     * @summary fms计划完成率
     * @request POST:/blade-visual/version/fms-plan-completion
     * @secure
     */
    visualPartFmsPlanCompletion: (vo: VisualTimeTypeVO, params: RequestParams = {}) =>
      this.request<RChartDataTableVO, void>({
        path: `/blade-visual/version/fms-plan-completion`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartPartsDay
     * @summary 近n天工件下线信息
     * @request POST:/blade-visual/version/parts-day
     * @secure
     */
    visualPartPartsDay: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartDataTableVO, void>({
        path: `/blade-visual/version/parts-day`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartPartsHour
     * @summary 近n小时工件下线信息
     * @request POST:/blade-visual/version/parts-hour
     * @secure
     */
    visualPartPartsHour: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartDataTableVO, void>({
        path: `/blade-visual/version/parts-hour`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartToolMonitor
     * @summary 刀具监控
     * @request POST:/blade-visual/version/tool-monitor
     * @secure
     */
    visualPartToolMonitor: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartDataTableVO, void>({
        path: `/blade-visual/version/tool-monitor`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartCompareOutputDay
     * @summary 设备近n天每天产量对比
     * @request POST:/blade-visual/version/work-compare-output-day
     * @secure
     */
    visualPartCompareOutputDay: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVOLong, void>({
        path: `/blade-visual/version/work-compare-output-day`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartCompareOutputHour
     * @summary 设备近n小时每小时产量对比
     * @request POST:/blade-visual/version/work-compare-output-hour
     * @secure
     */
    visualPartCompareOutputHour: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVOLong, void>({
        path: `/blade-visual/version/work-compare-output-hour`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartWorkOee
     * @summary 平均设备稼动率日、月、周
     * @request POST:/blade-visual/version/work-oee
     * @secure
     */
    visualPartWorkOee: (vo: VisualTimeVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVOString, void>({
        path: `/blade-visual/version/work-oee`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartWorkOutput
     * @summary 平均设备产量日、月、周
     * @request POST:/blade-visual/version/work-output
     * @secure
     */
    visualPartWorkOutput: (vo: VisualTimeVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVOLong, void>({
        path: `/blade-visual/version/work-output`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartWorkOutputDay
     * @summary 多设备近n天每天产量
     * @request POST:/blade-visual/version/work-output-day
     * @secure
     */
    visualPartWorkOutputDay: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVOLong, void>({
        path: `/blade-visual/version/work-output-day`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化工件接口
     * @name VisualPartWorkOutputHour
     * @summary 多设备近n小时每小时产量
     * @request POST:/blade-visual/version/work-output-hour
     * @secure
     */
    visualPartWorkOutputHour: (vo: VisualBaseVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVOLong, void>({
        path: `/blade-visual/version/work-output-hour`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 大屏组件分类管理
     * @name VisualCompTypeComponentTree
     * @summary 组件树
     * @request GET:/blade-visual/visual-comp-type/comp-tree
     * @secure
     */
    visualCompTypeComponentTree: (
      query?: {
        /** owningChart */
        owningChart?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCompTypeTreeVO, void>({
        path: `/blade-visual/visual-comp-type/comp-tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 大屏组件分类管理
     * @name VisualCompTypeCount
     * @summary 大屏组件分类统计值
     * @request GET:/blade-visual/visual-comp-type/count
     * @secure
     */
    visualCompTypeCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-visual/visual-comp-type/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualCompType
     *
     * @tags 大屏组件分类管理
     * @name VisualCompTypeDetail
     * @summary 大屏组件分类详情
     * @request GET:/blade-visual/visual-comp-type/get/{id}
     * @secure
     */
    visualCompTypeDetail: (id: string, params: RequestParams = {}) =>
      this.request<RVisualCompTypeVo, void>({
        path: `/blade-visual/visual-comp-type/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualCompTypeVO
     *
     * @tags 大屏组件分类管理
     * @name VisualCompTypeInsert
     * @summary 大屏组件分类新增
     * @request POST:/blade-visual/visual-comp-type/insert
     * @secure
     */
    visualCompTypeInsert: (visualCompTypeVO: VisualCompTypeVo1, params: RequestParams = {}) =>
      this.request<RVisualCompTypeVo, void>({
        path: `/blade-visual/visual-comp-type/insert`,
        method: 'POST',
        body: visualCompTypeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 大屏组件分类管理
     * @name VisualCompTypeList
     * @summary 大屏组件分类列表，树结构
     * @request GET:/blade-visual/visual-comp-type/list
     * @secure
     */
    visualCompTypeList: (
      query?: {
        /** 分类状态 */
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListVisualCompTypeVo, void>({
        path: `/blade-visual/visual-comp-type/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 大屏组件分类管理
     * @name VisualCompTypeTreeMenu
     * @summary 大屏组件 分类 + 组件信息 树
     * @request GET:/blade-visual/visual-comp-type/menus
     * @secure
     */
    visualCompTypeTreeMenu: (params: RequestParams = {}) =>
      this.request<RListVisualCompMenuDetailVO, void>({
        path: `/blade-visual/visual-comp-type/menus`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 大屏组件分类管理
     * @name VisualCompTypePage
     * @summary 大屏组件分类分页
     * @request GET:/blade-visual/visual-comp-type/page
     * @secure
     */
    visualCompTypePage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageVisualCompTypeVo, void>({
        path: `/blade-visual/visual-comp-type/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 大屏组件分类管理
     * @name VisualCompTypeRemove
     * @summary 大屏组件分类删除
     * @request DELETE:/blade-visual/visual-comp-type/remove
     * @secure
     */
    visualCompTypeRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/visual-comp-type/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualCompTypeVO
     *
     * @tags 大屏组件分类管理
     * @name VisualCompTypeUpdate
     * @summary 大屏组件分类修改
     * @request PUT:/blade-visual/visual-comp-type/update
     * @secure
     */
    visualCompTypeUpdate: (visualCompTypeVO: VisualCompTypeVo2, params: RequestParams = {}) =>
      this.request<RVisualCompTypeVo, void>({
        path: `/blade-visual/visual-comp-type/update`,
        method: 'PUT',
        body: visualCompTypeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 大屏组件管理
     * @name VisualCompCount
     * @summary 大屏组件统计值
     * @request GET:/blade-visual/visual-comp/count
     * @secure
     */
    visualCompCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-visual/visual-comp/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualComp
     *
     * @tags 大屏组件管理
     * @name VisualCompDetail
     * @summary 大屏组件详情
     * @request GET:/blade-visual/visual-comp/get/{id}
     * @secure
     */
    visualCompDetail: (id: string, params: RequestParams = {}) =>
      this.request<RVisualCompVo, void>({
        path: `/blade-visual/visual-comp/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualCompVO
     *
     * @tags 大屏组件管理
     * @name VisualCompInsert
     * @summary 大屏组件新增
     * @request POST:/blade-visual/visual-comp/insert
     * @secure
     */
    visualCompInsert: (visualCompVO: VisualCompVo, params: RequestParams = {}) =>
      this.request<RVisualCompVo, void>({
        path: `/blade-visual/visual-comp/insert`,
        method: 'POST',
        body: visualCompVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 大屏组件管理
     * @name VisualCompList
     * @summary 大屏组件列表
     * @request GET:/blade-visual/visual-comp/list
     * @secure
     */
    visualCompList: (params: RequestParams = {}) =>
      this.request<RListVisualCompVo, void>({
        path: `/blade-visual/visual-comp/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 大屏组件管理
     * @name VisualCompPage
     * @summary 大屏组件分页
     * @request GET:/blade-visual/visual-comp/page
     * @secure
     */
    visualCompPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 组件名称 */
        name?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /** 组件类型 */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageVisualCompVo, void>({
        path: `/blade-visual/visual-comp/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 大屏组件管理
     * @name VisualCompRemove
     * @summary 大屏组件删除
     * @request DELETE:/blade-visual/visual-comp/remove
     * @secure
     */
    visualCompRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/visual-comp/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualCompVO
     *
     * @tags 大屏组件管理
     * @name VisualCompUpdate
     * @summary 大屏组件修改
     * @request PUT:/blade-visual/visual-comp/update
     * @secure
     */
    visualCompUpdate: (visualCompVO: VisualCompVo, params: RequestParams = {}) =>
      this.request<RVisualCompVo, void>({
        path: `/blade-visual/visual-comp/update`,
        method: 'PUT',
        body: visualCompVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入组件ids
     *
     * @tags 大屏组件管理
     * @name VisualCompComponentDownload
     * @summary 组件导出
     * @request POST:/blade-visual/visual-comp/zip/download
     * @secure
     */
    visualCompComponentDownload: (componentIds: string[], params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-visual/visual-comp/zip/download`,
        method: 'POST',
        body: componentIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入导入zip文件
     *
     * @tags 大屏组件管理
     * @name VisualCompComponentImport
     * @summary 组件导入
     * @request POST:/blade-visual/visual-comp/zip/import
     * @secure
     */
    visualCompComponentImport: (
      data: {
        /**
         * 导入的zip文件
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<RObject, void>({
        path: `/blade-visual/visual-comp/zip/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags VisualGlobalApi管理
     * @name VisualGlobalApiCount
     * @summary blade_visual_global_api统计值
     * @request GET:/blade-visual/visual-global-api/count
     * @secure
     */
    visualGlobalApiCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-visual/visual-global-api/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualGlobalApi
     *
     * @tags VisualGlobalApi管理
     * @name VisualGlobalApiDetail
     * @summary blade_visual_global_api详情
     * @request GET:/blade-visual/visual-global-api/get/{id}
     * @secure
     */
    visualGlobalApiDetail: (id: string, params: RequestParams = {}) =>
      this.request<RVisualGlobalApiVo, void>({
        path: `/blade-visual/visual-global-api/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualGlobalApiVO
     *
     * @tags VisualGlobalApi管理
     * @name VisualGlobalApiInsert
     * @summary blade_visual_global_api新增
     * @request POST:/blade-visual/visual-global-api/insert
     * @secure
     */
    visualGlobalApiInsert: (visualGlobalApiVO: VisualGlobalApiVo, params: RequestParams = {}) =>
      this.request<RVisualGlobalApiVo, void>({
        path: `/blade-visual/visual-global-api/insert`,
        method: 'POST',
        body: visualGlobalApiVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags VisualGlobalApi管理
     * @name VisualGlobalApiList
     * @summary blade_visual_global_api列表
     * @request GET:/blade-visual/visual-global-api/list
     * @secure
     */
    visualGlobalApiList: (params: RequestParams = {}) =>
      this.request<RListVisualGlobalApiVo, void>({
        path: `/blade-visual/visual-global-api/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags VisualGlobalApi管理
     * @name VisualGlobalApiPage
     * @summary blade_visual_global_api分页
     * @request GET:/blade-visual/visual-global-api/page
     * @secure
     */
    visualGlobalApiPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageVisualGlobalApiVo, void>({
        path: `/blade-visual/visual-global-api/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags VisualGlobalApi管理
     * @name VisualGlobalApiRemove
     * @summary blade_visual_global_api删除
     * @request DELETE:/blade-visual/visual-global-api/remove
     * @secure
     */
    visualGlobalApiRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/visual-global-api/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visualGlobalApiVO
     *
     * @tags VisualGlobalApi管理
     * @name VisualGlobalApiUpdate
     * @summary blade_visual_global_api修改
     * @request PUT:/blade-visual/visual-global-api/update
     * @secure
     */
    visualGlobalApiUpdate: (visualGlobalApiVO: VisualGlobalApiVo, params: RequestParams = {}) =>
      this.request<RVisualGlobalApiVo, void>({
        path: `/blade-visual/visual-global-api/update`,
        method: 'PUT',
        body: visualGlobalApiVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化数据接口
     * @name VisualCategory
     * @summary 获取类型
     * @request GET:/blade-visual/visual/category
     * @secure
     */
    visualCategory: (params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/visual/category`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 可视化数据接口
     * @name VisualCopy
     * @summary 复制
     * @request POST:/blade-visual/visual/copy
     * @secure
     */
    visualCopy: (
      query: {
        /** 主键集合 */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLong, void>({
        path: `/blade-visual/visual/copy`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 可视化数据接口
     * @name VisualCopyVisualName
     * @summary 复制
     * @request POST:/blade-visual/visual/copy-name
     * @secure
     */
    visualCopyVisualName: (
      query: {
        /** id */
        id: string;
        /** name */
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLong, void>({
        path: `/blade-visual/visual/copy-name`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入import对象
     *
     * @tags 可视化数据接口
     * @name VisualCopyImport
     * @summary 从import复制
     * @request POST:/blade-visual/visual/copyImport
     * @secure
     */
    visualCopyImport: (visualDTO: VisualDTO, params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-visual/visual/copyImport`,
        method: 'POST',
        body: visualDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visual
     *
     * @tags 可视化数据接口
     * @name VisualDetail
     * @summary 详情
     * @request GET:/blade-visual/visual/detail
     * @secure
     */
    visualDetail: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RVisualDTO, void>({
        path: `/blade-visual/visual/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visual
     *
     * @tags 可视化数据接口
     * @name VisualConfigList
     * @summary 详情
     * @request GET:/blade-visual/visual/detail/catalog/{catalogId}
     * @secure
     */
    visualConfigList: (catalogId: number, params: RequestParams = {}) =>
      this.request<RListVisualInfoVO, void>({
        path: `/blade-visual/visual/detail/catalog/${catalogId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visual
     *
     * @tags 可视化数据接口
     * @name VisualList
     * @summary 分页
     * @request GET:/blade-visual/visual/list
     * @secure
     */
    visualList: (
      query?: {
        /**
         * 应用类型 1:标准大屏 2:实况产线
         * @format int32
         */
        applicationType?: number;
        /** 大屏背景 */
        backgroundUrl?: string;
        /**
         * 大屏类型
         * @format int32
         */
        category?: number;
        /** visual_config.component */
        component?: string;
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** visual_config.detail */
        detail?: string;
        /**
         * 组排序
         * @format int32
         */
        groupIndex?: number;
        /** 组名称 */
        groupName?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /**
         * 手动上传 默认为false
         * @format int32
         */
        manualUpload?: number;
        /** 发布密码 */
        password?: string;
        /** 预览图 */
        previewImage?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 轮播间隔
         * @format int32
         */
        slidingSecond?: number;
        /**
         * 业务状态
         * @format int32
         */
        status?: number;
        /** 主题编号 */
        themeCode?: string;
        /** 主题是否被删除 */
        themeDeleted?: boolean;
        /** 大屏标题 */
        title?: string;
        /**
         * 更新时间
         * @format date-time
         */
        updateTime?: string;
        /** 更新人 */
        updateUser?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageVisual, void>({
        path: `/blade-visual/visual/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入visual
     *
     * @tags 可视化数据接口
     * @name VisualListAll
     * @summary 分页
     * @request POST:/blade-visual/visual/list-all
     * @secure
     */
    visualListAll: (visual: Visual, params: RequestParams = {}) =>
      this.request<RListVisual, void>({
        path: `/blade-visual/visual/list-all`,
        method: 'POST',
        body: visual,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 可视化数据接口
     * @name VisualPutFie
     * @summary putFie
     * @request POST:/blade-visual/visual/put-file
     * @secure
     */
    visualPutFie: (data: any, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-visual/visual/put-file`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 可视化数据接口
     * @name VisualRemove
     * @summary 逻辑删除
     * @request POST:/blade-visual/visual/remove
     * @secure
     */
    visualRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-visual/visual/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visual
     *
     * @tags 可视化数据接口
     * @name VisualSave
     * @summary 新增
     * @request POST:/blade-visual/visual/save
     * @secure
     */
    visualSave: (visual: VisualDTO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/visual/save`,
        method: 'POST',
        body: visual,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入visual
     *
     * @tags 可视化数据接口
     * @name VisualUpdate
     * @summary 修改
     * @request POST:/blade-visual/visual/update
     * @secure
     */
    visualUpdate: (visual: VisualDTO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-visual/visual/update`,
        method: 'POST',
        body: visual,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入大屏ID列表
     *
     * @tags 可视化数据接口
     * @name VisualVisualZipDownload
     * @summary 批量导出大屏，返回zip文件信息
     * @request POST:/blade-visual/visual/zip/download
     * @secure
     */
    visualVisualZipDownload: (visualIds: string[], params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-visual/visual/zip/download`,
        method: 'POST',
        body: visualIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 大屏zip文件
     *
     * @tags 可视化数据接口
     * @name VisualVisualZipImport
     * @summary 批量导入大屏
     * @request POST:/blade-visual/visual/zip/import
     * @secure
     */
    visualVisualZipImport: (
      data: {
        /** file */
        file: File;
      },
      query?: {
        /**
         * 应用类型 1:标准大屏 2:实况产线
         * @format int32
         */
        applicationType?: number;
        /** 分类 */
        category?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RObject, void>({
        path: `/blade-visual/visual/zip/import`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
}
