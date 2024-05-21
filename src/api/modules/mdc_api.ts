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

/** AlarmAnalysisWorkstationVO */
export interface AlarmAnalysisWorkstationVO {
  /** 报警代码 */
  alarmCode?: string;
  /** 报警信息 */
  alarmMsg?: string;
  /** 报警时间 */
  alarmTime?: string;
}

/** AlarmDataSheetShiftVO */
export interface AlarmDataSheetShiftVO {
  /** 报警信息 */
  alarmDataSheetVOList?: AlarmDataSheetVO[];
  /**
   * 班次信息
   * @format int32
   */
  shiftIndex?: number;
  /** 班次名称 */
  shiftName?: string;
}

/** AlarmDataSheetVO */
export interface AlarmDataSheetVO {
  /** 报警代码 */
  alarmCode?: string;
  /** 报警信息 */
  alarmMsg?: string;
  /** 报警时间 */
  alarmTime?: string;
  /**
   * 报警次数
   * @format int32
   */
  count?: number;
}

/** AlarmLibraryAddVO */
export interface AlarmLibraryAddVO {
  /** 报警库名称 */
  name?: string;
  /** 工位ID集合 */
  workstationIdList?: string[];
}

/** AlarmLibraryDetailVO */
export interface AlarmLibraryDetailVO {
  /** 主键ID */
  id?: string;
  /** 报警库名称 */
  name?: string;
  /** 工位ID集合 */
  workstationIdList?: string[];
}

/** AlarmLibraryItemAddVO */
export interface AlarmLibraryItemAddVO {
  /** 报警号 */
  code?: string;
  /** 报警描述 */
  description?: string;
  /**
   * 报警等级
   * @format int32
   */
  level?: number;
  /** 报警库ID */
  libraryId?: string;
  /** 报警原因 */
  reason?: string;
  /** 解决方案 */
  solution?: string;
  /**
   * 报警类型
   * @format int32
   */
  type?: number;
}

/** AlarmLibraryItemDetailVO */
export interface AlarmLibraryItemDetailVO {
  /** 报警号 */
  code?: string;
  /** 报警描述 */
  description?: string;
  /** 主键ID */
  id?: string;
  /**
   * 报警等级
   * @format int32
   */
  level?: number;
  /** 报警库ID */
  libraryId?: string;
  /** 报警原因 */
  reason?: string;
  /** 解决方案 */
  solution?: string;
  /**
   * 报警类型
   * @format int32
   */
  type?: number;
  /** 报警类型名称 */
  typeName?: string;
}

/** AlarmLibraryItemQueryVO */
export interface AlarmLibraryItemQueryVO {
  /** 关键词 */
  keyword?: string;
  /** 报警库ID */
  libraryId?: string;
  /** 报警类型集合 */
  typeList?: number[];
}

/** AlarmLibraryItemUpdateVO */
export interface AlarmLibraryItemUpdateVO {
  /** 报警号 */
  code?: string;
  /** 报警描述 */
  description?: string;
  /** 主键ID */
  id?: string;
  /**
   * 报警等级
   * @format int32
   */
  level?: number;
  /** 报警原因 */
  reason?: string;
  /** 解决方案 */
  solution?: string;
  /**
   * 报警类型
   * @format int32
   */
  type?: number;
}

/** AlarmLibraryItemVO */
export interface AlarmLibraryItemVO {
  /** 报警号 */
  code?: string;
  /** 报警描述 */
  description?: string;
  /** 主键ID */
  id?: string;
  /**
   * 报警等级
   * @format int32
   */
  level?: number;
  /** 报警库ID */
  libraryId?: string;
  /** 报警原因 */
  reason?: string;
  /** 解决方案 */
  solution?: string;
  /**
   * 报警类型
   * @format int32
   */
  type?: number;
  /** 报警类型名称 */
  typeName?: string;
}

/** AlarmLibraryUpdateVO */
export interface AlarmLibraryUpdateVO {
  /** 主键ID */
  id?: string;
  /** 报警库名称 */
  name?: string;
  /** 工位ID集合 */
  workstationIdList?: string[];
}

/** AlarmLibraryVO */
export interface AlarmLibraryVO {
  /** 主键 */
  id?: string;
  /** 报警库名称 */
  name?: string;
  /**
   * 工位数量
   * @format int32
   */
  workstationNum?: number;
}

/** AlarmRecordDetailVO */
export interface AlarmRecordDetailVO {
  /**
   * 报警时间
   * @format date-time
   */
  alarmTime?: string;
  /** 报警号 */
  code?: string;
  /** 报警描述 */
  description?: string;
  /** 报警信息(td中保存的描述) */
  errorMessage?: string;
  /** 主键 */
  id?: string;
  /**
   * 报警等级
   * @format int32
   */
  level?: number;
  /** 报警库名称 */
  libraryName?: string;
  /** 报警原因 */
  reason?: string;
  /** 解决方案 */
  solution?: string;
  /**
   * 报警类型
   * @format int32
   */
  type?: number;
  /** 报警类型 */
  typeName?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** AlarmRecordQueryVO */
export interface AlarmRecordQueryVO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  endTimeStamp?: string;
  /** 关键词 */
  keyword?: string;
  /** 选中的列表数据 */
  selectedList?: AlarmRecordVO1[];
  /**
   * 根据报警时间排序 0 倒序 1 正序
   * @format int32
   */
  sort?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  startTimeStamp?: string;
  /** 报警类型集合 */
  typeList?: number[];
  /** 工位集合 */
  workstations?: string[];
}

