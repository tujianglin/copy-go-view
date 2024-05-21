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

/** AuthConfigVO */
export interface AuthConfigVO {
  agentId?: string;
  /** @format int32 */
  appType?: number;
  appid?: string;
  corpId?: string;
  domain?: string;
}

/** Character */
export type Character = object;

/** Character_1 */
export type Character1 = object;

/** Character_2 */
export type Character2 = object;

/** Character_3 */
export type Character3 = object;

/** Character_4 */
export type Character4 = object;

/** Character_5 */
export type Character5 = object;

/** Character_6 */
export type Character6 = object;

/** Character_7 */
export type Character7 = object;

/** Character_8 */
export type Character8 = object;

/** Kv */
export type Kv = Record<string, object>;

/** Locale */
export interface Locale {
  country?: string;
  displayCountry?: string;
  displayLanguage?: string;
  displayName?: string;
  displayScript?: string;
  displayVariant?: string;
  extensionKeys?: Character8[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
}

/** Locale_1 */
export interface Locale1 {
  country?: string;
  displayCountry?: string;
  displayLanguage?: string;
  displayName?: string;
  displayScript?: string;
  displayVariant?: string;
  extensionKeys?: Character8[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
}

/** Locale_2 */
export interface Locale2 {
  country?: string;
  displayCountry?: string;
  displayLanguage?: string;
  displayName?: string;
  displayScript?: string;
  displayVariant?: string;
  extensionKeys?: Character8[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
}

/** Locale_3 */
export interface Locale3 {
  country?: string;
  displayCountry?: string;
  displayLanguage?: string;
  displayName?: string;
  displayScript?: string;
  displayVariant?: string;
  extensionKeys?: Character8[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
}

/** Locale_4 */
export interface Locale4 {
  country?: string;
  displayCountry?: string;
  displayLanguage?: string;
  displayName?: string;
  displayScript?: string;
  displayVariant?: string;
  extensionKeys?: Character8[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
}

/** Locale_5 */
export interface Locale5 {
  country?: string;
  displayCountry?: string;
  displayLanguage?: string;
  displayName?: string;
  displayScript?: string;
  displayVariant?: string;
  extensionKeys?: Character8[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
}

/** Locale_6 */
export interface Locale6 {
  country?: string;
  displayCountry?: string;
  displayLanguage?: string;
  displayName?: string;
  displayScript?: string;
  displayVariant?: string;
  extensionKeys?: Character8[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
}

/** Locale_7 */
export interface Locale7 {
  country?: string;
  displayCountry?: string;
  displayLanguage?: string;
  displayName?: string;
  displayScript?: string;
  displayVariant?: string;
  extensionKeys?: Character8[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
}

/** Locale_8 */
export interface Locale8 {
  country?: string;
  displayCountry?: string;
  displayLanguage?: string;
  displayName?: string;
  displayScript?: string;
  displayVariant?: string;
  extensionKeys?: Character8[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
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

/** SignatureResult */
export interface SignatureResult {
  appId?: string;
  jsapi_ticket?: string;
  nonceStr?: string;
  signature?: string;
  /** @format int64 */
  timestamp?: number;
}

/**
 * R«AuthConfigVO»
 * 返回信息
 */
export interface RAuthConfigVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AuthConfigVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Kv»
 * 返回信息
 */
export interface RKv {
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
 * R«SignatureResult»
 * 返回信息
 */
export interface RSignatureResult {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: SignatureResult;
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
  bladeAuth = {
    /**
     * @description 传入扫码回调code
     *
     * @tags 第三方应用扫码登录
     * @name OuterAppScanEndpointToken
     * @summary 员工钉钉扫码登录回调接口
     * @request GET:/blade-auth/ding/token
     * @secure
     */
    outerAppScanEndpointToken: (
      query: {
        /** code */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RKv, void>({
        path: `/blade-auth/ding/token`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钉钉企微微应用三方登陆
     * @name MicroAppAuthEndpointChangeAccount
     * @summary 切换员工和用户token
     * @request GET:/blade-auth/oauth/app/change-account
     * @secure
     */
    microAppAuthEndpointChangeAccount: (
      query: {
        /** 需要切换的账号类型 */
        type: 'account' | 'employee';
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-auth/oauth/app/change-account`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钉钉企微微应用三方登陆
     * @name MicroAppAuthEndpointLoginByCode
     * @summary 根据授权码登录
     * @request GET:/blade-auth/oauth/app/code-login
     * @secure
     */
    microAppAuthEndpointLoginByCode: (
      query: {
        /** code */
        code: string;
        /** source */
        source: string;
        /** state */
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RKv, void>({
        path: `/blade-auth/oauth/app/code-login`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钉钉企微微应用三方登陆
     * @name MicroAppAuthEndpointConfig
     * @summary 获取配置信息
     * @request GET:/blade-auth/oauth/app/config
     * @secure
     */
    microAppAuthEndpointConfig: (
      query?: {
        /** source */
        source?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RAuthConfigVO, void>({
        path: `/blade-auth/oauth/app/config`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钉钉企微微应用三方登陆
     * @name MicroAppAuthEndpointLoginByPassword
     * @summary 用户密码登录
     * @request GET:/blade-auth/oauth/app/login
     * @secure
     */
    microAppAuthEndpointLoginByPassword: (
      query: {
        /**
         * 应用类型 1 HMI端 2 移动端
         * @format int32
         */
        applicationType?: number;
        /** 密码 */
        password: string;
        /** 账号 */
        username: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RKv, void>({
        path: `/blade-auth/oauth/app/login`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钉钉企微微应用三方登陆
     * @name MicroAppAuthEndpointRefreshToken
     * @summary 刷新员工和账号token
     * @request GET:/blade-auth/oauth/app/refresh-token
     * @secure
     */
    microAppAuthEndpointRefreshToken: (
      query?: {
        /** 需要刷新的账号类型 */
        accountType?: 'account' | 'employee';
        /** 刷新token */
        refreshToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-auth/oauth/app/refresh-token`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钉钉企微微应用三方登陆
     * @name MicroAppAuthEndpointWeChatSign
     * @summary 企业微信获取企业签名信息
     * @request GET:/blade-auth/oauth/app/wechat-enterprise-web/sign
     * @secure
     */
    microAppAuthEndpointWeChatSign: (
      query?: {
        /** 当前网页的URL， 不包含#及其后面部分 */
        url?: string;
        /** isAgent */
        isAgent?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<RSignatureResult, void>({
        path: `/blade-auth/oauth/app/wechat-enterprise-web/sign`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointLogin
     * @summary 获取认证信息
     * @request GET:/blade-auth/oauth/callback/{source}
     * @secure
     */
    bladeSocialEndpointLogin: (
      source: string,
      query?: {
        auth_code?: string;
        authorization_code?: string;
        code?: string;
        oauth_token?: string;
        oauth_verifier?: string;
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/callback/${source}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointLogin1
     * @summary 获取认证信息
     * @request HEAD:/blade-auth/oauth/callback/{source}
     * @secure
     */
    bladeSocialEndpointLogin1: (
      source: string,
      query?: {
        auth_code?: string;
        authorization_code?: string;
        code?: string;
        oauth_token?: string;
        oauth_verifier?: string;
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/callback/${source}`,
        method: 'HEAD',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointLogin2
     * @summary 获取认证信息
     * @request POST:/blade-auth/oauth/callback/{source}
     * @secure
     */
    bladeSocialEndpointLogin2: (
      source: string,
      query?: {
        auth_code?: string;
        authorization_code?: string;
        code?: string;
        oauth_token?: string;
        oauth_verifier?: string;
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/callback/${source}`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointLogin3
     * @summary 获取认证信息
     * @request PUT:/blade-auth/oauth/callback/{source}
     * @secure
     */
    bladeSocialEndpointLogin3: (
      source: string,
      query?: {
        auth_code?: string;
        authorization_code?: string;
        code?: string;
        oauth_token?: string;
        oauth_verifier?: string;
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/callback/${source}`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointLogin5
     * @summary 获取认证信息
     * @request DELETE:/blade-auth/oauth/callback/{source}
     * @secure
     */
    bladeSocialEndpointLogin5: (
      source: string,
      query?: {
        auth_code?: string;
        authorization_code?: string;
        code?: string;
        oauth_token?: string;
        oauth_verifier?: string;
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/callback/${source}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointLogin6
     * @summary 获取认证信息
     * @request OPTIONS:/blade-auth/oauth/callback/{source}
     * @secure
     */
    bladeSocialEndpointLogin6: (
      source: string,
      query?: {
        auth_code?: string;
        authorization_code?: string;
        code?: string;
        oauth_token?: string;
        oauth_verifier?: string;
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/callback/${source}`,
        method: 'OPTIONS',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointLogin4
     * @summary 获取认证信息
     * @request PATCH:/blade-auth/oauth/callback/{source}
     * @secure
     */
    bladeSocialEndpointLogin4: (
      source: string,
      query?: {
        auth_code?: string;
        authorization_code?: string;
        code?: string;
        oauth_token?: string;
        oauth_verifier?: string;
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/callback/${source}`,
        method: 'PATCH',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 授权接口
     * @name BladeTokenEndPointCaptcha
     * @summary 获取验证码
     * @request GET:/blade-auth/oauth/captcha
     * @secure
     */
    bladeTokenEndPointCaptcha: (params: RequestParams = {}) =>
      this.request<Kv, void>({
        path: `/blade-auth/oauth/captcha`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 授权接口
     * @name BladeTokenEndPointClearCache
     * @summary 清除缓存
     * @request GET:/blade-auth/oauth/clear-cache
     * @secure
     */
    bladeTokenEndPointClearCache: (params: RequestParams = {}) =>
      this.request<Kv, void>({
        path: `/blade-auth/oauth/clear-cache`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 授权接口
     * @name BladeTokenEndPointLicenseUpload
     * @summary 过期上传系统密钥文件
     * @request POST:/blade-auth/oauth/license-upload
     * @secure
     */
    bladeTokenEndPointLicenseUpload: (
      data: {
        /**
         * file
         * @format binary
         */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-auth/oauth/license-upload`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 授权接口
     * @name BladeTokenEndPointLogout
     * @summary 退出登录
     * @request GET:/blade-auth/oauth/logout
     * @secure
     */
    bladeTokenEndPointLogout: (params: RequestParams = {}) =>
      this.request<Kv, void>({
        path: `/blade-auth/oauth/logout`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRefreshAuth
     * @summary 续期令牌
     * @request GET:/blade-auth/oauth/refresh/{source}
     * @secure
     */
    bladeSocialEndpointRefreshAuth: (
      source: string,
      query?: {
        /** token */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/refresh/${source}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRefreshAuth1
     * @summary 续期令牌
     * @request HEAD:/blade-auth/oauth/refresh/{source}
     * @secure
     */
    bladeSocialEndpointRefreshAuth1: (
      source: string,
      query?: {
        /** token */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/refresh/${source}`,
        method: 'HEAD',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRefreshAuth2
     * @summary 续期令牌
     * @request POST:/blade-auth/oauth/refresh/{source}
     * @secure
     */
    bladeSocialEndpointRefreshAuth2: (
      source: string,
      query?: {
        /** token */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/refresh/${source}`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRefreshAuth3
     * @summary 续期令牌
     * @request PUT:/blade-auth/oauth/refresh/{source}
     * @secure
     */
    bladeSocialEndpointRefreshAuth3: (
      source: string,
      query?: {
        /** token */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/refresh/${source}`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRefreshAuth5
     * @summary 续期令牌
     * @request DELETE:/blade-auth/oauth/refresh/{source}
     * @secure
     */
    bladeSocialEndpointRefreshAuth5: (
      source: string,
      query?: {
        /** token */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/refresh/${source}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRefreshAuth6
     * @summary 续期令牌
     * @request OPTIONS:/blade-auth/oauth/refresh/{source}
     * @secure
     */
    bladeSocialEndpointRefreshAuth6: (
      source: string,
      query?: {
        /** token */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/refresh/${source}`,
        method: 'OPTIONS',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRefreshAuth4
     * @summary 续期令牌
     * @request PATCH:/blade-auth/oauth/refresh/{source}
     * @secure
     */
    bladeSocialEndpointRefreshAuth4: (
      source: string,
      query?: {
        /** token */
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/refresh/${source}`,
        method: 'PATCH',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRenderAuth
     * @summary 授权完毕跳转
     * @request GET:/blade-auth/oauth/render/{source}
     * @secure
     */
    bladeSocialEndpointRenderAuth: (source: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/blade-auth/oauth/render/${source}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRevokeAuth
     * @summary 撤销授权
     * @request GET:/blade-auth/oauth/revoke/{source}/{token}
     * @secure
     */
    bladeSocialEndpointRevokeAuth: (source: string, token: string, params: RequestParams = {}) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/revoke/${source}/${token}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRevokeAuth1
     * @summary 撤销授权
     * @request HEAD:/blade-auth/oauth/revoke/{source}/{token}
     * @secure
     */
    bladeSocialEndpointRevokeAuth1: (source: string, token: string, params: RequestParams = {}) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/revoke/${source}/${token}`,
        method: 'HEAD',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRevokeAuth2
     * @summary 撤销授权
     * @request POST:/blade-auth/oauth/revoke/{source}/{token}
     * @secure
     */
    bladeSocialEndpointRevokeAuth2: (source: string, token: string, params: RequestParams = {}) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/revoke/${source}/${token}`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRevokeAuth3
     * @summary 撤销授权
     * @request PUT:/blade-auth/oauth/revoke/{source}/{token}
     * @secure
     */
    bladeSocialEndpointRevokeAuth3: (source: string, token: string, params: RequestParams = {}) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/revoke/${source}/${token}`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRevokeAuth5
     * @summary 撤销授权
     * @request DELETE:/blade-auth/oauth/revoke/{source}/{token}
     * @secure
     */
    bladeSocialEndpointRevokeAuth5: (source: string, token: string, params: RequestParams = {}) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/revoke/${source}/${token}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRevokeAuth6
     * @summary 撤销授权
     * @request OPTIONS:/blade-auth/oauth/revoke/{source}/{token}
     * @secure
     */
    bladeSocialEndpointRevokeAuth6: (source: string, token: string, params: RequestParams = {}) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/revoke/${source}/${token}`,
        method: 'OPTIONS',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方登陆端点
     * @name BladeSocialEndpointRevokeAuth4
     * @summary 撤销授权
     * @request PATCH:/blade-auth/oauth/revoke/{source}/{token}
     * @secure
     */
    bladeSocialEndpointRevokeAuth4: (source: string, token: string, params: RequestParams = {}) =>
      this.request<Character, void>({
        path: `/blade-auth/oauth/revoke/${source}/${token}`,
        method: 'PATCH',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入租户ID:tenantId,账号:account,密码:password
     *
     * @tags 授权接口
     * @name BladeTokenEndPointToken
     * @summary 获取认证令牌
     * @request POST:/blade-auth/oauth/token
     * @secure
     */
    bladeTokenEndPointToken: (
      query: {
        /** 密码 */
        password: string;
        /** 租户ID */
        tenantId: string;
        /** 账号 */
        username: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Kv, void>({
        path: `/blade-auth/oauth/token`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入扫码授权code
     *
     * @tags 第三方应用扫码登录
     * @name OuterAppScanEndpointScanLogin
     * @summary 员工企业微信扫码登录回调接口
     * @request GET:/blade-auth/qy-wechat/token
     * @secure
     */
    outerAppScanEndpointScanLogin: (
      query: {
        /** clientId */
        clientId: string;
        /** code */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RKv, void>({
        path: `/blade-auth/qy-wechat/token`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 资源类型：machine，employee; 身份; PIN码
     *
     * @tags 授权接口
     * @name ResourceTokenEndPointToken
     * @summary 获取认证令牌
     * @request POST:/blade-auth/resource/{resourceType}/token
     * @secure
     */
    resourceTokenEndPointToken: (
      resourceType: string,
      query: {
        /** PIN码 */
        password: string;
        /** 账号 */
        username: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Kv, void>({
        path: `/blade-auth/resource/${resourceType}/token`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
