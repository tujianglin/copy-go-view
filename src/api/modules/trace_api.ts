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

/** NgReasonInfoUpdateVO */
export interface NgReasonInfoUpdateVO {
  /** 组结构id */
  groupId?: string;
  /** id */
  id?: string;
  /**
   * 原因编号
   * @minLength 0
   * @maxLength 255
   */
  reasonCode?: string;
  /**
   * 原因名称
   * @minLength 0
   * @maxLength 64
   */
  reasonName?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 租户ID
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
}

/** OrderItem */
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

/** OtherWorkstationVO */
export interface OtherWorkstationVO {
  /** 批次号 */
  batchNumber?: string;
  /** 参数（暂时为空） */
  dataJson?: string;
  /**
   * 进入时间
   * @format date-time
   */
  entryTime?: string;
  /**
   * 流程标识 1 合格 2 不合格
   * @format int32
   */
  flowTag?: number;
  /**
   * 离开时间
   * @format date-time
   */
  leftTime?: string;
  /**
   * 工位类型
   * @format int32
   */
  stationType?: number;
}

/** ProParamSheetVO */
export interface ProParamSheetVO {
  /** 内容 */
  content?: string[][];
  /** 表头 */
  head?: string[];
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

/** TraceCatalogAndFlowRecordVO */
export interface TraceCatalogAndFlowRecordVO {
  /** 批次号 */
  batchNumber?: string;
  /** 流程记录 */
  flowRecordVOS?: TraceFlowRecordVo[];
  /**
   * 是否返工：0 否 1 是
   * @format int32
   */
  isReworkPart?: number;
  /**
   * 下线时间
   * @format date-time
   */
  offlineTime?: string;
  /**
   * 上线时间
   * @format date-time
   */
  onlineTime?: string;
  /** 排序规则 */
  orders?: OrderItem[];
  /** 工件编号 */
  partNo?: string;
  /**
   * 是否合格：0 否 1 是
   * @format int32
   */
  qualified?: number;
  /**
   * 班次下标
   * @format int32
   */
  shiftIndex?: number;
  /** 班次下标别名 */
  shiftIndexName?: string;
}

/** TraceCatalogSearchVO */
export interface TraceCatalogSearchVO {
  /** 选中的列表数据 */
  ids?: string[];
  /** 工件编号或批次号 */
  keywords?: string;
  /**
   * 下线结束时间
   * @format date-time
   */
  offlineEndTime?: string;
  /**
   * 下线开始时间
   * @format date-time
   */
  offlineStartTime?: string;
  /**
   * 上线结束时间
   * @format date-time
   */
  onlineEndTime?: string;
  /**
   * 上线开始时间
   * @format date-time
   */
  onlineStartTime?: string;
  /** 工位组id集合 */
  workstationGroupIds?: string[];
  /** 工位id */
  workstationId?: string;
}

/** TraceRecordNgReasonAddVO */
export interface TraceRecordNgReasonAddVO {
  /** 不良部位 */
  badPart?: string;
  /** 不良部位id */
  badPartId?: string;
  /** 原因编号 */
  reasonCode?: string;
  /** 原因编号 */
  reasonId?: string;
  /** 原因名称 */
  reasonName?: string;
  /** 工件流程记录id */
  recordId?: string;
}

/** WorkpieceTraceSearchVO */
export interface WorkpieceTraceSearchVO {
  /**
   * 结束离线时间
   * @format date-time
   */
  endTime?: string;
  /** 产线 */
  groupIds?: string[];
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键字 */
  keyword?: string;
  /**
   * 开始上线时间
   * @format date-time
   */
  startTime?: string;
  /** 工位 */
  workstationId?: string;
}

/** WorkpieceTraceVO */
export interface WorkpieceTraceVO {
  /** 批次号 */
  batchNumber?: string;
  /**
   * 下线时间
   * @format date-time
   */
  offlineTime?: string;
  /**
   * 上线时间
   * @format date-time
   */
  onlineTime?: string;
  /** 工件编号 */
  partNo?: string;
  /** 流程记录Id */
  recordId?: string;
  /** 班次名称 */
  shiftIndexName?: string;
  /** 上线记录Id */
  traceId?: string;
  /**
   * 工件状态
   * @format int32
   */
  traceStatus?: number;
  /** 工作台Id */
  workbenchId?: string;
  /** 工作台名称 */
  workbenchName?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** IPage«NgReasonInfoVo对象» */
export interface IPageNgReasonInfoVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: NgReasonInfoVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«TraceCatalogVo对象» */
export interface IPageTraceCatalogVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: TraceCatalogVo[];
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

/** IPage«TraceRecordNgReasonVo对象» */
export interface IPageTraceRecordNgReasonVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: TraceRecordNgReasonVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«WorkpieceTraceVO» */
export interface IPageWorkpieceTraceVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: WorkpieceTraceVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/**
 * NgReasonInfoVo对象
 * NG原因维护信息表
 */
export interface NgReasonInfoVo {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** ng类型名称 */
  groupName?: string;
  /** id */
  id?: string;
  /**
   * 原因编号
   * @minLength 0
   * @maxLength 255
   */
  reasonCode?: string;
  /**
   * 原因名称
   * @minLength 0
   * @maxLength 64
   */
  reasonName?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /**
   * 租户ID
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
  /** ng类型id */
  typeId?: string;
  /** 创建人 */
  username?: string;
}

/**
 * NgReasonInfoVo对象_1
 * NG原因维护信息表
 */
export interface NgReasonInfoVo1 {
  /** 组结构id */
  groupId?: string;
  /** id */
  id?: string;
  /**
   * 原因编号
   * @minLength 0
   * @maxLength 255
   */
  reasonCode?: string;
  /**
   * 原因名称
   * @minLength 0
   * @maxLength 64
   */
  reasonName?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 租户ID
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
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
 * R«IPage«NgReasonInfoVo对象»»
 * 返回信息
 */
export interface RIPageNgReasonInfoVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageNgReasonInfoVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«TraceCatalogVo对象»»
 * 返回信息
 */
export interface RIPageTraceCatalogVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageTraceCatalogVo;
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
 * R«IPage«TraceRecordNgReasonVo对象»»
 * 返回信息
 */
export interface RIPageTraceRecordNgReasonVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageTraceRecordNgReasonVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«WorkpieceTraceVO»»
 * 返回信息
 */
export interface RIPageWorkpieceTraceVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageWorkpieceTraceVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«NgReasonInfoVo对象»»
 * 返回信息
 */
export interface RListNgReasonInfoVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NgReasonInfoVo[];
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
 * R«NgReasonInfoVo对象»
 * 返回信息
 */
export interface RNgReasonInfoVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NgReasonInfoVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OtherWorkstationVO»
 * 返回信息
 */
export interface ROtherWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OtherWorkstationVO;
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
 * R«TraceCatalogAndFlowRecordVO»
 * 返回信息
 */
export interface RTraceCatalogAndFlowRecordVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TraceCatalogAndFlowRecordVO;
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
 * R«TraceRecordNgReasonVo对象»
 * 返回信息
 */
export interface RTraceRecordNgReasonVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TraceRecordNgReasonVo;
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
 * TraceCatalogVo对象
 * 工件上线记录
 */
export interface TraceCatalogVo {
  /**
   * 批次号
   * @minLength 0
   * @maxLength 50
   */
  batchNumber?: string;
  id?: string;
  /**
   * 是否返工：0 否 1 是
   * @format int32
   */
  isReworkPart?: number;
  /**
   * 下线时间
   * @format date-time
   */
  offlineTime?: string;
  /**
   * 上线时间
   * @format date-time
   */
  onlineTime?: string;
  /**
   * 工件编号
   * @minLength 0
   * @maxLength 50
   */
  partNo?: string;
  /**
   * 计划id,无计划填0
   * @format int32
   */
  planId?: number;
  /**
   * 是否合格：0 否 1 是
   * @format int32
   */
  qualified?: number;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 班次下标
   * @format int32
   */
  shiftIndex?: number;
  /**
   * 班次下标别名
   * @minLength 0
   * @maxLength 50
   */
  shiftIndexName?: string;
  /** @format int32 */
  status?: number;
  /**
   * @minLength 0
   * @maxLength 10
   */
  tenantId?: string;
  /**
   * 工件状态：1已下线  2未下线  3未知
   * @format int32
   */
  traceStatus?: number;
  /** 工位组id */
  workstationGroupId?: string;
}

/**
 * TraceFlowRecordVo对象
 * 工件流程记录
 */
export interface TraceFlowRecordVo {
  /**
   * @minLength 0
   * @maxLength 50
   */
  archiveTable?: string;
  /**
   * 进入时间
   * @format date-time
   */
  entryTime?: string;
  /**
   * 数据
   * @minLength 0
   * @maxLength 65535
   */
  extensionData?: string;
  /**
   * 流程编号
   * @minLength 0
   * @maxLength 50
   */
  flowCode?: string;
  /**
   * 流程名称
   * @minLength 0
   * @maxLength 50
   */
  flowDisplayName?: string;
  /**
   * 流程状态 1 完成  2 进行中
   * @format int32
   */
  flowState?: number;
  /**
   * 流程标签 1 质检合格 2 质检不合格
   * @format int32
   */
  flowTag?: number;
  id?: string;
  /**
   * 离开时间
   * @format date-time
   */
  leftTime?: string;
  /**
   * 1 加工设备 2 其他设备
   * @format int32
   */
  machiningOrOther?: number;
  /**
   * 工件编号
   * @minLength 0
   * @maxLength 50
   */
  partNo?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /** @format int32 */
  status?: number;
  /**
   * @minLength 0
   * @maxLength 10
   */
  tenantId?: string;
  /** 流程设定ID */
  traceFlowSettingId?: string;
  /** 工作台id */
  workbenchId?: string;
  /**
   * 工作台名称
   * @minLength 0
   * @maxLength 50
   */
  workbenchName?: string;
  /**
   * 工位编号
   * @minLength 0
   * @maxLength 50
   */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /**
   * 工位名称
   * @minLength 0
   * @maxLength 50
   */
  workstationName?: string;
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
  /** 质量责任归属到特定流程 */
  qualityMakerFlowId?: string;
  /** 质量责任归属到特定流程名称 */
  qualityMakerFlowName?: string;
  /** 按质量结果下线 */
  qualityResultOffline?: string;
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
 * TraceRecordNgReasonVo对象
 * 工件流程NG原因表
 */
export interface TraceRecordNgReasonVo {
  /** 不良部位 */
  badPart?: string;
  /** 不良部位id */
  badPartId?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 创建用户名称 */
  createUserName?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 原因编号 */
  reasonCode?: string;
  /** 原因编号 */
  reasonId?: string;
  /** 原因名称 */
  reasonName?: string;
  /** 工件流程记录id */
  recordId?: string;
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
}

/**
 * TraceRelatedWorkstationVo对象
 * 追溯关联工位
 */
export interface TraceRelatedWorkstationVo {
  /** 主键 */
  id?: string;
  /** 加工位置 */
  machiningPosition?: string;
  /** 流程设定ID */
  traceFlowSettingId?: string;
  /** 工作台id */
  workbenchId?: string;
  /** 工位台名称 */
  workbenchName?: string;
  /** 工位编码 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
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
  bladeTrace = {
    /**
     * @description 传入map
     *
     * @tags ng-reason-info
     * @name NgReasonInfoCount
     * @summary NG原因维护信息表统计值
     * @request GET:/blade-trace/ng-reason-info/count
     * @secure
     */
    ngReasonInfoCount: (params: RequestParams = {}) =>
      this.request<RInt, void>({
        path: `/blade-trace/ng-reason-info/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ngReasonInfo
     *
     * @tags ng-reason-info
     * @name NgReasonInfoDetail
     * @summary NG原因维护信息表详情
     * @request GET:/blade-trace/ng-reason-info/get/{id}
     * @secure
     */
    ngReasonInfoDetail: (id: string, params: RequestParams = {}) =>
      this.request<RNgReasonInfoVo, void>({
        path: `/blade-trace/ng-reason-info/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ngReasonInfoVO
     *
     * @tags ng-reason-info
     * @name NgReasonInfoInsert
     * @summary NG原因维护信息表新增
     * @request POST:/blade-trace/ng-reason-info/insert
     * @secure
     */
    ngReasonInfoInsert: (ngReasonInfoSubmitVO: NgReasonInfoVo1, params: RequestParams = {}) =>
      this.request<RNgReasonInfoVo, void>({
        path: `/blade-trace/ng-reason-info/insert`,
        method: 'POST',
        body: ngReasonInfoSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id和code
     *
     * @tags ng-reason-info
     * @name NgReasonInfoIsReasonCodeRepeat
     * @summary NG原因Code是否重复
     * @request GET:/blade-trace/ng-reason-info/is-code-repeat
     * @secure
     */
    ngReasonInfoIsReasonCodeRepeat: (
      query?: {
        /** code */
        code?: string;
        /** id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-trace/ng-reason-info/is-code-repeat`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags ng-reason-info
     * @name NgReasonInfoList
     * @summary NG原因维护信息表列表
     * @request GET:/blade-trace/ng-reason-info/list
     * @secure
     */
    ngReasonInfoList: (params: RequestParams = {}) =>
      this.request<RListNgReasonInfoVo, void>({
        path: `/blade-trace/ng-reason-info/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入分页参数
     *
     * @tags ng-reason-info
     * @name NgReasonInfoPage
     * @summary NG原因维护信息表分页
     * @request GET:/blade-trace/ng-reason-info/page
     * @secure
     */
    ngReasonInfoPage: (
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
        /**
         * groupId
         * @default "6"
         */
        groupId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageNgReasonInfoVo, void>({
        path: `/blade-trace/ng-reason-info/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入分页参数
     *
     * @tags ng-reason-info
     * @name NgReasonInfoPageNotUse
     * @summary NG原因维护信息表分页
     * @request GET:/blade-trace/ng-reason-info/page/not-use
     * @secure
     */
    ngReasonInfoPageNotUse: (
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
        /** recordId */
        recordId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageNgReasonInfoVo, void>({
        path: `/blade-trace/ng-reason-info/page/not-use`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags ng-reason-info
     * @name NgReasonInfoRemove
     * @summary NG原因维护信息表删除
     * @request DELETE:/blade-trace/ng-reason-info/remove
     * @secure
     */
    ngReasonInfoRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-trace/ng-reason-info/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ngReasonInfoUpdateVO
     *
     * @tags ng-reason-info
     * @name NgReasonInfoUpdate
     * @summary NG原因维护信息表修改
     * @request PUT:/blade-trace/ng-reason-info/update
     * @secure
     */
    ngReasonInfoUpdate: (ngReasonInfoUpdateVO: NgReasonInfoUpdateVO, params: RequestParams = {}) =>
      this.request<RNgReasonInfoVo, void>({
        path: `/blade-trace/ng-reason-info/update`,
        method: 'PUT',
        body: ngReasonInfoUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入searchVO
     *
     * @tags trace-catalog
     * @name TraceCatalogGetPages
     * @summary 工件上线记录分页
     * @request POST:/blade-trace/trace-catalog/page
     * @secure
     */
    traceCatalogGetPages: (
      searchVO: TraceCatalogSearchVO,
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
      this.request<RIPageTraceCatalogVo, void>({
        path: `/blade-trace/trace-catalog/page`,
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
     * @tags trace-flow-record
     * @name TraceFlowRecordExportDncLog
     * @summary 导出追溯
     * @request POST:/blade-trace/trace-flow-record/export
     * @secure
     */
    traceFlowRecordExportDncLog: (traceCatalogSearchVO: TraceCatalogSearchVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-trace/trace-flow-record/export`,
        method: 'POST',
        body: traceCatalogSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-record
     * @name TraceFlowRecordExportWorkpieceTrace
     * @summary 导出工件追溯
     * @request POST:/blade-trace/trace-flow-record/export/record-ng
     * @secure
     */
    traceFlowRecordExportWorkpieceTrace: (vo: WorkpieceTraceSearchVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-trace/trace-flow-record/export/record-ng`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-record
     * @name TraceFlowRecordOtherProcessParameter
     * @summary 其他设备类型获取工件流程记录
     * @request GET:/blade-trace/trace-flow-record/other-process-parameter
     * @secure
     */
    traceFlowRecordOtherProcessParameter: (
      query: {
        /** 加工流程id */
        id: string;
        /** 工件编号 */
        partNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ROtherWorkstationVO, void>({
        path: `/blade-trace/trace-flow-record/other-process-parameter`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-record
     * @name TraceFlowRecordWorkpieceTracePage
     * @summary 工件追溯
     * @request POST:/blade-trace/trace-flow-record/page/record-ng
     * @secure
     */
    traceFlowRecordWorkpieceTracePage: (
      vo: WorkpieceTraceSearchVO,
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
      this.request<RIPageWorkpieceTraceVO, void>({
        path: `/blade-trace/trace-flow-record/page/record-ng`,
        method: 'POST',
        query: query,
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入工件编码
     *
     * @tags trace-flow-record
     * @name TraceFlowRecordGetTraceCatalogAndFlowRecord
     * @summary 根据工件编码获取工件流程记录
     * @request GET:/blade-trace/trace-flow-record/record
     * @secure
     */
    traceFlowRecordGetTraceCatalogAndFlowRecord: (
      query: {
        /** 工件编号 */
        partNo: string;
        /** 工位id */
        workstationId?: string;
        /** orderField */
        orderField?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RTraceCatalogAndFlowRecordVO, void>({
        path: `/blade-trace/trace-flow-record/record`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-record
     * @name TraceFlowRecordProcessParameter
     * @summary 加工设备类型获取工件流程记录
     * @request GET:/blade-trace/trace-flow-record/workstation-process-parameter
     * @secure
     */
    traceFlowRecordProcessParameter: (
      query: {
        /** 加工流程id */
        id: string;
        /**
         * 班次
         * @format int32
         */
        shiftIndex: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RProParamSheetVO, void>({
        path: `/blade-trace/trace-flow-record/workstation-process-parameter`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-settings
     * @name TraceFlowSettingsChangeSort
     * @summary 改变顺序
     * @request PUT:/blade-trace/trace-flow-settings/change-sort
     * @secure
     */
    traceFlowSettingsChangeSort: (traceFlowSettingsVOList: TraceFlowSettingsVo[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-trace/trace-flow-settings/change-sort`,
        method: 'PUT',
        body: traceFlowSettingsVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入traceFlowSettings
     *
     * @tags trace-flow-settings
     * @name TraceFlowSettingsDetail
     * @summary 流程维护详情
     * @request GET:/blade-trace/trace-flow-settings/get/{id}
     * @secure
     */
    traceFlowSettingsDetail: (id: string, params: RequestParams = {}) =>
      this.request<RTraceFlowSettingsVo, void>({
        path: `/blade-trace/trace-flow-settings/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-settings
     * @name TraceFlowSettingsList
     * @summary 流程维护列表
     * @request GET:/blade-trace/trace-flow-settings/list
     * @secure
     */
    traceFlowSettingsList: (
      query: {
        /** groupId */
        groupId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListTraceFlowSettingsVo, void>({
        path: `/blade-trace/trace-flow-settings/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-flow-settings
     * @name TraceFlowSettingsPage
     * @summary 流程维护分页
     * @request GET:/blade-trace/trace-flow-settings/page
     * @secure
     */
    traceFlowSettingsPage: (
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
      params: RequestParams = {},
    ) =>
      this.request<RIPageTraceFlowSettingsVo, void>({
        path: `/blade-trace/trace-flow-settings/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags trace-flow-settings
     * @name TraceFlowSettingsRemove
     * @summary 流程维护删除
     * @request DELETE:/blade-trace/trace-flow-settings/remove
     * @secure
     */
    traceFlowSettingsRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-trace/trace-flow-settings/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入traceFlowSettingsWorkstationVO
     *
     * @tags trace-flow-settings
     * @name TraceFlowSettingsInsert
     * @summary 流程维护新增或编辑
     * @request POST:/blade-trace/trace-flow-settings/save
     * @secure
     */
    traceFlowSettingsInsert: (traceFlowSettingsWorkstationVO: TraceFlowSettingsVo1, params: RequestParams = {}) =>
      this.request<RTraceFlowSettingsVo, void>({
        path: `/blade-trace/trace-flow-settings/save`,
        method: 'POST',
        body: traceFlowSettingsWorkstationVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trace-record-ng-reason
     * @name TraceRecordNgReasonInsertReason
     * @summary 工件追溯NG原因新增
     * @request POST:/blade-trace/trace-record-ng-reason/insert
     * @secure
     */
    traceRecordNgReasonInsertReason: (vo: TraceRecordNgReasonAddVO, params: RequestParams = {}) =>
      this.request<RTraceRecordNgReasonVo, void>({
        path: `/blade-trace/trace-record-ng-reason/insert`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags trace-record-ng-reason
     * @name TraceRecordNgReasonPageReason
     * @summary 工件流程NG原因表列表
     * @request GET:/blade-trace/trace-record-ng-reason/page/{recordId}
     * @secure
     */
    traceRecordNgReasonPageReason: (
      recordId: string,
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
      this.request<RIPageTraceRecordNgReasonVo, void>({
        path: `/blade-trace/trace-record-ng-reason/page/${recordId}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
}
