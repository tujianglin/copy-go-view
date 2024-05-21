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

/** AddOrderVO */
export interface AddOrderVO {
  /**
   * 工单数量
   * @format int32
   */
  assignNum?: number;
  /** 工艺路线ID */
  craftId?: string;
  /** 工艺路线名称 */
  craftName?: string;
  /** 工艺路线版本 */
  craftVersionId?: string;
  /** 工艺路线名称 */
  craftVersionName?: string;
  /** 订单编号 */
  orderCode?: string;
  /** 产品编码 */
  productCode?: string;
  /** 产品ID */
  productId?: string;
  /** 产品名称 */
  productName?: string;
  /** 班次id */
  shiftDetailId?: string;
  /** 班次名称 */
  shiftName?: string;
}

/** BatchCalendarOrderVO */
export interface BatchCalendarOrderVO {
  /** 班次工单信息 */
  addOrderVOList?: AddOrderVO[];
  /** 指定日历日期 */
  dates?: any[];
  /**
   * 工单类型  1.来料  2.生产
   * @format int32
   */
  orderType?: number;
  /** 班制id */
  shiftModelId?: string;
  /** 班制名称 */
  shiftModelName?: string;
}

/** BatchOrderReturnVO */
export interface BatchOrderReturnVO {
  /** 工单编码 */
  code?: string;
  /**
   * 日期
   * @format date
   */
  dateTime?: string;
  /** 工单id */
  orderId?: string;
  /** 原因 */
  reason?: string;
  /** 班次ID */
  shiftDetailId?: string;
  /** 班次名称 */
  shiftName?: string;
  /**
   * 状态：1 成功  0 失败
   * @format int32
   */
  status?: number;
}

/** BlackLevelQueryVO */
export interface BlackLevelQueryVO {
  /**
   * 开始时间
   * @format date-time
   */
  beginDate?: string;
  /**
   * 黑名单等级
   * @format int32
   */
  blackLevel?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endDate?: string;
  /** 工件号 */
  no?: string;
}

/** BlackLevelRecordVO */
export interface BlackLevelRecordVO {
  /** 黑名单等级 */
  blackLevel?: 'FLAG_BLACK' | 'FLAG_MAYBE_BLKAC' | 'MESSAGE' | 'REJECT';
  /**
   * 发生时间
   * @format date-time
   */
  createTime?: string;
  /** id */
  id?: string;
  /** 工单编号 */
  orderCode?: string;
  /** 毛胚嘛 */
  partNo?: string;
  /** 工件编号 */
  workNo?: string;
  /** 工位 */
  workstationName?: string;
}

/** BoxGenCodeDTO */
export interface BoxGenCodeDTO {
  workstationId: string;
}