/** AlarmRecordVO */
export interface AlarmRecordVO {
  /**
   * 报警时间
   * @format date-time
   */
  alarmTime?: string;
  /** 报警号 */
  code?: string;
  /** 报警描述 */
  description?: string;
  /** 报警信息(td中保存的描述) */
  errorMessage?: string;
  /** 主键 */
  id?: string;
  /**
   * 报警等级
   * @format int32
   */
  level?: number;
  /** 报警库ID */
  libraryId?: string;
  /** 报警库名称 */
  libraryName?: string;
  /** 工位对应的时间戳 */
  ts?: string;
  /**
   * 报警类型
   * @format int32
   */
  type?: number;
  /** 报警类型 */
  typeName?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** AlarmRecordVO_1 */
export interface AlarmRecordVO1 {
  /**
   * 报警时间
   * @format date-time
   */
  alarmTime?: string;
  /** 报警号 */
  code?: string;
  /** 报警描述 */
  description?: string;
  /** 报警信息(td中保存的描述) */
  errorMessage?: string;
  /** 主键 */
  id?: string;
  /**
   * 报警等级
   * @format int32
   */
  level?: number;
  /** 报警库ID */
  libraryId?: string;
  /** 报警库名称 */
  libraryName?: string;
  property?: WorkstationAlarmRecordDTO;
  /** 工位对应的时间戳 */
  ts?: string;
  /**
   * 报警类型
   * @format int32
   */
  type?: number;
  /** 报警类型 */
  typeName?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** AlarmShiftSearchExcelVO */
export interface AlarmShiftSearchExcelVO {
  /**
   * 报警类型
   * @format int32
   */
  alarmType?: number;
  /**
   * 结束时间
   * @format date
   */
  endTime?: string;
  /** 统计模式: SHIFT - 班次; DAY - 日; WEEK - 周; MONTH - 月 */
  enums?: 'SHIFT' | 'DAY' | 'WEEK' | 'MONTH';
  /**
   * 当前月
   * @format int32
   */
  month?: number;
  /**
   * 查询时间
   * @format date
   */
  queryTime?: string;
  /**
   * 班次index
   * @format int32
   */
  shiftIndex?: number;
  /**
   * 开始时间
   * @format date
   */
  startTime?: string;
  /**
   * 当前周
   * @format int32
   */
  week?: number;
  /** 工位id */
  workstationId?: string;
  /**
   * 当前年
   * @format int32
   */
  year?: number;
}

/** AlarmShiftSearchVO */
export interface AlarmShiftSearchVO {
  /**
   * 报警类型
   * @format int32
   */
  alarmType?: number;
  /** 统计模式: SHIFT - 班次; DAY - 日; WEEK - 周; MONTH - 月 */
  enums?: 'SHIFT' | 'DAY' | 'WEEK' | 'MONTH';
  /**
   * 当前月
   * @format int32
   */
  month?: number;
  /**
   * 查询时间
   * @format date
   */
  queryTime?: string;
  /**
   * 班次index
   * @format int32
   */
  shiftIndex?: number;
  /**
   * 当前周
   * @format int32
   */
  week?: number;
  /** 工位id */
  workstationId?: string;
  /**
   * 当前年
   * @format int32
   */
  year?: number;
}

/** AlarmSummaryGraphShiftVO */
export interface AlarmSummaryGraphShiftVO {
  res?: Record<string, number>;
  /**
   * 班次
   * @format int32
   */
  shiftIndex?: number;
  /** 班次名称 */
  shiftIndexName?: string;
}

/** AlarmSummaryGraphVO */
export interface AlarmSummaryGraphVO {
  res?: Record<string, number>;
}

/** AllShiftTimeDetail */
export interface AllShiftTimeDetail {
  /** 班次颜色 */
  color?: string;
  /** @format date-time */
  endTime?: string;
  /**
   * 班次顺序
   * @format int32
   */
  shiftIndex?: number;
  /** 班次名称 */
  shiftName?: string;
  /** @format date-time */
  startTime?: string;
}

/** AnalysisFilterVO */
export interface AnalysisFilterVO {
  /**
   * 结束时间
   * @format date
   */
  endDate?: string;
  /** 是否翻转(日期)，从现在到过去 */
  isReverse?: boolean;
  /** 选中的班次信息 */
  shiftList?: KeyNameDTO[];
  /**
   * 开始时间
   * @format date
   */
  startDate?: string;
  /** 统计方式:SHIFT--班次--1,DAY--日--2,WEEK--周--3,MONTH--月--4 */
  statisticalMethod?: 'SHIFT' | 'DAY' | 'WEEK' | 'MONTH';
  /** 选中的工位key-name */
  workStationList?: KeyNameDTO[];
}

/** BizUpdateLogQueryVO */
export interface BizUpdateLogQueryVO {
  /** @format date-time */
  endTime?: string;
  /** @format date-time */
  startTime?: string;
  workstationName?: string;
}

/** BizUpdateLogVO */
export interface BizUpdateLogVO {
  /** 变更后 */
  afterList?: string[];
  /** 变更前 */
  beforeList?: string[];
  id?: string;
  /** 变更字段 */
  updateFieldList?: string[];
  /** 变更字段名称 */
  updateFieldNameList?: string[];
  /**
   * 变更时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 变更类型
   * @format int32
   */
  updateType?: number;
  /** 变更类型名称 */
  updateTypeName?: string;
  /** 变更人员 */
  updateUser?: string;
  /** 变更人员名称 */
  updateUserName?: string;
  /** 工位Code */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
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

/** ChartDataVO */
export interface ChartDataVO {
  name?: string;
  value?: object;
}

/** CollectParamSearchVO */
export interface CollectParamSearchVO {
  dmpDTO?: WorkstationWcsDmpDTO;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 工位id */
  workstationId?: string;
}

/** ColumnInfoVO */
export interface ColumnInfoVO {
  /**
   * 结束日期
   * @format date
   */
  endDate?: string;
  /** id */
  id?: string;
  /**
   * 开始日期
   * @format date
   */
  startDate?: string;
  /** 显示标题 */
  title?: string;
}

/** CountStatusDTO */
export interface CountStatusDTO {
  /** code码 */
  code?: string;
  /** 状态数量 */
  count?: string;
  /** 状态name */
  statusName?: string;
}

/** CrossDayStateVO */
export interface CrossDayStateVO {
  /** @format date */
  date: string;
}

/** DeviceStatusStatisticsVO */
export interface DeviceStatusStatisticsVO {
  /** 设备数量 */
  deviceNum?: string;
  /** 状态值 */
  status?: string;
  /** 状态名称 */
  statusName?: string;
}

/** DeviceWsStatisticsVO */
export interface DeviceWsStatisticsVO {
  /**
   * 设备数量
   * @format int32
   */
  deviceNum?: number;
  /** 占比 */
  proportion?: string;
  /** 状态值 */
  status?: string;
  /** 状态名称 */
  statusName?: string;
}

/** DmpStatusVariableVO */
export interface DmpStatusVariableVO {
  /** 状态采集项key */
  variableKey?: string;
  /** 状态采集项值 */
  variableValue?: string;
  /** 工位ID */
  workstationId?: string;
}

/** DmpVariablesVO */
export interface DmpVariablesVO {
  /** 大屏 */
  bigScreen?: boolean;
  dataItem?: string;
  /**
   * 数据长度，未使用
   * @format int32
   */
  dataLength?: number;
  /**
   * 数据类型
   * @format int32
   */
  dataType?: number;
  /** 默认值 */
  defaultValue?: string;
  /** 字段描述 */
  description?: string;
  /** 数据项采集地址，默认地址可只存在参数。例如 Item(A) = A */
  deviceAddress?: string;
  /**
   * 是否可写入，1只读，2读写
   * @format int32
   */
  dmpAccess?: number;
  /** DMP设备 */
  dmpDeviceId?: string;
  /**
   * 类型，未使用，为0
   * @format int32
   */
  dmpType?: number;
  /** 主键 */
  id?: string;
  /**
   * 索引顺序
   * @format int32
   */
  idx?: number;
  /** cps设备 */
  machineId?: string;
  /** 参数，未使用 */
  methodParam?: string;
  /** 字段名称 */
  name?: string;
  /** 过程参数 */
  processParameter?: boolean;
  /** 实时数据 */
  realTimeData?: boolean;
  /**
   * 顺序
   * @format int32
   */
  sort: number;
  /** 数据标签 */
  usageId?: string;
  /**
   * 数据倍率
   * @format double
   */
  valueFactor?: number;
  /** @format int32 */
  wcsDataType?: number;
  /** 工况参数Id  */
  wcsId?: string;
  workstationId?: string;
}

/** GlobalWcs */
export interface GlobalWcs {
  code?: string;
  color?: string;
  /** @format int32 */
  effect?: number;
  name?: string;
  /** @format int32 */
  priority?: number;
  remark?: string;
  /** @format int32 */
  seq?: number;
  /** @format int32 */
  type?: number;
}

/** HmiStatisticsVO */
export interface HmiStatisticsVO {
  /** 数据 */
  data?: string;
  /** 效率类型:RUNNING--运行率--1,ALARM--报警率--2,OEE--稼动率--3 */
  productivityType?: 'RUNNING' | 'ALARM' | 'OEE';
}

/** IdsVO */
export interface IdsVO {
  ids?: string[];
}

/** KeyNameDTO */
export interface KeyNameDTO {
  /** key */
  key?: string;
  /** 名称 */
  name?: string;
}

/** MixShiftDetailsDTO */
export interface MixShiftDetailsDTO {
  /** 班次名称 */
  indexName?: string;
  /** 混合班次 true-是 false-不是 */
  mixShift?: boolean;
  /**
   * 班次下标
   * @format int32
   */
  shiftIndex?: number;
}

/** NameIdDTO */
export interface NameIdDTO {
  /** 工位id */
  id?: string;
  /** 工位名称 */
  name?: string;
  /**
   * 工位顺序
   * @format int32
   */
  sort?: number;
  statusList?: CountStatusDTO[];
}

/** ParamMonitoringAnalysisDetailQueryVO */
export interface ParamMonitoringAnalysisDetailQueryVO {
  duration?: string;
  /**
   * 结束时间 时分秒拼23:59:59
   * @format date-time
   */
  endTime?: string;
  /** 选中的列表数据 */
  ids?: string[];
  order?: string;
  sortName?: string;
  /**
   * 开始时间 时分秒拼00:00:00
   * @format date-time
   */
  startTime?: string;
  /**
   * 运算符 大于等于传1 小于传2
   * @format int32
   */
  type?: number;
  /** 数据标签 */
  usageId?: string;
  /** 数据标签集合 */
  usageIdList?: string[];
  /** 工位ID集合 */
  workstationIdList?: string[];
}

/** ParamMonitoringAnalysisDetailVO */
export interface ParamMonitoringAnalysisDetailVO {
  /** 异常时长 */
  duration?: string;
  /** 异常时长（转换字符） */
  durationStr?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 工位组Id */
  groupId?: string;
  /** 所属工位组 */
  groupName?: string;
  /** 主键 */
  id?: string;
  /** 采集项 */
  item?: string;
  /**
   * 最大值
   * @format double
   */
  maxValue?: number;
  /**
   * 最小值
   * @format double
   */
  minValue?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 数据标识编码 */
  usageCode?: string;
  /** 数据标识名称 */
  usageName?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** ParamMonitoringAnalysisHistogramVO */
export interface ParamMonitoringAnalysisHistogramVO {
  /** X轴时间集合(月-日) */
  dateList?: string[];
  /** Y轴异常次数集合 */
  expectionNum?: number[];
  /** Y轴异常时间集合(分) */
  expectionTime?: string[];
}

/** ParamMonitoringAnalysisPieChartVO */
export interface ParamMonitoringAnalysisPieChartVO {
  /** 名称 */
  item?: string;
  /** 类型id */
  itemId?: string;
  /** 数值-按时长时单位为秒 */
  value?: string;
}

/** ParamMonitoringAnalysisQueryVO */
export interface ParamMonitoringAnalysisQueryVO {
  /**
   * 结束时间 时分秒拼23:59:59
   * @format date-time
   */
  endTime?: string;
  /**
   * 开始时间 时分秒拼00:00:00
   * @format date-time
   */
  startTime?: string;
  /** 数据标签集合 */
  usageIdList?: string[];
  /** 工位ID集合 */
  workstationIdList?: string[];
}

/** ParamMonitoringAnalysisVO */
export interface ParamMonitoringAnalysisVO {
  /** 数据标识编码 */
  usageCode?: string;
  /** 数据标识ID */
  usageId?: string;
  /** 数据标识名称 */
  usageName?: string;
  /**
   * 工位数量
   * @format int32
   */
  workstationNum?: number;
}

/** ProParamResDTO */
export interface ProParamResDTO {
  /** 采集项名称 */
  collectItem?: string;
  /** 采集项真实名称 */
  collectRealItem?: string;
  /** 数据 */
  data?: ProcessParameterRealVO[];
  /**
   * 数据类型
   * @format int32
   */
  dataType?: number;
  /** 状态数据 */
  statusData?: ProcessWcsDTO[];
}

/** ProParamSheetVO */
export interface ProParamSheetVO {
  /** 内容 */
  content?: string[][];
  /** 表头 */
  head?: string[];
}

/** ProcessParamExcelVO */
export interface ProcessParamExcelVO {
  /** 需要导出的采集参数 */
  collectItem?: WorkstationWcsDmpDTO[];
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 统计方式 */
  methodEnum?: 'SHIFT' | 'HOUR';
  /**
   * 查询时间
   * @format date
   */
  queryTime?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 工位id */
  workstationId?: string;
}

/** ProcessParameterItemSearchVO */
export interface ProcessParameterItemSearchVO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 是否为状态 0-不是; 1-是
   * @format int32
   */
  flag?: number;
  /** 采集项 */
  item?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 工位id */
  workstationId?: string;
}

/** ProcessParameterRealVO */
export interface ProcessParameterRealVO {
  collectItem?: string;
  realTime?: string;
  time?: string;
  value?: string;
}

/** ProcessParameterResVO */
export interface ProcessParameterResVO {
  res?: ProParamResDTO[];
}

/** ProcessParameterSearchVO */
export interface ProcessParameterSearchVO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 统计方式 */
  methodEnum?: 'SHIFT' | 'HOUR';
  /**
   * 查询时间
   * @format date
   */
  queryTime?: string;
  /**
   * 班次
   * @format int32
   */
  shift?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 工位id */
  workstationId?: string;
}

/** ProcessWcsDTO */
export interface ProcessWcsDTO {
  /** 状态颜色 */
  color?: string;
  /** 状态名称 */
  name?: string;
  realTime?: string;
  time?: string;
  /** 状态code */
  value?: string;
}

/** QueryIntervalDateVO */
export interface QueryIntervalDateVO {
  /**
   * 结束日期
   * @format date
   */
  endDate?: string;
  /**
   * 开始日期
   * @format date
   */
  startDate?: string;
  /** 统计方式:SHIFT--班次--1,DAY--日--2,WEEK--周--3,MONTH--月--4 */
  statisticalMethod?: 'SHIFT' | 'DAY' | 'WEEK' | 'MONTH';
}

/** QueryShiftIndexNameVO */
export interface QueryShiftIndexNameVO {
  /** 按工位组查询 - 需要 */
  groupCategory?: string;
  /** 按工位组查询 - 需要 */
  groupType?: string;
  /** 工位id */
  ids?: string[];
  /**
   * 查询时间
   * @format date
   */
  localDate?: string;
  /**
   * 0 - 工位id集合;1 - 工位组id集合
   * @format int32
   */
  type?: number;
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

/** ShiftTimeVO */
export interface ShiftTimeVO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
}

/** SplitFilterListVO */
export interface SplitFilterListVO {
  /** 分割后的条件列表 */
  items?: SplitFilterVO[];
}

/** SplitFilterVO */
export interface SplitFilterVO {
  /** code */
  code?: string;
  /** 日 */
  date?: string;
  /**
   * 月
   * @format int32
   */
  month?: number;
  /**
   * 班次index
   * @format int32
   */
  shiftIndex?: number;
  /** 统计方式:SHIFT--班次--1,DAY--日--2,WEEK--周--3,MONTH--月--4 */
  statisticalMethod?: 'SHIFT' | 'DAY' | 'WEEK' | 'MONTH';
  /** 标题 */
  title?: string;
  /**
   * 周
   * @format int32
   */
  week?: number;
  /** 选中的工位key-name */
  workStationList?: KeyNameDTO[];
  /**
   * 年
   * @format int32
   */
  year?: number;
}

/** StatisticsAnalysisQueryVO */
export interface StatisticsAnalysisQueryVO {
  /**
   * 结束日期
   * @format date
   */
  endDate?: string;
  /** 效率类型:RUNNING--运行率--1,ALARM--报警率--2,OEE--稼动率--3 */
  productivityType?: 'RUNNING' | 'ALARM' | 'OEE';
  /**
   * 查询类型 0-柱状图  1-表格
   * @format int32
   */
  queryType?: number;
  /** 选中的班次信息 */
  shiftIndexList?: number[];
  /**
   * 开始日期
   * @format date
   */
  startDate?: string;
  /** 统计方式:SHIFT--班次--1,DAY--日--2,WEEK--周--3,MONTH--月--4 */
  statisticalMethod?: 'SHIFT' | 'DAY' | 'WEEK' | 'MONTH';
  /** 工位id集合 */
  workStationIdList?: string[];
}

/** StatisticsDataVO */
export interface StatisticsDataVO {
  /** 数据 */
  data?: Record<string, string>;
  /** id */
  id?: string;
  /** 名称 */
  nameData?: Record<string, string>;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** StatisticsVO */
export interface StatisticsVO {
  /** 数据 */
  items?: IPageStatisticsDataVO;
}

/** StatusAnalysisWorkstationVO */
export interface StatusAnalysisWorkstationVO {
  endDate?: Timestamp;
  /** 结束时间 */
  endTime?: string;
  startDate?: Timestamp;
  /** 开始时间 */
  startTime?: string;
  /** 状态 */
  status?: string;
}

/** StatusRecordDateSelectVO */
export interface StatusRecordDateSelectVO {
  /**
   * 日期
   * @format date
   */
  date?: string;
  /**
   * 结束日期
   * @format date
   */
  endDate?: string;
  /** 是否包含人工反馈 */
  humanFeedback?: boolean;
  /** 是否包含设备反馈记录 */
  machineFeedback?: boolean;
  /** 工位信息列表 */
  workstationInfoList?: WorkstationInfoVO[];
}

/** StatusRecordDateTimeSelectVO */
export interface StatusRecordDateTimeSelectVO {
  /**
   * 结束日期
   * @format date-time
   */
  endTime?: string;
  /**
   * 日期
   * @format date-time
   */
  startTime?: string;
  /** 工位信息列表 */
  workstationInfoList?: WorkstationInfoVO[];
}

/** StatusRecordDateVO */
export interface StatusRecordDateVO {
  /** 状态记录列表 */
  statusRecordList?: StatusRecordVO[];
  /** 工位信息 */
  workstationInfo?: WorkstationInfoVO;
}

/** StatusRecordDetailSelectVO */
export interface StatusRecordDetailSelectVO {
  /**
   * 日期
   * @format date
   */
  date?: string;
  /** 是否包含人工反馈 */
  humanFeedback?: boolean;
  /** 工位ID */
  workstationId?: string;
}

/** StatusRecordExcelVO */
export interface StatusRecordExcelVO {
  /**
   * 结束日期
   * @format date
   */
  endTime?: string;
  /** 是否包含人工反馈 */
  humanFeedback?: boolean;
  /**
   * 开始日期
   * @format date
   */
  startTime?: string;
  /** 工位信息列表 */
  workstationInfoList?: WorkstationInfoVO[];
}

/** StatusRecordShiftIndexChartVO */
export interface StatusRecordShiftIndexChartVO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 班次状态记录列表 */
  statusRecordShiftIndexList?: StatusRecordShiftIndexVO[];
}

/** StatusRecordShiftIndexVO */
export interface StatusRecordShiftIndexVO {
  /**
   * 班次
   * @format int32
   */
  shiftIndex?: number;
  /** 班次名称 */
  shiftIndexName?: string;
  /** 状态记录列表 */
  statusRecordList?: StatusRecordVO[];
}

/** StatusRecordVO */
export interface StatusRecordVO {
  duration?: string;
  /** 结束时间 */
  endTime?: Timestamp;
  /** 反馈人 */
  feedUser?: string;
  /** 反馈描述 */
  feedbackDesc?: string;
  /** 人工反馈Id */
  feedbackId?: string;
  /** 反馈时间 */
  feedbackTime?: Timestamp;
  /** 是否是人工反馈 */
  humanFeedback?: boolean;
  /** 是否是持续反馈 */
  point?: boolean;
  /** 开始时间 */
  startTime?: Timestamp;
  /**
   * wcs值
   * @format int32
   */
  wcs?: number;
  /** 状态 */
  wcsDesc?: string;
  workstationId?: string;
}

/** StatusRecordWorkstationSelectVO */
export interface StatusRecordWorkstationSelectVO {
  /**
   * 结束日期
   * @format date
   */
  endDate?: string;
  /** 是否包含人工反馈 */
  humanFeedback?: boolean;
  /** 是否包含机器反馈 */
  machineFeedback?: boolean;
  /**
   * 开始日期
   * @format date
   */
  startDate?: string;
  /** 工位ID */
  workstationId?: string;
}

/** StatusRecordWorkstationVO */
export interface StatusRecordWorkstationVO {
  /** 日期 */
  date?: string;
  /** 状态记录列表 */
  statusRecordList?: StatusRecordVO[];
}

/** StatusTimeTotalDetailVO */
export interface StatusTimeTotalDetailVO {
  proportion?: number;
  /** 状态时长展示 */
  showTotalTime?: string;
  /** 状态值 */
  status?: string;
  /** 状态名称 */
  statusName?: string;
  /** 状态总时长 */
  statusTotalTime?: string;
}

/** StatusTimeTotalVO */
export interface StatusTimeTotalVO {
  /** 工位组ID */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /** 总时长 */
  list?: StatusTimeTotalDetailVO[];
  /** 总时长 */
  totalTime?: string;
}

/** SuperAggregateStateVO */
export interface SuperAggregateStateVO {
  calendarCode?: string;
  duration?: string;
  endTime?: Timestamp;
  /** @format int32 */
  factoryDate?: number;
  /** @format int32 */
  factoryMonth?: number;
  /** @format int32 */
  factoryWeek?: number;
  /** @format int32 */
  factoryYear?: number;
  isDeleted?: boolean;
  /** @format int32 */
  isPlan?: number;
  /** @format int32 */
  rps?: number;
  /** @format int32 */
  shiftIndex?: number;
  /** @format int32 */
  shiftTimeType?: number;
  startTime?: Timestamp;
  /** @format int32 */
  value?: number;
  /** @format int32 */
  wcs?: number;
  workstationId?: string;
}

/** TimeUsedAnalysisWorkstationVO */
export interface TimeUsedAnalysisWorkstationVO {
  /** 各个状态 */
  countStatus?: CountStatusDTO[][];
  /** 总数 */
  total?: string;
  /** 工位详情 */
  workStationDetails?: NameIdDTO[];
}

/** TimeUsedExcelVO */
export interface TimeUsedExcelVO {
  /**
   * 结束时间
   * @format date
   */
  endTime?: string;
  /** 统计模式: SHIFT - 班次; DAY - 日; WEEK - 周; MONTH - 月 */
  enums?: 'SHIFT' | 'DAY' | 'WEEK' | 'MONTH';
  /** 工位id */
  ids?: string[];
  /**
   * 开始时间
   * @format date
   */
  startTime?: string;
}

/** TimeUsedStatisticsByWorkstationVO */
export interface TimeUsedStatisticsByWorkstationVO {
  /** 统计模式: SHIFT - 班次; DAY - 日; WEEK - 周; MONTH - 月 */
  enums?: 'SHIFT' | 'DAY' | 'WEEK' | 'MONTH';
  /** 按工位组查询 - 需要 */
  groupCategory?: string;
  /** 按工位组查询 - 需要 */
  groupType?: string;
  /** 工位或工位组id集合 */
  ids?: string[];
  /**
   * 当前月
   * @format int32
   */
  month?: number;
  /**
   * 查询时间
   * @format date
   */
  queryTime?: string;
  /**
   * 班次index
   * @format int32
   */
  shiftIndex?: number;
  /**
   * 0 - 工位id集合;1 - 工位组id集合
   * @format int32
   */
  type?: number;
  /**
   * 当前周
   * @format int32
   */
  week?: number;
  /**
   * 当前年
   * @format int32
   */
  year?: number;
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

/** WorkstationAlarmRecordDTO */
export interface WorkstationAlarmRecordDTO {
  /** @format int32 */
  alarmLevel?: number;
  /** @format int32 */
  alarmType?: number;
  code?: string;
  description?: string;
  itemId?: string;
  libId?: string;
  libName?: string;
  reason?: string;
  workstationId?: string;
}

/** WorkstationBandShiftVO */
export interface WorkstationBandShiftVO {
  shiftDetails?: MixShiftDetailsDTO[];
}

/** WorkstationEndAndStartImmediateFeedBackDTO */
export interface WorkstationEndAndStartImmediateFeedBackDTO {
  /** 反馈描述 */
  desc?: string;
  /** 待结束反馈Id */
  endFeedbackId?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 结束并再次发起反馈人员Id */
  feedUser?: string;
  /** 反馈状态 */
  wcs?: string;
  /** 工位Id */
  workstationId?: string;
}

/** WorkstationEndImmediateFeedBackDTO */
export interface WorkstationEndImmediateFeedBackDTO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 结束反馈人员Id */
  feedUser?: string;
  /** 反馈Id */
  feedbackId?: string;
  /** 工位Id */
  workstationId?: string;
}

/** WorkstationFeedBackDetailVO */
export interface WorkstationFeedBackDetailVO {
  /** 是否可以删除 */
  canDelete?: boolean;
  /**
   * 持续时长
   * @format int32
   */
  duration?: number;
  /** 结束人员 */
  endFeedUser?: string;
  /** 发起人员 */
  feedUser?: string;
  /** 反馈描述 */
  feedbackDesc?: string;
  /** feedbackId */
  feedbackId?: string;
  /**
   * 反馈时间
   * @format date-time
   */
  feedbackTime?: string;
  /** id */
  id?: string;
  /** 状态时间 */
  statusTime?: string;
  /** 反馈状态 */
  wcsDesc?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** WorkstationFeedBackQueryDTO */
export interface WorkstationFeedBackQueryDTO {
  /** 结束时间 */
  endDate?: string;
  /** 状态 */
  feedBackStatus?: string[];
  /** 开始时间 */
  startDate?: string;
  /** 工位组 */
  workstationGroupId?: string;
  /** 工位 */
  workstationId?: string;
}

/** WorkstationFeedBackVO */
export interface WorkstationFeedBackVO {
  /**
   * 反馈结束时间
   * @format date-time
   */
  endTime?: string;
  /** 反馈人 */
  feedUser?: string;
  /** 反馈描述 */
  feedbackDesc?: string;
  /** 人工反馈Id */
  feedbackId?: string;
  /**
   * 反馈时间
   * @format date-time
   */
  feedbackTime?: string;
  /** 是否是持续反馈 */
  point?: boolean;
  /**
   * 反馈开始时间
   * @format date-time
   */
  startTime?: string;
  /** 工位描述 */
  wcs?: string;
  /** 工位反馈描述 */
  wcsDesc?: string;
  /** 工位图片 */
  workstationAvatar?: string;
  /** 工位Code */
  workstationCode?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
  /**
   * 工位顺序
   * @format int32
   */
  workstationSort?: number;
}

/** WorkstationFeedbackInfoVO */
export interface WorkstationFeedbackInfoVO {
  /** 持续反馈ID */
  feedbackId?: string;
  /**
   * 即时反馈开始时间
   * @format date-time
   */
  lastImmediateFeedbackTime?: string;
  /** 今日是否存在反馈 */
  toDayHaveFeedback?: boolean;
  /** 持续反馈工位反馈颜色 */
  wcsColor?: string;
  /** 持续反馈工位反馈描述 */
  wcsDesc?: string;
  /** 工位图片 */
  workstationAvatar?: string;
  /** 工位Code */
  workstationCode?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
  /**
   * 工位顺序
   * @format int32
   */
  workstationSort?: number;
}

/** WorkstationImmediateFeedBackDTO */
export interface WorkstationImmediateFeedBackDTO {
  /** 反馈原因描述 */
  description?: string;
  /** 反馈人员Id */
  feedUser?: string;
  /** 状态code */
  wcs?: string;
  /** 工位Id列表 */
  workstationIds?: string[];
}

/** WorkstationInfoVO */
export interface WorkstationInfoVO {
  /** 工位编号 */
  code?: string;
  /** 工位组id */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /** ID */
  id?: string;
  /** 工位名称 */
  name?: string;
}

/** WorkstationNoImmediateFeedBackDTO */
export interface WorkstationNoImmediateFeedBackDTO {
  /** 反馈原因描述 */
  description?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 反馈人员Id */
  feedUser?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 状态码 */
  wcs?: string;
  /** 工位Id */
  workstationIds?: string[];
}

/** WorkstationShiftSearchVO */
export interface WorkstationShiftSearchVO {
  /** 时间 */
  dates?: any[];
  /** 工位id */
  workstationId?: string;
}

/** WorkstationVO */
export interface WorkstationVO {
  /** 工位图片地址 */
  avatar?: string;
  /** 生产日历编码 */
  calendarCode?: string;
  /** 待生效生产日历编码 */
  calendarCodeWaiting?: string;
  /** 生产日历名称 */
  calendarName?: string;
  /** 工位编号 */
  code?: string;
  /**
   * 采集开关
   * @format int32
   */
  collectSwitch?: number;
  /** 权限ID */
  createDept?: string;
  /** @format date-time */
  createTime?: string;
  /**
   * 工位设备类型
   * @format int32
   */
  deviceType?: number;
  /** dmp地址 */
  dmpAddress?: string;
  /** dmp名称 */
  dmpName?: string;
  /** 扩展字段 */
  extendField?: string;
  /** 扩展id */
  extendId?: string;
  /** ftp目录ID */
  ftpDirectoryId?: string;
  /** ftp目录名称 */
  ftpDirectoryName?: string;
  /** 工位组id */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /** 主键 */
  id?: string;
  /** 报警库ID */
  libraryId?: string;
  /** 报警库名称 */
  libraryName?: string;
  /** 机器品牌 */
  machineBrand?: string;
  /** 机器编号 */
  machineCode?: string;
  /** 机器id */
  machineId?: string;
  /** 机器规格 */
  machineModel?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器PIN码 */
  machinePinCode?: string;
  /** 机器短编号 */
  machineShortCode?: string;
  /** 机器类型编码 */
  machineTypeCode?: string;
  /** 机器类型id */
  machineTypeId?: string;
  /** 机器类型名称 */
  machineTypeName?: string;
  /** 工位名称 */
  name?: string;
  /**
   * 工位对接编号
   * @format int32
   */
  plcCode?: number;
  /** 产能组 */
  productionCapacityGroup?: string;
  /**
   * 工位加工类型
   * @format int32
   */
  properties?: number;
  /**
   * 顺序
   * @format int32
   */
  sort?: number;
  /** 标准效率 */
  standardEfficiency?: number;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  title?: string;
  /**
   * 程序传输方式：0-关闭，1-在线写入，2-ftp，3-串口传输
   * @format int32
   */
  transmissionMethod?: number;
  /**
   * 工位类型：空、机器、人工
   * @format int32
   */
  type?: number;
}

/** WorkstationVO_1 */
export interface WorkstationVO1 {
  /** 工位组ID */
  workstationGroupIdList?: string[];
  /** 工位ID列表 */
  workstationIdList?: string[];
}

/** WorkstationWcsDmpDTO */
export interface WorkstationWcsDmpDTO {
  /** @format int32 */
  dataType?: number;
  description?: string;
  dmpDeviceId?: string;
  id?: string;
  name?: string;
  processParameter?: boolean;
  /** @format int32 */
  wcsDataType?: number;
}

/** CollectParamResVO«object» */
export interface CollectParamResVOObject {
  /** 采集项名称 */
  collectItem?: string;
  /** 采集项真实名称 */
  collectRealItem?: string;
  /** 数据 */
  data?: object[];
  /**
   * 最大值
   * @format double
   */
  maxValue?: number;
  /**
   * 最小值
   * @format double
   */
  minValue?: number;
}

/** HashMap«string,string» */
export type HashMapStringString = Record<string, string>;

/** IPage«AlarmAnalysisWorkstationVO» */
export interface IPageAlarmAnalysisWorkstationVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AlarmAnalysisWorkstationVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«AlarmDataSheetVO» */
export interface IPageAlarmDataSheetVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AlarmDataSheetVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«AlarmLibraryItemVO» */
export interface IPageAlarmLibraryItemVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AlarmLibraryItemVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«AlarmLibraryVO» */
export interface IPageAlarmLibraryVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AlarmLibraryVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«AlarmRecordVO» */
export interface IPageAlarmRecordVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AlarmRecordVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«BizUpdateLogVO» */
export interface IPageBizUpdateLogVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: BizUpdateLogVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ParamMonitoringAnalysisDetailVO» */
export interface IPageParamMonitoringAnalysisDetailVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ParamMonitoringAnalysisDetailVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ProcessParameterRealVO» */
export interface IPageProcessParameterRealVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ProcessParameterRealVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«StatisticsDataVO» */
export interface IPageStatisticsDataVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: StatisticsDataVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«StatusRecordDateVO» */
export interface IPageStatusRecordDateVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: StatusRecordDateVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«StatusRecordWorkstationVO» */
export interface IPageStatusRecordWorkstationVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: StatusRecordWorkstationVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WorkstationFeedBackDetailVO» */
export interface IPageWorkstationFeedBackDetailVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WorkstationFeedBackDetailVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WorkstationFeedbackInfoVO» */
export interface IPageWorkstationFeedbackInfoVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WorkstationFeedbackInfoVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WorkstationVO» */
export interface IPageWorkstationVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WorkstationVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/**
 * R«AlarmLibraryDetailVO»
 * 返回信息
 */
export interface RAlarmLibraryDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AlarmLibraryDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AlarmLibraryItemDetailVO»
 * 返回信息
 */
export interface RAlarmLibraryItemDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AlarmLibraryItemDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AlarmLibraryItemVO»
 * 返回信息
 */
export interface RAlarmLibraryItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AlarmLibraryItemVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AlarmLibraryVO»
 * 返回信息
 */
export interface RAlarmLibraryVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AlarmLibraryVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AlarmRecordDetailVO»
 * 返回信息
 */
export interface RAlarmRecordDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AlarmRecordDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AlarmSummaryGraphVO»
 * 返回信息
 */
export interface RAlarmSummaryGraphVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AlarmSummaryGraphVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

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
 * R«CollectParamResVO«object»»
 * 返回信息
 */
export interface RCollectParamResVOObject {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CollectParamResVOObject;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AlarmAnalysisWorkstationVO»»
 * 返回信息
 */
export interface RIPageAlarmAnalysisWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAlarmAnalysisWorkstationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AlarmDataSheetVO»»
 * 返回信息
 */
export interface RIPageAlarmDataSheetVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAlarmDataSheetVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AlarmLibraryItemVO»»
 * 返回信息
 */
export interface RIPageAlarmLibraryItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAlarmLibraryItemVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AlarmLibraryVO»»
 * 返回信息
 */
export interface RIPageAlarmLibraryVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAlarmLibraryVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AlarmRecordVO»»
 * 返回信息
 */
export interface RIPageAlarmRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAlarmRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«BizUpdateLogVO»»
 * 返回信息
 */
export interface RIPageBizUpdateLogVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageBizUpdateLogVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ParamMonitoringAnalysisDetailVO»»
 * 返回信息
 */
export interface RIPageParamMonitoringAnalysisDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageParamMonitoringAnalysisDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ProcessParameterRealVO»»
 * 返回信息
 */
export interface RIPageProcessParameterRealVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageProcessParameterRealVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«StatusRecordDateVO»»
 * 返回信息
 */
export interface RIPageStatusRecordDateVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageStatusRecordDateVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«StatusRecordWorkstationVO»»
 * 返回信息
 */
export interface RIPageStatusRecordWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageStatusRecordWorkstationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WorkstationFeedBackDetailVO»»
 * 返回信息
 */
export interface RIPageWorkstationFeedBackDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWorkstationFeedBackDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WorkstationFeedbackInfoVO»»
 * 返回信息
 */
export interface RIPageWorkstationFeedbackInfoVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWorkstationFeedbackInfoVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WorkstationVO»»
 * 返回信息
 */
export interface RIPageWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWorkstationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«AlarmDataSheetShiftVO»»
 * 返回信息
 */
export interface RListAlarmDataSheetShiftVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AlarmDataSheetShiftVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«AlarmSummaryGraphShiftVO»»
 * 返回信息
 */
export interface RListAlarmSummaryGraphShiftVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AlarmSummaryGraphShiftVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«AllShiftTimeDetail»»
 * 返回信息
 */
export interface RListAllShiftTimeDetail {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AllShiftTimeDetail[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ChartDataVO»»
 * 返回信息
 */
export interface RListChartDataVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ChartDataVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ColumnInfoVO»»
 * 返回信息
 */
export interface RListColumnInfoVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ColumnInfoVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DeviceStatusStatisticsVO»»
 * 返回信息
 */
export interface RListDeviceStatusStatisticsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DeviceStatusStatisticsVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DeviceWsStatisticsVO»»
 * 返回信息
 */
export interface RListDeviceWsStatisticsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DeviceWsStatisticsVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DmpStatusVariableVO»»
 * 返回信息
 */
export interface RListDmpStatusVariableVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DmpStatusVariableVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DmpVariablesVO»»
 * 返回信息
 */
export interface RListDmpVariablesVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DmpVariablesVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«GlobalWcs»»
 * 返回信息
 */
export interface RListGlobalWcs {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: GlobalWcs[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«HashMap«string,string»»»
 * 返回信息
 */
export interface RListHashMapStringString {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HashMapStringString[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«HmiStatisticsVO»»
 * 返回信息
 */
export interface RListHmiStatisticsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiStatisticsVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«List«SuperAggregateStateVO»»»
 * 返回信息
 */
export interface RListListSuperAggregateStateVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: SuperAggregateStateVO[][];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ParamMonitoringAnalysisVO»»
 * 返回信息
 */
export interface RListParamMonitoringAnalysisVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ParamMonitoringAnalysisVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«StatusAnalysisWorkstationVO»»
 * 返回信息
 */
export interface RListStatusAnalysisWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: StatusAnalysisWorkstationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationFeedBackDetailVO»»
 * 返回信息
 */
export interface RListWorkstationFeedBackDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationFeedBackDetailVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationFeedBackVO»»
 * 返回信息
 */
export interface RListWorkstationFeedBackVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationFeedBackVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationWcsDmpDTO»»
 * 返回信息
 */
export interface RListWorkstationWcsDmpDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationWcsDmpDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ProParamSheetVO»
 * 返回信息
 */
export interface RProParamSheetVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProParamSheetVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ProcessParameterResVO»
 * 返回信息
 */
export interface RProcessParameterResVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProcessParameterResVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ShiftTimeVO»
 * 返回信息
 */
export interface RShiftTimeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ShiftTimeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«StatisticsVO»
 * 返回信息
 */
export interface RStatisticsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: StatisticsVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«StatusRecordShiftIndexChartVO»
 * 返回信息
 */
export interface RStatusRecordShiftIndexChartVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: StatusRecordShiftIndexChartVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«StatusTimeTotalVO»
 * 返回信息
 */
export interface RStatusTimeTotalVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: StatusTimeTotalVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«TimeUsedAnalysisWorkstationVO»
 * 返回信息
 */
export interface RTimeUsedAnalysisWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TimeUsedAnalysisWorkstationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WorkstationBandShiftVO»
 * 返回信息
 */
export interface RWorkstationBandShiftVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationBandShiftVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WorkstationFeedBackVO»
 * 返回信息
 */
export interface RWorkstationFeedBackVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationFeedBackVO;
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
  bladeCps = {
    /**
     * @description 传入的是feedbackId
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackCancelWorkstationFeedbacks
     * @summary 批量撤销反馈
     * @request DELETE:/blade-cps/workstation-wcs-feedback
     * @secure
     */
    workstationFeedbackCancelWorkstationFeedbacks: (ids: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-feedback`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 结束并再次发起反馈
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackEndAndStartAgainFeedback
     * @summary H5: 结束再次发起反馈
     * @request PUT:/blade-cps/workstation-wcs-feedback/end-and-start-again-feedback
     * @secure
     */
    workstationFeedbackEndAndStartAgainFeedback: (endAgainFeedbackDTO: WorkstationEndAndStartImmediateFeedBackDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-feedback/end-and-start-again-feedback`,
        method: 'PUT',
        body: endAgainFeedbackDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 结束指定工位进行中的反馈记录
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackEndFeedback
     * @summary H5: 结束反馈
     * @request PUT:/blade-cps/workstation-wcs-feedback/end-feedback
     * @secure
     */
    workstationFeedbackEndFeedback: (workstationEndImmediateFeedBackDTO: WorkstationEndImmediateFeedBackDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-feedback/end-feedback`,
        method: 'PUT',
        body: workstationEndImmediateFeedBackDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询是否有未计算的反馈记录, true:有正在计算的记录, false: 没有
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackFeedbackStatus
     * @summary 查询工位状态
     * @request POST:/blade-cps/workstation-wcs-feedback/feedback-status
     * @secure
     */
    workstationFeedbackFeedbackStatus: (workstationIds: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-feedback/feedback-status`,
        method: 'POST',
        body: workstationIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackGetById
     * @summary H5:根据ID获取反馈详情
     * @request GET:/blade-cps/workstation-wcs-feedback/get/{id}
     * @secure
     */
    workstationFeedbackGetById: (id: string, params: RequestParams = {}) =>
      this.request<RWorkstationFeedBackVO, void>({
        path: `/blade-cps/workstation-wcs-feedback/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 状态反馈工位信息
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackHmiStateFeedbackHome
     * @summary hmi 状态反馈首页工位列表信息
     * @request POST:/blade-cps/workstation-wcs-feedback/hmi-state-feedback-home
     * @secure
     */
    workstationFeedbackHmiStateFeedbackHome: (workstationIds: string[], params: RequestParams = {}) =>
      this.request<RListWorkstationFeedBackVO, void>({
        path: `/blade-cps/workstation-wcs-feedback/hmi-state-feedback-home`,
        method: 'POST',
        body: workstationIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackLatestByWorkstationId
     * @summary 根据工位ID获取最新反馈信息
     * @request GET:/blade-cps/workstation-wcs-feedback/latest
     * @secure
     */
    workstationFeedbackLatestByWorkstationId: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RWorkstationFeedBackVO, void>({
        path: `/blade-cps/workstation-wcs-feedback/latest`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description data true: 会覆盖反馈,提示 false: 不会覆盖反馈,不提示直接提交
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackOverwriteFeedback
     * @summary 查询是否有覆盖的反馈
     * @request POST:/blade-cps/workstation-wcs-feedback/overwrite-feedback-check
     * @secure
     */
    workstationFeedbackOverwriteFeedback: (noImmediateFeedBackDTO: WorkstationNoImmediateFeedBackDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-feedback/overwrite-feedback-check`,
        method: 'POST',
        body: noImmediateFeedBackDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackPage
     * @summary 工位反馈分页列表查询
     * @request POST:/blade-cps/workstation-wcs-feedback/page
     * @secure
     */
    workstationFeedbackPage: (
      queryDTO: WorkstationFeedBackQueryDTO,
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 排序字段 json传递 */
        orderField?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageWorkstationFeedBackDetailVO, void>({
        path: `/blade-cps/workstation-wcs-feedback/page`,
        method: 'POST',
        query: query,
        body: queryDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 工位即时反馈, 进行中的反馈
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackStartFeedbackByImmediate
     * @summary H5: 状态即时反馈登记
     * @request POST:/blade-cps/workstation-wcs-feedback/start-feedback-by-immediate
     * @secure
     */
    workstationFeedbackStartFeedbackByImmediate: (immediateFeedBackDTO: WorkstationImmediateFeedBackDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-feedback/start-feedback-by-immediate`,
        method: 'POST',
        body: immediateFeedBackDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 时间段反馈
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackStartFeedbackByNoImmediate
     * @summary H5: 时间段反馈
     * @request POST:/blade-cps/workstation-wcs-feedback/start-feedback-by-no-immediate
     * @secure
     */
    workstationFeedbackStartFeedbackByNoImmediate: (noImmediateFeedBackDTO: WorkstationNoImmediateFeedBackDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-feedback/start-feedback-by-no-immediate`,
        method: 'POST',
        body: noImmediateFeedBackDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询工位今日反馈记录
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackTodayFeedback
     * @summary H5:今日反馈,历史反馈
     * @request GET:/blade-cps/workstation-wcs-feedback/today-feedback
     * @secure
     */
    workstationFeedbackTodayFeedback: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationFeedBackDetailVO, void>({
        path: `/blade-cps/workstation-wcs-feedback/today-feedback`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位反馈
     * @name WorkstationFeedbackFeedbackInfo
     * @summary H5: 分页获取各个工位当前反馈信息
     * @request GET:/blade-cps/workstation-wcs-feedback/workingstation-feedback-info
     * @secure
     */
    workstationFeedbackFeedbackInfo: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 排除持续反馈工位  true: 排除  false: 不排除 */
        excludeImmediate?: boolean;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageWorkstationFeedbackInfoVO, void>({
        path: `/blade-cps/workstation-wcs-feedback/workingstation-feedback-info`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
  bladeMdc = {
    /**
     * @description 传入id
     *
     * @tags 报警库报警项管理
     * @name AlarmLibraryItemDetail
     * @summary 报警库详情
     * @request GET:/blade-mdc/alarm-library-item/detail/{id}
     * @secure
     */
    alarmLibraryItemDetail: (id: string, params: RequestParams = {}) =>
      this.request<RAlarmLibraryItemDetailVO, void>({
        path: `/blade-mdc/alarm-library-item/detail/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入alarmLibraryItemAddVO
     *
     * @tags 报警库报警项管理
     * @name AlarmLibraryItemInsert
     * @summary 新增报警项
     * @request POST:/blade-mdc/alarm-library-item/insert
     * @secure
     */
    alarmLibraryItemInsert: (alarmLibraryItemAddVO: AlarmLibraryItemAddVO, params: RequestParams = {}) =>
      this.request<RAlarmLibraryItemVO, void>({
        path: `/blade-mdc/alarm-library-item/insert`,
        method: 'POST',
        body: alarmLibraryItemAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入alarmLibraryItemQueryVO
     *
     * @tags 报警库报警项管理
     * @name AlarmLibraryItemPage
     * @summary 分页查询报警项
     * @request POST:/blade-mdc/alarm-library-item/page
     * @secure
     */
    alarmLibraryItemPage: (
      alarmLibraryItemQueryVO: AlarmLibraryItemQueryVO,
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
      this.request<RIPageAlarmLibraryItemVO, void>({
        path: `/blade-mdc/alarm-library-item/page`,
        method: 'POST',
        query: query,
        body: alarmLibraryItemQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 报警库报警项管理
     * @name AlarmLibraryItemRemove
     * @summary 删除报警项
     * @request DELETE:/blade-mdc/alarm-library-item/remove
     * @secure
     */
    alarmLibraryItemRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-mdc/alarm-library-item/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入alarmLibraryItemUpdateVO
     *
     * @tags 报警库报警项管理
     * @name AlarmLibraryItemUpdate
     * @summary 修改报警项
     * @request PUT:/blade-mdc/alarm-library-item/update
     * @secure
     */
    alarmLibraryItemUpdate: (alarmLibraryItemUpdateVO: AlarmLibraryItemUpdateVO, params: RequestParams = {}) =>
      this.request<RAlarmLibraryItemVO, void>({
        path: `/blade-mdc/alarm-library-item/update`,
        method: 'PUT',
        body: alarmLibraryItemUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 报警库管理
     * @name AlarmLibraryDetail
     * @summary 报警库详情
     * @request GET:/blade-mdc/alarm-library/detail/{id}
     * @secure
     */
    alarmLibraryDetail: (id: string, params: RequestParams = {}) =>
      this.request<RAlarmLibraryDetailVO, void>({
        path: `/blade-mdc/alarm-library/detail/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入alarmLibraryAddVO
     *
     * @tags 报警库管理
     * @name AlarmLibraryInsert
     * @summary 新增报警库
     * @request POST:/blade-mdc/alarm-library/insert
     * @secure
     */
    alarmLibraryInsert: (alarmLibraryAddVO: AlarmLibraryAddVO, params: RequestParams = {}) =>
      this.request<RAlarmLibraryVO, void>({
        path: `/blade-mdc/alarm-library/insert`,
        method: 'POST',
        body: alarmLibraryAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入keyword
     *
     * @tags 报警库管理
     * @name AlarmLibraryPage
     * @summary 报警库分页
     * @request GET:/blade-mdc/alarm-library/page
     * @secure
     */
    alarmLibraryPage: (
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
        /** keyword */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageAlarmLibraryVO, void>({
        path: `/blade-mdc/alarm-library/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 报警库管理
     * @name AlarmLibraryRemove
     * @summary 删除报警库
     * @request DELETE:/blade-mdc/alarm-library/remove
     * @secure
     */
    alarmLibraryRemove: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-mdc/alarm-library/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入alarmLibraryUpdateVO
     *
     * @tags 报警库管理
     * @name AlarmLibraryUpdate
     * @summary 修改报警库
     * @request PUT:/blade-mdc/alarm-library/update
     * @secure
     */
    alarmLibraryUpdate: (alarmLibraryUpdateVO: AlarmLibraryUpdateVO, params: RequestParams = {}) =>
      this.request<RAlarmLibraryVO, void>({
        path: `/blade-mdc/alarm-library/update`,
        method: 'PUT',
        body: alarmLibraryUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 报警库管理
     * @name AlarmLibraryWorkstationPage
     * @summary 报警库关联工位分页
     * @request GET:/blade-mdc/alarm-library/workstation-page
     * @secure
     */
    alarmLibraryWorkstationPage: (
      query: {
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
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageWorkstationVO, void>({
        path: `/blade-mdc/alarm-library/workstation-page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 报警记录Controller
     * @name AlarmRecordExport
     * @summary 报警记录导出
     * @request POST:/blade-mdc/alarm-record/export
     * @secure
     */
    alarmRecordExport: (queryVO: AlarmRecordQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-mdc/alarm-record/export`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 报警记录Controller
     * @name AlarmRecordGet
     * @summary 查询报警记录详情
     * @request GET:/blade-mdc/alarm-record/get
     * @secure
     */
    alarmRecordGet: (
      query: {
        /** id */
        id?: string;
        /** ts */
        ts: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RAlarmRecordDetailVO, void>({
        path: `/blade-mdc/alarm-record/get`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 报警记录Controller
     * @name AlarmRecordPage
     * @summary 分页查询报警记录
     * @request POST:/blade-mdc/alarm-record/page
     * @secure
     */
    alarmRecordPage: (
      queryVO: AlarmRecordQueryVO,
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
      this.request<RIPageAlarmRecordVO, void>({
        path: `/blade-mdc/alarm-record/page`,
        method: 'POST',
        query: query,
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 报警统计
     * @name AlarmPageAlarm
     * @summary 报警统计-数据表
     * @request POST:/blade-mdc/alarm/data-sheet
     * @secure
     */
    alarmPageAlarm: (
      vo: AlarmShiftSearchVO,
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
      this.request<RIPageAlarmDataSheetVO, void>({
        path: `/blade-mdc/alarm/data-sheet`,
        method: 'POST',
        query: query,
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 报警统计
     * @name AlarmListShiftAlarm
     * @summary 报警统计-班次-数据表
     * @request POST:/blade-mdc/alarm/data-shift-sheet
     * @secure
     */
    alarmListShiftAlarm: (vo: AlarmShiftSearchVO, params: RequestParams = {}) =>
      this.request<RListAlarmDataSheetShiftVO, void>({
        path: `/blade-mdc/alarm/data-shift-sheet`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 报警统计
     * @name AlarmExportAlarmData
     * @summary 报警统计-导出文件
     * @request POST:/blade-mdc/alarm/export-alarm
     * @secure
     */
    alarmExportAlarmData: (vo: AlarmShiftSearchExcelVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-mdc/alarm/export-alarm`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 报警统计
     * @name AlarmSummaryGraph
     * @summary 报警统计-统计图
     * @request POST:/blade-mdc/alarm/summary-graph
     * @secure
     */
    alarmSummaryGraph: (vo: AlarmShiftSearchVO, params: RequestParams = {}) =>
      this.request<RAlarmSummaryGraphVO, void>({
        path: `/blade-mdc/alarm/summary-graph`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 报警统计
     * @name AlarmSummaryShiftGraph
     * @summary 报警统计-班次-统计图
     * @request POST:/blade-mdc/alarm/summary-shift-graph
     * @secure
     */
    alarmSummaryShiftGraph: (vo: AlarmShiftSearchVO, params: RequestParams = {}) =>
      this.request<RListAlarmSummaryGraphShiftVO, void>({
        path: `/blade-mdc/alarm/summary-shift-graph`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务变更日志
     * @name BizUpdateLogPage
     * @summary 分页查询业务变更日志记录
     * @request POST:/blade-mdc/biz-update-log/page
     * @secure
     */
    bizUpdateLogPage: (
      queryVO: BizUpdateLogQueryVO,
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
      this.request<RIPageBizUpdateLogVO, void>({
        path: `/blade-mdc/biz-update-log/page`,
        method: 'POST',
        query: query,
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 效率分析controller
     * @name EfficiencyAnalysisEfficiencyAnalysis
     * @summary 效率分析
     * @request POST:/blade-mdc/efficiency-analysis
     * @secure
     */
    efficiencyAnalysisEfficiencyAnalysis: (
      statisticsAnalysisQueryVO: StatisticsAnalysisQueryVO,
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
      this.request<RStatisticsVO, void>({
        path: `/blade-mdc/efficiency-analysis`,
        method: 'POST',
        query: query,
        body: statisticsAnalysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 效率分析controller
     * @name EfficiencyAnalysisExportEfficiencyAnalysis
     * @summary 1导出效率分析
     * @request POST:/blade-mdc/efficiency-analysis/export
     * @secure
     */
    efficiencyAnalysisExportEfficiencyAnalysis: (statisticsAnalysisQueryVO: StatisticsAnalysisQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-mdc/efficiency-analysis/export`,
        method: 'POST',
        body: statisticsAnalysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 效率分析controller
     * @name EfficiencyAnalysisGetTodayEfficiencyAnalysis
     * @summary hmi 传入设备的稼动率 运行率 报警率
     * @request GET:/blade-mdc/efficiency-analysis/hmi-today-efficiency-analysis
     * @secure
     */
    efficiencyAnalysisGetTodayEfficiencyAnalysis: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListHmiStatisticsVO, void>({
        path: `/blade-mdc/efficiency-analysis/hmi-today-efficiency-analysis`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 效率分析controller
     * @name EfficiencyAnalysisGetIntervalDate
     * @summary 获取拆分日期
     * @request POST:/blade-mdc/efficiency-analysis/interval
     * @secure
     */
    efficiencyAnalysisGetIntervalDate: (queryIntervalDateVO: QueryIntervalDateVO, params: RequestParams = {}) =>
      this.request<RListColumnInfoVO, void>({
        path: `/blade-mdc/efficiency-analysis/interval`,
        method: 'POST',
        body: queryIntervalDateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产量统计
     * @name OutputStatisticsOutputStatistics
     * @summary 产量统计
     * @request POST:/blade-mdc/output
     * @secure
     */
    outputStatisticsOutputStatistics: (
      statisticsAnalysisQueryVO: StatisticsAnalysisQueryVO,
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
      this.request<RStatisticsVO, void>({
        path: `/blade-mdc/output`,
        method: 'POST',
        query: query,
        body: statisticsAnalysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产量统计
     * @name OutputStatisticsExportOutputAccount
     * @summary 导出产量统计
     * @request POST:/blade-mdc/output/export
     * @secure
     */
    outputStatisticsExportOutputAccount: (analysisQueryVO: StatisticsAnalysisQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-mdc/output/export`,
        method: 'POST',
        body: analysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 异常参数类型统计(按次数)
     *
     * @tags 异常统计controller
     * @name ParamMonitoringAnalysisCount
     * @summary 异常参数类型统计(按次数)
     * @request POST:/blade-mdc/param-monitoring/analysis-count
     * @secure
     */
    paramMonitoringAnalysisCount: (paramMonitoringAnalysisQueryVO: ParamMonitoringAnalysisQueryVO, params: RequestParams = {}) =>
      this.request<ParamMonitoringAnalysisPieChartVO[], void>({
        path: `/blade-mdc/param-monitoring/analysis-count`,
        method: 'POST',
        body: paramMonitoringAnalysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 导出
     *
     * @tags 异常统计controller
     * @name ParamMonitoringAnalysisExport
     * @summary 导出
     * @request POST:/blade-mdc/param-monitoring/analysis-export
     * @secure
     */
    paramMonitoringAnalysisExport: (paramMonitoringAnalysisQueryVO: ParamMonitoringAnalysisDetailQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-mdc/param-monitoring/analysis-export`,
        method: 'POST',
        body: paramMonitoringAnalysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 异常参数统计
     *
     * @tags 异常统计controller
     * @name ParamMonitoringAnalysisHistogram
     * @summary 异常参数统计
     * @request POST:/blade-mdc/param-monitoring/analysis-histogram
     * @secure
     */
    paramMonitoringAnalysisHistogram: (paramMonitoringAnalysisQueryVO: ParamMonitoringAnalysisQueryVO, params: RequestParams = {}) =>
      this.request<ParamMonitoringAnalysisHistogramVO, void>({
        path: `/blade-mdc/param-monitoring/analysis-histogram`,
        method: 'POST',
        body: paramMonitoringAnalysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 异常数据标识异常明细分页
     *
     * @tags 异常统计controller
     * @name ParamMonitoringPageAnalysisDetail
     * @summary 异常数据标识异常明细分页
     * @request POST:/blade-mdc/param-monitoring/analysis-page
     * @secure
     */
    paramMonitoringPageAnalysisDetail: (
      paramMonitoringAnalysisQueryVO: ParamMonitoringAnalysisDetailQueryVO,
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 排序字段 json传递 */
        orderField?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageParamMonitoringAnalysisDetailVO, void>({
        path: `/blade-mdc/param-monitoring/analysis-page`,
        method: 'POST',
        query: query,
        body: paramMonitoringAnalysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 参数异常分析统计
     *
     * @tags 异常统计controller
     * @name ParamMonitoringAnalysisStatistics
     * @summary 参数异常分析统计
     * @request POST:/blade-mdc/param-monitoring/analysis-statistics
     * @secure
     */
    paramMonitoringAnalysisStatistics: (paramMonitoringAnalysisQueryVO: ParamMonitoringAnalysisDetailQueryVO, params: RequestParams = {}) =>
      this.request<RListParamMonitoringAnalysisVO, void>({
        path: `/blade-mdc/param-monitoring/analysis-statistics`,
        method: 'POST',
        body: paramMonitoringAnalysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 异常参数统计(按时长)
     *
     * @tags 异常统计controller
     * @name ParamMonitoringAnalysisTime
     * @summary 异常参数统计(按时长)
     * @request POST:/blade-mdc/param-monitoring/analysis-time
     * @secure
     */
    paramMonitoringAnalysisTime: (paramMonitoringAnalysisQueryVO: ParamMonitoringAnalysisQueryVO, params: RequestParams = {}) =>
      this.request<ParamMonitoringAnalysisPieChartVO[], void>({
        path: `/blade-mdc/param-monitoring/analysis-time`,
        method: 'POST',
        body: paramMonitoringAnalysisQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 加工过程参数controller
     * @name ProcessParameterListGlobalWcs
     * @summary 获取wcs颜色
     * @request GET:/blade-mdc/process-parameter
     * @secure
     */
    processParameterListGlobalWcs: (params: RequestParams = {}) =>
      this.request<RListGlobalWcs, void>({
        path: `/blade-mdc/process-parameter`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 加工过程参数controller
     * @name ProcessParameterGetAllShiftTime
     * @summary 获取所选天的班次开始结束时间
     * @request POST:/blade-mdc/process-parameter/all-shift-time
     * @secure
     */
    processParameterGetAllShiftTime: (vo: WorkstationShiftSearchVO, params: RequestParams = {}) =>
      this.request<RListAllShiftTimeDetail, void>({
        path: `/blade-mdc/process-parameter/all-shift-time`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 加工过程参数controller
     * @name ProcessParameterQueryProcessParameterChart
     * @summary 加工过程参数
     * @request POST:/blade-mdc/process-parameter/chart
     * @secure
     */
    processParameterQueryProcessParameterChart: (vo: ProcessParameterSearchVO, params: RequestParams = {}) =>
      this.request<RProcessParameterResVO, void>({
        path: `/blade-mdc/process-parameter/chart`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 加工过程参数controller
     * @name ProcessParameterQueryProcessParameterOneChart
     * @summary 单个加工过程参数
     * @request POST:/blade-mdc/process-parameter/chart/dmp-item
     * @secure
     */
    processParameterQueryProcessParameterOneChart: (vo: CollectParamSearchVO, params: RequestParams = {}) =>
      this.request<RCollectParamResVOObject, void>({
        path: `/blade-mdc/process-parameter/chart/dmp-item`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 加工过程参数controller
     * @name ProcessParameterExportProcessParam
     * @summary 导出加工过程参数
     * @request POST:/blade-mdc/process-parameter/excel/export
     * @secure
     */
    processParameterExportProcessParam: (vo: ProcessParamExcelVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-mdc/process-parameter/excel/export`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 加工过程参数controller
     * @name ProcessParameterPageProcessParameter
     * @summary 分页查询采集项数据
     * @request POST:/blade-mdc/process-parameter/item
     * @secure
     */
    processParameterPageProcessParameter: (
      vo: ProcessParameterItemSearchVO,
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
      this.request<RIPageProcessParameterRealVO, void>({
        path: `/blade-mdc/process-parameter/item`,
        method: 'POST',
        query: query,
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 加工过程参数controller
     * @name ProcessParameterProcessParam
     * @summary 参数选择
     * @request GET:/blade-mdc/process-parameter/param
     * @secure
     */
    processParameterProcessParam: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationWcsDmpDTO, void>({
        path: `/blade-mdc/process-parameter/param`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 加工过程参数controller
     * @name ProcessParameterQueryProcessParameterSheet
     * @summary 加工过程参数
     * @request POST:/blade-mdc/process-parameter/sheet
     * @secure
     */
    processParameterQueryProcessParameterSheet: (vo: ProcessParameterSearchVO, params: RequestParams = {}) =>
      this.request<RProParamSheetVO, void>({
        path: `/blade-mdc/process-parameter/sheet`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 加工过程参数controller
     * @name ProcessParameterGetShiftTime
     * @summary 获取班次开始结束时间
     * @request POST:/blade-mdc/process-parameter/shift-time
     * @secure
     */
    processParameterGetShiftTime: (vo: ProcessParameterSearchVO, params: RequestParams = {}) =>
      this.request<RShiftTimeVO, void>({
        path: `/blade-mdc/process-parameter/shift-time`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入workstationId
     *
     * @tags 实时数据
     * @name RealTimeDataGetWorkstationDmpVariables
     * @summary 获取工位的采集项
     * @request GET:/blade-mdc/real-time-data/dmp-variables/{workstationId}
     * @secure
     */
    realTimeDataGetWorkstationDmpVariables: (workstationId: string, params: RequestParams = {}) =>
      this.request<RListDmpVariablesVO, void>({
        path: `/blade-mdc/real-time-data/dmp-variables/${workstationId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入工位组ID或者工位ID列表
     *
     * @tags 实时数据
     * @name RealTimeDataGetWorkstationRealTimeStatus
     * @summary 获取工位的状态
     * @request POST:/blade-mdc/real-time-data/status
     * @secure
     */
    realTimeDataGetWorkstationRealTimeStatus: (workstationVO: WorkstationVO1, params: RequestParams = {}) =>
      this.request<RListDmpStatusVariableVO, void>({
        path: `/blade-mdc/real-time-data/status`,
        method: 'POST',
        body: workstationVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 将查询条件重组为tab需要的条件
     *
     * @tags 统计分析controller
     * @name StatisticsSplitFilter
     * @summary 分割日期
     * @request POST:/blade-mdc/statistics/split-filter
     * @secure
     */
    statisticsSplitFilter: (input: AnalysisFilterVO, params: RequestParams = {}) =>
      this.request<SplitFilterListVO, void>({
        path: `/blade-mdc/statistics/split-filter`,
        method: 'POST',
        body: input,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 状态记录
     * @name StatusRecordCrossDayState
     * @summary 分割状态数据跨天数据
     * @request POST:/blade-mdc/status-record/cross-days
     * @secure
     */
    statusRecordCrossDayState: (vo: CrossDayStateVO, params: RequestParams = {}) =>
      this.request<RListListSuperAggregateStateVO, void>({
        path: `/blade-mdc/status-record/cross-days`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入statusRecordDetailSelectVO
     *
     * @tags 状态记录
     * @name StatusRecordGetEquipmentEfficiency
     * @summary 查询设备效率
     * @request POST:/blade-mdc/status-record/equipment-efficiency
     * @secure
     */
    statusRecordGetEquipmentEfficiency: (statusRecordDetailSelectVO: StatusRecordDetailSelectVO, params: RequestParams = {}) =>
      this.request<RListChartDataVO, void>({
        path: `/blade-mdc/status-record/equipment-efficiency`,
        method: 'POST',
        body: statusRecordDetailSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 状态记录
     * @name StatusRecordExportStatusRecord
     * @summary 状态记录导出
     * @request POST:/blade-mdc/status-record/excel/export
     * @secure
     */
    statusRecordExportStatusRecord: (vo: StatusRecordExcelVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-mdc/status-record/excel/export`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入statusRecordDetailSelectVO
     *
     * @tags 状态记录
     * @name StatusRecordGetShiftIndexStatusRecordChart
     * @summary 查询班次状态记录图表
     * @request POST:/blade-mdc/status-record/shift-index-status-record-chart
     * @secure
     */
    statusRecordGetShiftIndexStatusRecordChart: (statusRecordDetailSelectVO: StatusRecordDetailSelectVO, params: RequestParams = {}) =>
      this.request<RStatusRecordShiftIndexChartVO, void>({
        path: `/blade-mdc/status-record/shift-index-status-record-chart`,
        method: 'POST',
        body: statusRecordDetailSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入statusRecordDetailSelectVO
     *
     * @tags 状态记录
     * @name StatusRecordGetShiftIndexStatusRecordTable
     * @summary 查询班次状态记录表格
     * @request POST:/blade-mdc/status-record/shift-index-status-record-table
     * @secure
     */
    statusRecordGetShiftIndexStatusRecordTable: (statusRecordDetailSelectVO: StatusRecordDetailSelectVO, params: RequestParams = {}) =>
      this.request<RListHashMapStringString, void>({
        path: `/blade-mdc/status-record/shift-index-status-record-table`,
        method: 'POST',
        body: statusRecordDetailSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入statusRecordDateSelectVO
     *
     * @tags 状态记录
     * @name StatusRecordGetStatusRecordByDate
     * @summary 根据日期查询状态记录
     * @request POST:/blade-mdc/status-record/status-record-by-date
     * @secure
     */
    statusRecordGetStatusRecordByDate: (
      statusRecordDateSelectVO: StatusRecordDateSelectVO,
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
      this.request<RIPageStatusRecordDateVO, void>({
        path: `/blade-mdc/status-record/status-record-by-date`,
        method: 'POST',
        query: query,
        body: statusRecordDateSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入statusRecordDateSelectVO
     *
     * @tags 状态记录
     * @name StatusRecordGetStatusRecordByDates
     * @summary 根据开始结束时间查询状态记录
     * @request POST:/blade-mdc/status-record/status-record-by-dates
     * @secure
     */
    statusRecordGetStatusRecordByDates: (
      statusRecordDateTimeSelectVO: StatusRecordDateTimeSelectVO,
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
      this.request<RIPageStatusRecordDateVO, void>({
        path: `/blade-mdc/status-record/status-record-by-dates`,
        method: 'POST',
        query: query,
        body: statusRecordDateTimeSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入statusRecordWorkstationSelectVO
     *
     * @tags 状态记录
     * @name StatusRecordGetStatusRecordByWorkstation
     * @summary 根据工位查询状态记录
     * @request POST:/blade-mdc/status-record/status-record-by-workstation
     * @secure
     */
    statusRecordGetStatusRecordByWorkstation: (
      statusRecordWorkstationSelectVO: StatusRecordWorkstationSelectVO,
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
      this.request<RIPageStatusRecordWorkstationVO, void>({
        path: `/blade-mdc/status-record/status-record-by-workstation`,
        method: 'POST',
        query: query,
        body: statusRecordWorkstationSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入statusRecordDetailSelectVO
     *
     * @tags 状态记录
     * @name StatusRecordGetTimeDistribution
     * @summary 查询用时分布情况
     * @request POST:/blade-mdc/status-record/time-distribution
     * @secure
     */
    statusRecordGetTimeDistribution: (statusRecordDetailSelectVO: StatusRecordDetailSelectVO, params: RequestParams = {}) =>
      this.request<RListChartDataVO, void>({
        path: `/blade-mdc/status-record/time-distribution`,
        method: 'POST',
        body: statusRecordDetailSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用时分析controller
     * @name TimeUsedAnalysisExportTimeUsed
     * @summary 导出
     * @request POST:/blade-mdc/time-used-analysis/excel/export
     * @secure
     */
    timeUsedAnalysisExportTimeUsed: (vo: TimeUsedExcelVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-mdc/time-used-analysis/excel/export`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用时分析controller
     * @name TimeUsedAnalysisTimeUsedStatisticsByWorkstation
     * @summary 按多设备统计用时
     * @request POST:/blade-mdc/time-used-analysis/work-stations
     * @secure
     */
    timeUsedAnalysisTimeUsedStatisticsByWorkstation: (
      stationVO: TimeUsedStatisticsByWorkstationVO,
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
      this.request<RTimeUsedAnalysisWorkstationVO, void>({
        path: `/blade-mdc/time-used-analysis/work-stations`,
        method: 'POST',
        query: query,
        body: stationVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用时分析controller
     * @name TimeUsedAnalysisQueryWorkStationShiftIndexName
     * @summary 查询工位绑定的班次信息
     * @request POST:/blade-mdc/time-used-analysis/workstation/shiftName
     * @secure
     */
    timeUsedAnalysisQueryWorkStationShiftIndexName: (vo: QueryShiftIndexNameVO, params: RequestParams = {}) =>
      this.request<RWorkstationBandShiftVO, void>({
        path: `/blade-mdc/time-used-analysis/workstation/shiftName`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位分析controller
     * @name WorkstationAnalysisAlarmByWorkstation
     * @summary 工位预警信息
     * @request GET:/blade-mdc/work-station-analysis/alarm/{workstationId}
     * @secure
     */
    workstationAnalysisAlarmByWorkstation: (
      workstationId: string,
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
      this.request<RIPageAlarmAnalysisWorkstationVO, void>({
        path: `/blade-mdc/work-station-analysis/alarm/${workstationId}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位分析controller
     * @name WorkstationAnalysisDeviceStatusStatistics
     * @summary 设备状态统计
     * @request GET:/blade-mdc/work-station-analysis/device-status-statistics
     * @secure
     */
    workstationAnalysisDeviceStatusStatistics: (params: RequestParams = {}) =>
      this.request<RListDeviceStatusStatisticsVO, void>({
        path: `/blade-mdc/work-station-analysis/device-status-statistics`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位分析controller
     * @name WorkstationAnalysisDeviceStatusStatisticsWithWs
     * @summary 设备状态统计按工位
     * @request POST:/blade-mdc/work-station-analysis/device-status-statistics-with-ws
     * @secure
     */
    workstationAnalysisDeviceStatusStatisticsWithWs: (vo: IdsVO, params: RequestParams = {}) =>
      this.request<RListDeviceWsStatisticsVO, void>({
        path: `/blade-mdc/work-station-analysis/device-status-statistics-with-ws`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位分析controller
     * @name WorkstationAnalysisStatusTimeTotalByGroupId
     * @summary 工位组标签统计
     * @request GET:/blade-mdc/work-station-analysis/status-time-total
     * @secure
     */
    workstationAnalysisStatusTimeTotalByGroupId: (
      query: {
        /** groupId */
        groupId: string;
        /** groupName */
        groupName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RStatusTimeTotalVO, void>({
        path: `/blade-mdc/work-station-analysis/status-time-total`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位分析controller
     * @name WorkstationAnalysisStatusByWorkstation
     * @summary 工位当日状态甘特图
     * @request GET:/blade-mdc/work-station-analysis/status/{workstationId}
     * @secure
     */
    workstationAnalysisStatusByWorkstation: (workstationId: string, params: RequestParams = {}) =>
      this.request<RListStatusAnalysisWorkstationVO, void>({
        path: `/blade-mdc/work-station-analysis/status/${workstationId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
}
