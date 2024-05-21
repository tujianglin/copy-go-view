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

/** FMSWorkbenchInfoVO */
export interface FMSWorkbenchInfoVO {
  avatar?: string;
  workbenchInfoList?: _[];
  workstationName?: string;
}

/** FmsAlarmVO */
export interface FmsAlarmVO {
  /** 报警号 */
  code?: string;
  /** 报警时间 */
  date?: string;
  /** 报警时间 	 */
  message?: string;
}

/** FmsOrderDetailVO */
export interface FmsOrderDetailVO {
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
  /**
   * 优先级（1，2，3，4）
   * @format int32
   */
  priority?: number;
  /** 工单工序列表 */
  processList?: FmsOrderProcess[];
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

/** FmsOrderProductionStatVO */
export interface FmsOrderProductionStatVO {
  endTime?: string;
  /** @format int32 */
  qualifyNum?: number;
}

/** FmsOrderStatusStatVO */
export interface FmsOrderStatusStatVO {
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

/** FmsOrderVO */
export interface FmsOrderVO {
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
  /** 工单状态 待发布  待加工  加工中  暂停中  暂停  已完成  */
  orderStatusLabel?: string;
  /** 工单类型  1.来料  2.生产 */
  orderType?: string;
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
  /**
   * 优先级（1，2，3，4）
   * @format int32
   */
  priority?: number;
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

/** FmsVO */
export interface FmsVO {
  /** 报警信息 */
  abnormalList?: FmsAbnormalVo[];
  /** 工单信息 */
  fmsOrderVOList?: FmsOrderVO[];
  /** 指令信息 */
  instructionRecordVOList?: FmsInstructionRecordVo[];
}

/** FmsWorkStationProcessVO */
export interface FmsWorkStationProcessVO {
  /** 工位集合 */
  fmsWorkStationVOList?: FmsWorkStationVO[];
  /** 工序ID */
  processId?: string;
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

/** ManualTrayVO */
export interface ManualTrayVO {
  /**
   * 动作类型(1:实际移动,2:数据移动)
   * @format int32
   */
  actionType?: number;
  /** 目标位置编号 */
  endPosition?: string;
  /** 目标工作台号 */
  endStation?: string;
  /**
   * 目标位置类型(1:打标,2:测量,3:清洗,4:装卸,5:加工,6:搬运,7:三坐标,100:库位)
   * @format int32
   */
  endType?: number;
  /** 初始位置编号 */
  startPosition?: string;
  /** 起始工作台编号 */
  startStation?: string;
  /**
   * 起始位置类型(1:打标,2:测量,3:清洗,4:装卸,5:加工,6:搬运,7:三坐标,100:库位)
   * @format int32
   */
  startType?: number;
  /** 托盘编号 */
  trayCode?: string;
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

/** UpSubroutineVO */
export interface UpSubroutineVO {
  /** 文件长度 */
  contentLength?: string;
  contentType?: string;
  /** 上传时间 */
  createTime?: string;
  /** 文件名称 */
  filename?: string;
  /** link */
  link?: string;
  /** 文件的objectKey */
  objectKey?: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  suffix?: string;
}

/**
 * FmsAbnormalVo对象
 * blade_fms_abnormal
 */
export interface FmsAbnormalVo {
  /**
   * 内容
   * @minLength 0
   * @maxLength 65535
   */
  content?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 主键 */
  id?: string;
  /**
   * 提报状态 1-待提报;2-已取消;3-已提报
   * @format int32
   */
  reportState?: number;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /**
   * 所属租户
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
  /**
   * 异常类型
   * @format int32
   */
  type?: number;
  /**
   * 最后更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * FmsInstructionRecordVo对象
 * 指令记录表
 */
export interface FmsInstructionRecordVo {
  /**
   * 异常原因
   * @minLength 0
   * @maxLength 256
   */
  abnormalReason?: string;
  /**
   * 停止标记(0：未停止，1：已停止)
   * @format int32
   */
  changeModel?: number;
  /**
   * 发送时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 目标工作台编号
   * @minLength 0
   * @maxLength 64
   */
  endBench?: string;
  /**
   * 目标位置 目标设备编号
   * @minLength 0
   * @maxLength 64
   */
  endPosition?: string;
  /** 目标位置 目标设备名称 */
  endPositionName?: string;
  /** 主键 */
  id?: string;
  /** 是否装卸站末件 */
  lastLoad?: boolean;
  /**
   * 产生日志
   * @minLength 0
   * @maxLength 65535
   */
  log?: string;
  /**
   * 工单号
   * @minLength 0
   * @maxLength 64
   */
  orderCode?: string;
  /**
   * 工序号
   * @minLength 0
   * @maxLength 64
   */
  processCode?: string;
  /**
   * 程序号
   * @minLength 0
   * @maxLength 64
   */
  programNo?: string;
  /**
   * 程序偏移
   * @minLength 0
   * @maxLength 64
   */
  programOffset?: string;
  /**
   * 信号状态 1-动作执行;2-数据传递
   * @format int32
   */
  signalState?: number;
  /**
   * 起始工作台编号
   * @minLength 0
   * @maxLength 64
   */
  startBench?: string;
  /**
   * 起始位置 起始设备编号
   * @minLength 0
   * @maxLength 64
   */
  startPosition?: string;
  /** 起始位置 起始设备名称 */
  startPositionName?: string;
  /**
   * 状态 0-已生成;1-执行中;2-执行完成;3-执行异常
   * @format int32
   */
  state?: number;
  /** 状态名称 */
  stateName?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /**
   * 所属租户
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
  /**
   * 托盘编号
   * @minLength 0
   * @maxLength 64
   */
  trayCode?: string;
  /**
   * 托盘名称
   * @minLength 0
   * @maxLength 64
   */
  trayName?: string;
  /**
   * 最后更新时间
   * @format date-time
   */
  updateTime?: string;
}

/**
 * FmsOrderProcessFixtureVo对象
 * blade_fms_order_process_fixture
 */
export interface FmsOrderProcessFixtureVo {
  /**
   * 夹具编号
   * @minLength 0
   * @maxLength 255
   */
  fixtureCode?: string;
  /**
   * 夹具组名称
   * @minLength 0
   * @maxLength 255
   */
  fixtureGroupName?: string;
  /**
   * 夹具ID
   * @minLength 0
   * @maxLength 255
   */
  fixtureId?: string;
  /**
   * 夹具名称
   * @minLength 0
   * @maxLength 255
   */
  fixtureName?: string;
  /** 主键 */
  id?: string;
  /** 工单工序ID */
  orderProcessId?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 记录状态
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
   * 托盘号
   * @minLength 0
   * @maxLength 255
   */
  trayCode?: string;
}

/**
 * FmsOrderProcessToolVo对象
 * blade_fms_order_process_tool
 */
export interface FmsOrderProcessToolVo {
  /** 主键 */
  id?: string;
  /** 工单工序ID */
  orderProcessId?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 记录状态
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
   * 刀具类型名称
   * @minLength 0
   * @maxLength 255
   */
  toolCategoryName?: string;
  /**
   * 刀具编号
   * @minLength 0
   * @maxLength 255
   */
  toolCode?: string;
  /**
   * 刀具ID
   * @minLength 0
   * @maxLength 255
   */
  toolId?: string;
  /**
   * 刀具型号名称
   * @minLength 0
   * @maxLength 255
   */
  toolModelName?: string;
}

/**
 * FmsOrderProcessVo对象
 * blade_fms_order_process
 */
export interface FmsOrderProcessVo {
  /**
   * 拆卸工时
   * @format int32
   */
  disassemblyTime?: number;
  /** 夹具信息 */
  fixtureList?: FmsOrderProcessFixtureVo[];
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
  /** 刀具信息 */
  toolList?: FmsOrderProcessToolVo[];
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
 * FmsOrderProcess对象
 * 工单工序信息
 */
export interface FmsOrderProcess {
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
   * 实际结束时间
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
 * FmsProduceComponentVO对象
 * 零件相关
 */
export interface FmsProduceComponentVO {
  /** 当前位置 */
  currentPosition?: string;
  /**
   * 执行工作台
   * @format int32
   */
  currentStation?: number;
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
 * FmsProduceOrderVO对象
 * blade_fms_order
 */
export interface FmsProduceOrderVO {
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
  /** 状态 */
  orderStatus?: string;
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
   * 实际开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 原始状态
   * @format int32
   */
  status?: number;
}

/**
 * FmsProduceProcessVO对象
 * 涉及fms_order关联的多个表
 */
export interface FmsProduceProcessVO {
  /** 工序信息集合 */
  processList?: FmsOrderProcessVo[];
  /** 工单基本信息 */
  produceOrderVO?: FmsProduceOrderVO;
}

/**
 * FmsWarehouseAreaTrayVO对象
 * 设备分析-库区托盘
 */
export interface FmsWarehouseAreaTrayVO {
  /** 托盘状态 */
  availability?: string;
  /** 托盘编号 */
  code?: string;
  /** 零件编号 */
  componentsNumber?: string;
  /** 当前位置 */
  currentPosition?: string;
  /** 工作台编号 */
  currentStation?: string;
  /** 夹具编号 */
  fixtureCode?: string;
  /** 执行工单 */
  orderCode?: string;
  /** 工单id */
  orderId?: string;
  /** 产品状态 */
  partType?: string;
  /** 执行工序 */
  processCode?: string;
  /** 产品编号 */
  productCode?: string;
}

/**
 * FmsWorkStationRecordVo对象
 * blade_fms_work_station_record
 */
export interface FmsWorkStationRecordVo {
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

/** IPage«FmsAlarmVO» */
export interface IPageFmsAlarmVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: FmsAlarmVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«FmsOrderVO» */
export interface IPageFmsOrderVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: FmsOrderVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«FmsProduceOrderVO对象» */
export interface IPageFmsProduceOrderVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: FmsProduceOrderVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«FmsWarehouseAreaTrayVO对象» */
export interface IPageFmsWarehouseAreaTrayVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: FmsWarehouseAreaTrayVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«FmsWorkStationRecordVo对象» */
export interface IPageFmsWorkStationRecordVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: FmsWorkStationRecordVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/**
 * R«FMSWorkbenchInfoVO»
 * 返回信息
 */
export interface RFMSWorkbenchInfoVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FMSWorkbenchInfoVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FmsOrderDetailVO»
 * 返回信息
 */
export interface RFmsOrderDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsOrderDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FmsOrderProcessVo对象»
 * 返回信息
 */
export interface RFmsOrderProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsOrderProcessVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FmsOrderStatusStatVO»
 * 返回信息
 */
export interface RFmsOrderStatusStatVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsOrderStatusStatVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FmsOrderVO»
 * 返回信息
 */
export interface RFmsOrderVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsOrderVO;
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
 * R«FmsVO»
 * 返回信息
 */
export interface RFmsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FmsWorkStationRecordVo对象»
 * 返回信息
 */
export interface RFmsWorkStationRecordVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsWorkStationRecordVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«FmsAlarmVO»»
 * 返回信息
 */
export interface RIPageFmsAlarmVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageFmsAlarmVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«FmsOrderVO»»
 * 返回信息
 */
export interface RIPageFmsOrderVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageFmsOrderVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«FmsProduceOrderVO对象»»
 * 返回信息
 */
export interface RIPageFmsProduceOrderVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageFmsProduceOrderVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«FmsWarehouseAreaTrayVO对象»»
 * 返回信息
 */
export interface RIPageFmsWarehouseAreaTrayVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageFmsWarehouseAreaTrayVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«FmsWorkStationRecordVo对象»»
 * 返回信息
 */
export interface RIPageFmsWorkStationRecordVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageFmsWorkStationRecordVo;
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
 * R«List«FmsOrderProcessFixtureVo对象»»
 * 返回信息
 */
export interface RListFmsOrderProcessFixtureVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsOrderProcessFixtureVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FmsOrderProcessToolVo对象»»
 * 返回信息
 */
export interface RListFmsOrderProcessToolVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsOrderProcessToolVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FmsOrderProcessVo对象»»
 * 返回信息
 */
export interface RListFmsOrderProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsOrderProcessVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FmsOrderProductionStatVO»»
 * 返回信息
 */
export interface RListFmsOrderProductionStatVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsOrderProductionStatVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FmsOrderVO»»
 * 返回信息
 */
export interface RListFmsOrderVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsOrderVO[];
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
 * R«List«FmsWorkStationProcessVO»»
 * 返回信息
 */
export interface RListFmsWorkStationProcessVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsWorkStationProcessVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FmsWorkStationRecordVo对象»»
 * 返回信息
 */
export interface RListFmsWorkStationRecordVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FmsWorkStationRecordVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«long»»
 * 返回信息
 */
export interface RListLong {
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
 * R«UpSubroutineVO»
 * 返回信息
 */
export interface RUpSubroutineVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: UpSubroutineVO;
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

/** 工作台信息 */
export interface _ {
  /** 起始位置 */
  currentPosition?: string;
  /** 工单编号 */
  orderCode?: string;
  /** 产品状态 */
  partType?: string;
  /** 工序号 */
  processCode?: string;
  /**
   * 工序状态
   * @format int32
   */
  processStatus?: number;
  /**
   * 加工进度
   * @format int32
   */
  processingProgress?: number;
  /** 产品编号 */
  productCode?: string;
  /** 产品名称 */
  productName?: string;
  /** 工序程序 */
  programNo?: string;
  /** 目标位置 */
  targetPosition?: string;
  /** 托盘编号 */
  trayCode?: string;
  /** 工作台名称 */
  workbenchName?: string;
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
  bladeFms = {
    /**
     * No description
     *
     * @tags fms-device-analysis-controller
     * @name FmsDeviceAnalysisPageFmsAlarm
     * @summary 查询报警分页
     * @request GET:/blade-fms/device-analysis/alarm/page
     * @secure
     */
    fmsDeviceAnalysisPageFmsAlarm: (
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
        /** workstationId */
        workstationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageFmsAlarmVO, void>({
        path: `/blade-fms/device-analysis/alarm/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fms-device-analysis-controller
     * @name FmsDeviceAnalysisReduction
     * @summary 库区托盘一键还原
     * @request POST:/blade-fms/device-analysis/reduction
     * @secure
     */
    fmsDeviceAnalysisReduction: (
      query?: {
        /** 库区code */
        areaCode?: string;
        /** 库区id */
        areaId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-fms/device-analysis/reduction`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fms-device-analysis-controller
     * @name FmsDeviceAnalysisPageTrayInfoList
     * @summary 获取库区托盘列表
     * @request GET:/blade-fms/device-analysis/tray-info-list
     * @secure
     */
    fmsDeviceAnalysisPageTrayInfoList: (
      query?: {
        /** 库区id */
        areaId?: string;
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
      this.request<RIPageFmsWarehouseAreaTrayVO, void>({
        path: `/blade-fms/device-analysis/tray-info-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fms-device-analysis-controller
     * @name FmsDeviceAnalysisListFmsWorkbenchInfo
     * @summary 查询工作台列表
     * @request GET:/blade-fms/device-analysis/workbench/list
     * @secure
     */
    fmsDeviceAnalysisListFmsWorkbenchInfo: (
      query?: {
        /** workstationId */
        workstationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RFMSWorkbenchInfoVO, void>({
        path: `/blade-fms/device-analysis/workbench/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_fms_abnormal
     * @name FmsAbnormalManualPushData
     * @summary 手动推送fms websocket实时数据
     * @request GET:/blade-fms/fms-abnormal/fms-manual-push
     * @secure
     */
    fmsAbnormalManualPushData: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/blade-fms/fms-abnormal/fms-manual-push`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags blade_fms_abnormal
     * @name FmsAbnormalGetFms
     * @summary 获取fms的工单，指令，报警信息
     * @request GET:/blade-fms/fms-abnormal/fms-real-time-info
     * @secure
     */
    fmsAbnormalGetFms: (params: RequestParams = {}) =>
      this.request<RFmsVO, void>({
        path: `/blade-fms/fms-abnormal/fms-real-time-info`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传参startUp false 关闭 true 开启
     *
     * @tags fms柔性线生产设置管理
     * @name FmsSettingGetSubroutineStatus
     * @summary 获取子程序开关状态
     * @request GET:/blade-fms/fms-setting/get-subroutine-status
     * @secure
     */
    fmsSettingGetSubroutineStatus: (params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-fms/fms-setting/get-subroutine-status`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 无参，根据返回的工位列表进行工位回显
     *
     * @tags fms柔性线生产设置管理
     * @name FmsSettingList
     * @summary 已经开启子程序的工位id集合
     * @request GET:/blade-fms/fms-setting/list
     * @secure
     */
    fmsSettingList: (params: RequestParams = {}) =>
      this.request<RListLong, void>({
        path: `/blade-fms/fms-setting/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传参startUp false 关闭 true 开启
     *
     * @tags fms柔性线生产设置管理
     * @name FmsSettingStartUpSubroutine
     * @summary 启动子程序开关
     * @request GET:/blade-fms/fms-setting/start-up-subroutine
     * @secure
     */
    fmsSettingStartUpSubroutine: (
      query?: {
        /** 子程序开关 false 关闭 true 开启 */
        startUp?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-fms/fms-setting/start-up-subroutine`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 无参
     *
     * @tags fms柔性线生产设置管理
     * @name FmsSettingSubroutineDetail
     * @summary 工位绑定子程序文件
     * @request GET:/blade-fms/fms-setting/subroutine-detail
     * @secure
     */
    fmsSettingSubroutineDetail: (params: RequestParams = {}) =>
      this.request<RUpSubroutineVO, void>({
        path: `/blade-fms/fms-setting/subroutine-detail`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传参UpSubroutineVO
     *
     * @tags fms柔性线生产设置管理
     * @name FmsSettingUploadSubroutine
     * @summary 上传工位子程序文件
     * @request POST:/blade-fms/fms-setting/upload-subroutine
     * @secure
     */
    fmsSettingUploadSubroutine: (upSubroutineVO: UpSubroutineVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-fms/fms-setting/upload-subroutine`,
        method: 'POST',
        body: upSubroutineVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入工位ids
     *
     * @tags fms柔性线生产设置管理
     * @name FmsSettingWorkstationBindSubroutine
     * @summary 工位开启子程序
     * @request POST:/blade-fms/fms-setting/workstation-bind-subroutine
     * @secure
     */
    fmsSettingWorkstationBindSubroutine: (workstationIds: string[], params: RequestParams = {}) =>
      this.request<RListLong, void>({
        path: `/blade-fms/fms-setting/workstation-bind-subroutine`,
        method: 'POST',
        body: workstationIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags fms_order
     * @name FmsOrderCount
     * @summary 工单基础状态信息统计值
     * @request GET:/blade-fms/order/count
     * @secure
     */
    fmsOrderCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-fms/order/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入processId
     *
     * @tags fms_order_process_fixture
     * @name FmsOrderProcessFixtureList
     * @summary 工单工序夹具信息列表
     * @request GET:/blade-fms/order/fixture/list
     * @secure
     */
    fmsOrderProcessFixtureList: (
      query?: {
        /** 工单工序ID */
        processId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFmsOrderProcessFixtureVo, void>({
        path: `/blade-fms/order/fixture/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description false 手动 true 自动
     *
     * @tags fms_order
     * @name FmsOrderGetFmsOnline
     * @summary 获取柔性线当前运行状态
     * @request GET:/blade-fms/order/fms-running-status
     * @secure
     */
    fmsOrderGetFmsOnline: (params: RequestParams = {}) =>
      this.request<RSwitchDTO, void>({
        path: `/blade-fms/order/fms-running-status`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入fmsWorkStationRecord
     *
     * @tags fms_work_station_record
     * @name FmsWorkStationRecordDetail
     * @summary 工单开报工记录详情
     * @request GET:/blade-fms/order/fms-work-station-record/get/{id}
     * @secure
     */
    fmsWorkStationRecordDetail: (id: string, params: RequestParams = {}) =>
      this.request<RFmsWorkStationRecordVo, void>({
        path: `/blade-fms/order/fms-work-station-record/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入fmsWorkStationRecordVO
     *
     * @tags fms_work_station_record
     * @name FmsWorkStationRecordInsert
     * @summary 工单开报工记录新增
     * @request POST:/blade-fms/order/fms-work-station-record/insert
     * @secure
     */
    fmsWorkStationRecordInsert: (fmsWorkStationRecordVO: FmsWorkStationRecordVo, params: RequestParams = {}) =>
      this.request<RFmsWorkStationRecordVo, void>({
        path: `/blade-fms/order/fms-work-station-record/insert`,
        method: 'POST',
        body: fmsWorkStationRecordVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags fms_work_station_record
     * @name FmsWorkStationRecordList
     * @summary 工单开报工记录列表
     * @request GET:/blade-fms/order/fms-work-station-record/list
     * @secure
     */
    fmsWorkStationRecordList: (params: RequestParams = {}) =>
      this.request<RListFmsWorkStationRecordVo, void>({
        path: `/blade-fms/order/fms-work-station-record/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags fms_work_station_record
     * @name FmsWorkStationRecordPage
     * @summary 工单开报工记录分页
     * @request GET:/blade-fms/order/fms-work-station-record/page
     * @secure
     */
    fmsWorkStationRecordPage: (
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
      this.request<RIPageFmsWorkStationRecordVo, void>({
        path: `/blade-fms/order/fms-work-station-record/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入产品id
     *
     * @tags fms_order
     * @name FmsOrderGetProductionCraft
     * @summary 根据产品ID查询工艺路线列表数据
     * @request GET:/blade-fms/order/get-production-craft/{productionId}
     * @secure
     */
    fmsOrderGetProductionCraft: (productionId: string, params: RequestParams = {}) =>
      this.request<RListCraftRoutingDetailVO, void>({
        path: `/blade-fms/order/get-production-craft/${productionId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入fmsOrder
     *
     * @tags fms_order
     * @name FmsOrderDetail
     * @summary 工单基础状态信息详情
     * @request GET:/blade-fms/order/get/{id}
     * @secure
     */
    fmsOrderDetail: (id: string, params: RequestParams = {}) =>
      this.request<RFmsOrderVO, void>({
        path: `/blade-fms/order/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fms_order
     * @name FmsOrderListCraft
     * @summary 获取所有的工艺路线列表
     * @request GET:/blade-fms/order/list-craft
     * @secure
     */
    fmsOrderListCraft: (params: RequestParams = {}) =>
      this.request<RListCraftRoutingDetailVO, void>({
        path: `/blade-fms/order/list-craft`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description fmsOrderQueryVO
     *
     * @tags fms_order
     * @name FmsOrderPage
     * @summary 工单基础状态信息分页
     * @request GET:/blade-fms/order/page
     * @secure
     */
    fmsOrderPage: (
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
      this.request<RIPageFmsOrderVO, void>({
        path: `/blade-fms/order/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入工单ID
     *
     * @tags fms_order
     * @name FmsOrderPause
     * @summary 工单暂停
     * @request POST:/blade-fms/order/pause
     * @secure
     */
    fmsOrderPause: (orderIds: string[], params: RequestParams = {}) =>
      this.request<RListFmsOrderVO, void>({
        path: `/blade-fms/order/pause`,
        method: 'POST',
        body: orderIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入fmsOrderProcess
     *
     * @tags fms_order_process
     * @name FmsOrderProcessDetail
     * @summary 工单工序信息详情
     * @request GET:/blade-fms/order/process/get/{id}
     * @secure
     */
    fmsOrderProcessDetail: (id: string, params: RequestParams = {}) =>
      this.request<RFmsOrderProcessVo, void>({
        path: `/blade-fms/order/process/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description dmp程序下发使用
     *
     * @tags fms_order_process
     * @name FmsOrderProcessGetProgramByObjectKey
     * @summary 获取minio文件的文件字节
     * @request GET:/blade-fms/order/process/issued-file-bytes
     * @secure
     */
    fmsOrderProcessGetProgramByObjectKey: (
      query: {
        /** objectKey */
        objectKey: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/blade-fms/order/process/issued-file-bytes`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags fms_order_process
     * @name FmsOrderProcessList
     * @summary 工单工序信息列表
     * @request GET:/blade-fms/order/process/list
     * @secure
     */
    fmsOrderProcessList: (
      query?: {
        /** 工单ID */
        orderId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFmsOrderProcessVo, void>({
        path: `/blade-fms/order/process/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags fms_order_process
     * @name FmsOrderProcessRemove
     * @summary 工单工序信息删除
     * @request DELETE:/blade-fms/order/process/remove
     * @secure
     */
    fmsOrderProcessRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-fms/order/process/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入fmsOrderProcessVO
     *
     * @tags fms_order_process
     * @name FmsOrderProcessUpdate
     * @summary 工单工序信息修改
     * @request PUT:/blade-fms/order/process/update
     * @secure
     */
    fmsOrderProcessUpdate: (fmsOrderProcessVO: FmsOrderProcessVo, params: RequestParams = {}) =>
      this.request<RFmsOrderProcessVo, void>({
        path: `/blade-fms/order/process/update`,
        method: 'PUT',
        body: fmsOrderProcessVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入工单id
     *
     * @tags fms_order_process
     * @name FmsOrderProcessWorkstationList
     * @summary 根据工单ID获取每道工序的工位列表数据
     * @request GET:/blade-fms/order/process/workstation-list
     * @secure
     */
    fmsOrderProcessWorkstationList: (
      query?: {
        /** orderId */
        orderId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFmsWorkStationProcessVO, void>({
        path: `/blade-fms/order/process/workstation-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入工单ID
     *
     * @tags fms_order
     * @name FmsOrderProductionStatistics
     * @summary 查看产量统计信息
     * @request GET:/blade-fms/order/production-statistics
     * @secure
     */
    fmsOrderProductionStatistics: (
      query: {
        /** orderId */
        orderId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFmsOrderProductionStatVO, void>({
        path: `/blade-fms/order/production-statistics`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入工单ID
     *
     * @tags fms_order
     * @name FmsOrderPublish
     * @summary 工单发布
     * @request POST:/blade-fms/order/publish
     * @secure
     */
    fmsOrderPublish: (
      query: {
        /** orderId */
        orderId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RFmsOrderVO, void>({
        path: `/blade-fms/order/publish`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags fms_order
     * @name FmsOrderRemove
     * @summary 工单基础状态信息删除
     * @request DELETE:/blade-fms/order/remove
     * @secure
     */
    fmsOrderRemove: (ids: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-fms/order/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入fmsOrderVO
     *
     * @tags fms_order
     * @name FmsOrderSave
     * @summary 保存工单基础信息
     * @request POST:/blade-fms/order/save
     * @secure
     */
    fmsOrderSave: (fmsOrderVO: FmsOrderVO, params: RequestParams = {}) =>
      this.request<RFmsOrderDetailVO, void>({
        path: `/blade-fms/order/save`,
        method: 'POST',
        body: fmsOrderVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入FmsOrderDetailVO
     *
     * @tags fms_order
     * @name FmsOrderSaveWorkstation
     * @summary 保存指派工位信息
     * @request POST:/blade-fms/order/save-workstation
     * @secure
     */
    fmsOrderSaveWorkstation: (fmsOrderDetailVO: FmsOrderDetailVO, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/blade-fms/order/save-workstation`,
        method: 'POST',
        body: fmsOrderDetailVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fms_order
     * @name FmsOrderShutDownOrder
     * @summary 停止计划工单（产线）
     * @request PUT:/blade-fms/order/shut-down-order
     * @secure
     */
    fmsOrderShutDownOrder: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-fms/order/shut-down-order`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入工单ID
     *
     * @tags fms_order
     * @name FmsOrderStart
     * @summary 工单启动
     * @request POST:/blade-fms/order/start
     * @secure
     */
    fmsOrderStart: (orderIds: string[], params: RequestParams = {}) =>
      this.request<RListFmsOrderVO, void>({
        path: `/blade-fms/order/start`,
        method: 'POST',
        body: orderIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fms_order
     * @name FmsOrderOrderStatistics
     * @summary 查看工单统计信息
     * @request GET:/blade-fms/order/statistics
     * @secure
     */
    fmsOrderOrderStatistics: (params: RequestParams = {}) =>
      this.request<RFmsOrderStatusStatVO, void>({
        path: `/blade-fms/order/statistics`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fms_order
     * @name FmsOrderSwitchState
     * @summary 手自动切换
     * @request POST:/blade-fms/order/switch
     * @secure
     */
    fmsOrderSwitchState: (switchDTO: SwitchDTO, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/blade-fms/order/switch`,
        method: 'POST',
        body: switchDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入processId
     *
     * @tags fms_order_process_tool
     * @name FmsOrderProcessToolList
     * @summary 工单工序刀具信息列表
     * @request GET:/blade-fms/order/tool/list
     * @secure
     */
    fmsOrderProcessToolList: (
      query?: {
        /** 工单工序ID */
        processId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFmsOrderProcessToolVo, void>({
        path: `/blade-fms/order/tool/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 生产统计API
     * @name FmsProductionStatisticsOrderPage
     * @summary 分页获取工单基本信息列表
     * @request GET:/blade-fms/produce/page
     * @secure
     */
    fmsProductionStatisticsOrderPage: (
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
      this.request<RIPageFmsProduceOrderVO, void>({
        path: `/blade-fms/produce/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 生产统计API
     * @name FmsProductionStatisticsPartList
     * @summary 获取工单下的零件
     * @request GET:/blade-fms/produce/parts/{orderId}
     * @secure
     */
    fmsProductionStatisticsPartList: (
      orderId: string,
      query?: {
        /** orderField */
        orderField?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFmsProduceComponentVO, void>({
        path: `/blade-fms/produce/parts/${orderId}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 生产统计API
     * @name FmsProductionStatisticsProcessList
     * @summary 获取工单对应的工序列表
     * @request GET:/blade-fms/produce/processList/{orderId}
     * @secure
     */
    fmsProductionStatisticsProcessList: (orderId: string, params: RequestParams = {}) =>
      this.request<RFmsProduceProcessVO, void>({
        path: `/blade-fms/produce/processList/${orderId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fms调度
     * @name FmsScheduleManualDrag
     * @summary 手动托盘移动
     * @request POST:/blade-fms/schedule/manual-drag
     * @secure
     */
    fmsScheduleManualDrag: (manualTrayVO: ManualTrayVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-fms/schedule/manual-drag`,
        method: 'POST',
        body: manualTrayVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fms调度
     * @name FmsScheduleCheck
     * @summary 校验前端拖动数据
     * @request POST:/blade-fms/schedule/manual-drag/check
     * @secure
     */
    fmsScheduleCheck: (manualTrayVO: ManualTrayVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-fms/schedule/manual-drag/check`,
        method: 'POST',
        body: manualTrayVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