/** BoxWorkstationVO */
export interface BoxWorkstationVO {
  /** 是否允许重复装箱 */
  allowReboxing?: boolean;
  /** 是否允许拆箱 */
  allowUnboxing?: boolean;
  /** 是否自动编码规则 */
  autoGenCode?: boolean;
  beltlineId?: string;
  /** 是否满箱打印 */
  fullPrint?: boolean;
  /**
   * 最大装箱数
   * @format int32
   */
  maxBoxCount?: number;
  /** 仅检查合格件 装箱合格件 */
  onlyBoxingQualified?: boolean;
  /** 是否打印标签 */
  printCode?: boolean;
  /** 打印机模板ID */
  printTemplateId?: string;
  /** 打印机名称 */
  printerName?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** BoxingDetailVO */
export interface BoxingDetailVO {
  /** 已进箱工件列表 */
  boxingList?: LmsBoxingRecordVO[];
  /** 未进箱工件列表 */
  unBoxingList?: LmsBoxingRecordVO[];
  /** 当前装箱数据 */
  usingBox?: LmsBoxVO;
}

/** CraftRoutingDetailVO */
export interface CraftRoutingDetailVO {
  /** 工艺路线描述 */
  description?: string;
  /** 版本详情 */
  dtos?: CraftVersionDTO[];
  /** 主键id */
  id?: string;
  /** 工艺路线名称 */
  name?: string;
  /** 产品编号 */
  productCode?: string;
  /** 关联的产品id */
  productId?: string;
  /** 产品名称 */
  productName?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /** 产品类型id */
  typeId?: string;
  /** 产品类型名称 */
  typeName?: string;
}

/** CraftVersionDTO */
export interface CraftVersionDTO {
  /** 工艺路线id */
  craftId?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人时间 */
  createUser?: string;
  /** 工艺版本描述 */
  description?: string;
  /**
   * 是否定版
   * @format int32
   */
  editionStatus?: number;
  /** 主键id */
  id?: string;
  /** 工艺版本名称 */
  name?: string;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 修改人时间 */
  updateUser?: string;
}

/**
 * FmsWorkStationVO
 * FmsWorkStationVO
 */
export interface FmsWorkStationVO {
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** IdsVO */
export interface IdsVO {
  ids?: string[];
}

/** LmsBoxDetailVO */
export interface LmsBoxDetailVO {
  /** 包装箱明细 */
  box?: LmsBoxVO;
  /** 进出箱工件记录的日志 */
  boxingLogList?: LmsBoxingLogVO[];
  /** 已装箱工件信息 */
  boxingRecordList?: LmsBoxingRecordVO[];
}

/** LmsBoxPrintDTO */
export interface LmsBoxPrintDTO {
  /**
   * 装箱数
   * @format int32
   */
  boxCount?: number;
  /** 装箱号 */
  boxNo?: string;
  /**
   * 装箱时间
   * @format date-time
   */
  boxingTime?: string;
  /**
   * 最大装箱数
   * @format int32
   */
  maxBoxCount?: number;
  /** 工位编号 */
  orderCode?: string;
  /** 产品编号 */
  productCode?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** LmsBoxQueryVO */
export interface LmsBoxQueryVO {
  /** 箱码 */
  boxNo?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
}

/** LmsBoxVO */
export interface LmsBoxVO {
  /**
   * 实际装箱数
   * @format int32
   */
  boxCount?: number;
  /** 包装箱号 */
  boxNo?: string;
  /** 箱体状态, 使用中, -  满箱 */
  boxStatus?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** id */
  id?: string;
  /**
   * 最大装箱数
   * @format int32
   */
  maxBoxCount?: number;
  /** 工单Id */
  orderId?: string;
  /**
   * 条码打印次数
   * @format int32
   */
  printCount?: number;
  /** 产品ID */
  productId?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** LmsBoxingLogVO */
export interface LmsBoxingLogVO {
  /** 装箱ID */
  boxId?: string;
  /** 装箱记录ID */
  boxingRecordId?: string;
  /** 记录ID */
  id?: string;
  /** 操作类型:装箱 拆箱 */
  operationCode?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operationTime?: string;
  /** 工件码 */
  workNo?: string;
}

/** LmsBoxingRecordVO */
export interface LmsBoxingRecordVO {
  /**
   * 进箱时间,装箱日期
   * @format date-time
   */
  boxingTime?: string;
  /** 装箱记录ID */
  id?: string;
  /** 未进箱原因 */
  unBoxingReason?: string;
  /**
   * 操作时间, 发生时间
   * @format date-time
   */
  updateTime?: string;
  /** 工件号 */
  workNo?: string;
}

/** LmsFrequentSpotCheckVO */
export interface LmsFrequentSpotCheckVO {
  check?: string;
  key?: string;
  name?: string;
  valueM?: string;
  valueN?: string;
}

/** LmsOrderDetailVO */
export interface LmsOrderDetailVO {
  /**
   * 工单数量
   * @format int32
   */
  assignNum?: number;
  /** 工单编号 */
  code?: string;
  /** 工艺路线ID */
  craftId?: string;
  /** 产品路线名称 */
  craftName?: string;
  /** 工艺路线版本 */
  craftVersionId?: string;
  /** 工艺路线名称 */
  craftVersionName?: string;
  /**
   * 实际完成时间
   * @format date-time
   */
  endTime?: string;
  /** id */
  id?: string;
  /**
   * 下线数量
   * @format int32
   */
  offlineNumber?: number;
  /**
   * 上线数量
   * @format int32
   */
  onlineNumber?: number;
  /** 订单编号 */
  orderCode?: string;
  /** 工单状态值 待发布 0 待加工 1 加工中 2 暂停中 3 暂停 4 已完成 5 */
  orderStatus?: string;
  /** 工单状态 待发布 0 待加工 1 加工中 2 暂停中 3 暂停 4 已完成 5 */
  orderStatusLabel?: string;
  /** 工单类型  1.来料  2.生产 */
  orderType?: string;
  /** 工单类型值  1.来料  2.生产 */
  orderTypeLabel?: string;
  /**
   * 结束时间
   * @format date-time
   */
  planEndTime?: string;
  /**
   * 开始时间
   * @format date-time
   */
  planStartTime?: string;
  /** 工单工序列表 */
  processList?: LmsOrderProcess[];
  /** 产品ID */
  productId?: string;
  /** 产品名称 */
  productName?: string;
  /**
   * 合格数量
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 实际开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 不合格数量
   * @format int32
   */
  unqualifyNum?: number;
}

/** LmsOrderStatusStatVO */
export interface LmsOrderStatusStatVO {
  /**
   * 加工中
   * @format int64
   */
  machineIng?: number;
  /**
   * 暂停
   * @format int64
   */
  pause?: number;
  /**
   * 暂停中
   * @format int64
   */
  pauseIng?: number;
  /**
   * 今日完成
   * @format int64
   */
  todayFinished?: number;
  /**
   * 待加工
   * @format int64
   */
  waitMachine?: number;
  /**
   * 待发布
   * @format int64
   */
  waitPublish?: number;
}

/** LmsPrintTempSaveVO */
export interface LmsPrintTempSaveVO {
  /** api设置的地址 */
  apiUrl?: string;
  /** 业务id */
  bizCode?: string;
  /** 打印模板配置 */
  config?: string;
  /** 保存的图片地址 */
  link?: string;
  /** 模板名称 */
  name?: string;
  /** 打印机zpl语言 */
  zplCommand?: string;
}

/** LmsPrintTempUpdateVO */
export interface LmsPrintTempUpdateVO {
  /** api设置的地址 */
  apiUrl?: string;
  /** 打印模板配置 */
  config?: string;
  /** 主键id */
  id?: string;
  /** 保存的图片地址 */
  link?: string;
  /** 模板名称 */
  name?: string;
  /** 打印机zpl语言 */
  zplCommand?: string;
}

/** LmsPrintTempVO */
export interface LmsPrintTempVO {
  /** api设置的地址 */
  apiUrl?: string;
  /** 业务编号 */
  bizCode?: string;
  /** 打印模板配置 */
  config?: string;
  /** 主键id */
  id?: string;
  /** 保存的图片地址 */
  link?: string;
  /** 模板名称 */
  name?: string;
  /** 打印机zpl语言 */
  zplCommand?: string;
}

/** LmsPrinterVO */
export interface LmsPrinterVO {
  /** 打印机ip */
  address?: string;
  /** 主键id */
  id?: string;
  /** 打印机名称 */
  name?: string;
  /**
   * 端口号
   * @format int32
   */
  port?: number;
}

/** LmsWorkStationProcessSaveVO */
export interface LmsWorkStationProcessSaveVO {
  /** 工序编号 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** LmsWorkStationProcessVO */
export interface LmsWorkStationProcessVO {
  /** 工位集合 */
  lmsWorkStationVOList?: FmsWorkStationVO[];
  /** 工序编号 */
  processCode?: string;
  /** 工序ID */
  processId?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

/** LmsWorkstationBatchSaveVO */
export interface LmsWorkstationBatchSaveVO {
  /**
   * 工单ID 列表
   * @maxItems 2147483647
   * @minItems 1
   */
  orderIdList?: string[];
  /**
   * 绑定的工序列表
   * @maxItems 2147483647
   * @minItems 1
   */
  processList?: LmsWorkStationProcessSaveVO[];
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

/**
 * ShiftDetailVO
 * 班次日VO
 */
export interface ShiftDetailVO {
  /** 主键Id */
  id?: string;
  /** 班次序号名称 */
  indexName?: string;
  /**
   * 班次休息时段数量
   * @format int32
   */
  restNumber?: number;
  /**
   * 班次结束时间
   * @format int32
   */
  shiftEndTime?: number;
  /**
   * 班次序号
   * @format int32
   */
  shiftIndex?: number;
  /** 休息时段 */
  shiftRestTimeVOList?: ShiftRestTimeVO[];
  /**
   * 班次开始时间
   * @format int32
   */
  shiftStartTime?: number;
}

/** ShiftRestTimeVO */
export interface ShiftRestTimeVO {
  /** 主键id */
  id?: string;
  /**
   * 休息时段结束时间
   * @format int32
   */
  restEndTime?: number;
  /**
   * 休息时段序号
   * @format int32
   */
  restIndex?: number;
  /**
   * 休息时段开始时间
   * @format int32
   */
  restStartTime?: number;
}

/**
 * ShiftVO
 * 班次模型VO
 */
export interface ShiftVO {
  /** 班次编号 */
  code?: string;
  /** 班次颜色 */
  colour?: string;
  /**
   * 班次日结束时间
   * @format int32
   */
  endTime?: number;
  /** 主键 */
  id?: string;
  /**
   * 是否被使用(0：否，1：是)
   * @format int32
   */
  isUsed?: number;
  /** 班次名称 */
  name?: string;
  /** 班次时间 */
  shiftDetailVOList?: ShiftDetailVO[];
  /**
   * 班次数量
   * @format int32
   */
  shiftNumber?: number;
  /**
   * 班次日开始时间
   * @format int32
   */
  startTime?: number;
}

/**
 * FmsProduceComponentVO对象
 * 零件相关
 */
export interface FmsProduceComponentVO {
  /** 当前位置 */
  currentPosition?: string;
  /** 执行工作台 */
  currentStation?: string;
  /**
   * 工序结束时间
   * @format date-time
   */
  endTime?: string;
  /** 零件号 */
  partCode?: string;
  /** 零件状态 */
  partType?: string;
  /** 工序编号 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 工序开始时间
   * @format date-time
   */
  startTime?: string;
  /** 执行托盘 */
  trayCode?: string;
  /** 执行工位 */
  workStationName?: string;
}

/**
 * FmsProduceProcessVO对象
 * 涉及fms_order关联的多个表
 */
export interface FmsProduceProcessVO {
  /** 工序信息集合 */
  processList?: LmsOrderProcessVo[];
  /** 工单基本信息 */
  produceOrderVO?: LmsProduceOrderVO;
}

/** IPage«BlackLevelRecordVO» */
export interface IPageBlackLevelRecordVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: BlackLevelRecordVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«LmsBoxVO» */
export interface IPageLmsBoxVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: LmsBoxVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«LmsOrderProcessVo对象» */
export interface IPageLmsOrderProcessVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: LmsOrderProcessVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«LmsOrderVo对象» */
export interface IPageLmsOrderVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: LmsOrderVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«LmsPrintTempVO» */
export interface IPageLmsPrintTempVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: LmsPrintTempVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«LmsPrinterVO» */
export interface IPageLmsPrinterVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: LmsPrinterVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«LmsWorkStationRecordVo对象» */
export interface IPageLmsWorkStationRecordVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: LmsWorkStationRecordVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«TraceFlowSettingsVo对象» */
export interface IPageTraceFlowSettingsVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: TraceFlowSettingsVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«lmsProduceOrderVO对象» */
export interface IPageLmsProduceOrderVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: LmsProduceOrderVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«产线plcVO» */
export interface IPagePlcVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: PlcVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«产线设置plc采集项VO» */
export interface IPagePlcVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: PlcVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«自动线工位VO» */
export interface IPageVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: VO5[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** LmsLineSettingDetailVO对象 */
export interface LmsLineSettingDetailVO {
  /**
   * 配置检查时间
   * @format date-time
   */
  checkTime?: string;
  /**
   * 产线开报工：1-正常
   * @format int32
   */
  linOpenReport?: number;
  /** 启用配置 */
  lmsEnableSettingVO?: VO2;
}

/**
 * LmsLineSettingVo对象
 * 自动线产线设置表
 */
export interface LmsLineSettingVo {
  /** 产线ID */
  beltlineId?: string;
  /** 启用配置 */
  enableSetting?: string;
  /** plcID */
  plcId?: string;
}

/**
 * LmsOrderProcessVo对象
 * blade_lms_order_process
 */
export interface LmsOrderProcessVo {
  /**
   * 拆卸工时
   * @format int32
   */
  disassemblyTime?: number;
  /** 主键 */
  id?: string;
  /**
   * 下线数量
   * @format int32
   */
  offlineNumber?: number;
  /**
   * 上线数量
   * @format int32
   */
  onlineNumber?: number;
  /** 所属工单ID */
  orderId?: string;
  /**
   * 准备工时
   * @format int32
   */
  prepareTime?: number;
  /**
   * 工单工序编号
   * @minLength 0
   * @maxLength 50
   */
  processCode?: string;
  /**
   * 工单工序名称
   * @minLength 0
   * @maxLength 50
   */
  processName?: string;
  /**
   * 工单工序状态
   * @format int32
   */
  processStatus?: number;
  /**
   * 工序工种
   * @format int32
   */
  processType?: number;
  /**
   * 工序工种名称
   * @minLength 0
   * @maxLength 11
   */
  processTypeName?: string;
  /** 程序ID */
  programId?: string;
  /**
   * 程序名称
   * @minLength 0
   * @maxLength 255
   */
  programName?: string;
  /**
   * 合格数量
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 顺序
   * @format int32
   */
  sort?: number;
  /**
   * 标准工时
   * @format int32
   */
  standardTime?: number;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /**
   * 租户ID
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
  /**
   * 运输工时
   * @format int32
   */
  transportTime?: number;
  /**
   * 不合格数量
   * @format int32
   */
  unqualifyNum?: number;
  /**
   * 工单派发工位ID列表
   * @minLength 0
   * @maxLength 255
   */
  workStationId?: string;
  /**
   * 工单派发工位名字列表
   * @minLength 0
   * @maxLength 255
   */
  workStationName?: string;
}

/**
 * LmsOrderProcess对象
 * 自动线工单工序
 */
export interface LmsOrderProcess {
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 当前托盘号 */
  curTrayCode?: string;
  /**
   * 拆卸工时
   * @format int32
   */
  disassemblyTime?: number;
  /**
   * 待派发数量
   * @format int32
   */
  distributedNum?: number;
  /**
   * 实际完成时间
   * @format date-time
   */
  endTime?: string;
  /** 主键id */
  id?: string;
  /**
   * 投产数量
   * @format int32
   */
  inputNum?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 下线数量
   * @format int32
   */
  offlineNumber?: number;
  /**
   * 上线数量
   * @format int32
   */
  onlineNumber?: number;
  /** 所属工单ID */
  orderId?: string;
  /** 零件号 */
  partNumber?: string;
  /**
   * 准备工时
   * @format int32
   */
  prepareTime?: number;
  /** 工单工序编号 */
  processCode?: string;
  /** 工单工序名称 */
  processName?: string;
  /**
   * 工单工序状态
   * @format int32
   */
  processStatus?: number;
  /**
   * 工序工种
   * @format int32
   */
  processType?: number;
  /** 工序工种名称 */
  processTypeName?: string;
  /** 程序ID */
  programId?: string;
  /** 程序名称 */
  programName?: string;
  /**
   * 合格数量
   * @format int32
   */
  qualifyNum?: number;
  /** 备注 */
  remark?: string;
  /**
   * 顺序
   * @format int32
   */
  sort?: number;
  /**
   * 标准工时
   * @format int32
   */
  standardTime?: number;
  /**
   * 实际开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
  /**
   * 运输工时
   * @format int32
   */
  transportTime?: number;
  /**
   * 不合格数量
   * @format int32
   */
  unqualifyNum?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** 工单派发工位ID列表 */
  workStationId?: string;
  /** 工单派发工位名字列表 */
  workStationName?: string;
}

/**
 * LmsOrderVo对象
 * blade_lms_order
 */
export interface LmsOrderVo {
  /**
   * 工单数量
   * @format int32
   */
  assignNum?: number;
  /** 工单编号 */
  code?: string;
  /** 工艺路线ID */
  craftId?: string;
  /** 产品路线名称 */
  craftName?: string;
  /** 工艺路线版本 */
  craftVersionId?: string;
  /** 工艺路线名称 */
  craftVersionName?: string;
  /**
   * 实际完成时间
   * @format date-time
   */
  endTime?: string;
  /** id */
  id?: string;
  /**
   * 下线数量
   * @format int32
   */
  offlineNumber?: number;
  /**
   * 上线数量
   * @format int32
   */
  onlineNumber?: number;
  /** 订单编号 */
  orderCode?: string;
  /**
   * 工单状态值 待发布 0 待加工 1 加工中 2 暂停中 3 暂停 4 已完成 5
   * @format int32
   */
  orderStatus?: number;
  /** 工单状态 待发布  待加工  加工中  暂停中  暂停  已完成  */
  orderStatusLabel?: string;
  /**
   * 工单类型  1.来料  2.生产
   * @format int32
   */
  orderType?: number;
  /** 工单类型 来料  生产 */
  orderTypeLabel?: string;
  /**
   * 结束时间
   * @format date-time
   */
  planEndTime?: string;
  /**
   * 开始时间
   * @format date-time
   */
  planStartTime?: string;
  /** 产品编码 */
  productCode?: string;
  /** 产品ID */
  productId?: string;
  /** 产品名称 */
  productName?: string;
  /**
   * 合格数量
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 开工条件, 1 自动开工 2人工开工
   * @format int32
   */
  startConditions?: number;
  /**
   * 实际开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 不合格数量
   * @format int32
   */
  unqualifyNum?: number;
}

/**
 * LmsWorkStationRecordVo对象
 * blade_lms_work_station_record
 */
export interface LmsWorkStationRecordVo {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 主键 */
  id?: string;
  /** 工单ID */
  orderId?: string;
  /** 工单工序ID */
  orderProcessId?: string;
  /**
   * 零件号
   * @minLength 0
   * @maxLength 255
   */
  partCode?: string;
  /**
   * 报工合格数量
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 1-加工中 2-完成
   * @format int32
   */
  recordStatus?: number;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 开工时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 记录状态
   * @format int32
   */
  status?: number;
  /**
   * 托盘号
   * @minLength 0
   * @maxLength 255
   */
  trayCode?: string;
  /**
   * 报工不合格数量
   * @format int32
   */
  unqualifyNum?: number;
  /**
   * 工作台编号
   * @minLength 0
   * @maxLength 255
   */
  workBenchNumber?: string;
  /** 开工工位ID */
  workStationId?: string;
  /**
   * 工位名称
   * @minLength 0
   * @maxLength 50
   */
  workStationName?: string;
  /**
   * 报工工时
   * @format int32
   */
  workTime?: number;
}

/**
 * R«BoxingDetailVO»
 * 返回信息
 */
export interface RBoxingDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BoxingDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FmsProduceProcessVO对象»
 * 返回信息
 */
export interface RFmsProduceProcessVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsProduceProcessVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«BlackLevelRecordVO»»
 * 返回信息
 */
export interface RIPageBlackLevelRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageBlackLevelRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«LmsBoxVO»»
 * 返回信息
 */
export interface RIPageLmsBoxVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageLmsBoxVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«LmsOrderProcessVo对象»»
 * 返回信息
 */
export interface RIPageLmsOrderProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageLmsOrderProcessVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«LmsOrderVo对象»»
 * 返回信息
 */
export interface RIPageLmsOrderVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageLmsOrderVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«LmsPrintTempVO»»
 * 返回信息
 */
export interface RIPageLmsPrintTempVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageLmsPrintTempVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«LmsPrinterVO»»
 * 返回信息
 */
export interface RIPageLmsPrinterVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageLmsPrinterVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«LmsWorkStationRecordVo对象»»
 * 返回信息
 */
export interface RIPageLmsWorkStationRecordVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageLmsWorkStationRecordVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«TraceFlowSettingsVo对象»»
 * 返回信息
 */
export interface RIPageTraceFlowSettingsVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageTraceFlowSettingsVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«lmsProduceOrderVO对象»»
 * 返回信息
 */
export interface RIPageLmsProduceOrderVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageLmsProduceOrderVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«产线plcVO»»
 * 返回信息
 */
export interface RIPagePlcVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPagePlcVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«产线设置plc采集项VO»»
 * 返回信息
 */
export interface RIPagePlcVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPagePlcVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«自动线工位VO»»
 * 返回信息
 */
export interface RIPageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«BatchOrderReturnVO»»
 * 返回信息
 */
export interface RListBatchOrderReturnVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BatchOrderReturnVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«BoxWorkstationVO»»
 * 返回信息
 */
export interface RListBoxWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BoxWorkstationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CraftRoutingDetailVO»»
 * 返回信息
 */
export interface RListCraftRoutingDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CraftRoutingDetailVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FmsProduceComponentVO对象»»
 * 返回信息
 */
export interface RListFmsProduceComponentVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsProduceComponentVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«LmsBoxVO»»
 * 返回信息
 */
export interface RListLmsBoxVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsBoxVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«LmsOrderProcessVo对象»»
 * 返回信息
 */
export interface RListLmsOrderProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsOrderProcessVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«LmsOrderVo对象»»
 * 返回信息
 */
export interface RListLmsOrderVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsOrderVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«LmsPrintTempVO»»
 * 返回信息
 */
export interface RListLmsPrintTempVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsPrintTempVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«LmsPrinterVO»»
 * 返回信息
 */
export interface RListLmsPrinterVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsPrinterVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«LmsWorkStationProcessVO»»
 * 返回信息
 */
export interface RListLmsWorkStationProcessVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsWorkStationProcessVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«LmsWorkStationRecordVo对象»»
 * 返回信息
 */
export interface RListLmsWorkStationRecordVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsWorkStationRecordVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ShiftVO»»
 * 返回信息
 */
export interface RListShiftVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ShiftVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TraceFlowSettingsVo对象»»
 * 返回信息
 */
export interface RListTraceFlowSettingsVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TraceFlowSettingsVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«string»»
 * 返回信息
 */
export interface RListString {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: string[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«产线plcVO»»
 * 返回信息
 */
export interface RListPlcVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: PlcVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«自动线工位VO»»
 * 返回信息
 */
export interface RListVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VO12[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«自动线工位VO»»_1
 * 返回信息
 */
export interface RListVO1 {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VO22[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsBoxDetailVO»
 * 返回信息
 */
export interface RLmsBoxDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsBoxDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsBoxPrintDTO»
 * 返回信息
 */
export interface RLmsBoxPrintDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsBoxPrintDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsBoxVO»
 * 返回信息
 */
export interface RLmsBoxVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsBoxVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsLineSettingDetailVO对象»
 * 返回信息
 */
export interface RLmsLineSettingDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsLineSettingDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsLineSettingVo对象»
 * 返回信息
 */
export interface RLmsLineSettingVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsLineSettingVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsOrderDetailVO»
 * 返回信息
 */
export interface RLmsOrderDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsOrderDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsOrderProcessVo对象»
 * 返回信息
 */
export interface RLmsOrderProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsOrderProcessVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsOrderStatusStatVO»
 * 返回信息
 */
export interface RLmsOrderStatusStatVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsOrderStatusStatVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsOrderVo对象»
 * 返回信息
 */
export interface RLmsOrderVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsOrderVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsPrintTempVO»
 * 返回信息
 */
export interface RLmsPrintTempVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsPrintTempVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsPrinterVO»
 * 返回信息
 */
export interface RLmsPrinterVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsPrinterVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«LmsWorkStationRecordVo对象»
 * 返回信息
 */
export interface RLmsWorkStationRecordVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsWorkStationRecordVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«TraceFlowSettingsVo对象»
 * 返回信息
 */
export interface RTraceFlowSettingsVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TraceFlowSettingsVo1;
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
 * R«string»
 * 返回信息
 */
export interface RString {
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
 * R«扫码保存的结果»
 * 返回信息
 */
export interface R_ {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: _;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * TraceFlowSettingsVo对象
 * 流程维护
 */
export interface TraceFlowSettingsVo {
  /**
   * 流程编号
   * @minLength 0
   * @maxLength 40
   */
  code?: string;
  /**
   * 流程顺序
   * @format int32
   */
  flowSeq?: number;
  /**
   * 流程类别
   * @format int32
   */
  flowType?: number;
  /** id */
  id?: string;
  /**
   * 流程名称
   * @minLength 0
   * @maxLength 100
   */
  name?: string;
  /** 下一流程id */
  nextFlowId?: string;
  /** 上一流程id */
  preFlowId?: string;
  /**
   * 工位类型
   * @format int32
   */
  stationType?: number;
  /**
   * 结束流程方式
   * @format int32
   */
  triggerEndFlowStyle?: number;
  /** 工位卡片列表 */
  workstationCardList?: string[];
  /** 工位组id */
  workstationGroupId?: string;
  /** 工位组id */
  workstationGroupName?: string;
}

/**
 * TraceFlowSettingsVo对象_1
 * 流程维护
 */
export interface TraceFlowSettingsVo1 {
  /** 流程编号 */
  traceFlowSettingsVO?: TraceFlowSettingsVo;
  /** 追溯关联工位 */
  traceRelatedWorkstationVOList?: TraceRelatedWorkstationVo[];
}

/**
 * TraceRelatedWorkstationVo对象
 * 追溯关联工位
 */
export interface TraceRelatedWorkstationVo {
  /** 主键 */
  id?: string;
  /** 流程设定ID */
  traceFlowSettingId?: string;
  /** 工位编码 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/**
 * lmsProduceOrderVO对象
 * blade_lms_order
 */
export interface LmsProduceOrderVO {
  /**
   * 计划数量
   * @format int32
   */
  assignNum?: number;
  /** 工单编号 */
  code?: string;
  /**
   * 实际结束时间
   * @format date-time
   */
  endTime?: string;
  /** 工单Id */
  id?: string;
  /**
   * 下线数量
   * @format int32
   */
  offlineNumber?: number;
  /**
   * 上线数量
   * @format int32
   */
  onlineNumber?: number;
  /** 订单编号 */
  orderCode?: string;
  /** 状态 */
  orderStatus?: string;
  /** 工单类型 */
  orderType?: string;
  /**
   * 计划结束时间
   * @format date-time
   */
  planEndTime?: string;
  /**
   * 计划开始时间
   * @format date-time
   */
  planStartTime?: string;
  /** 产品编号 */
  productCode?: string;
  /**
   * 合格数
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 实际开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 原始状态
   * @format int32
   */
  status?: number;
  /**
   * 不合格数量
   * @format int32
   */
  unqualifyNum?: number;
}

/** lms未关联流程的工位VO */
export interface LmsVO {
  /** 产线ID */
  beltlineId?: string;
  /** 关键词 */
  keyword?: string;
}

/** plc删除VO */
export interface PlcVO {
  /** 产线ID */
  beltlineId?: string;
  /** plcID */
  plcId?: string;
}

/** plc工位排序VO */
export interface PlcVO2 {
  /**
   * 序号
   * @format int32
   */
  sort?: number;
  /** 工位ID */
  workstationId?: string;
}

/** plc工位新增VO */
export interface PlcVO3 {
  /** 产线ID */
  beltlineId?: string;
  /**
   * 工位列表
   * @maxItems 2147483647
   * @minItems 1
   */
  workstationIds?: string[];
}

/** plc新增VO */
export interface PlcVO4 {
  /** 产线ID */
  beltlineId?: string;
  /**
   * plc列表
   * @maxItems 2147483647
   * @minItems 1
   */
  plcIds?: string[];
}

/** plc设置工作台VO */
export interface PlcVO5 {
  /** 工作台 */
  name?: string;
  /** 变量列表 */
  variableList?: VO6[];
}

/** 产线plcVO */
export interface PlcVO {
  /** plc编号 */
  code?: string;
  /** plcID */
  id?: string;
  /** plc名称 */
  name?: string;
}

/** 产线plcVO_1 */
export interface PlcVO1 {
  /** 产线ID */
  beltlineId?: string;
  /** 关键词 */
  keyword?: string;
}

/** 产线启用设置VO */
export interface _VO {
  /** 产线ID */
  beltlineId?: string;
  /** 启用配置 */
  lmsEnableSettingVO?: VO2;
}

/** 产线设置plc采集项VO */
export interface PlcVO {
  /** 描述 */
  description?: string;
  /** 名称 */
  name?: string;
}

/** 产线设置工位修改VO */
export interface VO2 {
  /**
   * 业务类型：1-工单，2-追溯
   * @format int32
   */
  businessType?: number;
  /**
   * 变量类型：1-工件码采集，2-产量采集，3-检测采集，4-检测方式，5-黑名单，6-打标采集，7-返线加工
   * @format int32
   */
  variableType?: number;
  /** 变量值 */
  variableValue?: VO4;
  /** 工作台 */
  workbench?: string;
  /** 工位ID */
  workstationId?: string;
}

/** 启用配置项VO */
export interface VO3 {
  /**
   * 完工设定
   * @format int32
   */
  completionSetting?: number;
  /**
   * 手动开报工：0-未启用，1-启用
   * @format int32
   */
  manual?: number;
  /**
   * 混产加工
   * @format int32
   */
  mixedProduction?: number;
  /**
   * 启用状态：0-未启用，1-启用
   * @format int32
   */
  status?: number;
}

/** 启用配置项VO_1 */
export interface VO1 {
  /**
   * 启用状态：0-未启用，1-启用
   * @format int32
   */
  status?: number;
}

/** 启用配置项VO_2 */
export interface VO2 {
  /** 工单 */
  order?: VO3;
  /** 追溯 */
  trace?: VO1;
}

/** 扫码保存的结果 */
export interface _ {
  /** 当前装箱工件 */
  boxingRecord?: LmsBoxingRecordVO;
  /** 工件码流程检查结果, true 流程检查合格, false 流程不合格 */
  processCheck?: boolean;
  /** 工件码是否合格, true 合格 false  不合格 */
  qualified?: boolean;
  /** 重复装箱检查结果, true 检查通过,  false ,有重复装箱 */
  reboxingCheck?: boolean;
  /** 当前装箱对象 */
  usingBox?: LmsBoxVO;
  /** 工件码 */
  workNo?: string;
}

/** 未解析的plc变量查询VO */
export interface PlcVO2 {
  /** 产线ID */
  beltlineId?: string;
  /** plcID */
  plcId?: string;
}

/** 自动线变量值VO */
export interface VO4 {
  /** 频次抽检 */
  frequentSpotCheckVOS?: LmsFrequentSpotCheckVO[];
  /** 键 */
  key?: string;
  /** 名称 */
  name?: string;
  /** 值 */
  value?: string;
}

/** 自动线工位VO */
export interface VO5 {
  /** 工位code */
  code?: string;
  /** 工位组ID */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /** 工位ID */
  id?: string;
  /** 工位名称 */
  name?: string;
}

/** 自动线工位VO_1 */
export interface VO12 {
  /** 是否开启工位产量 */
  enableWorkstationOutput?: boolean;
  /** 流程ID */
  traceFlowId?: string;
  /** 工作台列表 */
  workbenchList?: PlcVO5[];
  /** 工位code */
  workstationCode?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
  /**
   * 工位类型：1-机加，2-质检，3-打标
   * @format int32
   */
  workstationType?: number;
  /** 工位变量列表 */
  workstationVariableValueList?: VO4[];
}

/** 自动线工位VO_2 */
export interface VO22 {
  /** 工位code */
  workstationCode?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** 自动线工位变量VO */
export interface VO6 {
  /** 产线ID */
  beltlineId?: string;
  /**
   * 业务类型：1-工单，2-追溯
   * @format int32
   */
  businessType?: number;
  /** 机器ID */
  machineId?: string;
  /**
   * 变量状态：1-正常，2-警告
   * @format int32
   */
  variableStatus?: number;
  /**
   * 变量类型：1-工件码采集，2-产量采集，3-检测采集，4-检测方式，5-黑名单，6-打标采集，7-返线加工
   * @format int32
   */
  variableType?: number;
  variableValueList?: VO4[];
  /** 工位ID */
  workstationId?: string;
}

/** 追溯是否关联流程VO */
export interface VO7 {
  /** 是否关联 */
  enable?: boolean;
  /** 流程ID */
  traceFlowSettingId?: string;
  /** 工位ID */
  workstationId?: string;
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
  bladeLms = {
    /**
     * No description
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingConfigurationCheck
     * @summary 配置检查
     * @request POST:/blade-lms/automatic-line-setting/configuration-check
     * @secure
     */
    lmsAutomaticLineSettingConfigurationCheck: (
      query: {
        /** 产线ID */
        beltlineId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-lms/automatic-line-setting/configuration-check`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入lmsEnableSettingSubmitVO
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingEnableSetting
     * @summary 启用设置
     * @request POST:/blade-lms/automatic-line-setting/enable-setting
     * @secure
     */
    lmsAutomaticLineSettingEnableSetting: (lmsEnableSettingSubmitVO: _VO, params: RequestParams = {}) =>
      this.request<RLmsLineSettingVo, void>({
        path: `/blade-lms/automatic-line-setting/enable-setting`,
        method: 'POST',
        body: lmsEnableSettingSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 打印机
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingLocalPrintersList
     * @summary 获取本机打印机列表
     * @request POST:/blade-lms/automatic-line-setting/get-local-printers
     * @secure
     */
    lmsAutomaticLineSettingLocalPrintersList: (params: RequestParams = {}) =>
      this.request<RListString, void>({
        path: `/blade-lms/automatic-line-setting/get-local-printers`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingDetail
     * @summary 产线设置详情
     * @request GET:/blade-lms/automatic-line-setting/get/{beltlineId}
     * @secure
     */
    lmsAutomaticLineSettingDetail: (beltlineId: string, params: RequestParams = {}) =>
      this.request<RLmsLineSettingDetailVO, void>({
        path: `/blade-lms/automatic-line-setting/get/${beltlineId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsLineSettingPlcInsertVO
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingInsertPlc
     * @summary 新增plc
     * @request POST:/blade-lms/automatic-line-setting/plc/insert
     * @secure
     */
    lmsAutomaticLineSettingInsertPlc: (lmsLineSettingPlcInsertVO: PlcVO4, params: RequestParams = {}) =>
      this.request<RLmsLineSettingVo, void>({
        path: `/blade-lms/automatic-line-setting/plc/insert`,
        method: 'POST',
        body: lmsLineSettingPlcInsertVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入beltlineId
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingGetPlcList
     * @summary plc列表
     * @request GET:/blade-lms/automatic-line-setting/plc/list
     * @secure
     */
    lmsAutomaticLineSettingGetPlcList: (
      query: {
        /** 产线ID */
        beltlineId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListPlcVO, void>({
        path: `/blade-lms/automatic-line-setting/plc/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsLineSettingPlcRemoveVO
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingRemovePlc
     * @summary 删除Plc
     * @request DELETE:/blade-lms/automatic-line-setting/plc/remove
     * @secure
     */
    lmsAutomaticLineSettingRemovePlc: (lmsLineSettingPlcRemoveVO: PlcVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-lms/automatic-line-setting/plc/remove`,
        method: 'DELETE',
        body: lmsLineSettingPlcRemoveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入lmsLineSettingPlcQueryVO
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingGetUnassociatedPlcList
     * @summary 未关联的plc列表
     * @request POST:/blade-lms/automatic-line-setting/unassociated-plc-list
     * @secure
     */
    lmsAutomaticLineSettingGetUnassociatedPlcList: (
      lmsLineSettingPlcQueryVO: PlcVO1,
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
      this.request<RIPagePlcVO, void>({
        path: `/blade-lms/automatic-line-setting/unassociated-plc-list`,
        method: 'POST',
        query: query,
        body: lmsLineSettingPlcQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingGetUnresolvedPlcVariablePage
     * @summary 未解析的plc变量
     * @request POST:/blade-lms/automatic-line-setting/unresolved-plc-variable-page
     * @secure
     */
    lmsAutomaticLineSettingGetUnresolvedPlcVariablePage: (
      lmsUnresolvedPlcVariableQueryVO: PlcVO2,
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
      this.request<RIPagePlcVO, void>({
        path: `/blade-lms/automatic-line-setting/unresolved-plc-variable-page`,
        method: 'POST',
        query: query,
        body: lmsUnresolvedPlcVariableQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入beltlineId
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingGetWorkstationCardList
     * @summary 工位卡片列表
     * @request GET:/blade-lms/automatic-line-setting/workstation-card-list
     * @secure
     */
    lmsAutomaticLineSettingGetWorkstationCardList: (
      query: {
        /** 产线ID */
        beltlineId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListVO, void>({
        path: `/blade-lms/automatic-line-setting/workstation-card-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入工位ID和是否启用
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingEnableWorkstationOutput
     * @summary 是否使用工位产量
     * @request POST:/blade-lms/automatic-line-setting/workstation-card/enable-output
     * @secure
     */
    lmsAutomaticLineSettingEnableWorkstationOutput: (
      query: {
        /** 否启用 */
        enable: boolean;
        /** 主键 */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-lms/automatic-line-setting/workstation-card/enable-output`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入lmsPlcWorkstationInsertVO
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingInsertWorkstationCard
     * @summary 手动增加工位卡片
     * @request POST:/blade-lms/automatic-line-setting/workstation-card/insert
     * @secure
     */
    lmsAutomaticLineSettingInsertWorkstationCard: (lmsPlcWorkstationInsertVO: PlcVO3, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-lms/automatic-line-setting/workstation-card/insert`,
        method: 'POST',
        body: lmsPlcWorkstationInsertVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入workstationId
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingRemoveWorkstationCard
     * @summary 删除工位卡片
     * @request DELETE:/blade-lms/automatic-line-setting/workstation-card/remove
     * @secure
     */
    lmsAutomaticLineSettingRemoveWorkstationCard: (
      query: {
        /** 工位ID */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-lms/automatic-line-setting/workstation-card/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsPlcWorkstationSortList
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingSortWorkstationCard
     * @summary 工位卡片排序
     * @request POST:/blade-lms/automatic-line-setting/workstation-card/sort
     * @secure
     */
    lmsAutomaticLineSettingSortWorkstationCard: (lmsPlcWorkstationSortList: PlcVO2[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-lms/automatic-line-setting/workstation-card/sort`,
        method: 'POST',
        body: lmsPlcWorkstationSortList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingGetUnassociatedWorkstationPage
     * @summary 未添加的工位分页
     * @request GET:/blade-lms/automatic-line-setting/workstation-card/unassociated-page
     * @secure
     */
    lmsAutomaticLineSettingGetUnassociatedWorkstationPage: (
      query: {
        /** 产线ID */
        beltlineId: string;
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
      this.request<RIPageVO, void>({
        path: `/blade-lms/automatic-line-setting/workstation-card/unassociated-page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsPlcWorkstationUpdateVO
     *
     * @tags 自动线产线设置
     * @name LmsAutomaticLineSettingUpdateWorkstationCard
     * @summary 修改工位卡片
     * @request POST:/blade-lms/automatic-line-setting/workstation-card/update
     * @secure
     */
    lmsAutomaticLineSettingUpdateWorkstationCard: (lmsPlcWorkstationUpdateVO: VO2, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-lms/automatic-line-setting/workstation-card/update`,
        method: 'POST',
        body: lmsPlcWorkstationUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 黑名单删除 delete
     *
     * @tags 黑名单等级
     * @name LmsBlackLevelRemove
     * @summary 删除
     * @request DELETE:/blade-lms/black-level
     * @secure
     */
    lmsBlackLevelRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/black-level`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 黑名单等级分页 post
     *
     * @tags 黑名单等级
     * @name LmsBlackLevelPage
     * @summary 分页
     * @request POST:/blade-lms/black-level/page
     * @secure
     */
    lmsBlackLevelPage: (
      queryVO: BlackLevelQueryVO,
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
      this.request<RIPageBlackLevelRecordVO, void>({
        path: `/blade-lms/black-level/page`,
        method: 'POST',
        query: query,
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 人工补录
     *
     * @tags 自动线装拆箱
     * @name LmsBoxAddBoxRecord
     * @summary 补录
     * @request POST:/blade-lms/box/add-box-record
     * @secure
     */
    lmsBoxAddBoxRecord: (
      query: {
        /**
         * boxId
         * @format int64
         */
        boxId: number;
        /** workNo */
        workNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RString, void>({
        path: `/blade-lms/box/add-box-record`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 装箱:获取所有装箱工位信息
     *
     * @tags 自动线装拆箱
     * @name LmsBoxWorkstation
     * @summary workstation获取装箱工位
     * @request GET:/blade-lms/box/box-workstations
     * @secure
     */
    lmsBoxWorkstation: (params: RequestParams = {}) =>
      this.request<RListBoxWorkstationVO, void>({
        path: `/blade-lms/box/box-workstations`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 装箱: 换箱,人工编码换箱需要输入包装箱号, 自动编码换箱自动生成箱号,不用传boxNo
     *
     * @tags 自动线装拆箱
     * @name LmsBoxBoxingChangeBox
     * @summary boxing:change-box换箱
     * @request GET:/blade-lms/box/boxing/change-box
     * @secure
     */
    lmsBoxBoxingChangeBox: (
      query?: {
        /** 人工编码时需要手动输入编码 */
        boxNo?: string;
        /** 换箱的工位 */
        workstationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLmsBoxVO, void>({
        path: `/blade-lms/box/boxing/change-box`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 装箱: 点击打印,记录打印机打印结果,自动打印需要隐藏打印按钮
     *
     * @tags 自动线装拆箱
     * @name LmsBoxBoxingPrintCode
     * @summary print-code打印
     * @request GET:/blade-lms/box/boxing/print-code
     * @secure
     */
    lmsBoxBoxingPrintCode: (
      query?: {
        /** 打印的装箱ID */
        usingBoxId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/box/boxing/print-code`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 装箱:删除已进箱工件列表
     *
     * @tags 自动线装拆箱
     * @name LmsBoxBoxingRecordRemove
     * @summary boxing/remove删除装箱工件
     * @request GET:/blade-lms/box/boxing/remove
     * @secure
     */
    lmsBoxBoxingRecordRemove: (
      query: {
        /** recordId */
        recordId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/box/boxing/remove`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 装箱: 扫码枪录入工件装箱, 传入工位,箱码,工件码, 返回验证结果,并进箱
     *
     * @tags 自动线装拆箱
     * @name LmsBoxBoxingRecordSave
     * @summary scan-save扫码装箱
     * @request GET:/blade-lms/box/boxing/scan-save
     * @secure
     */
    lmsBoxBoxingRecordSave: (
      query?: {
        /** 扫码的工件编号 */
        workNo?: string;
        /** 当前工位ID */
        workstationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R_, void>({
        path: `/blade-lms/box/boxing/scan-save`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 装箱: 传入选择工位,自动编码规则一定会生成一个 箱子, 手动编码规则返回前端空, 前端根据没有箱子,让用户输入箱子号再调用change-box插入箱子
     *
     * @tags 自动线装拆箱
     * @name LmsBoxBoxingDetail
     * @summary boxing-detail装箱明细
     * @request GET:/blade-lms/box/boxing/using-box
     * @secure
     */
    lmsBoxBoxingDetail: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoxingDetailVO, void>({
        path: `/blade-lms/box/boxing/using-box`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 不是满箱的都可以补
     *
     * @tags 自动线装拆箱
     * @name LmsBoxCanUseBox
     * @summary 获取人工补录箱子
     * @request POST:/blade-lms/box/canuse-box
     * @secure
     */
    lmsBoxCanUseBox: (params: RequestParams = {}) =>
      this.request<RListLmsBoxVO, void>({
        path: `/blade-lms/box/canuse-box`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 自动装箱: 生成编码规则
     *
     * @tags 自动线装拆箱
     * @name LmsBoxCodeGenerate
     * @summary 生成编码规则
     * @request POST:/blade-lms/box/code-generate
     * @secure
     */
    lmsBoxCodeGenerate: (genCodeDTO: BoxGenCodeDTO, params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-lms/box/code-generate`,
        method: 'POST',
        body: genCodeDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 根据包装箱号获取装箱清单信息
     *
     * @tags 自动线装拆箱
     * @name LmsBoxDetail
     * @summary 装箱清单明细
     * @request GET:/blade-lms/box/detail/{id}
     * @secure
     */
    lmsBoxDetail: (id?: string, params: RequestParams = {}) =>
      this.request<RLmsBoxDetailVO, void>({
        path: `/blade-lms/box/detail/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 列表:包装箱记录查询
     *
     * @tags 自动线装拆箱
     * @name LmsBoxPage
     * @summary page分页
     * @request POST:/blade-lms/box/page
     * @secure
     */
    lmsBoxPage: (
      lmsBoxQueryVO: LmsBoxQueryVO,
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
      this.request<RIPageLmsBoxVO, void>({
        path: `/blade-lms/box/page`,
        method: 'POST',
        query: query,
        body: lmsBoxQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 自动线装拆箱
     * @name LmsBoxTemplate
     * @summary 提供给装箱打印的模板变量
     * @request GET:/blade-lms/box/template
     * @secure
     */
    lmsBoxTemplate: (params: RequestParams = {}) =>
      this.request<RLmsBoxPrintDTO, void>({
        path: `/blade-lms/box/template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 装箱清单:拆箱
     *
     * @tags 自动线装拆箱
     * @name LmsBoxUnBoxing
     * @summary 装箱清单拆箱
     * @request GET:/blade-lms/box/unboxing
     * @secure
     */
    lmsBoxUnBoxing: (
      query?: {
        /** 装箱记录ID */
        recordId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/box/unboxing`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags blade_lms_work_station_record管理
     * @name LmsWorkStationRecordCount
     * @summary blade_lms_work_station_record统计值
     * @request GET:/blade-lms/lms-work-station-record/count
     * @secure
     */
    lmsWorkStationRecordCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-lms/lms-work-station-record/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsWorkStationRecord
     *
     * @tags blade_lms_work_station_record管理
     * @name LmsWorkStationRecordDetail
     * @summary blade_lms_work_station_record详情
     * @request GET:/blade-lms/lms-work-station-record/get/{id}
     * @secure
     */
    lmsWorkStationRecordDetail: (id: string, params: RequestParams = {}) =>
      this.request<RLmsWorkStationRecordVo, void>({
        path: `/blade-lms/lms-work-station-record/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsWorkStationRecordVO
     *
     * @tags blade_lms_work_station_record管理
     * @name LmsWorkStationRecordInsert
     * @summary blade_lms_work_station_record新增
     * @request POST:/blade-lms/lms-work-station-record/insert
     * @secure
     */
    lmsWorkStationRecordInsert: (lmsWorkStationRecordVO: LmsWorkStationRecordVo, params: RequestParams = {}) =>
      this.request<RLmsWorkStationRecordVo, void>({
        path: `/blade-lms/lms-work-station-record/insert`,
        method: 'POST',
        body: lmsWorkStationRecordVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags blade_lms_work_station_record管理
     * @name LmsWorkStationRecordList
     * @summary blade_lms_work_station_record列表
     * @request GET:/blade-lms/lms-work-station-record/list
     * @secure
     */
    lmsWorkStationRecordList: (params: RequestParams = {}) =>
      this.request<RListLmsWorkStationRecordVo, void>({
        path: `/blade-lms/lms-work-station-record/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags blade_lms_work_station_record管理
     * @name LmsWorkStationRecordPage
     * @summary blade_lms_work_station_record分页
     * @request GET:/blade-lms/lms-work-station-record/page
     * @secure
     */
    lmsWorkStationRecordPage: (
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
      this.request<RIPageLmsWorkStationRecordVo, void>({
        path: `/blade-lms/lms-work-station-record/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags blade_lms_work_station_record管理
     * @name LmsWorkStationRecordRemove
     * @summary blade_lms_work_station_record删除
     * @request DELETE:/blade-lms/lms-work-station-record/remove
     * @secure
     */
    lmsWorkStationRecordRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-lms/lms-work-station-record/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsWorkStationRecordVO
     *
     * @tags blade_lms_work_station_record管理
     * @name LmsWorkStationRecordUpdate
     * @summary blade_lms_work_station_record修改
     * @request PUT:/blade-lms/lms-work-station-record/update
     * @secure
     */
    lmsWorkStationRecordUpdate: (lmsWorkStationRecordVO: LmsWorkStationRecordVo, params: RequestParams = {}) =>
      this.request<RLmsWorkStationRecordVo, void>({
        path: `/blade-lms/lms-work-station-record/update`,
        method: 'PUT',
        body: lmsWorkStationRecordVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 在第一步中返回信息需要传到第二步, 第二步其他回显信息从第一步获取, 提取数组中orderIdList
     *
     * @tags blade_lms_order管理
     * @name LmsOrderBatchSave
     * @summary 根据班制批量生成工单
     * @request POST:/blade-lms/order/batch-save
     * @secure
     */
    lmsOrderBatchSave: (batchCalendarOrderVO: BatchCalendarOrderVO, params: RequestParams = {}) =>
      this.request<RListBatchOrderReturnVO, void>({
        path: `/blade-lms/order/batch-save`,
        method: 'POST',
        body: batchCalendarOrderVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_lms_order管理
     * @name LmsOrderBatchSaveWorkstation
     * @summary 第二步批量指派工序工位信息
     * @request POST:/blade-lms/order/batch-save-workstation
     * @secure
     */
    lmsOrderBatchSaveWorkstation: (batchSaveVOList: LmsWorkstationBatchSaveVO[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/order/batch-save-workstation`,
        method: 'POST',
        body: batchSaveVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入产品id
     *
     * @tags blade_lms_order管理
     * @name LmsOrderGetProductionCraft
     * @summary 选择产品ID 查询工艺路线列表数据
     * @request GET:/blade-lms/order/get-production-craft/{productionId}
     * @secure
     */
    lmsOrderGetProductionCraft: (productionId: string, params: RequestParams = {}) =>
      this.request<RListCraftRoutingDetailVO, void>({
        path: `/blade-lms/order/get-production-craft/${productionId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsOrder
     *
     * @tags blade_lms_order管理
     * @name LmsOrderDetail
     * @summary 工单基础状态信息详情
     * @request GET:/blade-lms/order/get/{id}
     * @secure
     */
    lmsOrderDetail: (id: string, params: RequestParams = {}) =>
      this.request<RLmsOrderVo, void>({
        path: `/blade-lms/order/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_lms_order管理
     * @name LmsOrderListCraft
     * @summary 不选择产品获取工艺路线
     * @request GET:/blade-lms/order/list-craft
     * @secure
     */
    lmsOrderListCraft: (params: RequestParams = {}) =>
      this.request<RListCraftRoutingDetailVO, void>({
        path: `/blade-lms/order/list-craft`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_lms_order管理
     * @name LmsOrderOrderManualCompletion
     * @summary 工单手动完工
     * @request GET:/blade-lms/order/manual_completion
     * @secure
     */
    lmsOrderOrderManualCompletion: (
      query: {
        /** orderId */
        orderId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/order/manual_completion`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description lmsOrderQueryVO
     *
     * @tags blade_lms_order管理
     * @name LmsOrderPage
     * @summary 工单基础状态信息分页
     * @request GET:/blade-lms/order/page
     * @secure
     */
    lmsOrderPage: (
      query?: {
        /**
         * 工单编号
         * @minLength 0
         * @maxLength 50
         */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 工单状态，多个逗号间隔 */
        orderStatus?: string;
        /** 工单类型  1.来料  2.生产 */
        orderType?: string;
        /** 计划结束时间，逗号间隔 */
        planEndTime?: string;
        /** 计划开始时间，逗号间隔 */
        planStartTime?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageLmsOrderVo, void>({
        path: `/blade-lms/order/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入工单ID
     *
     * @tags blade_lms_order管理
     * @name LmsOrderPause
     * @summary 工单暂停
     * @request POST:/blade-lms/order/pause
     * @secure
     */
    lmsOrderPause: (orderIds: string[], params: RequestParams = {}) =>
      this.request<RListLmsOrderVo, void>({
        path: `/blade-lms/order/pause`,
        method: 'POST',
        body: orderIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags blade_lms_order_process管理
     * @name LmsOrderProcessCount
     * @summary blade_lms_order_process统计值
     * @request GET:/blade-lms/order/process/count
     * @secure
     */
    lmsOrderProcessCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-lms/order/process/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsOrderProcess
     *
     * @tags blade_lms_order_process管理
     * @name LmsOrderProcessDetail
     * @summary blade_lms_order_process详情
     * @request GET:/blade-lms/order/process/get/{id}
     * @secure
     */
    lmsOrderProcessDetail: (id: string, params: RequestParams = {}) =>
      this.request<RLmsOrderProcessVo, void>({
        path: `/blade-lms/order/process/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsOrderProcessVO
     *
     * @tags blade_lms_order_process管理
     * @name LmsOrderProcessInsert
     * @summary blade_lms_order_process新增
     * @request POST:/blade-lms/order/process/insert
     * @secure
     */
    lmsOrderProcessInsert: (lmsOrderProcessVO: LmsOrderProcessVo, params: RequestParams = {}) =>
      this.request<RLmsOrderProcessVo, void>({
        path: `/blade-lms/order/process/insert`,
        method: 'POST',
        body: lmsOrderProcessVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags blade_lms_order_process管理
     * @name LmsOrderProcessList
     * @summary 工单工序信息列表
     * @request GET:/blade-lms/order/process/list
     * @secure
     */
    lmsOrderProcessList: (
      query?: {
        /** 工单ID */
        orderId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListLmsOrderProcessVo, void>({
        path: `/blade-lms/order/process/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags blade_lms_order_process管理
     * @name LmsOrderProcessPage
     * @summary blade_lms_order_process分页
     * @request GET:/blade-lms/order/process/page
     * @secure
     */
    lmsOrderProcessPage: (
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
      this.request<RIPageLmsOrderProcessVo, void>({
        path: `/blade-lms/order/process/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags blade_lms_order_process管理
     * @name LmsOrderProcessRemove
     * @summary blade_lms_order_process删除
     * @request DELETE:/blade-lms/order/process/remove
     * @secure
     */
    lmsOrderProcessRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-lms/order/process/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入lmsOrderProcessVO
     *
     * @tags blade_lms_order_process管理
     * @name LmsOrderProcessUpdate
     * @summary blade_lms_order_process修改
     * @request PUT:/blade-lms/order/process/update
     * @secure
     */
    lmsOrderProcessUpdate: (lmsOrderProcessVO: LmsOrderProcessVo, params: RequestParams = {}) =>
      this.request<RLmsOrderProcessVo, void>({
        path: `/blade-lms/order/process/update`,
        method: 'PUT',
        body: lmsOrderProcessVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入工单id
     *
     * @tags blade_lms_order_process管理
     * @name LmsOrderProcessWorkstationList
     * @summary 根据工单ID获取每道工序的工位列表数据
     * @request GET:/blade-lms/order/process/workstation-list
     * @secure
     */
    lmsOrderProcessWorkstationList: (
      query: {
        /** orderId */
        orderId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListLmsWorkStationProcessVO, void>({
        path: `/blade-lms/order/process/workstation-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags blade_lms_order管理
     * @name LmsOrderRemove
     * @summary 工单基础状态信息删除
     * @request DELETE:/blade-lms/order/remove
     * @secure
     */
    lmsOrderRemove: (ids: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/order/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入LmsOrderVO
     *
     * @tags blade_lms_order管理
     * @name LmsOrderSave
     * @summary 保存工单基础信息
     * @request POST:/blade-lms/order/save
     * @secure
     */
    lmsOrderSave: (LmsOrderVO: LmsOrderVo, params: RequestParams = {}) =>
      this.request<RLmsOrderDetailVO, void>({
        path: `/blade-lms/order/save`,
        method: 'POST',
        body: LmsOrderVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入lmsOrderDetailVO
     *
     * @tags blade_lms_order管理
     * @name LmsOrderSaveWorkstation
     * @summary 保存指派工位信息
     * @request POST:/blade-lms/order/save-workstation
     * @secure
     */
    lmsOrderSaveWorkstation: (lmsOrderDetailVO: LmsOrderDetailVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/order/save-workstation`,
        method: 'POST',
        body: lmsOrderDetailVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_lms_order管理
     * @name LmsOrderShiftList
     * @summary 获取所有班制信息
     * @request POST:/blade-lms/order/shift-list
     * @secure
     */
    lmsOrderShiftList: (queryDate: any[], params: RequestParams = {}) =>
      this.request<RListShiftVO, void>({
        path: `/blade-lms/order/shift-list`,
        method: 'POST',
        body: queryDate,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入工单ID
     *
     * @tags blade_lms_order管理
     * @name LmsOrderStart
     * @summary 工单开工
     * @request POST:/blade-lms/order/start
     * @secure
     */
    lmsOrderStart: (orderIds: string[], params: RequestParams = {}) =>
      this.request<RListLmsOrderVo, void>({
        path: `/blade-lms/order/start`,
        method: 'POST',
        body: orderIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_lms_order管理
     * @name LmsOrderOrderStatistics
     * @summary 查看工单统计信息
     * @request GET:/blade-lms/order/statistics
     * @secure
     */
    lmsOrderOrderStatistics: (params: RequestParams = {}) =>
      this.request<RLmsOrderStatusStatVO, void>({
        path: `/blade-lms/order/statistics`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_lms_order管理
     * @name LmsOrderTest
     * @summary 第二步批量指派工序工位信息
     * @request GET:/blade-lms/order/test
     * @secure
     */
    lmsOrderTest: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/order/test`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-print-controller
     * @name LmsPrintGetApiField
     * @summary 获取接口返回参数
     * @request GET:/blade-lms/print/api-field
     * @secure
     */
    lmsPrintGetApiField: (
      query: {
        /** apiUrl */
        apiUrl: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListString, void>({
        path: `/blade-lms/print/api-field`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-print-controller
     * @name LmsPrintTempList
     * @summary 打印模板信息列表
     * @request GET:/blade-lms/print/list
     * @secure
     */
    lmsPrintTempList: (
      query: {
        /** bizCode */
        bizCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListLmsPrintTempVO, void>({
        path: `/blade-lms/print/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-print-controller
     * @name LmsPrintPage
     * @summary 打印模板信息分页
     * @request GET:/blade-lms/print/page
     * @secure
     */
    lmsPrintPage: (
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
        /** bizCode */
        bizCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageLmsPrintTempVO, void>({
        path: `/blade-lms/print/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-print-controller
     * @name LmsPrintAllPrinter
     * @summary 获取接口返回参数
     * @request GET:/blade-lms/print/printer-list
     * @secure
     */
    lmsPrintAllPrinter: (params: RequestParams = {}) =>
      this.request<RListLmsPrinterVO, void>({
        path: `/blade-lms/print/printer-list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-print-controller
     * @name LmsPrintRemove
     * @summary 删除打印模板
     * @request DELETE:/blade-lms/print/remove
     * @secure
     */
    lmsPrintRemove: (ids: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/print/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-print-controller
     * @name LmsPrintSave
     * @summary 保存打印模板基础信息
     * @request POST:/blade-lms/print/save
     * @secure
     */
    lmsPrintSave: (vo: LmsPrintTempSaveVO, params: RequestParams = {}) =>
      this.request<RLmsPrintTempVO, void>({
        path: `/blade-lms/print/save`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-print-controller
     * @name LmsPrintTest
     * @summary 测试打印功能
     * @request GET:/blade-lms/print/test
     * @secure
     */
    lmsPrintTest: (
      query?: {
        /** printerName */
        printerName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-lms/print/test`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-print-controller
     * @name LmsPrintUpdate
     * @summary 编辑模板
     * @request PUT:/blade-lms/print/update
     * @secure
     */
    lmsPrintUpdate: (vo: LmsPrintTempUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/print/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-print-controller
     * @name LmsPrintDetail
     * @summary 模板详情
     * @request GET:/blade-lms/print/{id}
     * @secure
     */
    lmsPrintDetail: (id: string, params: RequestParams = {}) =>
      this.request<RLmsPrintTempVO, void>({
        path: `/blade-lms/print/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-printer-controller
     * @name LmsPrinterDeletePrinter
     * @summary 打印机删除
     * @request DELETE:/blade-lms/printer/delete
     * @secure
     */
    lmsPrinterDeletePrinter: (vo: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/printer/delete`,
        method: 'DELETE',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-printer-controller
     * @name LmsPrinterPagePrinter
     * @summary 打印机分页
     * @request GET:/blade-lms/printer/page
     * @secure
     */
    lmsPrinterPagePrinter: (
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
        /** key */
        key: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageLmsPrinterVO, void>({
        path: `/blade-lms/printer/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags lms-printer-controller
     * @name LmsPrinterSaveOrUpdate
     * @summary 保存或修改打印机基础信息
     * @request POST:/blade-lms/printer/save-or-update
     * @secure
     */
    lmsPrinterSaveOrUpdate: (vo: LmsPrinterVO, params: RequestParams = {}) =>
      this.request<RLmsPrinterVO, void>({
        path: `/blade-lms/printer/save-or-update`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LMS生产统计API
     * @name LmsProductionStatisticsOrderPage
     * @summary 分页获取工单基本信息列表
     * @request GET:/blade-lms/produce/page
     * @secure
     */
    lmsProductionStatisticsOrderPage: (
      query?: {
        /** 工单编号/产品编号 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 计划结束时间前区时间 */
        planEndTimeBegin?: string;
        /** 计划结束时间后区时间 */
        planEndTimeEnd?: string;
        /** 计划开始时间前区时间 */
        planStartTimeBegin?: string;
        /** 计划开始时间后区时间 */
        planStartTimeEnd?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 排序方式 1.默认 2. 优先级降序 3. 优先级升序 4. 时间降序 5.时间升序
         * @format int32
         */
        sort?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageLmsProduceOrderVO, void>({
        path: `/blade-lms/produce/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LMS生产统计API
     * @name LmsProductionStatisticsPartList
     * @summary 获取工单下的零件
     * @request GET:/blade-lms/produce/parts/{orderId}
     * @secure
     */
    lmsProductionStatisticsPartList: (
      orderId: string,
      query?: {
        /** orderField */
        orderField?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFmsProduceComponentVO, void>({
        path: `/blade-lms/produce/parts/${orderId}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LMS生产统计API
     * @name LmsProductionStatisticsProcessList
     * @summary 获取工单对应的工序列表
     * @request GET:/blade-lms/produce/processList/{orderId}
     * @secure
     */
    lmsProductionStatisticsProcessList: (
      orderId: string,
      query?: {
        /** orderField */
        orderField?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RFmsProduceProcessVO, void>({
        path: `/blade-lms/produce/processList/${orderId}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-setting
     * @name LmsTraceFlowSettingChangeSort
     * @summary 改变顺序
     * @request PUT:/blade-lms/trace-flow-setting/change-sort
     * @secure
     */
    lmsTraceFlowSettingChangeSort: (traceFlowSettingsVOList: TraceFlowSettingsVo[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-lms/trace-flow-setting/change-sort`,
        method: 'PUT',
        body: traceFlowSettingsVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入工位ID和是否启用
     *
     * @tags trace-flow-setting
     * @name LmsTraceFlowSettingEnableAssociateFlow
     * @summary 是否关联流程
     * @request POST:/blade-lms/trace-flow-setting/enable-associate-flow
     * @secure
     */
    lmsTraceFlowSettingEnableAssociateFlow: (traceEnableAssociateFlowVO: VO7, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-lms/trace-flow-setting/enable-associate-flow`,
        method: 'POST',
        body: traceEnableAssociateFlowVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入traceFlowSettings
     *
     * @tags trace-flow-setting
     * @name LmsTraceFlowSettingDetail
     * @summary 流程维护详情
     * @request GET:/blade-lms/trace-flow-setting/get/{id}
     * @secure
     */
    lmsTraceFlowSettingDetail: (id: string, params: RequestParams = {}) =>
      this.request<RTraceFlowSettingsVo, void>({
        path: `/blade-lms/trace-flow-setting/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-setting
     * @name LmsTraceFlowSettingList
     * @summary 流程维护列表
     * @request GET:/blade-lms/trace-flow-setting/list
     * @secure
     */
    lmsTraceFlowSettingList: (
      query: {
        /** groupId */
        groupId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListTraceFlowSettingsVo, void>({
        path: `/blade-lms/trace-flow-setting/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-setting
     * @name LmsTraceFlowSettingPage
     * @summary 流程维护分页
     * @request GET:/blade-lms/trace-flow-setting/page
     * @secure
     */
    lmsTraceFlowSettingPage: (
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
        /** groupId */
        groupId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageTraceFlowSettingsVo, void>({
        path: `/blade-lms/trace-flow-setting/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags trace-flow-setting
     * @name LmsTraceFlowSettingRemove
     * @summary 流程维护删除
     * @request DELETE:/blade-lms/trace-flow-setting/remove
     * @secure
     */
    lmsTraceFlowSettingRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-lms/trace-flow-setting/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入traceFlowSettingsWorkstationVO
     *
     * @tags trace-flow-setting
     * @name LmsTraceFlowSettingInsert
     * @summary 流程维护新增或编辑
     * @request POST:/blade-lms/trace-flow-setting/save
     * @secure
     */
    lmsTraceFlowSettingInsert: (traceFlowSettingsWorkstationVO: TraceFlowSettingsVo1, params: RequestParams = {}) =>
      this.request<RTraceFlowSettingsVo, void>({
        path: `/blade-lms/trace-flow-setting/save`,
        method: 'POST',
        body: traceFlowSettingsWorkstationVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-setting
     * @name LmsTraceFlowSettingGetUnassociatedWorkstationList
     * @summary 未关联流程的工位列表
     * @request POST:/blade-lms/trace-flow-setting/unassociated-workstation-list
     * @secure
     */
    lmsTraceFlowSettingGetUnassociatedWorkstationList: (lmsUnassociatedWorkstationQueryVO: LmsVO, params: RequestParams = {}) =>
      this.request<RListVO1, void>({
        path: `/blade-lms/trace-flow-setting/unassociated-workstation-list`,
        method: 'POST',
        body: lmsUnassociatedWorkstationQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
