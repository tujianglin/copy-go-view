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

/** BladeFile */
export interface BladeFile {
  attachId?: string;
  domain?: string;
  fullLink?: string;
  link?: string;
  name?: string;
  originalName?: string;
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

/** CustomFieldValueVO */
export interface CustomFieldValueVO {
  /** 字段Code 唯一标识 */
  fieldCode?: string;
  /** 字段值 */
  value?: string;
  /** 字段值列表 多个值时使用 */
  values?: string[];
}

/** H5OrderProcessVO */
export interface H5OrderProcessVO {
  /**
   * 投产数量
   * @format int32
   */
  inputNum?: number;
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /** 工单id */
  orderId?: string;
  /** 计划id */
  planId?: string;
  /** 工序编号 */
  processCode?: string;
  /** 工序id */
  processId?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 工序状态(1.待加工 2.加工中 3.暂停 4.关闭 5.完工)
   * @format int32
   */
  processStatus?: number;
  /**
   * 工序合格数量
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 工序报废数量
   * @format int32
   */
  scrappedNum?: number;
  /**
   * 工序顺序
   * @format int32
   */
  sort?: number;
  /**
   * 是否并行： 0 否 1 是
   * @format int32
   */
  whetherParallel?: number;
}

/** H5OrderVO */
export interface H5OrderVO {
  /**
   * 派发数量
   * @format int32
   */
  assignNum?: number;
  /** 工单号 */
  orderCode?: string;
  /** 工单id */
  orderId?: string;
  /**
   * 工单状态(1：待加工，2：加工中，3：暂停，4：关闭,5:完工)
   * @format int32
   */
  orderStatus?: number;
  /** 剩余时间  逾期返回-1，单位是 (s)秒 */
  overdueTime?: string;
  /** 计划编号 */
  planCode?: string;
  /** 计划id */
  planId?: string;
  /** 所属产品名称 */
  productName?: string;
  /**
   * 合格数量
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 报废数量
   * @format int32
   */
  scrappedNum?: number;
  /** 所属计划类型 */
  typeId?: string;
}

/** H5PlanCraftProcessVO */
export interface H5PlanCraftProcessVO {
  /**
   * 拆卸工时
   * @format int32
   */
  disassemblyTime?: number;
  /** 附件 */
  files?: ProductionCraftProcessFileVo[];
  /** 工艺工序id */
  id?: string;
  /**
   * 准备工时
   * @format int32
   */
  prepareTime?: number;
  /** 工序编号 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 工序类型
   * @format int32
   */
  processType?: number;
  /** 工序类型名称 */
  processTypeName?: string;
  /** 程序Id */
  programId?: string;
  /** 程序名称 */
  programName?: string;
  /**
   * 工序顺序
   * @format int32
   */
  sort?: number;
  /**
   * 标准工时（秒）
   * @format int32
   */
  standardTime?: number;
  /**
   * 运输工时
   * @format int32
   */
  transportTime?: number;
}

/** H5PlanFrontPageVO */
export interface H5PlanFrontPageVO {
  /** 完成计划数 */
  finishPlanNums?: string;
  /** 工单，只展示3个 */
  h5OrderVOList?: H5OrderVO[];
  /** 计划,只展示3个 */
  h5PlanVOList?: H5PlanVO[];
  /** 计划总数 */
  planSumNums?: string;
  /** 未完成计划数 */
  undonePlanNums?: string;
}

/** H5PlanVO */
export interface H5PlanVO {
  /** 计划编号 */
  code?: string;
  /** 计划类型名称 */
  name?: string;
  /** 计划id */
  planId?: string;
  /**
   * 计划数量
   * @format int32
   */
  planNum?: number;
  /**
   * 计划状态(1:待派发 2.待加工 3.加工中 4.暂停 5.关闭 6.完工)
   * @format int32
   */
  planStatus?: number;
  /** 所属计划类型 */
  typeId?: string;
}

/** HmiOrderConditionVO */
export interface HmiOrderConditionVO {
  /** hmi工单id */
  orderId?: string;
  /** hmi登入工位id */
  workstationId?: string;
}

/** HmiOrderProcessVO */
export interface HmiOrderProcessVO {
  /** 程序名称 */
  fileName?: string;
  /**
   * 投产数量
   * @format int32
   */
  inputNum?: number;
  /** 文件链接 */
  link?: string;
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /** 文件key，预览文件使用 */
  objectKey?: string;
  /** 工单编号 */
  orderCode?: string;
  /** 计划编号 */
  planCode?: string;
  /** 工序编号 */
  processCode?: string;
  /** 工序id */
  processId?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 工序状态(1.待加工 2.加工中 3.暂停 4.关闭 5.完工)
   * @format int32
   */
  processStatus?: number;
  /** 程序id */
  programId?: string;
  /**
   * 报工数量
   * @format int32
   */
  reportNum?: number;
  /** 工序顺序 */
  sort?: string;
  /** 文件后缀 */
  suffix?: string;
  /**
   * 是否并行： 0 否 1 是
   * @format int32
   */
  whetherParallel?: number;
}

/** HmiWorkstationReportRecordVO */
export interface HmiWorkstationReportRecordVO {
  /**
   * 投产数量
   * @format int32
   */
  inputNum?: number;
  /** 工单编号 */
  orderCode?: string;
  /** 计划编号 */
  planCode?: string;
  /** 工序名称 */
  processName?: string;
  /** 开工人员名称 */
  producerUserName?: string;
  /** 产品名称 */
  productName?: string;
  /**
   * 报工合格数量
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 记录状态：0 开工 1 完工
   * @format int32
   */
  recordStatus?: number;
  /**
   * 报工数量
   * @format int32
   */
  reportNum?: number;
  /**
   * 报工报废数量
   * @format int32
   */
  scrappedNum?: number;
  /**
   * 开工时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 报工时间
   * @format date-time
   */
  workshopTime?: string;
  /** 报工人员名称 */
  workshopUserName?: string;
}

/** JuxtapositionReportDTO */
export interface JuxtapositionReportDTO {
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /** 并序报工记录id（并序开工时子序的开工记录中） */
  openSequenceId?: string;
  /** 工序编号 */
  processCode?: string;
  /** 工序id */
  processId?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 合格数量
   * @format int32
   */
  qualifyNum?: number;
  /** 报工记录id */
  recordId?: string;
  /** 备注 */
  remark?: string;
  /**
   * 报废数量
   * @format int32
   */
  scrappedNum?: number;
  /** 加工工位id */
  workstationId?: string;
  /** 加工工位名称 */
  workstationName?: string;
}

/** OpRecordExportVO */
export interface OpRecordExportVO {
  /**
   * 结束时间
   * @format date
   */
  endDate?: string;
  /** 工单id */
  orderId?: string;
  /** 产品名称 */
  productId?: string;
  /** 报工人员Id */
  reportEmployeeIds?: string[];
  /**
   * 开始时间
   * @format date
   */
  startDate?: string;
  /** 加工人员id */
  workEmployeeIds?: string[];
}

/** OrderChildRecordVO */
export interface OrderChildRecordVO {
  /**
   * 报工时间
   * @format date-time
   */
  endTime?: string;
  /** 主键 */
  id?: string;
  /** 工单id */
  orderId?: string;
  /** 工单工序id */
  orderProcessId?: string;
  /** 计划id */
  planId?: string;
  /** 产品编号 */
  productCode?: string;
  /** 产品名称 */
  productName?: string;
  /**
   * 报工合格数量
   * @format int32
   */
  qualifNum?: number;
  /**
   * 记录状态：0 开工 1 完工
   * @format int32
   */
  recordStatus?: number;
  /** 备注 */
  remark?: string;
  /** 报工人员id */
  reportEmployeeId?: string;
  /** 报工人员名称 */
  reportEmployeeName?: string;
  /**
   * 报工数量
   * @format int32
   */
  reportNum?: number;
  /** 报工时间 */
  reportTime?: string;
  /**
   * 报废数量
   * @format int32
   */
  scrappedNum?: number;
  /**
   * 开工时间
   * @format date-time
   */
  startTime?: string;
  /** 开工人员id */
  workEmployeeId?: string;
  /** 开工人员名称 */
  workEmployeeName?: string;
  /** 加工工位id */
  workstationId?: string;
  /** 加工工位名称 */
  workstationName?: string;
}

/** OrderProcessEditWorkStationVO */
export interface OrderProcessEditWorkStationVO {
  /** 工单工序id */
  orderProcessId?: string;
  /** 工位id，用逗号隔开 */
  workstationId?: string;
  /** 工位名称，用逗号隔开 */
  workstationName?: string;
}

/** OrderProcessGeneralDetailVO */
export interface OrderProcessGeneralDetailVO {
  /**
   * 投产数量
   * @format int32
   */
  inputNum?: number;
  /** 工单ID */
  orderId?: string;
  /** 工单工序Id */
  orderProcessId?: string;
  /** 工序编码 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 工序状态(1.待加工 2.加工中 3.暂停 4.关闭 5.完工)
   * @format int32
   */
  processStatus?: number;
  /** 产品编码 */
  productCode?: string;
  /** 产品Id */
  productId?: string;
  /** 产品名称 */
  productName?: string;
  /**
   * 工单合格数量
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 报工数量
   * @format int32
   */
  reportNum?: number;
  /**
   * 工单报废数量
   * @format int32
   */
  scrappedNum?: number;
  /**
   * 待报工数量
   * @format int32
   */
  waitReportNum?: number;
  /** 工单编号 */
  workOrderCode?: string;
  /**
   * 工种
   * @format int32
   */
  workType?: number;
  /** 工种 */
  workTypeStr?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** OrderProcessParallelDetailVO */
export interface OrderProcessParallelDetailVO {
  /** 并行序子序集合 */
  childOrderProcessList?: OrderProcessGeneralDetailVO[];
  /** 主序信息 */
  orderProcessGeneralDetailVO?: OrderProcessGeneralDetailVO;
}

/** OrderProcessRelationQueryVO */
export interface OrderProcessRelationQueryVO {
  /** 工艺id */
  craftId?: string;
  /** 工艺版本id */
  craftVersionId?: string;
  /** 工序编号 */
  processCode?: string;
  /**
   * 工序顺序
   * @format int32
   */
  sort?: number;
}

/** OrderProcessRelationVO */
export interface OrderProcessRelationVO {
  /** 夹具集合 */
  fixtureVOList?: FixtureVo[];
  processId?: string;
  /** 刀具集合 */
  toolManageVOList?: ToolManageVO[];
}

/** OrderProcessReportWorkDTO */
export interface OrderProcessReportWorkDTO {
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /** 并序报工记录id（并序开工时子序的开工记录中） */
  openSequenceId?: string;
  /** 工序id */
  processId?: string;
  /**
   * 报工合格数量
   * @format int32
   */
  qualifyNum?: number;
  /** 质检报工人员编码 */
  qualityUserCode?: string;
  /** 质检报工人员 */
  qualityUserId?: string;
  /** 质检报工人员名称 */
  qualityUserName?: string;
  /** 报工记录id */
  recordId?: string;
  /** 备注 */
  remark?: string;
  /**
   * 报工不合格数量
   * @format int32
   */
  scrappedNum?: number;
  /** 报工人员编码 */
  workshopUserCode?: string;
  /** 报工人员id */
  workshopUserId?: string;
  /** 报工人员名称 */
  workshopUserName?: string;
}

/** OrderProcessStartGeneralVO */
export interface OrderProcessStartGeneralVO {
  /** 工单工序ID */
  orderProcessId?: string;
  /** 开工工位信息 */
  workstationVoList?: OrderProcessStartWorkstationVO[];
}

/** OrderProcessStartParallelVO */
export interface OrderProcessStartParallelVO {
  /** 主工单工序ID */
  orderProcessId?: string;
  /** 工单工序工位信息 */
  orderProcessStartGeneralVoList?: OrderProcessStartGeneralVO[];
}

/** OrderProcessStartResultVO */
export interface OrderProcessStartResultVO {
  /** 当前工单工序编码 */
  currentProcessCode?: string;
  /** 当前工单工序ID */
  currentProcessId?: string;
  /** 当前工单工序名称 */
  currentProcessName?: string;
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /** 返回信息 */
  msg?: string;
  /** 工单号 */
  orderCode?: string;
  /** 计划Id */
  planId?: string;
  /** 结果反馈 true表示成功 false 表示失败 */
  resultFlag?: boolean;
  /** 计划类型id */
  typeId?: string;
  /** 工位编码 */
  workstationCode?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** OrderProcessStartWorkstationVO */
export interface OrderProcessStartWorkstationVO {
  /** 开工人员编码 */
  producerCode?: string;
  /** 开工人员ID */
  producerId?: string;
  /** 开工人员名称 */
  producerName?: string;
  /** 工位编码 */
  workstationCode?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** OrderReportDTO */
export interface OrderReportDTO {
  /**
   * 派发数量
   * @format int32
   */
  assignNum?: number;
  /** 工单id */
  orderId?: string;
  /** 计划id */
  planId?: string;
  /** 工序编号 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /** 所属产品名称 */
  productName?: string;
  /**
   * 待报工数量 = 投产数量 - 合格 - 报废
   * @format int32
   */
  stayReportedNum?: number;
  /**
   * 已报工数量 = 工序合格 + 报废
   * @format int32
   */
  workReportedNum?: number;
}

/** OrderReportRecordResVO */
export interface OrderReportRecordResVO {
  /**
   * 指派数量
   * @format int32
   */
  assignNum?: number;
  /**
   * 报工时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 1-有子序 0-没有子序
   * @format int32
   */
  hasChildProcess?: number;
  /** 主键id */
  id?: string;
  /** 工单id */
  orderId?: string;
  /** 工单工序id */
  orderProcessId?: string;
  /** 计划id */
  planId?: string;
  /** 工序编号 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /** 产品编号 */
  productCode?: string;
  /** 产品id */
  productId?: string;
  /** 产品名称 */
  productName?: string;
  /**
   * 合格数量
   * @format int32
   */
  qualifNum?: number;
  /**
   * 记录状态 0 开工 1完工
   * @format int32
   */
  recordStatus?: number;
  /** 备注 */
  remark?: string;
  /** 报工人员id */
  reportEmployeeId?: string;
  /** 报工人员名称 */
  reportEmployeeName?: string;
  /**
   * 报工数量
   * @format int32
   */
  reportNum?: number;
  /** 报工用时(秒) */
  reportTime?: string;
  /**
   * 报废数量
   * @format int32
   */
  scrappedNum?: number;
  /** 产品规格 */
  standardModel?: string;
  /**
   * 开工时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 0：普通报工 1：系统报工
   * @format int32
   */
  systemOrOrdinary?: number;
  /** 开工人员Id */
  workEmployeeId?: string;
  /** 开工人员名称 */
  workEmployeeName?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 主序工位ids */
  workstationIds?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** OrderReportRecordSearchVO */
export interface OrderReportRecordSearchVO {
  /**
   * 结束时间
   * @format date
   */
  endDate?: string;
  /** 工单id */
  orderId?: string;
  /** 产品名称 */
  productId?: string;
  /** 分页条件 */
  query?: Query;
  /** 报工人员Id */
  reportEmployeeIds?: string[];
  /**
   * 开始时间
   * @format date
   */
  startDate?: string;
  /** 加工人员id */
  workEmployeeIds?: string[];
}

/** PlanAppendVO */
export interface PlanAppendVO {
  /**
   * 数量
   * @format int32
   */
  num?: number;
  /** 计划编号 */
  planCode?: string;
  /**
   * 计划结束时间
   * @format date-time
   */
  planEndTime?: string;
  /** 计划id */
  planId?: string;
  /** 计划工序 */
  planProcess?: PlanProcessDTO[];
  /**
   * 计划开始时间
   * @format date-time
   */
  planStartTime?: string;
}

/** PlanBomVO */
export interface PlanBomVO {
  id?: string;
  version?: string;
}

/**
 * PlanCraftVO
 * 计划来料的工艺路线信息
 */
export interface PlanCraftVO {
  /** 工艺路线id */
  craftId?: string;
  /** 工艺路线名称 */
  craftName?: string;
  /** 相关工艺版本信息 */
  craftVersions?: PlanCraftVersionVO[];
  /** 关联产品编码 */
  productCode?: string;
  /** 关联产品id */
  productId?: string;
  /** 关联产品名称 */
  productName?: string;
}

/**
 * PlanCraftVersionVO
 * 计划来料的工艺路线版本信息
 */
export interface PlanCraftVersionVO {
  /**
   * 是否顶版
   * @format int32
   */
  editionStatus?: number;
  /** 版本id */
  versionId?: string;
  /** 版本名称 */
  versionName?: string;
}

/** PlanModifyVO */
export interface PlanModifyVO {
  /** 扩展字段 */
  extendField?: string;
  /** id */
  id?: string;
  /** 订单编号 */
  indentCode?: string;
  /**
   * 计划结束时间
   * @format date-time
   */
  planEndTime?: string;
  /**
   * 计划数量
   * @format int32
   */
  planNum?: number;
  /**
   * 计划开始时间
   * @format date-time
   */
  planStartTime?: string;
  /** 规格型号 */
  standardModel?: string;
}

/** PlanProcessDTO */
export interface PlanProcessDTO {
  /** 计划工序id */
  planProcessId?: string;
  /** 工序编号 */
  processCode?: string;
  /** 工位id列表,隔开 */
  workstationIds?: string;
  /** 工位名称列表,隔开 */
  workstationNames?: string;
}

/** PlanProcessWorkStationAssignVO */
export interface PlanProcessWorkStationAssignVO {
  /** 计划工序id */
  planProcessId?: string;
  /** 工位id，用逗号隔开 */
  workstationId?: string;
  /** 工位名称，用逗号隔开 */
  workstationName?: string;
}

/** PlanQueryVO */
export interface PlanQueryVO {
  /**
   * 计划属性
   * @format int32
   */
  category?: number;
  /** 计划编号 */
  code?: string;
  /** 扩展字段过滤条件 */
  filter?: CustomFieldValueVO[];
  /** 选中的列表数据 */
  ids?: string[];
  /** 订单编号 */
  indentCode?: string;
  /** 排序方式 asc 升序 desc 降序 */
  order?: string;
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
  /** 计划状态 */
  planStatus?: number[];
  /** 产品名称 */
  productName?: string;
  /** 产品类型 */
  productTypeIds?: string[];
  /** 排序字段名称 */
  sortName?: string;
  /** 规格型号 */
  standardModel?: string;
  /** 计划类型id */
  typeId?: string;
}

/** PlanSubmitVO */
export interface PlanSubmitVO {
  /** 产品bom主键 */
  bomId?: string;
  /** 所属bom版本id */
  bomVersion?: string;
  /**
   * 计划类别：1 产品计划 2 来料计划
   * @format int32
   */
  category?: number;
  /** 计划编号 */
  code?: string;
  /** 所属产品工艺id */
  craftId?: string;
  /** 所属产品工艺名称 */
  craftName?: string;
  /** 所属工艺版本id */
  craftVersion?: string;
  /** 所属工艺版本名称 */
  craftVersionName?: string;
  /** 扩展字段 json格式 */
  extendField?: string;
  /** id */
  id?: string;
  /** 订单编号 */
  indentCode?: string;
  /**
   * 计划结束时间
   * @format date-time
   */
  planEndTime?: string;
  /**
   * 计划数量
   * @format int32
   */
  planNum?: number;
  /**
   * 计划开始时间
   * @format date-time
   */
  planStartTime?: string;
  /** 所属产品编码 */
  productCode?: string;
  /** 所属产品id */
  productId?: string;
  /** 所属产品名称 */
  productName?: string;
  /** 规格型号 */
  standardModel?: string;
  /** 计划类型id */
  typeId?: string;
}

/** ProcessingEquipmentVO */
export interface ProcessingEquipmentVO {
  /** 工序名称 */
  processName?: string;
  /** 开工人员编码 */
  producerUserCode?: string;
  /** 开工人员id */
  producerUserId?: string;
  /** 开工人员名称 */
  producerUserName?: string;
  /** 加工工位id */
  workstationId?: string;
  /** 加工工位名称 */
  workstationName?: string;
}

/**
 * Query
 * 查询条件
 */
export interface Query {
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

/** ReportParallelProcessDTO */
export interface ReportParallelProcessDTO {
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /** 并序报工记录id（并序开工时子序的开工记录中） */
  openSequenceId?: string;
  /** 工序id */
  processId?: string;
  /**
   * 报工合格数量
   * @format int32
   */
  qualifyNum?: number;
  /** 质检报工人员编码 */
  qualityUserCode?: string;
  /** 质检报工人员 */
  qualityUserId?: string;
  /** 质检报工人员名称 */
  qualityUserName?: string;
  /** 报工记录id */
  recordId?: string;
  /** 备注 */
  remark?: string;
  /**
   * 报工不合格数量
   * @format int32
   */
  scrappedNum?: number;
  /** 报工人员编码 */
  workshopUserCode?: string;
  /** 报工人员id */
  workshopUserId?: string;
  /** 报工人员名称 */
  workshopUserName?: string;
}

/** ReportWorkDTO */
export interface ReportWorkDTO {
  /** 工单id */
  orderId?: string;
  /** 计划id */
  planId?: string;
  /** 报工数据 */
  reportWorkDTOList?: OrderProcessReportWorkDTO[];
}

/** ReportWorkDetailDTO */
export interface ReportWorkDetailDTO {
  /** 报工工位详情 */
  juxtapositionReports?: JuxtapositionReportDTO[];
  /** 报工详情头信息 */
  reportDTO?: OrderReportDTO;
  /** 报工工位，可能是多个 */
  workstationNames?: string;
}

/** ToolEdgeVO */
export interface ToolEdgeVO {
  /** 主键 */
  id?: string;
  /** 初始寿命 */
  initialLife?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /**
   * 寿命状态(1.正常 2.警告 3.报警)
   * @format int32
   */
  lifeState?: number;
  /** 剩余寿命 */
  remainingLife?: number;
  /** 刀沿 */
  toolEdge?: string;
  /** 刀具id */
  toolId?: string;
  /** 已用寿命 */
  usedLife?: number;
  /** 预警值 */
  warningValue?: number;
}

/** ToolManageVO */
export interface ToolManageVO {
  /** 刀具编号 */
  code?: string;
  /** 主键 */
  id?: string;
  /** 参数1 */
  parameter1?: string;
  /** 参数10 */
  parameter10?: string;
  /** 参数2 */
  parameter2?: string;
  /** 参数3 */
  parameter3?: string;
  /** 参数4 */
  parameter4?: string;
  /** 参数5 */
  parameter5?: string;
  /** 参数6 */
  parameter6?: string;
  /** 参数7 */
  parameter7?: string;
  /** 参数8 */
  parameter8?: string;
  /** 参数9 */
  parameter9?: string;
  /**
   * 刀具类型
   * @minLength 0
   * @maxLength 45
   */
  toolCategory?: string;
  /** 刀具类型id */
  toolCategoryId?: string;
  /** 刀具刀沿集合 */
  toolEdgeVoList?: ToolEdgeVO[];
  /** 刀库 */
  toolLib?: string;
  /**
   * 刀具型号
   * @minLength 0
   * @maxLength 45
   */
  toolModel?: string;
  /** 刀具型号id */
  toolModelId?: string;
  /**
   * 机床刀位
   * @format int32
   */
  toolPosition?: number;
  /**
   * 刀具前缀编号
   * @minLength 0
   * @maxLength 45
   */
  toolPrefixCode?: string;
  /**
   * 使用状态(2.新增 1.已装刀 0.已卸刀)
   * @format int32
   */
  useState?: number;
  /**
   * 工位编号
   * @minLength 0
   * @maxLength 45
   */
  workstationCode?: string;
  /** 工位Id */
  workstationId?: string;
  /**
   * 工位名称
   * @minLength 0
   * @maxLength 45
   */
  workstationName?: string;
}

/** WIPAnalysisVO */
export interface WIPAnalysisVO {
  /** 计划编号 */
  code?: string;
  id?: string;
  /** 计划结束时间 */
  planEndTime?: string;
  /**
   * 计划数量
   * @format int32
   */
  planNum?: number;
  /**
   * 计划合格数量
   * @format int32
   */
  planQualifyNum?: number;
  /**
   * 计划报工数量
   * @format int32
   */
  planReportNum?: number;
  /** 计划开始时间 */
  planStartTime?: string;
  /**
   * 计划状态(1:待派发 2.待加工 3.加工中 4.暂停 5.关闭 6.完工)
   * @format int32
   */
  planStatus?: number;
  /** 计划状态(1:待派发 2.待加工 3.加工中 4.暂停 5.关闭 6.完工) */
  planStatusStr?: string;
  /** 所属产品编码 */
  productCode?: string;
  /** 所属产品名称 */
  productName?: string;
  /** 在制品汇总 */
  summary?: string;
}

/** WIPSearchVO */
export interface WIPSearchVO {
  /** 计划编号 */
  code?: string;
  /**
   * 报表分页数
   * @format int32
   */
  pageNo?: number;
  /**
   * 报表分页大小
   * @format int32
   */
  pageSize?: number;
  /** 计划开始时间 */
  planStartTime_begin?: string;
  /** 计划结束时间 */
  planStartTime_end?: string;
  /** 计划状态：1:待派发 2.待加工 3.加工中（默认） 4.暂停 5.关闭 6.完工 */
  planStatus?: number[];
  /** 产品编号/名称 */
  productKeywords?: string;
}

/** WorkstationInGroupVO */
export interface WorkstationInGroupVO {
  /** 头像 */
  avatar?: string;
  /** 日历code */
  calendarCode?: string;
  /** 工位组工位编号 */
  code?: string;
  /** ftp目录 */
  ftpCatalogue?: string;
  /** 组标签 */
  groupTag?: string;
  /** 工位组工位id */
  id?: string;
  /** 是否是工位组 */
  isGroup?: boolean;
  /** 是否是工位 */
  isWorkstation?: boolean;
  /**
   * 节点类型： 0根节点 1默认节点  2常规节点
   * @format int32
   */
  nodeType?: number;
  /** 工位组工位父级id */
  parentId?: string;
  /** 工位组工位父级名称 */
  parentName?: string;
  /** 工位组工位标题 */
  title?: string;
}

/** WorkstationSingleVO */
export interface WorkstationSingleVO {
  /** 工位编码 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/**
 * FixtureVo对象
 * 工装夹具
 */
export interface FixtureVo {
  /** 图像 */
  avatar?: string;
  /** 夹具编号 */
  code?: string;
  /** 描述 */
  description?: string;
  /** 夹具组ID */
  fixtureGroupId?: string;
  /** 夹具组名称 */
  fixtureGroupName?: string;
  /**
   * 夹具状态 0-冻结 1-激活
   * @format int32
   */
  fixtureStatus?: number;
  /** 主键id */
  id?: string;
  /**
   * 是否在使用
   * @format int32
   */
  inUse?: number;
  /** 夹具名称 */
  name?: string;
  /** 托盘面编号 */
  surfaceCode?: string;
  /** 托盘面id */
  surfaceId?: string;
  /** 托盘面名称 */
  surfaceName?: string;
  /** 附件集合 */
  toolAppendixVOList?: ToolAppendixVo[];
  /** 托盘编号 */
  trayCode?: string;
  /** 主键ID */
  trayFixtureId?: string;
  /** 托盘id */
  trayId?: string;
  /** 托盘名称 */
  trayName?: string;
}

/** IPage«HmiWorkstationReportRecordVO» */
export interface IPageHmiWorkstationReportRecordVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: HmiWorkstationReportRecordVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«OrderHmiVO对象» */
export interface IPageOrderHmiVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: OrderHmiVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«OrderReportRecordResVO» */
export interface IPageOrderReportRecordResVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: OrderReportRecordResVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«OrderVo对象» */
export interface IPageOrderVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: OrderVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«PlanVo对象» */
export interface IPagePlanVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: PlanVo1[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WIPAnalysisVO» */
export interface IPageWIPAnalysisVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WIPAnalysisVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/**
 * OrderHmiSearchVO对象
 * hmi搜索条件
 */
export interface OrderHmiSearchVO {
  /**
   * 计划结束时间
   * @format date-time
   */
  endTime?: string;
  /** 计划编号/工单编号 */
  keyword?: string;
  /** 工单状态 */
  orderStatus?: number[];
  /** 计划类型id */
  planTypeId?: string;
  /** 移除加工中的工单 */
  processingOrderId?: string;
  /**
   * 计划开始时间
   * @format date-time
   */
  startTime?: string;
  /** hmi登入的工位id */
  workstationId?: string;
}

/**
 * OrderHmiVO对象
 * hmi工单列表
 */
export interface OrderHmiVO {
  /**
   * 实际结束时间
   * @format date-time
   */
  endTime?: string;
  /** 计划类型名称 */
  name?: string;
  /** 工单号 */
  orderCode?: string;
  /** 工单id */
  orderId?: string;
  /**
   * 工单状态(1：待加工，2：加工中，3：暂停，4：关闭,5:完工)
   * @format int32
   */
  orderStatus?: number;
  /** 计划编号 */
  planCode?: string;
  /**
   * 计划结束时间
   * @format date-time
   */
  planEndTime?: string;
  /** 计划id */
  planId?: string;
  /**
   * 计划开始时间
   * @format date-time
   */
  planStartTime?: string;
  /** 工单工序id */
  processId?: string;
  /** 工单工序名称 */
  processName?: string;
  /** 所属产品编码 */
  productCode?: string;
  /** 所属产品id */
  productId?: string;
  /** 所属产品名称 */
  productName?: string;
  /**
   * 实际开始时间
   * @format date-time
   */
  startTime?: string;
}

/**
 * OrderProcessVo对象
 * blade_order_process
 */
export interface OrderProcessVo {
  /** 工艺包id */
  artBagId?: string;
  /**
   * 工艺包名称
   * @minLength 0
   * @maxLength 128
   */
  artBagName?: string;
  children?: OrderProcessVo[];
  /** 工艺id */
  craftId?: string;
  /** 工艺版本id */
  craftVersion?: string;
  /**
   * 拆卸工时（单位：s）
   * @format int32
   */
  disassemblyTime?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /**
   * 投产数量
   * @format int32
   */
  inputNum?: number;
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /** 工单id */
  orderId?: string;
  /** 主序id（当主序id不为空时，代表工序是子序） */
  parentId?: string;
  /** 计划id */
  planId?: string;
  /**
   * 准备工时（单位：s）
   * @format int32
   */
  prepareTime?: number;
  /**
   * 工序编号
   * @minLength 0
   * @maxLength 50
   */
  processCode?: string;
  /**
   * 工序名称
   * @minLength 0
   * @maxLength 50
   */
  processName?: string;
  /**
   * 工序状态(1.待加工 2.加工中 3.暂停 4.关闭 5.完工)
   * @format int32
   */
  processStatus?: number;
  /**
   * 暂停前状态
   * @format int32
   */
  processStatusBefore?: number;
  /** 工序状态(1.待加工 2.加工中 3.暂停 4.关闭 5.完工) */
  processStatusStr?: string;
  /** 开工人员名称，逗号隔开 */
  producerUserName?: string;
  /** 程序id */
  programId?: string;
  /**
   * 程序名称
   * @minLength 0
   * @maxLength 128
   */
  programName?: string;
  /**
   * 工序合格数量
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
   * 工序报废数量
   * @format int32
   */
  scrappedNum?: number;
  /**
   * 工序顺序
   * @format int32
   */
  sort?: number;
  /**
   * 标准工时（单位：s）
   * @format int32
   */
  standardTime?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /**
   * 运输工时（单位：s）
   * @format int32
   */
  transportTime?: number;
  /**
   * 是否并行： 0 否 1 是
   * @format int32
   */
  whetherParallel?: number;
  /**
   * 是否质检： 0 否 1 是
   * @format int32
   */
  whetherTest?: number;
  /**
   * 工种
   * @format int32
   */
  workType?: number;
  /** 工种 */
  workTypeStr?: string;
  /**
   * 多工位id，用逗号隔开
   * @minLength 0
   * @maxLength 2000
   */
  workstationId?: string;
  /**
   * 多工位名称，用逗号隔开
   * @minLength 0
   * @maxLength 5000
   */
  workstationName?: string;
}

/**
 * OrderProcess对象
 * blade_order_process
 */
export interface OrderProcess {
  /** 工艺包id */
  artBagId?: string;
  /** 工艺包名称 */
  artBagName?: string;
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
   * 拆卸工时（单位：s）
   * @format int32
   */
  disassemblyTime?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 首序 */
  firstProcess?: boolean;
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
  /** 末序 */
  lastProcess?: boolean;
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /** 下一序 */
  nextProcess?: OrderProcess;
  /** 工单id */
  orderId?: string;
  /** 计划id */
  planId?: string;
  /**
   * 准备工时（单位：s）
   * @format int32
   */
  prepareTime?: number;
  /** 上一序 */
  prevProcess?: OrderProcess;
  /** 工序编号 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 工序状态(1.待加工 2.加工中 3.暂停 4.关闭 5.完工)
   * @format int32
   */
  processStatus?: number;
  /**
   * 暂停前状态
   * @format int32
   */
  processStatusBefore?: number;
  /** 程序id */
  programId?: string;
  /** 程序名称 */
  programName?: string;
  /**
   * 工序合格数量
   * @format int32
   */
  qualifyNum?: number;
  /** 备注 */
  remark?: string;
  /**
   * 工序报废数量
   * @format int32
   */
  scrappedNum?: number;
  /**
   * 工序顺序
   * @format int32
   */
  sort?: number;
  /**
   * 标准工时（单位：s）
   * @format int32
   */
  standardTime?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 主序 */
  subProcess?: boolean;
  /** 租户ID */
  tenantId?: string;
  /** @format int32 */
  totalReportNumber?: number;
  /**
   * 运输工时（单位：s）
   * @format int32
   */
  transportTime?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /**
   * 是否并行： 0 否 1 是
   * @format int32
   */
  whetherParallel?: number;
  /**
   * 是否质检： 0 否 1 是
   * @format int32
   */
  whetherTest?: number;
  /** 多工位id，用逗号隔开 */
  workstationId?: string;
  /** 多工位名称，用逗号隔开 */
  workstationName?: string;
}

/**
 * OrderVo对象
 * 计划工单
 */
export interface OrderVo {
  /**
   * 投产数量
   * @format int32
   */
  assignNum?: number;
  /**
   * 计划类型
   * @format int32
   */
  category?: number;
  /**
   * 描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 扩展字段 */
  extendField?: string;
  /** 主键 */
  id?: string;
  /** 工单号 */
  orderCode?: string;
  /**
   * 工单状态(1：待加工，2：加工中，3：暂停，4：关闭,5:完工)
   * @format int32
   */
  orderStatus?: number;
  /**
   * 变更前工单状态
   * @format int32
   */
  orderStatusBefore?: number;
  /** 工单状态(1：待加工，2：加工中，3：暂停，4：关闭,5:完工) */
  orderStatusStr?: string;
  /** 剩余时间  逾期返回-1，单位是 (s)秒 */
  overdueTime?: string;
  /** 计划编号 */
  planCode?: string;
  /**
   * 计划结束时间
   * @format date-time
   */
  planEndTime?: string;
  /** 计划ID */
  planId?: string;
  /**
   * 计划开始时间
   * @format date-time
   */
  planStartTime?: string;
  /** 产品名称 */
  productName?: string;
  /**
   * 合格数量
   * @format int32
   */
  qualifyNum?: number;
  /** 报工情况 */
  reportSituation?: string;
  /**
   * 报废数量
   * @format int32
   */
  scrappedNum?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 所属计划类型 */
  typeId?: string;
}

/**
 * OrderVo对象_1
 * 计划工单
 */
export interface OrderVo1 {
  /** 排序方式 asc 升序 desc 降序 */
  order?: string;
  /** 工单编号 */
  orderCode?: string;
  /** 工单id */
  orderId?: string;
  /** 工单状态(1：待加工，2：加工中，3：暂停，4：关闭,5:完工) */
  orderStatus?: number[];
  /** 计划ID */
  planId?: string;
  /** 计划类型ID */
  planTypeId?: string;
  /** 排序字段名称 */
  sortName?: string;
}

/**
 * OrderVo对象_2
 * 计划工单
 */
export interface OrderVo2 {
  /**
   * 派发数量
   * @format int32
   * @min 1
   * @exclusiveMin false
   */
  assignNum?: number;
  /** 工单编号 */
  orderCode?: string;
  /** 计划ID */
  planId?: string;
  /** 计划工序关联工位 */
  planProcessWorkStationAssignVOList?: PlanProcessWorkStationAssignVO[];
}

/**
 * PlanProcessVo对象
 * 计划工序
 */
export interface PlanProcessVo {
  /** 工艺包id */
  artBagId?: string;
  /**
   * 工艺包名称
   * @minLength 0
   * @maxLength 50
   */
  artBagName?: string;
  /**
   * 工序派发状态 默认 0未派发 1已派发
   * @format int32
   */
  assignStatus?: number;
  children?: PlanProcessVo[];
  /**
   * 工序编号
   * @minLength 0
   * @maxLength 50
   */
  code?: string;
  /**
   * 描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /**
   * 拆卸工时
   * @format int32
   */
  disassemblyTime?: number;
  hasChildren?: boolean;
  id?: string;
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /**
   * 工序名称
   * @minLength 0
   * @maxLength 50
   */
  name?: string;
  /** 主序id（当主序id不为空时，代表工序是子序） */
  parentId?: string;
  /** 所属计划id */
  planId?: string;
  /**
   * 准备工时
   * @format int32
   */
  prepareTime?: number;
  /**
   * 工序序号
   * @minLength 0
   * @maxLength 50
   */
  processSequence?: string;
  /**
   * 程序名称
   * @minLength 0
   * @maxLength 128
   */
  programName?: string;
  /**
   * 工序顺序
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
  /** 租户id */
  tenantId?: string;
  /**
   * 运输工时
   * @format int32
   */
  transportTime?: number;
  /**
   * 计划类型名称
   * @minLength 0
   * @maxLength 32
   */
  typeName?: string;
  /**
   * 是否并行 默认 0否 1是
   * @format int32
   */
  whetherParallel?: number;
  /**
   * 是否质检 默认 0否 1是
   * @format int32
   */
  whetherTest?: number;
  /**
   * 工种
   * @format int32
   */
  workType?: number;
  /** 工种翻译 */
  workTypeLabel?: string;
  /**
   * 多工位id，用逗号隔开
   * @minLength 0
   * @maxLength 500
   */
  workstationId?: string;
  /**
   * 多工位id，用逗号隔开
   * @minLength 0
   * @maxLength 500
   */
  workstationName?: string;
}

/**
 * PlanVo对象
 * blade_plan
 */
export interface PlanVo {
  /** 工单id */
  orderId?: string;
  /** 工序工位信息集合 */
  orderProcessEditWorkStationVOList?: OrderProcessEditWorkStationVO[];
}

/**
 * PlanVo对象_1
 * blade_plan
 */
export interface PlanVo1 {
  /** 产品bom主键 */
  bomId?: string;
  /** 所属bom版本 */
  bomVersion?: string;
  /**
   * 计划类别：1 产品计划 2 来料计划
   * @format int32
   */
  category?: number;
  /** 计划类别Label */
  categoryLabel?: string;
  /** 计划编号 */
  code?: string;
  /** 所属产品工艺id */
  craftId?: string;
  /** 所属产品工艺名称 */
  craftName?: string;
  /** 所属工艺版本id */
  craftVersion?: string;
  /** 所属工艺版本名称 */
  craftVersionName?: string;
  /** 客户id */
  customerId?: string;
  /**
   * 客户名称
   * @minLength 0
   * @maxLength 50
   */
  customerName?: string;
  /** 描述 */
  description?: string;
  /**
   * 实际结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 扩展字段
   * @minLength 0
   * @maxLength 1073741824
   */
  extendField?: string;
  /** 是否有工单 */
  havePlanOrder?: boolean;
  id?: string;
  /** 订单编号 */
  indentCode?: string;
  /** 计划类型名称 */
  name?: string;
  /**
   * 计划结束时间
   * @format date-time
   */
  planEndTime?: string;
  /**
   * 计划数量
   * @format int32
   */
  planNum?: number;
  /** 计划进度 */
  planProgress?: string;
  /**
   * 计划开始时间
   * @format date-time
   */
  planStartTime?: string;
  /**
   * 计划状态(1:待派发 2.待加工 3.加工中 4.暂停 5.关闭 6.完工)
   * @format int32
   */
  planStatus?: number;
  /**
   * 暂停前的状态
   * @format int32
   */
  planStatusBefore?: number;
  /** 计划状态Label */
  planStatusLabel?: string;
  /** 所属产品编码 */
  productCode?: string;
  /** 所属产品id */
  productId?: string;
  /** 所属产品名称 */
  productName?: string;
  /** 所属产品类型名称 */
  productTypeLabel?: string;
  /**
   * 合格数量
   * @format int32
   */
  qualifyNum?: number;
  /**
   * 报工数量
   * @format int32
   */
  reportNum?: number;
  /** 报工情况 */
  reportSituation?: string;
  /**
   * 报废数量
   * @format int32
   */
  scrappedNum?: number;
  /** 规格型号 */
  standardModel?: string;
  /**
   * 实际开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /** 所属计划类型 */
  typeId?: string;
  /**
   * 待派发数量
   * @format int32
   */
  unassignedNum?: number;
}

/**
 * ProductionCraftProcessFileVo对象
 * 产品工艺工序文件
 */
export interface ProductionCraftProcessFileVo {
  /**
   * 文件mini类型
   * @minLength 0
   * @maxLength 100
   */
  contentType?: string;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 100
   */
  fileName?: string;
  /**
   * 文件大小
   * @minLength 0
   * @maxLength 100
   */
  fileSize?: string;
  /** 状态 */
  id?: string;
  /**
   * 文件外链
   * @minLength 0
   * @maxLength 100
   */
  link?: string;
  /**
   * 文件key
   * @minLength 0
   * @maxLength 100
   */
  objectKey?: string;
  /**
   * 上传时间
   * @format date-time
   */
  uploadTime?: string;
  /** 产品工艺工序ID */
  versionProcessId?: string;
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
 * R«CraftRoutingDetailVO»
 * 返回信息
 */
export interface RCraftRoutingDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CraftRoutingDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«H5PlanFrontPageVO»
 * 返回信息
 */
export interface RH5PlanFrontPageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: H5PlanFrontPageVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«HmiWorkstationReportRecordVO»»
 * 返回信息
 */
export interface RIPageHmiWorkstationReportRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageHmiWorkstationReportRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«OrderHmiVO对象»»
 * 返回信息
 */
export interface RIPageOrderHmiVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageOrderHmiVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«OrderReportRecordResVO»»
 * 返回信息
 */
export interface RIPageOrderReportRecordResVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageOrderReportRecordResVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«OrderVo对象»»
 * 返回信息
 */
export interface RIPageOrderVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageOrderVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«PlanVo对象»»
 * 返回信息
 */
export interface RIPagePlanVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPagePlanVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WIPAnalysisVO»»
 * 返回信息
 */
export interface RIPageWIPAnalysisVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWIPAnalysisVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«H5OrderProcessVO»»
 * 返回信息
 */
export interface RListH5OrderProcessVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: H5OrderProcessVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«H5PlanCraftProcessVO»»
 * 返回信息
 */
export interface RListH5PlanCraftProcessVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: H5PlanCraftProcessVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«HmiOrderProcessVO»»
 * 返回信息
 */
export interface RListHmiOrderProcessVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiOrderProcessVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«JuxtapositionReportDTO»»
 * 返回信息
 */
export interface RListJuxtapositionReportDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: JuxtapositionReportDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«OrderChildRecordVO»»
 * 返回信息
 */
export interface RListOrderChildRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrderChildRecordVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«OrderProcessStartResultVO»»
 * 返回信息
 */
export interface RListOrderProcessStartResultVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrderProcessStartResultVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«OrderProcessVo对象»»
 * 返回信息
 */
export interface RListOrderProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrderProcessVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«OrderVo对象»»
 * 返回信息
 */
export interface RListOrderVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrderVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«PlanBomVO»»
 * 返回信息
 */
export interface RListPlanBomVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: PlanBomVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«PlanCraftVO»»
 * 返回信息
 */
export interface RListPlanCraftVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: PlanCraftVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«PlanProcessVo对象»»
 * 返回信息
 */
export interface RListPlanProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: PlanProcessVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProcessingEquipmentVO»»
 * 返回信息
 */
export interface RListProcessingEquipmentVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProcessingEquipmentVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationInGroupVO»»
 * 返回信息
 */
export interface RListWorkstationInGroupVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationInGroupVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationSingleVO»»
 * 返回信息
 */
export interface RListWorkstationSingleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationSingleVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«计划页上方状态数量总览»»
 * 返回信息
 */
export interface RList {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: _[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OrderHmiVO对象»
 * 返回信息
 */
export interface ROrderHmiVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrderHmiVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OrderProcessGeneralDetailVO»
 * 返回信息
 */
export interface ROrderProcessGeneralDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrderProcessGeneralDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OrderProcessParallelDetailVO»
 * 返回信息
 */
export interface ROrderProcessParallelDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrderProcessParallelDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OrderProcessRelationVO»
 * 返回信息
 */
export interface ROrderProcessRelationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrderProcessRelationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OrderVo对象»
 * 返回信息
 */
export interface ROrderVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrderVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«PlanProcessVo对象»
 * 返回信息
 */
export interface RPlanProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: PlanProcessVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«PlanVo对象»
 * 返回信息
 */
export interface RPlanVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: PlanVo1;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ReportWorkDetailDTO»
 * 返回信息
 */
export interface RReportWorkDetailDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ReportWorkDetailDTO;
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
 * R«int»
 * 返回信息
 */
export interface RInt {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /**
   * 承载数据
   * @format int32
   */
  data?: number;
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

/**
 * R«编辑工位页面工单及工单工序信息VO对象»
 * 返回信息
 */
export interface R_VO_ {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: _VO_;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * ToolAppendixVo对象
 * 附件文件
 */
export interface ToolAppendixVo {
  /**
   * 文件mini类型
   * @minLength 0
   * @maxLength 255
   */
  contentType?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 文件大小 */
  fileLength?: string;
  /**
   * 文件链接
   * @minLength 0
   * @maxLength 255
   */
  fileLink?: string;
  /** 文件名称 */
  fileName?: string;
  /** 主键 */
  id?: string;
  /**
   * 文件key
   * @minLength 0
   * @maxLength 255
   */
  objectKey?: string;
  /** 父id */
  parentId?: string;
}

/**
 * 编辑工位页面工单及工单工序信息VO对象
 * 编辑工位页面工单及工单工序信息
 */
export interface _VO_ {
  /**
   * 派发数量
   * @format int32
   */
  assignNum?: number;
  /** 工单号 */
  orderCode?: string;
  /** 工单工序信息 */
  orderProcessList?: OrderProcess[];
}

/**
 * 计划页上方状态数量总览
 * 计划页上方状态数量总览
 */
export interface _ {
  /**
   * 数量
   * @format int32
   */
  count?: number;
  /**
   * 计划状态(1:待派发 2.待加工 3.加工中 4.暂停 5.关闭 6.完工)
   * @format int32
   */
  planStatus?: number;
  /** 计划状态中文 */
  planStatusStr?: string;
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
  bladeCoproduction = {
    /**
     * @description 传入parallelProcessDTO
     *
     * @tags blade_order_process管理
     * @name OrderProcessCheckParallelQualityNum
     * @summary 并行序主序可报工合格数量范围
     * @request POST:/blade-coproduction/order-process/check-parallel-quality
     * @secure
     */
    orderProcessCheckParallelQualityNum: (
      parallelProcessDTO: ReportParallelProcessDTO[],
      query?: {
        /** 是否编辑报工记录 */
        isEdit?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<RInt, void>({
        path: `/blade-coproduction/order-process/check-parallel-quality`,
        method: 'POST',
        query: query,
        body: parallelProcessDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入parallelProcessDTO
     *
     * @tags blade_order_process管理
     * @name OrderProcessGetChildStayNum
     * @summary 获取并行序的待报工数量
     * @request POST:/blade-coproduction/order-process/child-stay-num
     * @secure
     */
    orderProcessGetChildStayNum: (
      query: {
        /** orderProcessId */
        orderProcessId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RInt, void>({
        path: `/blade-coproduction/order-process/child-stay-num`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_process管理
     * @name OrderProcessDetail
     * @summary 工单工序详情
     * @request GET:/blade-coproduction/order-process/detail
     * @secure
     */
    orderProcessDetail: (
      query?: {
        /** orderId */
        orderId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListOrderProcessVo, void>({
        path: `/blade-coproduction/order-process/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 无需传参
     *
     * @tags blade_order_process管理
     * @name OrderProcessGetH5FrontPage
     * @summary h5 计划工单首页
     * @request GET:/blade-coproduction/order-process/get-h5-front-page
     * @secure
     */
    orderProcessGetH5FrontPage: (params: RequestParams = {}) =>
      this.request<RH5PlanFrontPageVO, void>({
        path: `/blade-coproduction/order-process/get-h5-front-page`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入orderId 工单id
     *
     * @tags blade_order_process管理
     * @name OrderProcessGetH5OrderProcess
     * @summary h5获取工单工序信息
     * @request GET:/blade-coproduction/order-process/get-h5-order-process
     * @secure
     */
    orderProcessGetH5OrderProcess: (
      query: {
        /** orderId */
        orderId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListH5OrderProcessVO, void>({
        path: `/blade-coproduction/order-process/get-h5-order-process`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入processId 工序id
     *
     * @tags blade_order_process管理
     * @name OrderProcessGetProcessingEquipment
     * @summary 获取工序加工中的工位
     * @request GET:/blade-coproduction/order-process/get-processing-equipment
     * @secure
     */
    orderProcessGetProcessingEquipment: (
      query: {
        /** processId */
        processId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListProcessingEquipmentVO, void>({
        path: `/blade-coproduction/order-process/get-processing-equipment`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_process管理
     * @name OrderProcessGetRelation
     * @summary pc获取夹具信息
     * @request POST:/blade-coproduction/order-process/get-relation
     * @secure
     */
    orderProcessGetRelation: (orderProcessRelationQueryVO: OrderProcessRelationQueryVO, params: RequestParams = {}) =>
      this.request<ROrderProcessRelationVO, void>({
        path: `/blade-coproduction/order-process/get-relation`,
        method: 'POST',
        body: orderProcessRelationQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_process管理
     * @name OrderProcessGetRelationTool
     * @summary pc获取刀具信息
     * @request POST:/blade-coproduction/order-process/get-relation-tool
     * @secure
     */
    orderProcessGetRelationTool: (orderProcessRelationQueryVO: OrderProcessRelationQueryVO, params: RequestParams = {}) =>
      this.request<ROrderProcessRelationVO, void>({
        path: `/blade-coproduction/order-process/get-relation-tool`,
        method: 'POST',
        body: orderProcessRelationQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_process管理
     * @name OrderProcessH5GetRelationFixture
     * @summary h5获取夹具信息
     * @request POST:/blade-coproduction/order-process/h5-get-relation
     * @secure
     */
    orderProcessH5GetRelationFixture: (orderProcessRelationQueryVO: OrderProcessRelationQueryVO, params: RequestParams = {}) =>
      this.request<ROrderProcessRelationVO, void>({
        path: `/blade-coproduction/order-process/h5-get-relation`,
        method: 'POST',
        body: orderProcessRelationQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_process管理
     * @name OrderProcessH5GetRelation
     * @summary h5获取刀具信息
     * @request POST:/blade-coproduction/order-process/h5-get-relation-tool
     * @secure
     */
    orderProcessH5GetRelation: (orderProcessRelationQueryVO: OrderProcessRelationQueryVO, params: RequestParams = {}) =>
      this.request<ROrderProcessRelationVO, void>({
        path: `/blade-coproduction/order-process/h5-get-relation-tool`,
        method: 'POST',
        body: orderProcessRelationQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_process管理
     * @name OrderProcessH5Detail
     * @summary h5工单工序详情
     * @request GET:/blade-coproduction/order-process/h5_detail
     * @secure
     */
    orderProcessH5Detail: (
      query?: {
        /** orderId */
        orderId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListOrderProcessVo, void>({
        path: `/blade-coproduction/order-process/h5_detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入hmiOrderConditionVO
     *
     * @tags blade_order_process管理
     * @name OrderProcessGetHmiOrderProcessList
     * @summary hmi获取工单工序列表
     * @request POST:/blade-coproduction/order-process/hmi-process-list
     * @secure
     */
    orderProcessGetHmiOrderProcessList: (hmiOrderConditionVO: HmiOrderConditionVO, params: RequestParams = {}) =>
      this.request<RListHmiOrderProcessVO, void>({
        path: `/blade-coproduction/order-process/hmi-process-list`,
        method: 'POST',
        body: hmiOrderConditionVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入parallelProcessDTO
     *
     * @tags blade_order_process管理
     * @name OrderProcessReportParallel
     * @summary 报工(并行序)
     * @request POST:/blade-coproduction/order-process/report-parallel
     * @secure
     */
    orderProcessReportParallel: (reportWorkDTO: ReportWorkDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-coproduction/order-process/report-parallel`,
        method: 'POST',
        body: reportWorkDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入orderProcessVO
     *
     * @tags blade_order_process管理
     * @name OrderProcessReportWork
     * @summary 报工(非并行序)
     * @request POST:/blade-coproduction/order-process/report-work
     * @secure
     */
    orderProcessReportWork: (reportWorkDTO: ReportWorkDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-coproduction/order-process/report-work`,
        method: 'POST',
        body: reportWorkDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_process管理
     * @name OrderProcessStartDetailGeneral
     * @summary 开工页面详情(非并行序)
     * @request GET:/blade-coproduction/order-process/start-detail-general
     * @secure
     */
    orderProcessStartDetailGeneral: (
      query?: {
        /** 工单工序ID */
        orderProcessId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ROrderProcessGeneralDetailVO, void>({
        path: `/blade-coproduction/order-process/start-detail-general`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_process管理
     * @name OrderProcessStartDetailParallel
     * @summary 开工页面详情(并行序)
     * @request GET:/blade-coproduction/order-process/start-detail-parallel
     * @secure
     */
    orderProcessStartDetailParallel: (
      query?: {
        /** 工单工序ID */
        orderProcessId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ROrderProcessParallelDetailVO, void>({
        path: `/blade-coproduction/order-process/start-detail-parallel`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入orderProcessVO
     *
     * @tags blade_order_process管理
     * @name OrderProcessStartGeneral
     * @summary 开工(非并行序)
     * @request POST:/blade-coproduction/order-process/start-general
     * @secure
     */
    orderProcessStartGeneral: (orderProcessStartGeneralVO: OrderProcessStartGeneralVO, params: RequestParams = {}) =>
      this.request<RListOrderProcessStartResultVO, void>({
        path: `/blade-coproduction/order-process/start-general`,
        method: 'POST',
        body: orderProcessStartGeneralVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入orderProcessVO
     *
     * @tags blade_order_process管理
     * @name OrderProcessStartParallel
     * @summary 开工(并行序)
     * @request POST:/blade-coproduction/order-process/start-parallel
     * @secure
     */
    orderProcessStartParallel: (orderProcessStartParallelVO: OrderProcessStartParallelVO, params: RequestParams = {}) =>
      this.request<RListOrderProcessStartResultVO, void>({
        path: `/blade-coproduction/order-process/start-parallel`,
        method: 'POST',
        body: orderProcessStartParallelVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_process管理
     * @name OrderProcessTreeWorkstation
     * @summary 获取指派的工位组以及工位
     * @request GET:/blade-coproduction/order-process/tree-workstation
     * @secure
     */
    orderProcessTreeWorkstation: (
      query?: {
        /** planId */
        planId?: string;
        /** processCode */
        processCode?: string;
        /**
         * sort
         * @format int32
         */
        sort?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationInGroupVO, void>({
        path: `/blade-coproduction/order-process/tree-workstation`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入reportWorkDTO
     *
     * @tags blade_order_report_record管理
     * @name OrderReportRecordEditOrderRecord
     * @summary 编辑非行序报工记录
     * @request POST:/blade-coproduction/order-report-record/edit-common-record
     * @secure
     */
    orderReportRecordEditOrderRecord: (reportWorkDTO: ReportWorkDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-coproduction/order-report-record/edit-common-record`,
        method: 'POST',
        body: reportWorkDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入reportWorkDTO
     *
     * @tags blade_order_report_record管理
     * @name OrderReportRecordEditOrderParallelRecord
     * @summary 编辑并行序报工记录
     * @request POST:/blade-coproduction/order-report-record/edit-parallel-record
     * @secure
     */
    orderReportRecordEditOrderParallelRecord: (reportWorkDTO: ReportWorkDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-coproduction/order-report-record/edit-parallel-record`,
        method: 'POST',
        body: reportWorkDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description hmi登入工位开报工记录
     *
     * @tags blade_order_report_record管理
     * @name OrderReportRecordGetPageConfirmedRepairRecord
     * @summary hmi登入工位报工记录
     * @request GET:/blade-coproduction/order-report-record/hmi-order-report-records
     * @secure
     */
    orderReportRecordGetPageConfirmedRepairRecord: (
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
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageHmiWorkstationReportRecordVO, void>({
        path: `/blade-coproduction/order-report-record/hmi-order-report-records`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_report_record管理
     * @name OrderReportRecordPageQuery
     * @summary 分页查询工单报工记录
     * @request POST:/blade-coproduction/order-report-record/page-query
     * @secure
     */
    orderReportRecordPageQuery: (vo: OrderReportRecordSearchVO, params: RequestParams = {}) =>
      this.request<RIPageOrderReportRecordResVO, void>({
        path: `/blade-coproduction/order-report-record/page-query`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_report_record管理
     * @name OrderReportRecordQueryChildRecord
     * @summary 查询主序下子序相关信息
     * @request GET:/blade-coproduction/order-report-record/query-child-record
     * @secure
     */
    orderReportRecordQueryChildRecord: (
      query: {
        /** mainRecordId */
        mainRecordId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListOrderChildRecordVO, void>({
        path: `/blade-coproduction/order-report-record/query-child-record`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_report_record管理
     * @name OrderReportRecordRecordExport
     * @summary 导出报工记录
     * @request POST:/blade-coproduction/order-report-record/record-export
     * @secure
     */
    orderReportRecordRecordExport: (vo: OpRecordExportVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-coproduction/order-report-record/record-export`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入报工记录id
     *
     * @tags blade_order_report_record管理
     * @name OrderReportRecordRemoveReportRecord
     * @summary 删除报工记录id
     * @request GET:/blade-coproduction/order-report-record/remove-report-record
     * @secure
     */
    orderReportRecordRemoveReportRecord: (
      query: {
        /** recordId */
        recordId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-coproduction/order-report-record/remove-report-record`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_order_report_record管理
     * @name OrderReportRecordReportRecordsDetail
     * @summary 编辑报工记录展开详情
     * @request GET:/blade-coproduction/order-report-record/report-record-detail
     * @secure
     */
    orderReportRecordReportRecordsDetail: (
      query: {
        /** recordId */
        recordId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListJuxtapositionReportDTO, void>({
        path: `/blade-coproduction/order-report-record/report-record-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入processId：工单工序id
     *
     * @tags blade_order_report_record管理
     * @name OrderReportRecordGetReportWorkDetail
     * @summary 工单工序报工详情
     * @request GET:/blade-coproduction/order-report-record/report-work-detail
     * @secure
     */
    orderReportRecordGetReportWorkDetail: (
      query: {
        /** processId */
        processId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RReportWorkDetailDTO, void>({
        path: `/blade-coproduction/order-report-record/report-work-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 获得可开工的工位
     *
     * @tags blade_order_workstation管理
     * @name OrderWorkstationGetWorkstationCanStart
     * @summary 获得可开工的工位)
     * @request GET:/blade-coproduction/order-workstation/get-workstation-can-start
     * @secure
     */
    orderWorkstationGetWorkstationCanStart: (
      query?: {
        /** 工单工序ID */
        orderProcessId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationSingleVO, void>({
        path: `/blade-coproduction/order-workstation/get-workstation-can-start`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 计划工单管理
     * @name OrderAssign
     * @summary 工单派发
     * @request POST:/blade-coproduction/order/assign
     * @secure
     */
    orderAssign: (orderAssignVO: OrderVo2, params: RequestParams = {}) =>
      this.request<ROrderVo, void>({
        path: `/blade-coproduction/order/assign`,
        method: 'POST',
        body: orderAssignVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 计划工单管理
     * @name OrderExport
     * @summary 工单工序导出
     * @request POST:/blade-coproduction/order/export
     * @secure
     */
    orderExport: (
      query?: {
        /** orderId */
        orderId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBladeFile, void>({
        path: `/blade-coproduction/order/export`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 计划工单管理
     * @name OrderExportList
     * @summary 工单列表导出
     * @request POST:/blade-coproduction/order/export-list
     * @secure
     */
    orderExportList: (orderQueryVO: OrderVo1, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-coproduction/order/export-list`,
        method: 'POST',
        body: orderQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description H5工单列表
     *
     * @tags 计划工单管理
     * @name OrderGetPageH5OrderList
     * @summary h5工单列表
     * @request POST:/blade-coproduction/order/h5-order-list
     * @secure
     */
    orderGetPageH5OrderList: (
      orderQueryVO: OrderVo1,
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
      this.request<RIPageOrderVo, void>({
        path: `/blade-coproduction/order/h5-order-list`,
        method: 'POST',
        query: query,
        body: orderQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 工单列表，不包含加工中工单放第一个
     *
     * @tags 计划工单管理
     * @name OrderGetPageHimOrderList
     * @summary hmi工单列表
     * @request POST:/blade-coproduction/order/hmi-order-list
     * @secure
     */
    orderGetPageHimOrderList: (
      orderHmiSearchVO: OrderHmiSearchVO,
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
      this.request<RIPageOrderHmiVO, void>({
        path: `/blade-coproduction/order/hmi-order-list`,
        method: 'POST',
        query: query,
        body: orderHmiSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 加工中工单放第一个
     *
     * @tags 计划工单管理
     * @name OrderGetPageHmiProcessingOrder
     * @summary hmi加工中工单列表
     * @request GET:/blade-coproduction/order/hmi-processing-order
     * @secure
     */
    orderGetPageHmiProcessingOrder: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ROrderHmiVO, void>({
        path: `/blade-coproduction/order/hmi-processing-order`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 计划工单管理
     * @name OrderList
     * @summary 工单主页列表
     * @request POST:/blade-coproduction/order/list
     * @secure
     */
    orderList: (orderQueryVO: OrderVo1, params: RequestParams = {}) =>
      this.request<RListOrderVo, void>({
        path: `/blade-coproduction/order/list`,
        method: 'POST',
        body: orderQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 计划工单管理
     * @name OrderGetOrderAndProcessList
     * @summary 获取编辑工位页面工单及工单工序信息
     * @request GET:/blade-coproduction/order/order-process-list
     * @secure
     */
    orderGetOrderAndProcessList: (
      query?: {
        /** orderId */
        orderId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R_VO_, void>({
        path: `/blade-coproduction/order/order-process-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 计划工单管理
     * @name OrderPlanOrderList
     * @summary 计划工单列表
     * @request POST:/blade-coproduction/order/plan-order-list
     * @secure
     */
    orderPlanOrderList: (orderQueryVO: OrderVo1, params: RequestParams = {}) =>
      this.request<RListOrderVo, void>({
        path: `/blade-coproduction/order/plan-order-list`,
        method: 'POST',
        body: orderQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 计划工单管理
     * @name OrderRemove
     * @summary 计划工单删除
     * @request DELETE:/blade-coproduction/order/remove
     * @secure
     */
    orderRemove: (
      ids: string[],
      query?: {
        /** planId */
        planId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-coproduction/order/remove`,
        method: 'DELETE',
        query: query,
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入planProcess
     *
     * @tags 计划工序管理
     * @name PlanProcessDetail
     * @summary 计划工序详情
     * @request GET:/blade-coproduction/plan-process/get/{id}
     * @secure
     */
    planProcessDetail: (id: string, params: RequestParams = {}) =>
      this.request<RPlanProcessVo, void>({
        path: `/blade-coproduction/plan-process/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 计划工序管理
     * @name PlanProcessListByPlanId
     * @summary 计划工序列表
     * @request GET:/blade-coproduction/plan-process/list-by-plan-id
     * @secure
     */
    planProcessListByPlanId: (
      query?: {
        /** planId */
        planId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListPlanProcessVo, void>({
        path: `/blade-coproduction/plan-process/list-by-plan-id`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入json
     *
     * @tags blade_plan管理
     * @name PlanAppend
     * @summary 追加
     * @request POST:/blade-coproduction/plan/append
     * @secure
     */
    planAppend: (planAppendVO: PlanAppendVO, params: RequestParams = {}) =>
      this.request<RObject, void>({
        path: `/blade-coproduction/plan/append`,
        method: 'POST',
        body: planAppendVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入planId
     *
     * @tags blade_plan管理
     * @name PlanClose
     * @summary 计划关闭
     * @request POST:/blade-coproduction/plan/close
     * @secure
     */
    planClose: (planId: string, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-coproduction/plan/close`,
        method: 'POST',
        body: planId,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入planId
     *
     * @tags blade_plan管理
     * @name PlanEditWorkstation
     * @summary 编辑工位
     * @request POST:/blade-coproduction/plan/editWorkstation
     * @secure
     */
    planEditWorkstation: (orderEditWorkstationVO: PlanVo, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-coproduction/plan/editWorkstation`,
        method: 'POST',
        body: orderEditWorkstationVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入planId
     *
     * @tags blade_plan管理
     * @name PlanPlanExport
     * @summary 计划导出
     * @request POST:/blade-coproduction/plan/export
     * @secure
     */
    planPlanExport: (planQueryVO: PlanQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-coproduction/plan/export`,
        method: 'POST',
        body: planQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入planId
     *
     * @tags blade_plan管理
     * @name PlanFinish
     * @summary 计划完成
     * @request POST:/blade-coproduction/plan/finish
     * @secure
     */
    planFinish: (planId: string, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-coproduction/plan/finish`,
        method: 'POST',
        body: planId,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_plan管理
     * @name PlanGetCraftPlan
     * @summary 根据计划id，获取生产工艺信息
     * @request GET:/blade-coproduction/plan/get-plan-craft/{id}
     * @secure
     */
    planGetCraftPlan: (id: string, params: RequestParams = {}) =>
      this.request<RCraftRoutingDetailVO, void>({
        path: `/blade-coproduction/plan/get-plan-craft/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入plan
     *
     * @tags blade_plan管理
     * @name PlanDetail
     * @summary blade_plan详情
     * @request GET:/blade-coproduction/plan/get/{id}
     * @secure
     */
    planDetail: (id: string, params: RequestParams = {}) =>
      this.request<RPlanVo, void>({
        path: `/blade-coproduction/plan/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入plan
     *
     * @tags blade_plan管理
     * @name PlanDetailH5Plan
     * @summary H5 blade_plan详情
     * @request GET:/blade-coproduction/plan/h5-get/{id}
     * @secure
     */
    planDetailH5Plan: (id: string, params: RequestParams = {}) =>
      this.request<RPlanVo, void>({
        path: `/blade-coproduction/plan/h5-get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_plan管理
     * @name PlanH5PlanProcess
     * @summary h5根据计划id，获取工艺路线以及附件信息
     * @request GET:/blade-coproduction/plan/h5-plan-craft/{id}
     * @secure
     */
    planH5PlanProcess: (id: string, params: RequestParams = {}) =>
      this.request<RListH5PlanCraftProcessVO, void>({
        path: `/blade-coproduction/plan/h5-plan-craft/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入templateId
     *
     * @tags blade_plan管理
     * @name PlanPlanImport
     * @summary 计划导入
     * @request POST:/blade-coproduction/plan/import
     * @secure
     */
    planPlanImport: (
      query: {
        /** templateId */
        templateId: string;
      },
      data: {
        /** file */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-coproduction/plan/import`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_plan管理
     * @name PlanListBom
     * @summary 根据生产工艺版本id,获取bom版本信息
     * @request GET:/blade-coproduction/plan/list-bom/{id}
     * @secure
     */
    planListBom: (id: string, params: RequestParams = {}) =>
      this.request<RListPlanBomVO, void>({
        path: `/blade-coproduction/plan/list-bom/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_plan管理
     * @name PlanListCraft
     * @summary 获取所有生产工艺的信息及其版本信息、绑定产品信息
     * @request GET:/blade-coproduction/plan/list-craft
     * @secure
     */
    planListCraft: (params: RequestParams = {}) =>
      this.request<RListPlanCraftVO, void>({
        path: `/blade-coproduction/plan/list-craft`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入planVO
     *
     * @tags blade_plan管理
     * @name PlanUpdate
     * @summary blade_plan修改
     * @request PUT:/blade-coproduction/plan/modify
     * @secure
     */
    planUpdate: (planModifyVO: PlanModifyVO, params: RequestParams = {}) =>
      this.request<RPlanVo, void>({
        path: `/blade-coproduction/plan/modify`,
        method: 'PUT',
        body: planModifyVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags blade_plan管理
     * @name PlanPage
     * @summary blade_plan分页
     * @request POST:/blade-coproduction/plan/page
     * @secure
     */
    planPage: (
      planQueryVO: PlanQueryVO,
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
      this.request<RIPagePlanVo, void>({
        path: `/blade-coproduction/plan/page`,
        method: 'POST',
        query: query,
        body: planQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入json
     *
     * @tags blade_plan管理
     * @name PlanPause
     * @summary 暂停
     * @request POST:/blade-coproduction/plan/pause
     * @secure
     */
    planPause: (
      query: {
        /** planId */
        planId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RObject, void>({
        path: `/blade-coproduction/plan/pause`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入planId
     *
     * @tags blade_plan管理
     * @name PlanReboot
     * @summary 重启
     * @request POST:/blade-coproduction/plan/reboot
     * @secure
     */
    planReboot: (
      query: {
        /** planId */
        planId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RObject, void>({
        path: `/blade-coproduction/plan/reboot`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags blade_plan管理
     * @name PlanRemove
     * @summary blade_plan删除
     * @request DELETE:/blade-coproduction/plan/remove
     * @secure
     */
    planRemove: (
      query: {
        /** 主键 */
        planId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-coproduction/plan/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入planVO
     *
     * @tags blade_plan管理
     * @name PlanInsert
     * @summary blade_plan新增
     * @request POST:/blade-coproduction/plan/save
     * @secure
     */
    planInsert: (planSubmitVO: PlanSubmitVO, params: RequestParams = {}) =>
      this.request<RPlanVo, void>({
        path: `/blade-coproduction/plan/save`,
        method: 'POST',
        body: planSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入templateId
     *
     * @tags blade_plan管理
     * @name PlanStatusCount
     * @summary 计划页上方状态数量总览
     * @request GET:/blade-coproduction/plan/statusCount
     * @secure
     */
    planStatusCount: (
      query: {
        /** templateId */
        templateId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RList, void>({
        path: `/blade-coproduction/plan/statusCount`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_plan管理
     * @name PlanTemplate
     * @summary 下载模板
     * @request GET:/blade-coproduction/plan/template
     * @secure
     */
    planTemplate: (
      query?: {
        /** templateId */
        templateId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBladeFile, void>({
        path: `/blade-coproduction/plan/template`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 生产计划在制品统计
     *
     * @tags 工单统计
     * @name CoProductionStatisticsGetPagePlanWip
     * @summary 生产计划在制品统计
     * @request POST:/blade-coproduction/statistics/plan-wip/page
     * @secure
     */
    coProductionStatisticsGetPagePlanWip: (
      wipSearchVO: WIPSearchVO,
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
      this.request<RIPageWIPAnalysisVO, void>({
        path: `/blade-coproduction/statistics/plan-wip/page`,
        method: 'POST',
        query: query,
        body: wipSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
