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

/** BladeDncFile */
export interface BladeDncFile {
  extension?: string;
  fileMd5?: string;
  link?: string;
  name?: string;
  originalName?: string;
  size?: string;
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

/** CommonAssociativeFileResultVO */
export interface CommonAssociativeFileResultVO {
  /**
   * 业务类型(文件位置) 1:我的文档 2:共享文档 3:工位文件 4:工艺库 5:工厂文件
   * @format int32
   */
  businessType?: number;
  /** mimeType类型 */
  contentType?: string;
  /** 扩展名 */
  extension?: string;
  /** 文件节点Id */
  id?: string;
  /** 文件(文件夹)名称 */
  name?: string;
}

/**
 * CommonDataNodeTreeVO
 * 节点树VO
 */
export interface CommonDataNodeTreeVO {
  children?: CommonDataNodeTreeVO[];
  /** 后缀 */
  extension?: string;
  /**
   * 文件标识：1-程序，2-文件
   * @format int32
   */
  fileTag?: number;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /**
   * 节点类型：0-文件，1-文件夹
   * @format int32
   */
  nodeType?: number;
  /** 父节点 */
  parentId?: string;
  /** 文件大小 */
  size?: string;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 修改人 */
  updateUserName?: string;
}

/**
 * CommonDataNodeVO
 * 节点VO
 */
export interface CommonDataNodeVO {
  /** 审批单号 */
  approvalCode?: string;
  /**
   * 审批状态
   * @format int32
   */
  approvalStatus?: number;
  /** 扩展名 */
  extension?: string;
  /**
   * 文件标识：1-程序，2-文件
   * @format int32
   */
  fileTag?: number;
  /** 文件版本历史VO */
  fileVersionVO?: CommonFileVersionVO;
  /**
   * 文件夹标识 0：普通文件夹 1：工艺目录文件夹  2：工艺包文件夹  3：FTP文件夹
   * @format int32
   */
  folderTag?: number;
  /** 是否有子文件夹 */
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 文件名 */
  name?: string;
  /**
   * 节点类型：0-文件，1-目录
   * @format int32
   */
  nodeType?: number;
  /** 父目录ID */
  parentId?: string;
  /** 流程id */
  processInstanceId?: string;
  /** 编程人员 */
  programUser?: string;
  /** 文件大小 */
  size?: string;
  /**
   * 文件状态
   * @format int32
   */
  status?: number;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 修改人 */
  updateUser?: string;
  /** 修改人 */
  updateUserName?: string;
  /** 版本 */
  version?: string;
}

/**
 * CommonDataNodeVO_1
 * 节点VO
 */
export interface CommonDataNodeVO1 {
  /** 审批单号 */
  approvalCode?: string;
  /**
   * 审批状态
   * @format int32
   */
  approvalStatus?: number;
  /** 扩展名 */
  extension?: string;
  /**
   * 文件标识：1-程序，2-文件
   * @format int32
   */
  fileTag?: number;
  /**
   * 文件夹标识 0：普通文件夹 1：工艺目录文件夹  2：工艺包文件夹  3：FTP文件夹
   * @format int32
   */
  folderTag?: number;
  /** 是否有子文件夹 */
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 文件名 */
  name?: string;
  /**
   * 节点类型：0-文件，1-目录
   * @format int32
   */
  nodeType?: number;
  /** 父目录ID */
  parentId?: string;
  /** 流程id */
  processInstanceId?: string;
  /** 文件大小 */
  size?: string;
  /**
   * 文件状态
   * @format int32
   */
  status?: number;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 修改人 */
  updateUser?: string;
  /** 修改人 */
  updateUserName?: string;
  /** 版本 */
  version?: string;
}

/**
 * CommonDataNodeVO_2
 * 节点VO
 */
export interface CommonDataNodeVO2 {
  /** 审批单号 */
  approvalCode?: string;
  /**
   * 审批状态
   * @format int32
   */
  approvalStatus?: number;
  /** 扩展名 */
  extension?: string;
  /**
   * 文件标识：1-程序，2-文件
   * @format int32
   */
  fileTag?: number;
  /**
   * 文件夹标识 0：普通文件夹 1：工艺目录文件夹  2：工艺包文件夹  3：FTP文件夹
   * @format int32
   */
  folderTag?: number;
  /** 是否有子文件夹 */
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 文件名 */
  name?: string;
  /**
   * 节点类型：0-文件，1-目录
   * @format int32
   */
  nodeType?: number;
  /** 父目录ID */
  parentId?: string;
  /** 路径 */
  path?: string;
  /** 流程id */
  processInstanceId?: string;
  /** 文件大小 */
  size?: string;
  /**
   * 文件状态
   * @format int32
   */
  status?: number;
  /**
   * 程序传输方式：0-关闭，1-在线写入，2-ftp，3-串口传输
   * @format int32
   */
  transmissionMethod?: number;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 修改人 */
  updateUser?: string;
  /** 修改人 */
  updateUserName?: string;
  /** 版本 */
  version?: string;
  /** 工位ID */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/**
 * CommonFileCreateVO
 * 创建文件VO
 */
export interface CommonFileCreateVO {
  /** 扩展字段 */
  extendField?: string;
  /**
   * 文件后缀
   * @minLength 0
   * @maxLength 12
   */
  extension: string;
  /**
   * 文件md5
   * @minLength 0
   * @maxLength 50
   */
  fileMd5: string;
  /**
   * 文件标识, 1-程序, 2-文件
   * @format int32
   */
  fileTag?: number;
  /**
   * 文件地址
   * @minLength 0
   * @maxLength 500
   */
  link: string;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 500
   */
  name: string;
  /**
   * 文件原始名称
   * @minLength 0
   * @maxLength 500
   */
  originalName: string;
  /** 父目录ID */
  parentId: string;
  /** 文件大小 */
  size: string;
}

/**
 * CommonFilePageQueryVO
 * 分页查询VO
 */
export interface CommonFilePageQueryVO {
  /** 生产线 */
  beltlineName?: string;
  /**
   * 文件标识：1-程序，2-文件,工艺文件类型查询
   * @format int32
   */
  fileTag?: number;
  /** 关键词 */
  keyword?: string;
  /** 父节点ID */
  parentId?: string;
  /** 工序 */
  processId?: string;
  /** 工序名称 */
  processName?: string;
  /** 产品ID */
  productId?: string;
  /** 产品名称 */
  productName?: string;
  /** 根据工位ID查工艺文件分页 */
  workstationId?: string;
}

/**
 * CommonFilePageQueryVO_1
 * 分页查询VO
 */
export interface CommonFilePageQueryVO1 {
  /**
   * 文件标识：1-程序，2-文件,工艺文件类型查询
   * @format int32
   */
  fileTag?: number;
  /** 关键词 */
  keyword?: string;
  /** 父节点ID */
  parentId?: string;
}

/**
 * CommonFileSearchResultVO
 * 文件查询全局搜索结果
 */
export interface CommonFileSearchResultVO {
  /**
   * 业务类型(文件位置) 1:我的文档 2:共享文档 3:工位文件 4:工艺库 5:工厂文件
   * @format int32
   */
  businessType?: number;
  /** 扩展名 */
  extension?: string;
  /**
   * 文件分类 1:程序   2:文件
   * @format int32
   */
  fileTag?: number;
  /**
   * 文件夹标识 0：普通文件夹 1：工艺目录文件夹  2：工艺包文件夹  3：FTP文件夹
   * @format int32
   */
  folderTag?: number;
  /** 完整路径 */
  fullPath?: string;
  /** id */
  id?: string;
  /** 文件(文件夹)名称 */
  name?: string;
  /**
   * 文件节点类型 0: 文件 1: 文件夹
   * @format int32
   */
  nodeType?: number;
  /** 文件父节点 */
  parentId?: string;
  /** 节点数据大小,单位KB */
  size?: string;
  /**
   * 修改日期
   * @format date-time
   */
  updateTime?: string;
  /** 修改人 */
  updateUserName?: string;
  /** 文件版本 */
  version?: string;
  /** 工位Id */
  workstationId?: string;
}

/**
 * CommonFileSearchVO
 * 文件检索查询VO
 */
export interface CommonFileSearchVO {
  /** 业务类型(文件位置) 不写全部 1:我的文档 2:共享文档 3:工位文件 4:工艺库 5:工厂文件  */
  businessTypes?: number[];
  /**
   * 当前页
   * @format int32
   */
  current?: number;
  /**
   * 修改结束日期
   * @format date-time
   */
  endDate?: string;
  /** 文件拓展名 */
  extension?: string;
  /** 文件(文件夹)名称 */
  fileName?: string;
  /**
   * 文件类型 1:程序  2:文件
   * @format int32
   */
  fileTag?: number;
  /**
   * 每页的数量
   * @format int32
   */
  size?: number;
  /**
   * 修改开始日期
   * @format date-time
   */
  startDate?: string;
  /** 修改人Id */
  updateUser?: string;
}

/** CommonFileVO */
export interface CommonFileVO {
  /** 头像 */
  avatar?: string;
  /** 文件类型 */
  extension?: string;
  /**
   * 文件标识 1: 程序 2: 文件
   * @format int32
   */
  fileTag?: number;
  id?: string;
  /** 链接 */
  link?: string;
  /** 文件名称 */
  name?: string;
  /** 节点id */
  nodeId?: string;
  /** 大小 */
  size?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** 更新人名称 */
  userName?: string;
}

/**
 * CommonFileVersionVO
 * 文件版本历史VO
 */
export interface CommonFileVersionVO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUserName?: string;
  /** 当前版本的标签 */
  currentTag?: boolean;
  /** 文件扩展名 */
  extension?: string;
  /** 文件md5 */
  fileMd5?: string;
  /** 主键 */
  id?: string;
  /** 文件地址 */
  link?: string;
  /** 文件名称 */
  name?: string;
  /** 原始名称 */
  originalName?: string;
  /** 文件大小 */
  size?: string;
  /**
   * 审批状态
   * @format int32
   */
  status?: number;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 修改人 */
  updateUserName?: string;
  /** 文件版本 */
  version?: string;
}

/**
 * CommonFolderCreateVO
 * 创建文件夹VO
 */
export interface CommonFolderCreateVO {
  /**
   * 文件夹名称
   * @minLength 0
   * @maxLength 500
   */
  name: string;
  /** 父目录ID */
  parentId: string;
}

/**
 * CommonFolderDataNodeTreeVO
 * 通用文件树形结构VO
 */
export interface CommonFolderDataNodeTreeVO {
  /**
   * 业务类型
   * @format int32
   */
  businessType?: number;
  children?: CommonFolderDataNodeTreeVO[];
  /**
   * 文件夹tag 1：工艺目录文件夹  2：工艺包文件夹
   * @format int32
   */
  folderTag?: number;
  hasChildren?: boolean;
  /** 是否有权限 */
  hasPermission?: boolean;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /**
   * 节点类型：0-文件，1-文件夹
   * @format int32
   */
  nodeType?: number;
  /** 父节点 */
  parentId?: string;
  /**
   * 权限类型：1-仅查看，2-可编辑，3-可管理
   * @format int32
   */
  permissionType?: number;
}

/**
 * CommonOperationResultVO
 * 文件操作结果VO
 */
export interface CommonOperationResultVO {
  /**
   * 失败类型：1-名称重复，2-业务处理异常
   * @format int32
   */
  failureType?: number;
  /** 返回消息 */
  msg?: string;
  /** 是否成功 */
  success?: boolean;
}

/**
 * CommonStartApprovalVO
 * 发起审批VO
 */
export interface CommonStartApprovalVO {
  /** 审核单号 */
  code?: string;
  /** 所选择得文件节点 */
  nodeIds?: string[];
  /** 备注 */
  remark?: string;
  /** 标题 */
  title?: string;
}

/**
 * CopyDataNodeVO
 * 节点复制VO
 */
export interface CopyDataNodeVO {
  /**
   * 重复处理策略：null-重名提示 1-覆盖，2-创建副本
   * @format int32
   */
  repeatHandleStrategy?: number;
  /** 数据节点 */
  sourceDataNodes?: string[];
  /** 目标节点 */
  targetDataNode?: string;
}

/** CraftFileQueryVO */
export interface CraftFileQueryVO {
  /**
   * 节点业务类型  前端不用传
   * @format int32
   */
  businessType?: number;
  /**
   * 文件标识：1-程序，2-文件,工艺文件类型查询
   * @format int32
   */
  fileTag?: number;
  /** 关键词 */
  keyword?: string;
  /** 父节点ID */
  parentId?: string;
  /** 编程人员 */
  programUserId?: string;
  /** 用户id  前端不用传 */
  userId?: string;
}

/** CraftFolderNodePageVO */
export interface CraftFolderNodePageVO {
  /**
   * 审批状态
   * @format int32
   */
  approvalStatus?: number;
  /** 扩展名 */
  extension?: string;
  /** 扩展信息 */
  extraDTO?: DncCraftFileExtraDTO;
  /**
   * 文件夹标识, 1.工艺目录文件夹 2工艺包文件夹
   * @format int32
   */
  folderTag?: number;
  /** 主键 */
  id?: string;
  /** 文件名 */
  name?: string;
  /** 父目录ID */
  parentId?: string;
  /** 文件大小 */
  size?: string;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 修改人 */
  updateUserName?: string;
}

/** CraftPackFolderCreateVO */
export interface CraftPackFolderCreateVO {
  /** 生产线 */
  beltlineName?: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  code?: string;
  /** 工艺路线ID */
  craftId?: string;
  /** 工艺包ID */
  id?: string;
  /**
   * 工艺包名称
   * @minLength 0
   * @maxLength 500
   */
  name: string;
  /** 父目录ID */
  parentId: string;
  /** 版本ID */
  versionId?: string;
  /** 版本工序ID */
  versionProcessId?: string;
  /** 工位ID */
  workstationIds?: string[];
}

/**
 * CraftTaskStatusStatisticsDTO
 * 工艺任务任务状态得统计分布DTO
 */
export interface CraftTaskStatusStatisticsDTO {
  /**
   * 工艺任务数量
   * @format int32
   */
  count?: number;
  /**
   * 工艺任务状态 1:进行中 2:已驳回 3:已撤回 4:审批中 5:审批通过 6:审批拒绝 7:已关闭
   * @format int32
   */
  status?: number;
}

/**
 * DataNodePermissionCreateVO
 * 数据节点权限创建视图模型
 */
export interface DataNodePermissionCreateVO {
  /** 节点id */
  nodeId?: string;
  /**
   * 权限类型：1-仅查看，2-可编辑，3-可管理
   * @format int32
   */
  permissionType?: number;
  /** 关联的ID：人员ID，部门ID */
  relatedIds?: string[];
}

/**
 * DataNodePermissionUpdateVO
 * 数据节点权限更新视图模型
 */
export interface DataNodePermissionUpdateVO {
  /** 主键 */
  ids?: string[];
  /**
   * 权限类型：1-仅查看，2-可编辑，3-可管理
   * @format int32
   */
  permissionType?: number;
}

/**
 * DataNodePermissionVO
 * 数据节点权限视图模型
 */
export interface DataNodePermissionVO {
  /** 主键 */
  id?: string;
  /**
   * 是否创建者：0-否，1-是
   * @format int32
   */
  isCreator?: number;
  /**
   * 父权限类型：1-仅查看，2-可编辑，3-可管理
   * @format int32
   */
  parentPermissionType?: number;
  /**
   * 权限类型：1-仅查看，2-可编辑，3-可管理
   * @format int32
   */
  permissionType?: number;
  /** 关联的ID：人员ID，部门ID */
  relatedId?: string;
  /** 关联的名称：人员名称，部门名称 */
  relatedName?: string;
  /**
   * 关联的类型：1-人员，2-部门
   * @format int32
   */
  relatedType?: number;
}

/**
 * DncAuditLogQueryVO
 * 审计日志查询视图
 */
export interface DncAuditLogQueryVO {
  /** 业务类型：1-我的文档，2-共享文档，3-工位文件，4-工艺文件，5-工厂文件 */
  businessTypes?: number[];
  /**
   * 操作结束时间
   * @format date-time
   */
  endTime?: string;
  /** 关键词 */
  keyword?: string;
  /**
   * 操作类型：1-创建，2-复制，3-移动，4-删除，5-编辑，6-权限
   * @format int32
   */
  operationType?: number;
  /** 操作人 */
  operationUserId?: string;
  /**
   * 操作开始时间
   * @format date-time
   */
  startTime?: string;
}

/**
 * DncAuditLogVO
 * 审计日志视图
 */
export interface DncAuditLogVO {
  /** 内容 */
  content?: string;
  /**
   * 操作时间
   * @format date-time
   */
  createTime?: string;
  /** 操作人 */
  createUserName?: string;
  /** 扩展名 */
  extension?: string;
  /** 文件Id */
  fileId?: string;
  /**
   * 文件夹标识 0：普通文件夹 1：工艺目录文件夹  2：工艺包文件夹  3：FTP文件夹
   * @format int32
   */
  folderTag?: number;
  /** 主键 */
  id?: string;
  /** 文件名 */
  name?: string;
  /**
   * 节点类型：0-文件，1-目录
   * @format int32
   */
  nodeType?: number;
  /**
   * 操作类型：1-创建，2-复制，3-移动，4-删除，5-编辑
   * @format int32
   */
  operationType?: number;
  /** 文件大小 */
  size?: string;
  /** 源路径 */
  sourcePath?: string;
  /** 目标路径 */
  targetPath?: string;
  /** 版本 */
  version?: string;
}

/** DncCraftFileExtraDTO */
export interface DncCraftFileExtraDTO {
  /** 生产线 */
  beltlineName?: string;
  /** 工艺包编号 */
  code?: string;
  craftId?: string;
  /** 工艺名称 */
  craftName?: string;
  craftVersionId?: string;
  craftVersionProcessId?: string;
  nodeId?: string;
  /** 工序名称 */
  processName?: string;
  /** 产品名称 */
  productName?: string;
  /** 版本名称 */
  versionName?: string;
  /** 工位编号 */
  workstationCodes?: string[];
  workstationId?: string;
  /** 工位名称 */
  workstationNames?: string[];
}

/**
 * DncCraftLogQueryVO
 * 工艺日志查询视图
 */
export interface DncCraftLogQueryVO {
  /**
   * 操作结束时间
   * @format date-time
   */
  endTime?: string;
  /** 关键词 */
  keyword?: string;
  /**
   * 操作类型：1-创建，2-复制，3-移动，4-删除，5-编辑
   * @format int32
   */
  operationType?: number;
  /** 操作人 */
  operationUserId?: string;
  /**
   * 操作开始时间
   * @format date-time
   */
  startTime?: string;
  /** 工艺目录 */
  targetPathId?: string;
}

/**
 * DncCraftLogVO
 * 工艺日志视图
 */
export interface DncCraftLogVO {
  /** 内容 */
  content?: string;
  /**
   * 操作时间
   * @format date-time
   */
  createTime?: string;
  /** 操作人 */
  createUserName?: string;
  /** 扩展名 */
  extension?: string;
  /** 文件Id */
  fileId?: string;
  /**
   * 文件分类 1:程序   2:文件
   * @format int32
   */
  fileTag?: number;
  /**
   * 文件夹标识 0：普通文件夹 1：工艺目录文件夹  2：工艺包文件夹  3：FTP文件夹
   * @format int32
   */
  folderTag?: number;
  /** 主键 */
  id?: string;
  /** 文件名 */
  name?: string;
  /**
   * 操作类型：1-创建，2-删除
   * @format int32
   */
  operationType?: number;
  /** 文件大小 */
  size?: string;
  /** 源路径 */
  sourcePath?: string;
  /** 目标路径 */
  targetPath?: string;
  /** 版本 */
  version?: string;
}

/**
 * DncCraftTaskCreateVO
 * 创建工艺任务VO
 */
export interface DncCraftTaskCreateVO {
  /** 生产线 */
  beltlineName?: string;
  /** 工艺任务编号 */
  code?: string;
  /** 工艺包名称 */
  craftBagName?: string;
  /** 工艺路线ID */
  craftId?: string;
  /** 处理人 */
  handler?: string;
  /** 产品工艺工序Id */
  productCraftProcessId?: string;
  /** 目标路径 */
  targetNodeId?: string;
  title?: string;
  /**
   * 紧急程度 1: 低 2： 中 3：高
   * @format int32
   */
  urgencyLevel?: number;
  /** 版本ID */
  versionId?: string;
  /** 关联工位 */
  workstationId?: string;
}

/**
 * DncCraftTaskDetailVO
 * 工艺任务详情
 */
export interface DncCraftTaskDetailVO {
  /** 生产线 */
  beltlineName?: string;
  /** 任务编号 */
  code?: string;
  /** 工艺包名称 */
  craftBagName?: string;
  /** 工艺路线ID */
  craftId?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 创建人名称 */
  createUserName?: string;
  /** 文件上传记录 */
  fileOverviewList?: DncCraftTaskFileDTO[];
  /** 处理人 */
  handler?: string;
  /** 任务Id */
  id?: string;
  /** 审批流程实例Id */
  processInstanceId?: string;
  /** 产品工艺工序Id */
  productCraftProcessId?: string;
  /** 产品工艺路径 */
  productCraftProgressPath?: string;
  /**
   * 工艺任务状态 1:进行中 2:已驳回 3:已撤回 4:审批中 5:审批通过 6:审批拒绝 7:已关闭
   * @format int32
   */
  status?: number;
  /** 任务状态消息,用于描述生成不同任务状态得原因 */
  statusMessage?: string;
  /** 目标路径 */
  targetNodeId?: string;
  /** 目标路径 */
  targetPath?: string;
  /** 任务标题 */
  title?: string;
  /**
   * 紧急程度 1: 低 2： 中 3：高
   * @format int32
   */
  urgencyLevel?: number;
  /** 工艺路线版本ID */
  versionId?: string;
  /** 关联工位 */
  workstationId?: string;
  /** 关联工位 */
  workstationPath?: string;
}

/**
 * DncCraftTaskFileCommentCreateVO
 * 工艺任务文件批注创建VO
 */
export interface DncCraftTaskFileCommentCreateVO {
  /** 批注内容 */
  comment?: string;
  /**
   * 批注所在行数
   * @format int32
   */
  index?: number;
  /** 工艺任务文件id */
  taskFileId?: string;
}

/** DncCraftTaskFileCommentVO */
export interface DncCraftTaskFileCommentVO {
  /** 头像 */
  avatar?: string;
  /** 批注内容 */
  comment?: string;
  /** 批注Id */
  id?: string;
  /**
   * 批注所在行数
   * @format int32
   */
  index?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  userName?: string;
}

/** DncCraftTaskFileCreateDTO */
export interface DncCraftTaskFileCreateDTO {
  /** 文件拓展名 */
  extension?: string;
  /** 文件Md5 */
  fileMd5?: string;
  /**
   * 文件标识 1: 程序 2: 文件
   * @format int32
   */
  fileTag?: number;
  /** 文件地址 */
  link?: string;
  /** 文件名称 */
  name?: string;
  /** 文件原始名称 */
  originalName?: string;
  /** 大小 */
  size?: string;
}

/**
 * DncCraftTaskFileDTO
 * 工艺任务文件简要信息DTO
 */
export interface DncCraftTaskFileDTO {
  /**
   * 文件标识 1: 程序 2: 文件
   * @format int32
   */
  fileTag?: number;
  /** 文件Id */
  id?: string;
  /** 链接 */
  link?: string;
  /** 文件名称 */
  name?: string;
  /** 文件原始名称 */
  originalName?: string;
  /** 文件大小 */
  size?: string;
}

/**
 * DncCraftTaskFileDetailVO
 * 工艺任务文件明细
 */
export interface DncCraftTaskFileDetailVO {
  /** 文件拓展名 */
  extension?: string;
  /** 文件批注列表 */
  fileCommentList?: DncCraftTaskFileCommentVO[];
  /** 文件Md5 */
  fileMd5?: string;
  /**
   * 文件标识 1: 程序 2: 文件
   * @format int32
   */
  fileTag?: number;
  /** 文件Id */
  id?: string;
  /** 文件地址 */
  link?: string;
  /** 文件名称 */
  name?: string;
  /** 文件原始名称 */
  originalName?: string;
  /** 大小 */
  size?: string;
  /** @format date-time */
  updateTime?: string;
  updateUser?: string;
  userName?: string;
}

/**
 * DncCraftTaskFileSaveVO
 * 工艺任务文件保存
 */
export interface DncCraftTaskFileSaveVO {
  /** 系统内部文件节点Id列表(添加文件选择) */
  dncNodeIdList?: DncCraftTaskSystemFileCreateVO[];
  /** 本地上传文件列表(本地上传) */
  ossFileList?: DncCraftTaskFileCreateDTO[];
  /** 工艺任务Id */
  taskId?: string;
}

/**
 * DncCraftTaskSearchVO
 * 工艺任务检索VO
 */
export interface DncCraftTaskSearchVO {
  /**
   * 工艺任务分类 1: 当前任务 2: 待审批 3:审批完成 4:总览 null:不进行分类过滤
   * @format int32
   */
  catalog?: number;
  /**
   * 创建结束时间
   * @format date-time
   */
  createEndDate?: string;
  /**
   * 创建开始时间
   * @format date-time
   */
  createStartDate?: string;
  /** 创建人 */
  createUser?: string;
  /**
   * 处理结束时间
   * @format date-time
   */
  handleEndDate?: string;
  /**
   * 处理开始时间
   * @format date-time
   */
  handleStartDate?: string;
  /** 处理人 */
  handler?: string;
  /** 关键字 */
  keyword?: string;
  /** 任务状态 */
  status?: number[];
  /**
   * 紧急程度 1: 高 2: 中 3:低  null:不进行紧急程度过滤
   * @format int32
   */
  urgencyLevel?: number;
}

/**
 * DncCraftTaskStatisticsVO
 * 工艺任务统计
 */
export interface DncCraftTaskStatisticsVO {
  /**
   * 工艺任务分类 1: 当前任务 2: 待审批 3:审批完成 4:总览
   * @format int32
   */
  catalog?: number;
  /** 分类下的任务状态分布 */
  statusDistribution?: CraftTaskStatusStatisticsDTO[];
  /**
   * 任务总数
   * @format int32
   */
  totalCount?: number;
}

/**
 * DncCraftTaskSystemFileCreateVO
 * 工艺任务系统文件创建dto
 */
export interface DncCraftTaskSystemFileCreateVO {
  /**
   * 文件标识 1: 程序 2: 文件
   * @format int32
   */
  fileTag?: number;
  /** 工艺任务Id */
  nodeId?: string;
}

/**
 * DncCraftTaskVO
 * 工艺任务VO
 */
export interface DncCraftTaskVO {
  /** 审批编号 */
  approveNumber?: string;
  /** 生产线 */
  beltlineName?: string;
  /** 任务编号 */
  code?: string;
  /** 工艺包名称 */
  craftBagName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 创建人 */
  createUserName?: string;
  /**
   * 处理时间
   * @format date-time
   */
  handleTime?: string;
  /** 处理人ID */
  handler?: string;
  /** 处理人名称 */
  handlerName?: string;
  /** 任务Id */
  id?: string;
  /**
   * 工艺任务状态 1:进行中 2:已驳回 3:已撤回 4:审批中 5:审批通过 6:审批拒绝 7:已关闭
   * @format int32
   */
  status?: number;
  /** 目标路径 */
  targetPath?: string;
  /** 任务标题 */
  title?: string;
  /**
   * 紧急程度 1: 低 2： 中 3：高
   * @format int32
   */
  urgencyLevel?: number;
}

/**
 * DncFolderSettingsBriefVO
 * 文件目录设置详情视图
 */
export interface DncFolderSettingsBriefVO {
  /** 业务设定列表 */
  businessSettingsList?: DncFolderSettingsBusinessVO[];
  /** 通用设定 */
  commonSettings?: DncFolderSettingsCommonVO;
}

/**
 * DncFolderSettingsBusinessContentVO
 * 文件目录业务设置内容视图
 */
export interface DncFolderSettingsBusinessContentVO {
  /** 拼接内容：customHierarchy-自定义层级，customLength-自定义长度，customContent-自定义内容 -1表示最后一层或者全部路径 */
  splicingContent?: NameValueInt;
  /**
   * 拼接来源：1-目录，2-属性
   * @format int32
   */
  splicingSource?: number;
}

/**
 * DncFolderSettingsBusinessVO
 * 文件目录业务设置视图
 */
export interface DncFolderSettingsBusinessVO {
  /**
   * 业务类型 1:我的文档 2:共享文档 4:工艺库
   * @format int32
   */
  businessType?: number;
  /** 内容 */
  content?: DncFolderSettingsBusinessContentVO;
  /** 是否启用 */
  enable?: boolean;
}

/**
 * DncFolderSettingsCommonVO
 * 文件目录通用设置视图
 */
export interface DncFolderSettingsCommonVO {
  /**
   * 拼接方式：1-拼接在文件名称前，2-拼接在文件名称后
   * @format int32
   */
  splicingMode?: number;
  /** 拼接符号 */
  splicingSymbol?: string;
}

/**
 * DncFolderSettingsUpdateVO
 * 文件目录设置编辑视图
 */
export interface DncFolderSettingsUpdateVO {
  /** 业务设定列表 */
  businessSettingsList?: DncFolderSettingsBusinessVO[];
  /** 通用设定 */
  commonSettings?: DncFolderSettingsCommonVO;
}

/** DncFtpBatchWorkstationAddVO */
export interface DncFtpBatchWorkstationAddVO {
  /** 目录名称 */
  ftpName: string;
  /** 关联工位id */
  workstationIdList?: string[];
}

/** DncFtpBatchWorkstationUpdateVO */
export interface DncFtpBatchWorkstationUpdateVO {
  /** 目录id */
  ftpId?: string;
  /** 目录名称 */
  ftpName?: string;
  /** 关联工位id */
  workstationIdList?: string[];
}

/** DncFtpWorkstationInfoVO */
export interface DncFtpWorkstationInfoVO {
  /** ftp目录Id */
  ftpId?: string;
  /** ftp目录名称 */
  ftpName?: string;
  /** 工位信息 */
  workstationInfoVOList?: WorkstationInfoVO[];
}

/** DncFtpWorkstationQueryVO */
export interface DncFtpWorkstationQueryVO {
  /** ftp目录名称 */
  ftpName?: string;
  /** 工位id */
  workstationIdList?: string[];
}

/**
 * DncTransferLogQueryVO
 * 传输日志查询视图
 */
export interface DncTransferLogQueryVO {
  /**
   * 操作结束时间
   * @format date-time
   */
  endTime?: string;
  /** 关键词 */
  keyword?: string;
  /**
   * 操作类型：1-FTP下发，2-FTP回传，3-CNC下发
   * @format int32
   */
  operationType?: number;
  /** 操作人 */
  operationUserId?: string;
  /**
   * 操作开始时间
   * @format date-time
   */
  startTime?: string;
  /** 传输工位 */
  workstationId?: string;
}

/**
 * DncTransferLogVO
 * 传输日志视图
 */
export interface DncTransferLogVO {
  /**
   * 操作时间
   * @format date-time
   */
  createTime?: string;
  /** 操作人 */
  createUserName?: string;
  /** 扩展名 */
  extension?: string;
  /** 文件Id */
  fileId?: string;
  /**
   * 文件分类 1:程序   2:文件
   * @format int32
   */
  fileTag?: number;
  /**
   * 文件夹标识 0：普通文件夹 1：工艺目录文件夹  2：工艺包文件夹  3：FTP文件夹
   * @format int32
   */
  folderTag?: number;
  /** 主键 */
  id?: string;
  /** 文件名 */
  name?: string;
  /**
   * 操作结果：1-成功，2-失败
   * @format int32
   */
  operationResult?: number;
  /**
   * 操作类型：1-FTP下发，2-FTP回传，3-CNC下发
   * @format int32
   */
  operationType?: number;
  /** 路径 */
  path?: string;
  /** 原因 */
  reason?: string;
  /** 文件大小 */
  size?: string;
  /** 版本 */
  version?: string;
  /** 传输工位 */
  workstationName?: string;
}

/** DocumentDetailVO */
export interface DocumentDetailVO {
  /** 审批单号 */
  code?: string;
  /** 文件 */
  commonFileVOList?: CommonFileVO[];
  /** 名称 */
  name?: string;
  /** 位置 */
  path?: string;
  /** 备注 */
  remark?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /** 标题 */
  title?: string;
}

/**
 * FactoryFileCreateVO
 * 工厂文件创建视图
 */
export interface FactoryFileCreateVO {
  /** 扩展字段 */
  extendField?: string;
  /**
   * 文件后缀
   * @minLength 0
   * @maxLength 12
   */
  extension?: string;
  /**
   * 文件md5
   * @minLength 0
   * @maxLength 50
   */
  fileMd5: string;
  /**
   * 文件地址
   * @minLength 0
   * @maxLength 500
   */
  link: string;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 500
   */
  name: string;
  /**
   * 文件原始名称
   * @minLength 0
   * @maxLength 500
   */
  originalName: string;
  /** 文件大小 */
  size: string;
}

/** FtpDirectoryDTO */
export interface FtpDirectoryDTO {
  /** 路径下的资源:文件、文件夹 */
  list?: FtpFileInfoVO[];
  /** 路径 */
  path?: string;
}

/** FtpFileInfoVO */
export interface FtpFileInfoVO {
  canWrite?: boolean;
  /** @format date-time */
  creationTime?: string;
  hash?: string;
  id?: string;
  isDirectory?: boolean;
  name?: string;
  objectKey?: string;
  owner?: string;
  size?: string;
  /** @format date-time */
  updateTime?: string;
}

/**
 * MoveDataNodeVO
 * 移动节点VO
 */
export interface MoveDataNodeVO {
  /**
   * 重复处理策略：null-重名提示，1-覆盖，2-创建副本
   * @format int32
   */
  repeatHandleStrategy?: number;
  /** 数据节点 */
  sourceDataNodes?: string[];
  /** 目标节点 */
  targetDataNode?: string;
}

/** MyDocumentEditVO */
export interface MyDocumentEditVO {
  /** 当前节点id */
  currentNodeId?: string;
  /**
   * 文件后缀
   * @minLength 0
   * @maxLength 12
   */
  extension: string;
  /**
   * 文件md5
   * @minLength 0
   * @maxLength 50
   */
  fileMd5: string;
  /**
   * 文件地址
   * @minLength 0
   * @maxLength 500
   */
  link: string;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 500
   */
  name: string;
  /**
   * 文件原始名称
   * @minLength 0
   * @maxLength 500
   */
  originalName: string;
  /** 文件大小 */
  size: string;
}

/** MyDocumentSameNameVO */
export interface MyDocumentSameNameVO {
  /** 文件名称 */
  fileName?: string;
  /** 左侧节点id */
  parentId?: string;
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
 * RenameDataNodeVO
 * 重命名节点VO
 */
export interface RenameDataNodeVO {
  /** 节点id */
  id?: string;
  /** 节点名称 */
  name?: string;
}

/**
 * SharedDataNodeVO
 * 共享节点VO
 */
export interface SharedDataNodeVO {
  /** 审批单号 */
  approvalCode?: string;
  /**
   * 审批状态
   * @format int32
   */
  approvalStatus?: number;
  /** 扩展名 */
  extension?: string;
  /**
   * 文件标识：1-程序，2-文件
   * @format int32
   */
  fileTag?: number;
  /**
   * 文件夹标识 0：普通文件夹 1：工艺目录文件夹  2：工艺包文件夹  3：FTP文件夹
   * @format int32
   */
  folderTag?: number;
  /** 是否有子文件夹 */
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 文件名 */
  name?: string;
  /**
   * 节点类型：0-文件，1-目录
   * @format int32
   */
  nodeType?: number;
  /** 父目录ID */
  parentId?: string;
  /**
   * 权限类型：1-仅查看，2-可编辑，3-可管理
   * @format int32
   */
  permissionType?: number;
  /** 流程id */
  processInstanceId?: string;
  /** 文件大小 */
  size?: string;
  /**
   * 文件状态
   * @format int32
   */
  status?: number;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 修改人 */
  updateUser?: string;
  /** 修改人 */
  updateUserName?: string;
  /** 版本 */
  version?: string;
}

/** WorkstationDataNodeBackTransferVO */
export interface WorkstationDataNodeBackTransferVO {
  /** 节点标记：FTP-tag标识为 nodeId，CNC-在线写入工位，tag标识为 path */
  nodeTag?: string;
  /**
   * 节点类型：0-文件，1-目录
   * @format int32
   */
  nodeType?: number;
}

/** WorkstationDataNodeTransferBackCreateVO */
export interface WorkstationDataNodeTransferBackCreateVO {
  /**
   * 重复处理策略：null-重名提示，1-覆盖，2-创建副本
   * @format int32
   */
  repeatHandleStrategy?: number;
  /** 数据节点 */
  sourceDataNodes?: WorkstationDataNodeBackTransferVO[];
  /** 目标节点 */
  targetDataNode?: string;
  /** 工位ID */
  workstationId: string;
}

/** WorkstationDataNodeTransferCreateVO */
export interface WorkstationDataNodeTransferCreateVO {
  /** 文件节点的文件标识：1-程序，2-文件 */
  fileTagList?: NameValueInt[];
  /**
   * 重复处理策略：null-重名提示，1-覆盖，2-创建副本
   * @format int32
   */
  repeatHandleStrategy?: number;
  /** 原节点 */
  sourceNode: string;
  /** 目标节点 */
  targetNode: WorkstationDataNodeTransferVO;
}

/** WorkstationDataNodeTransferVO */
export interface WorkstationDataNodeTransferVO {
  /** 节点标记：FTP-tag标识为 nodeId，CNC-在线写入工位，tag标识为 path */
  nodeTag?: string;
  /** 工位ID */
  workstationId: string;
}

/**
 * WorkstationFileDownloadVO
 * 工位文件下载视图
 */
export interface WorkstationFileDownloadVO {
  /** 数据节点 */
  sourceDataNodes?: WorkstationDataNodeBackTransferVO[];
  /** 工位ID */
  workstationId: string;
}

/**
 * WorkstationFileMoveFailureVO
 * 工位文件移动失败视图
 */
export interface WorkstationFileMoveFailureVO {
  /**
   * 失败类型：1-名称重复，2-业务处理异常
   * @format int32
   */
  failureType?: number;
  /** 信息 */
  msg?: string;
  /** 名称 */
  name?: string;
  /** 是否成功 */
  success?: boolean;
}

/**
 * WorkstationFileMoveResultVO
 * 工位文件移动结果视图
 */
export interface WorkstationFileMoveResultVO {
  /** 移动失败列表 */
  failureList?: WorkstationFileMoveFailureVO[];
  /**
   * 失败类型：1-名称重复，2-业务处理异常
   * @format int32
   */
  failureType?: number;
  /** 返回消息 */
  msg?: string;
  /** 是否成功 */
  success?: boolean;
}

/**
 * WorkstationFileQueryVO
 * 工位文件查询视图
 */
export interface WorkstationFileQueryVO {
  /**
   * 文件分类：1-程序，2-文件
   * @format int32
   */
  fileTag?: number;
  /** 目标节点 */
  targetNode: WorkstationDataNodeTransferVO;
}

/**
 * WorkstationFileTreeVO
 * 工位文件树形结构VO
 */
export interface WorkstationFileTreeVO {
  /**
   * 业务类型
   * @format int32
   */
  businessType?: number;
  children?: WorkstationFileTreeVO[];
  /**
   * 文件夹tag 1：工艺目录文件夹  2：工艺包文件夹
   * @format int32
   */
  folderTag?: number;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 名称 */
  name?: string;
  /**
   * 节点类型：0-文件，1-文件夹
   * @format int32
   */
  nodeType?: number;
  /** 父节点 */
  parentId?: string;
  /** 路径 */
  path?: string;
  /**
   * 程序传输方式：0-关闭，1-在线写入，2-ftp，3-串口传输
   * @format int32
   */
  transmissionMethod?: number;
  /** 工位ID */
  workstationId?: string;
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

/** IPage«CommonDataNodeVO» */
export interface IPageCommonDataNodeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CommonDataNodeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CommonDataNodeVO»_1 */
export interface IPageCommonDataNodeVO1 {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CommonDataNodeVO2[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CommonDataNodeVO»_2 */
export interface IPageCommonDataNodeVO2 {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CommonDataNodeVO1[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CommonFileSearchResultVO» */
export interface IPageCommonFileSearchResultVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CommonFileSearchResultVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CraftFolderNodePageVO» */
export interface IPageCraftFolderNodePageVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CraftFolderNodePageVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DncAuditLogVO» */
export interface IPageDncAuditLogVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DncAuditLogVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DncCraftLogVO» */
export interface IPageDncCraftLogVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DncCraftLogVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DncCraftTaskVO» */
export interface IPageDncCraftTaskVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DncCraftTaskVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DncTransferLogVO» */
export interface IPageDncTransferLogVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DncTransferLogVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«SharedDataNodeVO» */
export interface IPageSharedDataNodeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: SharedDataNodeVO[];
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

/** NameValue«int» */
export interface NameValueInt {
  name?: string;
  /** @format int32 */
  value?: number;
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
 * R«BladeDncFile»
 * 返回信息
 */
export interface RBladeDncFile {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BladeDncFile;
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
 * R«CommonDataNodeVO»
 * 返回信息
 */
export interface RCommonDataNodeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonDataNodeVO1;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CommonFileVersionVO»
 * 返回信息
 */
export interface RCommonFileVersionVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonFileVersionVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CommonOperationResultVO»
 * 返回信息
 */
export interface RCommonOperationResultVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonOperationResultVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncCraftTaskDetailVO»
 * 返回信息
 */
export interface RDncCraftTaskDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncCraftTaskDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncCraftTaskFileDetailVO»
 * 返回信息
 */
export interface RDncCraftTaskFileDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncCraftTaskFileDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncFolderSettingsBriefVO»
 * 返回信息
 */
export interface RDncFolderSettingsBriefVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncFolderSettingsBriefVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DocumentDetailVO»
 * 返回信息
 */
export interface RDocumentDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DocumentDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FtpDirectoryDTO»
 * 返回信息
 */
export interface RFtpDirectoryDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FtpDirectoryDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FtpFileInfoVO»
 * 返回信息
 */
export interface RFtpFileInfoVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FtpFileInfoVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CommonDataNodeVO»»
 * 返回信息
 */
export interface RIPageCommonDataNodeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCommonDataNodeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CommonDataNodeVO»»_1
 * 返回信息
 */
export interface RIPageCommonDataNodeVO1 {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCommonDataNodeVO1;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CommonDataNodeVO»»_2
 * 返回信息
 */
export interface RIPageCommonDataNodeVO2 {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCommonDataNodeVO2;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CommonFileSearchResultVO»»
 * 返回信息
 */
export interface RIPageCommonFileSearchResultVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCommonFileSearchResultVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CraftFolderNodePageVO»»
 * 返回信息
 */
export interface RIPageCraftFolderNodePageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCraftFolderNodePageVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DncAuditLogVO»»
 * 返回信息
 */
export interface RIPageDncAuditLogVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDncAuditLogVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DncCraftLogVO»»
 * 返回信息
 */
export interface RIPageDncCraftLogVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDncCraftLogVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DncCraftTaskVO»»
 * 返回信息
 */
export interface RIPageDncCraftTaskVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDncCraftTaskVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DncTransferLogVO»»
 * 返回信息
 */
export interface RIPageDncTransferLogVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDncTransferLogVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«SharedDataNodeVO»»
 * 返回信息
 */
export interface RIPageSharedDataNodeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageSharedDataNodeVO;
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
 * R«List«CommonAssociativeFileResultVO»»
 * 返回信息
 */
export interface RListCommonAssociativeFileResultVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonAssociativeFileResultVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CommonDataNodeTreeVO»»
 * 返回信息
 */
export interface RListCommonDataNodeTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonDataNodeTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CommonDataNodeVO»»
 * 返回信息
 */
export interface RListCommonDataNodeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonDataNodeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CommonDataNodeVO»»_1
 * 返回信息
 */
export interface RListCommonDataNodeVO1 {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonDataNodeVO1[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CommonDataNodeVO»»_2
 * 返回信息
 */
export interface RListCommonDataNodeVO2 {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonDataNodeVO2[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CommonFileVersionVO»»
 * 返回信息
 */
export interface RListCommonFileVersionVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonFileVersionVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CommonFolderDataNodeTreeVO»»
 * 返回信息
 */
export interface RListCommonFolderDataNodeTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CommonFolderDataNodeTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DataNodePermissionVO»»
 * 返回信息
 */
export interface RListDataNodePermissionVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DataNodePermissionVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncCraftTaskStatisticsVO»»
 * 返回信息
 */
export interface RListDncCraftTaskStatisticsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncCraftTaskStatisticsVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncFtpWorkstationInfoVO»»
 * 返回信息
 */
export interface RListDncFtpWorkstationInfoVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncFtpWorkstationInfoVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«NameValue«int»»»
 * 返回信息
 */
export interface RListNameValueInt {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NameValueInt[];
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
 * R«List«WorkstationFileTreeVO»»
 * 返回信息
 */
export interface RListWorkstationFileTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationFileTreeVO[];
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
 * R«WorkstationFileMoveResultVO»
 * 返回信息
 */
export interface RWorkstationFileMoveResultVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationFileMoveResultVO;
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
  bladeDnc = {
    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonAssociativeSearchFile
     * @summary 联想搜索，最近十条,按照文件位置从上到下，修改时间最新的考前顺序显示文件
     * @request POST:/blade-dnc/common/data-node/associative-search
     * @secure
     */
    dncCommonAssociativeSearchFile: (
      query: {
        /** fileName */
        fileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonAssociativeFileResultVO, void>({
        path: `/blade-dnc/common/data-node/associative-search`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonGetDataNodeByBusinessType
     * @summary DNC资源文件业务大分类(业务位置分类)
     * @request GET:/blade-dnc/common/data-node/business-type
     * @secure
     */
    dncCommonGetDataNodeByBusinessType: (params: RequestParams = {}) =>
      this.request<RListNameValueInt, void>({
        path: `/blade-dnc/common/data-node/business-type`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonDownloadByNodeIds
     * @summary 下载多个节点以及节点下得所有文件列表,文件数量大于1采用压缩包
     * @request POST:/blade-dnc/common/data-node/download
     * @secure
     */
    dncCommonDownloadByNodeIds: (nodeIds: string[], params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-dnc/common/data-node/download`,
        method: 'POST',
        body: nodeIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonGetAllFolderDataNodeTree
     * @summary DNC资源文件树,我的文档&共享文档&工艺文件
     * @request GET:/blade-dnc/common/data-node/folder/tree
     * @secure
     */
    dncCommonGetAllFolderDataNodeTree: (params: RequestParams = {}) =>
      this.request<RListCommonFolderDataNodeTreeVO, void>({
        path: `/blade-dnc/common/data-node/folder/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonGetLazyDataNodeList
     * @summary DNC资源懒加载列表,加载节点下的文件列表
     * @request GET:/blade-dnc/common/data-node/lazy-list
     * @secure
     */
    dncCommonGetLazyDataNodeList: (
      query: {
        /** 节点ID */
        nodeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonDataNodeVO1, void>({
        path: `/blade-dnc/common/data-node/lazy-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonGetLazyDataNodeListByApproval
     * @summary DNC资源懒加载列表,加载节点下的文件列表（根据是否开启审批）
     * @request GET:/blade-dnc/common/data-node/lazy-list-approval
     * @secure
     */
    dncCommonGetLazyDataNodeListByApproval: (
      query: {
        /** 节点ID */
        nodeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonDataNodeVO1, void>({
        path: `/blade-dnc/common/data-node/lazy-list-approval`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonRemoveDataNode
     * @summary 删除加载节点下的所有文件列表
     * @request DELETE:/blade-dnc/common/data-node/remove
     * @secure
     */
    dncCommonRemoveDataNode: (nodeIds: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/common/data-node/remove`,
        method: 'DELETE',
        body: nodeIds,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonSearchFile
     * @summary 全局模糊搜索
     * @request POST:/blade-dnc/common/data-node/search
     * @secure
     */
    dncCommonSearchFile: (searchVO: CommonFileSearchVO, params: RequestParams = {}) =>
      this.request<RIPageCommonFileSearchResultVO, void>({
        path: `/blade-dnc/common/data-node/search`,
        method: 'POST',
        body: searchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonGetDataNodeTreeByNodeIds
     * @summary 根据节点查询文件列表树
     * @request POST:/blade-dnc/common/data-node/tree/nodeIds
     * @secure
     */
    dncCommonGetDataNodeTreeByNodeIds: (nodeIds: string[], params: RequestParams = {}) =>
      this.request<RListCommonDataNodeTreeVO, void>({
        path: `/blade-dnc/common/data-node/tree/nodeIds`,
        method: 'POST',
        body: nodeIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonGetFileVersionHistory
     * @summary 获取文件版本历史信息
     * @request GET:/blade-dnc/common/file/version/history
     * @secure
     */
    dncCommonGetFileVersionHistory: (
      query: {
        /** 文件ID */
        nodeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonFileVersionVO, void>({
        path: `/blade-dnc/common/file/version/history`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonGetFileVersionInfo
     * @summary 根据文件ID获取版本信息
     * @request GET:/blade-dnc/common/file/version/info
     * @secure
     */
    dncCommonGetFileVersionInfo: (
      query: {
        /** 文件ID */
        fileId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCommonFileVersionVO, void>({
        path: `/blade-dnc/common/file/version/info`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonGetLatestVersion
     * @summary 获取文件节点最新版本信息
     * @request GET:/blade-dnc/common/file/version/latest
     * @secure
     */
    dncCommonGetLatestVersion: (
      query: {
        /** 文件ID */
        nodeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCommonFileVersionVO, void>({
        path: `/blade-dnc/common/file/version/latest`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonFileVersionSetting
     * @summary 文件版本设定
     * @request GET:/blade-dnc/common/file/version/setting
     * @secure
     */
    dncCommonFileVersionSetting: (
      query: {
        /** 文件ID */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-dnc/common/file/version/setting`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通用接口
     * @name DncCommonPutFile
     * @summary 上传文件
     * @request POST:/blade-dnc/common/put-file
     * @secure
     */
    dncCommonPutFile: (
      data: {
        /**
         * file
         * @format binary
         */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBladeDncFile, void>({
        path: `/blade-dnc/common/put-file`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileAddFile
     * @summary 添加文件
     * @request POST:/blade-dnc/craft-file/add-file
     * @secure
     */
    craftFileAddFile: (commonFileCreateVOList: CommonFileCreateVO[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-file/add-file`,
        method: 'POST',
        body: commonFileCreateVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileAddFolder
     * @summary 创建工艺目录
     * @request POST:/blade-dnc/craft-file/add-folder
     * @secure
     */
    craftFileAddFolder: (folderCreateVO: CommonFolderCreateVO, params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-dnc/craft-file/add-folder`,
        method: 'POST',
        body: folderCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description repeatHandleStrategy第一次传null, 如果失败了 根据 success,failureType 做出选择 填写具体的方式再次提交
     *
     * @tags 工艺文件
     * @name CraftFileCopy
     * @summary 复制文件
     * @request POST:/blade-dnc/craft-file/copy-file
     * @secure
     */
    craftFileCopy: (copyDataNodeVO: CopyDataNodeVO, params: RequestParams = {}) =>
      this.request<RCommonOperationResultVO, void>({
        path: `/blade-dnc/craft-file/copy-file`,
        method: 'POST',
        body: copyDataNodeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileMove
     * @summary 移动文件
     * @request POST:/blade-dnc/craft-file/move-file
     * @secure
     */
    craftFileMove: (moveDataNodeVO: MoveDataNodeVO, params: RequestParams = {}) =>
      this.request<RCommonOperationResultVO, void>({
        path: `/blade-dnc/craft-file/move-file`,
        method: 'POST',
        body: moveDataNodeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFilePage
     * @summary 工艺文件分页
     * @request POST:/blade-dnc/craft-file/page
     * @secure
     */
    craftFilePage: (
      craftFilePageQueryVO: CommonFilePageQueryVO,
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
      this.request<RIPageCraftFolderNodePageVO, void>({
        path: `/blade-dnc/craft-file/page`,
        method: 'POST',
        query: query,
        body: craftFilePageQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFilePageFile
     * @summary 文件分页
     * @request POST:/blade-dnc/craft-file/page-file
     * @secure
     */
    craftFilePageFile: (
      craftFileQueryVO: CraftFileQueryVO,
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
      this.request<RIPageCommonDataNodeVO, void>({
        path: `/blade-dnc/craft-file/page-file`,
        method: 'POST',
        query: query,
        body: craftFileQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileProductTree
     * @summary 获取产品树
     * @request GET:/blade-dnc/craft-file/product-tree
     * @secure
     */
    craftFileProductTree: (params: RequestParams = {}) =>
      this.request<RListProductVo, void>({
        path: `/blade-dnc/craft-file/product-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileRemoveFile
     * @summary 删除文件
     * @request DELETE:/blade-dnc/craft-file/remove-file/{id}
     * @secure
     */
    craftFileRemoveFile: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-file/remove-file/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileRemoveFolder
     * @summary 删除工艺目录或者工艺包
     * @request DELETE:/blade-dnc/craft-file/remove-folder
     * @secure
     */
    craftFileRemoveFolder: (ids: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-file/remove-folder`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileRename
     * @summary 编辑:重命名工艺文件树文件名
     * @request PUT:/blade-dnc/craft-file/rename
     * @secure
     */
    craftFileRename: (renameDataNodeVO: RenameDataNodeVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-file/rename`,
        method: 'PUT',
        body: renameDataNodeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileSavePack
     * @summary 创建或者编辑工艺包
     * @request POST:/blade-dnc/craft-file/save-pack
     * @secure
     */
    craftFileSavePack: (craftPackFolderCreateVO: CraftPackFolderCreateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-file/save-pack`,
        method: 'POST',
        body: craftPackFolderCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileStartApproval
     * @summary 发起流程审批
     * @request POST:/blade-dnc/craft-file/start-approval
     * @secure
     */
    craftFileStartApproval: (startApprovalVO: CommonStartApprovalVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-file/start-approval`,
        method: 'POST',
        body: startApprovalVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileTree
     * @summary 工艺文件目录树
     * @request GET:/blade-dnc/craft-file/tree
     * @secure
     */
    craftFileTree: (
      query?: {
        /** keyword */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonFolderDataNodeTreeVO, void>({
        path: `/blade-dnc/craft-file/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileFileListByNodeId
     * @summary 根据nodeId获取文件信息
     * @request GET:/blade-dnc/craft-file/tree-file-list
     * @secure
     */
    craftFileFileListByNodeId: (
      query: {
        /** nodeId */
        nodeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonDataNodeVO, void>({
        path: `/blade-dnc/craft-file/tree-file-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺文件
     * @name CraftFileFileNodesTree
     * @summary DNC资源文件树,我的文档&共享文档
     * @request GET:/blade-dnc/craft-file/tree-file-nodes
     * @secure
     */
    craftFileFileNodesTree: (params: RequestParams = {}) =>
      this.request<RListCommonFolderDataNodeTreeVO, void>({
        path: `/blade-dnc/craft-file/tree-file-nodes`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 显示工艺文件夹和工艺文件包
     *
     * @tags 工艺文件
     * @name CraftFileTreePack
     * @summary 工艺包树
     * @request GET:/blade-dnc/craft-file/tree-pack
     * @secure
     */
    craftFileTreePack: (
      query?: {
        /** keyword */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonFolderDataNodeTreeVO, void>({
        path: `/blade-dnc/craft-file/tree-pack`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskCloseTask
     * @summary 关闭任务
     * @request POST:/blade-dnc/craft-task/close-task
     * @secure
     */
    craftTaskCloseTask: (
      query: {
        /** taskId */
        taskId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/close-task`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskCreateCraftTask
     * @summary 创建工艺任务
     * @request POST:/blade-dnc/craft-task/create/task
     * @secure
     */
    craftTaskCreateCraftTask: (craftTaskCreateVO: DncCraftTaskCreateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/create/task`,
        method: 'POST',
        body: craftTaskCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskTaskDetail
     * @summary 工艺任务明细
     * @request GET:/blade-dnc/craft-task/detail
     * @secure
     */
    craftTaskTaskDetail: (
      query: {
        /** taskId */
        taskId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDncCraftTaskDetailVO, void>({
        path: `/blade-dnc/craft-task/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskTaskFileChangeTag
     * @summary 工艺任务文件类型切换
     * @request GET:/blade-dnc/craft-task/file/change-tag
     * @secure
     */
    craftTaskTaskFileChangeTag: (
      query: {
        /** taskFileId */
        taskFileId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/file/change-tag`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskAddFileComment
     * @summary 工艺任务文件添加批注
     * @request POST:/blade-dnc/craft-task/file/comment/add
     * @secure
     */
    craftTaskAddFileComment: (fileCommentCreateVO: DncCraftTaskFileCommentCreateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/file/comment/add`,
        method: 'POST',
        body: fileCommentCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskDeleteFileComment
     * @summary 工艺任务文件删除批注
     * @request DELETE:/blade-dnc/craft-task/file/comment/delete
     * @secure
     */
    craftTaskDeleteFileComment: (
      query: {
        /** taskFileCommentId */
        taskFileCommentId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/file/comment/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskTaskFileDelete
     * @summary 工艺任务文件删除
     * @request DELETE:/blade-dnc/craft-task/file/delete
     * @secure
     */
    craftTaskTaskFileDelete: (
      query: {
        /** taskFileId */
        taskFileId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/file/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskTaskFileDetail
     * @summary 工艺任务文件明细
     * @request GET:/blade-dnc/craft-task/file/detail
     * @secure
     */
    craftTaskTaskFileDetail: (
      query: {
        /** taskFileId */
        taskFileId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDncCraftTaskFileDetailVO, void>({
        path: `/blade-dnc/craft-task/file/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskSaveCraftTaskFiles
     * @summary 工艺任务保存(暂存)文件
     * @request POST:/blade-dnc/craft-task/file/save
     * @secure
     */
    craftTaskSaveCraftTaskFiles: (fileSaveVO: DncCraftTaskFileSaveVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/file/save`,
        method: 'POST',
        body: fileSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskGetCraftTaskList
     * @summary 工艺任务列表
     * @request POST:/blade-dnc/craft-task/page
     * @secure
     */
    craftTaskGetCraftTaskList: (
      searchVO: DncCraftTaskSearchVO,
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
      this.request<RIPageDncCraftTaskVO, void>({
        path: `/blade-dnc/craft-task/page`,
        method: 'POST',
        query: query,
        body: searchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskRevocationTask
     * @summary 撤回任务
     * @request POST:/blade-dnc/craft-task/revocation-task
     * @secure
     */
    craftTaskRevocationTask: (
      query: {
        /** taskId */
        taskId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/revocation-task`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskStartApproval
     * @summary 发起流程审批
     * @request POST:/blade-dnc/craft-task/start-approval
     * @secure
     */
    craftTaskStartApproval: (fileSaveVO: DncCraftTaskFileSaveVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/start-approval`,
        method: 'POST',
        body: fileSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskCraftTaskStatusDistributionStatistics
     * @summary 工艺任务分布统计
     * @request GET:/blade-dnc/craft-task/status/distribution-statistics
     * @secure
     */
    craftTaskCraftTaskStatusDistributionStatistics: (params: RequestParams = {}) =>
      this.request<RListDncCraftTaskStatisticsVO, void>({
        path: `/blade-dnc/craft-task/status/distribution-statistics`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺任务
     * @name CraftTaskSubmitApproval
     * @summary 工艺任务提交审核
     * @request POST:/blade-dnc/craft-task/submit-approval
     * @secure
     */
    craftTaskSubmitApproval: (fileSaveVO: DncCraftTaskFileSaveVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/craft-task/submit-approval`,
        method: 'POST',
        body: fileSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 添加节点权限
     *
     * @tags 节点权限
     * @name DncDataNodePermissionCreate
     * @summary 添加节点权限
     * @request POST:/blade-dnc/data-node-permission/create
     * @secure
     */
    dncDataNodePermissionCreate: (dataNodePermissionCreateVO: DataNodePermissionCreateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/data-node-permission/create`,
        method: 'POST',
        body: dataNodePermissionCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 节点权限
     * @name DncDataNodePermissionGetDataNodePermissionList
     * @summary 节点权限列表
     * @request GET:/blade-dnc/data-node-permission/list
     * @secure
     */
    dncDataNodePermissionGetDataNodePermissionList: (
      query: {
        /** 节点ID */
        nodeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDataNodePermissionVO, void>({
        path: `/blade-dnc/data-node-permission/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 节点权限
     * @name DncDataNodePermissionRemove
     * @summary 删除节点权限
     * @request DELETE:/blade-dnc/data-node-permission/remove
     * @secure
     */
    dncDataNodePermissionRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-dnc/data-node-permission/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 修改节点权限
     *
     * @tags 节点权限
     * @name DncDataNodePermissionUpdate
     * @summary 修改节点权限
     * @request PUT:/blade-dnc/data-node-permission/update
     * @secure
     */
    dncDataNodePermissionUpdate: (dataNodePermissionUpdateVO: DataNodePermissionUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/data-node-permission/update`,
        method: 'PUT',
        body: dataNodePermissionUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对外统一服务接口
     * @name DncFacadeGetCraftBagTree
     * @summary 工艺包树形结构
     * @request GET:/blade-dnc/facade/craft-bag-tree
     * @secure
     */
    dncFacadeGetCraftBagTree: (params: RequestParams = {}) =>
      this.request<RListCommonFolderDataNodeTreeVO, void>({
        path: `/blade-dnc/facade/craft-bag-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对外统一服务接口
     * @name DncFacadeGetCraftProgramFileTree
     * @summary 工艺程序文件树形结构
     * @request GET:/blade-dnc/facade/craft-program-file-tree
     * @secure
     */
    dncFacadeGetCraftProgramFileTree: (params: RequestParams = {}) =>
      this.request<RListCommonFolderDataNodeTreeVO, void>({
        path: `/blade-dnc/facade/craft-program-file-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对外统一服务接口
     * @name DncFacadeTaskDetail
     * @summary 工艺任务明细
     * @request GET:/blade-dnc/facade/craft-task/detail
     * @secure
     */
    dncFacadeTaskDetail: (
      query: {
        /** processInstanceId */
        processInstanceId: string;
        /** businessId */
        businessId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDncCraftTaskDetailVO, void>({
        path: `/blade-dnc/facade/craft-task/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对外统一服务接口
     * @name DncFacadeAddFileComment
     * @summary 工艺任务文件添加批注
     * @request POST:/blade-dnc/facade/craft-task/file/comment/add
     * @secure
     */
    dncFacadeAddFileComment: (fileCommentCreateVO: DncCraftTaskFileCommentCreateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/facade/craft-task/file/comment/add`,
        method: 'POST',
        body: fileCommentCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对外统一服务接口
     * @name DncFacadeTaskFileDetail
     * @summary 工艺任务文件明细
     * @request GET:/blade-dnc/facade/craft-task/file/detail
     * @secure
     */
    dncFacadeTaskFileDetail: (
      query: {
        /** taskFileId */
        taskFileId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDncCraftTaskFileDetailVO, void>({
        path: `/blade-dnc/facade/craft-task/file/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对外统一服务接口
     * @name DncFacadeGetDocumentDetail
     * @summary 工艺文件审批单据详情
     * @request POST:/blade-dnc/facade/document-detail
     * @secure
     */
    dncFacadeGetDocumentDetail: (
      query: {
        /** processInstanceId */
        processInstanceId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDocumentDetailVO, void>({
        path: `/blade-dnc/facade/document-detail`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对外统一服务接口
     * @name DncFacadeGetWorkstationFtpCatalogList
     * @summary 工位ftp目录列表
     * @request GET:/blade-dnc/facade/workstation-ftp-catalog-list
     * @secure
     */
    dncFacadeGetWorkstationFtpCatalogList: (params: RequestParams = {}) =>
      this.request<RListCommonDataNodeVO1, void>({
        path: `/blade-dnc/facade/workstation-ftp-catalog-list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工厂文件
     * @name FactoryFileAddFile
     * @summary 新建文件
     * @request POST:/blade-dnc/factory-file/add-file
     * @secure
     */
    factoryFileAddFile: (factoryFileCreateVO: FactoryFileCreateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/factory-file/add-file`,
        method: 'POST',
        body: factoryFileCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工厂文件
     * @name FactoryFileSelectFactoryFilePage
     * @summary 分页
     * @request GET:/blade-dnc/factory-file/page
     * @secure
     */
    factoryFileSelectFactoryFilePage: (
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
      this.request<RIPageCommonDataNodeVO2, void>({
        path: `/blade-dnc/factory-file/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 文件目录设置
     * @name FolderSettingsDetail
     * @summary 文件目录详情
     * @request GET:/blade-dnc/folder-settings/detail
     * @secure
     */
    folderSettingsDetail: (params: RequestParams = {}) =>
      this.request<RDncFolderSettingsBriefVO, void>({
        path: `/blade-dnc/folder-settings/detail`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 文件目录设置
     * @name FolderSettingsUpdate
     * @summary 更新文件目录设置
     * @request POST:/blade-dnc/folder-settings/update
     * @secure
     */
    folderSettingsUpdate: (updateVO: DncFolderSettingsUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/folder-settings/update`,
        method: 'POST',
        body: updateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogAddFolder
     * @summary 新增ftp目录
     * @request POST:/blade-dnc/ftp-catalog/add-folder
     * @secure
     */
    ftpCatalogAddFolder: (
      query?: {
        /** name */
        name?: string;
        /** parentId */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCommonDataNodeVO, void>({
        path: `/blade-dnc/ftp-catalog/add-folder`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogAddRelation
     * @summary 新增ftp关联工位
     * @request POST:/blade-dnc/ftp-catalog/add-relation
     * @secure
     */
    ftpCatalogAddRelation: (dncFtpBatchWorkstationAddVO: DncFtpBatchWorkstationAddVO, params: RequestParams = {}) =>
      this.request<RCommonDataNodeVO, void>({
        path: `/blade-dnc/ftp-catalog/add-relation`,
        method: 'POST',
        body: dncFtpBatchWorkstationAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogCreateFile
     * @summary 创建文件
     * @request POST:/blade-dnc/ftp-catalog/create-file
     * @secure
     */
    ftpCatalogCreateFile: (fileCreateVO: CommonFileCreateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp-catalog/create-file`,
        method: 'POST',
        body: fileCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogLazyListFtpFolder
     * @summary ftp目录列表
     * @request GET:/blade-dnc/ftp-catalog/list-folder
     * @secure
     */
    ftpCatalogLazyListFtpFolder: (
      query?: {
        /** parentId */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonDataNodeVO1, void>({
        path: `/blade-dnc/ftp-catalog/list-folder`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogListRelation
     * @summary ftp关联工位列表
     * @request POST:/blade-dnc/ftp-catalog/list-relation
     * @secure
     */
    ftpCatalogListRelation: (queryVO: DncFtpWorkstationQueryVO, params: RequestParams = {}) =>
      this.request<RListDncFtpWorkstationInfoVO, void>({
        path: `/blade-dnc/ftp-catalog/list-relation`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogNoBoundWorkstation
     * @summary 查询未被绑定目录的工位
     * @request POST:/blade-dnc/ftp-catalog/no-bound-workstation
     * @secure
     */
    ftpCatalogNoBoundWorkstation: (
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
        /** ftpFolderId */
        ftpFolderId: string;
        /** keyword */
        keyword: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageWorkstationVO, void>({
        path: `/blade-dnc/ftp-catalog/no-bound-workstation`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogRemoveFolder
     * @summary 删除ftp目录
     * @request DELETE:/blade-dnc/ftp-catalog/remove-folder
     * @secure
     */
    ftpCatalogRemoveFolder: (ftpIds: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp-catalog/remove-folder`,
        method: 'DELETE',
        body: ftpIds,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogRemoveRelation
     * @summary 删除ftp关联工位
     * @request DELETE:/blade-dnc/ftp-catalog/remove-relation
     * @secure
     */
    ftpCatalogRemoveRelation: (ftpIds: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp-catalog/remove-relation`,
        method: 'DELETE',
        body: ftpIds,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogRenameFolder
     * @summary 重命名ftp目录
     * @request PUT:/blade-dnc/ftp-catalog/rename-folder
     * @secure
     */
    ftpCatalogRenameFolder: (
      query?: {
        /** id */
        id?: string;
        /** name */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp-catalog/rename-folder`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogTree
     * @summary ftp目录树
     * @request GET:/blade-dnc/ftp-catalog/tree
     * @secure
     */
    ftpCatalogTree: (
      query?: {
        /** workstationId */
        workstationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationFileTreeVO, void>({
        path: `/blade-dnc/ftp-catalog/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp目录
     * @name FtpCatalogUpdateRelation
     * @summary 更新ftp关联工位
     * @request PUT:/blade-dnc/ftp-catalog/update-relation
     * @secure
     */
    ftpCatalogUpdateRelation: (dncFtpBatchWorkstationUpdateVO: DncFtpBatchWorkstationUpdateVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp-catalog/update-relation`,
        method: 'PUT',
        body: dncFtpBatchWorkstationUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp交互端点
     * @name FtpFileTransferEndpointGetOrderCwd
     * @summary cwd命令接口
     * @request GET:/blade-dnc/ftp/cwd
     * @secure
     */
    ftpFileTransferEndpointGetOrderCwd: (
      query: {
        /** path */
        path: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RVoid, void>({
        path: `/blade-dnc/ftp/cwd`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 读取CNC存储的文件
     *
     * @tags Ftp交互端点
     * @name FtpFileTransferEndpointReadFtpDirectoryList
     * @summary 读取工位关联Ftp文件信息
     * @request GET:/blade-dnc/ftp/directory/read
     * @secure
     */
    ftpFileTransferEndpointReadFtpDirectoryList: (
      query?: {
        /** path */
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RFtpDirectoryDTO, void>({
        path: `/blade-dnc/ftp/directory/read`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp交互端点
     * @name FtpFileTransferEndpointEntriesInfo
     * @summary 根据路径读取信息
     * @request GET:/blade-dnc/ftp/entries/info
     * @secure
     */
    ftpFileTransferEndpointEntriesInfo: (
      query: {
        /** path */
        path: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RFtpFileInfoVO, void>({
        path: `/blade-dnc/ftp/entries/info`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp交互端点
     * @name FtpFileTransferEndpointCreateFile
     * @summary 在根目录下创建当前版本的加工文件
     * @request POST:/blade-dnc/ftp/file/create
     * @secure
     */
    ftpFileTransferEndpointCreateFile: (
      query: {
        /** path */
        path: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RFtpFileInfoVO, void>({
        path: `/blade-dnc/ftp/file/create`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp交互端点
     * @name FtpFileTransferEndpointDeleteFile
     * @summary 删除文件
     * @request DELETE:/blade-dnc/ftp/file/delete
     * @secure
     */
    ftpFileTransferEndpointDeleteFile: (
      query: {
        /** filename */
        filename: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp/file/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp交互端点
     * @name FtpFileTransferEndpointReadFile
     * @summary 下载文件
     * @request GET:/blade-dnc/ftp/file/read
     * @secure
     */
    ftpFileTransferEndpointReadFile: (
      query: {
        /** path */
        path: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RString, void>({
        path: `/blade-dnc/ftp/file/read`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ftp交互端点
     * @name FtpFileTransferEndpointRenameFile
     * @summary 修改文件名称
     * @request PUT:/blade-dnc/ftp/file/rename
     * @secure
     */
    ftpFileTransferEndpointRenameFile: (
      query: {
        /** newFileName */
        newFileName: string;
        /** oldFileName */
        oldFileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp/file/rename`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 分页
     *
     * @tags hmi端接口
     * @name DncHmiGetWorkstationFilePage
     * @summary 分页
     * @request POST:/blade-dnc/hmi/workstation-file-page
     * @secure
     */
    dncHmiGetWorkstationFilePage: (
      queryVO: WorkstationFileQueryVO,
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
      this.request<RIPageCommonDataNodeVO1, void>({
        path: `/blade-dnc/hmi/workstation-file-page`,
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
     * @tags 日志
     * @name DncLogGetAuditLogPage
     * @summary 审计日志分页
     * @request POST:/blade-dnc/log/audit-page
     * @secure
     */
    dncLogGetAuditLogPage: (
      queryVO: DncAuditLogQueryVO,
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
      this.request<RIPageDncAuditLogVO, void>({
        path: `/blade-dnc/log/audit-page`,
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
     * @tags 日志
     * @name DncLogSelectCraftLogPage
     * @summary 工艺日志分页
     * @request POST:/blade-dnc/log/craft-page
     * @secure
     */
    dncLogSelectCraftLogPage: (
      queryVO: DncCraftLogQueryVO,
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
      this.request<RIPageDncCraftLogVO, void>({
        path: `/blade-dnc/log/craft-page`,
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
     * @tags 日志
     * @name DncLogSelectTransferLogPage
     * @summary 传输日志分页
     * @request POST:/blade-dnc/log/transfer-page
     * @secure
     */
    dncLogSelectTransferLogPage: (
      queryVO: DncTransferLogQueryVO,
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
      this.request<RIPageDncTransferLogVO, void>({
        path: `/blade-dnc/log/transfer-page`,
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
     * @tags 我的文档
     * @name MyDocumentCopy
     * @summary 复制
     * @request POST:/blade-dnc/my-document/copy
     * @secure
     */
    myDocumentCopy: (copyDataNodeVO: CopyDataNodeVO, params: RequestParams = {}) =>
      this.request<RCommonOperationResultVO, void>({
        path: `/blade-dnc/my-document/copy`,
        method: 'POST',
        body: copyDataNodeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的文档
     * @name MyDocumentCreateFile
     * @summary 创建文件
     * @request POST:/blade-dnc/my-document/create-file
     * @secure
     */
    myDocumentCreateFile: (fileCreateVO: CommonFileCreateVO, params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-dnc/my-document/create-file`,
        method: 'POST',
        body: fileCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的文档
     * @name MyDocumentCreateFolder
     * @summary 创建文件夹
     * @request POST:/blade-dnc/my-document/create-folder
     * @secure
     */
    myDocumentCreateFolder: (folderCreateVO: CommonFolderCreateVO, params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-dnc/my-document/create-folder`,
        method: 'POST',
        body: folderCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的文档
     * @name MyDocumentEditAgain
     * @summary 二次编辑文件
     * @request POST:/blade-dnc/my-document/edit-again
     * @secure
     */
    myDocumentEditAgain: (vo: MyDocumentEditVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/my-document/edit-again`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的文档
     * @name MyDocumentHasSameName
     * @summary 有相同名称的文件
     * @request POST:/blade-dnc/my-document/has-same-name
     * @secure
     */
    myDocumentHasSameName: (vo: MyDocumentSameNameVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/my-document/has-same-name`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的文档
     * @name MyDocumentMove
     * @summary 移动
     * @request POST:/blade-dnc/my-document/move
     * @secure
     */
    myDocumentMove: (moveDataNodeVO: MoveDataNodeVO, params: RequestParams = {}) =>
      this.request<RCommonOperationResultVO, void>({
        path: `/blade-dnc/my-document/move`,
        method: 'POST',
        body: moveDataNodeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的文档
     * @name MyDocumentPage
     * @summary 分页
     * @request POST:/blade-dnc/my-document/page
     * @secure
     */
    myDocumentPage: (
      commonFilePageQueryVO: CommonFilePageQueryVO1,
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
      this.request<RIPageCommonDataNodeVO2, void>({
        path: `/blade-dnc/my-document/page`,
        method: 'POST',
        query: query,
        body: commonFilePageQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的文档
     * @name MyDocumentRename
     * @summary 重命名
     * @request PUT:/blade-dnc/my-document/rename
     * @secure
     */
    myDocumentRename: (renameDataNodeVO: RenameDataNodeVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/my-document/rename`,
        method: 'PUT',
        body: renameDataNodeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的文档
     * @name MyDocumentStartApproval
     * @summary 发起流程审批
     * @request POST:/blade-dnc/my-document/start-approval
     * @secure
     */
    myDocumentStartApproval: (startApprovalVO: CommonStartApprovalVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/my-document/start-approval`,
        method: 'POST',
        body: startApprovalVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的文档
     * @name MyDocumentDocumentFolderTree
     * @summary 文档目录
     * @request GET:/blade-dnc/my-document/tree
     * @secure
     */
    myDocumentDocumentFolderTree: (
      query?: {
        /** keyword */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCommonFolderDataNodeTreeVO, void>({
        path: `/blade-dnc/my-document/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 共享文档
     * @name SharedDocumentCopy
     * @summary 复制
     * @request POST:/blade-dnc/shared-document/copy
     * @secure
     */
    sharedDocumentCopy: (copyDataNodeVO: CopyDataNodeVO, params: RequestParams = {}) =>
      this.request<RCommonOperationResultVO, void>({
        path: `/blade-dnc/shared-document/copy`,
        method: 'POST',
        body: copyDataNodeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 共享文档
     * @name SharedDocumentCreateFile
     * @summary 创建文件
     * @request POST:/blade-dnc/shared-document/create-file
     * @secure
     */
    sharedDocumentCreateFile: (fileCreateVO: CommonFileCreateVO, params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-dnc/shared-document/create-file`,
        method: 'POST',
        body: fileCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 共享文档
     * @name SharedDocumentCreateFolder
     * @summary 创建文件夹
     * @request POST:/blade-dnc/shared-document/create-folder
     * @secure
     */
    sharedDocumentCreateFolder: (folderCreateVO: CommonFolderCreateVO, params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-dnc/shared-document/create-folder`,
        method: 'POST',
        body: folderCreateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 共享文档
     * @name SharedDocumentMove
     * @summary 移动
     * @request POST:/blade-dnc/shared-document/move
     * @secure
     */
    sharedDocumentMove: (moveDataNodeVO: MoveDataNodeVO, params: RequestParams = {}) =>
      this.request<RCommonOperationResultVO, void>({
        path: `/blade-dnc/shared-document/move`,
        method: 'POST',
        body: moveDataNodeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 共享文档
     * @name SharedDocumentDocumentMoveFolderTree
     * @summary 移动文档目录
     * @request GET:/blade-dnc/shared-document/move-tree
     * @secure
     */
    sharedDocumentDocumentMoveFolderTree: (params: RequestParams = {}) =>
      this.request<RListCommonFolderDataNodeTreeVO, void>({
        path: `/blade-dnc/shared-document/move-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 共享文档
     * @name SharedDocumentSelectSharedDocumentPage
     * @summary 分页
     * @request POST:/blade-dnc/shared-document/page
     * @secure
     */
    sharedDocumentSelectSharedDocumentPage: (
      commonFilePageQueryVO: CommonFilePageQueryVO1,
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
      this.request<RIPageSharedDataNodeVO, void>({
        path: `/blade-dnc/shared-document/page`,
        method: 'POST',
        query: query,
        body: commonFilePageQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 共享文档
     * @name SharedDocumentRename
     * @summary 重命名
     * @request PUT:/blade-dnc/shared-document/rename
     * @secure
     */
    sharedDocumentRename: (renameDataNodeVO: RenameDataNodeVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/shared-document/rename`,
        method: 'PUT',
        body: renameDataNodeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 共享文档
     * @name SharedDocumentStartApproval
     * @summary 发起流程审批
     * @request POST:/blade-dnc/shared-document/start-approval
     * @secure
     */
    sharedDocumentStartApproval: (startApprovalVO: CommonStartApprovalVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/shared-document/start-approval`,
        method: 'POST',
        body: startApprovalVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 共享文档
     * @name SharedDocumentDocumentFolderTree
     * @summary 文档目录
     * @request GET:/blade-dnc/shared-document/tree
     * @secure
     */
    sharedDocumentDocumentFolderTree: (params: RequestParams = {}) =>
      this.request<RListCommonFolderDataNodeTreeVO, void>({
        path: `/blade-dnc/shared-document/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位文件传输
     * @name WorkstationFileTransferCreate
     * @summary 文件下发
     * @request POST:/blade-dnc/workstation-file-transfer/create
     * @secure
     */
    workstationFileTransferCreate: (createVO: WorkstationDataNodeTransferCreateVO, params: RequestParams = {}) =>
      this.request<RCommonOperationResultVO, void>({
        path: `/blade-dnc/workstation-file-transfer/create`,
        method: 'POST',
        body: createVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位文件
     * @name WorkstationFileCopy
     * @summary 复制
     * @request POST:/blade-dnc/workstation-file/copy
     * @secure
     */
    workstationFileCopy: (copyVO: WorkstationDataNodeTransferBackCreateVO, params: RequestParams = {}) =>
      this.request<RCommonOperationResultVO, void>({
        path: `/blade-dnc/workstation-file/copy`,
        method: 'POST',
        body: copyVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位文件
     * @name WorkstationFileDownload
     * @summary 下载
     * @request POST:/blade-dnc/workstation-file/download
     * @secure
     */
    workstationFileDownload: (downloadVO: WorkstationFileDownloadVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-dnc/workstation-file/download`,
        method: 'POST',
        body: downloadVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 列表
     *
     * @tags 工位文件
     * @name WorkstationFileGetWorkstationFileList
     * @summary 列表
     * @request POST:/blade-dnc/workstation-file/list
     * @secure
     */
    workstationFileGetWorkstationFileList: (queryVO: WorkstationDataNodeTransferVO, params: RequestParams = {}) =>
      this.request<RListCommonDataNodeVO2, void>({
        path: `/blade-dnc/workstation-file/list`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位文件
     * @name WorkstationFileMove
     * @summary 移动
     * @request POST:/blade-dnc/workstation-file/move
     * @secure
     */
    workstationFileMove: (moveVO: WorkstationDataNodeTransferBackCreateVO, params: RequestParams = {}) =>
      this.request<RWorkstationFileMoveResultVO, void>({
        path: `/blade-dnc/workstation-file/move`,
        method: 'POST',
        body: moveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 分页
     *
     * @tags 工位文件
     * @name WorkstationFileGetWorkstationFilePage
     * @summary 分页
     * @request POST:/blade-dnc/workstation-file/page
     * @secure
     */
    workstationFileGetWorkstationFilePage: (
      queryVO: WorkstationFileQueryVO,
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
      this.request<RIPageCommonDataNodeVO1, void>({
        path: `/blade-dnc/workstation-file/page`,
        method: 'POST',
        query: query,
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 读取CNC存储的文件
     *
     * @tags 工位文件
     * @name WorkstationFileGetCncStorageTypeFile
     * @summary 在线读文件流
     * @request POST:/blade-dnc/workstation-file/read-file/input-stream
     * @secure
     */
    workstationFileGetCncStorageTypeFile: (queryVO: WorkstationDataNodeTransferVO, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/blade-dnc/workstation-file/read-file/input-stream`,
        method: 'POST',
        body: queryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工位文件
     * @name WorkstationFileRemove
     * @summary 文件删除
     * @request DELETE:/blade-dnc/workstation-file/remove
     * @secure
     */
    workstationFileRemove: (removeVO: WorkstationDataNodeTransferVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-dnc/workstation-file/remove`,
        method: 'DELETE',
        body: removeVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 工位文件
     * @name WorkstationFileTree
     * @summary 树形结构
     * @request GET:/blade-dnc/workstation-file/tree
     * @secure
     */
    workstationFileTree: (
      query: {
        /** 工位ID */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkstationFileTreeVO, void>({
        path: `/blade-dnc/workstation-file/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
}
