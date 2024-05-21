import type { AxiosRequestConfig, AxiosResponse } from 'axios';

/** 接口返回数据类型 */
export interface Result<T = any> {
  code: number;
  success: boolean;
  msg: string;
  data: T;
}

/** 请求配置类型 */
export interface RequestOptions {
  /** 是否拼接请求 */
  joinPrefix?: boolean;
  /** 请求代理前缀 */
  urlPrefix?: string;
  /** params 是否添加时间戳 */
  joinTime?: boolean;
  /** 是否返回原始响应头 */
  isReturnNativeResponse?: boolean;
  /** 是否获取 res.data 的数据 */
  isReturnOneResponse?: boolean;
  /** 获取 res.data.data数据 */
  isTransformResponse?: boolean;
  ignoreCancelToken?: any;
}

/** 创建实例配置类型 */
export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  /** 数据处理方法 */
  transform?: AxiosTransform;
  /** 请求配置 */
  requestOptions?: RequestOptions;
}

/** 数据处理方法类 */
export abstract class AxiosTransform {
  /** 请求之前拦截 */
  requestInterceptors?: (config: AxiosRequestConfig, options: CreateAxiosOptions) => AxiosRequestConfig;
  /** 响应头数据处理 */
  transformRequestHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any;
  /** 请求之前处理config */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;
  responseInterceptorsCatch?: (axiosInstance: AxiosResponse, error: Error) => void;
}
