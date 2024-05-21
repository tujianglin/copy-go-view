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

/** ApplyCodeVO */
export interface ApplyCodeVO {
  /** 申请单号 */
  applyCode?: string;
  /** 申请单id */
  id?: string;
}

/** ApplyRecordMaterialVO */
export interface ApplyRecordMaterialVO {
  materialVoList?: MaterialVO[];
  repairApplyFileAddDTOList?: RepairApplyFileAddDTO[];
  repairRecordFileAddDTOList?: RepairRecordFileAddDTO[];
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

/** CheckRecord */
export interface CheckRecord {
  checkCode?: string;
  /** 点检项目编码 */
  checkProjectCode?: string;
  checkProjectId?: string;
  /** 点检项目名称 */
  checkProjectName?: string;
  /** @format int32 */
  checkResult?: number;
  /** @format date-time */
  checkTime?: string;
  checkUserId?: string;
  /** 检验人员名称 */
  checkUserName?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 设备编码 */
  deviceCode?: string;
  deviceId?: string;
  /** 设备名称 */
  deviceName?: string;
  deviceTypeId?: string;
  /** 设备类型名称 */
  deviceTypeName?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 规格型号 */
  machineModel?: string;
  remark?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/** CheckRecordDetailVO */
export interface CheckRecordDetailVO {
  /** 附件 */
  files?: CheckRecordFileVO[];
  /** 点检项 */
  items?: CheckRecordItemVO[];
  /** 图片 */
  pictures?: CheckRecordFileVO[];
}

/** CheckRecordFileDTO */
export interface CheckRecordFileDTO {
  /** 文件类型 */
  contentType?: string;
  /** 文件名称 */
  fileName?: string;
  /** 文件大小 */
  fileSize?: string;
  /**
   * 附件类型（1:图片 2:附件）
   * @format int32
   */
  fileType?: number;
  /** 文件link */
  link?: string;
  /** 文件key */
  objectKey?: string;
  /** 上传时间 */
  uploadTime?: string;
}

/** CheckRecordFileVO */
export interface CheckRecordFileVO {
  /** 文件类型 */
  contentType?: string;
  /** 文件名称 */
  fileName?: string;
  /** 文件大小 */
  fileSize?: string;
  /**
   * 附件类型（1:图片 2:附件）
   * @format int32
   */
  fileType?: number;
  /** 主键 */
  id?: string;
  /** 文件link */
  link?: string;
  /** 文件key */
  objectKey?: string;
  /** 上传时间 */
  uploadTime?: string;
}

/** CheckRecordItemDTO */
export interface CheckRecordItemDTO {
  /** 检验数值 */
  checkValue?: string;
  /** 点检项id */
  itemId?: string;
  /** 点检项 */
  name?: string;
  /** 点检要求 */
  requirement?: string;
  /** 标准数值 */
  standardValue?: string;
  /** 数值类型 */
  valueType?: string;
}

/** CheckRecordItemVO */
export interface CheckRecordItemVO {
  /** 检验数值 */
  checkValue?: string;
  /** 主键 */
  id?: string;
  /** 点检项id */
  itemId?: string;
  /** 点检项 */
  name?: string;
  /** 点检要求 */
  requirement?: string;
  /** 标准数值 */
  standardValue?: string;
  /** 数值类型 */
  valueType?: string;
}

/**
 * CheckRecordQueryVO
 * 点检记录查询视图
 */
export interface CheckRecordQueryVO {
  /** 设备类型ID */
  deviceTypeId?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  keyWords?: string;
}

/** CheckRecordSearchVO */
export interface CheckRecordSearchVO {
  /** 检验项目 */
  checkProjectName?: string;
  /** 机器编码 */
  machineCode?: string;
  /** 机器名称 */
  machineName?: string;
}

/** CheckRecordSendUserDto */
export interface CheckRecordSendUserDto {
  empIds?: string[];
  orgIds?: string[];
}

/** CheckRecordSubmitVO */
export interface CheckRecordSubmitVO {
  /** 点检记录code */
  checkCode?: string;
  /** 点检项目编码 */
  checkProjectCode?: string;
  /** 点检项目id */
  checkProjectId?: string;
  /** 点检项目名称 */
  checkProjectName?: string;
  /**
   * 点检结果(0: 不正常；1: 正常)
   * @format int32
   */
  checkResult?: number;
  /**
   * 点检时间
   * @format date-time
   */
  checkTime?: string;
  /** 检验人员id */
  checkUserId?: string;
  /** 检验人员名称 */
  checkUserName?: string;
  /** 设备编码 */
  deviceCode?: string;
  /** 设备id */
  deviceId?: string;
  /** 设备名称 */
  deviceName?: string;
  /** 设备类型 */
  deviceTypeId?: string;
  /** 设备类型名称 */
  deviceTypeName?: string;
  /** 点检记录附件 */
  fileList?: CheckRecordFileDTO[];
  /** 点检记录点检项 */
  itemList?: CheckRecordItemDTO[];
  /** 规格型号 */
  machineModel?: string;
  /** 业务消息发送 */
  notifyBusinessSend?: CheckRecordSendUserDto;
  /** 点检记录图片 */
  pictureList?: CheckRecordFileDTO[];
  /** 点检描述 */
  remark?: string;
}

/** CheckRecordTodayVO */
export interface CheckRecordTodayVO {
  /** 点检单号 */
  checkCode?: string;
  /** 检验项目 */
  checkProjectName?: string;
  /**
   * 点检时间
   * @format date-time
   */
  checkTime?: string;
  /** 点检记录id */
  id?: string;
  /** 机器编码 */
  machineCode?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器类型 */
  typeName?: string;
}

/** CheckRecordUpdateVO */
export interface CheckRecordUpdateVO {
  /** 点检项目编号 */
  checkProjectCode?: string;
  /** 点检项目id */
  checkProjectId?: string;
  /** 点检项目名称 */
  checkProjectName?: string;
  /**
   * 点检结果(0: 不正常；1: 正常)
   * @format int32
   */
  checkResult?: number;
  id?: string;
  /** 点检记录点检项 */
  itemList?: CheckRecordItemDTO[];
  /** 点检描述 */
  remark?: string;
}

/** CheckRecordVO */
export interface CheckRecordVO {
  /** 点检记录code */
  checkCode?: string;
  /** 点检项目编码 */
  checkProjectCode?: string;
  /** 点检项目id */
  checkProjectId?: string;
  /** 点检项目名称 */
  checkProjectName?: string;
  /**
   * 点检结果(0: 不正常；1: 正常)
   * @format int32
   */
  checkResult?: number;
  /**
   * 点检时间
   * @format date-time
   */
  checkTime?: string;
  /** 检验人员id */
  checkUserId?: string;
  /** 检验人员名称 */
  checkUserName?: string;
  /** 设备编码 */
  deviceCode?: string;
  /** 设备id */
  deviceId?: string;
  /** 设备名称 */
  deviceName?: string;
  /** 设备类型 */
  deviceTypeId?: string;
  /** 设备类型名称 */
  deviceTypeName?: string;
  /** 点检记录id */
  id?: string;
  /** 规格型号 */
  machineModel?: string;
  /** 点检描述 */
  remark?: string;
}

/** IdsVO */
export interface IdsVO {
  ids?: string[];
}

/**
 * MaintainAnalysisQueryVO
 * 保养/维修-类型次数/时间占比视图模型
 */
export interface MaintainAnalysisQueryVO {
  /**
   * 业务类型：1-保养，2-维修
   * @format int32
   */
  businessType: number;
  /**
   * 结束时间
   * @format date-time
   */
  endDate?: string;
  /** 节点id */
  id: string;
  /**
   * 开始时间
   * @format date-time
   */
  startDate?: string;
  /**
   * 节点类型：1-机器，2-机器组
   * @format int32
   */
  type: number;
}

/**
 * MaintainOrderCountVO
 * 保养/维修单数量视图模型
 */
export interface MaintainOrderCountVO {
  /** 待确认 */
  beConfirm?: string;
  /** 待执行 */
  beExecute?: string;
  /** 已确认 */
  confirmed?: string;
  /** 执行中 */
  excuting?: string;
  /** 计划中 */
  planning?: string;
  /** 总数 */
  total?: string;
}

/**
 * MaintainPlan
 * 保养计划
 */
export interface MaintainPlan {
  code?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  deviceCode?: string;
  deviceId?: string;
  deviceName?: string;
  deviceTypeId?: string;
  deviceTypeName?: string;
  /** 主键id */
  id?: string;
  /** @format int32 */
  intervalTime?: number;
  /** @format int32 */
  isAuto?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  machineModel?: string;
  /** @format date-time */
  maintainDate?: string;
  /** @format int32 */
  maintainNature?: number;
  maintainUserId?: string;
  maintainUserName?: string;
  /** @format int32 */
  planStatus?: number;
  /** @format date-time */
  preMaintainTime?: string;
  /** @format int32 */
  preWarningDays?: number;
  projectCode?: string;
  projectId?: string;
  projectName?: string;
  remark?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/** MaintainPlanAddVO */
export interface MaintainPlanAddVO {
  /** 编码 */
  code?: string;
  /** 机器编码 */
  deviceCode?: string;
  /** 机器Id */
  deviceId?: string;
  /** 机器名称 */
  deviceName?: string;
  /** 机器类型Id */
  deviceTypeId?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  /** 机器规格 */
  machineModel?: string;
  /** 保养日期 */
  maintainDate?: string;
  /** 保养项目保养项 */
  maintainItemList?: MaintainPlanItemAddVO[];
  /**
   * 保养性质
   * @format int32
   */
  maintainNature?: number;
  /** 保养负责人id */
  maintainUserId?: string;
  /** 保养负责人名称 */
  maintainUserName?: string;
  notifyBusinessSend?: MaintainPlanNotifySendDTO;
  /**
   * 保养预警提示
   * @format int32
   * @min 1
   * @exclusiveMin false
   */
  preWarningDays?: number;
  /** 保养项目编码 */
  projectCode?: string;
  /** 保养项目名称 */
  projectName?: string;
  /** 备注 */
  remark?: string;
}

/** MaintainPlanAutoAddVO */
export interface MaintainPlanAutoAddVO {
  /** 机器Id集合 */
  deviceIdList?: string[];
  /**
   * 保养性质
   * @format int32
   */
  maintainNature?: number;
  /** 保养项目Id集合 */
  maintainProjectIdList?: string[];
  /** 保养负责人id */
  maintainUserId?: string;
  /** 保养负责人名称 */
  maintainUserName?: string;
  /** 业务消息发送 */
  notifyBusinessSend?: MaintainPlanNotifySendDTO;
  /** 备注 */
  remark?: string;
}

/**
 * MaintainPlanExpireVO
 * 保养计划超期
 */
export interface MaintainPlanExpireVO {
  /** 计划任务编码 */
  code?: string;
  /** 机器编码 */
  deviceCode?: string;
  /** 机器Id */
  deviceId?: string;
  /** 机器名称 */
  deviceName?: string;
  /** 机器类型Id */
  deviceTypeId?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  /** 保养计划Id（主键） */
  id?: string;
  /**
   * 周期（天）
   * @format int32
   */
  intervalTime?: number;
  /**
   * 是否自动生成计划
   * @format int32
   */
  isAuto?: number;
  /**
   * 保养日期
   * @format date-time
   */
  maintainDate?: string;
  /**
   * 保养性质
   * @format int32
   */
  maintainNature?: number;
  /** 保养性质 */
  maintainNatureName?: string;
  /**
   * 计划状态
   * @format int32
   */
  planStatus?: number;
  /** 计划状态名称 */
  planStatusName?: string;
  /**
   * 上一次保养时间
   * @format date-time
   */
  preMaintainTime?: string;
  /**
   * 保养预警提示
   * @format int32
   */
  preWarningDays?: number;
  /** 保养项目编码 */
  projectCode?: string;
  /** 保养项目Id */
  projectId?: string;
  /** 保养项目名称 */
  projectName?: string;
  /** 备注 */
  remark?: string;
}

/** MaintainPlanExportVO */
export interface MaintainPlanExportVO {
  deviceId?: string;
  /** 机器类型ID */
  deviceTypeId?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /**
   * 计划类型（0：人工创建；1：自动生成）
   * @format int32
   */
  isAuto?: number;
  /** 关键词 */
  keyWord?: string;
  /** 计划状态 */
  planStatusList?: number[];
}

/** MaintainPlanIdListVO */
export interface MaintainPlanIdListVO {
  /** 记录单号 */
  idList?: string[];
}

/** MaintainPlanItemAddVO */
export interface MaintainPlanItemAddVO {
  /** 保养项Id */
  itemId?: string;
}

/**
 * MaintainPlanItemVO
 * 保养项目保养项
 */
export interface MaintainPlanItemVO {
  /** 保养计划保养项Id（主键） */
  id?: string;
  /** 编号 */
  itemCode?: string;
  /** 保养项Id */
  itemId?: string;
  /** 名称 */
  itemName?: string;
  /** 备注 */
  itemRemark?: string;
  /** 保养要求 */
  itemRequirement?: string;
  /** 保养计划Id */
  planId?: string;
}

/** MaintainPlanNotifySendDTO */
export interface MaintainPlanNotifySendDTO {
  empIds?: string[];
  orgIds?: string[];
}

/** MaintainPlanSearchByPlanStatusVO */
export interface MaintainPlanSearchByPlanStatusVO {
  deviceId?: string;
  /** 机器类型ID */
  deviceTypeId?: string;
  /** 是否高级筛选 */
  filterPlus: boolean;
  /** 关键词 */
  keyWord?: string;
  /** 查询条件字典 */
  param?: object;
  /**
   * 计划状态
   * @format int32
   */
  planStatus?: number;
}

/** MaintainPlanSearchVO */
export interface MaintainPlanSearchVO {
  deviceId?: string;
  /** 机器类型ID */
  deviceTypeId?: string;
  /** 是否高级筛选 */
  filterPlus: boolean;
  /**
   * 计划类型（0：人工创建；1：自动生成）
   * @format int32
   */
  isAuto?: number;
  /** 关键词 */
  keyWord?: string;
  /** 查询条件字典 */
  param?: object;
  /** 计划状态 */
  planStatusList?: number[];
}

/** MaintainPlanUpdateVO */
export interface MaintainPlanUpdateVO {
  /** 计划任务编码 */
  code?: string;
  /** 设备编码 */
  deviceCode?: string;
  /** 设备Id */
  deviceId?: string;
  /** 设备名称 */
  deviceName?: string;
  /** 机器类型Id */
  deviceTypeId?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  /** 计划Id */
  id?: string;
  /**
   * 周期（天）
   * @format int32
   */
  intervalTime?: number;
  /**
   * 是否自动生成计划
   * @format int32
   */
  isAuto?: number;
  /** 机器规格 */
  machineModel?: string;
  /** 保养日期 */
  maintainDate?: string;
  /** 保养项目保养项 */
  maintainItemList?: MaintainPlanItemAddVO[];
  /**
   * 保养性质
   * @format int32
   */
  maintainNature?: number;
  /** 保养负责人id */
  maintainUserId?: string;
  /** 保养负责人名称 */
  maintainUserName?: string;
  /**
   * 计划状态
   * @format int32
   */
  planStatus?: number;
  /** 上次保养日期 */
  preMaintainTime?: string;
  /**
   * 保养预警提示
   * @format int32
   */
  preWarningDays?: number;
  /** 保养项目编码 */
  projectCode?: string;
  /** 保养项目Id */
  projectId?: string;
  /** 保养项目名称 */
  projectName?: string;
  /** 备注 */
  remark?: string;
}

/**
 * MaintainPlanVO
 * 保养计划
 */
export interface MaintainPlanVO {
  /** 计划任务编码 */
  code?: string;
  /** 机器编码 */
  deviceCode?: string;
  /** 机器Id */
  deviceId?: string;
  /** 机器名称 */
  deviceName?: string;
  /** 机器类型Id */
  deviceTypeId?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  /** 保养计划Id（主键） */
  id?: string;
  /**
   * 周期（天）
   * @format int32
   */
  intervalTime?: number;
  /**
   * 是否自动生成计划
   * @format int32
   */
  isAuto?: number;
  /** 是否自动生成计划名称 */
  isAutoName?: string;
  /** 机器规格 */
  machineModel?: string;
  /** 保养日期 */
  maintainDate?: string;
  /**
   * 保养性质
   * @format int32
   */
  maintainNature?: number;
  /** 保养性质 */
  maintainNatureName?: string;
  /** 保养计划保养项 */
  maintainPlanItemVoList?: MaintainPlanItemVO[];
  /** 保养负责人id */
  maintainUserId?: string;
  /** 保养负责人名称 */
  maintainUserName?: string;
  /**
   * 计划状态
   * @format int32
   */
  planStatus?: number;
  /** 计划状态名称 */
  planStatusName?: string;
  /** 上一次保养时间 */
  preMaintainTime?: string;
  /**
   * 保养预警提示
   * @format int32
   */
  preWarningDays?: number;
  /** 保养项目编码 */
  projectCode?: string;
  /** 保养项目Id */
  projectId?: string;
  /** 保养项目名称 */
  projectName?: string;
  /** 备注 */
  remark?: string;
}

/**
 * MaintainRecord
 * 保养记录
 */
export interface MaintainRecord {
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** @format int32 */
  delayDays?: number;
  delayReason?: string;
  deviceCode?: string;
  deviceId?: string;
  deviceName?: string;
  deviceTypeId?: string;
  deviceTypeName?: string;
  /** @format date-time */
  endTime?: string;
  /** 主键id */
  id?: string;
  /** @format int32 */
  isDelay?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** @format int32 */
  maintainNature?: number;
  /** @format int32 */
  maintainTime?: number;
  maintainUserId?: string;
  maintainUserName?: string;
  planCode?: string;
  planId?: string;
  projectCode?: string;
  projectId?: string;
  projectName?: string;
  recordCode?: string;
  /** @format int32 */
  recordStatus?: number;
  remark?: string;
  /** @format date-time */
  startTime?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/** MaintainRecordAddVO */
export interface MaintainRecordAddVO {
  /** 规则id */
  codeRuleId?: string;
  /**
   * 延期天数
   * @format int32
   */
  delayDays?: number;
  /** 延期原因 */
  delayReason?: string;
  /** 设备编号 */
  deviceCode?: string;
  /** 设备名称 */
  deviceName?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  /** 结束时间 */
  endTime?: string;
  /**
   * 是否延期（0：未延期；1：已延期）
   * @format int32
   */
  isDelay?: number;
  /**
   * 保养性质(1:厂内;2：委外)
   * @format int32
   */
  maintainNature?: number;
  /** 保养性质(1:厂内;2：委外) */
  maintainNatureName?: string;
  /** 保养记录保养项 */
  maintainRecordItemAddVOList?: MaintainRecordItemAddVO[];
  /** 保养负责人Id */
  maintainUserId?: string;
  /** 保养负责人名称 */
  maintainUserName?: string;
  /** 保养计划编号 */
  planCode?: string;
  /** 保养计划Id */
  planId?: string;
  /** 保养项目名称 */
  projectName?: string;
  /** 记录单号 */
  recordCode?: string;
  /** 备注 */
  remark?: string;
  repairRecordMaterialAddVOList?: RepairRecordMaterialAddVO[];
  /** 开始时间 */
  startTime?: string;
}

/** MaintainRecordExportVO */
export interface MaintainRecordExportVO {
  /** 设备Id */
  deviceId?: string;
  /** 机器类型ID */
  deviceTypeId?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  keyWord?: string;
  /** 保养记录状态 */
  recordStatusList?: number[];
}

/** MaintainRecordIdListVO */
export interface MaintainRecordIdListVO {
  /** 记录单号 */
  idList?: string[];
}

/** MaintainRecordItemAddVO */
export interface MaintainRecordItemAddVO {
  /** 编码 */
  code?: string;
  /**
   * 是否默认（0：否，1：是）
   * @format int32
   */
  isDefault?: number;
  /**
   * 保养判定（0：否，1：是）
   * @format int32
   */
  isExecute?: number;
  /** 保养项Id */
  itemId?: string;
  /** 名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 保养要求 */
  requirement?: string;
}

/**
 * MaintainRecordItemVO
 * 保养项目保养项
 */
export interface MaintainRecordItemVO {
  /** 编码 */
  code?: string;
  /** 保养记录保养项Id（主键） */
  id?: string;
  /**
   * 是否默认（0：否，1：是）
   * @format int32
   */
  isDefault?: number;
  /**
   * 保养判定（0：否，1：是）
   * @format int32
   */
  isExecute?: number;
  /** 保养判定（0：否，1：是） */
  isExecuteName?: string;
  /** 保养项Id */
  itemId?: string;
  /** 名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 保养要求 */
  requirement?: string;
}

/** MaintainRecordSearchVO */
export interface MaintainRecordSearchVO {
  /** 设备ID */
  deviceId?: string;
  /** 机器类型ID */
  deviceTypeId?: string;
  /** 是否高级筛选 */
  filterPlus: boolean;
  /** 关键词 */
  keyWord?: string;
  /** 查询条件字典 */
  param?: object;
  /**
   * 保养记录状态
   * @format int32
   */
  recordStatus?: number;
}

/** MaintainRecordUpdateVO */
export interface MaintainRecordUpdateVO {
  /**
   * 延期天数
   * @format int32
   */
  delayDays?: number;
  /** 延期原因 */
  delayReason?: string;
  /** 结束时间 */
  endTime?: string;
  /** 保养记录Id */
  id?: string;
  /**
   * 是否延期（0：未延期；1：已延期）
   * @format int32
   */
  isDelay?: number;
  /**
   * 保养性质(1:厂内;2：委外)
   * @format int32
   */
  maintainNature?: number;
  /** 保养性质(1:厂内;2：委外) */
  maintainNatureName?: string;
  /** 保养记录保养项 */
  maintainRecordItemAddVOList?: MaintainRecordItemAddVO[];
  /** 保养负责人Id */
  maintainUserId?: string;
  /** 保养负责人名称 */
  maintainUserName?: string;
  /** 保养计划Id */
  planId?: string;
  repairRecordMaterialAddVOList?: RepairRecordMaterialAddVO[];
  /** 开始时间 */
  startTime?: string;
}

/**
 * MaintainRecordVO
 * 保养计划
 */
export interface MaintainRecordVO {
  /**
   * 延期天数
   * @format int32
   */
  delayDays?: number;
  /** 延期原因 */
  delayReason?: string;
  /** 设备编码 */
  deviceCode?: string;
  /** 设备Id */
  deviceId?: string;
  /** 设备名称 */
  deviceName?: string;
  /** 设备类型Id */
  deviceTypeId?: string;
  /** 设备类型名称 */
  deviceTypeName?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 保养记录ID */
  id?: string;
  /**
   * 是否延期（0：未延期；1：已延期）
   * @format int32
   */
  isDelay?: number;
  /** 是否延期（0：未延期；1：已延期） */
  isDelayName?: string;
  /**
   * 保养性质
   * @format int32
   */
  maintainNature?: number;
  /** 保养性质 */
  maintainNatureName?: string;
  /** 保养记录保养项 */
  maintainRecordItemVOList?: MaintainRecordItemVO[];
  /** @format int32 */
  maintainTime?: number;
  /** 保养负责人Id */
  maintainUserId?: string;
  /** 保养负责人名称 */
  maintainUserName?: string;
  /** 保养计划编码 */
  planCode?: string;
  /** 保养计划Id */
  planId?: string;
  /** 保养项目Id */
  projectId?: string;
  /** 保养项目名称 */
  projectName?: string;
  /** 保养记录单号 */
  recordCode?: string;
  /**
   * 保养记录状态（1：待确认；2：已确认）
   * @format int32
   */
  recordStatus?: number;
  /** 保养记录状态（1：待确认；2：已确认） */
  recordStatusName?: string;
  /** 备注 */
  remark?: string;
  /** 保养记录备品备件 */
  repairRecordMaterialVOList?: RepairRecordMaterialVO[];
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
}

/**
 * MaintainReportQueryVO
 * 维护保养报表查询视图模型
 */
export interface MaintainReportQueryVO {
  /**
   * 结束时间
   * @format date-time
   */
  endDate?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词：机器名称/编号 */
  keyword?: string;
  /** 节点id */
  machineTypeId?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startDate?: string;
}

/**
 * MaintainReportVO
 * 维护保养报表视图模型
 */
export interface MaintainReportVO {
  /** 机器编号 */
  machineCode?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器类型 */
  machineTypeName?: string;
  /**
   * 保养次数
   * @format int32
   */
  maintainCount?: number;
  /** 设备保养时长 */
  maintainTime?: string;
  /** MTBF时长 */
  mtbfTime?: string;
  /** MTTR时长 */
  mttrTime?: string;
  /**
   * 维修次数
   * @format int32
   */
  repairCount?: number;
  /** 设备维修时长 */
  repairTime?: string;
}

/**
 * MaintainStatisticsVO
 * 保养项目保养项
 */
export interface MaintainStatisticsVO {
  /**
   * 超期数量
   * @format int32
   */
  delayNum?: number;
  /** 待确认数量 */
  recordNum?: string;
  /**
   * 今日保养数量
   * @format int32
   */
  todayNum?: number;
  /**
   * 预警保养数量
   * @format int32
   */
  warningNum?: number;
}

/**
 * MaintainTypeStatisticsVO
 * 保养/维修-类型次数/时间占比视图模型
 */
export interface MaintainTypeStatisticsVO {
  /** 次数 */
  count?: ChartDataVO[];
  /** 时间 */
  time?: ChartDataVO[];
}

/**
 * MaintainVO
 * 保养详情
 */
export interface MaintainVO {
  /** 保养计划信息 */
  maintainPlanVO?: MaintainPlanVO;
  /** 保养记录信息 */
  maintainRecordVO?: MaintainRecordVO;
}

/** MaterialVO */
export interface MaterialVO {
  /** id */
  id?: string;
  /** 物料名称 */
  materialName?: string;
  /** 维修记录id */
  recordId?: string;
  /**
   * 数量
   * @format int32
   */
  recordNumber?: number;
}

/**
 * MttrOrMtbfTrendQueryVO
 * mttr/mtbf趋势查询视图模型
 */
export interface MttrOrMtbfTrendQueryVO {
  /**
   * 业务类型：1-mttr，2-mtbf
   * @format int32
   */
  businessType: number;
  /**
   * 结束时间
   * @format date-time
   */
  endDate?: string;
  /** 节点id */
  id: string;
  /**
   * 开始时间
   * @format date-time
   */
  startDate?: string;
  /**
   * 节点类型：1-机器，2-机器组
   * @format int32
   */
  type: number;
}

/** PermissionVerVO */
export interface PermissionVerVO {
  /** 对应业务 数据id */
  id?: string;
  /**
   * 安灯1;保养计划2
   * @format int32
   */
  type?: number;
}

/** RecordFilesVO */
export interface RecordFilesVO {
  files?: CheckRecordFileDTO[];
  pictures?: CheckRecordFileDTO[];
}

/**
 * RepairApply
 * 维修申请表
 */
export interface RepairApply {
  applyCode?: string;
  /** @format int32 */
  applyStatus?: number;
  applyUserId?: string;
  applyUserName?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  description?: string;
  deviceCode?: string;
  deviceId?: string;
  deviceName?: string;
  deviceTypeId?: string;
  deviceTypeName?: string;
  /** 主键id */
  id?: string;
  /** @format int32 */
  isAffect?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  malfunctionCode?: string;
  malfunctionId?: string;
  malfunctionName?: string;
  /** @format date-time */
  malfunctionTime?: string;
  remark?: string;
  /** @format int32 */
  repairNature?: number;
  repairUserId?: string;
  repairUserName?: string;
  /** @format date-time */
  startTime?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** @format int32 */
  urgency?: number;
}

/** RepairApplyAddVO */
export interface RepairApplyAddVO {
  /** 维修申请单号 */
  applyCode?: string;
  /** 维修申请人id */
  applyUserId?: string;
  /** 维修申请人名称 */
  applyUserName?: string;
  /** 故障描述 */
  description?: string;
  /** 机器编码 */
  deviceCode?: string;
  /** 设备id */
  deviceId?: string;
  /** 机器名称 */
  deviceName?: string;
  /** 机器类型id */
  deviceTypeId?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  /** 维修申请关联的文件 */
  fileAddDTOList?: RepairApplyFileAddDTO[];
  /**
   * 影响生产：是 1   否   2
   * @format int32
   */
  isAffect?: number;
  /** 故障类型编码 */
  malfunctionCode?: string;
  /** 故障类型id */
  malfunctionId?: string;
  /** 故障类型 */
  malfunctionName?: string;
  /** 故障发生时间 */
  malfunctionTime?: string;
  /** 业务消息发送 */
  notifyBusinessSend?: RepairApplySendUserDto;
  /** 备注 */
  remark?: string;
  /**
   * 维修性质
   * @format int32
   */
  repairNature?: number;
  /** 维修负责人id */
  repairUserId?: string;
  /** 维修负责人名称 */
  repairUserName?: string;
  /**
   * 紧急度：  高 3 中 2  低 1
   * @format int32
   */
  urgency?: number;
}

/** RepairApplyDetailVO */
export interface RepairApplyDetailVO {
  /** 申请单号 */
  applyCode?: string;
  /**
   * 申请单状态： 待执行 1  执行中 2  待确认 3  已确认 4
   * @format int32
   */
  applyStatus?: number;
  /** 申请单状态： 待执行 1  执行中 2  待确认 3  已确认 4 */
  applyStatusStr?: string;
  /** 维修申请人id */
  applyUserId?: string;
  /** 维修申请人名称 */
  applyUserName?: string;
  /** 故障描述 */
  description?: string;
  /** 机器编码 */
  deviceCode?: string;
  /** 设备id */
  deviceId?: string;
  /** 机器名称 */
  deviceName?: string;
  /** 机器类型id */
  deviceTypeId?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  /** 维修申请关联的文件 */
  fileAddDTOList?: RepairApplyFileAddDTO[];
  /** id */
  id?: string;
  /**
   * 影响生产：是 1   否   2
   * @format int32
   */
  isAffect?: number;
  /** 影响生产：是 1   否   2 */
  isAffectStr?: string;
  /** 故障类型编码 */
  malfunctionCode?: string;
  /** 故障类型id */
  malfunctionId?: string;
  /** 故障类型 */
  malfunctionName?: string;
  /** 故障发生时间 */
  malfunctionTime?: string;
  /** 申请单状态： 待执行 1  执行中 2  待确认 3  已确认 4 */
  remark?: string;
  /**
   * 维修性质
   * @format int32
   */
  repairNature?: number;
  /** 维修性质 */
  repairNatureName?: string;
  /** 维修记录详情 */
  repairRecordDetailVO?: RepairRecordDetailVO;
  /** 维修负责人id */
  repairUserId?: string;
  /** 维修负责人名称 */
  repairUserName?: string;
  /** 开始时间 */
  startTime?: string;
  /**
   * 紧急度：  高 3 中 2  低 1
   * @format int32
   */
  urgency?: number;
  /** 紧急度：  高 3 中 2  低 1 */
  urgencyStr?: string;
}

/** RepairApplyExportVO */
export interface RepairApplyExportVO {
  /** 申请单状态： 待执行 1  执行中 2  待确认 3  已确认 4 */
  applyStatusList?: number[];
  /** 机器Id */
  deviceId?: string;
  /** 机器类型ID */
  deviceTypeId?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  keyWord?: string;
}

/** RepairApplyFileAddDTO */
export interface RepairApplyFileAddDTO {
  /** 文件mini类型 */
  contentType: string;
  /** 文件名称 */
  fileName: string;
  /** 文件大小 */
  fileSize?: string;
  /** 文件外链 */
  link?: string;
  /** 文件key */
  objectKey: string;
  /** 上传时间 */
  uploadTime?: string;
}

/** RepairApplyLookVO */
export interface RepairApplyLookVO {
  /** 申请单状态： 待执行 1  执行中 2  待确认 3  已确认 4 */
  applyStatusList?: number[];
  /** 机器类型id */
  deviceTypeId?: string;
  /** 关键词,申请单号，设备编码，设备名称模糊匹配 */
  keyWords?: string;
}

/** RepairApplySearchVO */
export interface RepairApplySearchVO {
  /** 维修申请单号 */
  applyCode?: string;
  /** 机器编号 */
  deviceCode?: string;
  /** 机器名称 */
  deviceName?: string;
}

/** RepairApplySendUserDto */
export interface RepairApplySendUserDto {
  empIds?: string[];
  orgIds?: string[];
}

/** RepairApplyUpdateVO */
export interface RepairApplyUpdateVO {
  /** 维修申请人id */
  applyUserId?: string;
  /** 维修申请人名称 */
  applyUserName?: string;
  /** 故障描述 */
  description?: string;
  /** 机器编码 */
  deviceCode?: string;
  /** 机器id */
  deviceId?: string;
  /** 机器名称 */
  deviceName?: string;
  /** 机器类型id */
  deviceTypeId?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  /** 维修申请关联的文件 */
  fileAddDTOList?: RepairApplyFileAddDTO[];
  /** id */
  id?: string;
  /**
   * 影响生产：是 1   否   2
   * @format int32
   */
  isAffect?: number;
  /** 故障类型编码 */
  malfunctionCode?: string;
  /** 故障类型id */
  malfunctionId?: string;
  /** 故障类型 */
  malfunctionName?: string;
  /** 故障发生时间 */
  malfunctionTime?: string;
  /** 备注 */
  remark?: string;
  /**
   * 维修性质
   * @format int32
   */
  repairNature?: number;
  /** 维修负责人id */
  repairUserId?: string;
  /** 维修负责人名称 */
  repairUserName?: string;
  /**
   * 紧急度：  高 3 中 2  低 1
   * @format int32
   */
  urgency?: number;
}

/** RepairApplyVO */
export interface RepairApplyVO {
  /** 申请单号 */
  applyCode?: string;
  /**
   * 申请单状态： 待执行 1  执行中 2  待确认 3  已确认 4
   * @format int32
   */
  applyStatus?: number;
  /** 申请单状态： 待执行 1  执行中 2  待确认 3  已确认 4 */
  applyStatusStr?: string;
  /**
   * 申请时间
   * @format date-time
   */
  applyTime?: string;
  /** 维修申请人id */
  applyUserId?: string;
  /** 维修申请人名称 */
  applyUserName?: string;
  /** 故障详情 */
  description?: string;
  /** 机器编码 */
  deviceCode?: string;
  /** 机器id */
  deviceId?: string;
  /** 机器名称 */
  deviceName?: string;
  /** 机器类型id */
  deviceTypeId?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  /** id */
  id?: string;
  /**
   * 影响生产：是 1   否   2
   * @format int32
   */
  isAffect?: number;
  /** 影响生产：是 1   否   2 */
  isAffectStr?: string;
  /** 故障类型编码 */
  malfunctionCode?: string;
  /** 故障类型id */
  malfunctionId?: string;
  /** 故障类型 */
  malfunctionName?: string;
  /** 故障发生时间 */
  malfunctionTime?: string;
  /** 维修记录id */
  recordId?: string;
  /** 备注 */
  remark?: string;
  /**
   * 维修性质
   * @format int32
   */
  repairNature?: number;
  /** 维修性质 */
  repairNatureName?: string;
  /** 维修负责人id */
  repairUserId?: string;
  /** 维修负责人名称 */
  repairUserName?: string;
  /** 开始时间 */
  startTime?: string;
  /**
   * 紧急度：  高 3 中 2  低 1
   * @format int32
   */
  urgency?: number;
  /** 紧急度：  高 3 中 2  低 1 */
  urgencyStr?: string;
}

/** RepairFileVO */
export interface RepairFileVO {
  /** 故障描述 */
  description?: string;
  /** 维修申请关联的文件 */
  fileAddDTOList?: RepairApplyFileAddDTO[];
}

/**
 * RepairRecord
 * 维修记录表
 */
export interface RepairRecord {
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  deviceCode?: string;
  deviceId?: string;
  deviceName?: string;
  deviceTypeId?: string;
  deviceTypeName?: string;
  errorCode?: string;
  /** 主键id */
  id?: string;
  /** @format int32 */
  isAffect?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  malfunctionCode?: string;
  malfunctionDetails?: string;
  malfunctionId?: string;
  malfunctionName?: string;
  /** @format date-time */
  malfunctionTime?: string;
  realMalfunctionCode?: string;
  realMalfunctionId?: string;
  realMalfunctionName?: string;
  recordCode?: string;
  /** @format int32 */
  recordStatus?: number;
  /** @format int32 */
  recordType?: number;
  remark?: string;
  repairApplyId?: string;
  /** @format date-time */
  repairEndTime?: string;
  /** @format int32 */
  repairNature?: number;
  /** @format date-time */
  repairStartTime?: string;
  /** @format int32 */
  repairTime?: number;
  repairUserId?: string;
  repairUserName?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** @format int32 */
  urgency?: number;
}

/** RepairRecordAddVO */
export interface RepairRecordAddVO {
  /** 设备编码 */
  deviceCode?: string;
  /** 设备id */
  deviceId?: string;
  /** 设备名称 */
  deviceName?: string;
  /** 设备类型id */
  deviceTypeId?: string;
  /** 设备类型名称 */
  deviceTypeName?: string;
  /** 故障码 */
  errorCode?: string;
  /**
   * 影响生产：是 1 , 否 2
   * @format int32
   */
  isAffect?: number;
  /** 故障类型编码 */
  malfunctionCode?: string;
  /** 故障分析 */
  malfunctionDetails?: string;
  /** 故障类型id */
  malfunctionId?: string;
  /** 故障类型 */
  malfunctionName?: string;
  /**
   * 发生时间 （例行维修）
   * @format date-time
   */
  malfunctionTime?: string;
  /** 维修记录关联的备品备件 */
  materialVOList?: RepairRecordMaterialAddVO[];
  /** 实际故障类型编码 */
  realMalfunctionCode?: string;
  /** 实际故障类型id */
  realMalfunctionId?: string;
  /** 实际故障类型 */
  realMalfunctionName?: string;
  /** 维修单号 */
  recordCode?: string;
  /** 维修记录关联附件 */
  recordFileList?: RepairRecordFileAddDTO[];
  /**
   * 维修记录类型： 临时维修  1   例行维修 2
   * @format int32
   */
  recordType?: number;
  /** 备注 */
  remark?: string;
  /** 维修申请id */
  repairApplyId?: string;
  /**
   * 维修完成时间
   * @format date-time
   */
  repairEndTime?: string;
  /**
   * 维修性质(1:厂内;2:委外)
   * @format int32
   */
  repairNature?: number;
  /**
   * 维修开始时间
   * @format date-time
   */
  repairStartTime?: string;
  /**
   * 维修用时  单位：分钟
   * @format int32
   */
  repairTime?: number;
  /** 维修负责人id */
  repairUserId?: string;
  /** 维修负责人名称 */
  repairUserName?: string;
  /**
   * 紧急度
   * @format int32
   */
  urgency?: number;
}

/** RepairRecordDetailVO */
export interface RepairRecordDetailVO {
  /** 设备编码 */
  deviceCode?: string;
  /** 设备id */
  deviceId?: string;
  /** 设备名称 */
  deviceName?: string;
  /** 设备类型id */
  deviceTypeId?: string;
  /** 设备类型名称 */
  deviceTypeName?: string;
  /** 故障码 */
  errorCode?: string;
  /** id */
  id?: string;
  /**
   * 影响生产：是 1 , 否 2
   * @format int32
   */
  isAffect?: number;
  /** 影响生产：是 1 , 否 2 */
  isAffectStr?: string;
  /** 故障类型编码 */
  malfunctionCode?: string;
  /** 故障详情 */
  malfunctionDetails?: string;
  /** 故障类型id */
  malfunctionId?: string;
  /** 故障类型 */
  malfunctionName?: string;
  /**
   * 发生时间 （例行维修）
   * @format date-time
   */
  malfunctionTime?: string;
  /** 关联的备品备件 */
  materialVOList?: RepairRecordMaterialVO[];
  /** 实际故障类型编码 */
  realMalfunctionCode?: string;
  /** 实际故障类型id */
  realMalfunctionId?: string;
  /** 实际故障类型 */
  realMalfunctionName?: string;
  /** 维修单号 */
  recordCode?: string;
  /** 维修记录关联附件 */
  recordFileList?: RepairRecordFileAddDTO[];
  /**
   * 维修记录状态：待确认 1  已确认 2
   * @format int32
   */
  recordStatus?: number;
  /** 维修记录状态：待确认 1  已确认 2 */
  recordStatusStr?: string;
  /**
   * 维修记录类型： 临时维修  1   例行维修 2
   * @format int32
   */
  recordType?: number;
  /** 维修记录类型： 临时维修  1   例行维修 2 */
  recordTypeStr?: string;
  /** 备注 */
  remark?: string;
  /** 关联的维修申请 */
  repairApplyDetailVo?: RepairApplyDetailVO;
  /** 维修申请id */
  repairApplyId?: string;
  /**
   * 维修完成时间
   * @format date-time
   */
  repairEndTime?: string;
  /**
   * 维修性质(1:厂内;2:委外)
   * @format int32
   */
  repairNature?: number;
  /** 维修性质 */
  repairNatureName?: string;
  /**
   * 维修开始时间
   * @format date-time
   */
  repairStartTime?: string;
  /**
   * 维修用时  单位：分钟
   * @format int32
   */
  repairTime?: number;
  /** 维修负责人id */
  repairUserId?: string;
  /** 维修负责人名称 */
  repairUserName?: string;
  /**
   * 紧急度：  高 3 中 2  低 1
   * @format int32
   */
  urgency?: number;
  /** 紧急度：  高 3 中 2  低 1 */
  urgencyStr?: string;
}

/** RepairRecordExportVO */
export interface RepairRecordExportVO {
  /** 机器Id */
  deviceId?: string;
  /** 机器类型ID */
  deviceTypeId?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  keyWord?: string;
  /** 维修记录状态：待确认 1  已确认 2 */
  recordStatusList?: number[];
}

/** RepairRecordFileAddDTO */
export interface RepairRecordFileAddDTO {
  /** 文件mini类型 */
  contentType: string;
  /** 文件名称 */
  fileName: string;
  /** 文件大小 */
  fileSize?: string;
  /** 文件外链 */
  link?: string;
  /** 文件key */
  objectKey: string;
  /** 上传时间 */
  uploadTime?: string;
}

/** RepairRecordLookVO */
export interface RepairRecordLookVO {
  /** 设备类型id */
  deviceTypeId?: string;
  /** 关键词,维修单号，申请单号，设备编码，设备名称模糊匹配 */
  keyWords?: string;
  /**
   * 维修状态
   * @format int32
   */
  recordStatus?: number;
}

/** RepairRecordMaterialAddVO */
export interface RepairRecordMaterialAddVO {
  /** 物料编码 */
  materialCode?: string;
  /** 物料id */
  materialId?: string;
  /** 物料名称 */
  materialName?: string;
  /**
   * 数量
   * @format int32
   */
  recordNumber?: number;
}

/** RepairRecordMaterialVO */
export interface RepairRecordMaterialVO {
  /** id */
  id?: string;
  /** 物料编码 */
  materialCode?: string;
  /** 物料id */
  materialId?: string;
  /** 物料名称 */
  materialName?: string;
  /**
   * 数量
   * @format int32
   */
  recordNumber?: number;
}

/** RepairRecordTodaySearchVO */
export interface RepairRecordTodaySearchVO {
  /** 申请单号 */
  applyCode?: string;
  /** 机器编码 */
  deviceCode?: string;
  /** 机器名称 */
  deviceName?: string;
  /**
   * 维修类型
   * @format int32
   */
  recordType?: number;
}

/** RepairRecordUpdateVO */
export interface RepairRecordUpdateVO {
  /** 故障码 */
  errorCode?: string;
  /** 维修记录Id */
  id?: string;
  /**
   * 影响生产：是 1 , 否 2（临时维修）
   * @format int32
   */
  isAffect?: number;
  /** 故障类型编码 */
  malfunctionCode?: string;
  /** 故障分析 */
  malfunctionDetails?: string;
  /** 故障类型id */
  malfunctionId?: string;
  /** 故障类型 */
  malfunctionName?: string;
  /**
   * 发生时间 （临时维修）
   * @format date-time
   */
  malfunctionTime?: string;
  /** 维修记录关联的备品备件 */
  materialVOList?: RepairRecordMaterialAddVO[];
  /** 实际故障类型编码 */
  realMalfunctionCode?: string;
  /** 实际故障类型id */
  realMalfunctionId?: string;
  /** 实际故障类型 */
  realMalfunctionName?: string;
  /** 维修记录关联附件 */
  recordFileList?: RepairRecordFileAddDTO[];
  /**
   * 维修记录类型： 临时维修  1   例行维修 2
   * @format int32
   */
  recordType?: number;
  /** 备注 */
  remark?: string;
  /** 维修申请id */
  repairApplyId?: string;
  /**
   * 维修结束时间
   * @format date-time
   */
  repairEndTime?: string;
  /**
   * 维修性质(1:厂内;2:委外)
   * @format int32
   */
  repairNature?: number;
  /**
   * 维修开始时间
   * @format date-time
   */
  repairStartTime?: string;
  /**
   * 维修用时  单位：分钟
   * @format int32
   */
  repairTime?: number;
  /** 维修负责人id */
  repairUserId?: string;
  /** 维修负责人名称 */
  repairUserName?: string;
  /**
   * 紧急度
   * @format int32
   */
  urgency?: number;
}

/** RepairRecordVO */
export interface RepairRecordVO {
  /** 申请单号 */
  applyCode?: string;
  /**
   * 申请时间
   * @format date-time
   */
  applyTime?: string;
  /** 维修申请人id */
  applyUserId?: string;
  /** 维修申请人名称 */
  applyUserName?: string;
  /** 故障描述 */
  description?: string;
  /** 设备编码 */
  deviceCode?: string;
  /** 设备id */
  deviceId?: string;
  /** 设备名称 */
  deviceName?: string;
  /** 设备类型id */
  deviceTypeId?: string;
  /** 设备类型名称 */
  deviceTypeName?: string;
  /** 故障码 */
  errorCode?: string;
  /** id */
  id?: string;
  /** 影响生产：是 1 , 否 2 */
  isAffectStr?: string;
  /** 故障分析 */
  malfunctionDetails?: string;
  /** 故障类型名称 */
  malfunctionName?: string;
  /**
   * 发生时间 （例行维修）
   * @format date-time
   */
  malfunctionTime?: string;
  /** 实际故障类型编码 */
  realMalfunctionCode?: string;
  /** 实际故障类型id */
  realMalfunctionId?: string;
  /** 实际故障类型 */
  realMalfunctionName?: string;
  /** 维修单号 */
  recordCode?: string;
  /**
   * 维修记录状态：待确认 1  已确认 2
   * @format int32
   */
  recordStatus?: number;
  /** 维修记录状态：待确认 1  已确认 2 */
  recordStatusStr?: string;
  /**
   * 维修记录类型： 临时维修  1   例行维修 2
   * @format int32
   */
  recordType?: number;
  /** 维修记录类型： 临时维修  1   例行维修 2 */
  recordTypeStr?: string;
  /** 备注 */
  remark?: string;
  /** 维修申请id */
  repairApplyId?: string;
  /**
   * 维修完成时间
   * @format date-time
   */
  repairEndTime?: string;
  /**
   * 维修性质(1:厂内;2:委外)
   * @format int32
   */
  repairNature?: number;
  /** 维修性质 */
  repairNatureName?: string;
  /**
   * 维修开始时间
   * @format date-time
   */
  repairStartTime?: string;
  /**
   * 维修用时  单位：分钟
   * @format int32
   */
  repairTime?: number;
  /** 维修负责人id */
  repairUserId?: string;
  /** 维修负责人名称 */
  repairUserName?: string;
  /**
   * 紧急度：  高 3 中 2  低 1
   * @format int32
   */
  urgency?: number;
  /** 紧急度：  高 3 中 2  低 1 */
  urgencyStr?: string;
}

/** ChartSeriesDataVO«string» */
export interface ChartSeriesDataVOString {
  categories?: object[];
  categoriesExtra?: object[][];
  series?: SeriesItemString[];
}

/** IPage«CheckRecordTodayVO» */
export interface IPageCheckRecordTodayVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CheckRecordTodayVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CheckRecordVO» */
export interface IPageCheckRecordVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CheckRecordVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaintainPlanExpireVO» */
export interface IPageMaintainPlanExpireVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaintainPlanExpireVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaintainPlanItemVO» */
export interface IPageMaintainPlanItemVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaintainPlanItemVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaintainPlanVO» */
export interface IPageMaintainPlanVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaintainPlanVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaintainRecordItemVO» */
export interface IPageMaintainRecordItemVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaintainRecordItemVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaintainRecordVO» */
export interface IPageMaintainRecordVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaintainRecordVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaintainReportVO» */
export interface IPageMaintainReportVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaintainReportVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«RepairApplyVO» */
export interface IPageRepairApplyVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: RepairApplyVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«RepairRecordVO» */
export interface IPageRepairRecordVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: RepairRecordVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/**
 * R«ApplyRecordMaterialVO»
 * 返回信息
 */
export interface RApplyRecordMaterialVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ApplyRecordMaterialVO;
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
 * R«CheckRecordDetailVO»
 * 返回信息
 */
export interface RCheckRecordDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CheckRecordDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CheckRecord»
 * 返回信息
 */
export interface RCheckRecord {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CheckRecord;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CheckRecordTodayVO»»
 * 返回信息
 */
export interface RIPageCheckRecordTodayVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCheckRecordTodayVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CheckRecordVO»»
 * 返回信息
 */
export interface RIPageCheckRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCheckRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaintainPlanExpireVO»»
 * 返回信息
 */
export interface RIPageMaintainPlanExpireVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaintainPlanExpireVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaintainPlanItemVO»»
 * 返回信息
 */
export interface RIPageMaintainPlanItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaintainPlanItemVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaintainPlanVO»»
 * 返回信息
 */
export interface RIPageMaintainPlanVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaintainPlanVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaintainRecordItemVO»»
 * 返回信息
 */
export interface RIPageMaintainRecordItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaintainRecordItemVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaintainRecordVO»»
 * 返回信息
 */
export interface RIPageMaintainRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaintainRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaintainReportVO»»
 * 返回信息
 */
export interface RIPageMaintainReportVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaintainReportVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«RepairApplyVO»»
 * 返回信息
 */
export interface RIPageRepairApplyVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageRepairApplyVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«RepairRecordVO»»
 * 返回信息
 */
export interface RIPageRepairRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageRepairRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ApplyCodeVO»»
 * 返回信息
 */
export interface RListApplyCodeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ApplyCodeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaintainPlanItemVO»»
 * 返回信息
 */
export interface RListMaintainPlanItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainPlanItemVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaintainPlanVO»»
 * 返回信息
 */
export interface RListMaintainPlanVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainPlanVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaintainRecordItemVO»»
 * 返回信息
 */
export interface RListMaintainRecordItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainRecordItemVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaintainRecordVO»»
 * 返回信息
 */
export interface RListMaintainRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainRecordVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«RepairApplyVO»»
 * 返回信息
 */
export interface RListRepairApplyVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RepairApplyVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«RepairRecordVO»»
 * 返回信息
 */
export interface RListRepairRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RepairRecordVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainOrderCountVO»
 * 返回信息
 */
export interface RMaintainOrderCountVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainOrderCountVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainPlanVO»
 * 返回信息
 */
export interface RMaintainPlanVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainPlanVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainPlan»
 * 返回信息
 */
export interface RMaintainPlan {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainPlan;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainRecordVO»
 * 返回信息
 */
export interface RMaintainRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainRecord»
 * 返回信息
 */
export interface RMaintainRecord {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainRecord;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainStatisticsVO»
 * 返回信息
 */
export interface RMaintainStatisticsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainStatisticsVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainTypeStatisticsVO»
 * 返回信息
 */
export interface RMaintainTypeStatisticsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainTypeStatisticsVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainVO»
 * 返回信息
 */
export interface RMaintainVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«RepairApplyDetailVO»
 * 返回信息
 */
export interface RRepairApplyDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RepairApplyDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«RepairApply»
 * 返回信息
 */
export interface RRepairApply {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RepairApply;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«RepairFileVO»
 * 返回信息
 */
export interface RRepairFileVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RepairFileVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«RepairRecordDetailVO»
 * 返回信息
 */
export interface RRepairRecordDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RepairRecordDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«RepairRecordVO»
 * 返回信息
 */
export interface RRepairRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RepairRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«RepairRecord»
 * 返回信息
 */
export interface RRepairRecord {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RepairRecord;
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

/** SeriesItem«string» */
export interface SeriesItemString {
  data?: string[];
  name?: string;
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
  bladeTpm = {
    /**
     * No description
     *
     * @tags 点检记录
     * @name CheckRecordCreateCheckRecord
     * @summary 添加点检记录
     * @request POST:/blade-tpm/check-record
     * @secure
     */
    checkRecordCreateCheckRecord: (vo: CheckRecordSubmitVO, params: RequestParams = {}) =>
      this.request<RCheckRecord, void>({
        path: `/blade-tpm/check-record`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检记录
     * @name CheckRecordUpdateCheckRecord
     * @summary 修改点检记录
     * @request PUT:/blade-tpm/check-record
     * @secure
     */
    checkRecordUpdateCheckRecord: (vo: CheckRecordUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/check-record`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检记录
     * @name CheckRecordDeleteCheckRecord
     * @summary 删除点检项记录
     * @request DELETE:/blade-tpm/check-record
     * @secure
     */
    checkRecordDeleteCheckRecord: (vo: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/check-record`,
        method: 'DELETE',
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检记录
     * @name CheckRecordExportCheckRecord
     * @summary 导出点检记录
     * @request POST:/blade-tpm/check-record/excel/export
     * @secure
     */
    checkRecordExportCheckRecord: (queryVO: CheckRecordQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-tpm/check-record/excel/export`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检记录
     * @name CheckRecordAddFiles
     * @summary 增加点检记录下的附件
     * @request PUT:/blade-tpm/check-record/files
     * @secure
     */
    checkRecordAddFiles: (
      query: {
        /** recordId */
        recordId: string;
      },
      vo: RecordFilesVO,
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/check-record/files`,
        method: 'PUT',
        query: query,
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检记录
     * @name CheckRecordRemoveFiles
     * @summary 删除点检记录下的附件
     * @request DELETE:/blade-tpm/check-record/files
     * @secure
     */
    checkRecordRemoveFiles: (
      query: {
        /** recordId */
        recordId: string;
      },
      vo: IdsVO,
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/check-record/files`,
        method: 'DELETE',
        query: query,
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检记录
     * @name CheckRecordRemoveItems
     * @summary 删除点检记录下的点检项
     * @request DELETE:/blade-tpm/check-record/items
     * @secure
     */
    checkRecordRemoveItems: (
      query: {
        /** recordId */
        recordId: string;
      },
      vo: IdsVO,
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/check-record/items`,
        method: 'DELETE',
        query: query,
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检记录
     * @name CheckRecordPageCheckRecord
     * @summary 分页查询点检记录
     * @request GET:/blade-tpm/check-record/page
     * @secure
     */
    checkRecordPageCheckRecord: (
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
        /** deviceTypeId */
        deviceTypeId?: string;
        /** keyWords */
        keyWords?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageCheckRecordVO, void>({
        path: `/blade-tpm/check-record/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检记录
     * @name CheckRecordDetail
     * @summary 查询点检记录下的点检项和附件
     * @request GET:/blade-tpm/check-record/{id}
     * @secure
     */
    checkRecordDetail: (id: string, params: RequestParams = {}) =>
      this.request<RCheckRecordDetailVO, void>({
        path: `/blade-tpm/check-record/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanCreateMaintainPlan
     * @summary 添加临时保养计划
     * @request POST:/blade-tpm/maintain-plan/create-maintain-plan
     * @secure
     */
    maintainPlanCreateMaintainPlan: (maintainPlanAddVO: MaintainPlanAddVO, params: RequestParams = {}) =>
      this.request<RMaintainPlan, void>({
        path: `/blade-tpm/maintain-plan/create-maintain-plan`,
        method: 'POST',
        body: maintainPlanAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanCreateMaintainPlanAuto
     * @summary 生成周期保养计划
     * @request POST:/blade-tpm/maintain-plan/create-maintain-plan-auto
     * @secure
     */
    maintainPlanCreateMaintainPlanAuto: (maintainPlanAutoAddVO: MaintainPlanAutoAddVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/maintain-plan/create-maintain-plan-auto`,
        method: 'POST',
        body: maintainPlanAutoAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanDeleteMaintainPlan
     * @summary 删除保养计划
     * @request POST:/blade-tpm/maintain-plan/delete-maintain-plan
     * @secure
     */
    maintainPlanDeleteMaintainPlan: (maintainPlanIdListVO: MaintainPlanIdListVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/maintain-plan/delete-maintain-plan`,
        method: 'POST',
        body: maintainPlanIdListVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanEditMaintainPlan
     * @summary 编辑保养计划
     * @request POST:/blade-tpm/maintain-plan/edit-maintain-plan
     * @secure
     */
    maintainPlanEditMaintainPlan: (maintainPlanUpdateVO: MaintainPlanUpdateVO, params: RequestParams = {}) =>
      this.request<RMaintainPlan, void>({
        path: `/blade-tpm/maintain-plan/edit-maintain-plan`,
        method: 'POST',
        body: maintainPlanUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanExportMaintainPlan
     * @summary 导出
     * @request POST:/blade-tpm/maintain-plan/export
     * @secure
     */
    maintainPlanExportMaintainPlan: (maintainPlanExportVO: MaintainPlanExportVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-tpm/maintain-plan/export`,
        method: 'POST',
        body: maintainPlanExportVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanGetMaintainPlan
     * @summary 查看保养计划
     * @request GET:/blade-tpm/maintain-plan/get-maintain-plan
     * @secure
     */
    maintainPlanGetMaintainPlan: (
      query?: {
        /** 保养计划ID */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMaintainPlanVO, void>({
        path: `/blade-tpm/maintain-plan/get-maintain-plan`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanQueryMaintainPlanItemList
     * @summary 通过保养计划ID查看保养项列表（不分页）
     * @request GET:/blade-tpm/maintain-plan/item-list
     * @secure
     */
    maintainPlanQueryMaintainPlanItemList: (
      query?: {
        /** 保养计划Id */
        planId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMaintainPlanItemVO, void>({
        path: `/blade-tpm/maintain-plan/item-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanQueryMaintainPlanItemListPage
     * @summary 通过保养计划ID查看保养项列表（分页）
     * @request GET:/blade-tpm/maintain-plan/item-page
     * @secure
     */
    maintainPlanQueryMaintainPlanItemListPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 保养计划Id */
        planId?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainPlanItemVO, void>({
        path: `/blade-tpm/maintain-plan/item-page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanQueryMaintainPlanList
     * @summary 通过设备类型查看保养计划（不分页）
     * @request POST:/blade-tpm/maintain-plan/list
     * @secure
     */
    maintainPlanQueryMaintainPlanList: (maintainPlanSearchVO: MaintainPlanSearchVO, params: RequestParams = {}) =>
      this.request<RListMaintainPlanVO, void>({
        path: `/blade-tpm/maintain-plan/list`,
        method: 'POST',
        body: maintainPlanSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanQueryMaintainPlanListByStatus
     * @summary 根据状态查询计划列表
     * @request POST:/blade-tpm/maintain-plan/list-by-status
     * @secure
     */
    maintainPlanQueryMaintainPlanListByStatus: (
      query?: {
        /**
         * 状态
         * @format int32
         */
        planStatus?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMaintainPlanVO, void>({
        path: `/blade-tpm/maintain-plan/list-by-status`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanMPlanPer
     * @summary 资源管理-保养计划handler
     * @request POST:/blade-tpm/maintain-plan/m-plan-per
     * @secure
     */
    maintainPlanMPlanPer: (vo: PermissionVerVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/maintain-plan/m-plan-per`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanQueryMaintainPlanPage
     * @summary 通过设备类型查看保养计划（分页）
     * @request POST:/blade-tpm/maintain-plan/page
     * @secure
     */
    maintainPlanQueryMaintainPlanPage: (
      maintainPlanSearchVO: MaintainPlanSearchVO,
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
      this.request<RIPageMaintainPlanVO, void>({
        path: `/blade-tpm/maintain-plan/page`,
        method: 'POST',
        query: query,
        body: maintainPlanSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanQueryMaintainPlanPageByPlanStatus
     * @summary 查看保养计划（分页）
     * @request POST:/blade-tpm/maintain-plan/page-by-plan-status
     * @secure
     */
    maintainPlanQueryMaintainPlanPageByPlanStatus: (
      maintainPlanSearchByPlanStatusVO: MaintainPlanSearchByPlanStatusVO,
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
      this.request<RIPageMaintainPlanVO, void>({
        path: `/blade-tpm/maintain-plan/page-by-plan-status`,
        method: 'POST',
        query: query,
        body: maintainPlanSearchByPlanStatusVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanPerformMaintainPlan
     * @summary 执行保养计划
     * @request POST:/blade-tpm/maintain-plan/perform-maintain-plan
     * @secure
     */
    maintainPlanPerformMaintainPlan: (
      query?: {
        /** 保养计划Id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/maintain-plan/perform-maintain-plan`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养计划
     * @name MaintainPlanTest
     * @summary 测试
     * @request GET:/blade-tpm/maintain-plan/test
     * @secure
     */
    maintainPlanTest: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/maintain-plan/test`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordCreateMaintainRecord
     * @summary 添加保养记录
     * @request POST:/blade-tpm/maintain-record/create-maintain-record
     * @secure
     */
    maintainRecordCreateMaintainRecord: (maintainRecordAddVO: MaintainRecordAddVO, params: RequestParams = {}) =>
      this.request<RMaintainRecord, void>({
        path: `/blade-tpm/maintain-record/create-maintain-record`,
        method: 'POST',
        body: maintainRecordAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordDeleteMaintainRecord
     * @summary 删除保养记录
     * @request POST:/blade-tpm/maintain-record/delete-maintain-record
     * @secure
     */
    maintainRecordDeleteMaintainRecord: (maintainRecordIdListVO: MaintainRecordIdListVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/maintain-record/delete-maintain-record`,
        method: 'POST',
        body: maintainRecordIdListVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordEditMaintainRecord
     * @summary 编辑保养记录
     * @request POST:/blade-tpm/maintain-record/edit-maintain-record
     * @secure
     */
    maintainRecordEditMaintainRecord: (maintainRecordUpdateVO: MaintainRecordUpdateVO, params: RequestParams = {}) =>
      this.request<RMaintainRecord, void>({
        path: `/blade-tpm/maintain-record/edit-maintain-record`,
        method: 'POST',
        body: maintainRecordUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordExportMaintainRecord
     * @summary 导出
     * @request POST:/blade-tpm/maintain-record/export
     * @secure
     */
    maintainRecordExportMaintainRecord: (maintainRecordExportVO: MaintainRecordExportVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-tpm/maintain-record/export`,
        method: 'POST',
        body: maintainRecordExportVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordGetMaintainDetail
     * @summary 查看保养详情
     * @request GET:/blade-tpm/maintain-record/get-maintain-detail
     * @secure
     */
    maintainRecordGetMaintainDetail: (
      query?: {
        /** 保养计划ID */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMaintainVO, void>({
        path: `/blade-tpm/maintain-record/get-maintain-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordGetMaintainRecord
     * @summary 查看保养记录
     * @request GET:/blade-tpm/maintain-record/get-maintain-record
     * @secure
     */
    maintainRecordGetMaintainRecord: (
      query?: {
        /** 保养记录ID */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMaintainRecordVO, void>({
        path: `/blade-tpm/maintain-record/get-maintain-record`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordQueryMaintainRecordItemList
     * @summary 通过保养记录ID查看保养项列表（不分页）
     * @request GET:/blade-tpm/maintain-record/item-list
     * @secure
     */
    maintainRecordQueryMaintainRecordItemList: (
      query?: {
        /** 保养记录Id */
        recordId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMaintainRecordItemVO, void>({
        path: `/blade-tpm/maintain-record/item-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordQueryMaintainRecordItemListPage
     * @summary 通过保养记录ID查看保养项列表（分页）
     * @request GET:/blade-tpm/maintain-record/item-page
     * @secure
     */
    maintainRecordQueryMaintainRecordItemListPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 保养记录Id */
        recordId?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainRecordItemVO, void>({
        path: `/blade-tpm/maintain-record/item-page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordQueryMaintainRecordList
     * @summary 通过设备类型查看保养记录（不分页）
     * @request POST:/blade-tpm/maintain-record/list
     * @secure
     */
    maintainRecordQueryMaintainRecordList: (maintainRecordSearchDTO: MaintainRecordSearchVO, params: RequestParams = {}) =>
      this.request<RListMaintainRecordVO, void>({
        path: `/blade-tpm/maintain-record/list`,
        method: 'POST',
        body: maintainRecordSearchDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordQueryMaintainRecordMaterialList
     * @summary 通过保养记录ID查看备品备件
     * @request GET:/blade-tpm/maintain-record/material-list
     * @secure
     */
    maintainRecordQueryMaintainRecordMaterialList: (
      query?: {
        /** 保养记录Id */
        recordId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RepairRecordMaterialVO[], void>({
        path: `/blade-tpm/maintain-record/material-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordQueryMaintainRecordPage
     * @summary 通过设备类型查看保养记录（分页）
     * @request POST:/blade-tpm/maintain-record/page
     * @secure
     */
    maintainRecordQueryMaintainRecordPage: (
      maintainRecordSearchVO: MaintainRecordSearchVO,
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
      this.request<RIPageMaintainRecordVO, void>({
        path: `/blade-tpm/maintain-record/page`,
        method: 'POST',
        query: query,
        body: maintainRecordSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养记录
     * @name MaintainRecordConfirmMaintainRecord
     * @summary 确认保养记录
     * @request POST:/blade-tpm/maintain-record/perform-maintain-record
     * @secure
     */
    maintainRecordConfirmMaintainRecord: (
      query?: {
        /** 保养记录Id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/maintain-record/perform-maintain-record`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 今日点检记录数量
     *
     * @tags 通知代办
     * @name NotifyAgentCheckRecordStatisticsNum
     * @summary 今日点检记录数量
     * @request GET:/blade-tpm/notify-agent/check-record/statistics/num
     * @secure
     */
    notifyAgentCheckRecordStatisticsNum: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-tpm/notify-agent/check-record/statistics/num`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 待确认的维修记录
     *
     * @tags 通知代办
     * @name NotifyAgentGetPageConfirmedRepairRecord
     * @summary 待确认维修记录(分页)
     * @request POST:/blade-tpm/notify-agent/confirmed-record-page
     * @secure
     */
    notifyAgentGetPageConfirmedRepairRecord: (
      repairRecordSearchVO: RepairRecordTodaySearchVO,
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
      this.request<RIPageRepairRecordVO, void>({
        path: `/blade-tpm/notify-agent/confirmed-record-page`,
        method: 'POST',
        query: query,
        body: repairRecordSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 分页查询超期保养计划
     *
     * @tags 通知代办
     * @name NotifyAgentPageMaintainPlanExpire
     * @summary 分页查询超期保养计划
     * @request POST:/blade-tpm/notify-agent/maintain-plan/page-expired
     * @secure
     */
    notifyAgentPageMaintainPlanExpire: (
      query?: {
        /** 编码 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 机器编码 */
        deviceCode?: string;
        /** 机器名称 */
        deviceName?: string;
        /**
         * 计划类型（0：人工创建；1：自动生成）
         * @format int32
         */
        isAuto?: number;
        /** 保养项目名称 */
        projectName?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainPlanExpireVO, void>({
        path: `/blade-tpm/notify-agent/maintain-plan/page-expired`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 分页查询保养计划待确认
     *
     * @tags 通知代办
     * @name NotifyAgentPageMaintainPlanConfirmed
     * @summary 分页查询保养计划待确认
     * @request POST:/blade-tpm/notify-agent/maintain-plan/page-to-confirmed
     * @secure
     */
    notifyAgentPageMaintainPlanConfirmed: (
      query?: {
        /** 编码 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 机器编码 */
        deviceCode?: string;
        /** 机器名称 */
        deviceName?: string;
        /**
         * 计划类型（0：人工创建；1：自动生成）
         * @format int32
         */
        isAuto?: number;
        /** 保养项目名称 */
        projectName?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainRecordVO, void>({
        path: `/blade-tpm/notify-agent/maintain-plan/page-to-confirmed`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 分页查询今日保养计划
     *
     * @tags 通知代办
     * @name NotifyAgentPageMaintainPlanToday
     * @summary 分页查询今日保养计划
     * @request POST:/blade-tpm/notify-agent/maintain-plan/page-today
     * @secure
     */
    notifyAgentPageMaintainPlanToday: (
      query?: {
        /** 编码 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 机器编码 */
        deviceCode?: string;
        /** 机器名称 */
        deviceName?: string;
        /**
         * 计划类型（0：人工创建；1：自动生成）
         * @format int32
         */
        isAuto?: number;
        /** 保养项目名称 */
        projectName?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainPlanExpireVO, void>({
        path: `/blade-tpm/notify-agent/maintain-plan/page-today`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 分页查询保养计划预警
     *
     * @tags 通知代办
     * @name NotifyAgentPageMaintainPlanWarning
     * @summary 分页查询保养计划预警
     * @request POST:/blade-tpm/notify-agent/maintain-plan/page-warning
     * @secure
     */
    notifyAgentPageMaintainPlanWarning: (
      query?: {
        /** 编码 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 机器编码 */
        deviceCode?: string;
        /** 机器名称 */
        deviceName?: string;
        /**
         * 计划类型（0：人工创建；1：自动生成）
         * @format int32
         */
        isAuto?: number;
        /** 保养项目名称 */
        projectName?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainPlanExpireVO, void>({
        path: `/blade-tpm/notify-agent/maintain-plan/page-warning`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知代办
     * @name NotifyAgentMaintainStatisticsNum
     * @summary 保养统计
     * @request GET:/blade-tpm/notify-agent/maintain-statistics
     * @secure
     */
    notifyAgentMaintainStatisticsNum: (params: RequestParams = {}) =>
      this.request<RMaintainStatisticsVO, void>({
        path: `/blade-tpm/notify-agent/maintain-statistics`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 获取待确认维修申请数量
     *
     * @tags 通知代办
     * @name NotifyAgentGetApplyCount
     * @summary 获取维修申请数量
     * @request GET:/blade-tpm/notify-agent/repair-count-apply
     * @secure
     */
    notifyAgentGetApplyCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-tpm/notify-agent/repair-count-apply`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 获取待确认维修记录数量
     *
     * @tags 通知代办
     * @name NotifyAgentGetRecordCount
     * @summary 获取待确认维修记录数量
     * @request GET:/blade-tpm/notify-agent/repair-count-record
     * @secure
     */
    notifyAgentGetRecordCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-tpm/notify-agent/repair-count-record`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 今日维修申请查询分页
     *
     * @tags 通知代办
     * @name NotifyAgentGetPageRepairApply
     * @summary 今日维修申请(分页)
     * @request POST:/blade-tpm/notify-agent/today-apply-page
     * @secure
     */
    notifyAgentGetPageRepairApply: (
      repairApplySearchVO: RepairApplySearchVO,
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
      this.request<RIPageRepairApplyVO, void>({
        path: `/blade-tpm/notify-agent/today-apply-page`,
        method: 'POST',
        query: query,
        body: repairApplySearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 今日点检记录
     *
     * @tags 通知代办
     * @name NotifyAgentGetPageTodayCheckRecord
     * @summary 今日点检(分页)
     * @request POST:/blade-tpm/notify-agent/today-check-record
     * @secure
     */
    notifyAgentGetPageTodayCheckRecord: (
      checkRecordSearchVO: CheckRecordSearchVO,
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
      this.request<RIPageCheckRecordTodayVO, void>({
        path: `/blade-tpm/notify-agent/today-check-record`,
        method: 'POST',
        query: query,
        body: checkRecordSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修申请
     * @name RepairApplyCreateRepairApply
     * @summary 新增维修申请记录
     * @request POST:/blade-tpm/repair-apply/create-repair-apply
     * @secure
     */
    repairApplyCreateRepairApply: (repairApplyAddVO: RepairApplyAddVO, params: RequestParams = {}) =>
      this.request<RRepairApply, void>({
        path: `/blade-tpm/repair-apply/create-repair-apply`,
        method: 'POST',
        body: repairApplyAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修申请
     * @name RepairApplyDeleteApply
     * @summary 维修申请记录(批量删除)
     * @request POST:/blade-tpm/repair-apply/delete-apply-ids
     * @secure
     */
    repairApplyDeleteApply: (
      query?: {
        /** 维修申请ids */
        ids?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/repair-apply/delete-apply-ids`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修申请
     * @name RepairApplyGetetail
     * @summary 获取维修申请和记录详情(包含对应附件)
     * @request GET:/blade-tpm/repair-apply/detail
     * @secure
     */
    repairApplyGetetail: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RRepairApplyDetailVO, void>({
        path: `/blade-tpm/repair-apply/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修申请
     * @name RepairApplyExportProduct
     * @summary 导出维修申请
     * @request POST:/blade-tpm/repair-apply/export-apply
     * @secure
     */
    repairApplyExportProduct: (repairApplyExportVO: RepairApplyExportVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-tpm/repair-apply/export-apply`,
        method: 'POST',
        body: repairApplyExportVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 给维修记录中单号选择提供(只包含状态为“执行中”的申请单)
     *
     * @tags 维修申请
     * @name RepairApplyGetApplyCodeList
     * @summary 获取维修申请单号列表
     * @request GET:/blade-tpm/repair-apply/get-apply-code
     * @secure
     */
    repairApplyGetApplyCodeList: (params: RequestParams = {}) =>
      this.request<RListApplyCodeVO, void>({
        path: `/blade-tpm/repair-apply/get-apply-code`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修申请
     * @name RepairApplyGetApplyDetail
     * @summary 获取维修申请详情(包含对应附件)
     * @request GET:/blade-tpm/repair-apply/get-apply-detail
     * @secure
     */
    repairApplyGetApplyDetail: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RRepairApplyDetailVO, void>({
        path: `/blade-tpm/repair-apply/get-apply-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修申请
     * @name RepairApplyGetApplyFile
     * @summary 查看申请附件接口
     * @request GET:/blade-tpm/repair-apply/get-apply-file
     * @secure
     */
    repairApplyGetApplyFile: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RRepairFileVO, void>({
        path: `/blade-tpm/repair-apply/get-apply-file`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修申请
     * @name RepairApplyImplementRepairApply
     * @summary 确认维修申请单
     * @request GET:/blade-tpm/repair-apply/implement-repair-apply
     * @secure
     */
    repairApplyImplementRepairApply: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/repair-apply/implement-repair-apply`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 关键字：申请单号，设备编码，设备名称模糊匹配
     *
     * @tags 维修申请
     * @name RepairApplyQueryRepairApply
     * @summary 根据关键字查询(不分页)
     * @request POST:/blade-tpm/repair-apply/list
     * @secure
     */
    repairApplyQueryRepairApply: (repairApplyLookVO: RepairApplyLookVO, params: RequestParams = {}) =>
      this.request<RListRepairApplyVO, void>({
        path: `/blade-tpm/repair-apply/list`,
        method: 'POST',
        body: repairApplyLookVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询分页
     *
     * @tags 维修申请
     * @name RepairApplyGetPageRepairApply
     * @summary 查询分页
     * @request POST:/blade-tpm/repair-apply/page
     * @secure
     */
    repairApplyGetPageRepairApply: (
      repairApplyLookVO: RepairApplyLookVO,
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
      this.request<RIPageRepairApplyVO, void>({
        path: `/blade-tpm/repair-apply/page`,
        method: 'POST',
        query: query,
        body: repairApplyLookVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询分页
     *
     * @tags 维修申请
     * @name RepairApplyGetPageRepairApplyForHmi
     * @summary 查询分页
     * @request POST:/blade-tpm/repair-apply/page-hmi
     * @secure
     */
    repairApplyGetPageRepairApplyForHmi: (
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
      this.request<RIPageRepairApplyVO, void>({
        path: `/blade-tpm/repair-apply/page-hmi`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修申请
     * @name RepairApplyRApplyPer
     * @summary 资源管理-保养计划handler
     * @request POST:/blade-tpm/repair-apply/r-apply-per
     * @secure
     */
    repairApplyRApplyPer: (vo: PermissionVerVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/repair-apply/r-apply-per`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修申请
     * @name RepairApplyUpdateRepairApply
     * @summary 编辑维修申请记录
     * @request POST:/blade-tpm/repair-apply/update-repair-apply
     * @secure
     */
    repairApplyUpdateRepairApply: (repairApplyUpdateVO: RepairApplyUpdateVO, params: RequestParams = {}) =>
      this.request<RRepairApply, void>({
        path: `/blade-tpm/repair-apply/update-repair-apply`,
        method: 'POST',
        body: repairApplyUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修记录
     * @name RepairRecordCompleteRepair
     * @summary 完成维修
     * @request GET:/blade-tpm/repair-record/complete
     * @secure
     */
    repairRecordCompleteRepair: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RRepairRecordVO, void>({
        path: `/blade-tpm/repair-record/complete`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修记录
     * @name RepairRecordCreateRepairApply
     * @summary 新增维修记录
     * @request POST:/blade-tpm/repair-record/create-repair-record
     * @secure
     */
    repairRecordCreateRepairApply: (repairRecordAddVO: RepairRecordAddVO, params: RequestParams = {}) =>
      this.request<RRepairRecord, void>({
        path: `/blade-tpm/repair-record/create-repair-record`,
        method: 'POST',
        body: repairRecordAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修记录
     * @name RepairRecordExportRecord
     * @summary 导出维修记录
     * @request POST:/blade-tpm/repair-record/export-record
     * @secure
     */
    repairRecordExportRecord: (repairRecordExportVO: RepairRecordExportVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-tpm/repair-record/export-record`,
        method: 'POST',
        body: repairRecordExportVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 包含对应附件和备品配件
     *
     * @tags 维修记录
     * @name RepairRecordGetApplyDetail
     * @summary 获取维修记录详情
     * @request GET:/blade-tpm/repair-record/get-record-detail
     * @secure
     */
    repairRecordGetApplyDetail: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RRepairRecordDetailVO, void>({
        path: `/blade-tpm/repair-record/get-record-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 根据设备id查询关联的设备维修记录
     *
     * @tags 维修记录
     * @name RepairRecordGetRecordByDeviceId
     * @summary 设备履历关联维修记录接口
     * @request GET:/blade-tpm/repair-record/get-record-device
     * @secure
     */
    repairRecordGetRecordByDeviceId: (
      query: {
        /** deviceId */
        deviceId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListRepairRecordVO, void>({
        path: `/blade-tpm/repair-record/get-record-device`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修记录
     * @name RepairRecordGetRecordFile
     * @summary 查看维修记录附件接口
     * @request GET:/blade-tpm/repair-record/get-record-file
     * @secure
     */
    repairRecordGetRecordFile: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RApplyRecordMaterialVO, void>({
        path: `/blade-tpm/repair-record/get-record-file`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修记录
     * @name RepairRecordImplementRepairRecord
     * @summary 确认维修申请记录单
     * @request GET:/blade-tpm/repair-record/implement-repair-record
     * @secure
     */
    repairRecordImplementRepairRecord: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tpm/repair-record/implement-repair-record`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 关键词,维修单号，申请单号，设备编码，设备名称模糊匹配
     *
     * @tags 维修记录
     * @name RepairRecordQueryRepairApply
     * @summary 维修记录查询根据关键字查询(不分页)
     * @request POST:/blade-tpm/repair-record/list
     * @secure
     */
    repairRecordQueryRepairApply: (repairRecordLookVO: RepairRecordLookVO, params: RequestParams = {}) =>
      this.request<RListRepairRecordVO, void>({
        path: `/blade-tpm/repair-record/list`,
        method: 'POST',
        body: repairRecordLookVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询分页
     *
     * @tags 维修记录
     * @name RepairRecordGetPageRepairApply
     * @summary 维修记录查询分页
     * @request POST:/blade-tpm/repair-record/page
     * @secure
     */
    repairRecordGetPageRepairApply: (
      repairRecordLookVO: RepairRecordLookVO,
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
      this.request<RIPageRepairRecordVO, void>({
        path: `/blade-tpm/repair-record/page`,
        method: 'POST',
        query: query,
        body: repairRecordLookVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 维修记录
     * @name RepairRecordUpdateRepairApply
     * @summary 编辑维修记录
     * @request POST:/blade-tpm/repair-record/update-repair-record
     * @secure
     */
    repairRecordUpdateRepairApply: (repairRecordUpdateVO: RepairRecordUpdateVO, params: RequestParams = {}) =>
      this.request<RRepairRecord, void>({
        path: `/blade-tpm/repair-record/update-repair-record`,
        method: 'POST',
        body: repairRecordUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 统计分析
     * @name TpmStatisticsGetMaintainTypeStatistics
     * @summary 保养/维修-类型次数/时间占比
     * @request POST:/blade-tpm/statistics/by-count
     * @secure
     */
    tpmStatisticsGetMaintainTypeStatistics: (queryVO: MaintainAnalysisQueryVO, params: RequestParams = {}) =>
      this.request<RMaintainTypeStatisticsVO, void>({
        path: `/blade-tpm/statistics/by-count`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 统计分析
     * @name TpmStatisticsGetMaintainTimeStatistics
     * @summary 保养/维修-时间/次数统计
     * @request POST:/blade-tpm/statistics/by-time
     * @secure
     */
    tpmStatisticsGetMaintainTimeStatistics: (queryVO: MaintainAnalysisQueryVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVOString, void>({
        path: `/blade-tpm/statistics/by-time`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 统计分析
     * @name TpmStatisticsGetMaintainOrderCount
     * @summary 获取保养/维修单数量详情
     * @request POST:/blade-tpm/statistics/get-order-count
     * @secure
     */
    tpmStatisticsGetMaintainOrderCount: (queryVO: MaintainAnalysisQueryVO, params: RequestParams = {}) =>
      this.request<RMaintainOrderCountVO, void>({
        path: `/blade-tpm/statistics/get-order-count`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 统计分析
     * @name TpmStatisticsGetMttrOrMtbfTrend
     * @summary mttr/mtbf趋势
     * @request POST:/blade-tpm/statistics/mttr-or-mtbf-trend
     * @secure
     */
    tpmStatisticsGetMttrOrMtbfTrend: (queryVO: MttrOrMtbfTrendQueryVO, params: RequestParams = {}) =>
      this.request<RChartSeriesDataVOString, void>({
        path: `/blade-tpm/statistics/mttr-or-mtbf-trend`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 统计分析
     * @name TpmStatisticsExportMaintainReport
     * @summary 导出统计报表
     * @request POST:/blade-tpm/statistics/report-export
     * @secure
     */
    tpmStatisticsExportMaintainReport: (queryVO: MaintainReportQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-tpm/statistics/report-export`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 统计分析
     * @name TpmStatisticsGetMaintainReportPage
     * @summary 统计报表分页
     * @request POST:/blade-tpm/statistics/report-page
     * @secure
     */
    tpmStatisticsGetMaintainReportPage: (
      queryVO: MaintainReportQueryVO,
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
      this.request<RIPageMaintainReportVO, void>({
        path: `/blade-tpm/statistics/report-page`,
        method: 'POST',
        query: query,
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
