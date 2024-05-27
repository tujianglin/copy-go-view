/**
 * @description: 请求方法
 */
export enum RequestHttpEnum {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}
// 数据相关
export enum RequestDataTypeEnum {
  // 静态数据
  STATIC = 0,
  // 请求数据
  AJAX = 1,
  // 数据池
  Pond = 2,
}

// 请求主体类型
export enum RequestContentTypeEnum {
  // 普通请求
  DEFAULT = 0,
  // SQL请求
  SQL = 1,
}

/**
 * @description: 请求头部类型
 */
export enum RequestBodyEnum {
  NONE = 'none',
  FORM_DATA = 'form-data',
  X_WWW_FORM_URLENCODED = 'x-www-form-urlencoded',
  JSON = 'json',
  XML = 'xml',
}

/**
 * @description: 请求间隔
 */
export enum RequestHttpIntervalEnum {
  // 秒
  SECOND = 'second',
  // 分
  MINUTE = 'minute',
  // 时
  HOUR = 'hour',
  // 天
  DAY = 'day',
}

/**
 * @description: 请求间隔名称
 */
export const SelectHttpTimeNameObj = {
  [RequestHttpIntervalEnum.SECOND]: '秒',
  [RequestHttpIntervalEnum.MINUTE]: '分',
  [RequestHttpIntervalEnum.HOUR]: '时',
  [RequestHttpIntervalEnum.DAY]: '天',
};
