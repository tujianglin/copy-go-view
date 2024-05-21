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

/** JSONConfig */
export interface JSONConfig {
  dateFormat?: string;
  ignoreCase?: boolean;
  ignoreError?: boolean;
  ignoreNullValue?: boolean;
  order?: boolean;
}

/** JSONObject */
export type JSONObject = Record<string, object>;

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

/** SseEmitter */
export interface SseEmitter {
  timeout?: string;
}

/** T */
export type T = object;

/**
 * OuterAppConfigVo对象
 * blade_outer_app_config
 */
export interface OuterAppConfigVo {
  /**
   * 应用类型 1企业微信 2钉钉
   * @format int32
   */
  appType?: number;
  /**
   * 钉钉加解密aes_key
   * @minLength 0
   * @maxLength 255
   */
  dingAesKey?: string;
  /**
   * 钉钉应用AgentId
   * @minLength 0
   * @maxLength 255
   */
  dingAgentId?: string;
  /**
   * 钉钉应用key
   * @minLength 0
   * @maxLength 255
   */
  dingAppKey?: string;
  /**
   * 钉钉应用secret
   * @minLength 0
   * @maxLength 255
   */
  dingAppSecret?: string;
  /**
   * 钉钉回调token
   * @minLength 0
   * @maxLength 255
   */
  dingCallbackToken?: string;
  /**
   * 钉钉企业corpId
   * @minLength 0
   * @maxLength 255
   */
  dingCorpId?: string;
  /** 钉钉第三方回调域名 */
  dingDomain?: string;
  /** 第三方回调域名 */
  domain?: string;
  id?: string;
  /**
   * 上次同步时间
   * @format date-time
   */
  lastSyncTime?: string;
  /**
   * 备注/说明
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
   * 企业微信回调配置加解密aes_key
   * @minLength 0
   * @maxLength 255
   */
  wxAesKey?: string;
  /**
   * 企业微信应用的AgentId
   * @minLength 0
   * @maxLength 255
   */
  wxAgentId?: string;
  /**
   * 企业微信应用secret
   * @minLength 0
   * @maxLength 255
   */
  wxAppSecret?: string;
  /**
   * 企业微信通讯录secret
   * @minLength 0
   * @maxLength 255
   */
  wxBookSecret?: string;
  /**
   * 企业微信回调配置token
   * @minLength 0
   * @maxLength 255
   */
  wxCallbackToken?: string;
  /**
   * 企业微信企业corpId
   * @minLength 0
   * @maxLength 255
   */
  wxCorpId?: string;
  /** 企业微信第三方回调域名 */
  wxDomain?: string;
}

/**
 * R«JSONObject»
 * 返回信息
 */
