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

/** BatchOnWorkVO */
export interface BatchOnWorkVO {
  /** 员工id */
  employeeId?: string;
  /**
   * 上线/下线时间
   * @format date-time
   */
  time?: string;
  /**
   * 上下线类型 0-要上线 1-要下线
   * @format int32
   */
  type?: number;
  /** 工位信息 */
  works?: WorkstationBO[];
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

/** CurrWorkDetailVO */
export interface CurrWorkDetailVO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 员工编号 */
  employeeCode?: string;
  /** 员工id */
  employeeId?: string;
  /** 员工名称 */
  employeeName?: string;
  /** 主键id */
  id?: string;
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
   * 当前状态是上线还是下线 0-展示状态为上线 1-展示状态状态为下线
   * @format int32
   */
  onlineType?: number;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** CurrWorkLogVO */
export interface CurrWorkLogVO {
  /** 工位id */
  workstationId?: string;
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

/** EmployeeOnOffWorkVO */
export interface EmployeeOnOffWorkVO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 员工编号 */
  employeeCode?: string;
  /** 员工id */
  employeeId?: string;
  /** 员工名称 */
  employeeName?: string;
  /** 主键id */
  id?: string;
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
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** EmployeePerfExportVO */
export interface EmployeePerfExportVO {
  /** 员工id */
  employeeIds?: string[];
  /**
   * 结束时间
   * @format date
   */
  endTime?: string;
  /** 月 */
  months?: number[];
  /** 员工-工位查询方式 */
  perfEnum?: 'EMPLOYEE_WORK' | 'EMPLOYEE_TIME' | 'WORK_EMPLOYEE' | 'WORK_TIME';
  /**
   * 班次
   * @format int32
   */
  shift?: number;
  /**
   * 开始时间
   * @format date
   */
  startTime?: string;
  /**
   * 时间
   * @format date
   */
  time?: string;
  /** 时间查询方式 */
  timeEnum?: 'DAY' | 'WEEK' | 'MONTH' | 'SHIFT';
  /** 周 */
  weeks?: number[];
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

/** EmployeeWorkStatusVO */
export interface EmployeeWorkStatusVO {
  /** 头像 */
  avatar?: string;
  /** 工位组id */
  groupId?: string;
  /** 工位名称 */
  groupName?: string;
  /** 记录的id */
  id?: string;
  /** 已上线员工头像 */
  onEmployeeAvatar?: string;
  /** 已上线员工编号 */
  onEmployeeCode?: string;
  /** 已上线员工id */
  onEmployeeId?: string;
  /** 已上线员工名称 */
  onEmployeeName?: string;
  /**
   * 工位状态 0-未上线 1-要下线
   * @format int32
   */
  onType?: number;
  /**
   * 上线时间
   * @format date-time
   */
  onlineTime?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
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

/** HmiPerfHomeSearchVO */
export interface HmiPerfHomeSearchVO {
  /**
   * 1 全部 2 有员工登入 3 无员工登入
   * @format int32
   */
  type?: number;
  /** 登入员工可操作工位 */
  workstationIds?: string[];
}

/** HmiPerfWorkstationDetailVO */
export interface HmiPerfWorkstationDetailVO {
  /** 工位图像 */
  avatar?: string;
  /** 工位上下线记录 */
  currWorkLogs?: CurrWorkDetailVO[];
  /** 员工id */
  employeeId?: string;
  /** 员工名称 */
  employeeName?: string;
  /** 最新上线记录id */
  logId?: string;
  /** 登入时间 */
  loginTime?: string;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** OffEmployeeTreeVO */
export interface OffEmployeeTreeVO {
  /** 叶子结点的头像 */
  avatar?: string;
  children?: OffEmployeeTreeVO[];
  /** 编码 */
  code?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  isGroup?: boolean;
  /** 下线携带的日志id */
  logId?: string;
  /** 名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
}

/** OffWorkWorkstationVO */
export interface OffWorkWorkstationVO {
  /** 编码 */
  code?: string;
  /** 工位组id */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /** 主键 */
  id?: string;
  /** 下线携带的日志id */
  logId?: string;
  /** 名称 */
  name?: string;
}

/** OutputRankQueryVO */
export interface OutputRankQueryVO {
  /**
   * 结束时间
   * @format date
   */
  endDate?: string;
  /**
   * 排名
   * @format int32
   */
  rankCount?: number;
  /**
   * 开始时间
   * @format date
   */
  startDate?: string;
}

/** OutputRankVO */
export interface OutputRankVO {
  /** 员工姓名 */
  employeeName?: string;
  /**
   * 产量
   * @format int32
   */
  output?: number;
  /** 排名百分数 */
  rankValue?: string;
  /** 总产量 */
  totalOutput?: string;
  /** 工位列表 */
  workstationNames?: string[];
}

/** QueryEmployeeLogVO */
export interface QueryEmployeeLogVO {
  /** 员工id */
  employeeIds?: string[];
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 分页条件 */
  query?: TableQuery;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 工位id */
  workstationIds?: string[];
}

/** QueryWorkStatusVO */
export interface QueryWorkStatusVO {
  /** 查询类型 ALL-所有 ON-上线 OFF-下线 MY-我的 */
  queryType?: 'ALL' | 'ON' | 'OFF' | 'MY';
  /** 工位信息 */
  workstations?: WorkstationBO[];
}

/** SearchEmployeeWorkVO */
export interface SearchEmployeeWorkVO {
  /** 员工id */
  employeeId?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
}

/** SearchPerfVO */
export interface SearchPerfVO {
  /** 员工id */
  employeeId?: string;
  /**
   * 结束时间
   * @format date
   */
  endTime?: string;
  /** 月 */
  months?: number[];
  /** 员工-工位查询方式 */
  perfEnum?: 'EMPLOYEE_WORK' | 'EMPLOYEE_TIME' | 'WORK_EMPLOYEE' | 'WORK_TIME';
  /**
   * 班次
   * @format int32
   */
  shift?: number;
  /**
   * 开始时间
   * @format date
   */
  startTime?: string;
  /**
   * 时间
   * @format date
   */
  time?: string;
  /** 时间查询方式 */
  timeEnum?: 'DAY' | 'WEEK' | 'MONTH' | 'SHIFT';
  /** 周 */
  weeks?: number[];
  /** 工位id */
  workstationId?: string;
}

/** SearchWorkEmployeeVO */
export interface SearchWorkEmployeeVO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 员工id */
  workstationId?: string;
}

/**
 * TableQuery
 * 查询条件
 */
export interface TableQuery {
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
}

/** WorkstationBO */
export interface WorkstationBO {
  /** 头像 */
  avatar?: string;
  /** 工位id */
  id?: string;
  /** 记录id */
  logId?: string;
  /**
   * 工位顺序
   * @format int32
   */
  sort?: number;
  /** 工位编号 */
  workstationCode?: string;
  /** 工位名称 */
  workstationName?: string;
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

/** IPage«EmployeeOnOffWorkVO» */
export interface IPageEmployeeOnOffWorkVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: EmployeeOnOffWorkVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«OffWorkWorkstationVO» */
export interface IPageOffWorkWorkstationVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: OffWorkWorkstationVO[];
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

/** Map«string,object» */
export type MapStringObject = Record<string, object>;

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
 * R«HmiPerfWorkstationDetailVO»
 * 返回信息
 */
export interface RHmiPerfWorkstationDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiPerfWorkstationDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«EmployeeOnOffWorkVO»»
 * 返回信息
 */
export interface RIPageEmployeeOnOffWorkVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageEmployeeOnOffWorkVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«OffWorkWorkstationVO»»
 * 返回信息
 */
export interface RIPageOffWorkWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageOffWorkWorkstationVO;
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
 * R«List«CurrWorkDetailVO»»
 * 返回信息
 */
export interface RListCurrWorkDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CurrWorkDetailVO[];
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
 * R«List«EmployeeWorkStatusVO»»
 * 返回信息
 */
export interface RListEmployeeWorkStatusVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: EmployeeWorkStatusVO[];
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
 * R«List«Map«string,object»»»
 * 返回信息
 */
export interface RListMapStringObject {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MapStringObject[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«OffEmployeeTreeVO»»
 * 返回信息
 */
export interface RListOffEmployeeTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OffEmployeeTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«OutputRankVO»»
 * 返回信息
 */
export interface RListOutputRankVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OutputRankVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationBO»»
 * 返回信息
 */
export interface RListWorkstationBO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationBO[];
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
  bladePerf = {
    /**
     * No description
     *
     * @tags 员工绩效controller
     * @name EmployeePerfEmployeeWork
     * @summary 查看员工在时间范围内的上下线的工位
     * @request POST:/blade-perf/employee-perf/employee-work
     * @secure
     */
    employeePerfEmployeeWork: (vo: SearchEmployeeWorkVO, params: RequestParams = {}) =>
      this.request<RListWorkstationBO, void>({
        path: `/blade-perf/employee-perf/employee-work`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工绩效controller
     * @name EmployeePerfOutputRank
     * @summary 员工产量统计
     * @request POST:/blade-perf/employee-perf/output-rank
     * @secure
     */
    employeePerfOutputRank: (outputRankQueryVO: OutputRankQueryVO, params: RequestParams = {}) =>
      this.request<RListOutputRankVO, void>({
        path: `/blade-perf/employee-perf/output-rank`,
        method: 'POST',
        body: outputRankQueryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工绩效controller
     * @name EmployeePerfSearch
     * @summary 查看员工绩效
     * @request POST:/blade-perf/employee-perf/search-perf
     * @secure
     */
    employeePerfSearch: (vo: SearchPerfVO, params: RequestParams = {}) =>
      this.request<RListMapStringObject, void>({
        path: `/blade-perf/employee-perf/search-perf`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工绩效controller
     * @name EmployeePerfWorkEmployee
     * @summary 查看工位在时间范围内被上下线的员工
     * @request POST:/blade-perf/employee-perf/work-employee
     * @secure
     */
    employeePerfWorkEmployee: (vo: SearchWorkEmployeeVO, params: RequestParams = {}) =>
      this.request<RListEmployeeVO, void>({
        path: `/blade-perf/employee-perf/work-employee`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工绩效controller
     * @name EmployeePerfWorkEmployeeExport
     * @summary 导出员工上下线数据
     * @request POST:/blade-perf/employee-perf/work-employee-export
     * @secure
     */
    employeePerfWorkEmployeeExport: (vo: EmployeePerfExportVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-perf/employee-perf/work-employee-export`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线日志controller
     * @name EmployeeOnOffWorkLogCurrWorkLog
     * @summary 当前工位登录人员前十名
     * @request POST:/blade-perf/log/curr-work
     * @secure
     */
    employeeOnOffWorkLogCurrWorkLog: (vo: CurrWorkLogVO, params: RequestParams = {}) =>
      this.request<RListCurrWorkDetailVO, void>({
        path: `/blade-perf/log/curr-work`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线日志controller
     * @name EmployeeOnOffWorkLogQueryOnOffLog
     * @summary 查看工位日志
     * @request POST:/blade-perf/log/query
     * @secure
     */
    employeeOnOffWorkLogQueryOnOffLog: (vo: QueryEmployeeLogVO, params: RequestParams = {}) =>
      this.request<RIPageEmployeeOnOffWorkVO, void>({
        path: `/blade-perf/log/query`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkBatchOnOffWorkstation
     * @summary 批量工位上下线
     * @request POST:/blade-perf/on-off-work/batch-on-off-work
     * @secure
     */
    employeeOnOffWorkBatchOnOffWorkstation: (vo: BatchOnWorkVO, params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-perf/on-off-work/batch-on-off-work`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkCurrentEmployee
     * @summary 当前账号绑定的员工
     * @request GET:/blade-perf/on-off-work/current-employee
     * @secure
     */
    employeeOnOffWorkCurrentEmployee: (params: RequestParams = {}) =>
      this.request<REmployeeDTO, void>({
        path: `/blade-perf/on-off-work/current-employee`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkCurrentEmployeeWork
     * @summary 当前员工/其他员工已上线当前工位
     * @request POST:/blade-perf/on-off-work/current-login
     * @secure
     */
    employeeOnOffWorkCurrentEmployeeWork: (
      query: {
        /** employeeId */
        employeeId: string;
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RVoid, void>({
        path: `/blade-perf/on-off-work/current-login`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkHmiPerfLoginHome
     * @summary hmi 人员上下线 设备详细列表
     * @request POST:/blade-perf/on-off-work/hmi-perf-login-home
     * @secure
     */
    employeeOnOffWorkHmiPerfLoginHome: (hmiPerfHomeSearchVO: HmiPerfHomeSearchVO, params: RequestParams = {}) =>
      this.request<RListEmployeeWorkStatusVO, void>({
        path: `/blade-perf/on-off-work/hmi-perf-login-home`,
        method: 'POST',
        body: hmiPerfHomeSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkGetHmiPerfWorkstationDetail
     * @summary hmi 人员上下线 设备操作履历
     * @request GET:/blade-perf/on-off-work/hmi-perf-workstation-detail
     * @secure
     */
    employeeOnOffWorkGetHmiPerfWorkstationDetail: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RHmiPerfWorkstationDetailVO, void>({
        path: `/blade-perf/on-off-work/hmi-perf-workstation-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkWillOffWork
     * @summary 要下线的工位树
     * @request GET:/blade-perf/on-off-work/will-off-work
     * @secure
     */
    employeeOnOffWorkWillOffWork: (params: RequestParams = {}) =>
      this.request<RListOffEmployeeTreeVO, void>({
        path: `/blade-perf/on-off-work/will-off-work`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkWillOffWorkWorkstation
     * @summary 要下线的工位
     * @request GET:/blade-perf/on-off-work/will-off-work-workstation
     * @secure
     */
    employeeOnOffWorkWillOffWorkWorkstation: (
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
      this.request<RIPageOffWorkWorkstationVO, void>({
        path: `/blade-perf/on-off-work/will-off-work-workstation`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkWillOnWork
     * @summary 要上线的工位树
     * @request GET:/blade-perf/on-off-work/will-on-work
     * @secure
     */
    employeeOnOffWorkWillOnWork: (params: RequestParams = {}) =>
      this.request<RListGroupTreeVO, void>({
        path: `/blade-perf/on-off-work/will-on-work`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkWillOnWorkWorkstation
     * @summary 要上线的工位
     * @request GET:/blade-perf/on-off-work/will-on-work-workstation
     * @secure
     */
    employeeOnOffWorkWillOnWorkWorkstation: (
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
      this.request<RIPageWorkstationVO, void>({
        path: `/blade-perf/on-off-work/will-on-work-workstation`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 员工上下线controller
     * @name EmployeeOnOffWorkAllWorkstationStatus
     * @summary 查看工位当前上下线状态
     * @request POST:/blade-perf/on-off-work/work-status
     * @secure
     */
    employeeOnOffWorkAllWorkstationStatus: (vo: QueryWorkStatusVO, params: RequestParams = {}) =>
      this.request<RListEmployeeWorkStatusVO, void>({
        path: `/blade-perf/on-off-work/work-status`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
