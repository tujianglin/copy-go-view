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

/** AndonCallRecordResVO */
export interface AndonCallRecordResVO {
  /** 呼叫人员编号 */
  callEmpCode?: string;
  /** 呼叫人员名称 */
  callEmpName?: string;
  /**
   * 呼叫时间
   * @format date-time
   */
  callTime?: string;
  /**
   * 呼叫总时长(秒)
   * @format int32
   */
  callTotalTime?: number;
  /** 完成人员编号 */
  completeEmpCode?: string;
  /** 完成人员名称 */
  completeEmpName?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 处理人员编号 */
  handEmpCode?: string;
  /** 处理人员名称 */
  handEmpName?: string;
  /**
   * 处理时长
   * @format int32
   */
  handTotalTime?: number;
  /** id */
  id?: string;
  /** 呼叫原因编号 */
  reasonCode?: string;
  /** 呼叫原因名称 */
  reasonName?: string;
  /** 备注 */
  remark?: string;
  /**
   * 响应时间
   * @format date-time
   */
  responseTime?: string;
  /**
   * 响应总时长(秒)
   * @format int32
   */
  responseTotalTime?: number;
  /** 呼叫类型编号 */
  typeCode?: string;
  /** 呼叫类型名称 */
  typeName?: string;
  /** 呼叫工位编号 */
  workstationCode?: string;
  /** 呼叫工位名称 */
  workstationName?: string;
}

/** AndonCallRecordSearchVO */
export interface AndonCallRecordSearchVO {
  /** 呼叫人员集合 */
  callEmpIds?: string[];
  /**
   * 结束呼叫时间
   * @format date-time
   */
  endCallTime?: string;
  /** 处理人员集合 */
  handEmpIds?: string[];
  /** 选中的列表数据 */
  ids?: string[];
  /**
   * 开始呼叫时间
   * @format date-time
   */
  startCallTime?: string;
  /** 呼叫类型集合 */
  typeIds?: string[];
  /** 工位ids */
  workstationIds?: string[];
}

/** AndonConditionSearchVO */
export interface AndonConditionSearchVO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** id集合 */
  ids?: string[];
  /**
   * 查询类型 0:班次 1:非班次
   * @format int32
   */
  queryType?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 0:呼叫时长统计 1:呼叫次数统计 2:平均响应时长统计
   * @format int32
   */
  statisticsType?: number;
  /** 类型id */
  typeId?: string;
  /**
   * 0:工位组统计 1:工位统计
   * @format int32
   */
  workType?: number;
}

/** AndonFinishRecordVO */
export interface AndonFinishRecordVO {
  /** 完工人员编码 */
  completedByCode?: string;
  /** 完工人员id */
  completedById?: string;
  /** 完工人员名称 */
  completedByName?: string;
  /** 安灯记录id */
  id?: string;
}

/** AndonQueryConditionVO */
export interface AndonQueryConditionVO {
  /** 呼叫人员名称 */
  callEmpName?: IdNameDTO[];
  /** 处理人员名称 */
  handEmpName?: IdNameDTO[];
}

/** AndonReasonSaveVO */
export interface AndonReasonSaveVO {
  /** 类型id */
  andonTypeId?: string;
  /** 原因编号 */
  code?: string;
  /** 原因名称 */
  name?: string;
  /** 备注 */
  remark?: string;
}

/** AndonReasonUpdateVO */
export interface AndonReasonUpdateVO {
  /** 主键id */
  id?: string;
  /** 名称 */
  name?: string;
  /** 备注 */
  remark?: string;
}