export interface RJSONObject {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Record<string, object>;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«OuterAppConfigVo对象»»
 * 返回信息
 */
export interface RListOuterAppConfigVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OuterAppConfigVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OuterAppConfigVo对象»
 * 返回信息
 */
export interface ROuterAppConfigVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OuterAppConfigVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«T»
 * 返回信息
 */
export interface R_T_ {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: T;
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
 * R«立即同步结果返回VO»
 * 返回信息
 */
export interface R_VO_ {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: _VO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/** 立即同步结果返回VO */
export interface _VO {
  /** 部门同步失败原因 */
  groupReason?: string;
  /** 部门同步结果 */
  groupResult?: boolean;
  /** 职位（角色）同步失败原因 */
  postReason?: string;
  /** 职位（角色）同步结果 */
  postResult?: boolean;
  /** 用户同步失败原因 */
  userReason?: string;
  /** 用户同步结果 */
  userResult?: boolean;
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
  bladeSync = {
    /**
     * No description
     *
     * @tags 钉钉通讯录同步
     * @name DingSyncScanCodeBind
     * @summary 钉钉扫码绑定
     * @request GET:/blade-sync/ding-sync/scan
     * @secure
     */
    dingSyncScanCodeBind: (
      query: {
        /** code */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R_T_, void>({
        path: `/blade-sync/ding-sync/scan`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钉钉通讯录同步
     * @name DingSyncSync
     * @summary 钉钉立即同步
     * @request GET:/blade-sync/ding-sync/sync-immediately
     * @secure
     */
    dingSyncSync: (params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-sync/ding-sync/sync-immediately`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钉钉通讯录同步
     * @name DingSyncUnbind
     * @summary 钉钉解绑
     * @request GET:/blade-sync/ding-sync/unbind
     * @secure
     */
    dingSyncUnbind: (params: RequestParams = {}) =>
      this.request<R_T_, void>({
        path: `/blade-sync/ding-sync/unbind`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ding-event-call-back-controller
     * @name DingEventCallBackCallBack
     * @summary callBack
     * @request POST:/blade-sync/ding/dingCallback
     * @secure
     */
    dingEventCallBackCallBack: (
      json: JSONObject,
      query?: {
        /** msg_signature */
        msg_signature?: string;
        /** nonce */
        nonce?: string;
        /** timestamp */
        timestamp?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, string>, void>({
        path: `/blade-sync/ding/dingCallback`,
        method: 'POST',
        query: query,
        body: json,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags qy-wechat-event-call-back-controller
     * @name QyWechatEventCallBackCallbackVerifyUrl
     * @summary callbackVerifyUrl
     * @request GET:/blade-sync/event/callback
     * @secure
     */
    qyWechatEventCallBackCallbackVerifyUrl: (
      query?: {
        echostr?: string;
        msg_signature?: string;
        nonce?: string;
        timestamp?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/blade-sync/event/callback`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags qy-wechat-event-call-back-controller
     * @name QyWechatEventCallBackCallbackEvent
     * @summary callbackEvent
     * @request POST:/blade-sync/event/callback
     * @secure
     */
    qyWechatEventCallBackCallbackEvent: (
      xmlData: string,
      query?: {
        echostr?: string;
        msg_signature?: string;
        nonce?: string;
        timestamp?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/blade-sync/event/callback`,
        method: 'POST',
        query: query,
        body: xmlData,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方应用配置管理
     * @name OuterAppConfigGetAppStatus
     * @summary 用于首页第三方应用判断
     * @request GET:/blade-sync/outer-app-config/appStatus
     * @secure
     */
    outerAppConfigGetAppStatus: (params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-sync/outer-app-config/appStatus`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入类型
     *
     * @tags 第三方应用配置管理
     * @name OuterAppConfigDetail
     * @summary 根据类型获取配置详情
     * @request GET:/blade-sync/outer-app-config/get/{type}
     * @secure
     */
    outerAppConfigDetail: (type: number, params: RequestParams = {}) =>
      this.request<ROuterAppConfigVo, void>({
        path: `/blade-sync/outer-app-config/get/${type}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 第三方应用配置管理
     * @name OuterAppConfigList
     * @summary 应用配置列表
     * @request GET:/blade-sync/outer-app-config/list
     * @secure
     */
    outerAppConfigList: (params: RequestParams = {}) =>
      this.request<RListOuterAppConfigVo, void>({
        path: `/blade-sync/outer-app-config/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 第三方应用配置管理
     * @name OuterAppConfigRemove
     * @summary 配置删除
     * @request DELETE:/blade-sync/outer-app-config/remove
     * @secure
     */
    outerAppConfigRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-sync/outer-app-config/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入outerAppConfigVO
     *
     * @tags 第三方应用配置管理
     * @name OuterAppConfigSubmit
     * @summary 配置新增或更新
     * @request POST:/blade-sync/outer-app-config/submit
     * @secure
     */
    outerAppConfigSubmit: (outerAppConfigVO: OuterAppConfigVo, params: RequestParams = {}) =>
      this.request<R_VO_, void>({
        path: `/blade-sync/outer-app-config/submit`,
        method: 'POST',
        body: outerAppConfigVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入type类型
     *
     * @tags 第三方应用配置管理
     * @name OuterAppConfigUnbind
     * @summary 解绑应用
     * @request GET:/blade-sync/outer-app-config/unbind/{type}
     * @secure
     */
    outerAppConfigUnbind: (type: number, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-sync/outer-app-config/unbind/${type}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业微信同步相关接口
     * @name QyWechatSyncGenerateCode
     * @summary 生成二维码
     * @request GET:/blade-sync/wechat/generate
     * @secure
     */
    qyWechatSyncGenerateCode: (
      query: {
        /** clientId */
        clientId: string;
        /**
         * type
         * @format int32
         */
        type: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RJSONObject, void>({
        path: `/blade-sync/wechat/generate`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业微信同步相关接口
     * @name QyWechatSyncScanCodeBind
     * @summary 扫码绑定
     * @request GET:/blade-sync/wechat/scan
     * @secure
     */
    qyWechatSyncScanCodeBind: (
      query: {
        /** clientId */
        clientId: string;
        /** code */
        code: string;
        /** state */
        state: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-sync/wechat/scan`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业微信同步相关接口
     * @name QyWechatSyncSynchronizeOrganization
     * @summary 同步组织架构
     * @request POST:/blade-sync/wechat/sync
     * @secure
     */
    qyWechatSyncSynchronizeOrganization: (params: RequestParams = {}) =>
      this.request<R_VO_, void>({
        path: `/blade-sync/wechat/sync`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业微信同步相关接口
     * @name QyWechatSyncUnbind
     * @summary 解除员工与企业微信的绑定
     * @request GET:/blade-sync/wechat/unbind
     * @secure
     */
    qyWechatSyncUnbind: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-sync/wechat/unbind`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  sse = {
    /**
     * No description
     *
     * @tags SSE
     * @name SseEmitterCloseSseConnect
     * @summary sse关闭连接
     * @request GET:/sse/closeSseConnect
     * @secure
     */
    sseEmitterCloseSseConnect: (
      query: {
        /** clientId */
        clientId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RVoid, void>({
        path: `/sse/closeSseConnect`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SSE
     * @name SseEmitterCreateSseConnect
     * @summary sse创建连接
     * @request GET:/sse/createSseConnect
     * @secure
     */
    sseEmitterCreateSseConnect: (
      query?: {
        /** clientId */
        clientId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SseEmitter, void>({
        path: `/sse/createSseConnect`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  };
}
