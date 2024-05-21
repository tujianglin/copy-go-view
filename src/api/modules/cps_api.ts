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

/** ActivateLicenseVO */
export interface ActivateLicenseVO {
  account?: string;
  appVersion?: string;
  /** @format date-time */
  applyDate?: string;
  /** @format date-time */
  expireDate?: string;
  mac?: string;
  modules?: Record<string, ('pc' | 'hmi' | 'h5')[]>;
  type?: string;
}

/** ActivateQueryVO */
export interface ActivateQueryVO {
  encryptCode: string;
}

/** Alarm */
export interface Alarm {
  /** @format int32 */
  alarmNum?: number;
  /** @format date-time */
  alarmTime?: string;
}

/** AllFixtureGroupVO */
export interface AllFixtureGroupVO {
  /** 编号 */
  code?: string;
  /** 工位组名称 */
  groupName?: string;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
}

/** BeltlineMachineVO */
export interface BeltlineMachineVO {
  children?: BeltlineMachineVO[];
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
  /** 标签 */
  tag?: string;
}

/** BeltlineWorkstationVO */
export interface BeltlineWorkstationVO {
  children?: BeltlineWorkstationVO[];
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
  /** 标签 */
  tag?: string;
  /**
   * 程序传输方式：0-关闭，1-在线写入，2-ftp，3-串口传输
   * @format int32
   */
  transmissionMethod?: number;
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

/** CalendarAssociateWorkstationVO */
export interface CalendarAssociateWorkstationVO {
  /** 生产日历编号 */
  calendarCode?: string;
  /** 工位id集合 */
  workstationIdList?: string[];
}

/** CalendarCopyVO */
export interface CalendarCopyVO {
  /** 生产日历编号 */
  code?: string;
  /** 原日历Id */
  id?: string;
  /**
   * 应用年份
   * @format int32
   */
  year?: number;
}

/** CalendarDateDTO */
export interface CalendarDateDTO {
  /**
   * 生产日历日期
   * @format date
   */
  calendarDate?: string;
  /**
   * 是否高优先级(0:否,1:是)
   * @format int32
   */
  isHighPriority?: number;
  /**
   * 是否休息日(0:否,1:是)
   * @format int32
   */
  isOffDay?: number;
  /** 班次模型Id */
  modelId?: string;
  /** 休息日id */
  offDayId?: string;
}

/**
 * CalendarDayVO
 * 生产日历具体日期
 */
export interface CalendarDayVO {
  /**
   * 班次日
   * @format date
   */
  calendarDate?: string;
  /** 主键Id */
  id?: string;
  /**
   * 是否高优先级(0:否,1:是)
   * @format int32
   */
  isHighPriority?: number;
  /**
   * 是否休息日(0:否,1:是)
   * @format int32
   */
  isOffDay?: number;
  /** 班次模型Id */
  modelId?: string;
  /** 班次模型名称 */
  modelName?: string;
  /** 休息日备注 */
  offDayRemark?: string;
}

/** CalendarSaveVO */
export interface CalendarSaveVO {
  /** 生产日历编号 */
  code?: string;
  /** 规则id */
  codeRuleId?: string;
  /** 具体日历时间 */
  dateDTOList?: CalendarDateDTO[];
  /** 生产日历名称 */
  name?: string;
  /**
   * 启用禁用(0：禁用,1:启用)
   * @format int32
   */
  status?: number;
  /**
   * 应用年份
   * @format int32
   */
  year?: number;
}

/** CalendarSearchVO */
export interface CalendarSearchVO {
  /** 状态集合 */
  statusList: number[];
}

/**
 * CalendarSimpleVO
 * 班次日历简单返回
 */
export interface CalendarSimpleVO {
  /** 日历编号 */
  code?: string;
  /** 主键 */
  id?: string;
  /** 日历名称 */
  name?: string;
  /**
   * 启用禁用
   * @format int32
   */
  status?: number;
  /**
   * 应用年份
   * @format int32
   */
  year?: number;
}

/** CalendarUpdateVO */
export interface CalendarUpdateVO {
  /** 具体日历时间 */
  dateDTOList?: CalendarDateDTO[];
  /** 日历Id */
  id?: string;
}

/**
 * CalendarVO
 * 生产日历VO
 */
export interface CalendarVO {
  /** 具体日历时间 */
  calendarDayVOList?: CalendarDayVO[];
  /** 生产日历编号 */
  code?: string;
  /** 主键 */
  id?: string;
  /** 生产日历名称 */
  name?: string;
  /** 前后两天数据 */
  otherCalendarDayVOList?: CalendarDayVO[];
  /**
   * 启用禁用
   * @format int32
   */
  status?: number;
  /**
   * 应用年份
   * @format int32
   */
  year?: number;
}

/** ChartSelect */
export interface ChartSelect {
  label?: string;
  value?: string;
}

/** CheckItem */
export interface CheckItem {
  /** 点检项目id */
  checkProjectId?: string;
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
  /** 点检项名称 */
  name?: string;
  /** 点检要求 */
  requirement?: string;
  /** 标准数值 */
  standardValue?: string;
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
  /** 数值类型 */
  valueType?: string;
}

/**
 * CheckItemSubmitDTO
 * 新增点检项信息
 */
export interface CheckItemSubmitDTO {
  /** 点检项 */
  name: string;
  /** 点检要求 */
  requirement: string;
  /** 标准数值 */
  standardValue: string;
  /** 数值类型 */
  valueType: string;
}

/**
 * CheckItemSubmitVO
 * 新增点检项信息
 */
export interface CheckItemSubmitVO {
  checkProjectId?: string;
  items?: CheckItemSubmitDTO[];
}

/**
 * CheckItemUpdateVO
 * 新增点检项信息
 */
export interface CheckItemUpdateVO {
  checkProjectId?: string;
  id?: string;
  /** 点检项 */
  name: string;
  /** 点检要求 */
  requirement: string;
  /** 标准数值 */
  standardValue: string;
  /** 数值类型 */
  valueType: string;
}

/**
 * CheckItemVO
 * 分页点检项信息
 */
export interface CheckItemVO {
  checkProjectId?: string;
  id?: string;
  /** 点检项 */
  name?: string;
  /** 点检要求 */
  requirement?: string;
  /** 标准数值 */
  standardValue?: string;
  /**
   * 启用1 停用0
   * @format int32
   */
  status?: number;
  /** 数值类型 */
  valueType?: string;
}

/** CheckProject */
export interface CheckProject {
  /** 点检编码 */
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
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 点检项目名称 */
  name?: string;
  /** 备注 */
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

/**
 * CheckProjectQueryVO
 * 点检项目查询视图
 */
export interface CheckProjectQueryVO {
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  key?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/**
 * CheckProjectSubmitVO
 * 新增点检项目信息
 */
export interface CheckProjectSubmitVO {
  /** 点检项目编码 */
  code: string;
  /** 点检项目名称 */
  name: string;
  /** 备注 */
  remark: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/**
 * CheckProjectUpdateVO
 * 新增点检项目信息
 */
export interface CheckProjectUpdateVO {
  /** 点检项目编码 */
  code: string;
  id?: string;
  /** 点检项目名称 */
  name: string;
  /** 备注 */
  remark: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/**
 * CheckProjectVO
 * 分页点检项信息
 */
export interface CheckProjectVO {
  /** 点检项目编码 */
  code?: string;
  id?: string;
  /** 点检项目名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/** ChildProcessVO */
export interface ChildProcessVO {
  /** 子序信息 */
  childProcess?: VersionProcessAddVO[];
  /** 主序id */
  mainId?: string;
  /**
   * 主序所在的顺序
   * @format int32
   */
  sort?: number;
  /** 版本id */
  versionId?: string;
}

/**
 * CommonGroup
 * CommonGroup对象
 */
export interface CommonGroup {
  code?: string;
  extendId?: string;
  fullName?: string;
  /** @format int32 */
  groupCategory?: number;
  groupTag?: string;
  groupType?: string;
  id?: string;
  /** @format int32 */
  isDeleted?: number;
  name?: string;
  /** @format int32 */
  nodeType?: number;
  parentId?: string;
  remark?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  tenantId?: string;
}

/** CommonGroupTypeVO */
export interface CommonGroupTypeVO {
  /**
   * 工位内部存储区分
   * @format int32
   */
  distinguish?: number;
  /**
   * 组子类
   * @format int32
   */
  groupCategory: number;
  /** 组别 */
  groupType: string;
  /** 关键字查询 */
  keyword?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  /**
   * 工种
   * @format int32
   */
  workType?: number;
  /** 工位id集合 */
  workstationIdList?: string[];
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

/**
 * ConfigVO
 * 配置信息
 */
export interface ConfigVO {
  /** access-key */
  accessKey?: string;
  /** 数据库名 */
  database?: string;
  /** 驱动 */
  driverClassName?: string;
  /** 数据库配置 */
  mysqlUrl?: string;
  ossUrl?: string;
  /** secret-key */
  secretKey?: string;
  /** tdengine配置 */
  tdengineUrl?: string;
  /** 数据库类型 */
  type?: string;
  /** ip */
  url?: string;
}

/** CraftRoutingAddVO */
export interface CraftRoutingAddVO {
  /** 工艺路线描述 */
  description?: string;
  /** 工艺路线名称 */
  name?: string;
  /** 关联的产品id */
  productId?: string;
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

/** CraftRoutingUpdateVO */
export interface CraftRoutingUpdateVO {
  /** 工艺路线描述 */
  description?: string;
  /** 主键名称 */
  id?: string;
  /** 工艺路线名称 */
  name?: string;
  /** 关联的产品id */
  productId?: string;
}

/** CraftRoutingVO */
export interface CraftRoutingVO {
  /** 工艺路线描述 */
  description?: string;
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
  /** 产品类型名称 */
  typeName?: string;
}

/** CraftVersionAddVO */
export interface CraftVersionAddVO {
  craftId?: string;
  /** 工艺版本描述 */
  description?: string;
  /** 产线id */
  groupIds?: string[];
  /** 工艺版本名称 */
  name?: string;
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

/** CraftVersionLineVO */
export interface CraftVersionLineVO {
  /** 工艺路线id */
  craftId?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 版本描述 */
  description?: string;
  /**
   * 是否定版
   * @format int32
   */
  editionStatus?: number;
  /** 产线编号 */
  groupCode?: string;
  /** 产线id */
  groupId?: string;
  /** 产线名称 */
  groupName?: string;
  /** 主键id */
  id?: string;
  /** 版本名称 */
  name?: string;
  /** 工序信息 */
  processList?: ProductionCraftProcess[];
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 修改人 */
  updateUser?: string;
}

/** CreateCommonGroupVO */
export interface CreateCommonGroupVO {
  /** 组编码 */
  code?: string;
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
  /** 组名 */
  name?: string;
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
}

/** CurrentDepartEmpVO */
export interface CurrentDepartEmpVO {
  /**
   * 部门主管 ：1 是 0 否
   * @format int32
   */
  departmentHead?: number;
  /** 员工id */
  employeeId?: string;
  /** 员工名称 */
  employeeName?: string;
  /** 工号 */
  jobNumber?: string;
  /** 用户账号 */
  userAccount?: string;
  /** 账号id */
  userId?: string;
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

/** DeviceCheckSubmitVO */
export interface DeviceCheckSubmitVO {
  checkProjectId?: string[];
  deviceTypeId?: string;
  /**
   * 点检周期
   * @format int32
   */
  intervalTime?: number;
}

/** DeviceType */
export interface DeviceType {
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
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  name?: string;
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

/**
 * DeviceTypeAddVO
 * 新增机器类型信息
 */
export interface DeviceTypeAddVO {
  /** 类型编码 */
  code: string;
  /** 类型名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
}

/** DeviceTypeCheckProject */
export interface DeviceTypeCheckProject {
  checkProjectId?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  deviceTypeId?: string;
  /** 主键id */
  id?: string;
  /** @format int32 */
  intervalTime?: number;
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

/** DeviceTypeCheckProjectVO */
export interface DeviceTypeCheckProjectVO {
  /** 点检项目id */
  checkProjectId: string;
  /** 点检项目编码 */
  code: string;
  id?: string;
  /**
   * 点检周期
   * @format int32
   */
  intervalTime?: number;
  /** 点检项目 */
  name: string;
  /** 备注 */
  remark?: string;
}

/** DeviceTypeExcelVO */
export interface DeviceTypeExcelVO {
  /** 选中的列表数据 */
  ids?: string[];
  keyWord?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
}

/**
 * DeviceTypeIdListVO
 * 机器类型Id集合信息
 */
export interface DeviceTypeIdListVO {
  idList?: string[];
}

/**
 * DeviceTypeUpdateVO
 * 更新机器类型信息
 */
export interface DeviceTypeUpdateVO {
  /** 主键id */
  id: string;
  /** 类型名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
}

/**
 * DeviceTypeVO
 * 机器类型信息
 */
export interface DeviceTypeVO {
  /** 类型编码 */
  code?: string;
  id?: string;
  /** 类型名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
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

/** EmployeeBriefVO */
export interface EmployeeBriefVO {
  /** 账号 */
  account?: string;
  /** 员工头像 */
  avatar?: string;
  /**
   * 部门主管 ：1 是 0 否
   * @format int32
   */
  departmentHead?: number;
  /** 邮箱 */
  email?: string;
  /** 资源归属区域 */
  employeeDeptId?: string;
  /** 资源归属区域名称 */
  employeeDeptName?: string;
  /** 开通账号 */
  enableAccount?: boolean;
  /**
   * 入职日期
   * @format date-time
   */
  hireDate?: string;
  /** 主键 */
  id?: string;
  /** 工号 */
  jobNumber?: string;
  /** 部门id */
  organizationId?: string;
  /** 部门名称 */
  organizationName?: string;
  /** 手机号 */
  phone?: string;
  /** PIN码 */
  pinCode?: string;
  /** 岗位id */
  postId?: string;
  /** 岗位名称 */
  postName?: string;
  /** 姓名 */
  realName?: string;
  /** 所属角色 */
  roleId?: string;
  /** 角色名称 */
  roleName?: string;
  /**
   * 状态：0-离职，1-在职
   * @format int32
   */
  status?: number;
  /** 可见资源区域 */
  userDeptId?: string;
  /** 可见资源区域名称 */
  userDeptName?: string;
}

/** EmployeeSelectVO */
export interface EmployeeSelectVO {
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词：员工编号/员工姓名 */
  keyword?: string;
  /** 组织code */
  organizationCode?: string;
  /** 岗位id */
  postId?: string;
  /**
   * 状态:1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/** EmployeeSubmitVO */
export interface EmployeeSubmitVO {
  /** 账号 */
  account?: string;
  /** 头像 */
  avatar?: string;
  /**
   * 部门主管 ：1 是 0 否
   * @format int32
   */
  departmentHead?: number;
  /** 邮箱 */
  email?: string;
  /** 资源归属区域 */
  employeeDeptId?: string;
  /** 开通账号 */
  enableAccount: boolean;
  /**
   * 入职日期
   * @format date-time
   */
  hireDate?: string;
  /** 主键 */
  id?: string;
  /** 工号 */
  jobNumber: string;
  /** 部门 */
  organizationId?: string;
  /** 密码 */
  password?: string;
  /** 手机号 */
  phone: string;
  /** PIN码 */
  pinCode: string;
  /** 岗位 */
  postId?: string;
  /** 姓名 */
  realName: string;
  /** 所属角色 */
  roleId?: string;
  /**
   * 状态：0-离职，1-在职
   * @format int32
   */
  status?: number;
  /** 可见资源区域 */
  userDeptId: string;
}

/** EmployeeUpdatePartVO */
export interface EmployeeUpdatePartVO {
  /** 主键 */
  id?: string;
  /** 员工工号 */
  jobNumber?: string;
  /** 新PIN码 */
  newPinCode?: string;
  /** PIN码 */
  pinCode?: string;
}

/** EmployeeVO */
export interface EmployeeVO {
  /** 账号 */
  account?: string;
  /** 头像 */
  avatar?: string;
  /** 编号 */
  code?: string;
  /**
   * 部门主管 ：1 是 0 否
   * @format int32
   */
  departmentHead?: number;
  /** 邮箱 */
  email?: string;
  /** 主键 */
  id?: string;
  /** 工号 */
  jobNumber?: string;
  /** 部门 */
  organizationName?: string;
  /** 手机号 */
  phone?: string;
  /** 岗位 */
  postName?: string;
  /** 姓名 */
  realName?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
}

/** EnterpriseInVO */
export interface EnterpriseInVO {
  /** 图片大小 */
  contentLength?: string;
  /** 图片名称 */
  fileName?: string;
  /** 主键id */
  id?: string;
  /** 文件链接 */
  link?: string;
  /** 文件的objectKey */
  objectKey?: string;
  /** 文件后缀 */
  suffix?: string;
  /**
   * 0 log01  1 log02
   * @format int32
   */
  type?: number;
}

/** EnterpriseInformationVO */
export interface EnterpriseInformationVO {
  /** 企业log图片信息 */
  list?: EnterprisePictureVO[];
}

/** EnterprisePictureVO */
export interface EnterprisePictureVO {
  /** 图片大小 */
  contentLength?: string;
  /** 图片名称 */
  fileName?: string;
  /** 主键id */
  id?: string;
  /** 文件链接 */
  link?: string;
  /** 文件的objectKey */
  objectKey?: string;
  /** 文件后缀 */
  suffix?: string;
  /**
   * 0 log01  1 log02
   * @format int32
   */
  type?: number;
}

/** FixtureGroupFixtureVO */
export interface FixtureGroupFixtureVO {
  children?: FixtureGroupFixtureVO[];
  /** 编码 */
  code?: string;
  hasChildren?: boolean;
  /** id */
  id?: string;
  /** 是否夹具 */
  isTray?: boolean;
  /** 是否夹具组 */
  isTrayGroup?: boolean;
  /** 名称 */
  name?: string;
  /** 父级id */
  parentId?: string;
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

/** GlobalWcsVO */
export interface GlobalWcsVO {
  /** 状态码 */
  code?: string;
  /** 颜色 */
  color?: string;
  /** 名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /**
   * 排序 小到大
   * @format int32
   */
  seq?: number;
}

/** GroupTreeVO */
export interface GroupTreeVO {
  /** 叶子结点的头像 */
  avatar?: string;
  children?: GroupTreeVO[];
  /** 编码 */
  code?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  isGroup?: boolean;
  /** 名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
}

/** HierarchyVO */
export interface HierarchyVO {
  /** 层级ID列表 */
  idList?: string[];
  /** 层级名称 */
  name?: string;
}

/** HmiEmpVO */
export interface HmiEmpVO {
  /** HMI登入用户id */
  userId?: string;
  /** HMI登入工位id */
  workstationId?: string;
}

/** HmiWorkstationVO */
export interface HmiWorkstationVO {
  /** 账号 */
  account?: string;
  /** 工位图片地址 */
  avatar?: string;
  /** 工位编号 */
  code?: string;
  /** 工位组名称 */
  groupName?: string;
  /** 工位名称 */
  name?: string;
  /** 姓名 */
  realName?: string;
  /**
   * 工位类型：空、机器、人工
   * @format int32
   */
  type?: number;
  /** 工位类型：空、机器、人工 */
  typeStr?: string;
  /** 头像 */
  userAvatar?: string;
}

/** IdsVO */
export interface IdsVO {
  ids?: string[];
}

/**
 * JimuTreeVO
 * 积木报表树结构
 */
export interface JimuTreeVO {
  /** 是否禁用勾选 */
  disabled?: boolean;
  /** 标识id */
  id?: string;
  /** 父节点的标识，和id一起标识上下级关系 */
  pid?: string;
  /** 下拉树显示的文本值 */
  title?: string;
  /** 实际查询用到的值 */
  value?: string;
}

/** KV */
export interface KV {
  key?: string;
  value?: string;
}

/** KeyNameDTO */
export interface KeyNameDTO {
  /** key */
  key?: string;
  /** 名称 */
  name?: string;
}

/** LicenseDetailVO */
export interface LicenseDetailVO {
  /** 授予公司 */
  account?: string;
  /**
   * 授予时间
   * @format date-time
   */
  applyDate?: string;
  /**
   * 授予过期时间
   * @format date-time
   */
  expireDate?: string;
  /** 授权模块：kv对应值 */
  moduleMap?: Record<string, string>;
  /** 授予模块 */
  moduleNames?: Record<string, string[]>;
  /** 授予类型 */
  type?: string;
}

/** LmsWorkstationVO */
export interface LmsWorkstationVO {
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
  /** 采集变量名称 */
  wcsDataItemList?: string[];
}

/** Machine */
export interface Machine {
  /** 资产编号 */
  assetsCode?: string;
  /** 机器图片 */
  avatar?: string;
  /** 机器品牌 */
  brand?: string;
  collectDriver?: string;
  /** @format int32 */
  collectSwitch?: number;
  /** 产地国别 */
  countryOfManufacture?: string;
  /** 权限 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /**
   * 交付日期
   * @format date-time
   */
  deliveryTime?: string;
  /**
   * 折旧年限
   * @format int32
   */
  depreciationYear?: number;
  /** 轮廓尺寸 */
  dimensions?: number;
  /** 关联dmp */
  dmpName?: string;
  /**
   * 是否是特种设备 1 - 是 ; 0 - 否
   * @format int32
   */
  elaborateEquipment?: number;
  /** 责任人 */
  employeeId?: string;
  extendId?: string;
  /** 外部键 */
  externalKey?: string;
  /** 出厂档案 */
  factoryFile?: string;
  /** 出厂编号 */
  factoryNo?: string;
  /** 所属机器组id */
  groupId?: string;
  /** 主键id */
  id?: string;
  /** 安装位置 */
  installationLocation?: string;
  /** 发票金额 */
  invoiceValue?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 最后点检时间
   * @format date-time
   */
  lastCheckTime?: string;
  /**
   * 最后保养时间
   * @format date-time
   */
  lastMaintainTime?: string;
  /**
   * 最后维修时间
   * @format date-time
   */
  lastRepairTime?: string;
  /** 是否创建同名工位 */
  linkWay?: string;
  /** 机器编号 */
  machineCode?: string;
  /**
   * 生命状态
   * @format int32
   */
  machineLifeStatus?: number;
  /** 机器规格 */
  machineModel?: string;
  /** 机器名称 */
  machineName?: string;
  machineType?: string;
  /** 机器类型id */
  machineTypeId?: string;
  /**
   * 使用状态
   * @format int32
   */
  machineUseStatus?: number;
  /**
   * 保养状态
   * @format int32
   */
  maintenanceStatus?: number;
  /**
   * 管理等级
   * @format int32
   */
  managementClass?: number;
  /** 制造厂商 */
  manufacturer?: string;
  /** 机器铭牌 */
  nameplate?: string;
  /** 资产净值 */
  netAssetValue?: number;
  /** 净重 */
  netWeight?: number;
  /**
   * 下次保养时间
   * @format date-time
   */
  nextMaintainTime?: string;
  /** 使用部门 */
  organizationId?: string;
  /** 资产原值 */
  ovfa?: number;
  /** 机器PIN码 */
  pinCode?: string;
  /** 功率 */
  power?: number;
  /** 生产线 */
  productionLine?: string;
  /**
   * 生产日期
   * @format date-time
   */
  productionTime?: string;
  /** 备注 */
  remark?: string;
  /**
   * 维修状态
   * @format int32
   */
  repairStatus?: number;
  /** 机器序列号 */
  serialNo?: string;
  /** 短编号 */
  shortCode?: string;
  /** 软件版本 */
  softwareVersion?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 系统名称 */
  systemName?: string;
  /** 租户ID */
  tenantId?: string;
  /**
   * 转固日期
   * @format date-time
   */
  turnToFixedAssetsTime?: string;
  typeName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** 电压 */
  voltage?: number;
}

/** MachineBriefSelectVO */
export interface MachineBriefSelectVO {
  /** 是否过滤已经绑定传输目录的工位 */
  filterBindTransMachine?: boolean;
  /** 查询条件，可以根据机器编号和名称查询 */
  key?: string;
}

/** MachineBriefVO */
export interface MachineBriefVO {
  /** 机器品牌 */
  brand?: string;
  /** 机器组id */
  groupId?: string;
  /** 机器组 */
  groupName?: string;
  /** id */
  id?: string;
  /** 机器编号 */
  machineCode?: string;
  /** 机器名称 */
  machineName?: string;
}

/** MachineDetailVO */
export interface MachineDetailVO {
  /** 资产编号 */
  assetsCode?: string;
  /** 机器图片 */
  avatar?: string;
  /** 机器品牌 */
  brand?: string;
  /** 产地国别 */
  countryOfManufacture?: string;
  /** 权限 */
  createDept?: string;
  /**
   * 交付日期
   * @format date-time
   */
  deliveryTime?: string;
  /**
   * 折旧年限
   * @format int32
   */
  depreciationYear?: number;
  /** 轮廓尺寸 */
  dimensions?: number;
  /** dmp名称 */
  dmpName?: string;
  /**
   * 是否是特种设备 1 - 是 ; 0 - 否
   * @format int32
   */
  elaborateEquipment?: number;
  /** 责任人 */
  employeeId?: string;
  /** 责任人名称 */
  employeeName?: string;
  /** 扩展id */
  extendId?: string;
  /** 出厂档案 */
  factoryFile?: string;
  /** 出厂编号 */
  factoryNo?: string;
  /** 所属机器组名称 */
  groupId?: string;
  /** 所属机器组名称 */
  groupName?: string;
  /** 主键 */
  id?: string;
  /** 安装位置 */
  installationLocation?: string;
  /** 发票金额 */
  invoiceValue?: number;
  /** 机器编号 */
  machineCode?: string;
  /**
   * 生命状态
   * @format int32
   */
  machineLifeStatus?: number;
  /** 生命状态名称 */
  machineLifeStatusName?: string;
  /** 机器规格 */
  machineModel?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器类型编码 */
  machineTypeCode?: string;
  /** 机器类型id */
  machineTypeId?: string;
  /** 机器类型名称 */
  machineTypeName?: string;
  /**
   * 使用状态id
   * @format int32
   */
  machineUseStatus?: number;
  /** 使用状态名称 */
  machineUseStatusName?: string;
  /**
   * 管理等级id
   * @format int32
   */
  managementClass?: number;
  /** 管理等级名称 */
  managementClassName?: string;
  /** 制造厂商 */
  manufacturer?: string;
  /** 机器铭牌 */
  nameplate?: string;
  /** 资产净值 */
  netAssetValue?: number;
  /** 净重 */
  netWeight?: number;
  /** 使用部门id */
  organizationId?: string;
  /** 使用部门名称 */
  organizationName?: string;
  /** 资产原值 */
  ovfa?: number;
  /** 机器PIN码 */
  pinCode?: string;
  /** 功率 */
  power?: number;
  /** 生产线 */
  productionLine?: string;
  /**
   * 生产日期
   * @format date-time
   */
  productionTime?: string;
  /** 备注 */
  remark?: string;
  /** 机器序列号 */
  serialNo?: string;
  /** 短编号 */
  shortCode?: string;
  /** 软件版本 */
  softwareVersion?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  /** 系统名称 */
  systemName?: string;
  /** 租户id */
  tenantId?: string;
  /**
   * 转固日期
   * @format date-time
   */
  turnToFixedAssetsTime?: string;
  /** 电压 */
  voltage?: number;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位Id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** MachineDmpVariablesVO */
export interface MachineDmpVariablesVO {
  /** 采集驱动 */
  collectDriver?: string;
  /** 采集项 */
  dmpVariablesVOList?: DmpVariablesVO[];
  /** 机器品牌 */
  machineBrand?: string;
  /** 机器编码 */
  machineCode?: string;
  /** 机器名称 */
  machineName?: string;
  /** 驱动名称 */
  typeName?: string;
}

/** MachineInformationVO */
export interface MachineInformationVO {
  /** 工位图片 */
  avatar?: string;
  /**
   * 工位设备类型
   * @format int32
   */
  deviceType?: number;
  /** dmp地址 */
  dmpAddress?: string;
  /** dmp名称 */
  dmpName?: string;
  /** FTP目录 */
  ftpCatalogue?: string;
  /** 报警库名称 */
  libraryName?: string;
  /**
   * plc对接编号
   * @format int32
   */
  plcCode?: number;
  /**
   * 工位加工类型
   * @format int32
   */
  properties?: number;
  /**
   * 程序传输方式
   * @format int32
   */
  transmissionMode?: number;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工作台集合 */
  workstationList?: WorkstationWorkbench[];
  /** 工位名称 */
  workstationName?: string;
}

/** MachineListVO */
export interface MachineListVO {
  /** 扩展id */
  extendId?: string;
  /** 所属机器组 */
  groupName?: string;
  /** 主键id */
  id?: string;
  /** 机器编号 */
  machineCode?: string;
  /** 机器规格 */
  machineModel?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器类型ID */
  machineTypeId?: string;
  /** 机器类型 */
  machineTypeName?: string;
  /**
   * 使用状态id
   * @format int32
   */
  machineUseStatus?: number;
  /** 使用状态名称 */
  machineUseStatusName?: string;
  /** 机器序列号 */
  serialNo?: string;
  /** 短编号 */
  shortCode?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/** MachineSelectVO */
export interface MachineSelectVO {
  /** 所属工位组 */
  groupId?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  keyword?: string;
  /** 机器编号 */
  machineCode?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器类型 */
  machineTypeId?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/** MachineSubmitVO */
export interface MachineSubmitVO {
  /** 资产编号 */
  assetsCode?: string;
  /** 机器图片 */
  avatar?: string;
  /** 机器品牌 */
  brand?: string;
  /** 产地国别 */
  countryOfManufacture?: string;
  /** 权限 */
  createDept?: string;
  /**
   * 交付日期
   * @format date-time
   */
  deliveryTime?: string;
  /**
   * 折旧年限
   * @format int32
   */
  depreciationYear?: number;
  /** 轮廓尺寸 */
  dimensions?: number;
  /** 关联dmp */
  dmpName?: string;
  /**
   * 是否是特种设备
   * @format int32
   */
  elaborateEquipment?: number;
  /** 责任人 */
  employeeId?: string;
  /** 出厂档案 */
  factoryFile?: string;
  /** 出厂编号 */
  factoryNo?: string;
  /** 所属机器组id */
  groupId?: string;
  /** id-同步录入时指定 */
  id?: string;
  /** 安装位置 */
  installationLocation?: string;
  /** 发票金额 */
  invoiceValue?: number;
  /**
   * 工位方式 1-创建同名工位  2-不创建
   * @format int32
   */
  linkWay?: number;
  /** 机器编号 */
  machineCode?: string;
  /**
   * 生命状态
   * @format int32
   */
  machineLifeStatus?: number;
  /** 机器规格 */
  machineModel?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器类型id */
  machineTypeId?: string;
  /**
   * 使用状态
   * @format int32
   */
  machineUseStatus?: number;
  /**
   * 管理等级
   * @format int32
   */
  managementClass?: number;
  /** 制造厂商 */
  manufacturer?: string;
  /** 机器铭牌 */
  nameplate?: string;
  /** 资产净值 */
  netAssetValue?: number;
  /** 净重 */
  netWeight?: number;
  /** 使用部门 */
  organizationId?: string;
  /** 资产原值 */
  ovfa?: number;
  /** 机器PIN码 */
  pinCode?: string;
  /** 功率 */
  power?: number;
  /** 生产线 */
  productionLine?: string;
  /**
   * 生产日期
   * @format date-time
   */
  productionTime?: string;
  /** 备注 */
  remark?: string;
  /** 机器序列号 */
  serialNo?: string;
  /** 短编号 */
  shortCode?: string;
  /** 软件版本 */
  softwareVersion?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
  /** 系统名称 */
  systemName?: string;
  /**
   * 转固日期
   * @format date-time
   */
  turnToFixedAssetsTime?: string;
  /** 电压 */
  voltage?: number;
  /** 工位编号 */
  workstationId?: string;
}

/** MachineUpdateVO */
export interface MachineUpdateVO {
  /** 资产编号 */
  assetsCode?: string;
  /** 机器图片 */
  avatar?: string;
  /** 机器品牌 */
  brand?: string;
  /** 产地国别 */
  countryOfManufacture?: string;
  /** 权限 */
  createDept?: string;
  /**
   * 交付日期
   * @format date-time
   */
  deliveryTime?: string;
  /**
   * 折旧年限
   * @format int32
   */
  depreciationYear?: number;
  /** 轮廓尺寸 */
  dimensions?: number;
  /** 关联dmp */
  dmpName?: string;
  /**
   * 是否是特种设备
   * @format int32
   */
  elaborateEquipment?: number;
  /** 责任人 */
  employeeId?: string;
  /** 出厂档案 */
  factoryFile?: string;
  /** 出厂编号 */
  factoryNo?: string;
  /** 所属机器组id */
  groupId?: string;
  /** 主键 */
  id?: string;
  /** 安装位置 */
  installationLocation?: string;
  /** 发票金额 */
  invoiceValue?: number;
  /**
   * 工位方式 1-创建同名工位  2-不创建
   * @format int32
   */
  linkWay?: number;
  /** 机器编号 */
  machineCode?: string;
  /**
   * 生命状态
   * @format int32
   */
  machineLifeStatus?: number;
  /** 机器规格 */
  machineModel?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器类型id */
  machineTypeId?: string;
  /**
   * 使用状态
   * @format int32
   */
  machineUseStatus?: number;
  /**
   * 管理等级
   * @format int32
   */
  managementClass?: number;
  /** 制造厂商 */
  manufacturer?: string;
  /** 机器铭牌 */
  nameplate?: string;
  /** 资产净值 */
  netAssetValue?: number;
  /** 净重 */
  netWeight?: number;
  /** 使用部门 */
  organizationId?: string;
  /** 资产原值 */
  ovfa?: number;
  /** 机器PIN码 */
  pinCode?: string;
  /** 功率 */
  power?: number;
  /** 生产线 */
  productionLine?: string;
  /**
   * 生产日期
   * @format date-time
   */
  productionTime?: string;
  /** 备注 */
  remark?: string;
  /** 机器序列号 */
  serialNo?: string;
  /** 短编号 */
  shortCode?: string;
  /** 软件版本 */
  softwareVersion?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
  /** 系统名称 */
  systemName?: string;
  /**
   * 转固日期
   * @format date-time
   */
  turnToFixedAssetsTime?: string;
  /** 电压 */
  voltage?: number;
  /** 工位编号 */
  workstationId?: string;
}

/** MachineVO */
export interface MachineVO {
  /** 机器品牌 */
  brand?: string;
  /** 采集驱动 */
  collectDriver?: string;
  /**
   * 采集开关：0关/1开
   * @format int32
   */
  collectSwitch?: number;
  /** 权限 */
  createDept?: string;
  /** dmp */
  dmpName?: string;
  /** 扩展id */
  extendId?: string;
  /** 外部键 */
  externalKey?: string;
  /** 机器组id */
  groupId?: string;
  /** id */
  id?: string;
  /** 机器编号 */
  machineCode?: string;
  /** 机器规格 */
  machineModel?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器PIN码 */
  machinePinCode?: string;
  /** 机器短编号 */
  machineShortCode?: string;
  /** 机器类型 */
  machineType?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  /** 类型名称 */
  typeName?: string;
}

/**
 * MaintainItem
 * 保养项
 */
export interface MaintainItem {
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
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  name?: string;
  remark?: string;
  requirement?: string;
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

/** MaintainItemAddVO */
export interface MaintainItemAddVO {
  /** 编码 */
  code: string;
  /** 名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 保养要求 */
  requirement?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/** MaintainItemExportDTO */
export interface MaintainItemExportDTO {
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  keyWord?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
}

/** MaintainItemUpdateVO */
export interface MaintainItemUpdateVO {
  /** 编号 */
  code: string;
  /** 保养项Id */
  id: string;
  /** 名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /** 保养要求 */
  requirement?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/**
 * MaintainItemVO
 * 保养项
 */
export interface MaintainItemVO {
  /** 编号 */
  code?: string;
  id?: string;
  /** 名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 保养要求 */
  requirement?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/**
 * MaintainProject
 * 保养项目
 */
export interface MaintainProject {
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
  deviceTypeId?: string;
  deviceTypeName?: string;
  /** 主键id */
  id?: string;
  /** @format int32 */
  intervalTime?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  name?: string;
  /** @format int32 */
  preWarningDays?: number;
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

/** MaintainProjectAddVO */
export interface MaintainProjectAddVO {
  /** 保养项目编码 */
  code: string;
  /** 机器类型Id */
  deviceTypeId: string;
  /** 机器类型名称 */
  deviceTypeName: string;
  /**
   * 周期（天）
   * @format int32
   * @min 1
   * @exclusiveMin false
   */
  intervalTime: number;
  /** 保养项目名称 */
  name: string;
  /**
   * 保养预警提示
   * @format int32
   * @min 1
   * @exclusiveMin false
   */
  preWarningDays?: number;
  /** 备注 */
  remark?: string;
}

/** MaintainProjectItemAddDTO */
export interface MaintainProjectItemAddDTO {
  /** 保养项Id */
  itemIds: string[];
  /** 保养项目Id */
  projectId?: string;
}

/**
 * MaintainProjectItemVO
 * 保养项目保养项
 */
export interface MaintainProjectItemVO {
  id?: string;
  /** 编号 */
  itemCode?: string;
  itemId?: string;
  /** 名称 */
  itemName?: string;
  /** 备注 */
  itemRemark?: string;
  /** 保养要求 */
  itemRequirement?: string;
  projectId?: string;
}

/** MaintainProjectUpdateVO */
export interface MaintainProjectUpdateVO {
  /** 保养项目编码 */
  code: string;
  /** 机器类型Id */
  deviceTypeId: string;
  /** 机器类型名称 */
  deviceTypeName: string;
  /** 保养项目Id */
  id: string;
  /**
   * 周期（天）
   * @format int32
   * @min 1
   * @exclusiveMin false
   */
  intervalTime: number;
  /** 保养项目名称 */
  name: string;
  /**
   * 保养预警提示
   * @format int32
   * @min 1
   * @exclusiveMin false
   */
  preWarningDays?: number;
  /** 备注 */
  remark?: string;
}

/**
 * MaintainProjectVO
 * 保养项目
 */
export interface MaintainProjectVO {
  /** 保养项目编码 */
  code?: string;
  /** 机器类型Id */
  deviceTypeId?: string;
  /** 机器类型名称 */
  deviceTypeName?: string;
  id?: string;
  /**
   * 周期（天）
   * @format int32
   */
  intervalTime?: number;
  /** 保养项目保养项 */
  maintainProjectItemVoList?: MaintainProjectItemVO[];
  /** 保养项目名称 */
  name?: string;
  /**
   * 保养预警提示
   * @format int32
   */
  preWarningDays?: number;
  /** 备注 */
  remark?: string;
}

/**
 * MalfunctionTypeQueryVO
 * 故障类型查询视图
 */
export interface MalfunctionTypeQueryVO {
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  keyword?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/** MalfunctionTypeRecordVO */
export interface MalfunctionTypeRecordVO {
  /** 故障编码 唯一 */
  code?: string;
  /** 故障类型Id */
  id?: string;
  /** 故障类型 */
  name?: string;
}

/** MalfunctionTypeVO */
export interface MalfunctionTypeVO {
  code?: string;
  id?: string;
  name?: string;
  remark?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/** MaterialAddVO */
export interface MaterialAddVO {
  /** 物料条码 */
  barCode?: string;
  /** 物料编码 */
  code: string;
  /**
   * 是否必检：0-非必检，1-必检
   * @format int32
   */
  isMustCheck: number;
  /** 额定库存 */
  lowerLimit?: number;
  /** 物料名称 */
  name: string;
  /**
   * 物料性质：1-原材料、2-半成品、3-成品、4-备品备件、5-辅助用品、9-其它
   * @format int32
   */
  property: number;
  /** 备注 */
  remark?: string;
  /** 规格 */
  standardModel?: string;
  /**
   * 启用1 禁用0
   * @format int32
   */
  status?: number;
  /** 材质 */
  stuff?: string;
  /** 物料类型Id */
  typeId: string;
  /** 物料类型名称 */
  typeName?: string;
  /** 计量单位 */
  unit?: string;
  /** 安全库存 */
  upperLimit?: number;
}

/** MaterialQueryVO */
export interface MaterialQueryVO {
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  keyWord?: string;
  /**
   * 物料属性
   * @format int32
   */
  property?: number;
  /**
   * 启用-1 禁用-0
   * @format int32
   */
  status?: number;
  typeId?: string;
}

/** MaterialStorageAddVO */
export interface MaterialStorageAddVO {
  /** 物料id */
  materialIds?: string[];
  /** 库位id */
  warehouseStationId?: string;
}

/** MaterialTypeAddVO */
export interface MaterialTypeAddVO {
  /** 物料类型编码 */
  code: string;
  /** 物料类型名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /**
   * 启用1 禁用0
   * @format int32
   */
  status?: number;
}

/** MaterialTypeUpdateVO */
export interface MaterialTypeUpdateVO {
  id: string;
  /** 物料类型名称 */
  name: string;
  /** 备注 */
  remark?: string;
  /**
   * 启用1 禁用0
   * @format int32
   */
  status?: number;
}

/** MaterialTypeVO */
export interface MaterialTypeVO {
  /** 物料类型编码 */
  code?: string;
  id?: string;
  /** 物料类型名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /**
   * 启用1 停用0
   * @format int32
   */
  status?: number;
}

/** MaterialUpdateVO */
export interface MaterialUpdateVO {
  /** 物料条码 */
  barCode?: string;
  /** 物料编码 */
  code?: string;
  /** id */
  id: string;
  /**
   * 是否必检：0-非必检，1-必检
   * @format int32
   */
  isMustCheck?: number;
  /** 额定库存 */
  lowerLimit?: number;
  /** 物料名称 */
  name?: string;
  /**
   * 物料性质：1-原材料、2-半成品、3-成品、4-备品备件、5-辅助用品、9-其它
   * @format int32
   */
  property?: number;
  /** 备注 */
  remark?: string;
  /** 规格 */
  standardModel?: string;
  /**
   * 启用1 禁用0
   * @format int32
   */
  status?: number;
  /** 材质 */
  stuff?: string;
  /** 物料类型Id */
  typeId?: string;
  /** 物料类型名称 */
  typeName?: string;
  /** 计量单位 */
  unit?: string;
  /** 安全库存 */
  upperLimit?: number;
}

/** MaterialVO */
export interface MaterialVO {
  /** 物料条码 */
  barCode?: string;
  /** 物料编码 */
  code?: string;
  /** id */
  id?: string;
  /**
   * 是否必检：0-非必检，1-必检
   * @format int32
   */
  isMustCheck?: number;
  /** 是否必检：0-非必检，1-必检 */
  isMustCheckName?: string;
  /** 额定库存 */
  lowerLimit?: number;
  /** 物料名称 */
  name?: string;
  /**
   * 物料性质：1-原材料、2-半成品、3-成品、4-备品备件、5-辅助用品、9-其它
   * @format int32
   */
  property?: number;
  /** 备注 */
  remark?: string;
  /** 规格 */
  standardModel?: string;
  /**
   * 启用1 停用0
   * @format int32
   */
  status?: number;
  /** 材质 */
  stuff?: string;
  /** 物料类型编码 */
  typeCode?: string;
  typeId?: string;
  /** 物料类型名称 */
  typeName?: string;
  /** 计量单位 */
  unit?: string;
  /** 安全库存 */
  upperLimit?: number;
}

/** MdcWorkStationGroupVO */
export interface MdcWorkStationGroupVO {
  /** 工位组编号 */
  groupCode?: string;
  /** 工位组id */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /** 是否默认选中 */
  isDefault?: boolean;
}

/** OffDaySearchVO */
export interface OffDaySearchVO {
  /**
   * 休息日-结束
   * @format date
   */
  endOffDay?: string;
  /**
   * 休息日-开始
   * @format date
   */
  startOffDay?: string;
  /**
   * 年份
   * @format int32
   */
  year?: number;
}

/** OrganizationDTO */
export interface OrganizationDTO {
  code?: string;
  id?: string;
  name?: string;
  parentId?: string;
  parentName?: string;
  /** @format int32 */
  peopleNum?: number;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
}

/** OrganizationSelectVO */
export interface OrganizationSelectVO {
  /**
   * 工位内部存储区分
   * @format int32
   */
  distinguish?: number;
  /**
   * 组子类
   * @format int32
   */
  groupCategory: number;
  /** 组别 */
  groupType: string;
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键字查询 */
  keyword?: string;
  /** 组织名称 */
  name?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  /**
   * 工种
   * @format int32
   */
  workType?: number;
  /** 工位id集合 */
  workstationIdList?: string[];
}

/** OrganizationVO */
export interface OrganizationVO {
  children?: OrganizationVO[];
  /** 拼接的虚拟路径字符串代码 */
  code?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
  /** 父节点名称 */
  parentName?: string;
  /**
   * 部门人数
   * @format int32
   */
  peopleNum?: number;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
}

/** PageNotBandProductQueryVO */
export interface PageNotBandProductQueryVO {
  /** 工艺id */
  craftId?: string;
  /** 关键词 */
  keyword?: string;
}

/** PageTrayVO */
export interface PageTrayVO {
  /**
   * 可用状态 1-激活 0-冻结
   * @format int32
   */
  availability?: number;
  /**
   * 托盘类别
   * @format int32
   */
  category?: number;
  /** 托盘编号 */
  code?: string;
  /** 托盘描述 */
  description?: string;
  /** 工位组id */
  groupId?: string;
  /** 工位组id */
  groupName?: string;
  /** 主键id */
  id?: string;
  /** 托盘名称 */
  name?: string;
  /**
   * 托盘对接编号
   * @format int32
   */
  plcCode?: number;
  /** 备注 */
  remark?: string;
  /** 规格 */
  standardModel?: string;
  /**
   * 托盘状态
   * @format int32
   */
  trayStatus?: number;
}

/** ParallelProVO */
export interface ParallelProVO {
  /** 子序信息 */
  childProcessList?: VersionProcessAddVO[];
  /**
   * 主序的高度
   * @format int32
   */
  height?: number;
  /** 工序编号 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 当前序所在的顺序
   * @format int32
   */
  sort?: number;
  /** 资源ID */
  sourceId?: string;
  /** 目标ID */
  targetId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/** ParamMonitoringSettingsAddVO */
export interface ParamMonitoringSettingsAddVO {
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
  /** 数据标签id */
  usageId?: string;
}

/** ParamMonitoringSettingsUpdateVO */
export interface ParamMonitoringSettingsUpdateVO {
  /** id */
  id?: string;
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
  /** 数据标签id */
  usageId?: string;
}

/** ParamMonitoringSettingsVO */
export interface ParamMonitoringSettingsVO {
  id?: string;
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
  /** 数据标签标志 */
  usageCode?: string;
  /** 数据标签id */
  usageId?: string;
  /** 数据标签 */
  usageName?: string;
}

/** ProcessAssociationDetailVO */
export interface ProcessAssociationDetailVO {
  /** 业务id */
  bizId?: string;
  /** 主键 */
  id?: string;
  /** 工序id */
  processId?: string;
  /**
   * 业务类型：1、工位，2、库区，3、供应商
   * @format int32
   */
  type?: number;
}

/** ProcessAssociationSaveVO */
export interface ProcessAssociationSaveVO {
  /** 业务id */
  bizIds?: string[];
  /** 主键 */
  id?: string;
  /** 工序id */
  processId?: string;
  /**
   * 业务类型：1、工位，2、库区，3、供应商
   * @format int32
   */
  type?: number;
}

/** ProcessAssociationVO */
export interface ProcessAssociationVO {
  id?: string;
  /** 供应商list */
  supplierList?: ProcessSupplierTypeVO[];
  /** 库区list */
  warehouseAreaList?: ProcessWarehouseAreaTypeVO[];
  /** 工位list */
  workstationList?: ProcessWorkstationTypeVO[];
}

/** ProcessDetailVO */
export interface ProcessDetailVO {
  /** 工序编号 */
  code?: string;
  /** 工序描述 */
  description?: string;
  id?: string;
  /** 工序名称 */
  name?: string;
  /** @format int32 */
  status?: number;
  /**
   * 工序类型
   * @format int32
   */
  type?: number;
  /** 工序类型名称 */
  typeName?: string;
}

/** ProcessMainUpdateDTO */
export interface ProcessMainUpdateDTO {
  /** 子序信息 */
  childList?: ProcessNmUpdateDTO[];
  /**
   * 主序的高度
   * @format int32
   */
  height?: number;
  /** 主键id */
  id?: string;
  /**
   * 顺序
   * @format int32
   */
  sort?: number;
  /** 资源ID */
  sourceId?: string;
  /** 目标ID */
  targetId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/** ProcessNmUpdateDTO */
export interface ProcessNmUpdateDTO {
  /** 主键id */
  id?: string;
  /**
   * 顺序
   * @format int32
   */
  sort?: number;
  /** 资源ID */
  sourceId?: string;
  /** 目标ID */
  targetId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/** ProcessParallelSaveVO */
export interface ProcessParallelSaveVO {
  /** 非并序信息 */
  normalProcessList?: VersionProcessAddVO[];
  /** 并序信息 */
  parallelProcessList?: ParallelProVO[];
  /** 版本id */
  versionId?: string;
}

/** ProcessParallelUpdateVO */
export interface ProcessParallelUpdateVO {
  /** 并序信息 */
  mainProcess?: ProcessMainUpdateDTO[];
  /** 正常序修改顺序 */
  normalProcess?: ProcessNmUpdateDTO[];
  /** 需要移除的子序id */
  removeIds?: string[];
  /** 版本id */
  versionId?: string;
}

/** ProcessParallelVO */
export interface ProcessParallelVO {
  /** 工序编号 */
  processCode?: string;
  /** 工序id */
  processId?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 工序类型
   * @format int32
   */
  processType?: number;
  /** 版本工序id  */
  versionProcessId?: string;
}

/** ProcessQueryVO */
export interface ProcessQueryVO {
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词 */
  keyword?: string;
  /**
   * 启用-1 禁用-0
   * @format int32
   */
  status?: number;
}

/** ProcessSaveVO */
export interface ProcessSaveVO {
  /** 工序编号 */
  code?: string;
  /** 工序描述 */
  description?: string;
  id?: string;
  /** 工序名称 */
  name?: string;
  /**
   * 启用1 禁用0
   * @format int32
   */
  status?: number;
  /**
   * 工序类型
   * @format int32
   */
  type?: number;
}

/** ProcessSupplierTypeVO */
export interface ProcessSupplierTypeVO {
  id?: string;
  /** 供应商编号 */
  supplierCode?: string;
  /** 供应商名称 */
  supplierName?: string;
}

/** ProcessVO */
export interface ProcessVO {
  /** 工序编号 */
  code?: string;
  /** 工序描述 */
  description?: string;
  id?: string;
  /** 工序名称 */
  name?: string;
  /**
   * 启用1 停用0
   * @format int32
   */
  status?: number;
  /**
   * 工序类型
   * @format int32
   */
  type?: number;
  typeName?: string;
}

/** ProcessWarehouseAreaTypeVO */
export interface ProcessWarehouseAreaTypeVO {
  id?: string;
  /** 库区编号 */
  warehouseAreaCode?: string;
  /** 库区名称 */
  warehouseAreaName?: string;
}

/** ProcessWorkstationTypeVO */
export interface ProcessWorkstationTypeVO {
  id?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** ProductEasyVO */
export interface ProductEasyVO {
  /** 产品编号 */
  code?: string;
  /** 产品描述 */
  description?: string;
  /** 产品文档 */
  documents?: string;
  /** 扩展字段 */
  extendField?: string;
  /** 是否有子集 */
  hasChild?: boolean;
  /** 主键id */
  id?: string;
  /** 产品名称 */
  name?: string;
  /** 上级产品ID */
  parentId?: string;
  /** 规格型号 */
  standardModel?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /** 产品类型id */
  typeId?: string;
  /** 产品类型 */
  typeName?: string;
  /** 计量单位 */
  unit?: string;
}

/** ProductSearchVO */
export interface ProductSearchVO {
  /** 扩展字段查询条件列表 */
  filter?: CustomFieldValueVO[];
  /** 选中的列表数据 */
  ids?: string[];
  /** 编号/名称 */
  keyWord?: string;
  /** 规格型号 */
  standardModel?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /** 产品类型 */
  typeId?: string[];
}

/** ProductTypePlanVO */
export interface ProductTypePlanVO {
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /** 该类型下的产品 */
  productList?: Product[];
  /** 备注/说明 */
  remark?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
}

/** ProductionCalendarVO */
export interface ProductionCalendarVO {
  /** 日历编号 */
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
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 日历名称 */
  name?: string;
  /**
   * 启用禁用
   * @format int32
   */
  status?: number;
  /** 租户id */
  tenantId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /**
   * 应用年份
   * @format int32
   */
  year?: number;
}

/** ProductionCraftProcessDetailVO */
export interface ProductionCraftProcessDetailVO {
  /** 工艺包id */
  bagId?: string;
  /** 工艺包名称 */
  bagName?: string;
  /**
   * 选择程序文件
   * @format int32
   */
  chooseType?: number;
  /** 配置项：1 标准用时 2 附件 3 工装 4 加工程序  逗号隔开 */
  configurationItem?: string;
  /**
   * 拆卸工时
   * @format int32
   */
  disassemblyTime?: number;
  /** 附件 */
  files?: ProductionCraftProcessFileVo[];
  /** 工序关联夹具 */
  fixtures?: ProductionCraftProcessRelatedFixtureVo[];
  /**
   * 不合格品处理方式 0-出线 1-返线,上一序返工 2-返线,执行后序工序, 3-HMI选择
   * @format int32
   */
  handlerMethod?: number;
  /** 主键 */
  id?: string;
  /** 测量序需要测量方式 0-频次抽检 1-信号抽检 2-首件检 3-末件检 */
  meaMethod?: number[];
  /**
   * 只有频次抽检需要维护 0-必检工序; !=0 频次抽检
   * @format int32
   */
  meaMethodValue?: number;
  /** 父级id */
  parentId?: string;
  /**
   * 准备工时
   * @format int32
   */
  prepareTime?: number;
  /** 工序编码 */
  processCode?: string;
  /** 所属生产工序 */
  processId?: string;
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
  /**
   * 程序名称
   * @minLength 0
   * @maxLength 255
   */
  programName?: string;
  /**
   * 程序类型
   * @format int32
   */
  programType?: number;
  /**
   * 工序顺序
   * @format int32
   */
  sort?: number;
  /** 资源ID */
  sourceId?: string;
  /**
   * 标准工时（秒）
   * @format int32
   */
  standardTime?: number;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 目标ID */
  targetId?: string;
  /**
   * 所属租户
   * @minLength 0
   * @maxLength 6
   */
  tenantId?: string;
  /** 工序关联刀具 */
  tools?: ProductionCraftProcessRelatedToolVo[];
  /**
   * 运输工时
   * @format int32
   */
  transportTime?: number;
  /** 所属工艺 */
  versionId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
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

/** RealTimeStatusVO */
export interface RealTimeStatusVO {
  /** 大屏 */
  bigScreen?: boolean;
  /** 主键 */
  key?: string;
  /** 名称 */
  name?: string;
  /** 过程参数 */
  processParameter?: boolean;
  /** 实时数据 */
  realTimeData?: boolean;
  /**
   * 顺序
   * @format int32
   */
  sort?: number;
  /**
   * 单位
   * @format int32
   */
  unit?: number;
  /** 最新值 */
  value?: string;
  /**
   * 数据类型
   * @format int32
   */
  wcsDataType?: number;
}

/** RemoveIdsDTO */
export interface RemoveIdsDTO {
  id?: string;
  othersId?: string;
}

/** SearchVO */
export interface SearchVO {
  params?: KV[];
}

/** ShiftDetailDTO */
export interface ShiftDetailDTO {
  /** 班次序号名称 */
  indexName?: string;
  /** 班次模型Id */
  modelId?: string;
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
  shiftRestTimeDTOList?: ShiftRestTimeDTO[];
  /**
   * 班次开始时间
   * @format int32
   */
  shiftStartTime?: number;
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

/**
 * ShiftIndexNameVO
 * 班次名称VO
 */
export interface ShiftIndexNameVO {
  /** key-name */
  keyNameDTOList?: KeyNameDTO[];
}

/** ShiftModelSearchVO */
export interface ShiftModelSearchVO {
  /** 班次方案 */
  code?: string;
  /** 班次名称 */
  name?: string;
  /** 状态集合 */
  statusList?: number[];
}

/** ShiftModelVO */
export interface ShiftModelVO {
  /** 班次编号 */
  code?: string;
  /** 班次颜色 */
  colour?: string;
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
   * 班次日结束时间
   * @format int32
   */
  endTime?: number;
  /** 主键id */
  id?: string;
  /**
   * 是否默认
   * @format int32
   */
  isDefault?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 班次名称 */
  name?: string;
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
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户Id */
  tenantId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/** ShiftRestTimeDTO */
export interface ShiftRestTimeDTO {
  /** 主键id */
  id?: string;
  /**
   * 休息时段结束时间
   * @format int32
   */
  restEndTime?: number;
  /**
   * 休息时段下标
   * @format int32
   */
  restIndex?: number;
  /**
   * 休息时段开始时间
   * @format int32
   */
  restStartTime?: number;
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

/** ShiftSaveVO */
export interface ShiftSaveVO {
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
  /** 班次名称 */
  name?: string;
  /** 班次时间 */
  shiftDetailDTOList?: ShiftDetailDTO[];
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
 * ShiftSimpleVO
 * 班次模型DTO
 */
export interface ShiftSimpleVO {
  /** 班次编号 */
  code?: string;
  /** 班次颜色 */
  colour?: string;
  /** 主键 */
  id?: string;
  /** 班次名称 */
  name?: string;
}

/** ShiftUpdateBasicVO */
export interface ShiftUpdateBasicVO {
  /** 班次颜色 */
  colour?: string;
  /** 主键 */
  id?: string;
  /** 班次名称 */
  name?: string;
  /**
   * 启用禁用按钮1-启动0-禁用
   * @format int32
   */
  status?: number;
}

/** ShiftUpdateVO */
export interface ShiftUpdateVO {
  /**
   * 班次日结束时间
   * @format int32
   */
  endTime?: number;
  /** 主键 */
  id?: string;
  /** 班次时间 */
  shiftDetailDTOList?: ShiftDetailDTO[];
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

/** SupplierDetailVO */
export interface SupplierDetailVO {
  /** 供应商地址 */
  address?: string;
  /** 供应商编号 */
  code?: string;
  id?: string;
  /** 供应商名称 */
  name?: string;
  /** 供应商联系方式 */
  tel?: string;
}

/** SupplierSaveVO */
export interface SupplierSaveVO {
  /** 供应商地址 */
  address?: string;
  /** 供应商编号 */
  code?: string;
  id?: string;
  /** 供应商名称 */
  name?: string;
  /** 供应商联系方式 */
  tel?: string;
}

/** SupplierVO */
export interface SupplierVO {
  /** 供应商地址 */
  address?: string;
  /** 供应商编号 */
  code?: string;
  id?: string;
  /** 供应商名称 */
  name?: string;
  /** 供应商联系方式 */
  tel?: string;
}

/** SynchronizedProductMaterialVO */
export interface SynchronizedProductMaterialVO {
  /**
   * 是否强制删除
   * @format int32
   */
  isDeleted?: number;
  /** 物料类型Id */
  materialTypeId: string;
  /** 产品编码名称集合 */
  productList?: ProductVo1[];
}

/** TagCommonGroupVO */
export interface TagCommonGroupVO {
  /** 组标签 */
  groupTag?: string;
  /** 主键 */
  id?: string;
}

/** ToolAppendixAddVO */
export interface ToolAppendixAddVO {
  /** 文件信息 */
  toolAppendixList?: ToolAppendixDTO[];
}

/** ToolAppendixDTO */
export interface ToolAppendixDTO {
  /** 文件mini类型 */
  contentType?: string;
  /** 文件大小 */
  fileLength?: string;
  /** 文件链接 */
  fileLink?: string;
  /** 文件名称 */
  fileName?: string;
  /** 文件key */
  objectKey?: string;
  /** 父id */
  parentId?: string;
}

/** ToolingVO */
export interface ToolingVO {
  children?: ToolingVO[];
  /** 拼接的虚拟路径字符串代码 */
  code?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /**
   * 节点类型： 0根节点 1默认节点  2常规节点
   * @format int32
   */
  nodeType?: number;
  /**
   * 部门人数
   * @format int32
   */
  numbers?: number;
  /** 父节点ID */
  parentId?: string;
  /** 父节点名称 */
  parentName?: string;
}

/** TrayEasyVO */
export interface TrayEasyVO {
  /**
   * 可用状态 1-激活 0-冻结
   * @format int32
   */
  availability?: number;
  /** 托盘编号 */
  code?: string;
  /** 主键id */
  id?: string;
  /** 托盘名称 */
  name?: string;
  /**
   * 托盘对接编号
   * @format int32
   */
  plcCode?: number;
  /**
   * 托盘状态 1 - 空载 0 - 负载
   * @format int32
   */
  trayStatus?: number;
}

/** TrayFaceAddVO */
export interface TrayFaceAddVO {
  /** 托盘面编号 */
  code?: string;
  /** 托盘面名称 */
  name?: string;
  /** 偏移程序编号 */
  programCode?: string;
  /** 托盘id */
  trayId?: string;
}

/** TrayFaceDTO */
export interface TrayFaceDTO {
  /** 托盘面编号 */
  faceCode?: string;
  /** 托盘面名称 */
  faceName?: string;
  /** 偏移程序编号 */
  programCode?: string;
}

/** TrayFaceFixtureAddVO */
export interface TrayFaceFixtureAddVO {
  /** 托盘面id */
  faceId?: string;
  /** 夹具id */
  fixIds?: string[];
  /** 托盘id */
  trayId?: string;
}

/** TrayFaceFixtureVO */
export interface TrayFaceFixtureVO {
  /** 托盘面id */
  faceId?: string;
  /** 夹具id */
  fixId?: string;
  /** 夹具编号 */
  fixtureCode?: string;
  /** 夹具名称 */
  fixtureName?: string;
  /** 主键 */
  id?: string;
  /** 托盘id */
  trayId?: string;
}

/** TrayFaceUpdateVO */
export interface TrayFaceUpdateVO {
  /** 托盘面id */
  id?: string;
  /** 托盘面名称 */
  name?: string;
}

/** TrayFixRemoveVO */
export interface TrayFixRemoveVO {
  ids?: RemoveIdsDTO[];
}

/** TraySaveVO */
export interface TraySaveVO {
  /**
   * 可用状态 1-激活 0-冻结
   * @format int32
   */
  availability?: number;
  /**
   * 托盘类别
   * @format int32
   */
  category?: number;
  /** 托盘编号 */
  code?: string;
  /** 托盘描述 */
  description?: string;
  /** 托盘面 */
  faceList?: TrayFaceDTO[];
  /** 托盘组Id */
  groupId?: string;
  /** 托盘名称 */
  name?: string;
  /** 托盘图片 */
  picture?: string;
  /**
   * 托盘对接编号
   * @format int32
   */
  plcCode?: number;
  /** 备注 */
  remark?: string;
  /** 规格 */
  standardModel?: string;
  /**
   * 托盘状态
   * @format int32
   */
  trayStatus?: number;
}

/** TrayStorageAddVO */
export interface TrayStorageAddVO {
  /** 托盘id */
  trayIds?: string[];
  /** 库位id */
  warehouseStationId?: string;
}

/** TrayTreeVO */
export interface TrayTreeVO {
  children?: TrayTreeVO[];
  /** 编码 */
  code?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  isGroup?: boolean;
  /** 名称 */
  name?: string;
  /**
   * 节点类型： 0根节点 1默认节点  2常规节点
   * @format int32
   */
  nodeType?: number;
  /** 父节点ID */
  parentId?: string;
}

/** TrayUpdateVO */
export interface TrayUpdateVO {
  /**
   * 可用状态 1-激活 0-冻结
   * @format int32
   */
  availability?: number;
  /**
   * 托盘类别
   * @format int32
   */
  category?: number;
  /** 托盘描述 */
  description?: string;
  /** 托盘组Id */
  groupId?: string;
  /** 主键id */
  id?: string;
  /** 托盘名称 */
  name?: string;
  /** 托盘图片 */
  picture?: string;
  /** 备注 */
  remark?: string;
  /** 规格 */
  standardModel?: string;
  /**
   * 托盘状态 1 - 空载 0 - 负载
   * @format int32
   */
  trayStatus?: number;
}

/** TrayVO */
export interface TrayVO {
  /**
   * 可用状态 1-激活 0-冻结
   * @format int32
   */
  availability?: number;
  /** 托盘类别 */
  category?: string;
  /** 托盘编号 */
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
  /** 托盘描述 */
  description?: string;
  /**
   * 托盘面数
   * @format int32
   */
  faceNumber?: number;
  /** 工位组id */
  groupId?: string;
  /** 工位组id */
  groupName?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否使用 默认为0
   * @format int32
   */
  inUse?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 托盘名称 */
  name?: string;
  /** 托盘图片 */
  picture?: string;
  /**
   * 托盘对接编号
   * @format int32
   */
  plcCode?: number;
  /** 备注 */
  remark?: string;
  /** 规格 */
  standardModel?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /**
   * 托盘状态
   * @format int32
   */
  trayStatus?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/** UpdateCommonGroupVO */
export interface UpdateCommonGroupVO {
  /** 组编码 */
  code?: string;
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
  /** 主键 */
  id?: string;
  /** 组名 */
  name?: string;
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
}

/** UpdateParallelProcessVO */
export interface UpdateParallelProcessVO {
  /** 主键 */
  id?: string;
  /** 工序编号 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 顺序
   * @format int32
   */
  sort?: number;
}

/** VersionProcessAddVO */
export interface VersionProcessAddVO {
  /** 工艺包id */
  bagId?: string;
  /** 工艺包名称 */
  bagName?: string;
  /**
   * 选择程序文件
   * @format int32
   */
  chooseType?: number;
  /** 配置项：1 标准用时 2 附件 3 工装 4 加工程序  逗号隔开 */
  configurationItem?: string;
  /**
   * 装卸卸工时
   * @format int32
   */
  disassemblyTime?: number;
  /** 附件 */
  files?: ProductionCraftProcessFileVo[];
  /** 工序关联夹具 */
  fixtures?: ProductionCraftProcessRelatedFixtureVo[];
  /**
   * 不合格品处理方式 0-出线 1-返线,上一序返工 2-返线,执行后序工序, 3-HMI选择
   * @format int32
   */
  handlerMethod?: number;
  /** 测量序需要测量方式 0-频次抽检 1-信号抽检 2-首件检 3-末件检 */
  meaMethod?: string;
  /**
   * 只有频次抽检需要维护 0-必检工序; !=0 频次抽检
   * @format int32
   */
  meaMethodValue?: number;
  /**
   * 准备工时
   * @format int32
   */
  prepareTime?: number;
  /** 工序编码 */
  processCode?: string;
  /** 工序描述 */
  processDesc?: string;
  /** 所属生产工序 */
  processId?: string;
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
   * 程序类型
   * @format int32
   */
  programType?: number;
  /**
   * 工序顺序
   * @format int32
   */
  sort?: number;
  /** 资源ID */
  sourceId?: string;
  /**
   * 标准工时（秒）
   * @format int32
   */
  standardTime?: number;
  /** 目标ID */
  targetId?: string;
  /** 工序关联刀具 */
  tools?: ProductionCraftProcessRelatedToolVo[];
  /**
   * 运输工时
   * @format int32
   */
  transportTime?: number;
  /**
   * 是否并行
   * @format int32
   */
  whetherParallel?: number;
  /**
   * 是否质检
   * @format int32
   */
  whetherTest?: number;
  xcoordinate?: string;
  ycoordinate?: string;
}

/** VersionProcessParallelVO */
export interface VersionProcessParallelVO {
  /**
   * 主序的高度
   * @format int32
   */
  height?: number;
  /** 并序相关序信息 */
  parallelVO?: ProcessParallelVO[];
  /** 工序编号 */
  processCode?: string;
  /** 工序名称 */
  processName?: string;
  /**
   * 当前序所在的顺序
   * @format int32
   */
  sort?: number;
  /** 资源ID */
  sourceId?: string;
  /** 目标ID */
  targetId?: string;
  /** 工艺路线版本id */
  versionId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/** VersionProcessTreeVO */
export interface VersionProcessTreeVO {
  children?: VersionProcessTreeVO[];
  hasChildren?: boolean;
  /** @format int32 */
  height?: number;
  /** 主键 */
  id?: string;
  parentId?: string;
  processCode?: string;
  processId?: string;
  processName?: string;
  /** @format int32 */
  processType?: number;
  /** @format int32 */
  sort?: number;
  /** 资源ID */
  sourceId?: string;
  /** 目标ID */
  targetId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/** VersionProcessUpdateVO */
export interface VersionProcessUpdateVO {
  /** 工艺包id */
  bagId?: string;
  /** 工艺包名称 */
  bagName?: string;
  /**
   * 选择程序文件
   * @format int32
   */
  chooseType?: number;
  /** 配置项：1 标准用时 2 附件 3 工装 4 加工程序  逗号隔开 */
  configurationItem?: string;
  /**
   * 装卸卸工时
   * @format int32
   */
  disassemblyTime?: number;
  /** 附件 */
  files?: ProductionCraftProcessFileVo[];
  /** 工序关联夹具 */
  fixtures?: ProductionCraftProcessRelatedFixtureVo[];
  /**
   * 不合格品处理方式 0-出线 1-返线,上一序返工 2-返线,执行后序工序, 3-HMI选择
   * @format int32
   */
  handlerMethod?: number;
  /** 主键id */
  id?: string;
  /** 测量序需要测量方式 0-频次抽检 1-信号抽检 2-首件检 3-末件检 */
  meaMethod?: number[];
  /**
   * 只有频次抽检需要维护 0-必检工序; !=0 频次抽检
   * @format int32
   */
  meaMethodValue?: number;
  /**
   * 准备工时
   * @format int32
   */
  prepareTime?: number;
  /** 程序Id */
  programId?: string;
  /** 程序名称 */
  programName?: string;
  /**
   * 程序类型
   * @format int32
   */
  programType?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 标准工时（秒）
   * @format int32
   */
  standardTime?: number;
  /** 工序关联刀具 */
  tools?: ProductionCraftProcessRelatedToolVo[];
  /**
   * 运输工时
   * @format int32
   */
  transportTime?: number;
  /** 版本id */
  versionId?: string;
}

/** WareMaterialStorageVO */
export interface WareMaterialStorageVO {
  /** 主键 */
  id?: string;
  /**
   * 是否必检
   * @format int32
   */
  isMustCheck?: number;
  /** 额定库存 */
  lowerLimit?: number;
  /** 物料编号 */
  materialCode?: string;
  /** 物料id */
  materialId?: string;
  /** 物料名称 */
  materialName?: string;
  /** 物料规格 */
  materialStandardModel?: string;
  /** 物料单位 */
  materialUnit?: string;
  /**
   * 物料属性
   * @format int32
   */
  property?: number;
  /** 物料类型编码 */
  typeCode?: string;
  /** 物料类型id */
  typeId?: string;
  /** 物料类型名称 */
  typeName?: string;
  /** 安全库存 */
  upperLimit?: number;
  /** 库位id */
  warehouseStationId?: string;
}

/** WareTrayStorageVO */
export interface WareTrayStorageVO {
  /** 夹具编号 */
  fixtureCode?: string;
  /** 主键 */
  id?: string;
  /** 托盘编号 */
  trayCode?: string;
  /** 托盘id */
  trayId?: string;
  /** 托盘名称 */
  trayName?: string;
  /** 库位id */
  warehouseStationId?: string;
}

/** WarehouseAreaStationVO */
export interface WarehouseAreaStationVO {
  children?: WarehouseAreaStationVO[];
  /** 编码 */
  code?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 是库区 */
  isArea?: boolean;
  /** 名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
}

/**
 * WarehouseAreaSubmitVO
 * 库区信息
 */
export interface WarehouseAreaSubmitVO {
  /** 库区编码 */
  code?: string;
  /** 主键 */
  id?: string;
  /** 库区名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
  /** 备注 */
  remark?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /** 所属租户 */
  tenantId?: string;
}

/**
 * WarehouseAreaUpdateVO
 * 库区信息
 */
export interface WarehouseAreaUpdateVO {
  /** 库区编码 */
  code?: string;
  /** 主键 */
  id?: string;
  /** 库区名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
  /** 备注 */
  remark?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /** 所属租户 */
  tenantId?: string;
}

/** WarehouseExportVO */
export interface WarehouseExportVO {
  /** 库区id */
  areaId?: string;
  /** 选中的列表数据 */
  ids?: string[];
  /** 库位编号或库位名称 */
  keyword?: string;
}

/** WarehouseGridCreateVO */
export interface WarehouseGridCreateVO {
  /**
   * 货格编号
   * @minLength 0
   * @maxLength 32
   */
  code?: string;
  /**
   * 货格名称
   * @minLength 0
   * @maxLength 32
   */
  name?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /** 库位id */
  stationId?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /**
   * 所属租户
   * @minLength 0
   * @maxLength 6
   */
  tenantId?: string;
}

/** WarehouseGridUpdateVO */
export interface WarehouseGridUpdateVO {
  /**
   * 货格编号
   * @minLength 0
   * @maxLength 32
   */
  code?: string;
  /** id */
  id?: string;
  /**
   * 货格名称
   * @minLength 0
   * @maxLength 32
   */
  name?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /** 库位id */
  stationId?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /**
   * 所属租户
   * @minLength 0
   * @maxLength 6
   */
  tenantId?: string;
}

/** WcsAchievementsUpdateVO */
export interface WcsAchievementsUpdateVO {
  /**
   * 状态码
   * @minLength 0
   * @maxLength 999
   */
  code?: string;
  /** 颜色 */
  color?: string;
  /**
   * 计划内外：0 计划内  1 计划外
   * @format int32
   */
  isPlan?: number;
  /** 名称 */
  name?: string;
  /**
   * 绩效时间
   * @format int32
   */
  rps?: number;
  /**
   * 排序编号
   * @format int32
   */
  seq?: number;
  /**
   * 1系统默认,2业务逻辑,4反馈
   * @format int32
   */
  type?: number;
}

/** WcsAndAchievementsVO */
export interface WcsAndAchievementsVO {
  /** 状态码 */
  code?: string;
  /** 颜色 */
  color?: string;
  /**
   * 计划内外：0 计划内  1 计划外
   * @format int32
   */
  isPlan?: number;
  /** 名称 */
  name?: string;
  /**
   * 绩效时间
   * @format int32
   */
  rps?: number;
  /**
   * 1系统默认,2业务逻辑,4反馈
   * @format int32
   */
  type?: number;
}

/** WorkMachineEasyVO */
export interface WorkMachineEasyVO {
  machineCode?: string;
  /** 机器名称 */
  machineId?: string;
  machineName?: string;
  pinCode?: string;
  shortCode?: string;
  /** 工位编号 */
  workCode?: string;
  /** 工位名称 */
  workName?: string;
  /** 工位id */
  workstationId?: string;
}

/** WorkstationChangeCalendarVO */
export interface WorkstationChangeCalendarVO {
  /** 代生效生产日历编号 */
  calendarCodeWaiting: string;
  /** 工位id */
  workstationId: string;
}

/** WorkstationDataTypeExecParamVO */
export interface WorkstationDataTypeExecParamVO {
  /** 显示在前端的添加的标题 */
  label?: string;
  /** 传到后台的参数名称 */
  name?: string;
  /** 数据类型，需要根据数据类型渲染参数 */
  type?: string;
}

/** WorkstationGroupVO */
export interface WorkstationGroupVO {
  /** 编码 */
  code?: string;
  /** 组标签 */
  groupTag?: string;
  /** 工位组id */
  id?: string;
  /** 工位组名称 */
  name?: string;
  /** 工位组上下级的路径 */
  path?: string;
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

/** WorkstationOfWorkbenchVO */
export interface WorkstationOfWorkbenchVO {
  /**
   * 工种
   * @format int32
   */
  workType?: number;
  /** 工位编码 */
  workstationCode?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
  /** 工作台集合 */
  workstationWorkbenchVOList?: WorkstationWorkbenchVO[];
}

/** WorkstationPageQueryVO */
export interface WorkstationPageQueryVO {
  /** 设备状态 */
  deviceStatus?: number[];
  /** 关键字 */
  keyWord?: string;
  /**
   * 状态 0-禁用 1-启用
   * @format int32
   */
  status?: number;
  /**
   * 工位类型 0-机器 1-人工
   * @format int32
   */
  type?: number;
}

/** WorkstationRealTimeStatusDTO */
export interface WorkstationRealTimeStatusDTO {
  /** 设备状态 */
  deviceStatus?: number[];
  /** 工位组Id */
  workStationGroupIdList?: string[];
}

/** WorkstationRealTimeStatusVO */
export interface WorkstationRealTimeStatusVO {
  /** 工位图片 */
  avatar?: string;
  /** 生产日历编码 */
  calendarCode?: string;
  /** 生产日历名称 */
  calendarName?: string;
  /** 工位名称 */
  code?: string;
  /** 工位组id */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /** 工位id */
  id?: string;
  /** 机器品牌 */
  machineBrand?: string;
  /** 机器编号 */
  machineCode?: string;
  /** 机器Id */
  machineId?: string;
  /** 机器名称 */
  machineName?: string;
  /** 工位名称 */
  name?: string;
  /** 实时数据 */
  properties?: RealTimeStatusVO[];
  /**
   * 工位类型
   * @format int32
   */
  type?: number;
}

/** WorkstationSearchVO */
export interface WorkstationSearchVO {
  /** 扩展字段条件 */
  filter?: CustomFieldValueVO[];
  /** 工位名称或编号 */
  keyWord?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /**
   * 类型 机器  人工
   * @format int32
   */
  type?: number;
}

/** WorkstationStatusInfo */
export interface WorkstationStatusInfo {
  currentStatus?: string;
  timestamp?: string;
  workstationId?: string;
}

/** WorkstationSubmitVO */
export interface WorkstationSubmitVO {
  /** 工位图片地址 */
  avatar?: string;
  /** 生产日历编码 */
  calendarCode?: string;
  /** 待生效生产日历编号 */
  calendarCodeWaiting?: string;
  /** 工位编号 */
  code?: string;
  /**
   * 采集开关：0关/1开
   * @format int32
   */
  collectSwitch?: number;
  /** 权限 */
  createDept?: string;
  /**
   * 设备停机时间 （秒）
   * @format int32
   */
  deviceMinutes?: number;
  /**
   * 工位设备类型 1-打标设备、2-测量设备、3-清洗设备、4-装卸站、5-加工设备、6-搬运设备、7-三坐标、0-其他
   * @format int32
   */
  deviceType?: number;
  /** 关联FTP目录id */
  directoryId?: string;
  /** dmp */
  dmpName?: string;
  /** 扩展字段 */
  extendField?: string;
  /** 扩展id */
  extendId?: string;
  /**
   * FTP：1 关联目录 2 创建同名目录
   * @format int32
   */
  ftpDirectoryType?: number;
  /**
   * 组子类
   * @format int32
   */
  groupCategory?: number;
  /** 工位组id */
  groupId?: string;
  /** 组别 */
  groupType?: string;
  /** 主键 */
  id?: string;
  /** 报警库id */
  libraryId?: string;
  /**
   * 关联设备方式, 0-选择设备  1-创建同名设备
   * @format int32
   */
  linkWay?: number;
  /** 机器品牌 */
  machineBrand?: string;
  /** 机器编号 */
  machineCode?: string;
  /** 机器组id */
  machineGroupId?: string;
  /** 机器id */
  machineId?: string;
  /** 机器名称 */
  machineName?: string;
  /** 机器PIN码 */
  machinePinCode?: string;
  /** 机器短编号 */
  machineShortCode?: string;
  /** 工位名称 */
  name?: string;
  /**
   * plc对接编号
   * @format int32
   */
  plcCode?: number;
  /**
   * 加工属性 0:单主轴加工 1:双主轴加工
   * @format int32
   */
  properties?: number;
  /** 顺序 */
  sort?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
  /** 租户ID--同步时没有token主动传入 */
  tenantId?: string;
  /**
   * 程序传输方式：0-关闭，1-在线写入，2-ftp，3-串口传输
   * @format int32
   */
  transmissionMethod?: number;
  /**
   * 工位类型：机器、人工
   * @format int32
   */
  type?: number;
  /** 工作台集合 */
  workbenchVOList?: WorkstationWorkbenchVO[];
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

/** WorkstationWcsDTO */
export interface WorkstationWcsDTO {
  /** 工位数据项 */
  dataItem?: string;
  dataItemCrc?: string;
  /**
   * 数据类型 0-状态 1-产量 2-其他
   * @format int32
   */
  dataType?: number;
  /** 采集项 */
  dmpVariablesId?: string;
  /** id */
  id?: string;
  usageId?: string;
  /** 工位id */
  workstationId?: string;
}

/** WorkstationWcsSaveNewVO */
export interface WorkstationWcsSaveNewVO {
  /** 大屏 */
  bigScreen?: boolean;
  /** 采集项 */
  collectSettingItem: string;
  /** 工位变量显示名称 */
  dataItem: string;
  /**
   * 采集用途
   * @format int32
   */
  dataType: number;
  /** 采集变量名称对应采集项id */
  dmpVariablesId: string;
  /** id */
  id?: string;
  /** 过程参数 */
  processParameter?: boolean;
  /** 实时数据 */
  realTimeData?: boolean;
  /** 数据标签 */
  usageId?: string;
}

/** WorkstationWcsSaveVO */
export interface WorkstationWcsSaveVO {
  /** 大屏 */
  bigScreen?: boolean;
  /** 采集项 */
  collectSettingItem: string;
  /** 工位变量显示名称 */
  dataItem: string;
  /**
   * 采集用途
   * @format int32
   */
  dataType: number;
  /** 采集项Id */
  dmpVariablesId: string;
  /** id */
  id?: string;
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
  usageId: string;
  workstationId?: string;
}

/** WorkstationWcsUsageVO */
export interface WorkstationWcsUsageVO {
  /** @format int32 */
  collectType: number;
  dataTypeDesc?: string;
  id?: string;
  parameter?: string;
  usageCode?: string;
  usageName?: string;
}

/** WorkstationWcsVO */
export interface WorkstationWcsVO {
  /** 大屏 */
  bigScreen?: boolean;
  /** 采集变量名称 */
  collectItemDesc: string;
  /** 采集项 */
  collectSettingItem?: string;
  /** 工位变量名称 */
  dataItem: string;
  /**
   * 采集用途 0-状态 1-产量 2-其他
   * @format int32
   */
  dataType: number;
  /** 采集用途描述 */
  dataTypeDesc?: string;
  /**
   * 数据类型
   * @format int32
   */
  dmpVariablesDateType: number;
  /** 采集项id */
  dmpVariablesId: string;
  /** id */
  id?: string;
  /** 过程参数 */
  processParameter?: boolean;
  /** 实时数据 */
  realTimeData?: boolean;
  usageId?: string;
  usageName?: string;
  /** 工位id */
  workstationId: string;
}

/** WorkstationWorkbench */
export interface WorkstationWorkbench {
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
  name?: string;
  /** @format int32 */
  sort?: number;
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
  /** @format int32 */
  workbenchDefault?: number;
  workstationId?: string;
}

/** WorkstationWorkbenchVO */
export interface WorkstationWorkbenchVO {
  /**
   * 工位涉笔类型
   * @format int32
   */
  deviceType?: number;
  /** 工作台ID */
  id?: string;
  /**
   * 是否删除
   * @format int32
   */
  isDeleted?: number;
  /** 工作台名称 */
  name?: string;
  /**
   * 工位加工属性
   * @format int32
   */
  properties?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 工作台是否为默认：1/是，0/否
   * @format int32
   */
  workbenchDefault?: number;
  /** 工位编码 */
  workstationCode?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/**
 * BomMaterialDetailVO对象
 * bom物料详情
 */
export interface BomMaterialDetailVO {
  /**
   * allPath
   * @minLength 0
   * @maxLength 255
   */
  allPath?: string;
  children?: BomMaterialDetailVO[];
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /**
   * 是否必检：0-非必检，1-必检
   * @format int32
   */
  isMustCheck?: number;
  /** 额定库存 */
  lowerLimit?: number;
  /** 物料编码 */
  materialCode?: string;
  /** 物料id */
  materialId?: string;
  /** 物料名称 */
  materialName?: string;
  /** 物料类型 */
  materialTypeId?: string;
  /** 物料类型名称 */
  materialTypeName?: string;
  /** 父级Id */
  parentId?: string;
  /**
   * 物料性质
   * @format int32
   */
  property?: number;
  /** 物料性质 */
  propertyName?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /** 规格 */
  standardModel?: string;
  /** 计量单位 */
  unit?: string;
  /** 安全库存 */
  upperLimit?: number;
  /** bom版本id */
  versionId?: string;
}

/**
 * BomMaterialVo对象
 * bom物料
 */
export interface BomMaterialVo {
  /**
   * allPath
   * @minLength 0
   * @maxLength 255
   */
  allPath?: string;
  /** 主键 */
  id?: string;
  /** 物料id */
  materialId?: string;
  /** 父级Id */
  parentId?: string;
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
   * 所属租户
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
  /** bom版本id */
  versionId?: string;
}

/**
 * BomProcessAddVO对象
 * bom物料工序新增
 */
export interface BomProcessAddVO {
  /** bom版本Id */
  bomId?: string;
  /** bom物料Id */
  bomMaterialId?: string;
  /**
   * 用量分母
   * @format int32
   */
  denominator?: number;
  /** 固定损耗 */
  loss?: number;
  /**
   * 用量分子
   * @format int32
   */
  molecule?: number;
  /** 用料工序id */
  processId?: string;
}

/**
 * BomProcessDeleteVO对象
 * bom物料工序删除
 */
export interface BomProcessDeleteVO {
  /** bom版本Id */
  bomId?: string;
  /** 主键 */
  id?: string;
}

/**
 * BomProcessDetailVO对象
 * bom物料工序
 */
export interface BomProcessDetailVO {
  /** bom物料Id */
  bomMaterialId?: string;
  /**
   * 用量分母
   * @format int32
   */
  denominator?: number;
  /** 主键 */
  id?: string;
  /** 固定损耗 */
  loss?: number;
  /**
   * 用量分子
   * @format int32
   */
  molecule?: number;
  /** 用料工序id */
  processCode?: string;
  /** 用料工序id */
  processId?: string;
  /** 用料工序id */
  processName?: string;
}

/**
 * BomProcessVo对象
 * bom物料工序
 */
export interface BomProcessVo {
  /** bom物料Id */
  bomMaterialId?: string;
  /**
   * 用量分母
   * @format int32
   */
  denominator?: number;
  /** 主键 */
  id?: string;
  /** 固定损耗 */
  loss?: number;
  /**
   * 用量分子
   * @format int32
   */
  molecule?: number;
  /** 用料工序id */
  processId?: string;
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
}

/**
 * BomVersionDetailVO对象
 * bom版本
 */
export interface BomVersionDetailVO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /**
   * 版本描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /** 主键 */
  id?: string;
  /** 产品ID */
  productId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /**
   * 版本名称
   * @minLength 0
   * @maxLength 32
   */
  version?: string;
  /**
   * 版本状态(0：未定版，1：已定版)
   * @format int32
   */
  versionStatus?: number;
}

/**
 * BomVersionVo对象
 * bom版本
 */
export interface BomVersionVo {
  /** 工艺版本id */
  craftId?: string;
  /**
   * 工艺版本
   * @minLength 0
   * @maxLength 32
   */
  craftVersion?: string;
  /**
   * 版本描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /** 主键 */
  id?: string;
  /** 产品id */
  productId?: string;
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
   * 所属租户
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
  /**
   * 版本
   * @minLength 0
   * @maxLength 32
   */
  version?: string;
  /**
   * 版本状态(0：未定版，1：已定版)
   * @format int32
   */
  versionStatus?: number;
}

/**
 * BomVersionVo更新对象
 * bom版本更新
 */
export interface BomVersionVo2 {
  /**
   * 版本描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /** 主键 */
  id?: string;
  /**
   * 版本
   * @minLength 0
   * @maxLength 32
   */
  version?: string;
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

/** IPage«AllFixtureGroupVO» */
export interface IPageAllFixtureGroupVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AllFixtureGroupVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«BomMaterialDetailVO对象» */
export interface IPageBomMaterialDetailVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: BomMaterialDetailVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«BomProcessDetailVO对象» */
export interface IPageBomProcessDetailVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: BomProcessDetailVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«BomVersionVo对象» */
export interface IPageBomVersionVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: BomVersionVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CalendarSimpleVO» */
export interface IPageCalendarSimpleVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CalendarSimpleVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CheckProjectVO» */
export interface IPageCheckProjectVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CheckProjectVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DeviceTypeVO» */
export interface IPageDeviceTypeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DeviceTypeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«EmployeeVO» */
export interface IPageEmployeeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: EmployeeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«FixtureVo对象» */
export interface IPageFixtureVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: FixtureVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MachineBriefVO» */
export interface IPageMachineBriefVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MachineBriefVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MachineListVO» */
export interface IPageMachineListVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MachineListVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaintainItemVO» */
export interface IPageMaintainItemVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaintainItemVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaintainProjectItemVO» */
export interface IPageMaintainProjectItemVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaintainProjectItemVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaintainProjectVO» */
export interface IPageMaintainProjectVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaintainProjectVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MalfunctionTypeVO» */
export interface IPageMalfunctionTypeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MalfunctionTypeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaterialTypeVO» */
export interface IPageMaterialTypeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaterialTypeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MaterialVO» */
export interface IPageMaterialVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MaterialVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«PageTrayVO» */
export interface IPagePageTrayVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: PageTrayVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ProcessVO» */
export interface IPageProcessVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ProcessVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ProductEasyVO» */
export interface IPageProductEasyVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ProductEasyVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ProductTypeVo对象» */
export interface IPageProductTypeVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ProductTypeVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ProductVo对象» */
export interface IPageProductVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ProductVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ShiftOffDayVo对象» */
export interface IPageShiftOffDayVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ShiftOffDayVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ShiftSimpleVO» */
export interface IPageShiftSimpleVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ShiftSimpleVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«StockInTypeVo对象» */
export interface IPageStockInTypeVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: StockInTypeVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«StockOutTypeVo对象» */
export interface IPageStockOutTypeVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: StockOutTypeVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«SupplierVO» */
export interface IPageSupplierVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: SupplierVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WareMaterialStorageVO» */
export interface IPageWareMaterialStorageVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WareMaterialStorageVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WarehouseAreaVo对象» */
export interface IPageWarehouseAreaVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WarehouseAreaVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WarehouseGridVo对象» */
export interface IPageWarehouseGridVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WarehouseGridVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WarehouseStationVo对象» */
export interface IPageWarehouseStationVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WarehouseStationVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WorkstationRealTimeStatusVO» */
export interface IPageWorkstationRealTimeStatusVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WorkstationRealTimeStatusVO[];
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
 * MaterialStorageVo对象
 * 物料存放
 */
export interface MaterialStorageVo {
  id?: string;
  /** 物料id */
  materialId?: string;
  /** 库位id */
  warehouseStationId?: string;
}

/**
 * ProductTypeVo对象
 * 产品类型
 */
export interface ProductTypeVo {
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /** 备注/说明 */
  remark?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
}

/**
 * ProductVo对象
 * 产品信息
 */
export interface ProductVo {
  children?: ProductVo[];
  /**
   * 产品编号
   * @minLength 0
   * @maxLength 128
   */
  code?: string;
  /**
   * 产品描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /**
   * 产品文档
   * @minLength 0
   * @maxLength 65535
   */
  documents?: string;
  /** 扩展字段 */
  extendField?: string;
  hasChildren?: boolean;
  /** 产品ID */
  id?: string;
  label?: string;
  /**
   * 产品名称
   * @minLength 0
   * @maxLength 255
   */
  name?: string;
  /** 上级产品编号 */
  parentCode?: string;
  /** 上级产品ID */
  parentId?: string;
  /** 上级产品名称 */
  parentName?: string;
  /**
   * 直接父级状态
   * @format int32
   */
  parentStatus?: number;
  /**
   * 规格型号
   * @minLength 0
   * @maxLength 255
   */
  standardModel?: string;
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
  /** 产品类型 */
  typeId?: string;
  /** 产品类型名称 */
  typeName?: string;
  /**
   * 计量单位
   * @minLength 0
   * @maxLength 10
   */
  unit?: string;
  value?: string;
}

/**
 * ProductVo对象_1
 * 产品信息
 */
export interface ProductVo1 {
  children?: ProductVo1[];
  /**
   * 产品编号
   * @minLength 0
   * @maxLength 128
   */
  code?: string;
  /**
   * 产品描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /**
   * 产品文档
   * @minLength 0
   * @maxLength 65535
   */
  documents?: string;
  /** 扩展字段 */
  extendField?: string;
  /** 产品ID */
  id?: string;
  /**
   * 产品名称
   * @minLength 0
   * @maxLength 255
   */
  name?: string;
  /** 上级产品编号 */
  parentCode?: string;
  /** 上级产品ID */
  parentId?: string;
  /** 上级产品名称 */
  parentName?: string;
  /**
   * 直接父级状态
   * @format int32
   */
  parentStatus?: number;
  /**
   * 规格型号
   * @minLength 0
   * @maxLength 255
   */
  standardModel?: string;
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
  /** 产品类型 */
  typeId?: string;
  /** 产品类型名称 */
  typeName?: string;
  /**
   * 计量单位
   * @minLength 0
   * @maxLength 10
   */
  unit?: string;
}

/**
 * ProductVo对象_2
 * 产品信息
 */
export interface ProductVo2 {
  /**
   * 产品编号
   * @minLength 0
   * @maxLength 128
   */
  code?: string;
  /**
   * 产品描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /**
   * 产品文档
   * @minLength 0
   * @maxLength 65535
   */
  documents?: string;
  /** 扩展字段 */
  extendField?: string;
  /**
   * 产品名称
   * @minLength 0
   * @maxLength 128
   */
  name?: string;
  /** 上级产品ID */
  parentId?: string;
  /**
   * 规格型号
   * @minLength 0
   * @maxLength 255
   */
  standardModel?: string;
  /**
   * 状态：1启用 0停用
   * @format int32
   */
  status?: number;
  /**
   * 所属租户
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
  /** 产品类型 */
  typeId?: string;
  /**
   * 计量单位
   * @minLength 0
   * @maxLength 10
   */
  unit?: string;
}

/**
 * ProductVo对象_3
 * 产品信息
 */
export interface ProductVo3 {
  /**
   * 产品编号
   * @minLength 0
   * @maxLength 128
   */
  code?: string;
  /**
   * 产品描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /**
   * 产品文档
   * @minLength 0
   * @maxLength 65535
   */
  documents?: string;
  /** 扩展字段 */
  extendField?: string;
  /** 产品ID */
  id?: string;
  /** 产品名称 */
  name?: string;
  /** 上级产品ID */
  parentId?: string;
  /**
   * 规格型号
   * @minLength 0
   * @maxLength 255
   */
  standardModel?: string;
  /**
   * 状态：1启用 0停用
   * @format int32
   */
  status?: number;
  /**
   * 所属租户
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
  /** 产品类型 */
  typeId?: string;
  /**
   * 计量单位
   * @minLength 0
   * @maxLength 10
   */
  unit?: string;
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
 * ProductionCraftProcessRelatedFixtureVo对象
 * 产品工艺工序关联夹具
 */
export interface ProductionCraftProcessRelatedFixtureVo {
  /** 夹具编号 */
  fixtureCode?: string;
  /** 夹具组 */
  fixtureGroupName?: string;
  /** 夹具ID */
  fixtureId?: string;
  /** 夹具名称 */
  fixtureName?: string;
  /** 主键 */
  id?: string;
  /** 托盘编号 */
  trayCode?: string;
  /** 产品工艺工序ID */
  versionProcessId?: string;
}

/**
 * ProductionCraftProcessRelatedToolVo对象
 * 产品工艺工序关联刀具
 */
export interface ProductionCraftProcessRelatedToolVo {
  /** 主键 */
  id?: string;
  /** 刀具类型名称 */
  toolCategoryName?: string;
  /** 刀具编号 */
  toolCode?: string;
  /** 刀具ID */
  toolId?: string;
  /** 刀具型号名称 */
  toolModelName?: string;
  /**
   * 机床刀位
   * @format int32
   */
  toolPosition?: number;
  /** 产品工艺工序ID */
  versionProcessId?: string;
}

/**
 * ProductionCraftProcessRemoveVO对象
 * 工艺版本的工序流程删除
 */
export interface ProductionCraftProcessRemoveVO {
  /** 工序信息 */
  productionCraftProcessDeleteVOList?: ProductionCraftProcessVo[];
  /** 所属工艺ID */
  versionId?: string;
  /** 所属工艺版本工序ID */
  versionProcessId?: string;
}

/**
 * ProductionCraftProcessSortVO对象
 * 工艺版本的工序流程更新顺序
 */
export interface ProductionCraftProcessSortVO {
  /** 主键 */
  id?: string;
  /**
   * 工序顺序
   * @format int32
   */
  sort?: number;
  /** 资源ID */
  sourceId?: string;
  /** 目标ID */
  targetId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/**
 * ProductionCraftProcessUpdateSortVO对象
 * 工艺版本的工序流程更新顺序
 */
export interface ProductionCraftProcessUpdateSortVO {
  /**
   * 工序信息
   * @maxItems 2147483647
   * @minItems 1
   */
  processList?: ProductionCraftProcessSortVO[];
}

/**
 * ProductionCraftProcessVo对象
 * 工艺版本的工序流程
 */
export interface ProductionCraftProcessVo {
  /** 主键 */
  id?: string;
  /** 资源ID */
  sourceId?: string;
  /** 目标ID */
  targetId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/**
 * ProductionCraftProcessVo对象_1
 * 工艺版本的工序流程
 */
export interface ProductionCraftProcessVo1 {
  /**
   * 拆卸工时
   * @format int32
   */
  disassemblyTime?: number;
  /**
   * 不合格品处理方式 0-出线 1-返线,上一序返工 2-返线,执行后序工序, 3-HMI选择
   * @format int32
   */
  handlerMethod?: number;
  /** 主键 */
  id?: string;
  /** 测量序需要测量方式 0-频次抽检 1-信号抽检 2-首件检 3-末件检 */
  meaMethod?: number[];
  /**
   * 只有频次抽检需要维护 0-必检工序; !=0 频次抽检
   * @format int32
   */
  meaMethodValue?: number;
  /**
   * 准备工时
   * @format int32
   */
  prepareTime?: number;
  /** 工序编码 */
  processCode?: string;
  /** 所属生产工序 */
  processId?: string;
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
  /** 资源ID */
  sourceId?: string;
  /**
   * 标准工时（秒）
   * @format int32
   */
  standardTime?: number;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 目标ID */
  targetId?: string;
  /**
   * 所属租户
   * @minLength 0
   * @maxLength 6
   */
  tenantId?: string;
  /**
   * 运输工时
   * @format int32
   */
  transportTime?: number;
  /** 所属工艺 */
  versionId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/**
 * ProductionCraftProcess对象
 * 工艺版本的工序流程
 */
export interface ProductionCraftProcess {
  /** 工艺包id */
  bagId?: string;
  /** 工艺包名称 */
  bagName?: string;
  /**
   * 选择程序文件
   * @format int32
   */
  chooseType?: number;
  /** 配置项：1 标准用时 2 附件 3 工装 4 加工程序  逗号隔开 */
  configurationItem?: string;
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
   * 不合格品处理方式 0-出线 1-返线,上一序返工 2-返线,执行后序工序, 3-HMI选择
   * @format int32
   */
  handlerMethod?: number;
  /**
   * 主序的高度
   * @format int32
   */
  height?: number;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 主序id（当主序id不为空时，代表工序是子序） */
  mainSequenceId?: string;
  /** 测量序需要测量方式 0-频次抽检 1-信号抽检 2-首件检 3-末件检 */
  meaMethod?: string;
  /**
   * 只有频次抽检需要维护 0-必检工序; !=0 频次抽检
   * @format int32
   */
  meaMethodValue?: number;
  /**
   * 准备工时
   * @format int32
   */
  prepareTime?: number;
  /** 工序编号 */
  processCode?: string;
  /** 工序描述 */
  processDesc?: string;
  /** 所属生产工序 */
  processId?: string;
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
   * 程序类型
   * @format int32
   */
  programType?: number;
  /**
   * 工序顺序
   * @format int32
   */
  sort?: number;
  /** 资源ID */
  sourceId?: string;
  /**
   * 标准工时（秒）
   * @format int32
   */
  standardTime?: number;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 目标ID */
  targetId?: string;
  /** 租户ID */
  tenantId?: string;
  /**
   * 运输工时
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
  /** 所属工艺 */
  versionId?: string;
  /**
   * 是否并行
   * @format int32
   */
  whetherParallel?: number;
  /**
   * 是否质检
   * @format int32
   */
  whetherTest?: number;
  xcoordinate?: string;
  ycoordinate?: string;
}

/**
 * ProductionCraftVersionEditVO对象
 * 产品工艺版本编辑
 */
export interface ProductionCraftVersionEditVO {
  /** 工艺路线id */
  craftId?: string;
  /**
   * 版本描述
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /** 产线id */
  groupIds?: string[];
  /** 主键 */
  id?: string;
  /**
   * 版本名称
   * @minLength 0
   * @maxLength 32
   */
  name?: string;
}

/**
 * ProductionCraftVersionVo对象
 * 产品工艺版本复制
 */
export interface ProductionCraftVersionVo {
  /** 工艺路线id */
  craftId?: string;
  /** 工艺路线名称 */
  craftName?: string;
  /** 产品ID */
  productId?: string;
  /**
   * 产品复制0 - 工艺路线复制1
   * @format int32
   */
  type?: number;
  /** 版本ID */
  versionId?: string;
}

/**
 * ProductionCraftVersionVo对象_1
 * 产品工艺版本
 */
export interface ProductionCraftVersionVo1 {
  /** 主键 */
  craftId?: string;
  /** 版本描述 */
  description?: string;
  /**
   * 是否定版(0:否 1:是)
   * @format int32
   */
  editionStatus?: number;
  /** 主键 */
  id?: string;
  /** 版本名称 */
  name?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
}

/**
 * Product对象
 * 产品信息
 */
export interface Product {
  /** 产品编号 */
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
  /** 产品描述 */
  description?: string;
  /** 产品文档 */
  documents?: string;
  /** 扩展字段 */
  extendField?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  materialCode?: string;
  /** 产品名称 */
  name?: string;
  /** 上级产品ID */
  parentId?: string;
  /** 规格型号 */
  standardModel?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 所属租户 */
  tenantId?: string;
  /** 产品类型 */
  typeId?: string;
  /** 计量单位 */
  unit?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/**
 * R«ActivateLicenseVO»
 * 返回信息
 */
export interface RActivateLicenseVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ActivateLicenseVO;
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
 * R«BomMaterialDetailVO对象»
 * 返回信息
 */
export interface RBomMaterialDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BomMaterialDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«BomProcessVo对象»
 * 返回信息
 */
export interface RBomProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BomProcessVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«BomVersionDetailVO对象»
 * 返回信息
 */
export interface RBomVersionDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BomVersionDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«BomVersionVo对象»
 * 返回信息
 */
export interface RBomVersionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BomVersionVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CalendarVO»
 * 返回信息
 */
export interface RCalendarVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CalendarVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CheckProject»
 * 返回信息
 */
export interface RCheckProject {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CheckProject;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CommonGroupVO»
 * 返回信息
 */
export interface RCommonGroupVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonGroupVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CommonGroup»
 * 返回信息
 */
export interface RCommonGroup {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonGroup;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ConfigVO»
 * 返回信息
 */
export interface RConfigVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ConfigVO;
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
 * R«CraftRoutingVO»
 * 返回信息
 */
export interface RCraftRoutingVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CraftRoutingVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CraftVersionLineVO»
 * 返回信息
 */
export interface RCraftVersionLineVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CraftVersionLineVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DeviceTypeVO»
 * 返回信息
 */
export interface RDeviceTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DeviceTypeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DeviceType»
 * 返回信息
 */
export interface RDeviceType {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DeviceType;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«EmployeeBriefVO»
 * 返回信息
 */
export interface REmployeeBriefVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: EmployeeBriefVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«EmployeeVO»
 * 返回信息
 */
export interface REmployeeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: EmployeeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«EnterpriseInformationVO»
 * 返回信息
 */
export interface REnterpriseInformationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: EnterpriseInformationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FixtureVo对象»
 * 返回信息
 */
export interface RFixtureVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FixtureVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«HierarchyVO»
 * 返回信息
 */
export interface RHierarchyVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HierarchyVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«HmiWorkstationVO»
 * 返回信息
 */
export interface RHmiWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiWorkstationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AllFixtureGroupVO»»
 * 返回信息
 */
export interface RIPageAllFixtureGroupVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAllFixtureGroupVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«BomMaterialDetailVO对象»»
 * 返回信息
 */
export interface RIPageBomMaterialDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageBomMaterialDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«BomProcessDetailVO对象»»
 * 返回信息
 */
export interface RIPageBomProcessDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageBomProcessDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«BomVersionVo对象»»
 * 返回信息
 */
export interface RIPageBomVersionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageBomVersionVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CalendarSimpleVO»»
 * 返回信息
 */
export interface RIPageCalendarSimpleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCalendarSimpleVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CheckProjectVO»»
 * 返回信息
 */
export interface RIPageCheckProjectVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCheckProjectVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DeviceTypeVO»»
 * 返回信息
 */
export interface RIPageDeviceTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDeviceTypeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«EmployeeVO»»
 * 返回信息
 */
export interface RIPageEmployeeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageEmployeeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«FixtureVo对象»»
 * 返回信息
 */
export interface RIPageFixtureVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageFixtureVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MachineBriefVO»»
 * 返回信息
 */
export interface RIPageMachineBriefVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMachineBriefVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MachineListVO»»
 * 返回信息
 */
export interface RIPageMachineListVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMachineListVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaintainItemVO»»
 * 返回信息
 */
export interface RIPageMaintainItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaintainItemVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaintainProjectItemVO»»
 * 返回信息
 */
export interface RIPageMaintainProjectItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaintainProjectItemVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaintainProjectVO»»
 * 返回信息
 */
export interface RIPageMaintainProjectVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaintainProjectVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MalfunctionTypeVO»»
 * 返回信息
 */
export interface RIPageMalfunctionTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMalfunctionTypeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaterialTypeVO»»
 * 返回信息
 */
export interface RIPageMaterialTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaterialTypeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MaterialVO»»
 * 返回信息
 */
export interface RIPageMaterialVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMaterialVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«PageTrayVO»»
 * 返回信息
 */
export interface RIPagePageTrayVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPagePageTrayVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ProcessVO»»
 * 返回信息
 */
export interface RIPageProcessVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageProcessVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ProductEasyVO»»
 * 返回信息
 */
export interface RIPageProductEasyVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageProductEasyVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ProductTypeVo对象»»
 * 返回信息
 */
export interface RIPageProductTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageProductTypeVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ProductVo对象»»
 * 返回信息
 */
export interface RIPageProductVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageProductVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ShiftOffDayVo对象»»
 * 返回信息
 */
export interface RIPageShiftOffDayVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageShiftOffDayVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ShiftSimpleVO»»
 * 返回信息
 */
export interface RIPageShiftSimpleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageShiftSimpleVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«StockInTypeVo对象»»
 * 返回信息
 */
export interface RIPageStockInTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageStockInTypeVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«StockOutTypeVo对象»»
 * 返回信息
 */
export interface RIPageStockOutTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageStockOutTypeVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«SupplierVO»»
 * 返回信息
 */
export interface RIPageSupplierVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageSupplierVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WareMaterialStorageVO»»
 * 返回信息
 */
export interface RIPageWareMaterialStorageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWareMaterialStorageVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WarehouseAreaVo对象»»
 * 返回信息
 */
export interface RIPageWarehouseAreaVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWarehouseAreaVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WarehouseGridVo对象»»
 * 返回信息
 */
export interface RIPageWarehouseGridVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWarehouseGridVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WarehouseStationVo对象»»
 * 返回信息
 */
export interface RIPageWarehouseStationVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWarehouseStationVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WorkstationRealTimeStatusVO»»
 * 返回信息
 */
export interface RIPageWorkstationRealTimeStatusVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWorkstationRealTimeStatusVO;
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
 * R«LicenseDetailVO»
 * 返回信息
 */
export interface RLicenseDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LicenseDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«BeltlineMachineVO»»
 * 返回信息
 */
export interface RListBeltlineMachineVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BeltlineMachineVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«BeltlineWorkstationVO»»
 * 返回信息
 */
export interface RListBeltlineWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BeltlineWorkstationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«BomMaterialDetailVO对象»»
 * 返回信息
 */
export interface RListBomMaterialDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BomMaterialDetailVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«BomProcessDetailVO对象»»
 * 返回信息
 */
export interface RListBomProcessDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BomProcessDetailVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«BomVersionVo对象»»
 * 返回信息
 */
export interface RListBomVersionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BomVersionVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CalendarSimpleVO»»
 * 返回信息
 */
export interface RListCalendarSimpleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CalendarSimpleVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ChartSelect»»
 * 返回信息
 */
export interface RListChartSelect {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ChartSelect[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CheckItemVO»»
 * 返回信息
 */
export interface RListCheckItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CheckItemVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CheckItem»»
 * 返回信息
 */
export interface RListCheckItem {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CheckItem[];
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
 * R«List«CraftRoutingVO»»
 * 返回信息
 */
export interface RListCraftRoutingVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CraftRoutingVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CurrentDepartEmpVO»»
 * 返回信息
 */
export interface RListCurrentDepartEmpVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CurrentDepartEmpVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DeviceTypeCheckProjectVO»»
 * 返回信息
 */
export interface RListDeviceTypeCheckProjectVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DeviceTypeCheckProjectVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DeviceTypeCheckProject»»
 * 返回信息
 */
export interface RListDeviceTypeCheckProject {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DeviceTypeCheckProject[];
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
 * R«List«EmployeeVO»»
 * 返回信息
 */
export interface RListEmployeeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: EmployeeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FixtureGroupFixtureVO»»
 * 返回信息
 */
export interface RListFixtureGroupFixtureVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FixtureGroupFixtureVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FixtureVo对象»»
 * 返回信息
 */
export interface RListFixtureVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FixtureVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«GlobalWcsVO»»
 * 返回信息
 */
export interface RListGlobalWcsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: GlobalWcsVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«GroupTreeVO»»
 * 返回信息
 */
export interface RListGroupTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: GroupTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«LmsWorkstationVO»»
 * 返回信息
 */
export interface RListLmsWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: LmsWorkstationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MachineVO»»
 * 返回信息
 */
export interface RListMachineVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MachineVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaintainItemVO»»
 * 返回信息
 */
export interface RListMaintainItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainItemVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaintainProjectItemVO»»
 * 返回信息
 */
export interface RListMaintainProjectItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainProjectItemVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaintainProjectVO»»
 * 返回信息
 */
export interface RListMaintainProjectVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainProjectVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MalfunctionTypeRecordVO»»
 * 返回信息
 */
export interface RListMalfunctionTypeRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MalfunctionTypeRecordVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaterialStorageVo对象»»
 * 返回信息
 */
export interface RListMaterialStorageVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaterialStorageVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaterialTypeVO»»
 * 返回信息
 */
export interface RListMaterialTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaterialTypeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MaterialVO»»
 * 返回信息
 */
export interface RListMaterialVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaterialVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MdcWorkStationGroupVO»»
 * 返回信息
 */
export interface RListMdcWorkStationGroupVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MdcWorkStationGroupVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«OrganizationDTO»»
 * 返回信息
 */
export interface RListOrganizationDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrganizationDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«OrganizationVO»»
 * 返回信息
 */
export interface RListOrganizationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OrganizationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ParamMonitoringSettingsVO»»
 * 返回信息
 */
export interface RListParamMonitoringSettingsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ParamMonitoringSettingsVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProcessAssociationDetailVO»»
 * 返回信息
 */
export interface RListProcessAssociationDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProcessAssociationDetailVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProductTypePlanVO»»
 * 返回信息
 */
export interface RListProductTypePlanVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductTypePlanVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProductTypeVo对象»»
 * 返回信息
 */
export interface RListProductTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductTypeVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProductVo对象»»
 * 返回信息
 */
export interface RListProductVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProductionCraftProcessVo对象»»
 * 返回信息
 */
export interface RListProductionCraftProcessVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductionCraftProcessVo1[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProductionCraftProcess对象»»
 * 返回信息
 */
export interface RListProductionCraftProcess {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductionCraftProcess[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProductionCraftVersionVo对象»»
 * 返回信息
 */
export interface RListProductionCraftVersionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductionCraftVersionVo1[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ShiftModelVO»»
 * 返回信息
 */
export interface RListShiftModelVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ShiftModelVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ShiftOffDayVo对象»»
 * 返回信息
 */
export interface RListShiftOffDayVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ShiftOffDayVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ShiftSimpleVO»»
 * 返回信息
 */
export interface RListShiftSimpleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ShiftSimpleVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«StockInTypeVo对象»»
 * 返回信息
 */
export interface RListStockInTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: StockInTypeVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«StockOutTypeVo对象»»
 * 返回信息
 */
export interface RListStockOutTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: StockOutTypeVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolAppendixVo对象»»
 * 返回信息
 */
export interface RListToolAppendixVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolAppendixVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ToolingVO»»
 * 返回信息
 */
export interface RListToolingVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolingVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TrayEasyVO»»
 * 返回信息
 */
export interface RListTrayEasyVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TrayEasyVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TrayFaceFixtureVO»»
 * 返回信息
 */
export interface RListTrayFaceFixtureVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TrayFaceFixtureVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TrayFixtureVo对象»»
 * 返回信息
 */
export interface RListTrayFixtureVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TrayFixtureVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TrayStorageVo对象»»
 * 返回信息
 */
export interface RListTrayStorageVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TrayStorageVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TraySurfaceVo对象»»
 * 返回信息
 */
export interface RListTraySurfaceVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TraySurfaceVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TrayTreeVO»»
 * 返回信息
 */
export interface RListTrayTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TrayTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«VersionProcessTreeVO»»
 * 返回信息
 */
export interface RListVersionProcessTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VersionProcessTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WareMaterialStorageVO»»
 * 返回信息
 */
export interface RListWareMaterialStorageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WareMaterialStorageVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WareTrayStorageVO»»
 * 返回信息
 */
export interface RListWareTrayStorageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WareTrayStorageVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WarehouseAreaStationVO»»
 * 返回信息
 */
export interface RListWarehouseAreaStationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WarehouseAreaStationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WarehouseAreaVo对象»»
 * 返回信息
 */
export interface RListWarehouseAreaVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WarehouseAreaVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WarehouseGridVo对象»»
 * 返回信息
 */
export interface RListWarehouseGridVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WarehouseGridVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WcsAndAchievementsVO»»
 * 返回信息
 */
export interface RListWcsAndAchievementsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WcsAndAchievementsVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationDataTypeExecParamVO»»
 * 返回信息
 */
export interface RListWorkstationDataTypeExecParamVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationDataTypeExecParamVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationGroupVO»»
 * 返回信息
 */
export interface RListWorkstationGroupVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationGroupVO[];
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
 * R«List«WorkstationOfWorkbenchVO»»
 * 返回信息
 */
export interface RListWorkstationOfWorkbenchVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationOfWorkbenchVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationVO»»
 * 返回信息
 */
export interface RListWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationWcsDTO»»
 * 返回信息
 */
export interface RListWorkstationWcsDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationWcsDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationWcsUsageVO»»
 * 返回信息
 */
export interface RListWorkstationWcsUsageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationWcsUsageVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationWcsVO»»
 * 返回信息
 */
export interface RListWorkstationWcsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationWcsVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«fms工位组视图»»
 * 返回信息
 */
export interface RListFms {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Fms2[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«int»»
 * 返回信息
 */
export interface RListInt {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: number[];
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
 * R«MachineDetailVO»
 * 返回信息
 */
export interface RMachineDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MachineDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MachineDmpVariablesVO»
 * 返回信息
 */
export interface RMachineDmpVariablesVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MachineDmpVariablesVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MachineInformationVO»
 * 返回信息
 */
export interface RMachineInformationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MachineInformationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Machine»
 * 返回信息
 */
export interface RMachine {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Machine;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainItemVO»
 * 返回信息
 */
export interface RMaintainItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainItemVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainItem»
 * 返回信息
 */
export interface RMaintainItem {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainItem;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainProjectVO»
 * 返回信息
 */
export interface RMaintainProjectVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainProjectVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaintainProject»
 * 返回信息
 */
export interface RMaintainProject {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaintainProject;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MalfunctionTypeVO»
 * 返回信息
 */
export interface RMalfunctionTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MalfunctionTypeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaterialTypeVO»
 * 返回信息
 */
export interface RMaterialTypeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaterialTypeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MaterialVO»
 * 返回信息
 */
export interface RMaterialVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MaterialVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ParamMonitoringSettingsVO»
 * 返回信息
 */
export interface RParamMonitoringSettingsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ParamMonitoringSettingsVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ProcessAssociationVO»
 * 返回信息
 */
export interface RProcessAssociationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProcessAssociationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ProcessDetailVO»
 * 返回信息
 */
export interface RProcessDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProcessDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ProductTypeVo对象»
 * 返回信息
 */
export interface RProductTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductTypeVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ProductVo对象»
 * 返回信息
 */
export interface RProductVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ProductionCalendarVO»
 * 返回信息
 */
export interface RProductionCalendarVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductionCalendarVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ProductionCraftProcessDetailVO»
 * 返回信息
 */
export interface RProductionCraftProcessDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductionCraftProcessDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ProductionCraftVersionVo对象»
 * 返回信息
 */
export interface RProductionCraftVersionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProductionCraftVersionVo1;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ShiftIndexNameVO»
 * 返回信息
 */
export interface RShiftIndexNameVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ShiftIndexNameVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ShiftModelVO»
 * 返回信息
 */
export interface RShiftModelVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ShiftModelVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ShiftOffDayVo对象»
 * 返回信息
 */
export interface RShiftOffDayVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ShiftOffDayVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ShiftVO»
 * 返回信息
 */
export interface RShiftVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ShiftVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«StockInTypeVo对象»
 * 返回信息
 */
export interface RStockInTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: StockInTypeVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«StockOutTypeVo对象»
 * 返回信息
 */
export interface RStockOutTypeVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: StockOutTypeVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«SupplierDetailVO»
 * 返回信息
 */
export interface RSupplierDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: SupplierDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ToolAppendixVo对象»
 * 返回信息
 */
export interface RToolAppendixVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ToolAppendixVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«TraySurfaceVo对象»
 * 返回信息
 */
export interface RTraySurfaceVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TraySurfaceVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«TrayVO»
 * 返回信息
 */
export interface RTrayVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TrayVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Void»
 * 返回信息
 */
export interface RVoid {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WarehouseAreaVo对象»
 * 返回信息
 */
export interface RWarehouseAreaVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WarehouseAreaVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WarehouseGridVo对象»
 * 返回信息
 */
export interface RWarehouseGridVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WarehouseGridVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WarehouseStationVo对象»
 * 返回信息
 */
export interface RWarehouseStationVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WarehouseStationVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WcsAchievementsUpdateVO»
 * 返回信息
 */
export interface RWcsAchievementsUpdateVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WcsAchievementsUpdateVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WorkMachineEasyVO»
 * 返回信息
 */
export interface RWorkMachineEasyVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkMachineEasyVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WorkstationStatusInfo»
 * 返回信息
 */
export interface RWorkstationStatusInfo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationStatusInfo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WorkstationVO»
 * 返回信息
 */
export interface RWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WorkstationWcsVO»
 * 返回信息
 */
export interface RWorkstationWcsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationWcsVO;
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
 * ShiftOffDayVo对象
 * 班次休息日
 */
export interface ShiftOffDayVo {
  /**
   * 休息日-结束
   * @format date
   */
  endOffDay?: string;
  /** 主键 */
  id?: string;
  /**
   * 备注/说明
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 休息日-开始
   * @format date
   */
  startOffDay?: string;
  /**
   * 年份
   * @format int32
   */
  year?: number;
}

/**
 * ShiftOffDayVo对象_1
 * 班次休息日
 */
export interface ShiftOffDayVo1 {
  /**
   * 休息日-结束
   * @format date
   */
  endOffDay?: string;
  /**
   * 备注/说明
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 休息日-开始
   * @format date
   */
  startOffDay?: string;
  /**
   * 年份
   * @format int32
   */
  year?: number;
}

/**
 * ShiftOffDayVo对象_2
 * 班次休息日
 */
export interface ShiftOffDayVo2 {
  /**
   * 休息日-结束
   * @format date
   */
  endOffDay?: string;
  /** 主键 */
  id?: string;
  /**
   * 备注/说明
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 休息日-开始
   * @format date
   */
  startOffDay?: string;
  /**
   * 年份
   * @format int32
   */
  year?: number;
}

/**
 * StockInTypeVo对象
 * 入库类型
 */
export interface StockInTypeVo {
  /**
   * 入库类型编码
   * @minLength 0
   * @maxLength 128
   */
  code?: string;
  /** 主键 */
  id?: string;
  /**
   * 入库类型名称
   * @minLength 0
   * @maxLength 64
   */
  name?: string;
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
   * 所属租户
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
}

/**
 * StockOutTypeVo对象
 * 出库类型
 */
export interface StockOutTypeVo {
  /**
   * 出库类型编码
   * @minLength 0
   * @maxLength 128
   */
  code?: string;
  /** 主键 */
  id?: string;
  /**
   * 出库类型名称
   * @minLength 0
   * @maxLength 64
   */
  name?: string;
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
   * 所属租户
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
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
 * TrayFixtureVo对象
 * 托盘面-夹具
 */
export interface TrayFixtureVo {
  /** 托盘面id */
  faceId?: string;
  /** 夹具id */
  fixId?: string;
  /** 主键 */
  id?: string;
  /** 托盘id */
  trayId?: string;
}

/**
 * TrayStorageVo对象
 * 托盘存放
 */
export interface TrayStorageVo {
  /** 主键 */
  id?: string;
  /** 托盘id */
  trayId?: string;
  /** 库位id */
  warehouseStationId?: string;
}

/**
 * TraySurfaceVo对象
 * 托盘面
 */
export interface TraySurfaceVo {
  /** 托盘面编号 */
  code?: string;
  /**
   * 关联夹具数量
   * @format int32
   */
  fixtureNum?: number;
  /** 主键id */
  id?: string;
  /**
   * 是否使用 默认为0
   * @format int32
   */
  inUse?: number;
  /** 托盘面名称 */
  name?: string;
  /** 偏移程序编号 */
  programCode?: string;
  /** 托盘id */
  trayId?: string;
}

/**
 * WarehouseAreaVo对象
 * 库区
 */
export interface WarehouseAreaVo {
  children?: WarehouseAreaVo[];
  /**
   * 库区编码
   * @minLength 0
   * @maxLength 24
   */
  code?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  label?: string;
  /**
   * 库区名称
   * @minLength 0
   * @maxLength 64
   */
  name?: string;
  /** 父节点ID */
  parentId?: string;
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
   * 所属租户
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
  value?: string;
}

/**
 * WarehouseGridVo对象
 * 库区货格
 */
export interface WarehouseGridVo {
  /**
   * 货格编号
   * @minLength 0
   * @maxLength 32
   */
  code?: string;
  /** id */
  id?: string;
  /**
   * 货格名称
   * @minLength 0
   * @maxLength 32
   */
  name?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /** 库位id */
  stationId?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /**
   * 所属租户
   * @minLength 0
   * @maxLength 6
   */
  tenantId?: string;
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

/** fms工位查询视图 */
export interface Fms {
  /** 工种 0其他 1打标 2测量 3清洗 4装卸 5加工 6搬运 7三坐标 */
  deviceTypeList?: number[];
  /** 类型 0机器 1人工 */
  typeList?: number[];
}

/** fms工位组视图 */
export interface Fms2 {
  children?: Fms2[];
  code?: string;
  /**
   * 工位设备类型
   * @format int32
   */
  deviceType?: number;
  /** 工位设备类型名称 */
  deviceTypeName?: string;
  /** 是否是工位 */
  disabled?: boolean;
  extendId?: string;
  fullName?: string;
  /** @format int32 */
  groupCategory?: number;
  groupTag?: string;
  groupType?: string;
  id?: string;
  /** @format int32 */
  isDeleted?: number;
  name?: string;
  /** @format int32 */
  nodeType?: number;
  parentId?: string;
  remark?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  tenantId?: string;
}

/**
 * 产品切换状态VO对象
 * 产品状态
 */
export interface _VO_ {
  /** 要切换的id集合 */
  ids?: string[];
  /**
   * 状态: 1为启用 0为禁用
   * @format int32
   */
  status?: number;
}

/**
 * 产品类型切换状态VO对象
 * 产品类型
 */
export interface VO2 {
  /** 要切换的id集合 */
  ids?: string[];
  /**
   * 状态: 1为启用 0为禁用
   * @format int32
   */
  status?: number;
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
     * No description
     *
     * @tags 初始化提供给运维工具使用解析模块
     * @name ActivateLicenseDetail
     * @summary 解析明细
     * @request POST:/blade-cps/activate/license-detail
     * @secure
     */
    activateLicenseDetail: (activateQueryVO: ActivateQueryVO, params: RequestParams = {}) =>
      this.request<RActivateLicenseVO, void>({
        path: `/blade-cps/activate/license-detail`,
        method: 'POST',
        body: activateQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 应用设置
     * @name ApplySettingsListWorkstationGroup
     * @summary 应用设置工位组列表
     * @request GET:/blade-cps/apply-settings/list-workstation-group
     * @secure
     */
    applySettingsListWorkstationGroup: (
      query?: {
        /** 组子类 */
        groupCategory?: string;
        /** 组标签 */
        groupTag?: string;
        /** 组别 */
        groupType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationGroupVO, void>({
        path: `/blade-cps/apply-settings/list-workstation-group`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产线
     * @name BeltlineGetBeltlineMachineTree
     * @summary 获取产线机器树
     * @request GET:/blade-cps/beltline/machine-tree
     * @secure
     */
    beltlineGetBeltlineMachineTree: (params: RequestParams = {}) =>
      this.request<RListBeltlineMachineVO, void>({
        path: `/blade-cps/beltline/machine-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产线
     * @name BeltlineGetBeltlineWorkstationLazyList
     * @summary 懒加载获取产线工位列表
     * @request GET:/blade-cps/beltline/workstation-lazy-list
     * @secure
     */
    beltlineGetBeltlineWorkstationLazyList: (
      query?: {
        /** 父节点ID */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListBeltlineWorkstationVO, void>({
        path: `/blade-cps/beltline/workstation-lazy-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产线
     * @name BeltlineGetBeltlineWorkstationTree
     * @summary 获取产线工位树
     * @request GET:/blade-cps/beltline/workstation-tree
     * @secure
     */
    beltlineGetBeltlineWorkstationTree: (params: RequestParams = {}) =>
      this.request<RListBeltlineWorkstationVO, void>({
        path: `/blade-cps/beltline/workstation-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产线
     * @name BeltlineGetBeltlineWorkstationTreeByFileTransfer
     * @summary 获取产线工位树(文件传输)
     * @request GET:/blade-cps/beltline/workstation-tree/by-file-transfer
     * @secure
     */
    beltlineGetBeltlineWorkstationTreeByFileTransfer: (params: RequestParams = {}) =>
      this.request<RListBeltlineWorkstationVO, void>({
        path: `/blade-cps/beltline/workstation-tree/by-file-transfer`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom物料管理
     * @name BomMaterialCount
     * @summary bom物料统计值
     * @request GET:/blade-cps/bom-material/count
     * @secure
     */
    bomMaterialCount: (
      query?: {
        /** bom版本ID */
        versionId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLong, void>({
        path: `/blade-cps/bom-material/count`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入bomMaterial
     *
     * @tags bom物料管理
     * @name BomMaterialDetail
     * @summary bom物料详情
     * @request GET:/blade-cps/bom-material/get/{id}
     * @secure
     */
    bomMaterialDetail: (id: string, params: RequestParams = {}) =>
      this.request<RBomMaterialDetailVO, void>({
        path: `/blade-cps/bom-material/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入bomMaterialVO
     *
     * @tags bom物料管理
     * @name BomMaterialInsert
     * @summary bom物料新增
     * @request POST:/blade-cps/bom-material/insert
     * @secure
     */
    bomMaterialInsert: (bomMaterialVO: BomMaterialVo, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/bom-material/insert`,
        method: 'POST',
        body: bomMaterialVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom物料管理
     * @name BomMaterialList
     * @summary bom物料列表
     * @request GET:/blade-cps/bom-material/list
     * @secure
     */
    bomMaterialList: (
      query?: {
        /** bom版本ID */
        versionId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListBomMaterialDetailVO, void>({
        path: `/blade-cps/bom-material/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom物料管理
     * @name BomMaterialPage
     * @summary bom物料分页
     * @request GET:/blade-cps/bom-material/page
     * @secure
     */
    bomMaterialPage: (
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
        /** bom版本ID */
        versionId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageBomMaterialDetailVO, void>({
        path: `/blade-cps/bom-material/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags bom物料管理
     * @name BomMaterialRemoveBomMaterial
     * @summary bom物料删除
     * @request DELETE:/blade-cps/bom-material/remove/{id}
     * @secure
     */
    bomMaterialRemoveBomMaterial: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/bom-material/remove/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom物料管理
     * @name BomMaterialTree
     * @summary bom物料列表(树)
     * @request GET:/blade-cps/bom-material/tree
     * @secure
     */
    bomMaterialTree: (
      query?: {
        /** bom版本ID */
        versionId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListBomMaterialDetailVO, void>({
        path: `/blade-cps/bom-material/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom物料工序管理
     * @name BomProcessCount
     * @summary bom物料工序统计值
     * @request GET:/blade-cps/bom-process/count
     * @secure
     */
    bomProcessCount: (
      query?: {
        /** bom物料ID */
        bomMaterialId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLong, void>({
        path: `/blade-cps/bom-process/count`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入bomProcessAddVO
     *
     * @tags bom物料工序管理
     * @name BomProcessInsert
     * @summary bom物料工序新增
     * @request POST:/blade-cps/bom-process/insert
     * @secure
     */
    bomProcessInsert: (bomProcessAddVO: BomProcessAddVO, params: RequestParams = {}) =>
      this.request<RBomProcessVo, void>({
        path: `/blade-cps/bom-process/insert`,
        method: 'POST',
        body: bomProcessAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom物料工序管理
     * @name BomProcessList
     * @summary bom物料工序列表
     * @request GET:/blade-cps/bom-process/list
     * @secure
     */
    bomProcessList: (
      query?: {
        /** bom物料ID */
        bomMaterialId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListBomProcessDetailVO, void>({
        path: `/blade-cps/bom-process/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom物料工序管理
     * @name BomProcessPage
     * @summary bom物料工序分页
     * @request GET:/blade-cps/bom-process/page
     * @secure
     */
    bomProcessPage: (
      query?: {
        /** bom物料ID */
        bomMaterialId?: string;
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
      this.request<RIPageBomProcessDetailVO, void>({
        path: `/blade-cps/bom-process/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description bomProcessDeleteVO
     *
     * @tags bom物料工序管理
     * @name BomProcessRemove
     * @summary bom物料工序删除
     * @request DELETE:/blade-cps/bom-process/remove
     * @secure
     */
    bomProcessRemove: (bomProcessDeleteVO: BomProcessDeleteVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/bom-process/remove`,
        method: 'DELETE',
        body: bomProcessDeleteVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags bom版本管理
     * @name BomVersionCancelFixVersion
     * @summary bom版本取消定版
     * @request PUT:/blade-cps/bom-version/cancel-fix-version/{id}
     * @secure
     */
    bomVersionCancelFixVersion: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/bom-version/cancel-fix-version/${id}`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom版本管理
     * @name BomVersionCount
     * @summary bom版本统计值
     * @request GET:/blade-cps/bom-version/count
     * @secure
     */
    bomVersionCount: (
      query?: {
        /** 产品Id */
        productId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLong, void>({
        path: `/blade-cps/bom-version/count`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags bom版本管理
     * @name BomVersionFixVersion
     * @summary bom版本定版
     * @request PUT:/blade-cps/bom-version/fix-version/{id}
     * @secure
     */
    bomVersionFixVersion: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/bom-version/fix-version/${id}`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags bom版本管理
     * @name BomVersionGetVersionById
     * @summary 产品Bom版本详情
     * @request GET:/blade-cps/bom-version/get-version/{id}
     * @secure
     */
    bomVersionGetVersionById: (id: string, params: RequestParams = {}) =>
      this.request<RBomVersionDetailVO, void>({
        path: `/blade-cps/bom-version/get-version/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入bomVersion
     *
     * @tags bom版本管理
     * @name BomVersionDetail
     * @summary bom版本详情
     * @request GET:/blade-cps/bom-version/get/{id}
     * @secure
     */
    bomVersionDetail: (id: string, params: RequestParams = {}) =>
      this.request<RBomVersionVo, void>({
        path: `/blade-cps/bom-version/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入bomVersionVO
     *
     * @tags bom版本管理
     * @name BomVersionInsert
     * @summary bom版本新增
     * @request POST:/blade-cps/bom-version/insert
     * @secure
     */
    bomVersionInsert: (bomVersionVO: BomVersionVo, params: RequestParams = {}) =>
      this.request<RBomVersionVo, void>({
        path: `/blade-cps/bom-version/insert`,
        method: 'POST',
        body: bomVersionVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom版本管理
     * @name BomVersionList
     * @summary bom版本列表
     * @request GET:/blade-cps/bom-version/list
     * @secure
     */
    bomVersionList: (
      query?: {
        /** 产品Id */
        productId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListBomVersionVo, void>({
        path: `/blade-cps/bom-version/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags bom版本管理
     * @name BomVersionPage
     * @summary bom版本分页
     * @request GET:/blade-cps/bom-version/page
     * @secure
     */
    bomVersionPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 产品Id */
        productId?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageBomVersionVo, void>({
        path: `/blade-cps/bom-version/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags bom版本管理
     * @name BomVersionRemove
     * @summary bom版本删除
     * @request DELETE:/blade-cps/bom-version/remove/{id}
     * @secure
     */
    bomVersionRemove: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/bom-version/remove/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入bomVersionUpdateVO
     *
     * @tags bom版本管理
     * @name BomVersionUpdate
     * @summary bom版本修改
     * @request PUT:/blade-cps/bom-version/update
     * @secure
     */
    bomVersionUpdate: (bomVersionUpdateVO: BomVersionVo2, params: RequestParams = {}) =>
      this.request<RBomVersionVo, void>({
        path: `/blade-cps/bom-version/update`,
        method: 'PUT',
        body: bomVersionUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 生产日历controller
     * @name CalendarSaveCalendar
     * @summary 新建生产日历
     * @request POST:/blade-cps/calendar
     * @secure
     */
    calendarSaveCalendar: (calendarSaveVO: CalendarSaveVO, params: RequestParams = {}) =>
      this.request<RProductionCalendarVO, void>({
        path: `/blade-cps/calendar`,
        method: 'POST',
        body: calendarSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 生产日历controller
     * @name CalendarUpdateCalendar
     * @summary 编辑生产日历日期
     * @request PUT:/blade-cps/calendar
     * @secure
     */
    calendarUpdateCalendar: (calendarUpdateVO: CalendarUpdateVO, params: RequestParams = {}) =>
      this.request<RProductionCalendarVO, void>({
        path: `/blade-cps/calendar`,
        method: 'PUT',
        body: calendarUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 生产日历关联工位
     *
     * @tags 生产日历controller
     * @name CalendarAssociateWorkstation
     * @summary 生产日历关联工位
     * @request POST:/blade-cps/calendar/associate-workstation
     * @secure
     */
    calendarAssociateWorkstation: (calendarAssociateWorkstationVO: CalendarAssociateWorkstationVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/calendar/associate-workstation`,
        method: 'POST',
        body: calendarAssociateWorkstationVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 生产日历controller
     * @name CalendarCopyCalendar
     * @summary 复制生产日历
     * @request POST:/blade-cps/calendar/copy
     * @secure
     */
    calendarCopyCalendar: (calendarCopyVO: CalendarCopyVO, params: RequestParams = {}) =>
      this.request<RProductionCalendarVO, void>({
        path: `/blade-cps/calendar/copy`,
        method: 'POST',
        body: calendarCopyVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询快过期生产日历提示
     *
     * @tags 生产日历controller
     * @name CalendarExpireCalendarInfo
     * @summary 查询快过期生产日历提示
     * @request GET:/blade-cps/calendar/expire/info
     * @secure
     */
    calendarExpireCalendarInfo: (params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-cps/calendar/expire/info`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 生产日历列表
     *
     * @tags 生产日历controller
     * @name CalendarListCalendars
     * @summary 生产日历列表
     * @request GET:/blade-cps/calendar/list
     * @secure
     */
    calendarListCalendars: (params: RequestParams = {}) =>
      this.request<RListCalendarSimpleVO, void>({
        path: `/blade-cps/calendar/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入分页条件
     *
     * @tags 生产日历controller
     * @name CalendarGetPageCalendar
     * @summary 分页查询生产日历
     * @request POST:/blade-cps/calendar/page
     * @secure
     */
    calendarGetPageCalendar: (
      calendarSearchVO: CalendarSearchVO,
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
      this.request<RIPageCalendarSimpleVO, void>({
        path: `/blade-cps/calendar/page`,
        method: 'POST',
        query: query,
        body: calendarSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 生产日历controller
     * @name CalendarRename
     * @summary 生产日历重命名
     * @request PUT:/blade-cps/calendar/rename
     * @secure
     */
    calendarRename: (
      query?: {
        /** id */
        id?: string;
        /** name */
        name?: string;
        /**
         * status
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RProductionCalendarVO, void>({
        path: `/blade-cps/calendar/rename`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 生产日历controller
     * @name CalendarSyncCalendar
     * @summary 新建全年的生产日历
     * @request POST:/blade-cps/calendar/sync
     * @secure
     */
    calendarSyncCalendar: (calendarSaveVO: CalendarSaveVO, params: RequestParams = {}) =>
      this.request<ProductionCalendarVO, void>({
        path: `/blade-cps/calendar/sync`,
        method: 'POST',
        body: calendarSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 生产日历controller
     * @name CalendarGetCalendarDetail
     * @summary 查询生产日历详情
     * @request GET:/blade-cps/calendar/{id}
     * @secure
     */
    calendarGetCalendarDetail: (id: string, params: RequestParams = {}) =>
      this.request<RCalendarVO, void>({
        path: `/blade-cps/calendar/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 生产日历controller
     * @name CalendarDeleteCalendar
     * @summary 删除生产日历
     * @request DELETE:/blade-cps/calendar/{id}
     * @secure
     */
    calendarDeleteCalendar: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/calendar/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项controller
     * @name CheckItemCreateCheckItem
     * @summary 新增点检项
     * @request POST:/blade-cps/check-item
     * @secure
     */
    checkItemCreateCheckItem: (vo: CheckItemSubmitVO, params: RequestParams = {}) =>
      this.request<RListCheckItem, void>({
        path: `/blade-cps/check-item`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项controller
     * @name CheckItemUpdateCheckItem
     * @summary 修改点检项
     * @request PUT:/blade-cps/check-item
     * @secure
     */
    checkItemUpdateCheckItem: (vo: CheckItemUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/check-item`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项controller
     * @name CheckItemRemoveCheckItem
     * @summary 删除点检项
     * @request DELETE:/blade-cps/check-item
     * @secure
     */
    checkItemRemoveCheckItem: (vo: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/check-item`,
        method: 'DELETE',
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项controller
     * @name CheckItemListCheckItem
     * @summary 查询点检项
     * @request GET:/blade-cps/check-item/list
     * @secure
     */
    checkItemListCheckItem: (
      query?: {
        /** 点检项目id */
        projectId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCheckItemVO, void>({
        path: `/blade-cps/check-item/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项目controller
     * @name CheckProjectCreateCheckProject
     * @summary 新增点检项目
     * @request POST:/blade-cps/check-project
     * @secure
     */
    checkProjectCreateCheckProject: (vo: CheckProjectSubmitVO, params: RequestParams = {}) =>
      this.request<RCheckProject, void>({
        path: `/blade-cps/check-project`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项目controller
     * @name CheckProjectUpdateCheckProject
     * @summary 编辑点检项目
     * @request PUT:/blade-cps/check-project
     * @secure
     */
    checkProjectUpdateCheckProject: (vo: CheckProjectUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/check-project`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项目controller
     * @name CheckProjectRemoveCheckProject
     * @summary 删除点检项目
     * @request DELETE:/blade-cps/check-project
     * @secure
     */
    checkProjectRemoveCheckProject: (
      vo: IdsVO,
      query?: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/check-project`,
        method: 'DELETE',
        query: query,
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项目controller
     * @name CheckProjectExportCheckProject
     * @summary 导出点检项目
     * @request POST:/blade-cps/check-project/excel/export
     * @secure
     */
    checkProjectExportCheckProject: (queryVO: CheckProjectQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/check-project/excel/export`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项目controller
     * @name CheckProjectImportCheckProject
     * @summary 导入点检项目
     * @request POST:/blade-cps/check-project/excel/import
     * @secure
     */
    checkProjectImportCheckProject: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/check-project/excel/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项目controller
     * @name CheckProjectExportTemplateCheckProject
     * @summary 导出点检项目模板
     * @request GET:/blade-cps/check-project/excel/template
     * @secure
     */
    checkProjectExportTemplateCheckProject: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/check-project/excel/template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项目controller
     * @name CheckProjectPageCheckProject
     * @summary 分页查询点检项目
     * @request GET:/blade-cps/check-project/page
     * @secure
     */
    checkProjectPageCheckProject: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 查询条件 */
        key?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 状态：1 启用 0 停用
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageCheckProjectVO, void>({
        path: `/blade-cps/check-project/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 点检项目controller
     * @name CheckProjectPageCanRelate
     * @summary 分页查询可关联点检项目
     * @request GET:/blade-cps/check-project/page-can-relate
     * @secure
     */
    checkProjectPageCanRelate: (
      query: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 查询条件 */
        keyword?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /** deviceTypeId */
        deviceTypeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageCheckProjectVO, void>({
        path: `/blade-cps/check-project/page-can-relate`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingCraftBindProduction
     * @summary 产品和工艺路线绑定
     * @request GET:/blade-cps/craft-routing/bind-production
     * @secure
     */
    craftRoutingCraftBindProduction: (
      query: {
        /** craftId */
        craftId: string;
        /** productionId */
        productionId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/craft-routing/bind-production`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingCopyCraftVersion
     * @summary 复制工艺版本
     * @request POST:/blade-cps/craft-routing/copy-craft-version
     * @secure
     */
    craftRoutingCopyCraftVersion: (vo: ProductionCraftVersionVo, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/craft-routing/copy-craft-version`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingDetailCraft
     * @summary 工艺路线详情
     * @request GET:/blade-cps/craft-routing/detail
     * @secure
     */
    craftRoutingDetailCraft: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCraftRoutingDetailVO, void>({
        path: `/blade-cps/craft-routing/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingListFixedVersionByProduction
     * @summary 通过产品获取产品工艺下定版的版本
     * @request GET:/blade-cps/craft-routing/get-fixed-list
     * @secure
     */
    craftRoutingListFixedVersionByProduction: (
      query: {
        /** productionId */
        productionId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListProductionCraftVersionVo, void>({
        path: `/blade-cps/craft-routing/get-fixed-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingGetCraftByProduction
     * @summary 通过产品获取工艺路线
     * @request GET:/blade-cps/craft-routing/get-production-craft
     * @secure
     */
    craftRoutingGetCraftByProduction: (
      query: {
        /** productionId */
        productionId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCraftRoutingDetailVO, void>({
        path: `/blade-cps/craft-routing/get-production-craft`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingListCraftRouting
     * @summary 查看所有工艺路线
     * @request POST:/blade-cps/craft-routing/list
     * @secure
     */
    craftRoutingListCraftRouting: (vo: SearchVO, params: RequestParams = {}) =>
      this.request<RListCraftRoutingVO, void>({
        path: `/blade-cps/craft-routing/list`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingListNotBandCraft
     * @summary 获取没有绑定过产品的工艺路线
     * @request GET:/blade-cps/craft-routing/list-not-band-craft
     * @secure
     */
    craftRoutingListNotBandCraft: (params: RequestParams = {}) =>
      this.request<RListCraftRoutingVO, void>({
        path: `/blade-cps/craft-routing/list-not-band-craft`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingNotBandProduct
     * @summary 获取没有绑定过工艺路线的产品
     * @request GET:/blade-cps/craft-routing/not-band-craft
     * @secure
     */
    craftRoutingNotBandProduct: (
      query?: {
        /** craftId */
        craftId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListProductVo, void>({
        path: `/blade-cps/craft-routing/not-band-craft`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingPageNotBandProduct
     * @summary 获取没有绑定过工艺路线的产品(分页)
     * @request POST:/blade-cps/craft-routing/page-not-band-craft
     * @secure
     */
    craftRoutingPageNotBandProduct: (
      queryVO: PageNotBandProductQueryVO,
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
      this.request<RIPageProductVo, void>({
        path: `/blade-cps/craft-routing/page-not-band-craft`,
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
     * @tags 工艺路线controller
     * @name CraftRoutingDeleteCraft
     * @summary 删除工艺路线
     * @request DELETE:/blade-cps/craft-routing/remove
     * @secure
     */
    craftRoutingDeleteCraft: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/craft-routing/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingSaveRouting
     * @summary 新增工艺路线
     * @request POST:/blade-cps/craft-routing/save
     * @secure
     */
    craftRoutingSaveRouting: (vo: CraftRoutingAddVO, params: RequestParams = {}) =>
      this.request<RCraftRoutingVO, void>({
        path: `/blade-cps/craft-routing/save`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingCraftUnbindProduction
     * @summary 产品和工艺路线解绑
     * @request GET:/blade-cps/craft-routing/unbind-production
     * @secure
     */
    craftRoutingCraftUnbindProduction: (
      query: {
        /** craftId */
        craftId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/craft-routing/unbind-production`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺路线controller
     * @name CraftRoutingUpdateCraft
     * @summary 编辑工艺路线
     * @request PUT:/blade-cps/craft-routing/update
     * @secure
     */
    craftRoutingUpdateCraft: (vo: CraftRoutingUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/craft-routing/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 设备类型添加点检项目
     *
     * @tags 设备类型-点检项目
     * @name DeviceTypeCheckProjectCreateDeviceCheck
     * @summary 设备类型添加点检项目
     * @request POST:/blade-cps/device-type-check-projects
     * @secure
     */
    deviceTypeCheckProjectCreateDeviceCheck: (vo: DeviceCheckSubmitVO, params: RequestParams = {}) =>
      this.request<RListDeviceTypeCheckProject, void>({
        path: `/blade-cps/device-type-check-projects`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除设备类型下的点检项目
     *
     * @tags 设备类型-点检项目
     * @name DeviceTypeCheckProjectDeleteDeviceTypeCheckProject
     * @summary 删除设备类型下的点检项目
     * @request DELETE:/blade-cps/device-type-check-projects
     * @secure
     */
    deviceTypeCheckProjectDeleteDeviceTypeCheckProject: (vo: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/device-type-check-projects`,
        method: 'DELETE',
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * @description 分页查询设备类型的点检项目
     *
     * @tags 设备类型-点检项目
     * @name DeviceTypeCheckProjectListDeviceCheck
     * @summary 分页查询设备类型的点检项目
     * @request GET:/blade-cps/device-type-check-projects/page
     * @secure
     */
    deviceTypeCheckProjectListDeviceCheck: (
      query?: {
        /** 设备类型id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDeviceTypeCheckProjectVO, void>({
        path: `/blade-cps/device-type-check-projects/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 新增机器类型
     *
     * @tags 机器类型
     * @name DeviceTypeCreateDeviceType
     * @summary 新增机器类型
     * @request POST:/blade-cps/device-types
     * @secure
     */
    deviceTypeCreateDeviceType: (deviceTypeAddVO: DeviceTypeAddVO, params: RequestParams = {}) =>
      this.request<RDeviceType, void>({
        path: `/blade-cps/device-types`,
        method: 'POST',
        body: deviceTypeAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 更新机器类型
     *
     * @tags 机器类型
     * @name DeviceTypeUpdateDeviceType
     * @summary 更新机器类型
     * @request PUT:/blade-cps/device-types
     * @secure
     */
    deviceTypeUpdateDeviceType: (deviceTypeUpdateVO: DeviceTypeUpdateVO, params: RequestParams = {}) =>
      this.request<RDeviceTypeVO, void>({
        path: `/blade-cps/device-types`,
        method: 'PUT',
        body: deviceTypeUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除机器类型
     *
     * @tags 机器类型
     * @name DeviceTypeDeleteDeviceTypeByIds
     * @summary 删除机器类型
     * @request DELETE:/blade-cps/device-types
     * @secure
     */
    deviceTypeDeleteDeviceTypeByIds: (
      deviceTypeIdListVO: DeviceTypeIdListVO,
      query?: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/device-types`,
        method: 'DELETE',
        query: query,
        body: deviceTypeIdListVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 机器类型详情
     *
     * @tags 机器类型
     * @name DeviceTypeGetDeviceTypeById
     * @summary 机器类型详情
     * @request GET:/blade-cps/device-types/detail/{id}
     * @secure
     */
    deviceTypeGetDeviceTypeById: (id: string, params: RequestParams = {}) =>
      this.request<RDeviceTypeVO, void>({
        path: `/blade-cps/device-types/detail/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 导出机器类型
     *
     * @tags 机器类型
     * @name DeviceTypeExport
     * @summary 导出机器类型
     * @request POST:/blade-cps/device-types/excel/export
     * @secure
     */
    deviceTypeExport: (deviceTypeExcelVO: DeviceTypeExcelVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/device-types/excel/export`,
        method: 'POST',
        body: deviceTypeExcelVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 导入机器类型
     *
     * @tags 机器类型
     * @name DeviceTypeImportDeviceType
     * @summary 导入机器类型
     * @request POST:/blade-cps/device-types/excel/import
     * @secure
     */
    deviceTypeImportDeviceType: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/device-types/excel/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器类型
     * @name DeviceTypeExportMaintainItemTemplate
     * @summary 导出机器类型模板
     * @request GET:/blade-cps/device-types/export/template
     * @secure
     */
    deviceTypeExportMaintainItemTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/device-types/export/template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 分页查询机器类型
     *
     * @tags 机器类型
     * @name DeviceTypePageDeviceType
     * @summary 分页查询机器类型
     * @request GET:/blade-cps/device-types/page
     * @secure
     */
    deviceTypePageDeviceType: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 关键词 */
        keyWord?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 状态 1启用 0 停用
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDeviceTypeVO, void>({
        path: `/blade-cps/device-types/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeChangeOrganization
     * @summary 部门调整
     * @request PUT:/blade-cps/employee/change-organization
     * @secure
     */
    employeeChangeOrganization: (
      query: {
        /** employeeIds */
        employeeIds: string[];
        /** organizationId */
        organizationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/employee/change-organization`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids和是否启用
     *
     * @tags 员工管理
     * @name EmployeeEnable
     * @summary 员工启停用
     * @request POST:/blade-cps/employee/changeStatus
     * @secure
     */
    employeeEnable: (
      query: {
        /** 主键 */
        enable: boolean;
        /** 主键ids */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-cps/employee/changeStatus`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 员工管理
     * @name EmployeeDetail
     * @summary 详情
     * @request GET:/blade-cps/employee/detail/{id}
     * @secure
     */
    employeeDetail: (id: string, params: RequestParams = {}) =>
      this.request<REmployeeBriefVO, void>({
        path: `/blade-cps/employee/detail/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeExportEmployee
     * @summary 导出员工
     * @request POST:/blade-cps/employee/export-employee
     * @secure
     */
    employeeExportEmployee: (employeeSelectVO: EmployeeSelectVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/employee/export-employee`,
        method: 'POST',
        body: employeeSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeExportTemplate
     * @summary 导出模板
     * @request GET:/blade-cps/employee/export-template
     * @secure
     */
    employeeExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/employee/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description departmentHead 1 标识主管
     *
     * @tags 员工管理
     * @name EmployeeGetCurrentDepartEmp
     * @summary 当前部门绑定员工及主管
     * @request GET:/blade-cps/employee/get-current-depart-emps
     * @secure
     */
    employeeGetCurrentDepartEmp: (
      query: {
        /** currentOrganizationId */
        currentOrganizationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCurrentDepartEmpVO, void>({
        path: `/blade-cps/employee/get-current-depart-emps`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeGetEmployeeHierarchy
     * @summary 查询员工的层级结构
     * @request GET:/blade-cps/employee/hierarchy
     * @secure
     */
    employeeGetEmployeeHierarchy: (
      query?: {
        /** employeeId */
        employeeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RHierarchyVO, void>({
        path: `/blade-cps/employee/hierarchy`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeImportEmployee
     * @summary 导入员工
     * @request POST:/blade-cps/employee/import-employee
     * @secure
     */
    employeeImportEmployee: (
      organizationCode: {
        /**
         * file
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-cps/employee/import-employee`,
        method: 'POST',
        body: organizationCode,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeJudgmentCurrentDepart
     * @summary 校验员工是否是主管
     * @request GET:/blade-cps/employee/judgment-organization
     * @secure
     */
    employeeJudgmentCurrentDepart: (
      query: {
        /** 组织ID */
        organizationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/employee/judgment-organization`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeSelectEmployeeList
     * @summary 列表
     * @request GET:/blade-cps/employee/list
     * @secure
     */
    employeeSelectEmployeeList: (
      query?: {
        /** 选中的列表数据 */
        ids?: string[];
        /** 关键词：员工编号/员工姓名 */
        keyword?: string;
        /** 组织code */
        organizationCode?: string;
        /** 岗位id */
        postId?: string;
        /**
         * 状态:1 启用 0 停用
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListEmployeeVO, void>({
        path: `/blade-cps/employee/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeSelectEmployeePage
     * @summary 分页
     * @request GET:/blade-cps/employee/page
     * @secure
     */
    employeeSelectEmployeePage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 选中的列表数据 */
        ids?: string[];
        /** 关键词：员工编号/员工姓名 */
        keyword?: string;
        /** 组织code */
        organizationCode?: string;
        /** 岗位id */
        postId?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 状态:1 启用 0 停用
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageEmployeeVO, void>({
        path: `/blade-cps/employee/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeRemove
     * @summary 批量删除员工
     * @request POST:/blade-cps/employee/remove
     * @secure
     */
    employeeRemove: (
      query: {
        /** ids */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/employee/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeSettingCurrentDepartOfficer
     * @summary 设置当前部门主管
     * @request POST:/blade-cps/employee/set-current-depart-officer
     * @secure
     */
    employeeSettingCurrentDepartOfficer: (
      query?: {
        /**
         * 部门主管 ：1 是 0 否
         * @format int32
         */
        departmentHead?: number;
        /** 员工id */
        employeeId?: string;
        /** 当前部门id */
        organizationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/employee/set-current-depart-officer`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeSubmit
     * @summary 新增或更改员工信息
     * @request POST:/blade-cps/employee/submit
     * @secure
     */
    employeeSubmit: (employeeSubmitVO: EmployeeSubmitVO, params: RequestParams = {}) =>
      this.request<REmployeeVO, void>({
        path: `/blade-cps/employee/submit`,
        method: 'POST',
        body: employeeSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeTree
     * @summary 树形结构
     * @request GET:/blade-cps/employee/tree
     * @secure
     */
    employeeTree: (
      query?: {
        /** keyword */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListGroupTreeVO, void>({
        path: `/blade-cps/employee/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工管理
     * @name EmployeeUpdatePart
     * @summary 第三方绑定时更新工号或pin码
     * @request POST:/blade-cps/employee/updatePart
     * @secure
     */
    employeeUpdatePart: (employeeUpdatePartVO: EmployeeUpdatePartVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/employee/updatePart`,
        method: 'POST',
        body: employeeUpdatePartVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入fixtureVO
     *
     * @tags 企业logo
     * @name EnterpriseInformationAddEnterprise
     * @summary 新增企业logo
     * @request POST:/blade-cps/enterprise/add
     * @secure
     */
    enterpriseInformationAddEnterprise: (enterprise: EnterpriseInVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/enterprise/add`,
        method: 'POST',
        body: enterprise,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 企业logo id
     *
     * @tags 企业logo
     * @name EnterpriseInformationDelEnterprise
     * @summary 删除企业log
     * @request GET:/blade-cps/enterprise/del
     * @secure
     */
    enterpriseInformationDelEnterprise: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/enterprise/del`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入fixtureVO
     *
     * @tags 企业logo
     * @name EnterpriseInformationEditEnterprise
     * @summary 编辑企业logo
     * @request POST:/blade-cps/enterprise/edit
     * @secure
     */
    enterpriseInformationEditEnterprise: (enterprise: EnterpriseInVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/enterprise/edit`,
        method: 'POST',
        body: enterprise,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 无需传入信息
     *
     * @tags 企业logo
     * @name EnterpriseInformationGetEnterprise
     * @summary 获取企业logo
     * @request GET:/blade-cps/enterprise/get
     * @secure
     */
    enterpriseInformationGetEnterprise: (params: RequestParams = {}) =>
      this.request<REnterpriseInformationVO, void>({
        path: `/blade-cps/enterprise/get`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 夹具管理
     * @name FixtureAllGroupFixture
     * @summary 所有夹具组和夹具树形
     * @request POST:/blade-cps/fixture/all-group-fixture
     * @secure
     */
    fixtureAllGroupFixture: (vo: CommonGroupTypeVO, params: RequestParams = {}) =>
      this.request<RListGroupTreeVO, void>({
        path: `/blade-cps/fixture/all-group-fixture`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 夹具管理
     * @name FixtureExportMaintainItemTemplate
     * @summary 导出夹具模板
     * @request GET:/blade-cps/fixture/export/template
     * @secure
     */
    fixtureExportMaintainItemTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/fixture/export/template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入fixtureVO
     *
     * @tags 夹具管理
     * @name FixtureInsertFile
     * @summary 工装夹具添加附件
     * @request POST:/blade-cps/fixture/file
     * @secure
     */
    fixtureInsertFile: (toolAppendixVO: ToolAppendixVo, params: RequestParams = {}) =>
      this.request<RToolAppendixVo, void>({
        path: `/blade-cps/fixture/file`,
        method: 'POST',
        body: toolAppendixVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 夹具管理
     * @name FixtureFixtureGroupAndFixtureList
     * @summary 夹具组夹具集合
     * @request GET:/blade-cps/fixture/fixtureGroupAndFixtureList
     * @secure
     */
    fixtureFixtureGroupAndFixtureList: (params: RequestParams = {}) =>
      this.request<RListFixtureGroupFixtureVO, void>({
        path: `/blade-cps/fixture/fixtureGroupAndFixtureList`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入fixture
     *
     * @tags 夹具管理
     * @name FixtureDetail
     * @summary 工装夹具详情
     * @request GET:/blade-cps/fixture/get/{id}
     * @secure
     */
    fixtureDetail: (id: string, params: RequestParams = {}) =>
      this.request<RFixtureVo, void>({
        path: `/blade-cps/fixture/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入excel
     *
     * @tags 夹具管理
     * @name FixtureImportFixture
     * @summary 导入夹具
     * @request POST:/blade-cps/fixture/import-fixture
     * @secure
     */
    fixtureImportFixture: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/fixture/import-fixture`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 夹具管理
     * @name FixtureList
     * @summary 工装夹具列表
     * @request GET:/blade-cps/fixture/list
     * @secure
     */
    fixtureList: (
      query?: {
        /** groupId */
        groupId?: string;
        /** keyword */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFixtureVo, void>({
        path: `/blade-cps/fixture/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 夹具管理
     * @name FixturePage
     * @summary 工装夹具分页
     * @request GET:/blade-cps/fixture/page
     * @secure
     */
    fixturePage: (
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
        /** groupId */
        groupId?: string;
        /** keyword */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageFixtureVo, void>({
        path: `/blade-cps/fixture/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 夹具管理
     * @name FixturePageAllFixture
     * @summary 夹具组夹具分页
     * @request POST:/blade-cps/fixture/page-all-fixture
     * @secure
     */
    fixturePageAllFixture: (
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
      this.request<RIPageAllFixtureGroupVO, void>({
        path: `/blade-cps/fixture/page-all-fixture`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 夹具管理
     * @name FixtureRemove
     * @summary 工装夹具删除
     * @request DELETE:/blade-cps/fixture/remove
     * @secure
     */
    fixtureRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/fixture/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入fixtureVO
     *
     * @tags 夹具管理
     * @name FixtureUpdate
     * @summary 工装夹具修改
     * @request PUT:/blade-cps/fixture/update
     * @secure
     */
    fixtureUpdate: (fixtureVO: FixtureVo, params: RequestParams = {}) =>
      this.request<RFixtureVo, void>({
        path: `/blade-cps/fixture/update`,
        method: 'PUT',
        body: fixtureVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入fixtureVO
     *
     * @tags 夹具管理
     * @name FixtureInsert
     * @summary 工装夹具新增
     * @request POST:/blade-cps/fixture/{groupId}/insert
     * @secure
     */
    fixtureInsert: (groupId: string, fixtureVO: FixtureVo, params: RequestParams = {}) =>
      this.request<RFixtureVo, void>({
        path: `/blade-cps/fixture/${groupId}/insert`,
        method: 'POST',
        body: fixtureVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入FeedBackWcsAchievementsAddDTO
     *
     * @tags 全局工况
     * @name GlobalWcsAddFeedbackAchievements
     * @summary 添加人工反馈状态
     * @request POST:/blade-cps/global_wcs/add-wcs-achievements
     * @secure
     */
    globalWcsAddFeedbackAchievements: (wcsAchievementsUpdateVO: WcsAchievementsUpdateVO, params: RequestParams = {}) =>
      this.request<RWcsAchievementsUpdateVO, void>({
        path: `/blade-cps/global_wcs/add-wcs-achievements`,
        method: 'POST',
        body: wcsAchievementsUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ID
     *
     * @tags 全局工况
     * @name GlobalWcsDelete
     * @summary 删除人工反馈状态
     * @request DELETE:/blade-cps/global_wcs/delete-wcs-achievements/{code}
     * @secure
     */
    globalWcsDelete: (code: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/global_wcs/delete-wcs-achievements/${code}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入globalWcs
     *
     * @tags 全局工况
     * @name GlobalWcsList
     * @summary 列表
     * @request GET:/blade-cps/global_wcs/list
     * @secure
     */
    globalWcsList: (
      query?: {
        /** 状态码 */
        code?: string;
        /** 名称 */
        name?: string;
        /**
         * 类型1系统默认,2业务逻辑,4反馈
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListGlobalWcsVO, void>({
        path: `/blade-cps/global_wcs/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入wcsAchievementsUpdateVO
     *
     * @tags 全局工况
     * @name GlobalWcsUpdateWcsAndAchievements
     * @summary 编辑状态和绩效时间
     * @request POST:/blade-cps/global_wcs/update-wcs-achievements
     * @secure
     */
    globalWcsUpdateWcsAndAchievements: (wcsAchievementsUpdateVO: WcsAchievementsUpdateVO, params: RequestParams = {}) =>
      this.request<RWcsAchievementsUpdateVO, void>({
        path: `/blade-cps/global_wcs/update-wcs-achievements`,
        method: 'POST',
        body: wcsAchievementsUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 按顺序传入wcs的id
     *
     * @tags 全局工况
     * @name GlobalWcsUpdateWcsSeq
     * @summary 更新全局工况显示顺序
     * @request POST:/blade-cps/global_wcs/update-wcs-seq
     * @secure
     */
    globalWcsUpdateWcsSeq: (codeList: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/global_wcs/update-wcs-seq`,
        method: 'POST',
        body: codeList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 全局工况
     * @name GlobalWcsGetWcsAndAchievements
     * @summary 获取状态和绩效时间
     * @request GET:/blade-cps/global_wcs/wcs-achievements
     * @secure
     */
    globalWcsGetWcsAndAchievements: (params: RequestParams = {}) =>
      this.request<RListWcsAndAchievementsVO, void>({
        path: `/blade-cps/global_wcs/wcs-achievements`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 获取组详细
     *
     * @tags 组
     * @name CommonGroupDetail
     * @summary 详细
     * @request GET:/blade-cps/group
     * @secure
     */
    commonGroupDetail: (
      query: {
        /** 主键 */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCommonGroupVO, void>({
        path: `/blade-cps/group`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入group
     *
     * @tags 组
     * @name CommonGroupInsert
     * @summary 新增
     * @request POST:/blade-cps/group
     * @secure
     */
    commonGroupInsert: (groupVO: CreateCommonGroupVO, params: RequestParams = {}) =>
      this.request<RCommonGroupVO, void>({
        path: `/blade-cps/group`,
        method: 'POST',
        body: groupVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入group
     *
     * @tags 组
     * @name CommonGroupUpdate
     * @summary 修改
     * @request PUT:/blade-cps/group
     * @secure
     */
    commonGroupUpdate: (groupVO: UpdateCommonGroupVO, params: RequestParams = {}) =>
      this.request<RCommonGroupVO, void>({
        path: `/blade-cps/group`,
        method: 'PUT',
        body: groupVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除组
     *
     * @tags 组
     * @name CommonGroupDelete
     * @summary 删除
     * @request DELETE:/blade-cps/group
     * @secure
     */
    commonGroupDelete: (
      query: {
        /** 主键 */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-cps/group`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组
     * @name CommonGroupDeleteGroup
     * @summary 删除组后将子移动到默认组
     * @request DELETE:/blade-cps/group/deleteGroup
     * @secure
     */
    commonGroupDeleteGroup: (
      query: {
        /** groupId */
        groupId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/group/deleteGroup`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 采集分析实时看板工位组
     *
     * @tags 组
     * @name CommonGroupGetMdcGroup
     * @summary 采集分析实时看板工位组
     * @request GET:/blade-cps/group/get-mdc-group
     * @secure
     */
    commonGroupGetMdcGroup: (params: RequestParams = {}) =>
      this.request<RListMdcWorkStationGroupVO, void>({
        path: `/blade-cps/group/get-mdc-group`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 获取根节点
     *
     * @tags 组
     * @name CommonGroupGetRootNode
     * @summary 获取根节点
     * @request GET:/blade-cps/group/getRootNode
     * @secure
     */
    commonGroupGetRootNode: (
      query?: {
        /**
         * groupCategory
         * @format int32
         */
        groupCategory?: number;
        /** groupType */
        groupType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCommonGroup, void>({
        path: `/blade-cps/group/getRootNode`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 查询所有组和工位
     *
     * @tags 组
     * @name CommonGroupGroupWorkstationList
     * @summary 查询所有组和工位
     * @request POST:/blade-cps/group/groupWorkstation
     * @deprecated
     * @secure
     */
    commonGroupGroupWorkstationList: (commonGroupTypeVO: CommonGroupTypeVO, params: RequestParams = {}) =>
      this.request<RListWorkstationInGroupVO, void>({
        path: `/blade-cps/group/groupWorkstation`,
        method: 'POST',
        body: commonGroupTypeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询所有组和工位-用于积木报表树
     *
     * @tags 组
     * @name CommonGroupGroupWorkstationListJimu
     * @summary 查询所有组和工位(机器工位)-用于积木报表树
     * @request GET:/blade-cps/group/groupWorkstation/jimu
     * @secure
     */
    commonGroupGroupWorkstationListJimu: (
      query?: {
        /** pid */
        pid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<JimuTreeVO[], void>({
        path: `/blade-cps/group/groupWorkstation/jimu`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 查询所有组和工位（懒加载）
     *
     * @tags 组
     * @name CommonGroupGroupWorkstationListLazy
     * @summary 查询所有组和工位(懒加载)
     * @request GET:/blade-cps/group/groupWorkstation/lazy
     * @deprecated
     * @secure
     */
    commonGroupGroupWorkstationListLazy: (
      query: {
        /** groupId */
        groupId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationInGroupVO, void>({
        path: `/blade-cps/group/groupWorkstation/lazy`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 查询所有组和工位
     *
     * @tags 组
     * @name CommonGroupGroupWorkstationListType
     * @summary 查询所有组和工位(机器工位)
     * @request POST:/blade-cps/group/groupWorkstation/type
     * @deprecated
     * @secure
     */
    commonGroupGroupWorkstationListType: (commonGroupTypeVO: CommonGroupTypeVO, params: RequestParams = {}) =>
      this.request<RListWorkstationInGroupVO, void>({
        path: `/blade-cps/group/groupWorkstation/type`,
        method: 'POST',
        body: commonGroupTypeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 导入组
     *
     * @tags 组
     * @name CommonGroupImportCommonGroup
     * @summary 导入
     * @request POST:/blade-cps/group/import
     * @secure
     */
    commonGroupImportCommonGroup: (
      query: {
        /**
         * 工位内部存储区分
         * @format int32
         */
        distinguish?: number;
        /**
         * 组子类
         * @format int32
         */
        groupCategory: number;
        /** 组别 */
        groupType: string;
        /** 关键字查询 */
        keyword?: string;
        /**
         * 业务状态 1启用 0 停用
         * @format int32
         */
        status?: number;
        /**
         * 工种
         * @format int32
         */
        workType?: number;
        /** 工位id集合 */
        workstationIdList?: string[];
      },
      data: {
        /** file */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-cps/group/import`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入group
     *
     * @tags 组
     * @name CommonGroupList
     * @summary 列表
     * @request GET:/blade-cps/group/list
     * @secure
     */
    commonGroupList: (
      query?: {
        /** 组全称 */
        fullName?: string;
        /**
         * 组子类
         * @format int32
         */
        groupCategory?: number;
        /** 组别 */
        groupType?: string;
        /** 组名称 */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonGroupVO, void>({
        path: `/blade-cps/group/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 根据产线标签查询产线
     *
     * @tags 组
     * @name CommonGroupListBeltLine
     * @summary 根据产线标签查询产线
     * @request GET:/blade-cps/group/listBeltLine
     * @secure
     */
    commonGroupListBeltLine: (
      query?: {
        /** beltLineType */
        beltLineType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonGroupVO, void>({
        path: `/blade-cps/group/listBeltLine`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 移动组
     *
     * @tags 组
     * @name CommonGroupMove
     * @summary 移动
     * @request POST:/blade-cps/group/move
     * @secure
     */
    commonGroupMove: (
      query: {
        /**
         * 组子类
         * @format int32
         */
        groupCategory: number;
        /** 组别 */
        groupType: string;
        /** 当前组id */
        id: string;
        /** 目标父节点 */
        parentId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-cps/group/move`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 标签值来自 group_tag 字典
     *
     * @tags 组
     * @name CommonGroupTag
     * @summary 设定标签
     * @request POST:/blade-cps/group/tag
     * @secure
     */
    commonGroupTag: (tagCommonGroupVO: TagCommonGroupVO, params: RequestParams = {}) =>
      this.request<RCommonGroupVO, void>({
        path: `/blade-cps/group/tag`,
        method: 'POST',
        body: tagCommonGroupVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 组
     * @name CommonGroupTree
     * @summary 树形结构
     * @request GET:/blade-cps/group/tree
     * @secure
     */
    commonGroupTree: (
      query: {
        /**
         * 工位内部存储区分
         * @format int32
         */
        distinguish?: number;
        /**
         * 组子类
         * @format int32
         */
        groupCategory: number;
        /** 组别 */
        groupType: string;
        /** 关键字查询 */
        keyword?: string;
        /**
         * 业务状态 1启用 0 停用
         * @format int32
         */
        status?: number;
        /**
         * 工种
         * @format int32
         */
        workType?: number;
        /** 工位id集合 */
        workstationIdList?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonGroupVO, void>({
        path: `/blade-cps/group/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 引导页初始化
     * @name InitCheckIsNeedInit
     * @summary 判断是否需要初始化
     * @request GET:/blade-cps/init/checkIsNeedInit
     * @secure
     */
    initCheckIsNeedInit: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/init/checkIsNeedInit`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 引导页初始化
     * @name InitGetConfig
     * @summary 获得配置
     * @request GET:/blade-cps/init/get-config
     * @secure
     */
    initGetConfig: (params: RequestParams = {}) =>
      this.request<RConfigVO, void>({
        path: `/blade-cps/init/get-config`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 引导页初始化
     * @name InitLicenseDetail
     * @summary 获取上传密钥详情
     * @request GET:/blade-cps/init/license-detail
     * @secure
     */
    initLicenseDetail: (
      query?: {
        /** app */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLicenseDetailVO, void>({
        path: `/blade-cps/init/license-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 引导页初始化
     * @name InitLicenseDevice
     * @summary 获取设备mac地址
     * @request GET:/blade-cps/init/license-device
     * @secure
     */
    initLicenseDevice: (params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-cps/init/license-device`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 引导页初始化
     * @name InitLicenseUpload
     * @summary 上传系统密钥文件
     * @request POST:/blade-cps/init/license-upload
     * @secure
     */
    initLicenseUpload: (data: any, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/init/license-upload`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineCreateMachine
     * @summary 新增机器
     * @request POST:/blade-cps/machine
     * @secure
     */
    machineCreateMachine: (machineSubmitVO: MachineSubmitVO, params: RequestParams = {}) =>
      this.request<RMachine, void>({
        path: `/blade-cps/machine`,
        method: 'POST',
        body: machineSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineUpdateMachine
     * @summary 修改机器
     * @request PUT:/blade-cps/machine
     * @secure
     */
    machineUpdateMachine: (vo: MachineUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/machine`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineRemove
     * @summary 删除
     * @request DELETE:/blade-cps/machine
     * @secure
     */
    machineRemove: (
      vo: IdsVO,
      query?: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/machine`,
        method: 'DELETE',
        query: query,
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachinePageMachineBrief
     * @summary 分页查询机器
     * @request POST:/blade-cps/machine/brief-page
     * @secure
     */
    machinePageMachineBrief: (
      machineSelectVO: MachineBriefSelectVO,
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
      this.request<RIPageMachineBriefVO, void>({
        path: `/blade-cps/machine/brief-page`,
        method: 'POST',
        query: query,
        body: machineSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineChangeMachineGroup
     * @summary 改变机器组
     * @request PUT:/blade-cps/machine/changeMachineGroup
     * @secure
     */
    machineChangeMachineGroup: (
      query: {
        /** groupId */
        groupId: string;
        /** machineIdList */
        machineIdList: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/machine/changeMachineGroup`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineDetailByCode
     * @summary 根据编号查机器详情
     * @request GET:/blade-cps/machine/detail-by-code
     * @secure
     */
    machineDetailByCode: (
      query?: {
        /** 机器编码 */
        machineCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMachineDetailVO, void>({
        path: `/blade-cps/machine/detail-by-code`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineDetail
     * @summary 详情
     * @request GET:/blade-cps/machine/detail/{id}
     * @secure
     */
    machineDetail: (id: string, params: RequestParams = {}) =>
      this.request<RMachineDetailVO, void>({
        path: `/blade-cps/machine/detail/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineExportMachine
     * @summary 导出机器
     * @request POST:/blade-cps/machine/excel/export
     * @secure
     */
    machineExportMachine: (vo: MachineSelectVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/machine/excel/export`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineImportMachine
     * @summary 导入机器
     * @request POST:/blade-cps/machine/excel/import
     * @secure
     */
    machineImportMachine: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/machine/excel/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineExportTemplateCheckProject
     * @summary 导出机器模板
     * @request GET:/blade-cps/machine/excel/template
     * @secure
     */
    machineExportTemplateCheckProject: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/machine/excel/template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineList
     * @summary 查询机器集合
     * @request GET:/blade-cps/machine/list
     * @secure
     */
    machineList: (params: RequestParams = {}) =>
      this.request<RListMachineVO, void>({
        path: `/blade-cps/machine/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineListNoBand
     * @summary 查询未绑定的机器
     * @request GET:/blade-cps/machine/list-no-band
     * @secure
     */
    machineListNoBand: (params: RequestParams = {}) =>
      this.request<RListMachineVO, void>({
        path: `/blade-cps/machine/list-no-band`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineListVariablesName
     * @summary 查询采集变量名称
     * @request GET:/blade-cps/machine/list-variables-name
     * @secure
     */
    machineListVariablesName: (
      query?: {
        /** machineId */
        machineId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListString, void>({
        path: `/blade-cps/machine/list-variables-name`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachinePageMachine
     * @summary 分页查询机器
     * @request POST:/blade-cps/machine/page
     * @secure
     */
    machinePageMachine: (
      machineSelectVO: MachineSelectVO,
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
      this.request<RIPageMachineListVO, void>({
        path: `/blade-cps/machine/page`,
        method: 'POST',
        query: query,
        body: machineSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachinePageMachineByParam
     * @summary 分页查询机器
     * @request POST:/blade-cps/machine/page-by-param
     * @secure
     */
    machinePageMachineByParam: (
      machineSelectVO: MachineSelectVO,
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
      this.request<RIPageMachineListVO, void>({
        path: `/blade-cps/machine/page-by-param`,
        method: 'POST',
        query: query,
        body: machineSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 机器管理
     * @name MachineUpdateBrand
     * @summary 编辑机器品牌
     * @request PUT:/blade-cps/machine/updateBrand
     * @secure
     */
    machineUpdateBrand: (
      query: {
        /** brand */
        brand: string;
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/machine/updateBrand`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemCreateMaintainItem
     * @summary 添加保养项
     * @request POST:/blade-cps/maintain-item/create-maintain-item
     * @secure
     */
    maintainItemCreateMaintainItem: (maintainItemAddVO: MaintainItemAddVO, params: RequestParams = {}) =>
      this.request<RMaintainItem, void>({
        path: `/blade-cps/maintain-item/create-maintain-item`,
        method: 'POST',
        body: maintainItemAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemDeleteMaintainItem
     * @summary 删除保养项
     * @request POST:/blade-cps/maintain-item/delete-maintain-item
     * @secure
     */
    maintainItemDeleteMaintainItem: (
      query?: {
        /** 保养项ID */
        ids?: string[];
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/maintain-item/delete-maintain-item`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemEditMaintainItem
     * @summary 编辑保养项
     * @request POST:/blade-cps/maintain-item/edit-maintain-item
     * @secure
     */
    maintainItemEditMaintainItem: (maintainItemUpdateVO: MaintainItemUpdateVO, params: RequestParams = {}) =>
      this.request<RMaintainItem, void>({
        path: `/blade-cps/maintain-item/edit-maintain-item`,
        method: 'POST',
        body: maintainItemUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemExportMaintainItem
     * @summary 导出
     * @request POST:/blade-cps/maintain-item/export
     * @secure
     */
    maintainItemExportMaintainItem: (maintainItemExportDTO: MaintainItemExportDTO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/maintain-item/export`,
        method: 'POST',
        body: maintainItemExportDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemExportMaintainItemTemplate
     * @summary 导出保养项模板
     * @request GET:/blade-cps/maintain-item/export/template
     * @secure
     */
    maintainItemExportMaintainItemTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/maintain-item/export/template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入excel
     *
     * @tags 保养项
     * @name MaintainItemImportMaintainItem
     * @summary 动态导入
     * @request POST:/blade-cps/maintain-item/import-maintain-item
     * @secure
     */
    maintainItemImportMaintainItem: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/maintain-item/import-maintain-item`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemQueryMaintainItemList
     * @summary 查看保养项列表（不分页）
     * @request GET:/blade-cps/maintain-item/list
     * @secure
     */
    maintainItemQueryMaintainItemList: (
      query?: {
        /** 关键词 */
        keyWord?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMaintainItemVO, void>({
        path: `/blade-cps/maintain-item/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemQueryMaintainItemListCanRelate
     * @summary 查看可以关联的保养项列表（不分页）
     * @request GET:/blade-cps/maintain-item/list-can-relate
     * @secure
     */
    maintainItemQueryMaintainItemListCanRelate: (params: RequestParams = {}) =>
      this.request<RListMaintainItemVO, void>({
        path: `/blade-cps/maintain-item/list-can-relate`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemQueryMaintainItemListPage
     * @summary 查看保养项列表（分页）
     * @request GET:/blade-cps/maintain-item/page
     * @secure
     */
    maintainItemQueryMaintainItemListPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 关键词 */
        keyWord?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 状态：1 启用 0 停用
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainItemVO, void>({
        path: `/blade-cps/maintain-item/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemPageMaintainItemListCanRelate
     * @summary 查看可以关联的保养项列表（分页）
     * @request GET:/blade-cps/maintain-item/page-can-relate
     * @secure
     */
    maintainItemPageMaintainItemListCanRelate: (
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
        /** keyword */
        keyword: string;
        /** projectId */
        projectId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainItemVO, void>({
        path: `/blade-cps/maintain-item/page-can-relate`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项
     * @name MaintainItemQueryMaintainItem
     * @summary 查看保养项
     * @request GET:/blade-cps/maintain-item/query-maintain-item
     * @secure
     */
    maintainItemQueryMaintainItem: (
      query?: {
        /** 保养项ID */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMaintainItemVO, void>({
        path: `/blade-cps/maintain-item/query-maintain-item`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目保养项
     * @name MaintainProjectItemCreateMaintainProjectItem
     * @summary 添加保养项目保养项
     * @request POST:/blade-cps/maintain-project-item/create-maintain-project-item
     * @secure
     */
    maintainProjectItemCreateMaintainProjectItem: (maintainProjectItemAddDTO: MaintainProjectItemAddDTO, params: RequestParams = {}) =>
      this.request<RListMaintainProjectItemVO, void>({
        path: `/blade-cps/maintain-project-item/create-maintain-project-item`,
        method: 'POST',
        body: maintainProjectItemAddDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目保养项
     * @name MaintainProjectItemDeleteMaintainProjectItem
     * @summary 删除保养项目保养项
     * @request POST:/blade-cps/maintain-project-item/delete-maintain-project-item
     * @secure
     */
    maintainProjectItemDeleteMaintainProjectItem: (
      query?: {
        /** 保养项目保养项Id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLong, void>({
        path: `/blade-cps/maintain-project-item/delete-maintain-project-item`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目保养项
     * @name MaintainProjectItemQueryMaintainProjectItemList
     * @summary 通过保养项目ID查看保养项列表（不分页）
     * @request GET:/blade-cps/maintain-project-item/item-list
     * @secure
     */
    maintainProjectItemQueryMaintainProjectItemList: (
      query?: {
        /** 保养项目Id */
        projectId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MaintainProjectItemVO[], void>({
        path: `/blade-cps/maintain-project-item/item-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目保养项
     * @name MaintainProjectItemQueryMaintainProjectItemListPage
     * @summary 通过保养项目ID查看保养项列表（分页）
     * @request GET:/blade-cps/maintain-project-item/item-page
     * @secure
     */
    maintainProjectItemQueryMaintainProjectItemListPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 保养项目Id */
        projectId?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainProjectItemVO, void>({
        path: `/blade-cps/maintain-project-item/item-page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目
     * @name MaintainProjectCreateMaintainProject
     * @summary 添加保养项目
     * @request POST:/blade-cps/maintain-project/create-maintain-project
     * @secure
     */
    maintainProjectCreateMaintainProject: (maintainProjectAddVO: MaintainProjectAddVO, params: RequestParams = {}) =>
      this.request<RMaintainProject, void>({
        path: `/blade-cps/maintain-project/create-maintain-project`,
        method: 'POST',
        body: maintainProjectAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目
     * @name MaintainProjectDeleteMaintainProject
     * @summary 删除保养项目
     * @request POST:/blade-cps/maintain-project/delete-maintain-project
     * @secure
     */
    maintainProjectDeleteMaintainProject: (
      query?: {
        /** 保养项目Id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/maintain-project/delete-maintain-project`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目
     * @name MaintainProjectEditMaintainProject
     * @summary 编辑保养项目
     * @request POST:/blade-cps/maintain-project/edit-maintain-project
     * @secure
     */
    maintainProjectEditMaintainProject: (maintainProjectUpdateVO: MaintainProjectUpdateVO, params: RequestParams = {}) =>
      this.request<RMaintainProject, void>({
        path: `/blade-cps/maintain-project/edit-maintain-project`,
        method: 'POST',
        body: maintainProjectUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目
     * @name MaintainProjectQueryMaintainProject
     * @summary 查看保养项目
     * @request GET:/blade-cps/maintain-project/get-maintain-project
     * @secure
     */
    maintainProjectQueryMaintainProject: (
      query?: {
        /** 保养项目ID */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMaintainProjectVO, void>({
        path: `/blade-cps/maintain-project/get-maintain-project`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目
     * @name MaintainProjectQueryMaintainProjectList
     * @summary 通过机器类型查看保养项目列表（不分页）
     * @request GET:/blade-cps/maintain-project/list
     * @secure
     */
    maintainProjectQueryMaintainProjectList: (
      query?: {
        /** 机器类型id */
        deviceTypeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMaintainProjectVO, void>({
        path: `/blade-cps/maintain-project/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 保养项目
     * @name MaintainProjectQueryMaintainProjectListPage
     * @summary 通过机器类型查看保养项目列表（分页）
     * @request GET:/blade-cps/maintain-project/page
     * @secure
     */
    maintainProjectQueryMaintainProjectListPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 机器类型id */
        deviceTypeId?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaintainProjectVO, void>({
        path: `/blade-cps/maintain-project/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 故障类型
     * @name MalfunctionTypeDelete
     * @summary 批量删除故障类型
     * @request DELETE:/blade-cps/malfunction/delete
     * @secure
     */
    malfunctionTypeDelete: (
      query: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
        /** malfunctionTypeIds */
        malfunctionTypeIds: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/malfunction/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 故障类型
     * @name MalfunctionTypeDetail
     * @summary 故障类型详情
     * @request GET:/blade-cps/malfunction/detail
     * @secure
     */
    malfunctionTypeDetail: (
      query: {
        /** malfunctionTypeId */
        malfunctionTypeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMalfunctionTypeVO, void>({
        path: `/blade-cps/malfunction/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 故障类型
     * @name MalfunctionTypeExportMalfunctionType
     * @summary 导出故障类型
     * @request POST:/blade-cps/malfunction/export-malfunctionType
     * @secure
     */
    malfunctionTypeExportMalfunctionType: (queryVO: MalfunctionTypeQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/malfunction/export-malfunctionType`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 故障类型
     * @name MalfunctionTypeExportTemplate
     * @summary 导出模板
     * @request GET:/blade-cps/malfunction/export-template
     * @secure
     */
    malfunctionTypeExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/malfunction/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 故障类型
     * @name MalfunctionTypeImportMalfunctionType
     * @summary 导入故障类型
     * @request POST:/blade-cps/malfunction/import-malfunctionType
     * @secure
     */
    malfunctionTypeImportMalfunctionType: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/malfunction/import-malfunctionType`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 给维修记录故障码提供
     *
     * @tags 故障类型
     * @name MalfunctionTypeGetCodeAndRecord
     * @summary 获取故障编码list
     * @request GET:/blade-cps/malfunction/malfunction-code-list
     * @secure
     */
    malfunctionTypeGetCodeAndRecord: (params: RequestParams = {}) =>
      this.request<RListMalfunctionTypeRecordVO, void>({
        path: `/blade-cps/malfunction/malfunction-code-list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 故障类型
     * @name MalfunctionTypePage
     * @summary 分页/查询故障类型列表
     * @request GET:/blade-cps/malfunction/page
     * @secure
     */
    malfunctionTypePage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 故障类型编号或姓名 */
        malfunctionTypeCodeOrName?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 1 启用 0 停用
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMalfunctionTypeVO, void>({
        path: `/blade-cps/malfunction/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 故障类型
     * @name MalfunctionTypeSave
     * @summary 新增或更改故障类型
     * @request POST:/blade-cps/malfunction/save
     * @secure
     */
    malfunctionTypeSave: (malfunctionTypeVO: MalfunctionTypeVO, params: RequestParams = {}) =>
      this.request<RMalfunctionTypeVO, void>({
        path: `/blade-cps/malfunction/save`,
        method: 'POST',
        body: malfunctionTypeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 故障类型
     * @name MalfunctionTypeUpdateMalfunctionType
     * @summary 编辑故障类型
     * @request PUT:/blade-cps/malfunction/update-malfunctionType
     * @secure
     */
    malfunctionTypeUpdateMalfunctionType: (malfunctionTypeVO: MalfunctionTypeVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/malfunction/update-malfunctionType`,
        method: 'PUT',
        body: malfunctionTypeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料存放管理
     * @name MaterialStorageAddMaterialStorage
     * @summary 物料存放新增
     * @request POST:/blade-cps/material-storage
     * @secure
     */
    materialStorageAddMaterialStorage: (vo: MaterialStorageAddVO, params: RequestParams = {}) =>
      this.request<RListMaterialStorageVo, void>({
        path: `/blade-cps/material-storage`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 物料存放管理
     * @name MaterialStorageRemove
     * @summary 物料存放删除
     * @request DELETE:/blade-cps/material-storage
     * @secure
     */
    materialStorageRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/material-storage`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料存放管理
     * @name MaterialStorageImportMaterialStorage
     * @summary 导入物料存放
     * @request POST:/blade-cps/material-storage/excel/import
     * @secure
     */
    materialStorageImportMaterialStorage: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/material-storage/excel/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料存放管理
     * @name MaterialStorageExportTemplate
     * @summary 导出物料存放模板
     * @request POST:/blade-cps/material-storage/excel/template
     * @secure
     */
    materialStorageExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/material-storage/excel/template`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料存放管理
     * @name MaterialStorageListMaterial
     * @summary 库位下的物料列表
     * @request GET:/blade-cps/material-storage/list
     * @secure
     */
    materialStorageListMaterial: (
      query: {
        /** keyword */
        keyword?: string;
        /** wareId */
        wareId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWareMaterialStorageVO, void>({
        path: `/blade-cps/material-storage/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料存放管理
     * @name MaterialStorageMaterialNotBind
     * @summary 未绑定的物料列表
     * @request GET:/blade-cps/material-storage/material/not-bind
     * @secure
     */
    materialStorageMaterialNotBind: (params: RequestParams = {}) =>
      this.request<RListMaterialVO, void>({
        path: `/blade-cps/material-storage/material/not-bind`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料存放管理
     * @name MaterialStoragePageMaterialNotBind
     * @summary 未绑定的物料列表(分页)
     * @request GET:/blade-cps/material-storage/material/page-not-bind
     * @secure
     */
    materialStoragePageMaterialNotBind: (
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
        /** keyword */
        keyword: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaterialVO, void>({
        path: `/blade-cps/material-storage/material/page-not-bind`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料存放管理
     * @name MaterialStoragePageMaterial
     * @summary 库位下的物料列表-分页
     * @request POST:/blade-cps/material-storage/page
     * @secure
     */
    materialStoragePageMaterial: (
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
        /** keyword */
        keyword?: string;
        /** wareId */
        wareId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageWareMaterialStorageVO, void>({
        path: `/blade-cps/material-storage/page`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料类型
     * @name MaterialTypeCreateMaterialType
     * @summary 新增物料类型
     * @request POST:/blade-cps/material-type/create-material-type
     * @secure
     */
    materialTypeCreateMaterialType: (materialTypeAddVO: MaterialTypeAddVO, params: RequestParams = {}) =>
      this.request<RMaterialTypeVO, void>({
        path: `/blade-cps/material-type/create-material-type`,
        method: 'POST',
        body: materialTypeAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料类型
     * @name MaterialTypeDeleteMaterialType
     * @summary 删除物料类型（支持批量）
     * @request DELETE:/blade-cps/material-type/delete-material-type
     * @secure
     */
    materialTypeDeleteMaterialType: (
      query: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
        /** ids */
        ids: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RListString, void>({
        path: `/blade-cps/material-type/delete-material-type`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 查询物料类型列表（不分页）
     *
     * @tags 物料类型
     * @name MaterialTypeGetMaterialTypeList
     * @summary 查询物料类型列表（不分页）
     * @request GET:/blade-cps/material-type/list
     * @secure
     */
    materialTypeGetMaterialTypeList: (
      query?: {
        /** keyWord */
        keyWord?: string;
        /**
         * status
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMaterialTypeVO, void>({
        path: `/blade-cps/material-type/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 查询分页
     *
     * @tags 物料类型
     * @name MaterialTypeGetPageMaterialType
     * @summary 查询分页
     * @request GET:/blade-cps/material-type/page
     * @secure
     */
    materialTypeGetPageMaterialType: (
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
        /** keyWord */
        keyWord?: string;
        /**
         * status
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaterialTypeVO, void>({
        path: `/blade-cps/material-type/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料类型
     * @name MaterialTypeUpdateMaterialType
     * @summary 修改物料类型
     * @request PUT:/blade-cps/material-type/update-material-type
     * @secure
     */
    materialTypeUpdateMaterialType: (materialTypeUpdateVO: MaterialTypeUpdateVO, params: RequestParams = {}) =>
      this.request<RMaterialTypeVO, void>({
        path: `/blade-cps/material-type/update-material-type`,
        method: 'PUT',
        body: materialTypeUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料
     * @name MaterialCreateMaterial
     * @summary 新增物料
     * @request POST:/blade-cps/material/create-material
     * @secure
     */
    materialCreateMaterial: (materialAddVO: MaterialAddVO, params: RequestParams = {}) =>
      this.request<RMaterialVO, void>({
        path: `/blade-cps/material/create-material`,
        method: 'POST',
        body: materialAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料
     * @name MaterialDeleteMaterial
     * @summary 删除物料（支持批量）
     * @request DELETE:/blade-cps/material/delete-material
     * @secure
     */
    materialDeleteMaterial: (
      query: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
        /** ids */
        ids: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/material/delete-material`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料
     * @name MaterialExportMaterial
     * @summary 导出物料信息
     * @request POST:/blade-cps/material/export-material
     * @secure
     */
    materialExportMaterial: (materialQueryVO: MaterialQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/material/export-material`,
        method: 'POST',
        body: materialQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料
     * @name MaterialExportTemplate
     * @summary 导出模板
     * @request GET:/blade-cps/material/export-template
     * @secure
     */
    materialExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/material/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料
     * @name MaterialGetMaterial
     * @summary 查询物料
     * @request GET:/blade-cps/material/get-material
     * @secure
     */
    materialGetMaterial: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMaterialVO, void>({
        path: `/blade-cps/material/get-material`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料
     * @name MaterialImportMaterial
     * @summary 导入物料信息
     * @request POST:/blade-cps/material/import-material
     * @secure
     */
    materialImportMaterial: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/material/import-material`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料
     * @name MaterialListBySparePart
     * @summary 查询备品备件物料
     * @request GET:/blade-cps/material/listBySparePart
     * @secure
     */
    materialListBySparePart: (params: RequestParams = {}) =>
      this.request<RListMaterialVO, void>({
        path: `/blade-cps/material/listBySparePart`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 查询分页
     *
     * @tags 物料
     * @name MaterialGetPageMaterial
     * @summary 查询分页
     * @request GET:/blade-cps/material/page
     * @secure
     */
    materialGetPageMaterial: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 选中的列表数据 */
        ids?: string[];
        /** 关键词 */
        keyWord?: string;
        /** 排序字段 json传递 */
        orderField?: string;
        /**
         * 物料属性
         * @format int32
         */
        property?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 启用-1 禁用-0
         * @format int32
         */
        status?: number;
        物料类型Id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageMaterialVO, void>({
        path: `/blade-cps/material/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 同步产品物料
     *
     * @tags 物料
     * @name MaterialSynchronizedProductMaterial
     * @summary 同步产品物料
     * @request POST:/blade-cps/material/synchronized-product-material
     * @secure
     */
    materialSynchronizedProductMaterial: (synchronizedProductMaterialVO: SynchronizedProductMaterialVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/material/synchronized-product-material`,
        method: 'POST',
        body: synchronizedProductMaterialVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 物料
     * @name MaterialUpdateMaterial
     * @summary 修改物料
     * @request PUT:/blade-cps/material/update-material
     * @secure
     */
    materialUpdateMaterial: (materialUpdateVO: MaterialUpdateVO, params: RequestParams = {}) =>
      this.request<RMaterialVO, void>({
        path: `/blade-cps/material/update-material`,
        method: 'PUT',
        body: materialUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织结构
     * @name OrganizationDeleteOrganization
     * @summary 删除组织
     * @request DELETE:/blade-cps/organization
     * @secure
     */
    organizationDeleteOrganization: (
      query: {
        /** 主键 */
        ids: string;
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/organization`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织结构
     * @name OrganizationExportOrganization
     * @summary 导出组织
     * @request POST:/blade-cps/organization/export-organization
     * @secure
     */
    organizationExportOrganization: (organizationSelectVO: OrganizationSelectVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/organization/export-organization`,
        method: 'POST',
        body: organizationSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织结构
     * @name OrganizationExportTemplate
     * @summary 导出模板
     * @request GET:/blade-cps/organization/export-template
     * @secure
     */
    organizationExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/organization/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织结构
     * @name OrganizationList
     * @summary 列表
     * @request GET:/blade-cps/organization/list
     * @secure
     */
    organizationList: (
      query: {
        /**
         * 工位内部存储区分
         * @format int32
         */
        distinguish?: number;
        /**
         * 组子类
         * @format int32
         */
        groupCategory: number;
        /** 组别 */
        groupType: string;
        /** 选中的列表数据 */
        ids?: string[];
        /** 关键字查询 */
        keyword?: string;
        /** 组织名称 */
        name?: string;
        /**
         * 业务状态 1启用 0 停用
         * @format int32
         */
        status?: number;
        /**
         * 工种
         * @format int32
         */
        workType?: number;
        /** 工位id集合 */
        workstationIdList?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RListOrganizationDTO, void>({
        path: `/blade-cps/organization/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织结构
     * @name OrganizationTree
     * @summary 树形结构
     * @request GET:/blade-cps/organization/tree
     * @secure
     */
    organizationTree: (
      query: {
        /**
         * 工位内部存储区分
         * @format int32
         */
        distinguish?: number;
        /**
         * 组子类
         * @format int32
         */
        groupCategory: number;
        /** 组别 */
        groupType: string;
        /** 选中的列表数据 */
        ids?: string[];
        /** 关键字查询 */
        keyword?: string;
        /** 组织名称 */
        name?: string;
        /**
         * 业务状态 1启用 0 停用
         * @format int32
         */
        status?: number;
        /**
         * 工种
         * @format int32
         */
        workType?: number;
        /** 工位id集合 */
        workstationIdList?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RListOrganizationVO, void>({
        path: `/blade-cps/organization/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 采集数据监控设置
     * @name ParamMonitoringSettingsDelete
     * @summary 删除
     * @request DELETE:/blade-cps/param-monitoring-settings/delete
     * @secure
     */
    paramMonitoringSettingsDelete: (
      query?: {
        /** id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/param-monitoring-settings/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 采集数据监控设置
     * @name ParamMonitoringSettingsList
     * @summary 列表
     * @request GET:/blade-cps/param-monitoring-settings/list
     * @secure
     */
    paramMonitoringSettingsList: (params: RequestParams = {}) =>
      this.request<RListParamMonitoringSettingsVO, void>({
        path: `/blade-cps/param-monitoring-settings/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 采集数据监控设置
     * @name ParamMonitoringSettingsSave
     * @summary 新增
     * @request POST:/blade-cps/param-monitoring-settings/save
     * @secure
     */
    paramMonitoringSettingsSave: (paramMonitoringSettings: ParamMonitoringSettingsAddVO, params: RequestParams = {}) =>
      this.request<RParamMonitoringSettingsVO, void>({
        path: `/blade-cps/param-monitoring-settings/save`,
        method: 'POST',
        body: paramMonitoringSettings,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 采集数据监控设置
     * @name ParamMonitoringSettingsUpdate
     * @summary 修改
     * @request PUT:/blade-cps/param-monitoring-settings/update
     * @secure
     */
    paramMonitoringSettingsUpdate: (paramMonitoringSettings: ParamMonitoringSettingsUpdateVO, params: RequestParams = {}) =>
      this.request<RParamMonitoringSettingsVO, void>({
        path: `/blade-cps/param-monitoring-settings/update`,
        method: 'PUT',
        body: paramMonitoringSettings,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序关联业务管理
     * @name ProcessAssociationPage
     * @summary 查询工序业务关联信息
     * @request GET:/blade-cps/process-association/page
     * @secure
     */
    processAssociationPage: (
      query: {
        /** processId */
        processId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RProcessAssociationVO, void>({
        path: `/blade-cps/process-association/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序关联业务管理
     * @name ProcessAssociationPageCanRelate
     * @summary 可关联工位
     * @request GET:/blade-cps/process-association/page-can-relate
     * @secure
     */
    processAssociationPageCanRelate: (
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
        /** keyword */
        keyword: string;
        /** processId */
        processId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageWorkstationVO, void>({
        path: `/blade-cps/process-association/page-can-relate`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序关联业务管理
     * @name ProcessAssociationDelete
     * @summary 删除工序关联
     * @request DELETE:/blade-cps/process-association/remove
     * @secure
     */
    processAssociationDelete: (
      query: {
        /** bizId */
        bizId: string;
        /** processId */
        processId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/process-association/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序关联业务管理
     * @name ProcessAssociationSave
     * @summary 保存工序关联信息
     * @request POST:/blade-cps/process-association/save
     * @secure
     */
    processAssociationSave: (processAssociationSaveVO: ProcessAssociationSaveVO, params: RequestParams = {}) =>
      this.request<RListProcessAssociationDetailVO, void>({
        path: `/blade-cps/process-association/save`,
        method: 'POST',
        body: processAssociationSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序管理
     * @name ProcessExportProcess
     * @summary 导出工序
     * @request POST:/blade-cps/process/export-process
     * @secure
     */
    processExportProcess: (queryVO: ProcessQueryVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/process/export-process`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序管理
     * @name ProcessExportTemplate
     * @summary 导出模板
     * @request GET:/blade-cps/process/export-template
     * @secure
     */
    processExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/process/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序管理
     * @name ProcessGet
     * @summary 获取工序信息
     * @request GET:/blade-cps/process/get
     * @secure
     */
    processGet: (
      query: {
        /** processId */
        processId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RProcessDetailVO, void>({
        path: `/blade-cps/process/get`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序管理
     * @name ProcessImportProcess
     * @summary 导入工序
     * @request POST:/blade-cps/process/import-process
     * @secure
     */
    processImportProcess: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/process/import-process`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序管理
     * @name ProcessPage
     * @summary 查询工序-分页
     * @request GET:/blade-cps/process/page
     * @secure
     */
    processPage: (
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
        /**
         * status
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageProcessVO, void>({
        path: `/blade-cps/process/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序管理
     * @name ProcessDelete
     * @summary 删除工序
     * @request DELETE:/blade-cps/process/remove
     * @secure
     */
    processDelete: (
      query: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
        /** processIds */
        processIds: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/process/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工序管理
     * @name ProcessSave
     * @summary 新增或更改工序信息
     * @request POST:/blade-cps/process/save
     * @secure
     */
    processSave: (processSaveVO: ProcessSaveVO, params: RequestParams = {}) =>
      this.request<RProcessDetailVO, void>({
        path: `/blade-cps/process/save`,
        method: 'POST',
        body: processSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入产品类型id
     *
     * @tags 产品类型管理
     * @name ProductTypeChangeStatus
     * @summary 切换产品类型状态
     * @request PUT:/blade-cps/product-type/change-status
     * @secure
     */
    productTypeChangeStatus: (changeStatusVO: VO2, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/product-type/change-status`,
        method: 'PUT',
        body: changeStatusVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入productType
     *
     * @tags 产品类型管理
     * @name ProductTypeDetail
     * @summary 产品类型详情
     * @request GET:/blade-cps/product-type/get/{id}
     * @secure
     */
    productTypeDetail: (id: string, params: RequestParams = {}) =>
      this.request<RProductTypeVo, void>({
        path: `/blade-cps/product-type/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 产品类型管理
     * @name ProductTypeList
     * @summary 产品类型列表
     * @request GET:/blade-cps/product-type/list
     * @secure
     */
    productTypeList: (params: RequestParams = {}) =>
      this.request<RListProductTypeVo, void>({
        path: `/blade-cps/product-type/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 类型id集合
     *
     * @tags 产品类型管理
     * @name ProductTypeListByIds
     * @summary 批量查询产品类型列表
     * @request POST:/blade-cps/product-type/listByIds
     * @secure
     */
    productTypeListByIds: (typeIds: string[], params: RequestParams = {}) =>
      this.request<RListProductTypePlanVO, void>({
        path: `/blade-cps/product-type/listByIds`,
        method: 'POST',
        body: typeIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 产品类型管理
     * @name ProductTypePage
     * @summary 产品类型分页
     * @request GET:/blade-cps/product-type/page
     * @secure
     */
    productTypePage: (
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
      this.request<RIPageProductTypeVo, void>({
        path: `/blade-cps/product-type/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 产品类型管理
     * @name ProductTypeRemove
     * @summary 产品类型删除
     * @request DELETE:/blade-cps/product-type/remove
     * @secure
     */
    productTypeRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/product-type/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入productTypeVO
     *
     * @tags 产品类型管理
     * @name ProductTypeInsert
     * @summary 产品类型新增或修改
     * @request POST:/blade-cps/product-type/saveOrUpdate
     * @secure
     */
    productTypeInsert: (productTypeVO: ProductTypeVo, params: RequestParams = {}) =>
      this.request<RProductTypeVo, void>({
        path: `/blade-cps/product-type/saveOrUpdate`,
        method: 'POST',
        body: productTypeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入产品ids
     *
     * @tags 产品信息管理
     * @name ProductChangeStatus
     * @summary 切换产品状态
     * @request PUT:/blade-cps/product/change-status
     * @secure
     */
    productChangeStatus: (changeStatusVO: _VO_, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/product/change-status`,
        method: 'PUT',
        body: changeStatusVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产品信息管理
     * @name ProductExportProduct
     * @summary 导出产品
     * @request POST:/blade-cps/product/export-product
     * @secure
     */
    productExportProduct: (vo: ProductSearchVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/product/export-product`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产品信息管理
     * @name ProductExportTemplate
     * @summary 导出模板
     * @request GET:/blade-cps/product/export-template
     * @secure
     */
    productExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/product/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入product
     *
     * @tags 产品信息管理
     * @name ProductDetail
     * @summary 产品信息详情
     * @request GET:/blade-cps/product/get/{id}
     * @secure
     */
    productDetail: (id: string, params: RequestParams = {}) =>
      this.request<RProductVo, void>({
        path: `/blade-cps/product/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产品信息管理
     * @name ProductImportProduct
     * @summary 导入产品
     * @request POST:/blade-cps/product/import-product
     * @secure
     */
    productImportProduct: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/product/import-product`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入productVO
     *
     * @tags 产品信息管理
     * @name ProductInsert
     * @summary 产品信息新增
     * @request POST:/blade-cps/product/insert
     * @secure
     */
    productInsert: (productAddVO: ProductVo2, params: RequestParams = {}) =>
      this.request<RProductVo, void>({
        path: `/blade-cps/product/insert`,
        method: 'POST',
        body: productAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入product
     *
     * @tags 产品信息管理
     * @name ProductLazyTree
     * @summary 产品信息懒加载树
     * @request POST:/blade-cps/product/lazy/tree
     * @secure
     */
    productLazyTree: (
      vo: ProductSearchVO,
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
        /** id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageProductEasyVO, void>({
        path: `/blade-cps/product/lazy/tree`,
        method: 'POST',
        query: query,
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入productSelectVO
     *
     * @tags 产品信息管理
     * @name ProductList
     * @summary 产品信息列表
     * @request GET:/blade-cps/product/list
     * @secure
     */
    productList: (
      query?: {
        /** 编号/名称 */
        keyWord?: string;
        /** 所属产品节点id */
        parentId?: string;
        /** 规格型号 */
        standardModel?: string;
        /**
         * 状态
         * @format int32
         */
        status?: number;
        /** 所属产品类型 */
        typeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListProductVo, void>({
        path: `/blade-cps/product/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产品信息管理
     * @name ProductPage
     * @summary 产品信息分页
     * @request GET:/blade-cps/product/page
     * @secure
     */
    productPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 编号/名称 */
        keyWord?: string;
        /** 所属产品节点id */
        parentId?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /** 规格型号 */
        standardModel?: string;
        /**
         * 状态
         * @format int32
         */
        status?: number;
        /** 所属产品类型 */
        typeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageProductVo, void>({
        path: `/blade-cps/product/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 产品信息管理
     * @name ProductRemove
     * @summary 产品信息删除
     * @request DELETE:/blade-cps/product/remove
     * @secure
     */
    productRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/product/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产品信息管理
     * @name ProductTree
     * @summary 产品信息树
     * @request GET:/blade-cps/product/tree
     * @secure
     */
    productTree: (
      query?: {
        /** 编号/名称 */
        keyWord?: string;
        /** 所属产品节点id */
        parentId?: string;
        /** 规格型号 */
        standardModel?: string;
        /**
         * 状态
         * @format int32
         */
        status?: number;
        /** 所属产品类型 */
        typeId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListProductVo, void>({
        path: `/blade-cps/product/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入productVO
     *
     * @tags 产品信息管理
     * @name ProductUpdate
     * @summary 产品信息修改
     * @request PUT:/blade-cps/product/update
     * @secure
     */
    productUpdate: (productUpdateVO: ProductVo3, params: RequestParams = {}) =>
      this.request<RProductVo, void>({
        path: `/blade-cps/product/update`,
        method: 'PUT',
        body: productUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessChildProcessSave
     * @summary 工艺版本新增子序
     * @request POST:/blade-cps/production-craft-process/child-process-save
     * @secure
     */
    productionCraftProcessChildProcessSave: (vo: ChildProcessVO, params: RequestParams = {}) =>
      this.request<RListProductionCraftProcess, void>({
        path: `/blade-cps/production-craft-process/child-process-save`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessChildProcessUpdate
     * @summary 工艺版本子序移除-放置最后
     * @request POST:/blade-cps/production-craft-process/child-process-update
     * @secure
     */
    productionCraftProcessChildProcessUpdate: (vo: ProcessParallelUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-process/child-process-update`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessTreeProcess
     * @summary 工艺版本下的树形结构
     * @request GET:/blade-cps/production-craft-process/child-tree
     * @secure
     */
    productionCraftProcessTreeProcess: (
      query: {
        /** versionId */
        versionId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListVersionProcessTreeVO, void>({
        path: `/blade-cps/production-craft-process/child-tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessDetailProcess
     * @summary 工艺版本的工序流程详情
     * @request GET:/blade-cps/production-craft-process/get/{id}
     * @secure
     */
    productionCraftProcessDetailProcess: (id: string, params: RequestParams = {}) =>
      this.request<RProductionCraftProcessDetailVO, void>({
        path: `/blade-cps/production-craft-process/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessInsert
     * @summary 工艺版本的工序流程新增
     * @request POST:/blade-cps/production-craft-process/insert
     * @secure
     */
    productionCraftProcessInsert: (
      query: {
        /** versionId */
        versionId: string;
      },
      processList: VersionProcessAddVO[],
      params: RequestParams = {},
    ) =>
      this.request<RListProductionCraftProcessVo, void>({
        path: `/blade-cps/production-craft-process/insert`,
        method: 'POST',
        query: query,
        body: processList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessListProcess
     * @summary 工艺版本下的工序
     * @request GET:/blade-cps/production-craft-process/list
     * @secure
     */
    productionCraftProcessListProcess: (
      query: {
        /** versionId */
        versionId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListProductionCraftProcessVo, void>({
        path: `/blade-cps/production-craft-process/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessParallelSave
     * @summary 工艺版本并序新增
     * @request POST:/blade-cps/production-craft-process/parallel-save
     * @secure
     */
    productionCraftProcessParallelSave: (vo: ProcessParallelSaveVO, params: RequestParams = {}) =>
      this.request<RListProductionCraftProcessVo, void>({
        path: `/blade-cps/production-craft-process/parallel-save`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessRemoveProcess
     * @summary 工艺版本的工序流程删除
     * @request DELETE:/blade-cps/production-craft-process/remove
     * @secure
     */
    productionCraftProcessRemoveProcess: (vo: ProductionCraftProcessRemoveVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-process/remove`,
        method: 'DELETE',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessSaveParallel
     * @summary 新建并序
     * @request POST:/blade-cps/production-craft-process/save-parallel
     * @secure
     */
    productionCraftProcessSaveParallel: (vo: VersionProcessParallelVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-process/save-parallel`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入productionCraftProcessVO
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessUpdateVersionProcess
     * @summary 工艺版本的工序流程修改
     * @request PUT:/blade-cps/production-craft-process/update
     * @secure
     */
    productionCraftProcessUpdateVersionProcess: (vo: VersionProcessUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-process/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessUpdateParallelProcess
     * @summary 修改虚拟序的相关信息
     * @request PUT:/blade-cps/production-craft-process/update-parallel
     * @secure
     */
    productionCraftProcessUpdateParallelProcess: (vo: UpdateParallelProcessVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-process/update-parallel`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺版本的工序流程管理
     * @name ProductionCraftProcessUpdateSort
     * @summary 工艺版本的工序流程顺序更新
     * @request PUT:/blade-cps/production-craft-process/update-sort
     * @secure
     */
    productionCraftProcessUpdateSort: (vo: ProductionCraftProcessUpdateSortVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-process/update-sort`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 产品工艺版本管理
     * @name ProductionCraftVersionCancelFixVersion
     * @summary 产品工艺版本取消定版
     * @request PUT:/blade-cps/production-craft-version/cancel-fix-version/{id}
     * @secure
     */
    productionCraftVersionCancelFixVersion: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-version/cancel-fix-version/${id}`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 产品工艺版本管理
     * @name ProductionCraftVersionDetailVersion
     * @summary 产品工艺版本详情
     * @request GET:/blade-cps/production-craft-version/detail/{id}
     * @secure
     */
    productionCraftVersionDetailVersion: (id: string, params: RequestParams = {}) =>
      this.request<RCraftVersionLineVO, void>({
        path: `/blade-cps/production-craft-version/detail/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 产品工艺版本管理
     * @name ProductionCraftVersionFixVersion
     * @summary 产品工艺版本定版
     * @request PUT:/blade-cps/production-craft-version/fix-version/{id}
     * @secure
     */
    productionCraftVersionFixVersion: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-version/fix-version/${id}`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 产品工艺版本管理
     * @name ProductionCraftVersionSaveCraftVersion
     * @summary 产品工艺版本新增
     * @request POST:/blade-cps/production-craft-version/insert
     * @secure
     */
    productionCraftVersionSaveCraftVersion: (
      query: {
        /** craftId */
        craftId: string;
      },
      vo: CraftVersionAddVO,
      params: RequestParams = {},
    ) =>
      this.request<RProductionCraftVersionVo, void>({
        path: `/blade-cps/production-craft-version/insert`,
        method: 'POST',
        query: query,
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 产品工艺版本管理
     * @name ProductionCraftVersionRemoveVersion
     * @summary 产品工艺版本删除
     * @request DELETE:/blade-cps/production-craft-version/remove/{id}
     * @secure
     */
    productionCraftVersionRemoveVersion: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-version/remove/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入productionCraftVersionVO
     *
     * @tags 产品工艺版本管理
     * @name ProductionCraftVersionUpdateVersion
     * @summary 产品工艺版本修改
     * @request PUT:/blade-cps/production-craft-version/update
     * @secure
     */
    productionCraftVersionUpdateVersion: (vo: ProductionCraftVersionEditVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/production-craft-version/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 班次controller
     * @name ShiftSaveShift
     * @summary 新建班次模型
     * @request POST:/blade-cps/shift
     * @secure
     */
    shiftSaveShift: (shiftSaveVO: ShiftSaveVO, params: RequestParams = {}) =>
      this.request<RShiftModelVO, void>({
        path: `/blade-cps/shift`,
        method: 'POST',
        body: shiftSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 班次controller
     * @name ShiftUpdateShift
     * @summary 编辑版次模型
     * @request PUT:/blade-cps/shift
     * @secure
     */
    shiftUpdateShift: (shiftUpdateVO: ShiftUpdateVO, params: RequestParams = {}) =>
      this.request<RShiftModelVO, void>({
        path: `/blade-cps/shift`,
        method: 'PUT',
        body: shiftUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入shiftOffDay
     *
     * @tags ShiftOffDay管理
     * @name ShiftOffDayDetail
     * @summary 班次休息日详情
     * @request GET:/blade-cps/shift-off-day/get/{id}
     * @secure
     */
    shiftOffDayDetail: (id: string, params: RequestParams = {}) =>
      this.request<RShiftOffDayVo, void>({
        path: `/blade-cps/shift-off-day/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description ShiftOffDayAddVO
     *
     * @tags ShiftOffDay管理
     * @name ShiftOffDayInsert
     * @summary 班次休息日新增
     * @request POST:/blade-cps/shift-off-day/insert
     * @secure
     */
    shiftOffDayInsert: (addVO: ShiftOffDayVo1, params: RequestParams = {}) =>
      this.request<RShiftOffDayVo, void>({
        path: `/blade-cps/shift-off-day/insert`,
        method: 'POST',
        body: addVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags ShiftOffDay管理
     * @name ShiftOffDayList
     * @summary 班次休息日列表
     * @request POST:/blade-cps/shift-off-day/list
     * @secure
     */
    shiftOffDayList: (vo: OffDaySearchVO, params: RequestParams = {}) =>
      this.request<RListShiftOffDayVo, void>({
        path: `/blade-cps/shift-off-day/list`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags ShiftOffDay管理
     * @name ShiftOffDayPage
     * @summary 班次休息日分页
     * @request POST:/blade-cps/shift-off-day/page
     * @secure
     */
    shiftOffDayPage: (
      vo: OffDaySearchVO,
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
      this.request<RIPageShiftOffDayVo, void>({
        path: `/blade-cps/shift-off-day/page`,
        method: 'POST',
        query: query,
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags ShiftOffDay管理
     * @name ShiftOffDayRemove
     * @summary 班次休息日删除
     * @request DELETE:/blade-cps/shift-off-day/remove
     * @secure
     */
    shiftOffDayRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<RVoid, void>({
        path: `/blade-cps/shift-off-day/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入shiftOffDayVO
     *
     * @tags ShiftOffDay管理
     * @name ShiftOffDayUpdate
     * @summary 班次休息日修改
     * @request PUT:/blade-cps/shift-off-day/update
     * @secure
     */
    shiftOffDayUpdate: (updateVO: ShiftOffDayVo2, params: RequestParams = {}) =>
      this.request<RShiftOffDayVo, void>({
        path: `/blade-cps/shift-off-day/update`,
        method: 'PUT',
        body: updateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询租户下所有班次模型对应名称
     *
     * @tags 班次controller
     * @name ShiftGetShiftIndexName
     * @summary 查询租户下所有班次模型对应名称
     * @request GET:/blade-cps/shift/indexNames
     * @secure
     */
    shiftGetShiftIndexName: (params: RequestParams = {}) =>
      this.request<RShiftIndexNameVO, void>({
        path: `/blade-cps/shift/indexNames`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 班次模型列表
     *
     * @tags 班次controller
     * @name ShiftGetShiftList
     * @summary 班次模型列表
     * @request POST:/blade-cps/shift/list
     * @secure
     */
    shiftGetShiftList: (shiftModelSearchVO: ShiftModelSearchVO, params: RequestParams = {}) =>
      this.request<RListShiftSimpleVO, void>({
        path: `/blade-cps/shift/list`,
        method: 'POST',
        body: shiftModelSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入分页条件
     *
     * @tags 班次controller
     * @name ShiftGetPageShift
     * @summary 分页查询班次模型
     * @request POST:/blade-cps/shift/page
     * @secure
     */
    shiftGetPageShift: (
      shiftModelSearchVO: ShiftModelSearchVO,
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
      this.request<RIPageShiftSimpleVO, void>({
        path: `/blade-cps/shift/page`,
        method: 'POST',
        query: query,
        body: shiftModelSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入日期
     *
     * @tags 班次controller
     * @name ShiftGetShiftModelByDates
     * @summary 根据日期获取班制
     * @request POST:/blade-cps/shift/shift-model-list
     * @secure
     */
    shiftGetShiftModelByDates: (dates: string[], params: RequestParams = {}) =>
      this.request<RListShiftModelVO, void>({
        path: `/blade-cps/shift/shift-model-list`,
        method: 'POST',
        body: dates,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 班次controller
     * @name ShiftGetShiftIndex
     * @summary 查询班次index详情
     * @request GET:/blade-cps/shift/shiftIndex/{id}
     * @secure
     */
    shiftGetShiftIndex: (id: string, params: RequestParams = {}) =>
      this.request<RListInt, void>({
        path: `/blade-cps/shift/shiftIndex/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 班次controller
     * @name ShiftUpdateShiftBasic
     * @summary 编辑版次模型基础信息
     * @request PUT:/blade-cps/shift/updateBasic
     * @secure
     */
    shiftUpdateShiftBasic: (shiftUpdateBasicVO: ShiftUpdateBasicVO, params: RequestParams = {}) =>
      this.request<RShiftModelVO, void>({
        path: `/blade-cps/shift/updateBasic`,
        method: 'PUT',
        body: shiftUpdateBasicVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 班次controller
     * @name ShiftGetShiftDetail
     * @summary 查询班次详情
     * @request GET:/blade-cps/shift/{id}
     * @secure
     */
    shiftGetShiftDetail: (id: string, params: RequestParams = {}) =>
      this.request<RShiftVO, void>({
        path: `/blade-cps/shift/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 班次controller
     * @name ShiftDeleteShift
     * @summary 删除班次模型
     * @request DELETE:/blade-cps/shift/{id}
     * @secure
     */
    shiftDeleteShift: (id: string, params: RequestParams = {}) =>
      this.request<RVoid, void>({
        path: `/blade-cps/shift/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入stockInType
     *
     * @tags StockInType管理
     * @name StockInTypeDetail
     * @summary 入库类型详情
     * @request GET:/blade-cps/stock-in-type/get/{id}
     * @secure
     */
    stockInTypeDetail: (id: string, params: RequestParams = {}) =>
      this.request<RStockInTypeVo, void>({
        path: `/blade-cps/stock-in-type/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入stockInTypeVO
     *
     * @tags StockInType管理
     * @name StockInTypeInsert
     * @summary 入库类型新增
     * @request POST:/blade-cps/stock-in-type/insert
     * @secure
     */
    stockInTypeInsert: (stockInTypeVO: StockInTypeVo, params: RequestParams = {}) =>
      this.request<RStockInTypeVo, void>({
        path: `/blade-cps/stock-in-type/insert`,
        method: 'POST',
        body: stockInTypeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags StockInType管理
     * @name StockInTypeList
     * @summary 入库类型列表
     * @request GET:/blade-cps/stock-in-type/list
     * @secure
     */
    stockInTypeList: (params: RequestParams = {}) =>
      this.request<RListStockInTypeVo, void>({
        path: `/blade-cps/stock-in-type/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags StockInType管理
     * @name StockInTypePage
     * @summary 入库类型分页
     * @request GET:/blade-cps/stock-in-type/page
     * @secure
     */
    stockInTypePage: (
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
        /** key */
        key?: string;
        /**
         * status
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageStockInTypeVo, void>({
        path: `/blade-cps/stock-in-type/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags StockInType管理
     * @name StockInTypeRemove
     * @summary 入库类型删除
     * @request DELETE:/blade-cps/stock-in-type/remove
     * @secure
     */
    stockInTypeRemove: (
      ids: string[],
      query?: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/stock-in-type/remove`,
        method: 'DELETE',
        query: query,
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入stockInTypeVO
     *
     * @tags StockInType管理
     * @name StockInTypeUpdate
     * @summary 入库类型修改
     * @request PUT:/blade-cps/stock-in-type/update
     * @secure
     */
    stockInTypeUpdate: (vo: StockInTypeVo, params: RequestParams = {}) =>
      this.request<RStockInTypeVo, void>({
        path: `/blade-cps/stock-in-type/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入stockOutType
     *
     * @tags StockOutType管理
     * @name StockOutTypeDetail
     * @summary 出库类型详情
     * @request GET:/blade-cps/stock-out-type/get/{id}
     * @secure
     */
    stockOutTypeDetail: (id: string, params: RequestParams = {}) =>
      this.request<RStockOutTypeVo, void>({
        path: `/blade-cps/stock-out-type/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入stockOutTypeVO
     *
     * @tags StockOutType管理
     * @name StockOutTypeInsert
     * @summary 出库类型新增
     * @request POST:/blade-cps/stock-out-type/insert
     * @secure
     */
    stockOutTypeInsert: (stockOutTypeVO: StockOutTypeVo, params: RequestParams = {}) =>
      this.request<RStockOutTypeVo, void>({
        path: `/blade-cps/stock-out-type/insert`,
        method: 'POST',
        body: stockOutTypeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags StockOutType管理
     * @name StockOutTypeList
     * @summary 出库类型列表
     * @request GET:/blade-cps/stock-out-type/list
     * @secure
     */
    stockOutTypeList: (params: RequestParams = {}) =>
      this.request<RListStockOutTypeVo, void>({
        path: `/blade-cps/stock-out-type/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags StockOutType管理
     * @name StockOutTypePage
     * @summary 出库类型分页
     * @request GET:/blade-cps/stock-out-type/page
     * @secure
     */
    stockOutTypePage: (
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
        /** key */
        key?: string;
        /**
         * status
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageStockOutTypeVo, void>({
        path: `/blade-cps/stock-out-type/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags StockOutType管理
     * @name StockOutTypeRemove
     * @summary 出库类型删除
     * @request DELETE:/blade-cps/stock-out-type/remove
     * @secure
     */
    stockOutTypeRemove: (
      ids: string[],
      query?: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/stock-out-type/remove`,
        method: 'DELETE',
        query: query,
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入stockOutTypeVO
     *
     * @tags StockOutType管理
     * @name StockOutTypeUpdate
     * @summary 出库类型修改
     * @request PUT:/blade-cps/stock-out-type/update
     * @secure
     */
    stockOutTypeUpdate: (vo: StockOutTypeVo, params: RequestParams = {}) =>
      this.request<RStockOutTypeVo, void>({
        path: `/blade-cps/stock-out-type/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name SupplierPage
     * @summary 分页查询供应商
     * @request GET:/blade-cps/supplier/page
     * @secure
     */
    supplierPage: (
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
      this.request<RIPageSupplierVO, void>({
        path: `/blade-cps/supplier/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name SupplierDelete
     * @summary 删除供应商信息
     * @request DELETE:/blade-cps/supplier/remove
     * @secure
     */
    supplierDelete: (
      query: {
        /** supplierIds */
        supplierIds: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/supplier/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name SupplierSave
     * @summary 新增或更改供应商信息
     * @request POST:/blade-cps/supplier/save
     * @secure
     */
    supplierSave: (supplierSaveVO: SupplierSaveVO, params: RequestParams = {}) =>
      this.request<RSupplierDetailVO, void>({
        path: `/blade-cps/supplier/save`,
        method: 'POST',
        body: supplierSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendFmsMessage
     * @summary sendFmsMessage
     * @request POST:/blade-cps/test/send-fms-area
     * @secure
     */
    webSocketTestSendFmsMessage: (fmsArea: FmsArea, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-fms-area`,
        method: 'POST',
        body: fmsArea,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendFmsCarry
     * @summary sendFmsCarry
     * @request POST:/blade-cps/test/send-fms-carry
     * @secure
     */
    webSocketTestSendFmsCarry: (fmsCarry: FmsWorkstation, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-fms-carry`,
        method: 'POST',
        body: fmsCarry,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendFmsManual
     * @summary sendFmsManual
     * @request POST:/blade-cps/test/send-fms-manual
     * @secure
     */
    webSocketTestSendFmsManual: (station: FmsWorkstation, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-fms-manual`,
        method: 'POST',
        body: station,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendFmsStation
     * @summary sendFmsStation
     * @request POST:/blade-cps/test/send-fms-station
     * @secure
     */
    webSocketTestSendFmsStation: (workstation: FmsWorkstation, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-fms-station`,
        method: 'POST',
        body: workstation,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendMessage
     * @summary sendMessage
     * @request GET:/blade-cps/test/send-message
     * @secure
     */
    webSocketTestSendMessage: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-message`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendMessage1
     * @summary sendMessage
     * @request HEAD:/blade-cps/test/send-message
     * @secure
     */
    webSocketTestSendMessage1: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-message`,
        method: 'HEAD',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendMessage2
     * @summary sendMessage
     * @request POST:/blade-cps/test/send-message
     * @secure
     */
    webSocketTestSendMessage2: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-message`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendMessage3
     * @summary sendMessage
     * @request PUT:/blade-cps/test/send-message
     * @secure
     */
    webSocketTestSendMessage3: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-message`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendMessage5
     * @summary sendMessage
     * @request DELETE:/blade-cps/test/send-message
     * @secure
     */
    webSocketTestSendMessage5: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-message`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendMessage6
     * @summary sendMessage
     * @request OPTIONS:/blade-cps/test/send-message
     * @secure
     */
    webSocketTestSendMessage6: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-message`,
        method: 'OPTIONS',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 测试websocket
     * @name WebSocketTestSendMessage4
     * @summary sendMessage
     * @request PATCH:/blade-cps/test/send-message
     * @secure
     */
    webSocketTestSendMessage4: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/test/send-message`,
        method: 'PATCH',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 附件文件管理
     * @name ToolAppendixSaveTool
     * @summary 工装-托盘新增文件
     * @request POST:/blade-cps/tool-appendix
     * @secure
     */
    toolAppendixSaveTool: (vo: ToolAppendixAddVO, params: RequestParams = {}) =>
      this.request<RListToolAppendixVo, void>({
        path: `/blade-cps/tool-appendix`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 附件文件管理
     * @name ToolAppendixRemove
     * @summary 附件文件删除
     * @request DELETE:/blade-cps/tool-appendix/remove
     * @secure
     */
    toolAppendixRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/tool-appendix/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘面-夹具管理
     * @name TrayFixtureAddFaceFixture
     * @summary 托盘面-夹具新增
     * @request POST:/blade-cps/tray-fixture
     * @secure
     */
    trayFixtureAddFaceFixture: (vo: TrayFaceFixtureAddVO, params: RequestParams = {}) =>
      this.request<RListTrayFixtureVo, void>({
        path: `/blade-cps/tray-fixture`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘面-夹具管理
     * @name TrayFixtureRemoveFaceFixture
     * @summary 托盘面-夹具删除
     * @request DELETE:/blade-cps/tray-fixture
     * @secure
     */
    trayFixtureRemoveFaceFixture: (vo: TrayFixRemoveVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/tray-fixture`,
        method: 'DELETE',
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘面-夹具管理
     * @name TrayFixtureImportTrayFixture
     * @summary 导入托盘-夹具
     * @request POST:/blade-cps/tray-fixture/excel/import
     * @secure
     */
    trayFixtureImportTrayFixture: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/tray-fixture/excel/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘面-夹具管理
     * @name TrayFixtureExportTemplate
     * @summary 导出托盘-夹具模板
     * @request POST:/blade-cps/tray-fixture/excel/template
     * @secure
     */
    trayFixtureExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/tray-fixture/excel/template`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘面-夹具管理
     * @name TrayFixtureListFixture
     * @summary 托盘面-夹具列表
     * @request GET:/blade-cps/tray-fixture/list/fixture
     * @secure
     */
    trayFixtureListFixture: (
      query: {
        /** faceId */
        faceId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListTrayFaceFixtureVO, void>({
        path: `/blade-cps/tray-fixture/list/fixture`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘存放管理
     * @name TrayStorageAddTrayStorage
     * @summary 新增库位下的托盘
     * @request POST:/blade-cps/tray-storage
     * @secure
     */
    trayStorageAddTrayStorage: (vo: TrayStorageAddVO, params: RequestParams = {}) =>
      this.request<RListTrayStorageVo, void>({
        path: `/blade-cps/tray-storage`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘存放管理
     * @name TrayStorageRemoveBind
     * @summary 托盘存放删除
     * @request DELETE:/blade-cps/tray-storage
     * @secure
     */
    trayStorageRemoveBind: (vo: TrayFixRemoveVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/tray-storage`,
        method: 'DELETE',
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘存放管理
     * @name TrayStorageImportTrayStorage
     * @summary 导入托盘存放
     * @request POST:/blade-cps/tray-storage/excel/import
     * @secure
     */
    trayStorageImportTrayStorage: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/tray-storage/excel/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘存放管理
     * @name TrayStorageExportTemplate
     * @summary 导出托盘存放模板
     * @request POST:/blade-cps/tray-storage/excel/template
     * @secure
     */
    trayStorageExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/tray-storage/excel/template`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘存放管理
     * @name TrayStorageListTray
     * @summary 库位下的托盘列表
     * @request GET:/blade-cps/tray-storage/list
     * @secure
     */
    trayStorageListTray: (
      query: {
        /** warehouseStationId */
        warehouseStationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWareTrayStorageVO, void>({
        path: `/blade-cps/tray-storage/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘存放管理
     * @name TrayStorageAreaStationTree
     * @summary 库区-库位树形结构
     * @request GET:/blade-cps/tray-storage/tree
     * @secure
     */
    trayStorageAreaStationTree: (params: RequestParams = {}) =>
      this.request<RListWarehouseAreaStationVO, void>({
        path: `/blade-cps/tray-storage/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘面管理
     * @name TraySurfaceListTraySurface
     * @summary 托盘面列表
     * @request GET:/blade-cps/tray-surface/list/{trayId}
     * @secure
     */
    traySurfaceListTraySurface: (trayId: string, params: RequestParams = {}) =>
      this.request<RListTraySurfaceVo, void>({
        path: `/blade-cps/tray-surface/list/${trayId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘面管理
     * @name TraySurfaceRemoveFace
     * @summary 删除托盘下的托盘面
     * @request DELETE:/blade-cps/tray-surface/remove-face/{trayId}
     * @secure
     */
    traySurfaceRemoveFace: (
      trayId: string,
      query: {
        /** faceId */
        faceId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/tray-surface/remove-face/${trayId}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘面管理
     * @name TraySurfaceSaveTrayFave
     * @summary 新增托盘面
     * @request POST:/blade-cps/tray-surface/save
     * @secure
     */
    traySurfaceSaveTrayFave: (vo: TrayFaceAddVO, params: RequestParams = {}) =>
      this.request<RTraySurfaceVo, void>({
        path: `/blade-cps/tray-surface/save`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘面管理
     * @name TraySurfaceUpdateTraySurface
     * @summary 托盘面修改
     * @request PUT:/blade-cps/tray-surface/update
     * @secure
     */
    traySurfaceUpdateTraySurface: (vo: TrayFaceUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/tray-surface/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayExportTemplate
     * @summary 导出托盘模板
     * @request GET:/blade-cps/tray/excel/template
     * @secure
     */
    trayExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/tray/excel/template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入excel
     *
     * @tags 托盘controller
     * @name TrayImportTray
     * @summary 动态导入
     * @request POST:/blade-cps/tray/import-tray
     * @secure
     */
    trayImportTray: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/tray/import-tray`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayListTray
     * @summary 托盘列表
     * @request POST:/blade-cps/tray/list
     * @secure
     */
    trayListTray: (params: RequestParams = {}) =>
      this.request<RListTrayEasyVO, void>({
        path: `/blade-cps/tray/list`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayTrayPage
     * @summary 分页查询托盘
     * @request GET:/blade-cps/tray/page/{groupId}
     * @secure
     */
    trayTrayPage: (
      groupId: string,
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
        /** keyword */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPagePageTrayVO, void>({
        path: `/blade-cps/tray/page/${groupId}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayRemoveTray
     * @summary 删除托盘
     * @request DELETE:/blade-cps/tray/remove
     * @secure
     */
    trayRemoveTray: (vo: IdsVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/tray/remove`,
        method: 'DELETE',
        body: vo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayRemoveTree
     * @summary 删除托盘组
     * @request DELETE:/blade-cps/tray/remove-tree
     * @secure
     */
    trayRemoveTree: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/tray/remove-tree`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TraySaveTray
     * @summary 新增托盘
     * @request POST:/blade-cps/tray/save
     * @secure
     */
    traySaveTray: (vo: TraySaveVO, params: RequestParams = {}) =>
      this.request<RTrayVO, void>({
        path: `/blade-cps/tray/save`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayListToolAppendix
     * @summary 托盘下的工艺文件
     * @request POST:/blade-cps/tray/tool-appendix
     * @secure
     */
    trayListToolAppendix: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListToolAppendixVo, void>({
        path: `/blade-cps/tray/tool-appendix`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayToolingTree
     * @summary 工装-托盘夹具-树形结构
     * @request POST:/blade-cps/tray/tooling-tree
     * @secure
     */
    trayToolingTree: (vo: CommonGroupTypeVO, params: RequestParams = {}) =>
      this.request<RListToolingVO, void>({
        path: `/blade-cps/tray/tooling-tree`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayTrayTree
     * @summary 托盘-托盘组树
     * @request POST:/blade-cps/tray/tray-tree
     * @secure
     */
    trayTrayTree: (vo: CommonGroupTypeVO, params: RequestParams = {}) =>
      this.request<RListTrayTreeVO, void>({
        path: `/blade-cps/tray/tray-tree`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayUnUsedTrayTree
     * @summary 未使用的托盘 托盘-托盘组树
     * @request POST:/blade-cps/tray/un-used-tray-tree
     * @secure
     */
    trayUnUsedTrayTree: (vo: CommonGroupTypeVO, params: RequestParams = {}) =>
      this.request<RListTrayTreeVO, void>({
        path: `/blade-cps/tray/un-used-tray-tree`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayUpdateTray
     * @summary 修改托盘
     * @request PUT:/blade-cps/tray/update
     * @secure
     */
    trayUpdateTray: (vo: TrayUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/tray/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 托盘controller
     * @name TrayGetDetail
     * @summary 托盘详情
     * @request GET:/blade-cps/tray/{id}
     * @secure
     */
    trayGetDetail: (id: string, params: RequestParams = {}) =>
      this.request<RTrayVO, void>({
        path: `/blade-cps/tray/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 库区管理
     * @name WarehouseAreaCount
     * @summary 库区统计值
     * @request GET:/blade-cps/warehouse-area/count
     * @secure
     */
    warehouseAreaCount: (params: RequestParams = {}) =>
      this.request<RInt, void>({
        path: `/blade-cps/warehouse-area/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入warehouseArea
     *
     * @tags 库区管理
     * @name WarehouseAreaDetail
     * @summary 库区详情
     * @request GET:/blade-cps/warehouse-area/get/{id}
     * @secure
     */
    warehouseAreaDetail: (id: string, params: RequestParams = {}) =>
      this.request<RWarehouseAreaVo, void>({
        path: `/blade-cps/warehouse-area/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入warehouseAreaVO
     *
     * @tags 库区管理
     * @name WarehouseAreaInsert
     * @summary 库区新增
     * @request POST:/blade-cps/warehouse-area/insert
     * @secure
     */
    warehouseAreaInsert: (warehouseAreaSubmitVO: WarehouseAreaSubmitVO, params: RequestParams = {}) =>
      this.request<RWarehouseAreaVo, void>({
        path: `/blade-cps/warehouse-area/insert`,
        method: 'POST',
        body: warehouseAreaSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 库区管理
     * @name WarehouseAreaList
     * @summary 库区列表
     * @request GET:/blade-cps/warehouse-area/list
     * @secure
     */
    warehouseAreaList: (params: RequestParams = {}) =>
      this.request<RListWarehouseAreaVo, void>({
        path: `/blade-cps/warehouse-area/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 库区管理
     * @name WarehouseAreaPage
     * @summary 库区分页
     * @request GET:/blade-cps/warehouse-area/page
     * @secure
     */
    warehouseAreaPage: (
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
      this.request<RIPageWarehouseAreaVo, void>({
        path: `/blade-cps/warehouse-area/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 库区管理
     * @name WarehouseAreaRemove
     * @summary 库区删除
     * @request DELETE:/blade-cps/warehouse-area/remove
     * @secure
     */
    warehouseAreaRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/warehouse-area/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 库区管理
     * @name WarehouseAreaGetStationCount
     * @summary 获取库区下的库位数量
     * @request GET:/blade-cps/warehouse-area/station-count
     * @secure
     */
    warehouseAreaGetStationCount: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLong, void>({
        path: `/blade-cps/warehouse-area/station-count`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 库区管理
     * @name WarehouseAreaTree
     * @summary 树形结构
     * @request GET:/blade-cps/warehouse-area/tree
     * @secure
     */
    warehouseAreaTree: (params: RequestParams = {}) =>
      this.request<RListWarehouseAreaVo, void>({
        path: `/blade-cps/warehouse-area/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入warehouseAreaVO
     *
     * @tags 库区管理
     * @name WarehouseAreaUpdate
     * @summary 库区修改
     * @request PUT:/blade-cps/warehouse-area/update
     * @secure
     */
    warehouseAreaUpdate: (warehouseAreaUpdateVO: WarehouseAreaUpdateVO, params: RequestParams = {}) =>
      this.request<RWarehouseAreaVo, void>({
        path: `/blade-cps/warehouse-area/update`,
        method: 'PUT',
        body: warehouseAreaUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 库区货格管理
     * @name WarehouseGridCount
     * @summary 库区货格统计值
     * @request GET:/blade-cps/warehouse-grid/count
     * @secure
     */
    warehouseGridCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-cps/warehouse-grid/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入warehouseGrid
     *
     * @tags 库区货格管理
     * @name WarehouseGridDetail
     * @summary 库区货格详情
     * @request GET:/blade-cps/warehouse-grid/get/{id}
     * @secure
     */
    warehouseGridDetail: (id: string, params: RequestParams = {}) =>
      this.request<RWarehouseGridVo, void>({
        path: `/blade-cps/warehouse-grid/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入warehouseGridVO
     *
     * @tags 库区货格管理
     * @name WarehouseGridInsert
     * @summary 库区货格新增
     * @request POST:/blade-cps/warehouse-grid/insert
     * @secure
     */
    warehouseGridInsert: (warehouseGridCreateVO: WarehouseGridCreateVO, params: RequestParams = {}) =>
      this.request<RWarehouseGridVo, void>({
        path: `/blade-cps/warehouse-grid/insert`,
        method: 'POST',
        body: warehouseGridCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入stationId
     *
     * @tags 库区货格管理
     * @name WarehouseGridListByStationId
     * @summary 库区货格列表
     * @request GET:/blade-cps/warehouse-grid/list
     * @secure
     */
    warehouseGridListByStationId: (
      query?: {
        /** stationId */
        stationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWarehouseGridVo, void>({
        path: `/blade-cps/warehouse-grid/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 库区货格管理
     * @name WarehouseGridPage
     * @summary 库区货格分页
     * @request GET:/blade-cps/warehouse-grid/page
     * @secure
     */
    warehouseGridPage: (
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
      this.request<RIPageWarehouseGridVo, void>({
        path: `/blade-cps/warehouse-grid/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 库区货格管理
     * @name WarehouseGridRemove
     * @summary 库区货格删除
     * @request DELETE:/blade-cps/warehouse-grid/remove
     * @secure
     */
    warehouseGridRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/warehouse-grid/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 库区货格管理
     * @name WarehouseGridRemoveById
     * @summary 库区货格根据id删除
     * @request DELETE:/blade-cps/warehouse-grid/remove/{id}
     * @secure
     */
    warehouseGridRemoveById: (id: string, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/warehouse-grid/remove/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入warehouseGridVO
     *
     * @tags 库区货格管理
     * @name WarehouseGridUpdate
     * @summary 库区货格修改
     * @request PUT:/blade-cps/warehouse-grid/update
     * @secure
     */
    warehouseGridUpdate: (warehouseGridUpdateVO: WarehouseGridUpdateVO, params: RequestParams = {}) =>
      this.request<RWarehouseGridVo, void>({
        path: `/blade-cps/warehouse-grid/update`,
        method: 'PUT',
        body: warehouseGridUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 库位过滤条件
     *
     * @tags 库区库位管理
     * @name WarehouseStationExportStation
     * @summary 导出库位
     * @request POST:/blade-cps/warehouse-station/export-station
     * @secure
     */
    warehouseStationExportStation: (warehouseExportVo: WarehouseExportVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/warehouse-station/export-station`,
        method: 'POST',
        body: warehouseExportVo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 库区库位管理
     * @name WarehouseStationExportTemplate
     * @summary 导出模板
     * @request GET:/blade-cps/warehouse-station/export-template
     * @secure
     */
    warehouseStationExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/warehouse-station/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入库位
     *
     * @tags 库区库位管理
     * @name WarehouseStationDetail
     * @summary 库区库位详情
     * @request GET:/blade-cps/warehouse-station/get/{id}
     * @secure
     */
    warehouseStationDetail: (id: string, params: RequestParams = {}) =>
      this.request<RWarehouseStationVo, void>({
        path: `/blade-cps/warehouse-station/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 库区库位管理
     * @name WarehouseStationGetGridCount
     * @summary 获取库位下的货格数量
     * @request GET:/blade-cps/warehouse-station/grid-count
     * @secure
     */
    warehouseStationGetGridCount: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLong, void>({
        path: `/blade-cps/warehouse-station/grid-count`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入要导入的库位文件
     *
     * @tags 库区库位管理
     * @name WarehouseStationImportStation
     * @summary 导入库位
     * @request POST:/blade-cps/warehouse-station/import-station
     * @secure
     */
    warehouseStationImportStation: (
      data: {
        /**
         * multipartFile
         * @format binary
         */
        multipartFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-cps/warehouse-station/import-station`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入warehouseStationVO
     *
     * @tags 库区库位管理
     * @name WarehouseStationInsert
     * @summary 库区库位新增
     * @request POST:/blade-cps/warehouse-station/insert
     * @secure
     */
    warehouseStationInsert: (warehouseStationVO: WarehouseStationVo, params: RequestParams = {}) =>
      this.request<RWarehouseStationVo, void>({
        path: `/blade-cps/warehouse-station/insert`,
        method: 'POST',
        body: warehouseStationVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 库区库位管理
     * @name WarehouseStationPage
     * @summary 库区库位分页
     * @request GET:/blade-cps/warehouse-station/page
     * @secure
     */
    warehouseStationPage: (
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
        /** areaId */
        areaId: string;
        /** keyWord */
        keyWord?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageWarehouseStationVo, void>({
        path: `/blade-cps/warehouse-station/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 库区库位管理
     * @name WarehouseStationRemoveByIds
     * @summary 库区库位批量删除
     * @request DELETE:/blade-cps/warehouse-station/remove
     * @secure
     */
    warehouseStationRemoveByIds: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/warehouse-station/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入warehouseStationVO
     *
     * @tags 库区库位管理
     * @name WarehouseStationUpdate
     * @summary 库区库位修改
     * @request PUT:/blade-cps/warehouse-station/update
     * @secure
     */
    warehouseStationUpdate: (warehouseStationVO: WarehouseStationVo, params: RequestParams = {}) =>
      this.request<RWarehouseStationVo, void>({
        path: `/blade-cps/warehouse-station/update`,
        method: 'PUT',
        body: warehouseStationVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationDelete
     * @summary 删除工位
     * @request DELETE:/blade-cps/workstation
     * @secure
     */
    workstationDelete: (
      query: {
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
        /** workstationIds */
        workstationIds: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工况参数管理
     * @name WorkstationWcsDeleteByWorkstationIdList
     * @summary 删除工况参数信息
     * @request DELETE:/blade-cps/workstation-wcs
     * @secure
     */
    workstationWcsDeleteByWorkstationIdList: (workstationWcsIdList: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs`,
        method: 'DELETE',
        body: workstationWcsIdList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 获取数据数据标签
     * @name WorkstationWcsUsageUpdate
     * @summary 更新数据标签
     * @request POST:/blade-cps/workstation-wcs-usage
     * @secure
     */
    workstationWcsUsageUpdate: (workstationWcsVO: WorkstationWcsUsageVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-usage`,
        method: 'POST',
        body: workstationWcsVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 插入数据数据标签,数据数据标签的名称不能重复
     *
     * @tags 获取数据数据标签
     * @name WorkstationWcsUsageSave
     * @summary 保存数据标签
     * @request PUT:/blade-cps/workstation-wcs-usage
     * @secure
     */
    workstationWcsUsageSave: (workstationWcsVO: WorkstationWcsUsageVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-usage`,
        method: 'PUT',
        body: workstationWcsVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 获取数据数据标签
     * @name WorkstationWcsUsageRemove
     * @summary 删除数据标签
     * @request DELETE:/blade-cps/workstation-wcs-usage
     * @secure
     */
    workstationWcsUsageRemove: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-wcs-usage`,
        method: 'DELETE',
        body: id,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 获取数据数据标签
     * @name WorkstationWcsUsageList
     * @summary 获取所有数据数据标签数据
     * @request GET:/blade-cps/workstation-wcs-usage/list
     * @secure
     */
    workstationWcsUsageList: (params: RequestParams = {}) =>
      this.request<RListWorkstationWcsUsageVO, void>({
        path: `/blade-cps/workstation-wcs-usage/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 获取数据数据标签
     * @name WorkstationWcsUsageParamsConfig
     * @summary 获取计算方式的参数配置
     * @request GET:/blade-cps/workstation-wcs-usage/params-config/{collectType}
     * @secure
     */
    workstationWcsUsageParamsConfig: (collectType: number, params: RequestParams = {}) =>
      this.request<RListWorkstationDataTypeExecParamVO, void>({
        path: `/blade-cps/workstation-wcs-usage/params-config/${collectType}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 数据数据标签下拉
     *
     * @tags 获取数据数据标签
     * @name WorkstationWcsUsageVisualUsageCode
     * @summary 获取大屏接口参数
     * @request GET:/blade-cps/workstation-wcs-usage/visual-usage-code
     * @secure
     */
    workstationWcsUsageVisualUsageCode: (params: RequestParams = {}) =>
      this.request<RListChartSelect, void>({
        path: `/blade-cps/workstation-wcs-usage/visual-usage-code`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 数据标签策略下拉
     *
     * @tags 获取数据数据标签
     * @name WorkstationWcsUsageVisualUsagePolicy
     * @summary 获取大屏接口参数
     * @request GET:/blade-cps/workstation-wcs-usage/visual-usage-policy
     * @secure
     */
    workstationWcsUsageVisualUsagePolicy: (params: RequestParams = {}) =>
      this.request<RListChartSelect, void>({
        path: `/blade-cps/workstation-wcs-usage/visual-usage-policy`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工况参数管理
     * @name WorkstationWcsBatchSave
     * @summary 批量编辑工位参数信息
     * @request POST:/blade-cps/workstation-wcs/batchSave
     * @secure
     */
    workstationWcsBatchSave: (
      query: {
        /** workstationIdList */
        workstationIdList: string[];
      },
      workstationWcsSaveNewVOList: WorkstationWcsSaveNewVO[],
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationWcsVO, void>({
        path: `/blade-cps/workstation-wcs/batchSave`,
        method: 'POST',
        query: query,
        body: workstationWcsSaveNewVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工况参数管理
     * @name WorkstationWcsGet
     * @summary 根据机器id查询工况参数
     * @request GET:/blade-cps/workstation-wcs/getWcsByMachineId
     * @secure
     */
    workstationWcsGet: (
      query?: {
        /** machineId */
        machineId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationWcsDTO, void>({
        path: `/blade-cps/workstation-wcs/getWcsByMachineId`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工况参数管理
     * @name WorkstationWcsListByWorkstationId
     * @summary 根据工位id查询工况参数
     * @request GET:/blade-cps/workstation-wcs/getWcsByWorkstationId
     * @secure
     */
    workstationWcsListByWorkstationId: (
      query?: {
        /** workstationId */
        workstationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationWcsVO, void>({
        path: `/blade-cps/workstation-wcs/getWcsByWorkstationId`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工况参数管理
     * @name WorkstationWcsIsExists
     * @summary 是否工况参数已存在 工位名称(逗号隔开)-已存在 空-不存在
     * @request POST:/blade-cps/workstation-wcs/isExists
     * @secure
     */
    workstationWcsIsExists: (
      query: {
        /** workstationIdList */
        workstationIdList: string[];
      },
      workstationWcsSaveNewVOList: WorkstationWcsSaveNewVO[],
      params: RequestParams = {},
    ) =>
      this.request<RString, void>({
        path: `/blade-cps/workstation-wcs/isExists`,
        method: 'POST',
        query: query,
        body: workstationWcsSaveNewVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工况参数管理
     * @name WorkstationWcsListWcsSetting
     * @summary 列表查询工况参数设置
     * @request GET:/blade-cps/workstation-wcs/listWcsSetting
     * @secure
     */
    workstationWcsListWcsSetting: (params: RequestParams = {}) =>
      this.request<RListWorkstationWcsVO, void>({
        path: `/blade-cps/workstation-wcs/listWcsSetting`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工况参数管理
     * @name WorkstationWcsSave
     * @summary 新增或更改工况参数信息
     * @request POST:/blade-cps/workstation-wcs/save
     * @secure
     */
    workstationWcsSave: (workstationWcsSaveVOList: WorkstationWcsSaveVO[], params: RequestParams = {}) =>
      this.request<RListWorkstationWcsVO, void>({
        path: `/blade-cps/workstation-wcs/save`,
        method: 'POST',
        body: workstationWcsSaveVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工况参数管理
     * @name WorkstationWcsSaveSetting
     * @summary 新增工位采集模板
     * @request POST:/blade-cps/workstation-wcs/save/setting
     * @secure
     */
    workstationWcsSaveSetting: (workstationWcsSaveVOList: WorkstationWcsSaveVO[], params: RequestParams = {}) =>
      this.request<RListWorkstationWcsVO, void>({
        path: `/blade-cps/workstation-wcs/save/setting`,
        method: 'POST',
        body: workstationWcsSaveVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工况参数管理
     * @name WorkstationWcsUpdate
     * @summary 更新工位采集模板
     * @request PUT:/blade-cps/workstation-wcs/update
     * @secure
     */
    workstationWcsUpdate: (workstationWcsSaveVO: WorkstationWcsSaveVO, params: RequestParams = {}) =>
      this.request<RWorkstationWcsVO, void>({
        path: `/blade-cps/workstation-wcs/update`,
        method: 'PUT',
        body: workstationWcsSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位工作台管理
     * @name WorkstationWorkbenchDeleteWorkbench
     * @summary 删除工位工作台信息
     * @request POST:/blade-cps/workstation-workbench/deleteWorkbench
     * @secure
     */
    workstationWorkbenchDeleteWorkbench: (vo: WorkstationWorkbenchVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-workbench/deleteWorkbench`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位工作台管理
     * @name WorkstationWorkbenchListByGroupId
     * @summary 根据工位组查询工位和工作台集合
     * @request GET:/blade-cps/workstation-workbench/listByGroupId
     * @secure
     */
    workstationWorkbenchListByGroupId: (
      query?: {
        /** groupId */
        groupId?: string;
        /** keyWord */
        keyWord?: string;
        /** settingsId */
        settingsId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationOfWorkbenchVO, void>({
        path: `/blade-cps/workstation-workbench/listByGroupId`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位工作台管理
     * @name WorkstationWorkbenchListWorkbench
     * @summary 遍历工位工作台
     * @request GET:/blade-cps/workstation-workbench/listWorkbench
     * @secure
     */
    workstationWorkbenchListWorkbench: (
      query?: {
        /** workstationId */
        workstationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMachineInformationVO, void>({
        path: `/blade-cps/workstation-workbench/listWorkbench`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位工作台管理
     * @name WorkstationWorkbenchSaveWorkbench
     * @summary 增加工位工作台信息
     * @request POST:/blade-cps/workstation-workbench/saveWorkbench
     * @secure
     */
    workstationWorkbenchSaveWorkbench: (vo: WorkstationWorkbenchVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-workbench/saveWorkbench`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位工作台管理
     * @name WorkstationWorkbenchUpdateWorkbench
     * @summary 修改工位工作台信息
     * @request POST:/blade-cps/workstation-workbench/updateWorkbench
     * @secure
     */
    workstationWorkbenchUpdateWorkbench: (vo: WorkstationWorkbenchVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation-workbench/updateWorkbench`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationListByBeltLine
     * @summary 查询产线下的工位
     * @request POST:/blade-cps/workstation/belt-line
     * @secure
     */
    workstationListByBeltLine: (
      query?: {
        /** groupId */
        groupId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListLmsWorkstationVO, void>({
        path: `/blade-cps/workstation/belt-line`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 机器ID
     *
     * @tags 工位管理
     * @name WorkstationGetWorkstationByMachineId
     * @summary 获取机器绑定的工位
     * @request GET:/blade-cps/workstation/by-machine
     * @secure
     */
    workstationGetWorkstationByMachineId: (
      query: {
        /** 机器ID */
        machineId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationVO, void>({
        path: `/blade-cps/workstation/by-machine`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationChangeCalendarCode
     * @summary 改变工位的生产日历
     * @request PUT:/blade-cps/workstation/changeCalendarCode
     * @deprecated
     * @secure
     */
    workstationChangeCalendarCode: (workstationChangeCalendarVO: WorkstationChangeCalendarVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation/changeCalendarCode`,
        method: 'PUT',
        body: workstationChangeCalendarVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationChangeCollectSwitch
     * @summary 改变采集功能
     * @request PUT:/blade-cps/workstation/changeCollectSwitch
     * @secure
     */
    workstationChangeCollectSwitch: (
      query: {
        /**
         * collectSwitch
         * @format int32
         */
        collectSwitch: number;
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation/changeCollectSwitch`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationChangeWorkstationGroup
     * @summary 改变工位组
     * @request PUT:/blade-cps/workstation/changeWorkstationGroup
     * @secure
     */
    workstationChangeWorkstationGroup: (
      query: {
        /** groupId */
        groupId: string;
        /** workstationIdList */
        workstationIdList: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation/changeWorkstationGroup`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationDeleteGroup
     * @summary 删除工位组
     * @request DELETE:/blade-cps/workstation/deleteGroup
     * @secure
     */
    workstationDeleteGroup: (
      query: {
        /** groupId */
        groupId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-cps/workstation/deleteGroup`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationExportTemplate
     * @summary 导出模板
     * @request GET:/blade-cps/workstation/export-template
     * @secure
     */
    workstationExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/workstation/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationExportWorkstation
     * @summary 导出工位
     * @request POST:/blade-cps/workstation/export-workstation
     * @secure
     */
    workstationExportWorkstation: (
      query: {
        /** groupId */
        groupId: string;
        /** keyWord */
        keyWord: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBladeFile, void>({
        path: `/blade-cps/workstation/export-workstation`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationTreeFmsWorkstation
     * @summary 查询fms工位树
     * @request POST:/blade-cps/workstation/fms/tree
     * @secure
     */
    workstationTreeFmsWorkstation: (fmsWorkstationQueryVO: Fms, params: RequestParams = {}) =>
      this.request<RListFms, void>({
        path: `/blade-cps/workstation/fms/tree`,
        method: 'POST',
        body: fmsWorkstationQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationGet
     * @summary 获取工位信息
     * @request GET:/blade-cps/workstation/get
     * @secure
     */
    workstationGet: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RWorkstationVO, void>({
        path: `/blade-cps/workstation/get`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 获得采集项
     *
     * @tags 工位管理
     * @name WorkstationGetDmpVariables
     * @summary 获得采集项
     * @request GET:/blade-cps/workstation/get-dmp-variables
     * @secure
     */
    workstationGetDmpVariables: (
      query: {
        /** 机器Id */
        machineId?: string;
        /** 工位ID */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDmpVariablesVO, void>({
        path: `/blade-cps/workstation/get-dmp-variables`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationGetWorkMachine
     * @summary 获取机器工位的工位名称和机器短编号
     * @request POST:/blade-cps/workstation/get-work-machine
     * @secure
     */
    workstationGetWorkMachine: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RWorkMachineEasyVO, void>({
        path: `/blade-cps/workstation/get-work-machine`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationGetWorkstationByGroupIds
     * @summary 多个工位组查询工位
     * @request POST:/blade-cps/workstation/get-workstation-by-groupIds
     * @secure
     */
    workstationGetWorkstationByGroupIds: (groupIds: string[], params: RequestParams = {}) =>
      this.request<RListWorkstationVO, void>({
        path: `/blade-cps/workstation/get-workstation-by-groupIds`,
        method: 'POST',
        body: groupIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationGetWorkstationByGroupIdsIncludeSubGroup
     * @summary 多个工位组查询工位(包含子组下的工位)
     * @request POST:/blade-cps/workstation/get-workstation-by-groupIds-include-sub-group
     * @secure
     */
    workstationGetWorkstationByGroupIdsIncludeSubGroup: (groupIds: string[], params: RequestParams = {}) =>
      this.request<RListWorkstationVO, void>({
        path: `/blade-cps/workstation/get-workstation-by-groupIds-include-sub-group`,
        method: 'POST',
        body: groupIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationGetWorkstationPathByWorkstationId
     * @summary 获取工位工位组全路径
     * @request GET:/blade-cps/workstation/get-workstation-path
     * @secure
     */
    workstationGetWorkstationPathByWorkstationId: (
      query?: {
        /** workstationId */
        workstationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/blade-cps/workstation/get-workstation-path`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationGetHmiWorkstationDetail
     * @summary hmi工位基础信息
     * @request POST:/blade-cps/workstation/hmi-device-basics-data
     * @secure
     */
    workstationGetHmiWorkstationDetail: (hmiEmpVO: HmiEmpVO, params: RequestParams = {}) =>
      this.request<RHmiWorkstationVO, void>({
        path: `/blade-cps/workstation/hmi-device-basics-data`,
        method: 'POST',
        body: hmiEmpVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationGetWorkstationStatusInfo
     * @summary hmi工位状态信息
     * @request GET:/blade-cps/workstation/hmi-device-status-data
     * @secure
     */
    workstationGetWorkstationStatusInfo: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RWorkstationStatusInfo, void>({
        path: `/blade-cps/workstation/hmi-device-status-data`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationImportWorkstation
     * @summary 导入工位
     * @request POST:/blade-cps/workstation/import-workstation
     * @secure
     */
    workstationImportWorkstation: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-cps/workstation/import-workstation`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationListDmpVariablesByMachineId
     * @summary 根据机器id获取采集项
     * @request GET:/blade-cps/workstation/listDmpVariablesByMachineId
     * @secure
     */
    workstationListDmpVariablesByMachineId: (
      query: {
        /** machineId */
        machineId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDmpVariablesVO, void>({
        path: `/blade-cps/workstation/listDmpVariablesByMachineId`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationListDmpVariablesByWorkstationId
     * @summary 根据工位id获取采集项
     * @request GET:/blade-cps/workstation/listDmpVariablesByWorkstationId
     * @secure
     */
    workstationListDmpVariablesByWorkstationId: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMachineDmpVariablesVO, void>({
        path: `/blade-cps/workstation/listDmpVariablesByWorkstationId`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationPage
     * @summary 查询工位 分页
     * @request GET:/blade-cps/workstation/page
     * @secure
     */
    workstationPage: (
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
        /** groupId */
        groupId: string;
        /** keyWord */
        keyWord?: string;
        /**
         * status
         * @format int32
         */
        status?: number;
        /**
         * type
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageWorkstationVO, void>({
        path: `/blade-cps/workstation/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationPageH5
     * @summary h5 查询工位 分页
     * @request POST:/blade-cps/workstation/page-h5
     * @secure
     */
    workstationPageH5: (
      workstationPageQueryVO: WorkstationPageQueryVO,
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
      this.request<RIPageWorkstationRealTimeStatusVO, void>({
        path: `/blade-cps/workstation/page-h5`,
        method: 'POST',
        query: query,
        body: workstationPageQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationPcPage
     * @summary Pc查询工位分页-接扩展字段
     * @request POST:/blade-cps/workstation/pc-page
     * @secure
     */
    workstationPcPage: (
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
        /** groupId */
        groupId: string;
      },
      searchVO: WorkstationSearchVO,
      params: RequestParams = {},
    ) =>
      this.request<RIPageWorkstationVO, void>({
        path: `/blade-cps/workstation/pc-page`,
        method: 'POST',
        query: query,
        body: searchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 根据工位组Id获取工位的实时状态
     *
     * @tags 工位管理
     * @name WorkstationGetRealTimeStatus
     * @summary 根据工位组Id获取工位的实时状态
     * @request POST:/blade-cps/workstation/real-time-status
     * @secure
     */
    workstationGetRealTimeStatus: (
      dto: WorkstationRealTimeStatusDTO,
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
      this.request<RIPageWorkstationRealTimeStatusVO, void>({
        path: `/blade-cps/workstation/real-time-status`,
        method: 'POST',
        query: query,
        body: dto,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位管理
     * @name WorkstationSubmit
     * @summary 新增或更改工位信息
     * @request POST:/blade-cps/workstation/submit
     * @secure
     */
    workstationSubmit: (workstationSubmitVO: WorkstationSubmitVO, params: RequestParams = {}) =>
      this.request<RWorkstationVO, void>({
        path: `/blade-cps/workstation/submit`,
        method: 'POST',
        body: workstationSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