/** AndonReceiveEditRecordVO */
export interface AndonReceiveEditRecordVO {
  /**
   * 当前状态 1 待接收 2-已接收
   * @format int32
   */
  curStatus?: number;
  /** 处理人员编号 */
  handEmpCode?: string;
  /** 处理人员id */
  handEmpId?: string;
  /** 处理人员名称 */
  handEmpName?: string;
  id?: string;
  /** 安灯呼叫原因 */
  reasonList?: AndonRecordReasonVo[];
  /** 备注 */
  remark?: string;
  /** 安灯类型编号 */
  typeCode?: string;
  /** 安灯类型id */
  typeId?: string;
  /** 安灯类型名称 */
  typeName?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** AndonReceiveRecordVO */
export interface AndonReceiveRecordVO {
  /** 呼叫人员编号 */
  callEmpCode?: string;
  /** 呼叫人员id */
  callEmpId?: string;
  /** 呼叫人员名称 */
  callEmpName?: string;
  /**
   * 呼叫时间(开始时间)
   * @format date-time
   */
  callTime?: string;
  /**
   * 当前状态 1 待接收 2-已接收
   * @format int32
   */
  curStatus?: number;
  /** 处理人员编号 */
  handEmpCode?: string;
  /** 处理人员id */
  handEmpId?: string;
  /** 处理人员名称 */
  handEmpName?: string;
  id?: string;
  /** 安灯呼叫原因 */
  reasonList?: AndonRecordReasonVo[];
  /** 备注 */
  remark?: string;
  /**
   * 响应时间
   * @format date-time
   */
  responseTime?: string;
  /** 安灯类型编号 */
  typeCode?: string;
  /** 安灯类型id */
  typeId?: string;
  /** 安灯类型名称 */
  typeName?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** AndonRecordSearchVO */
export interface AndonRecordSearchVO {
  /**
   * 1 待接收 2 已接收 3 全部
   * @format int32
   */
  andonStatus?: number;
  /** 呼叫人员id */
  callEmpIds?: string[];
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 处理人员id */
  handEmpIds?: string[];
  /**
   * 呼叫时间(开始时间)
   * @format date-time
   */
  startTime?: string;
  /** 呼叫类型id */
  typeId?: string;
  /** 工位ids */
  workstationIds?: string[];
}

/** AndonStatisticalCardVO */
export interface AndonStatisticalCardVO {
  /** 平均响应时长 */
  avgResponseTimeTotal?: string;
  /**
   * 呼叫总次数
   * @format int32
   */
  callCountTotal?: number;
  /** 呼叫总时长 */
  callTimeTotal?: string;
}

/** AndonStatisticalTypeCardVO */
export interface AndonStatisticalTypeCardVO {
  /** 类型id */
  andonTypeId?: string;
  /** 类型名称 */
  andonTypeName?: string;
  /** 平均响应时长 */
  avgResponseTime?: string;
  /**
   * 呼叫次数
   * @format int32
   */
  callCountTotal?: number;
  /** 呼叫时长 */
  callTimeTotal?: string;
  /** 呼叫次数占比 */
  percent?: string;
}

/** AndonStatisticsDateChartVO */
export interface AndonStatisticsDateChartVO {
  xaxis?: string[];
  yaxis?: number[];
}

/** AndonStatisticsSearchVO */
export interface AndonStatisticsSearchVO {
  /** 类型id */
  andonTypeId?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** id集合 */
  ids?: string[];
  /**
   * 查询类型 0:班次 1:日 2:周 3:月
   * @format int32
   */
  queryType?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 0:呼叫时长统计 1:呼叫次数统计 2:平均响应时长统计
   * @format int32
   */
  statisticsType?: number;
  /**
   * 0:工位组统计 1:工位统计
   * @format int32
   */
  workType?: number;
}

/** AndonStatisticsShiftChartVO */
export interface AndonStatisticsShiftChartVO {
  xaxis?: string[];
  yaxis?: ShiftAndonDTO[][];
}

/** AndonStatisticsTableVO */
export interface AndonStatisticsTableVO {
  /** 呼叫人员名称 */
  callEmpName?: string;
  /**
   * 呼叫时间
   * @format date-time
   */
  callTime?: string;
  /**
   * 完成时间
   * @format date-time
   */
  completeTime?: string;
  /**
   * 完成时长
   * @format int32
   */
  completeTimeTotal?: number;
  /** 所属工位组 */
  groupName?: string;
  /** 处理人员 */
  handEmpName?: string;
  /** 呼叫原因名称 */
  reasonName?: string;
  /**
   * 响应时间
   * @format date-time
   */
  responseTime?: string;
  /**
   * 响应时长
   * @format int32
   */
  responseTimeTotal?: number;
  /** 班次名称 */
  shiftName?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** AndonTableSearchVO */
export interface AndonTableSearchVO {
  /** 类型id */
  andonTypeId?: string;
  /** 呼叫人员名称 */
  callEmpIds?: string[];
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 处理人员名称 */
  handEmpIds?: string[];
  /** id集合 */
  ids?: string[];
  /** 班次名称 */
  indexList?: number[];
  /**
   * 查询类型 0:班次 1:非班次
   * @format int32
   */
  queryType?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 0:呼叫时长统计 1:呼叫次数统计 2:平均响应时长统计
   * @format int32
   */
  statisticsType?: number;
  /**
   * 0:工位组统计 1:工位统计
   * @format int32
   */
  workType?: number;
}

/** AndonTableStatisticalVO */
export interface AndonTableStatisticalVO {
  /**
   * 呼叫总次数
   * @format int32
   */
  callTimeCount?: number;
  /** 呼叫时长 */
  callTimeTotal?: string;
  /** 平均响应时长 */
  responseTimeTotal?: string;
  /** 呼叫类型编号 */
  typeCode?: string;
  /** 呼叫类型id */
  typeId?: string;
  /** 呼叫类型名称 */
  typeName?: string;
}

/** AndonTypeDetailVO */
export interface AndonTypeDetailVO {
  /** 编号 */
  code?: string;
  /** 设备类型编码 */
  deviceCodes?: string;
  /** 设备类型id */
  deviceIds?: string;
  /** 设备类型名称 */
  deviceNames?: string;
  /** 主键id */
  id?: string;
  /** 名称 */
  name?: string;
  /** 备注 */
  remark?: string;
}

/** AndonTypeSaveVO */
export interface AndonTypeSaveVO {
  /** 安灯类型编号 */
  code?: string;
  /** 设备类型id集合 */
  deviceTypeIds?: string[];
  /**
   * 安灯类型名称
   * @minLength 0
   * @maxLength 64
   */
  name?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 64
   */
  remark?: string;
}

/** AndonTypeUpdateVO */
export interface AndonTypeUpdateVO {
  /** 设备类型id集合 */
  deviceTypeIds?: string[];
  /** 主键id */
  id?: string;
  /** 名称 */
  name?: string;
  /** 备注 */
  remark?: string;
}

/** AndonTypeVO */
export interface AndonTypeVO {
  /**
   * 绑定的机器类型数量
   * @format int32
   */
  bindingCount?: number;
  /** 安灯类型编号 */
  code?: string;
  /** 主键id */
  id?: string;
  /** 安灯类型名称 */
  name?: string;
  /** 安灯类型备注 */
  remark?: string;
}

/** BindingDeviceTypeVO */
export interface BindingDeviceTypeVO {
  /** 机器类型编号 */
  code?: string;
  /** 机器类型id */
  id?: string;
  /** 机器类型名称 */
  name?: string;
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

/** EmployeeDTO */
export interface EmployeeDTO {
  account?: string;
  avatar?: string;
  code?: string;
  /**
   * 部门主管 ：1 是 0 否
   * @format int32
   */
  departmentHead?: number;
  email?: string;
  employeeDeptId?: string;
  /** @format date-time */
  hireDate?: string;
  id?: string;
  jobNumber?: string;
  organizationId?: string;
  organizationName?: string;
  phone?: string;
  pinCode?: string;
  postId?: string;
  realName?: string;
  /** @format int32 */
  status?: number;
}

/** HmiAndonVO */
export interface HmiAndonVO {
  /**
   * 当前状态 1待接收（红色） 2-已接收（黄色）
   * @format int32
   */
  curStatus?: number;
  /** 安灯记录id */
  id?: string;
  /** 安灯类型编号 */
  typeCode?: string;
  /** 安灯类型id */
  typeId?: string;
  /** 安灯类型名称 */
  typeName?: string;
}

/** HmiLoginUserBindWorkstationVO */
export interface HmiLoginUserBindWorkstationVO {
  /** 当前状态 1待接收（红色） 2-已接收（黄色） */
  curStatus?: number[];
  /** 工位编码 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** IdNameDTO */
export interface IdNameDTO {
  /** id */
  id?: string;
  /** name */
  name?: string;
}

/** IdsVO */
export interface IdsVO {
  ids?: string[];
}

/** ShiftAndonDTO */
export interface ShiftAndonDTO {
  /**
   * 班次序号
   * @format int32
   */
  shiftIndex?: number;
  /** 班次x */
  shiftName?: string;
  /**
   * 数据
   * @format int32
   */
  total?: number;
}

/** WeekStartEndVO */
export interface WeekStartEndVO {
  /**
   * 结束时间
   * @format date
   */
  end?: string;
  /**
   * 开始时间
   * @format date
   */
  start?: string;
}

/**
 * AndonReasonVo对象
 * 安灯原因表
 */
export interface AndonReasonVo {
  /** 安灯类型id */
  andonTypeId?: string;
  /**
   * 安灯原因编号
   * @minLength 0
   * @maxLength 64
   */
  code?: string;
  /** 主键 */
  id?: string;
  /**
   * 安灯原因名称
   * @minLength 0
   * @maxLength 64
   */
  name?: string;
  /**
   * 安灯原因备注
   * @minLength 0
   * @maxLength 64
   */
  remark?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
}

/**
 * AndonRecordReasonVo对象
 * 记录关联原因表
 */
export interface AndonRecordReasonVo {
  /** 主键 */
  id?: string;
  /**
   * 安灯原因编号
   * @minLength 0
   * @maxLength 200
   */
  reasonCode?: string;
  /** 安灯原因id */
  reasonId?: string;
  /**
   * 安灯原因名称
   * @minLength 0
   * @maxLength 200
   */
  reasonName?: string;
  /** 安灯记录id */
  recordId?: string;
}

/**
 * AndonRecordVo对象
 * 安灯原因表
 */
export interface AndonRecordVo {
  /** 工位头像 */
  avatar?: string;
  /**
   * 呼叫人员编号
   * @minLength 0
   * @maxLength 64
   */
  callEmpCode?: string;
  /** 呼叫人员id */
  callEmpId?: string;
  /**
   * 呼叫人员名称
   * @minLength 0
   * @maxLength 64
   */
  callEmpName?: string;
  /**
   * 呼叫时间(开始时间)
   * @format date-time
   */
  callTime?: string;
  /**
   * 完成人员编号
   * @minLength 0
   * @maxLength 64
   */
  completeEmpCode?: string;
  /** 完成人员id */
  completeEmpId?: string;
  /**
   * 完成人员名称
   * @minLength 0
   * @maxLength 64
   */
  completeEmpName?: string;
  /**
   * 当前状态 1-待接收 2-已接收
   * @format int32
   */
  curStatus?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 处理人员编号
   * @minLength 0
   * @maxLength 64
   */
  handEmpCode?: string;
  /** 处理人员id */
  handEmpId?: string;
  /**
   * 处理人员名称
   * @minLength 0
   * @maxLength 64
   */
  handEmpName?: string;
  /** 主键 */
  id?: string;
  /** 呼叫原因 */
  reasons?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 64
   */
  remark?: string;
  /**
   * 响应时间
   * @format date-time
   */
  responseTime?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /**
   * 安灯类型编号
   * @minLength 0
   * @maxLength 64
   */
  typeCode?: string;
  /** 安灯类型id */
  typeId?: string;
  /**
   * 安灯类型名称
   * @minLength 0
   * @maxLength 64
   */
  typeName?: string;
  /**
   * 工位编号
   * @minLength 0
   * @maxLength 64
   */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /**
   * 工位名称
   * @minLength 0
   * @maxLength 64
   */
  workstationName?: string;
}

/** IPage«AndonCallRecordResVO» */
export interface IPageAndonCallRecordResVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AndonCallRecordResVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«AndonReasonVo对象» */
export interface IPageAndonReasonVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AndonReasonVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«AndonRecordVo对象» */
export interface IPageAndonRecordVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AndonRecordVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«AndonStatisticsTableVO» */
export interface IPageAndonStatisticsTableVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AndonStatisticsTableVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«AndonTableStatisticalVO» */
export interface IPageAndonTableStatisticalVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AndonTableStatisticalVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«BindingDeviceTypeVO» */
export interface IPageBindingDeviceTypeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: BindingDeviceTypeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/**
 * R«AndonQueryConditionVO»
 * 返回信息
 */
export interface RAndonQueryConditionVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonQueryConditionVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AndonReasonVo对象»
 * 返回信息
 */
export interface RAndonReasonVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonReasonVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AndonReceiveRecordVO»
 * 返回信息
 */
export interface RAndonReceiveRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonReceiveRecordVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AndonStatisticalCardVO»
 * 返回信息
 */
export interface RAndonStatisticalCardVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonStatisticalCardVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AndonStatisticsDateChartVO»
 * 返回信息
 */
export interface RAndonStatisticsDateChartVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonStatisticsDateChartVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AndonStatisticsShiftChartVO»
 * 返回信息
 */
export interface RAndonStatisticsShiftChartVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonStatisticsShiftChartVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AndonTypeDetailVO»
 * 返回信息
 */
export interface RAndonTypeDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonTypeDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«AndonTypeVO»
 * 返回信息
 */
export interface RAndonTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonTypeVO;
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
 * R«EmployeeDTO»
 * 返回信息
 */
export interface REmployeeDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: EmployeeDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AndonCallRecordResVO»»
 * 返回信息
 */
export interface RIPageAndonCallRecordResVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAndonCallRecordResVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AndonReasonVo对象»»
 * 返回信息
 */
export interface RIPageAndonReasonVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAndonReasonVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AndonRecordVo对象»»
 * 返回信息
 */
export interface RIPageAndonRecordVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAndonRecordVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AndonStatisticsTableVO»»
 * 返回信息
 */
export interface RIPageAndonStatisticsTableVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAndonStatisticsTableVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AndonTableStatisticalVO»»
 * 返回信息
 */
export interface RIPageAndonTableStatisticalVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAndonTableStatisticalVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«BindingDeviceTypeVO»»
 * 返回信息
 */
export interface RIPageBindingDeviceTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageBindingDeviceTypeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«AndonStatisticalTypeCardVO»»
 * 返回信息
 */
export interface RListAndonStatisticalTypeCardVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonStatisticalTypeCardVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«AndonTypeVO»»
 * 返回信息
 */
export interface RListAndonTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AndonTypeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«BindingDeviceTypeVO»»
 * 返回信息
 */
export interface RListBindingDeviceTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BindingDeviceTypeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«HmiAndonVO»»
 * 返回信息
 */
export interface RListHmiAndonVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiAndonVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«HmiLoginUserBindWorkstationVO»»
 * 返回信息
 */
export interface RListHmiLoginUserBindWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiLoginUserBindWorkstationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WeekStartEndVO»
 * 返回信息
 */
export interface RWeekStartEndVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WeekStartEndVO;
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
  bladeAndon = {
    /**
     * No description
     *
     * @tags 安灯原因表管理
     * @name AndonReasonRemoveReason
     * @summary 删除呼叫原因
     * @request DELETE:/blade-andon/andon-reason
     * @secure
     */
    andonReasonRemoveReason: (vo: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-andon/andon-reason`,
        method: 'DELETE',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯原因表管理
     * @name AndonReasonAddReason
     * @summary 新增安灯呼叫原因
     * @request POST:/blade-andon/andon-reason/add
     * @secure
     */
    andonReasonAddReason: (vo: AndonReasonSaveVO, params: RequestParams = {}) =>
      this.request<RAndonReasonVo, void>({
        path: `/blade-andon/andon-reason/add`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯原因表管理
     * @name AndonReasonPageQuery
     * @summary 分页查询安灯呼叫原因
     * @request POST:/blade-andon/andon-reason/page-query
     * @secure
     */
    andonReasonPageQuery: (
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
        /** typeId */
        typeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageAndonReasonVo, void>({
        path: `/blade-andon/andon-reason/page-query`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯原因表管理
     * @name AndonReasonUpdateReason
     * @summary 编辑安灯呼叫原因
     * @request PUT:/blade-andon/andon-reason/update
     * @secure
     */
    andonReasonUpdateReason: (vo: AndonReasonUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-andon/andon-reason/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description PC安灯接收单个/多个
     *
     * @tags 安灯记录表管理
     * @name AndonRecordBatchReceive
     * @summary 安灯批量接收
     * @request POST:/blade-andon/andon-record/andon-batch-receive
     * @secure
     */
    andonRecordBatchReceive: (ids: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-andon/andon-record/andon-batch-receive`,
        method: 'POST',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description hmi删除安灯待呼叫记录
     *
     * @tags 安灯记录表管理
     * @name AndonRecordDelAndonRecord
     * @summary 删除安灯记录
     * @request GET:/blade-andon/andon-record/andon-del-record
     * @secure
     */
    andonRecordDelAndonRecord: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-andon/andon-record/andon-del-record`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description PC安灯记录详情/HMI安灯记录详情
     *
     * @tags 安灯记录表管理
     * @name AndonRecordAndonDetail
     * @summary 安灯记录详情
     * @request GET:/blade-andon/andon-record/andon-detail
     * @secure
     */
    andonRecordAndonDetail: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RAndonReceiveRecordVO, void>({
        path: `/blade-andon/andon-record/andon-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description HMI编辑安灯待接收记录
     *
     * @tags 安灯记录表管理
     * @name AndonRecordEditReceiveRecord
     * @summary 编辑安灯记录
     * @request POST:/blade-andon/andon-record/andon-edit-record
     * @secure
     */
    andonRecordEditReceiveRecord: (andonReceiveRecordVO: AndonReceiveEditRecordVO, params: RequestParams = {}) =>
      this.request<RAndonReceiveRecordVO, void>({
        path: `/blade-andon/andon-record/andon-edit-record`,
        method: 'POST',
        body: andonReceiveRecordVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description hmi完成安灯呼叫
     *
     * @tags 安灯记录表管理
     * @name AndonRecordFinishAndon
     * @summary 完成安灯记录
     * @request POST:/blade-andon/andon-record/andon-finish-record
     * @secure
     */
    andonRecordFinishAndon: (andonFinishRecordVO: AndonFinishRecordVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-andon/andon-record/andon-finish-record`,
        method: 'POST',
        body: andonFinishRecordVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 手机端/hmi发起安灯呼叫
     *
     * @tags 安灯记录表管理
     * @name AndonRecordInitiateAndonCall
     * @summary 发起安灯呼叫
     * @request POST:/blade-andon/andon-record/andon-initiate-call
     * @secure
     */
    andonRecordInitiateAndonCall: (andonReceiveRecordVO: AndonReceiveRecordVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-andon/andon-record/andon-initiate-call`,
        method: 'POST',
        body: andonReceiveRecordVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description PC安灯接收列表/手机端呼叫列表
     *
     * @tags 安灯记录表管理
     * @name AndonRecordPageReceiveList
     * @summary 安灯接收列表
     * @request POST:/blade-andon/andon-record/andon-page
     * @secure
     */
    andonRecordPageReceiveList: (
      andonRecordSearchVO: AndonRecordSearchVO,
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
      this.request<RIPageAndonRecordVo, void>({
        path: `/blade-andon/andon-record/andon-page`,
        method: 'POST',
        query: query,
        body: andonRecordSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯记录表管理
     * @name AndonRecordCurrentEmployee
     * @summary 当前账号绑定的员工
     * @request GET:/blade-andon/andon-record/current-employee
     * @secure
     */
    andonRecordCurrentEmployee: (params: RequestParams = {}) =>
      this.request<REmployeeDTO, void>({
        path: `/blade-andon/andon-record/current-employee`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯记录表管理
     * @name AndonRecordExportRecord
     * @summary 导出安灯呼叫确认记录
     * @request POST:/blade-andon/andon-record/export-record
     * @secure
     */
    andonRecordExportRecord: (vo: AndonCallRecordSearchVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-andon/andon-record/export-record`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description hmi设备对应安灯记录
     *
     * @tags 安灯记录表管理
     * @name AndonRecordHmiWorkstationLoginAndon
     * @summary hmi工位对应的安灯记录
     * @request GET:/blade-andon/andon-record/hmi-device-andon-records
     * @secure
     */
    andonRecordHmiWorkstationLoginAndon: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListHmiAndonVO, void>({
        path: `/blade-andon/andon-record/hmi-device-andon-records`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯记录表管理
     * @name AndonRecordGetLoginWorkstation
     * @summary hmi安灯首页工位列表
     * @request POST:/blade-andon/andon-record/hmi-login-workstation
     * @secure
     */
    andonRecordGetLoginWorkstation: (workstationIds: string[], params: RequestParams = {}) =>
      this.request<RListHmiLoginUserBindWorkstationVO, void>({
        path: `/blade-andon/andon-record/hmi-login-workstation`,
        method: 'POST',
        body: workstationIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯记录表管理
     * @name AndonRecordPageQueryRecord
     * @summary 安灯呼叫确认记录
     * @request POST:/blade-andon/andon-record/page-query
     * @secure
     */
    andonRecordPageQueryRecord: (
      vo: AndonCallRecordSearchVO,
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
      this.request<RIPageAndonCallRecordResVO, void>({
        path: `/blade-andon/andon-record/page-query`,
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
     * @tags 安灯记录表管理
     * @name AndonRecordPermissionAndon
     * @summary 资源管理-安灯handler
     * @request POST:/blade-andon/andon-record/permission-verification
     * @secure
     */
    andonRecordPermissionAndon: (ids: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-andon/andon-record/permission-verification`,
        method: 'POST',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯统计
     * @name AndonStatisticsAndonQueryCondition
     * @summary 获取表格数据查询条件
     * @request POST:/blade-andon/andon-statistics/andon-query-condition
     * @secure
     */
    andonStatisticsAndonQueryCondition: (vo: AndonConditionSearchVO, params: RequestParams = {}) =>
      this.request<RAndonQueryConditionVO, void>({
        path: `/blade-andon/andon-statistics/andon-query-condition`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯统计
     * @name AndonStatisticsAndonTable
     * @summary 查询表格数据
     * @request POST:/blade-andon/andon-statistics/andon-table
     * @secure
     */
    andonStatisticsAndonTable: (
      vo: AndonTableSearchVO,
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
      this.request<RIPageAndonStatisticsTableVO, void>({
        path: `/blade-andon/andon-statistics/andon-table`,
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
     * @tags 安灯统计
     * @name AndonStatisticsDateChart
     * @summary 获取chart图-按时间
     * @request POST:/blade-andon/andon-statistics/date-chart
     * @secure
     */
    andonStatisticsDateChart: (vo: AndonStatisticsSearchVO, params: RequestParams = {}) =>
      this.request<RAndonStatisticsDateChartVO, void>({
        path: `/blade-andon/andon-statistics/date-chart`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯统计
     * @name AndonStatisticsH5StatisticalCard
     * @summary 统计卡片-h5
     * @request POST:/blade-andon/andon-statistics/h5-statistical
     * @secure
     */
    andonStatisticsH5StatisticalCard: (vo: AndonStatisticsSearchVO, params: RequestParams = {}) =>
      this.request<RListAndonStatisticalTypeCardVO, void>({
        path: `/blade-andon/andon-statistics/h5-statistical`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯统计
     * @name AndonStatisticsShiftChart
     * @summary 获取chart图-按班次
     * @request POST:/blade-andon/andon-statistics/shift-chart
     * @secure
     */
    andonStatisticsShiftChart: (vo: AndonStatisticsSearchVO, params: RequestParams = {}) =>
      this.request<RAndonStatisticsShiftChartVO, void>({
        path: `/blade-andon/andon-statistics/shift-chart`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯统计
     * @name AndonStatisticsStatisticalCard
     * @summary 统计卡片
     * @request POST:/blade-andon/andon-statistics/statistical-card
     * @secure
     */
    andonStatisticsStatisticalCard: (vo: AndonStatisticsSearchVO, params: RequestParams = {}) =>
      this.request<RAndonStatisticalCardVO, void>({
        path: `/blade-andon/andon-statistics/statistical-card`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯统计
     * @name AndonStatisticsTableAndon
     * @summary 统计数据
     * @request POST:/blade-andon/andon-statistics/table-andon
     * @secure
     */
    andonStatisticsTableAndon: (
      vo: AndonStatisticsSearchVO,
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
      this.request<RIPageAndonTableStatisticalVO, void>({
        path: `/blade-andon/andon-statistics/table-andon`,
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
     * @tags 安灯统计
     * @name AndonStatisticsGetWeekTime
     * @summary 获取周的开始结束时间
     * @request POST:/blade-andon/andon-statistics/week-time
     * @secure
     */
    andonStatisticsGetWeekTime: (
      query: {
        /**
         * week
         * @format int32
         */
        week: number;
        /**
         * year
         * @format int32
         */
        year: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RWeekStartEndVO, void>({
        path: `/blade-andon/andon-statistics/week-time`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯类型
     * @name AndonTypeAndonTypeList
     * @summary 安灯类型列表
     * @request GET:/blade-andon/andon-type
     * @secure
     */
    andonTypeAndonTypeList: (
      query: {
        /** keyword */
        keyword: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListAndonTypeVO, void>({
        path: `/blade-andon/andon-type`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯类型
     * @name AndonTypeSaveAndonType
     * @summary 新增安灯类型
     * @request POST:/blade-andon/andon-type
     * @secure
     */
    andonTypeSaveAndonType: (vo: AndonTypeSaveVO, params: RequestParams = {}) =>
      this.request<RAndonTypeVO, void>({
        path: `/blade-andon/andon-type`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯类型
     * @name AndonTypeUpdateAndonType
     * @summary 修改安灯类型
     * @request PUT:/blade-andon/andon-type
     * @secure
     */
    andonTypeUpdateAndonType: (vo: AndonTypeUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-andon/andon-type`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯类型
     * @name AndonTypeRemoveAndonType
     * @summary 删除安灯类型
     * @request DELETE:/blade-andon/andon-type
     * @secure
     */
    andonTypeRemoveAndonType: (
      query: {
        /** typeId */
        typeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-andon/andon-type`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯类型
     * @name AndonTypeAllDeviceTypes
     * @summary 查看当前类型绑定的机器类型
     * @request GET:/blade-andon/andon-type/all-device-types
     * @secure
     */
    andonTypeAllDeviceTypes: (
      query: {
        /** typeId */
        typeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListBindingDeviceTypeVO, void>({
        path: `/blade-andon/andon-type/all-device-types`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯类型
     * @name AndonTypeDetail
     * @summary 安灯类型详情
     * @request GET:/blade-andon/andon-type/detail
     * @secure
     */
    andonTypeDetail: (
      query: {
        /** typeId */
        typeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RAndonTypeDetailVO, void>({
        path: `/blade-andon/andon-type/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯类型
     * @name AndonTypePageDeviceTypes
     * @summary 分页查看当前类型绑定的机器类型
     * @request GET:/blade-andon/andon-type/page-device-types
     * @secure
     */
    andonTypePageDeviceTypes: (
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
        /** typeId */
        typeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageBindingDeviceTypeVO, void>({
        path: `/blade-andon/andon-type/page-device-types`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 安灯类型
     * @name AndonTypeWorkBanding
     * @summary 查看当前工位绑定的机器类型
     * @request GET:/blade-andon/andon-type/work-banding
     * @secure
     */
    andonTypeWorkBanding: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListAndonTypeVO, void>({
        path: `/blade-andon/andon-type/work-banding`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
}
