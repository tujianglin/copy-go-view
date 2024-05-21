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

/** BusinessNotify */
export interface BusinessNotify {
  /** 业务key */
  businessKey?: string;
  /** 业务名称 */
  businessName?: string;
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
  /** 通知配置 */
  notifyId?: string;
  /** 通知模板 */
  notifyTemplateId?: string;
  /** 通知类型 */
  notifyType?: string;
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

/** BusinessNotifyDTO */
export interface BusinessNotifyDTO {
  /** 业务key */
  businessKey?: string;
  /** 业务名称 */
  businessName?: string;
  /** 主键 */
  id?: string;
  /** 通知配置 */
  notifyId?: string;
  /** 通知名称 */
  notifyName?: string;
  /** 通知模板 */
  notifyTemplateId?: string;
  /** 通知模板名称 */
  notifyTemplateName?: string;
  /** 通知类型 */
  notifyType?: string;
  /** 服务商名称 */
  providerName?: string;
  /** 服务商类型 */
  providerType?: string;
  /**
   * 状态 1为启用 0为禁用
   * @format int32
   */
  status?: number;
  /** 模板内容 */
  template?: string;
}

/** BusinessNotifyVO */
export interface BusinessNotifyVO {
  /** 设置 */
  businessNotifyDTOList?: BusinessNotifyDTO[];
  /** 设置 */
  defaultObject?: NotifyDefaultObjectVO;
}

/** ConfigMetadata */
export interface ConfigMetadata {
  description?: string;
  name?: string;
  properties?: ConfigPropertyMetadata[];
}

/** ConfigPropertyMetadata */
export interface ConfigPropertyMetadata {
  description?: string;
  name?: string;
  property?: string;
  type?: DataType;
}

/** DataType */
export interface DataType {
  description?: string;
  expands?: object;
  id?: string;
  name?: string;
  type?: string;
}

/** NoticeAddVO */
export interface NoticeAddVO {
  /** @format int32 */
  category: number;
  content: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  title: string;
}

/** NoticeUpdateVO */
export interface NoticeUpdateVO {
  /** @format int32 */
  category?: number;
  content?: string;
  id?: string;
  title?: string;
}

/** NoticeVO */
export interface NoticeVO {
  /**
   * 通知类型
   * @format int32
   */
  category?: number;
  /** 通知类型名 */
  categoryName?: string;
  /** 内容 */
  content?: string;
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
  /** 租户ID */
  tenantId?: string;
  /** 标题 */
  title?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/** Notification */
export interface Notification {
  businessKey?: string;
  businessName?: string;
  id?: string;
  message?: string;
  /** @format date-time */
  notifyTime?: string;
  subscribeId?: string;
  subscriber?: string;
}

/** NotifyBusinessChangeStatusVO */
export interface NotifyBusinessChangeStatusVO {
  /** 业务键 */
  businessKey?: string;
  /** 通知类型 */
  notifyType?: string;
  /**
   * 切换的状态 1 启用 0 禁用
   * @format int32
   */
  status?: number;
}

/** NotifyBusinessSaveVO */
export interface NotifyBusinessSaveVO {
  /** 业务实体 */
  businessNotify?: BusinessNotify;
  /** 模版实体 */
  templateEntity?: NotifyTemplateEntity;
}

/** NotifyBusinessTreeVO */
export interface NotifyBusinessTreeVO {
  /** 业务键 */
  businessKey?: string;
  /** 业务名称 */
  businessName?: string;
  children?: NotifyBusinessTreeVO[];
  hasChildren?: boolean;
  /** id */
  id?: string;
  label?: string;
  /** 父id */
  parentId?: string;
  /** 描述 */
  remark?: string;
  /**
   * 业务启动的通知类型个数
   * @format int32
   */
  startCount?: number;
  value?: string;
}

/** NotifyConfigDTO */
export interface NotifyConfigDTO {
  /** 配置信息 */
  configuration?: object;
  /** 描述 */
  description?: string;
  /** 主键 */
  id?: string;
  /** 配置名称 */
  name?: string;
  /** 服务提供商 */
  provider?: string;
  /** 通知类型 */
  type?: string;
}

/** NotifyConfigEntity */
export interface NotifyConfigEntity {
  /** 配置信息 */
  configuration?: object;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 描述 */
  description?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 配置名称 */
  name?: string;
  /** 服务提供商 */
  provider?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
  /** 通知类型 */
  type?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/** NotifyDefaultObjectVO */
export interface NotifyDefaultObjectVO {
  businessKey?: string;
  /** 员工ids */
  empIds?: string[];
  /** 员工列表 */
  empList?: NotifyDefaultPersonDTO[];
  /** 部门ids */
  orgIds?: string[];
  /** 部门列表 */
  orgList?: NotifyDefaultPersonDTO[];
}

/** NotifyDefaultPersonDTO */
export interface NotifyDefaultPersonDTO {
  name?: string;
  personId?: string;
  /** @format int32 */
  personType?: number;
}

/** NotifyHistoryDTO */
export interface NotifyHistoryDTO {
  /** 业务名称 */
  businessName?: string;
  /** 上下文 */
  contextData?: object;
  /** 异常栈 */
  errorStack?: string;
  /** 错误类型 */
  errorType?: string;
  /** 主键 */
  id?: string;
  /** 通知ID */
  notifierId?: string;
  /**
   * 通知时间
   * @format date-time
   */
  notifyTime?: string;
  /** 通知类型 */
  notifyType?: string;
  /** 通知类型名称 */
  notifyTypeName?: string;
  /** 服务商 */
  provider?: string;
  /**
   * 重试次数
   * @format int32
   */
  retryTimes?: number;
  /** 通知状态 */
  state?: 'success' | 'error';
  /** 模版内容 */
  template?: string;
  /** 模版ID */
  templateId?: string;
  /** 追溯ID */
  tranceId?: string;
}

/** NotifySettingVO */
export interface NotifySettingVO {
  /** 业务对象key */
  businessKey?: string;
  /** 员工ids */
  empIds?: string[];
  /** 员工列表 */
  empList?: NotifyDefaultPersonDTO[];
  /**
   * 间隔
   * @format int32
   */
  intervalTime?: number;
  /**
   * 间隔单位 0天 1小时 2分钟
   * @format int32
   */
  intervalUnit?: number;
  /**
   * 上限
   * @format int32
   */
  maxCount?: number;
  /** 通知时间 时:分 */
  notificationTime?: string;
  /** 部门ids */
  orgIds?: string[];
  /** 部门列表 */
  orgList?: NotifyDefaultPersonDTO[];
  /** 参数id */
  paramId?: string;
  /**
   * 触发方式 0自动 1自定义
   * @format int32
   */
  triggerMode?: number;
}

/** NotifySubscriberDTO */
export interface NotifySubscriberDTO {
  /** 主题提供商标识,如:device_alarm */
  businessKey?: string;
  /** 订阅名称 */
  businessName?: string;
  /** 描述说明 */
  description?: string;
  id?: string;
  /**
   * 通知主题订阅,status: 1.订阅中,2.停止
   * @format int32
   */
  status?: number;
  /** 订阅者ID */
  subscriber?: string;
  /** 订阅配置,根据主题标识不同而不同. */
  topicConfig?: object;
}

/** NotifyTemplateDTO */
export interface NotifyTemplateDTO {
  /** 关联业务 */
  business?: string;
  /** 主键 */
  id?: string;
  /** 模版名称 */
  name?: string;
  /** 通知服务商ID */
  provider?: string;
  /** 模版内容(根据服务商不同而不同) */
  template?: string;
  /** 通知类型 */
  type?: string;
}

/** NotifyTemplateEntity */
export interface NotifyTemplateEntity {
  /** 关联业务 */
  business?: string;
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
  /** 模版名称 */
  name?: string;
  /** 通知服务商ID */
  provider?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 模版内容(根据服务商不同而不同) */
  template?: string;
  /** 租户ID */
  tenantId?: string;
  /** 通知类型 */
  type?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/** NotifyTemplateResponseDTO */
export interface NotifyTemplateResponseDTO {
  /** 关联业务 */
  business?: string;
  /** 业务名称,新增编辑时候不传递 */
  businessName?: string;
  /** 主键 */
  id?: string;
  /** 模版名称 */
  name?: string;
  /** 通知服务商ID */
  provider?: string;
  /** 模版内容(根据服务商不同而不同) */
  template?: string;
  /** 通知类型 */
  type?: string;
}

/** NotifyTypeInfo */
export interface NotifyTypeInfo {
  /** 企业名称 */
  companyName?: string;
  /** 服务配置信息 */
  configEntity?: NotifyConfigEntity;
  /** 通知类型ID */
  id?: string;
  /** 是否有业务绑定 */
  isBindBusiness?: boolean;
  /** 通知类型名称 */
  name?: string;
  /** 服务商信息 */
  providerInfos?: ProviderInfo[];
}

/** ProviderInfo */
export interface ProviderInfo {
  /** 服务商ID */
  id?: string;
  /** 服务商名称 */
  name?: string;
  /** 通知类型 */
  type?: string;
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

/** SendNotifyRequest */
export interface SendNotifyRequest {
  /** 被通知者 */
  notifiedParty?: string;
  /** 通知服务商ID */
  provider?: string;
  /** 动态调试内容 */
  template?: string;
  /** 通知类型 */
  type?: string;
}

/** IPage«NoticeVO» */
export interface IPageNoticeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: NoticeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«Notification» */
export interface IPageNotification {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: Notification[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«NotifyHistoryDTO» */
export interface IPageNotifyHistoryDTO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: NotifyHistoryDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«NotifySubscriberDTO» */
export interface IPageNotifySubscriberDTO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: NotifySubscriberDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«NotifySystemVo对象» */
export interface IPageNotifySystemVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: NotifySystemVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«NotifyTemplateResponseDTO» */
export interface IPageNotifyTemplateResponseDTO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: NotifyTemplateResponseDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** NameValue«string» */
export interface NameValueString {
  name?: string;
  value?: string;
}

/**
 * NotifySystemUnreadVO对象
 * 系统通知未读信息
 */
export interface NotifySystemUnreadVO {
  /** 未读站内信列表 */
  internalList?: NotifySystemVo[];
  /** 未读公告列表 */
  noticeList?: NotifySystemVo[];
  /** 全部未读列表 */
  totalList?: NotifySystemVo[];
}

/**
 * NotifySystemVo对象
 * 通知公告表
 */
export interface NotifySystemVo {
  /** 通知消息附件 */
  attachments?: string;
  /**
   * 主题标识,如:device_alarm
   * @minLength 0
   * @maxLength 32
   */
  businessKey?: string;
  /**
   * 主题名称
   * @minLength 0
   * @maxLength 64
   */
  businessName?: string;
  /**
   * 公告类型
   * @format int32
   */
  category?: number;
  /** 公告类型名称 */
  categoryName?: string;
  /**
   * @minLength 0
   * @maxLength 1024
   */
  description?: string;
  /**
   * @minLength 0
   * @maxLength 64
   */
  id: string;
  /**
   * 通知消息内容
   * @minLength 0
   * @maxLength 65535
   */
  message?: string;
  /**
   * 通知时间
   * @format date-time
   */
  notifyTime?: string;
  /**
   * 通知类型 1站内信 2公告
   * @format int32
   */
  notifyType?: number;
  /**
   * 通知用户ID
   * @minLength 0
   * @maxLength 64
   */
  notifyUser?: string;
  /**
   * 来源Id
   * @minLength 0
   * @maxLength 64
   */
  sourceId?: string;
  /**
   * 通知状态
   * @minLength 0
   * @maxLength 32
   */
  state?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
}

/**
 * R«BusinessNotifyVO»
 * 返回信息
 */
export interface RBusinessNotifyVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BusinessNotifyVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ConfigMetadata»
 * 返回信息
 */
export interface RConfigMetadata {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ConfigMetadata;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«NoticeVO»»
 * 返回信息
 */
export interface RIPageNoticeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageNoticeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«Notification»»
 * 返回信息
 */
export interface RIPageNotification {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageNotification;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«NotifyHistoryDTO»»
 * 返回信息
 */
export interface RIPageNotifyHistoryDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageNotifyHistoryDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«NotifySubscriberDTO»»
 * 返回信息
 */
export interface RIPageNotifySubscriberDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageNotifySubscriberDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«NotifySystemVo对象»»
 * 返回信息
 */
export interface RIPageNotifySystemVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageNotifySystemVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«NotifyTemplateResponseDTO»»
 * 返回信息
 */
export interface RIPageNotifyTemplateResponseDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageNotifyTemplateResponseDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«BusinessNotifyDTO»»
 * 返回信息
 */
export interface RListBusinessNotifyDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BusinessNotifyDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«NameValue«string»»»
 * 返回信息
 */
export interface RListNameValueString {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NameValueString[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«NotifyBusinessTreeVO»»
 * 返回信息
 */
export interface RListNotifyBusinessTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifyBusinessTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«NotifyConfigDTO»»
 * 返回信息
 */
export interface RListNotifyConfigDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifyConfigDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«NotifySystemVo对象»»
 * 返回信息
 */
export interface RListNotifySystemVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifySystemVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«NotifyTypeInfo»»
 * 返回信息
 */
export interface RListNotifyTypeInfo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifyTypeInfo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProviderInfo»»
 * 返回信息
 */
export interface RListProviderInfo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProviderInfo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NoticeVO»
 * 返回信息
 */
export interface RNoticeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NoticeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Notification»
 * 返回信息
 */
export interface RNotification {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Notification;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NotifyBusinessSaveVO»
 * 返回信息
 */
export interface RNotifyBusinessSaveVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifyBusinessSaveVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NotifyConfigDTO»
 * 返回信息
 */
export interface RNotifyConfigDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifyConfigDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NotifyConfigEntity»
 * 返回信息
 */
export interface RNotifyConfigEntity {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifyConfigEntity;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NotifySettingVO»
 * 返回信息
 */
export interface RNotifySettingVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifySettingVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NotifySystemUnreadVO对象»
 * 返回信息
 */
export interface RNotifySystemUnreadVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifySystemUnreadVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NotifySystemVo对象»
 * 返回信息
 */
export interface RNotifySystemVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifySystemVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NotifyTemplateDTO»
 * 返回信息
 */
export interface RNotifyTemplateDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifyTemplateDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NotifyTemplateEntity»
 * 返回信息
 */
export interface RNotifyTemplateEntity {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NotifyTemplateEntity;
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
  bladeNotify = {
    /**
     * No description
     *
     * @tags 业务通知配置
     * @name BusinessNotifyGetBusinessNotify
     * @summary 业务通知数据
     * @request GET:/blade-notify/business-notify
     * @secure
     */
    businessNotifyGetBusinessNotify: (
      query: {
        /** businessKey */
        businessKey: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBusinessNotifyVO, void>({
        path: `/blade-notify/business-notify`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务通知配置
     * @name BusinessNotifySaveBusinessNotify
     * @summary 业务通知设置新增
     * @request POST:/blade-notify/business-notify
     * @secure
     */
    businessNotifySaveBusinessNotify: (notifyDefaultObjectVO: NotifyDefaultObjectVO, params: RequestParams = {}) =>
      this.request<RNotifySettingVO, void>({
        path: `/blade-notify/business-notify`,
        method: 'POST',
        body: notifyDefaultObjectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务通知配置
     * @name BusinessNotifyChangeStatus
     * @summary 切换状态
     * @request PUT:/blade-notify/business-notify/changeStatus
     * @secure
     */
    businessNotifyChangeStatus: (changeStatusVO: NotifyBusinessChangeStatusVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-notify/business-notify/changeStatus`,
        method: 'PUT',
        body: changeStatusVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 业务通知配置
     * @name BusinessNotifyList
     * @summary 业务通知表列表
     * @request GET:/blade-notify/business-notify/list
     * @secure
     */
    businessNotifyList: (
      query: {
        /** businessKey */
        businessKey: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListBusinessNotifyDTO, void>({
        path: `/blade-notify/business-notify/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务通知配置
     * @name BusinessNotifyModify
     * @summary 修改模板
     * @request PUT:/blade-notify/business-notify/modify
     * @secure
     */
    businessNotifyModify: (notifyTemplateEntity: NotifyTemplateEntity, params: RequestParams = {}) =>
      this.request<RNotifyTemplateEntity, void>({
        path: `/blade-notify/business-notify/modify`,
        method: 'PUT',
        body: notifyTemplateEntity,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 业务通知配置
     * @name BusinessNotifyRemove
     * @summary 业务通知表删除
     * @request DELETE:/blade-notify/business-notify/remove
     * @secure
     */
    businessNotifyRemove: (
      query: {
        /** 主键 */
        templateId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-notify/business-notify/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务通知配置
     * @name BusinessNotifyInsert
     * @summary 业务通知表新增
     * @request POST:/blade-notify/business-notify/save
     * @secure
     */
    businessNotifyInsert: (notifyBusinessVO: NotifyBusinessSaveVO, params: RequestParams = {}) =>
      this.request<RNotifyBusinessSaveVO, void>({
        path: `/blade-notify/business-notify/save`,
        method: 'POST',
        body: notifyBusinessVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务通知配置
     * @name BusinessNotifyTree
     * @summary 业务通知列表
     * @request GET:/blade-notify/business-notify/tree
     * @secure
     */
    businessNotifyTree: (params: RequestParams = {}) =>
      this.request<RListNotifyBusinessTreeVO, void>({
        path: `/blade-notify/business-notify/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入notice
     *
     * @tags 公告管理
     * @name NoticeDetail
     * @summary 详情
     * @request GET:/blade-notify/notice/detail
     * @secure
     */
    noticeDetail: (
      query?: {
        /**
         * 通知类型
         * @format int32
         */
        category?: number;
        /** 内容 */
        content?: string;
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
        /** 租户ID */
        tenantId?: string;
        /** 标题 */
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
      this.request<RNoticeVO, void>({
        path: `/blade-notify/notice/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入notice
     *
     * @tags 公告管理
     * @name NoticePage
     * @summary 分页
     * @request GET:/blade-notify/notice/page
     * @secure
     */
    noticePage: (
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
        category?: string;
        /** @format date-time */
        endDate?: string;
        keyWord?: string;
        /** @format date-time */
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageNoticeVO, void>({
        path: `/blade-notify/notice/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入notice
     *
     * @tags 公告管理
     * @name NoticeRemove
     * @summary 逻辑删除
     * @request POST:/blade-notify/notice/remove
     * @secure
     */
    noticeRemove: (
      query?: {
        /** 主键集合 */
        ids?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-notify/notice/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入notice
     *
     * @tags 公告管理
     * @name NoticeSave
     * @summary 新增
     * @request POST:/blade-notify/notice/save
     * @secure
     */
    noticeSave: (notice: NoticeAddVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-notify/notice/save`,
        method: 'POST',
        body: notice,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入notice
     *
     * @tags 公告管理
     * @name NoticeUpdate
     * @summary 修改
     * @request POST:/blade-notify/notice/update
     * @secure
     */
    noticeUpdate: (notice: NoticeUpdateVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-notify/notice/update`,
        method: 'POST',
        body: notice,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询通知记录
     *
     * @tags 系统通知管理
     * @name NotificationQueryMyNotifications
     * @summary 查询通知记录
     * @request GET:/blade-notify/notifications/query
     * @secure
     */
    notificationQueryMyNotifications: (
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
        businessKey?: string;
        businessName?: string;
        id?: string;
        message?: string;
        /** @format date-time */
        notifyTime?: string;
        subscribeId?: string;
        subscriber?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageNotification, void>({
        path: `/blade-notify/notifications/query`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 订阅通知
     *
     * @tags 系统通知管理
     * @name NotificationDoSubscribe
     * @summary 订阅通知
     * @request POST:/blade-notify/notifications/subscribe
     * @secure
     */
    notificationDoSubscribe: (subscribe: NotifySubscriberDTO, params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-notify/notifications/subscribe`,
        method: 'POST',
        body: subscribe,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除订阅
     *
     * @tags 系统通知管理
     * @name NotificationDeleteSubscription
     * @summary 删除订阅
     * @request DELETE:/blade-notify/notifications/subscription/{id}
     * @secure
     */
    notificationDeleteSubscription: (id: string, params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-notify/notifications/subscription/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 修改通知订阅状态
     *
     * @tags 系统通知管理
     * @name NotificationChangeSubscribeState
     * @summary 修改通知订阅状态
     * @request PUT:/blade-notify/notifications/subscription/{id}/{state}
     * @secure
     */
    notificationChangeSubscribeState: (id: string, state: number, params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-notify/notifications/subscription/${id}/${state}`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查询当前用户订阅信息
     *
     * @tags 系统通知管理
     * @name NotificationQuerySubscription
     * @summary 查询当前用户订阅信息
     * @request GET:/blade-notify/notifications/subscriptions/query
     * @secure
     */
    notificationQuerySubscription: (
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
      this.request<RIPageNotifySubscriberDTO, void>({
        path: `/blade-notify/notifications/subscriptions/query`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 获取通知记录
     *
     * @tags 系统通知管理
     * @name NotificationReadNotification
     * @summary 获取通知记录
     * @request GET:/blade-notify/notifications/{id}/read
     * @secure
     */
    notificationReadNotification: (id: string, params: RequestParams = {}) =>
      this.request<RNotification, void>({
        path: `/blade-notify/notifications/${id}/read`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统通知管理
     * @name NotificationChangeNotificationState
     * @summary 修改通知状态 1已读
     * @request POST:/blade-notify/notifications/{state}
     * @secure
     */
    notificationChangeNotificationState: (state: number, idList: string[], params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-notify/notifications/${state}`,
        method: 'POST',
        body: idList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入通知配置
     *
     * @tags 通知配置管理
     * @name NotifierConfigSubmit
     * @summary 新增或修改
     * @request PUT:/blade-notify/notifier/config
     * @secure
     */
    notifierConfigSubmit: (notifyConfigDTO: NotifyConfigDTO, params: RequestParams = {}) =>
      this.request<RNotifyConfigEntity, void>({
        path: `/blade-notify/notifier/config`,
        method: 'PUT',
        body: notifyConfigDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入通知类型
     *
     * @tags 通知配置管理
     * @name NotifierConfigGetAvailableNotifyConfig
     * @summary 业务通知可选的通知配置
     * @request GET:/blade-notify/notifier/config/available
     * @secure
     */
    notifierConfigGetAvailableNotifyConfig: (
      query: {
        /** notifyType */
        notifyType: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListNotifyConfigDTO, void>({
        path: `/blade-notify/notifier/config/available`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入通知配置Id
     *
     * @tags 通知配置管理
     * @name NotifierConfigDetail
     * @summary 详情
     * @request GET:/blade-notify/notifier/config/detail/{configId}
     * @secure
     */
    notifierConfigDetail: (configId: string, params: RequestParams = {}) =>
      this.request<RNotifyConfigDTO, void>({
        path: `/blade-notify/notifier/config/detail/${configId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知配置管理
     * @name NotifierConfigGetServiceList
     * @summary 服务配置列表
     * @request GET:/blade-notify/notifier/config/service-list
     * @secure
     */
    notifierConfigGetServiceList: (params: RequestParams = {}) =>
      this.request<RListNotifyTypeInfo, void>({
        path: `/blade-notify/notifier/config/service-list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知配置管理
     * @name NotifierConfigGetTypeProviders
     * @summary 获取支持的服务商
     * @request GET:/blade-notify/notifier/config/type/{type}/providers
     * @secure
     */
    notifierConfigGetTypeProviders: (type: string, params: RequestParams = {}) =>
      this.request<RListProviderInfo, void>({
        path: `/blade-notify/notifier/config/type/${type}/providers`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知配置管理
     * @name NotifierConfigGetAllNotifyTypes
     * @summary 获取平台支持的通知类型
     * @request GET:/blade-notify/notifier/config/types
     * @secure
     */
    notifierConfigGetAllNotifyTypes: (params: RequestParams = {}) =>
      this.request<RListNotifyTypeInfo, void>({
        path: `/blade-notify/notifier/config/types`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id,只允许租户所有的配置删除
     *
     * @tags 通知配置管理
     * @name NotifierConfigRemove
     * @summary 删除
     * @request DELETE:/blade-notify/notifier/config/{id}
     * @secure
     */
    notifierConfigRemove: (id: string, params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-notify/notifier/config/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description 获取指定类型和服务商所需配置定义
     *
     * @tags 通知配置管理
     * @name NotifierConfigGetAllTypes
     * @summary 获取指定类型和服务商所需配置定义
     * @request GET:/blade-notify/notifier/config/{type}/{provider}/metadata
     * @secure
     */
    notifierConfigGetAllTypes: (provider: string, type: string, params: RequestParams = {}) =>
      this.request<RConfigMetadata, void>({
        path: `/blade-notify/notifier/config/${type}/${provider}/metadata`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入模板信息
     *
     * @tags 消息通知模版
     * @name NotifierTemplateSubmit
     * @summary 新增或修改
     * @request PUT:/blade-notify/notifier/template
     * @secure
     */
    notifierTemplateSubmit: (notifyTemplateDTO: NotifyTemplateDTO, params: RequestParams = {}) =>
      this.request<RNotifyTemplateEntity, void>({
        path: `/blade-notify/notifier/template`,
        method: 'PUT',
        body: notifyTemplateDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入模板配置Id
     *
     * @tags 消息通知模版
     * @name NotifierTemplateDetail
     * @summary 详情
     * @request GET:/blade-notify/notifier/template/detail/{templateId}
     * @secure
     */
    notifierTemplateDetail: (templateId: string, params: RequestParams = {}) =>
      this.request<RNotifyTemplateDTO, void>({
        path: `/blade-notify/notifier/template/detail/${templateId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入模板
     *
     * @tags 消息通知模版
     * @name NotifierTemplateConfigPageList
     * @summary 通知模板列表
     * @request GET:/blade-notify/notifier/template/list
     * @secure
     */
    notifierTemplateConfigPageList: (
      query?: {
        /** 关联业务 */
        businessKey?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 模版名称 */
        name?: string;
        /** 通知服务商ID */
        provider?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /** 通知类型 */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageNotifyTemplateResponseDTO, void>({
        path: `/blade-notify/notifier/template/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入通知类型
     *
     * @tags 消息通知模版
     * @name NotifierTemplateGetCanUseNotifyConfig
     * @summary 业务通知可用的通知模板
     * @request GET:/blade-notify/notifier/template/select
     * @secure
     */
    notifierTemplateGetCanUseNotifyConfig: (
      query: {
        /** businessKey */
        businessKey: string;
        /** notifyId */
        notifyId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListNameValueString, void>({
        path: `/blade-notify/notifier/template/select`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 消息通知模版
     * @name NotifierTemplateRemove
     * @summary 删除
     * @request DELETE:/blade-notify/notifier/template/{id}
     * @secure
     */
    notifierTemplateRemove: (id: string, params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-notify/notifier/template/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 消息通知模版
     * @name NotifierTemplateGetAllTypes
     * @summary 获取指定类型和服务商所需模版配置定义
     * @request GET:/blade-notify/notifier/template/{type}/{provider}/config/metadata
     * @secure
     */
    notifierTemplateGetAllTypes: (provider: string, type: string, params: RequestParams = {}) =>
      this.request<RConfigMetadata, void>({
        path: `/blade-notify/notifier/template/${type}/${provider}/config/metadata`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知在线调试
     * @name NotifierSendNotify
     * @summary 发送消息通知
     * @request POST:/blade-notify/notifier/{notifierId}/send
     * @secure
     */
    notifierSendNotify: (notifierId: string, mono: SendNotifyRequest, params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-notify/notifier/${notifierId}/send`,
        method: 'POST',
        body: mono,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 通知公告表管理
     * @name NotifySystemCount
     * @summary 通知公告表统计值
     * @request GET:/blade-notify/notify-system/count
     * @secure
     */
    notifySystemCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-notify/notify-system/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入notifySystem
     *
     * @tags 通知公告表管理
     * @name NotifySystemDetail
     * @summary 通知公告表详情
     * @request GET:/blade-notify/notify-system/get/{id}
     * @secure
     */
    notifySystemDetail: (id: string, params: RequestParams = {}) =>
      this.request<RNotifySystemVo, void>({
        path: `/blade-notify/notify-system/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 通知公告表管理
     * @name NotifySystemGetUnreadList
     * @summary 获取未读通知-铃铛
     * @request GET:/blade-notify/notify-system/getUnreadList
     * @secure
     */
    notifySystemGetUnreadList: (params: RequestParams = {}) =>
      this.request<RNotifySystemUnreadVO, void>({
        path: `/blade-notify/notify-system/getUnreadList`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入notifySystemVO
     *
     * @tags 通知公告表管理
     * @name NotifySystemInsert
     * @summary 通知公告表新增
     * @request POST:/blade-notify/notify-system/insert
     * @secure
     */
    notifySystemInsert: (notifySystemVO: NotifySystemVo, params: RequestParams = {}) =>
      this.request<RNotifySystemVo, void>({
        path: `/blade-notify/notify-system/insert`,
        method: 'POST',
        body: notifySystemVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 通知公告表管理
     * @name NotifySystemList
     * @summary 通知公告表列表
     * @request GET:/blade-notify/notify-system/list
     * @secure
     */
    notifySystemList: (params: RequestParams = {}) =>
      this.request<RListNotifySystemVo, void>({
        path: `/blade-notify/notify-system/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 通知公告表管理
     * @name NotifySystemPage
     * @summary 通知公告表分页
     * @request GET:/blade-notify/notify-system/page
     * @secure
     */
    notifySystemPage: (
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
        /** @format int32 */
        category?: number;
        /** @format int32 */
        notifyType?: number;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageNotifySystemVo, void>({
        path: `/blade-notify/notify-system/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 通知公告表管理
     * @name NotifySystemRemove
     * @summary 通知公告表删除
     * @request DELETE:/blade-notify/notify-system/remove
     * @secure
     */
    notifySystemRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-notify/notify-system/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知公告表管理
     * @name NotifySystemChangeState
     * @summary 修改通知状态
     * @request POST:/blade-notify/notify-system/{state}
     * @secure
     */
    notifySystemChangeState: (state: number, idList: string[], params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-notify/notify-system/${state}`,
        method: 'POST',
        body: idList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 消息记录
     *
     * @tags 消息通知记录
     * @name NotifierHistoryConfigPageList
     * @summary 消息通知记录列表
     * @request GET:/blade-notify/notify/history/list
     * @secure
     */
    notifierHistoryConfigPageList: (
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
        /** beginTime */
        beginTime?: string;
        /** endTime */
        endTime?: string;
        /** keyword */
        keyword?: string;
        /** state */
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageNotifyHistoryDTO, void>({
        path: `/blade-notify/notify/history/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
}
