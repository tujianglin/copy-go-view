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

/** AllToolVO */
export interface AllToolVO {
  /** 刀具型号id */
  toolCategoryId?: string;
  /** 刀具型号名称 */
  toolCategoryName?: string;
  /** 刀具编号 */
  toolCode?: string;
  /** 刀具id */
  toolId?: string;
  /** 刀具类型id */
  toolModelId?: string;
  /** 刀具类型名称 */
  toolModelName?: string;
  /** 刀具名称 */
  toolName?: string;
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

/** CommonGroupVO */
export interface CommonGroupVO {
  children?: CommonGroupVO[];
  /** 组编码 */
  code?: string;
  /** 扩展键 */
  extendId?: string;
  /** 组全称 */
  fullName?: string;
  /**
   * 组子类
   * @format int32
   */
  groupCategory?: number;
  /** 组标签 */
  groupTag?: string;
  /** 组别 */
  groupType?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /**
   * 数量
   * @format int32
   */
  itemNum?: number;
  label?: string;
  /** 组名 */
  name?: string;
  /**
   * 节点类型： 0根节点 1默认节点  2常规节点
   * @format int32
   */
  nodeType?: number;
  /** 父主键 */
  parentId?: string;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  value?: string;
}

/** CutAreaStockOutVO */
export interface CutAreaStockOutVO {
  /** 接驳区库位id */
  connectingId?: string;
  /** 刀具库库位编号 */
  locationCode?: string;
  /** 刀位实时刀具类型id */
  toolCategoryId?: string;
  /** 刀位实时刀具编号 */
  toolCode?: string;
  /** 刀位刀具型号id */
  toolModelId?: string;
}

/** CutConnectingAreaSearchVO */
export interface CutConnectingAreaSearchVO {
  /** 刀位实时刀具类型id */
  toolCategoryId?: string;
  /** 刀位实时刀具编号 */
  toolCode?: string;
  /** 刀位刀具型号id */
  toolModelId?: string;
}

/** CutDeviceLiveOfToolVO */
export interface CutDeviceLiveOfToolVO {
  /** 设备id */
  deviceId?: string;
  /** 设备刀位（默认1~40） */
  devicePosition?: string;
  /**
   * 初始寿命
   * @format int32
   */
  initialLife?: number;
  /**
   * 是否绑定刀具： 0 未绑定 1 已绑定
   * @format int32
   */
  isBinding?: number;
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
  /** 刀位实时刀具类型id */
  toolCategoryId?: string;
  /**
   * 刀位实时刀具编号
   * @minLength 0
   * @maxLength 255
   */
  toolCode?: string;
  /** 刀位实时刀具id */
  toolId?: string;
  /**
   * 刀具型号
   * @minLength 0
   * @maxLength 45
   */
  toolModel?: string;
  /** 刀位刀具型号id */
  toolModelId?: string;
  /**
   * 预警值
   * @format int32
   */
  warningValue?: number;
}

/** CutDeviceLiveQueryVO */
export interface CutDeviceLiveQueryVO {
  /** 刀具编号 */
  code?: string;
  /**
   * 寿命状态(1.正常 2.警告 3.报警)
   * @format int32
   */
  lifeState?: number;
  /** 刀位实时刀具类型id */
  toolCategoryId?: string;
  /** 刀位刀具型号id */
  toolModelId?: string;
  /** 工位组Id */
  workStationGroupId?: string;
}

/** CutLibraryRealTimeVO */
export interface CutLibraryRealTimeVO {
  /**
   * 初始寿命
   * @format int32
   */
  initialLife?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /**
   * 寿命状态(1.正常 2.异常 3.预警)
   * @format int32
   */
  lifeState?: number;
  /** 库位编号 */
  locationCode?: string;
  /** 库位id */
  locationId?: string;
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
   * 是否出库  0 否  1 是
   * @format int32
   */
  stockOut?: number;
  /** 刀具类型 */
  toolCategory?: string;
  /** 刀具类型id */
  toolCategoryId?: string;
  /** 刀具编号 */
  toolCode?: string;
  /** 刀具id */
  toolId?: string;
  /** 刀具型号 */
  toolModel?: string;
  /** 刀位刀具型号id */
  toolModelId?: string;
  /**
   * 预警值
   * @format int32
   */
  warningValue?: number;
}

/** CutLibrarySearchVO */
export interface CutLibrarySearchVO {
  /**
   * 寿命状态(1.正常 2.异常 3.预警)
   * @format int32
   */
  lifeState?: number;
  /** 刀位实时刀具类型id */
  toolCategoryId?: string;
  /** 刀位实时刀具编号 */
  toolCode?: string;
  /** 刀位刀具型号id */
  toolModelId?: string;
}

/** CutRelationAreaSearchVO */
export interface CutRelationAreaSearchVO {
  /** 刀位实时刀具类型id */
  toolCategoryId?: string;
  /** 刀位实时刀具编号 */
  toolCode?: string;
  /** 刀位刀具型号id */
  toolModelId?: string;
  /**
   * 出入库类型：1 出库 2 入库
   * @format int32
   */
  type?: number;
}

/** CutStockInAreaVO */
export interface CutStockInAreaVO {
  /** 接驳库区id */
  areaId?: string;
  /**
   * 初始寿命
   * @format int32
   */
  initialLife?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /** 库位号（默认1~16） */
  locationCode?: string;
  /** 接驳区库位id */
  locationId?: string;
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
  /** 刀具类型 */
  toolCategory?: string;
  /** 刀具类型id */
  toolCategoryId?: string;
  /** 刀具编号 */
  toolCode?: string;
  /** 刀具id */
  toolId?: string;
  /** 刀具型号 */
  toolModel?: string;
  /** 刀具型号Id */
  toolModelId?: string;
  /**
   * 预警值
   * @format int32
   */
  warningValue?: number;
}

/** IdsVO */
export interface IdsVO {
  ids?: string[];
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

/** SwitchDTO */
export interface SwitchDTO {
  /** 参数值：false 手动 true 自动 */
  paramValue?: string;
}

/** ToolChangeRecordEdgeVO */
export interface ToolChangeRecordEdgeVO {
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
  /** 记录ID */
  recordId?: string;
  /** 剩余寿命 */
  remainingLife?: number;
  /** 刀沿 */
  toolEdge?: string;
  /** 已用寿命 */
  usedLife?: number;
  /** 预警值 */
  warningValue?: number;
}

/** ToolChangeRecordQueryVO */
export interface ToolChangeRecordQueryVO {
  /** 刀具编号 */
  code?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 刀具类型ID */
  toolCategoryId?: string;
}

/** ToolChangeRecordVO */
export interface ToolChangeRecordVO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 操作人 */
  employeeId?: string;
  /** 操作人姓名 */
  employeeName?: string;
  /** 主键 */
  id?: string;
  /**
   * 操作类型(1.装刀 0.卸刀)
   * @minLength 0
   * @maxLength 45
   */
  operationType?: string;
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
  /** 刀具换刀记录刀沿 */
  toolChangeRecordEdgeVoList?: ToolChangeRecordEdgeVO[];
  /**
   * 刀具编号
   * @minLength 0
   * @maxLength 45
   */
  toolCode?: string;
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
   * 使用状态(1.已装刀 0.已卸刀)
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

/** ToolDischargeVO */
export interface ToolDischargeVO {
  employeeId?: string;
  ids?: string[];
}

/** ToolEdgeAddVO */
export interface ToolEdgeAddVO {
  /** 初始寿命 */
  initialLife?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /** 剩余寿命 */
  remainingLife?: number;
  /** 刀沿号 */
  toolEdge?: string;
  /** 预警值 */
  warningValue?: number;
}

/** ToolEdgeUpdateVO */
export interface ToolEdgeUpdateVO {
  /** ID */
  id?: string;
  /** 初始寿命 */
  initialLife?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /** 剩余寿命 */
  remainingLife?: number;
  /** 刀沿号 */
  toolEdge?: string;
  /** 预警值 */
  warningValue?: number;
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

/** ToolManageEquipmentVO */
export interface ToolManageEquipmentVO {
  /** 操作人 */
  employeeId?: string;
  /** id */
  id?: string;
  /** 刀库 */
  toolLib?: string;
  /**
   * 机床刀位
   * @format int32
   */
  toolPosition?: number;
  /** 工位Id */
  workstationId?: string;
}

/** ToolManageSaveVO */
export interface ToolManageSaveVO {
  /** 刀具编号 */
  code?: string;
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
  /** 刀具刀沿信息 */
  toolEdgeAddVoList?: ToolEdgeAddVO[];
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
   * 刀位
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
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** ToolManageUpdateVO */
export interface ToolManageUpdateVO {
  /** id */
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
  /** 刀具刀沿信息 */
  toolEdgeUpdateVoList?: ToolEdgeUpdateVO[];
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

/** ToolModelAddVO */
export interface ToolModelAddVO {
  /** 刀具型号 */
  model?: string;
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
  /** 刀沿信息 */
  toolModelEdgeAddVoList?: ToolModelEdgeAddVO[];
  /**
   * 刀具前缀编号
   * @minLength 0
   * @maxLength 45
   */
  toolPrefixCode?: string;
}

/** ToolModelEdgeAddVO */
export interface ToolModelEdgeAddVO {
  /** 初始寿命 */
  initialLife?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /** 刀沿号 */
  toolEdge?: string;
  /** 预警值 */
  warningValue?: number;
}

/** ToolModelEdgeSaveVO */
export interface ToolModelEdgeSaveVO {
  /** 刀沿信息 */
  toolModelEdgeAddVoList?: ToolModelEdgeAddVO[];
  /** 刀具型号id */
  toolModelId?: string;
}

/** ToolModelEdgeUpdateVO */
export interface ToolModelEdgeUpdateVO {
  /** ID */
  id?: string;
  /** 初始寿命 */
  initialLife?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /** 预警值 */
  warningValue?: number;
}

/** ToolModelEdgeVO */
export interface ToolModelEdgeVO {
  /** 主键 */
  id?: string;
  /** 初始寿命 */
  initialLife?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /** 刀沿 */
  toolEdge?: string;
  /** 刀具型号id */
  toolModelId?: string;
  /** 预警值 */
  warningValue?: number;
}

/** ToolModelUpdateVO */
export interface ToolModelUpdateVO {
  /** 主键ID */
  id?: string;
  /** 刀具型号 */
  model?: string;
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
  /** 刀沿信息 */
  toolModelEdgeAddVoList?: ToolModelEdgeAddVO[];
  /**
   * 刀具前缀编号
   * @minLength 0
   * @maxLength 45
   */
  toolPrefixCode?: string;
}

/** ToolModelVO */
export interface ToolModelVO {
  /** 主键 */
  id?: string;
  /** 刀具型号 */
  model?: string;
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
  /** 刀具类型 */
  toolCategory?: string;
  /** 刀具类型id */
  toolCategoryId?: string;
  /** 刀沿信息 */
  toolModelEdgeVoList?: ToolModelEdgeVO[];
  /** 刀具前缀编号 */
  toolPrefixCode?: string;
}

/** ToolParameterVO */
export interface ToolParameterVO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 创建人 */
  createUserName?: string;
  /** 主键 */
  id?: string;
  /**
   * 是否修改 1-是 0-否
   * @format int32
   */
  isUpdate?: number;
  /**
   * 参数编号
   * @minLength 0
   * @maxLength 45
   */
  toolParameterCode?: string;
  /**
   * 参数名称
   * @minLength 0
   * @maxLength 45
   */
  toolParameterName?: string;
  /**
   * 参数单位
   * @minLength 0
   * @maxLength 45
   */
  toolParameterUnit?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** 更新人名称 */
  updateUserName?: string;
}

/** ToolQueryVO */
export interface ToolQueryVO {
  /** 刀具编号 */
  code?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /**
   * 寿命状态(1.正常 2.警告 3.报警)
   * @format int32
   */
  lifeState?: number;
  /** 刀具类型id */
  toolCategoryId?: string;
  /** 刀具型号id */
  toolModelId?: string;
  /** 机床刀位 */
  toolPosition?: string;
  /**
   * 使用状态(2.新增 1.已装刀 0.已卸刀)
   * @format int32
   */
  useState?: number;
  /** 工位编号 */
  workstationCode?: string;
}

/**
 * CutConnectingAreaVo对象
 * 接驳区库位刀具实时表
 */
export interface CutConnectingAreaVo {
  /** 库区id */
  areaId?: string;
  /** 主键 */
  id?: string;
  /**
   * 初始寿命
   * @format int32
   */
  initialLife?: number;
  /**
   * 是否绑定刀具： 0 未绑定 1 已绑定
   * @format int32
   */
  isBinding?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /** 库位编号（默认1~16） */
  locationCode?: string;
  /** 库位id */
  locationId?: string;
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
  /** 刀具类型 */
  toolCategory?: string;
  /** 刀具类型id */
  toolCategoryId?: string;
  /** 刀具编号 */
  toolCode?: string;
  /** 刀具id */
  toolId?: string;
  /** 刀具型号 */
  toolModel?: string;
  /** 刀具型号id */
  toolModelId?: string;
  /**
   * 预警值
   * @format int32
   */
  warningValue?: number;
}

/**
 * CutRelationAreaVo对象
 * 接驳区库位与刀具关系表
 */
export interface CutRelationAreaVo {
  /** 库区id */
  areaId?: string;
  /** 主键 */
  id?: string;
  /**
   * 初始寿命
   * @format int32
   */
  initialLife?: number;
  /**
   * 是否绑定刀具： 0 未绑定 1 已绑定
   * @format int32
   */
  isBinding?: number;
  /**
   * 是否执行：0 否 1 是
   * @format int32
   */
  isImplement?: number;
  /**
   * 寿命计数方式(1.按次数 2.按时间)
   * @format int32
   */
  lifeCountMethod?: number;
  /** 库位编号（默认1~16） */
  locationCode?: string;
  /** 库位id */
  locationId?: string;
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
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
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
  /** 刀具类型 */
  toolCategory?: string;
  /** 刀具类型id */
  toolCategoryId?: string;
  /** 刀具编号 */
  toolCode?: string;
  /** 刀具id */
  toolId?: string;
  /** 刀具型号 */
  toolModel?: string;
  /** 刀具型号id */
  toolModelId?: string;
  /**
   * 出入库类型：1 出库 2 入库
   * @format int32
   */
  type?: number;
  /**
   * 预警值
   * @format int32
   */
  warningValue?: number;
}

/** IPage«AllToolVO» */
export interface IPageAllToolVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AllToolVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CutConnectingAreaVo对象» */
export interface IPageCutConnectingAreaVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CutConnectingAreaVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CutDeviceLiveOfToolVO» */
export interface IPageCutDeviceLiveOfToolVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CutDeviceLiveOfToolVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CutLibraryRealTimeVO» */
export interface IPageCutLibraryRealTimeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CutLibraryRealTimeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ToolChangeRecordVO» */
export interface IPageToolChangeRecordVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ToolChangeRecordVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ToolManageVO» */
export interface IPageToolManageVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ToolManageVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ToolModelVO» */
export interface IPageToolModelVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ToolModelVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
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
 * R«CutStockInAreaVO»
 * 返回信息
 */
export interface RCutStockInAreaVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CutStockInAreaVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AllToolVO»»
 * 返回信息
 */
export interface RIPageAllToolVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAllToolVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CutConnectingAreaVo对象»»
 * 返回信息
 */
export interface RIPageCutConnectingAreaVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCutConnectingAreaVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CutDeviceLiveOfToolVO»»
 * 返回信息
 */
export interface RIPageCutDeviceLiveOfToolVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCutDeviceLiveOfToolVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CutLibraryRealTimeVO»»
 * 返回信息
 */
export interface RIPageCutLibraryRealTimeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCutLibraryRealTimeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ToolChangeRecordVO»»
 * 返回信息
 */
export interface RIPageToolChangeRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageToolChangeRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ToolManageVO»»
 * 返回信息
 */
export interface RIPageToolManageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageToolManageVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ToolModelVO»»
 * 返回信息
 */
export interface RIPageToolModelVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageToolModelVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CommonGroupVO»»
 * 返回信息
 */
export interface RListCommonGroupVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonGroupVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CutRelationAreaVo对象»»
 * 返回信息
 */
export interface RListCutRelationAreaVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CutRelationAreaVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolCategoryVo对象»»
 * 返回信息
 */
export interface RListToolCategoryVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolCategoryVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolCategoryVo对象»»_1
 * 返回信息
 */
export interface RListToolCategoryVo1 {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolCategoryVo1[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolChangeRecordEdgeVO»»
 * 返回信息
 */
export interface RListToolChangeRecordEdgeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolChangeRecordEdgeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolEdgeVO»»
 * 返回信息
 */
export interface RListToolEdgeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolEdgeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolManageTreeVO对象»»
 * 返回信息
 */
export interface RListToolManageTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolManageTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolManageVO»»
 * 返回信息
 */
export interface RListToolManageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolManageVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolModelEdgeVO»»
 * 返回信息
 */
export interface RListToolModelEdgeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolModelEdgeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolParameterVO»»
 * 返回信息
 */
export interface RListToolParameterVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolParameterVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WarehouseStationVo对象»»
 * 返回信息
 */
export interface RListWarehouseStationVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WarehouseStationVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«SwitchDTO»
 * 返回信息
 */
export interface RSwitchDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: SwitchDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ToolCategoryVo对象»
 * 返回信息
 */
export interface RToolCategoryVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolCategoryVo1;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ToolManageVO»
 * 返回信息
 */
export interface RToolManageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolManageVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ToolModelEdgeVO»
 * 返回信息
 */
export interface RToolModelEdgeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolModelEdgeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ToolModelVO»
 * 返回信息
 */
export interface RToolModelVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolModelVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ToolParameterVO»
 * 返回信息
 */
export interface RToolParameterVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolParameterVO;
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
 * ToolCategoryVo对象
 * 刀具类型
 */
export interface ToolCategoryVo {
  children?: ToolCategoryVo[];
  /** 编码长度 */
  codeLength?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /**
   * 数量
   * @format int32
   */
  itemNum?: number;
  /**
   * 组名
   * @minLength 0
   * @maxLength 45
   */
  name?: string;
  /** 父主键 */
  parentId?: string;
  /**
   * 顺序
   * @format int32
   */
  sort?: number;
  /** 编码规则前缀 */
  toolPrefixCode?: string;
}

/**
 * ToolCategoryVo对象_1
 * 刀具类型
 */
export interface ToolCategoryVo1 {
  /** 编码长度 */
  codeLength?: string;
  /** 主键 */
  id?: string;
  /**
   * 组名
   * @minLength 0
   * @maxLength 45
   */
  name?: string;
  /** 父主键 */
  parentId?: string;
  /**
   * 顺序
   * @format int32
   */
  sort?: number;
  /** 编码规则前缀 */
  toolPrefixCode?: string;
}

/**
 * ToolManageTreeVO对象
 * 刀具管理树对象
 */
export interface ToolManageTreeVO {
  children?: ToolManageTreeVO[];
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  isGroup?: boolean;
  /** 名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
  /** 刀具类型 */
  toolCategory?: string;
  /** 刀具类型id */
  toolCategoryId?: string;
  /** 刀具型号 */
  toolModel?: string;
  /** 刀具型号id */
  toolModelId?: string;
  /**
   * 机床刀位
   * @format int32
   */
  toolPosition?: number;
}

/**
 * WarehouseStationVo对象
 * 库区库位
 */
export interface WarehouseStationVo {
  /** 库区id */
  areaId?: string;
  /** 图片 */
  avatar?: string;
  /** id */
  id?: string;
  /** 备注 */
  remark?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 所属租户 */
  tenantId?: string;
  /** 库区编号 */
  warehouseAreaCode?: string;
  /** 库区名称 */
  warehouseAreaName?: string;
  /** 库位编号 */
  warehouseCode?: string;
  /**
   * 库位名称
   * @minLength 0
   * @maxLength 32
   */
  warehouseName?: string;
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
  bladeTool = {
    /**
     * No description
     *
     * @tags 接驳区实时监控
     * @name CutConnectingAreaPage
     * @summary 接驳区实时监控分页
     * @request POST:/blade-tool/cut-connecting-area/page
     * @secure
     */
    cutConnectingAreaPage: (
      searchVO: CutConnectingAreaSearchVO,
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
      this.request<RIPageCutConnectingAreaVo, void>({
        path: `/blade-tool/cut-connecting-area/page`,
        method: 'POST',
        query: query,
        body: searchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 设备刀位刀具实时表管理
     * @name CutDeviceLiveList
     * @summary 设备刀位刀具实时表列表
     * @request POST:/blade-tool/cut-device-live/list
     * @secure
     */
    cutDeviceLiveList: (
      cutDeviceLiveVO: CutDeviceLiveQueryVO,
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
      this.request<RIPageCutDeviceLiveOfToolVO, void>({
        path: `/blade-tool/cut-device-live/list`,
        method: 'POST',
        query: query,
        body: cutDeviceLiveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 设备刀位刀具实时表管理
     * @name CutDeviceLiveTree
     * @summary 实时设备树形结构
     * @request GET:/blade-tool/cut-device-live/tree
     * @secure
     */
    cutDeviceLiveTree: (params: RequestParams = {}) =>
      this.request<RListCommonGroupVO, void>({
        path: `/blade-tool/cut-device-live/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀库实时监控
     * @name CutLibraryCutStockOut
     * @summary 刀库实时监控-刀具出库
     * @request POST:/blade-tool/cut-library/cut-area-out
     * @secure
     */
    cutLibraryCutStockOut: (cutAreaStockOut: CutAreaStockOutVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-library/cut-area-out`,
        method: 'POST',
        body: cutAreaStockOut,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀库实时监控
     * @name CutLibraryHasDropInto
     * @summary 升降台没有下降到位
     * @request POST:/blade-tool/cut-library/drop-into
     * @secure
     */
    cutLibraryHasDropInto: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-library/drop-into`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 刀库实时监控
     * @name CutLibraryCutLibraryRealTimePage
     * @summary 刀库实时监控分页
     * @request POST:/blade-tool/cut-library/page
     * @secure
     */
    cutLibraryCutLibraryRealTimePage: (
      cutLibrarySearchVO: CutLibrarySearchVO,
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
      this.request<RIPageCutLibraryRealTimeVO, void>({
        path: `/blade-tool/cut-library/page`,
        method: 'POST',
        query: query,
        body: cutLibrarySearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀库实时监控
     * @name CutLibraryToolBackToLibrary
     * @summary 刀具回库
     * @request POST:/blade-tool/cut-library/tool-back-lib
     * @secure
     */
    cutLibraryToolBackToLibrary: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-library/tool-back-lib`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaChangeRunCutModel
     * @summary 刀具调度运行模式：手自动切换
     * @request POST:/blade-tool/cut-relation-area/cut-change-model
     * @secure
     */
    cutRelationAreaChangeRunCutModel: (switchDTO: SwitchDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-relation-area/cut-change-model`,
        method: 'POST',
        body: switchDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 刀具与接驳区库位解绑
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaCutOneKeyUnbinding
     * @summary 一键解绑
     * @request GET:/blade-tool/cut-relation-area/cut-one-key-unbinding
     * @secure
     */
    cutRelationAreaCutOneKeyUnbinding: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-relation-area/cut-one-key-unbinding`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description false 手动 true 自动
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaCutRunModel
     * @summary 获取刀具调度当前运行模式
     * @request GET:/blade-tool/cut-relation-area/cut-running-model
     * @secure
     */
    cutRelationAreaCutRunModel: (params: RequestParams = {}) =>
      this.request<RSwitchDTO, void>({
        path: `/blade-tool/cut-relation-area/cut-running-model`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 刀具出入库关系删除
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaDelCutConnection
     * @summary 删除按钮
     * @request GET:/blade-tool/cut-relation-area/del-cut-connection
     * @secure
     */
    cutRelationAreaDelCutConnection: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-relation-area/del-cut-connection`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入type  0无,1接驳,2刀具,3托盘
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaGetStationCount
     * @summary 获取接驳库位
     * @request GET:/blade-tool/cut-relation-area/get-connection
     * @secure
     */
    cutRelationAreaGetStationCount: (
      query: {
        /**
         * type
         * @format int32
         */
        type: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWarehouseStationVo, void>({
        path: `/blade-tool/cut-relation-area/get-connection`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaGetModelTool
     * @summary 类型获取刀具
     * @request GET:/blade-tool/cut-relation-area/get-tool
     * @secure
     */
    cutRelationAreaGetModelTool: (
      query: {
        /** modelId */
        modelId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListToolManageVO, void>({
        path: `/blade-tool/cut-relation-area/get-tool`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 按type出入库类型：1 出库 2 入库
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaPage
     * @summary 接驳区交换操作出入库接口
     * @request POST:/blade-tool/cut-relation-area/page
     * @secure
     */
    cutRelationAreaPage: (cutRelationAreaSearchVO: CutRelationAreaSearchVO, params: RequestParams = {}) =>
      this.request<RListCutRelationAreaVo, void>({
        path: `/blade-tool/cut-relation-area/page`,
        method: 'POST',
        body: cutRelationAreaSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 接驳区托盘下降
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaStockInCut
     * @summary 刀具入库申请
     * @request GET:/blade-tool/cut-relation-area/stock-in-cut-apply
     * @secure
     */
    cutRelationAreaStockInCut: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-relation-area/stock-in-cut-apply`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 刀具入库
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaCutStockInCutArea
     * @summary 刀具入库
     * @request POST:/blade-tool/cut-relation-area/stock-in-cut-area
     * @secure
     */
    cutRelationAreaCutStockInCutArea: (cutStockInAreaVO: CutStockInAreaVO, params: RequestParams = {}) =>
      this.request<RCutStockInAreaVO, void>({
        path: `/blade-tool/cut-relation-area/stock-in-cut-area`,
        method: 'POST',
        body: cutStockInAreaVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 入库执行
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaStockInCutImplement
     * @summary 刀具入库执行
     * @request GET:/blade-tool/cut-relation-area/stock-in-cut-implement
     * @secure
     */
    cutRelationAreaStockInCutImplement: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-relation-area/stock-in-cut-implement`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 接驳区托盘上升
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaStockOutCut
     * @summary 刀具出库申请
     * @request GET:/blade-tool/cut-relation-area/stock-out-cut-apply
     * @secure
     */
    cutRelationAreaStockOutCut: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-relation-area/stock-out-cut-apply`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 出库执行
     *
     * @tags 接驳区交互操作
     * @name CutRelationAreaStockOutCutImplement
     * @summary 刀具出库执行
     * @request GET:/blade-tool/cut-relation-area/stock-out-cut-implement
     * @secure
     */
    cutRelationAreaStockOutCutImplement: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/cut-relation-area/stock-out-cut-implement`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入toolCategoryVO
     *
     * @tags 刀具类型管理
     * @name ToolCategoryInsert
     * @summary 刀具类型新增
     * @request POST:/blade-tool/tool-category/insert
     * @secure
     */
    toolCategoryInsert: (toolCategoryVO: ToolCategoryVo1, params: RequestParams = {}) =>
      this.request<RToolCategoryVo, void>({
        path: `/blade-tool/tool-category/insert`,
        method: 'POST',
        body: toolCategoryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具类型管理
     * @name ToolCategoryList
     * @summary 刀具类型列表
     * @request GET:/blade-tool/tool-category/list
     * @secure
     */
    toolCategoryList: (params: RequestParams = {}) =>
      this.request<RListToolCategoryVo1, void>({
        path: `/blade-tool/tool-category/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 刀具类型管理
     * @name ToolCategoryRemove
     * @summary 刀具类型删除
     * @request DELETE:/blade-tool/tool-category/remove
     * @secure
     */
    toolCategoryRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-tool/tool-category/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具类型管理
     * @name ToolCategoryTree
     * @summary 刀具类型树
     * @request GET:/blade-tool/tool-category/tree
     * @secure
     */
    toolCategoryTree: (params: RequestParams = {}) =>
      this.request<RListToolCategoryVo, void>({
        path: `/blade-tool/tool-category/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具类型管理
     * @name ToolCategoryUpdateName
     * @summary 刀具类型重命名
     * @request POST:/blade-tool/tool-category/updateName
     * @secure
     */
    toolCategoryUpdateName: (
      query?: {
        /** id */
        id?: string;
        /** newName */
        newName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/tool-category/updateName`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具装卸记录管理
     * @name ToolChangeRecordExportProcessParam
     * @summary 导出装卸刀记录表
     * @request POST:/blade-tool/tool-change-record/excel/export
     * @secure
     */
    toolChangeRecordExportProcessParam: (toolChangeRecordQueryVO: ToolChangeRecordQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-tool/tool-change-record/excel/export`,
        method: 'POST',
        body: toolChangeRecordQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具装卸记录管理
     * @name ToolChangeRecordPage
     * @summary 刀具装卸记录分页
     * @request GET:/blade-tool/tool-change-record/page
     * @secure
     */
    toolChangeRecordPage: (
      query?: {
        /** 刀具编号 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 结束时间
         * @format date-time
         */
        endTime?: string;
        /** 选中的列表数据 */
        ids?: string[];
        /** 排序字段 json传递 */
        orderField?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 开始时间
         * @format date-time
         */
        startTime?: string;
        /** 刀具类型ID */
        toolCategoryId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageToolChangeRecordVO, void>({
        path: `/blade-tool/tool-change-record/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具装卸记录管理
     * @name ToolChangeRecordRecordEdgeList
     * @summary 刀具换刀记录刀沿列表
     * @request GET:/blade-tool/tool-change-record/record-edge-list
     * @secure
     */
    toolChangeRecordRecordEdgeList: (
      query: {
        /** 主键 */
        recordId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListToolChangeRecordEdgeVO, void>({
        path: `/blade-tool/tool-change-record/record-edge-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 刀具详情
     *
     * @tags 刀具管理
     * @name ToolManageDetail
     * @summary 刀具详情
     * @request GET:/blade-tool/tool-manage/detail
     * @secure
     */
    toolManageDetail: (
      query: {
        /** 主键 */
        toolId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RToolManageVO, void>({
        path: `/blade-tool/tool-manage/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ToolDischargeVO
     *
     * @tags 刀具管理
     * @name ToolManageDischargeTool
     * @summary 刀具卸刀
     * @request POST:/blade-tool/tool-manage/discharge
     * @secure
     */
    toolManageDischargeTool: (toolDischargeVO: ToolDischargeVO, params: RequestParams = {}) =>
      this.request<RListToolManageVO, void>({
        path: `/blade-tool/tool-manage/discharge`,
        method: 'POST',
        body: toolDischargeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids，employeeId
     *
     * @tags 刀具管理
     * @name ToolManageEquipmentTool
     * @summary 刀具装刀
     * @request POST:/blade-tool/tool-manage/equipment
     * @secure
     */
    toolManageEquipmentTool: (toolManageEquipmentVO: ToolManageEquipmentVO, params: RequestParams = {}) =>
      this.request<RToolManageVO, void>({
        path: `/blade-tool/tool-manage/equipment`,
        method: 'POST',
        body: toolManageEquipmentVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具管理
     * @name ToolManageExportProcessParam
     * @summary 导出刀具监控表
     * @request POST:/blade-tool/tool-manage/excel/export
     * @secure
     */
    toolManageExportProcessParam: (toolQueryVO: ToolQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-tool/tool-manage/excel/export`,
        method: 'POST',
        body: toolQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具管理
     * @name ToolManageExportTemplate
     * @summary 导出模板
     * @request GET:/blade-tool/tool-manage/export-template
     * @secure
     */
    toolManageExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-tool/tool-manage/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具管理
     * @name ToolManageExportField
     * @summary 设置导入非必填字段
     * @request POST:/blade-tool/tool-manage/import-field
     * @secure
     */
    toolManageExportField: (vo: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/tool-manage/import-field`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具管理
     * @name ToolManageExportCount
     * @summary 设置导入数据最大限制
     * @request GET:/blade-tool/tool-manage/import-size
     * @secure
     */
    toolManageExportCount: (
      query: {
        /**
         * size
         * @format int32
         */
        size: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/tool-manage/import-size`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具管理
     * @name ToolManageImportTools
     * @summary 导入刀具
     * @request POST:/blade-tool/tool-manage/import-tool
     * @secure
     */
    toolManageImportTools: (
      data: {
        /**
         * file
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-tool/tool-manage/import-tool`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具管理
     * @name ToolManageIsExistCodeRule
     * @summary 编码规则是否存在
     * @request GET:/blade-tool/tool-manage/is-exist-code-rule
     * @secure
     */
    toolManageIsExistCodeRule: (
      query?: {
        /** categoryId */
        categoryId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/tool-manage/is-exist-code-rule`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 刀具管理
     * @name ToolManagePage
     * @summary 刀具分页
     * @request GET:/blade-tool/tool-manage/page
     * @secure
     */
    toolManagePage: (
      query?: {
        /** 刀具编号 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 选中的列表数据 */
        ids?: string[];
        /**
         * 寿命状态(1.正常 2.警告 3.报警)
         * @format int32
         */
        lifeState?: number;
        /** 排序字段 json传递 */
        orderField?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /** 刀具类型id */
        toolCategoryId?: string;
        /** 刀具型号id */
        toolModelId?: string;
        /** 机床刀位 */
        toolPosition?: string;
        /**
         * 使用状态(2.新增 1.已装刀 0.已卸刀)
         * @format int32
         */
        useState?: number;
        /** 工位编号 */
        workstationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageToolManageVO, void>({
        path: `/blade-tool/tool-manage/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具管理
     * @name ToolManagePageAllTool
     * @summary 刀具组分页
     * @request GET:/blade-tool/tool-manage/page-all-tool
     * @secure
     */
    toolManagePageAllTool: (
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
      this.request<RIPageAllToolVO, void>({
        path: `/blade-tool/tool-manage/page-all-tool`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 刀具管理
     * @name ToolManageRemove
     * @summary 刀具删除
     * @request DELETE:/blade-tool/tool-manage/remove
     * @secure
     */
    toolManageRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/tool-manage/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 刀具管理
     * @name ToolManageResetTool
     * @summary 刀具重置
     * @request POST:/blade-tool/tool-manage/reset
     * @secure
     */
    toolManageResetTool: (
      query?: {
        /** id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/tool-manage/reset`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入toolManageVO
     *
     * @tags 刀具管理
     * @name ToolManageInsert
     * @summary 刀具新增
     * @request POST:/blade-tool/tool-manage/save
     * @secure
     */
    toolManageInsert: (toolManageSaveVO: ToolManageSaveVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/tool-manage/save`,
        method: 'POST',
        body: toolManageSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具管理
     * @name ToolManageToolEdgeListByToolId
     * @summary 刀具刀沿列表
     * @request GET:/blade-tool/tool-manage/tool-edge-list
     * @secure
     */
    toolManageToolEdgeListByToolId: (
      query: {
        /** 主键 */
        toolId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListToolEdgeVO, void>({
        path: `/blade-tool/tool-manage/tool-edge-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具管理
     * @name ToolManageTree
     * @summary 树形结构
     * @request GET:/blade-tool/tool-manage/tree
     * @secure
     */
    toolManageTree: (params: RequestParams = {}) =>
      this.request<RListToolManageTreeVO, void>({
        path: `/blade-tool/tool-manage/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入toolManageVO
     *
     * @tags 刀具管理
     * @name ToolManageUpdate
     * @summary 刀具修改
     * @request POST:/blade-tool/tool-manage/update
     * @secure
     */
    toolManageUpdate: (toolManageUpdateVO: ToolManageUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/tool-manage/update`,
        method: 'POST',
        body: toolManageUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description toolModelEdgeSaveVO
     *
     * @tags 刀具型号刀沿管理
     * @name ToolModelEdgeSave
     * @summary 刀具型号刀沿新增
     * @request POST:/blade-tool/tool-model-edge/insert
     * @secure
     */
    toolModelEdgeSave: (toolModelEdgeSaveVO: ToolModelEdgeSaveVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-tool/tool-model-edge/insert`,
        method: 'POST',
        body: toolModelEdgeSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 根据刀具型号获得刀沿列表
     *
     * @tags 刀具型号刀沿管理
     * @name ToolModelEdgeEdgeListByModelId
     * @summary 根据刀具型号获得刀沿列表
     * @request GET:/blade-tool/tool-model-edge/list
     * @secure
     */
    toolModelEdgeEdgeListByModelId: (
      query: {
        /** 主键 */
        toolModelId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListToolModelEdgeVO, void>({
        path: `/blade-tool/tool-model-edge/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 刀具型号刀沿管理
     * @name ToolModelEdgeRemove
     * @summary 刀具型号删除
     * @request DELETE:/blade-tool/tool-model-edge/remove
     * @secure
     */
    toolModelEdgeRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-tool/tool-model-edge/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入toolModelVO
     *
     * @tags 刀具型号刀沿管理
     * @name ToolModelEdgeUpdate
     * @summary 刀具型号刀沿更新
     * @request POST:/blade-tool/tool-model-edge/update
     * @secure
     */
    toolModelEdgeUpdate: (toolModelEdgeUpdateVO: ToolModelEdgeUpdateVO, params: RequestParams = {}) =>
      this.request<RToolModelEdgeVO, void>({
        path: `/blade-tool/tool-model-edge/update`,
        method: 'POST',
        body: toolModelEdgeUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入toolModel
     *
     * @tags 刀具型号管理
     * @name ToolModelDetail
     * @summary 刀具型号详情
     * @request GET:/blade-tool/tool-model/get/{id}
     * @secure
     */
    toolModelDetail: (id: string, params: RequestParams = {}) =>
      this.request<RToolModelVO, void>({
        path: `/blade-tool/tool-model/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入toolModelVO
     *
     * @tags 刀具型号管理
     * @name ToolModelSave
     * @summary 刀具型号新增
     * @request POST:/blade-tool/tool-model/insert
     * @secure
     */
    toolModelSave: (toolModelAddVo: ToolModelAddVO, params: RequestParams = {}) =>
      this.request<RToolModelVO, void>({
        path: `/blade-tool/tool-model/insert`,
        method: 'POST',
        body: toolModelAddVo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 刀具型号管理
     * @name ToolModelPage
     * @summary 刀具型号分页
     * @request GET:/blade-tool/tool-model/page
     * @secure
     */
    toolModelPage: (
      query: {
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
        /** categoryId */
        categoryId: string;
        /** isShowChild */
        isShowChild?: boolean;
        /** keyWord */
        keyWord?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageToolModelVO, void>({
        path: `/blade-tool/tool-model/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 刀具型号管理
     * @name ToolModelRemove
     * @summary 刀具型号删除
     * @request DELETE:/blade-tool/tool-model/remove
     * @secure
     */
    toolModelRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-tool/tool-model/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入toolModelVO
     *
     * @tags 刀具型号管理
     * @name ToolModelUpdate
     * @summary 刀具型号更新
     * @request POST:/blade-tool/tool-model/update
     * @secure
     */
    toolModelUpdate: (toolModelUpdateVO: ToolModelUpdateVO, params: RequestParams = {}) =>
      this.request<RToolModelVO, void>({
        path: `/blade-tool/tool-model/update`,
        method: 'POST',
        body: toolModelUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入toolParameter
     *
     * @tags 刀具参数管理
     * @name ToolParameterDetail
     * @summary 刀具参数详情
     * @request GET:/blade-tool/tool-parameter/get/{id}
     * @secure
     */
    toolParameterDetail: (id: string, params: RequestParams = {}) =>
      this.request<RToolParameterVO, void>({
        path: `/blade-tool/tool-parameter/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 刀具参数管理
     * @name ToolParameterList
     * @summary 刀具参数列表
     * @request GET:/blade-tool/tool-parameter/list
     * @secure
     */
    toolParameterList: (
      query: {
        /** keyWord */
        keyWord: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListToolParameterVO, void>({
        path: `/blade-tool/tool-parameter/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 刀具参数管理
     * @name ToolParameterRemove
     * @summary 刀具参数删除
     * @request DELETE:/blade-tool/tool-parameter/remove
     * @secure
     */
    toolParameterRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-tool/tool-parameter/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入toolParameterVO
     *
     * @tags 刀具参数管理
     * @name ToolParameterSave
     * @summary 刀具参数新增或者编辑
     * @request POST:/blade-tool/tool-parameter/save
     * @secure
     */
    toolParameterSave: (toolParameterVO: ToolParameterVO, params: RequestParams = {}) =>
      this.request<RToolParameterVO, void>({
        path: `/blade-tool/tool-parameter/save`,
        method: 'POST',
        body: toolParameterVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
