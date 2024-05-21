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

/**
 * ApiScope
 * ApiScope对象
 */
export interface ApiScope {
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 接口方法类型 */
  httpMethod?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 菜单主键 */
  menuId?: string;
  /** 接口权限备注 */
  remark?: string;
  /** 资源编号 */
  resourceCode?: string;
  /** 接口权限名称 */
  scopeName?: string;
  /** 接口权限字段 */
  scopePath?: string;
  /**
   * 接口权限类型
   * @format int32
   */
  scopeType?: number;
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
 * ApiScopeVO
 * ApiScopeVO对象
 */
export interface ApiScopeVO {
  /** 控制器模块 */
  controllerCode?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 接口方法类型 */
  httpMethod?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 菜单主键 */
  menuId?: string;
  /** 接口模块 */
  moduleCode?: string;
  /** 接口权限备注 */
  remark?: string;
  /** 资源编号 */
  resourceCode?: string;
  /** 接口权限名称 */
  scopeName?: string;
  /** 接口权限字段 */
  scopePath?: string;
  /**
   * 接口权限类型
   * @format int32
   */
  scopeType?: number;
  scopeTypeName?: string;
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

/** ApplicationAddDTO */
export interface ApplicationAddDTO {
  /** 应用系统背景 */
  backgroundUrl?: string;
  /** 应用编码 */
  code?: string;
  /** 应用系统访问域名 */
  domain?: string;
  /**
   * 是否显示: 1显示 2关闭
   * @format int32
   */
  isShow?: number;
  /** 应用Logo */
  logo?: string;
  /** 应用名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

/** ApplicationDTO */
export interface ApplicationDTO {
  /** 应用系统背景 */
  backgroundUrl?: string;
  /** 应用编码 */
  code?: string;
  /** 应用系统访问域名 */
  domain?: string;
  /** 主键 */
  id?: string;
  /**
   * 是否显示: 1显示 2关闭
   * @format int32
   */
  isShow?: number;
  /** 应用Logo */
  logo?: string;
  /** 应用名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

/** ApplicationUpdateDTO */
export interface ApplicationUpdateDTO {
  /** 应用系统背景 */
  backgroundUrl?: string;
  /** 应用系统访问域名 */
  domain?: string;
  /** 主键 */
  id?: string;
  /**
   * 是否显示: 1显示 2关闭
   * @format int32
   */
  isShow?: number;
  /** 应用Logo */
  logo?: string;
  /** 应用名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

/**
 * Attach
 * 附件表
 */
export interface Attach {
  /** 附件大小 */
  attachSize?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 附件域名 */
  domainName?: string;
  /** 附件拓展名 */
  extension?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 附件地址 */
  link?: string;
  /** 附件名称 */
  name?: string;
  /** 附件原名 */
  originalName?: string;
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
 * AttachVO
 * 附件表
 */
export interface AttachVO {
  /** 附件大小 */
  attachSize?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 附件域名 */
  domainName?: string;
  /** 附件拓展名 */
  extension?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 附件地址 */
  link?: string;
  /** 附件名称 */
  name?: string;
  /** 附件原名 */
  originalName?: string;
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

/** AuthClientDetailDTO */
export interface AuthClientDetailDTO {
  /**
   * 令牌过期秒数
   * @format int32
   */
  accessTokenValidity?: number;
  /** 客户端id */
  clientId?: string;
  /**
   * 刷新令牌过期秒数
   * @format int32
   */
  refreshTokenValidity?: number;
}

/**
 * BasCodeRule
 * 编码规则
 */
export interface BasCodeRule {
  /** 自动补号 */
  autoBillno?: boolean;
  /** 业务对象 */
  billFormId?: string;
  /** 是否是固定的流水号位数 */
  constLength?: boolean;
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
  /** 规则名称 */
  name?: string;
  /** 默认一 */
  preview?: string;
  /** 编码规则描述 */
  remark?: string;
  /** 手动补号 */
  repairBillno?: boolean;
  /** 绑定的规则分类字段的字典值 */
  ruleFieldDictKey?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 系统预设，是否启用 */
  systemDefault?: boolean;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/**
 * BasCodeRuleEntry
 * 编码规则明细
 */
export interface BasCodeRuleEntry {
  /** 补位符 */
  addChar?: string;
  /** 右侧填充 */
  addStyle?: boolean;
  /** 编码元素 */
  codeElement?: boolean;
  /** 编码依据 */
  codeOnlyBy?: boolean;
  /** 右侧截断 */
  cutStyle?: boolean;
  /** 元素来源 */
  elementSource?: string;
  /**
   * 元素类型
   * @format int32
   */
  elementType?: number;
  /** 设置值 */
  elementValue?: string;
  /** 格式 */
  format?: string;
  /** 主键 */
  id?: string;
  /**
   * 步长
   * @format int32
   */
  incrementStep?: number;
  /**
   * 长度
   * @format int32
   */
  length?: number;
  /** 替代符 */
  reChar?: string;
  /** 编码规则id */
  ruleId?: string;
  /**
   * 起始值
   * @format int32
   */
  seed?: number;
  /** 分隔符 */
  separatorChar?: string;
  /**
   * 序号
   * @format int32
   */
  seq?: number;
  /**
   * 来源属性
   * @format int32
   */
  sourceProperty?: number;
}

/** BasCoderuleDTO */
export interface BasCoderuleDTO {
  /** 自动补号 */
  autoBillno?: boolean;
  /** 业务对象 */
  billFormId?: string;
  /** 是否是固定的流水号位数 */
  constLength?: boolean;
  /** 编码规则明细 */
  entryList?: BasCodeRuleEntry[];
  /** 主键 */
  id?: string;
  /** 规则名称 */
  name?: string;
  preview?: string;
  /** 编码规则描述 */
  remark?: string;
  /** 手动补号 */
  repairBillno?: boolean;
  ruleFieldDictKey?: string;
  /** 系统预设 */
  systemDefault?: boolean;
}

/** BatchEnableAccountVO */
export interface BatchEnableAccountVO {
  /** 部门id，多个部门逗号隔开 */
  deptId: string;
  /**
   * 员工
   * @maxItems 2147483647
   * @minItems 1
   */
  employeeIds: string[];
  /** 角色id，多个角色逗号隔开 */
  roleId: string;
}

/** BindPostAndAppVO */
export interface BindPostAndAppVO {
  /** 岗位id */
  postId?: string;
  /** 菜单集合 */
  postMenuVOList?: PostMenuVO[];
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

/** Character */
export type Character = object;

/** Character_1 */
export type Character1 = object;

/** CheckedTreeVO */
export interface CheckedTreeVO {
  apiScope?: string[];
  card?: string[];
  dataScope?: string[];
  menu?: string[];
}

/**
 * Client
 * Client对象
 */
export interface Client {
  /**
   * 令牌过期秒数
   * @format int32
   */
  accessTokenValidity?: number;
  /** 权限 */
  authorities?: string;
  /** 授权类型 */
  authorizedGrantTypes?: string;
  /** 自动授权 */
  autoapprove?: string;
  /** 客户端id */
  clientId?: string;
  /** 客户端密钥 */
  clientSecret?: string;
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
   * 刷新令牌过期秒数
   * @format int32
   */
  refreshTokenValidity?: number;
  /** 资源集合 */
  resourceIds?: string;
  /** 授权范围 */
  scope?: string;
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
  /** 回调地址 */
  webServerRedirectUri?: string;
}

/**
 * CustomConditionFieldInfoVO
 * 查询字段信息VO
 */
export interface CustomConditionFieldInfoVO {
  /** 字段编号 */
  fieldCode?: string;
  /** 描述提示文字 */
  fieldDescription?: string;
  /** 字段id */
  fieldId?: string;
  /** 字段名称 */
  fieldName?: string;
  /**
   * 查询字段排序
   * @format int32
   */
  querySort?: number;
  /**
   * 当前是否勾选排序
   * @format int32
   */
  querySupport?: number;
  /** 关系表id */
  relationId?: string;
  /**
   * 是否是系统字段 1是 0否
   * @format int32
   */
  systemField?: number;
}

/**
 * CustomConditionFieldsSubmitVO
 * 提交自定义查询条件字段与导入条件提交VO
 */
export interface CustomConditionFieldsSubmitVO {
  /**
   * 业务类型
   * @format int32
   */
  businessType?: number;
  /** 提交查询时为fieldIds，提交导入时为relationIds */
  ids?: string[];
  /** 模板id */
  templateId?: string;
}

/**
 * CustomConditionFieldsVO
 * 可用的查询条件字段VO
 */
export interface CustomConditionFieldsVO {
  /** 自定义查询字段list */
  customFieldList?: CustomConditionFieldInfoVO[];
  /** 系统基础查询字段list */
  systemFieldList?: CustomConditionFieldInfoVO[];
}

/**
 * CustomFieldRelationInfoVO
 * 自定义字段关联关系VO
 */
export interface CustomFieldRelationInfoVO {
  /** 字段编码 */
  fieldCode?: string;
  /** 字段id */
  fieldId?: string;
  /** 字段名称 */
  fieldName?: string;
  /**
   * 字段类型，暂为： 1：输入框，2：数字输入框，3：多行文本，4：日期，5：单选，6：多选，7：下拉选择器，8：级联选择器
   * @format int32
   */
  fieldType?: number;
  /** 系统默认字段时编辑时字段编码 */
  modifyFieldCode?: string;
  /** 类型特有json，前后端协定 */
  propertyJson?: string;
  /** 关系表id */
  relationId?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 系统字段是否初始必填
   * @format int32
   */
  sysFieldMust?: number;
  /**
   * 是否是系统字段
   * @format int32
   */
  systemField?: number;
}

/**
 * CustomFieldRelationListVO
 * 自定义字段已配置列表VO
 */
export interface CustomFieldRelationListVO {
  /** 自定义字段list */
  customFieldList?: CustomTemplateFieldListVO[];
  /** 系统基础字段list */
  systemFieldList?: CustomTemplateFieldListVO[];
}

/**
 * CustomFieldRelationSelectVO
 * 自定义字段关联选择VO
 */
export interface CustomFieldRelationSelectVO {
  /** 自定义字段list */
  customFieldList?: CustomFieldRelationInfoVO[];
  /** 系统基础字段list */
  systemFieldList?: CustomFieldRelationInfoVO[];
}

/**
 * CustomImportFieldInfoVO
 * 导入字段信息VO
 */
export interface CustomImportFieldInfoVO {
  /** 字段编号 */
  fieldCode?: string;
  /** 字段id */
  fieldId?: string;
  /** 字段名称 */
  fieldName?: string;
  /**
   * 是否勾选导入
   * @format int32
   */
  importField?: number;
  /**
   * 导入字段排序
   * @format int32
   */
  importSort?: number;
  /**
   * 是否必填 0否 1是
   * @format int32
   */
  mustField?: number;
  /** 关系表id */
  relationId?: string;
  /** @format int32 */
  sort?: number;
  /**
   * 是否是系统字段 1是 0否
   * @format int32
   */
  systemField?: number;
}

/**
 * CustomImportFieldsVO
 * 可用的导入字段VO
 */
export interface CustomImportFieldsVO {
  /** 自定义导入字段list */
  customFieldList?: CustomImportFieldInfoVO[];
  /** 系统基础导入字段list */
  systemFieldList?: CustomImportFieldInfoVO[];
}

/** CustomTemplateFieldColumnVO */
export interface CustomTemplateFieldColumnVO {
  /** 默认值 */
  defaultValue?: string;
  /** 字段编码 */
  fieldCode?: string;
  /** 描述提示文字 */
  fieldDescription?: string;
  /** 字段id */
  fieldId?: string;
  /** 字段名 */
  fieldName?: string;
  /**
   * 字段类型（中文），暂为： 1：输入框，2：数字输入框，3：多行文本，4：日期，5：单选，6：多选，7：下拉选择器，8：级联选择器
   * @format int32
   */
  fieldType?: number;
  /** 系统默认字段时编辑时字段编码 */
  modifyFieldCode?: string;
  /**
   * 字段内容是否必填
   * @format int32
   */
  mustField?: number;
  /** 选项值字段列表 */
  optionList?: CustomTemplateFieldOption[];
  /** 类型特有json，前后端协定 */
  propertyJson?: string;
  /** 系统默认字段时查询字段编码 */
  queryFieldCode?: string;
  /** 前端展示区域(多个值,分割) 1-n 需要前端协商 */
  showType?: string;
  /**
   * 是否支持导出
   * @format int32
   */
  supportExport?: number;
  /**
   * 字段本身是否支持查询
   * @format int32
   */
  supportQuery?: number;
  /**
   * 是否支持编辑
   * @format int32
   */
  supportUpdate?: number;
  /**
   * 系统字段是否初始必填
   * @format int32
   */
  sysFieldMust?: number;
  /**
   * 是否是系统字段
   * @format int32
   */
  systemField?: number;
  /** 模版id */
  templateId?: string;
  /** 模版名称 */
  templateName?: string;
}

/** CustomTemplateFieldUpdateVO */
export interface CustomTemplateFieldUpdateVO {
  /**
   * 业务类型 1：计划工单，2：产品
   * @format int32
   */
  businessType?: number;
  /**
   * 描述提示文字
   * @minLength 0
   * @maxLength 255
   */
  fieldDescription?: string;
  /**
   * 字段名
   * @minLength 0
   * @maxLength 32
   */
  fieldName?: string;
  /**
   * 字段类型，暂为： 1：输入框，2：数字输入框，3：多行文本，4：日期，5：单选，6：多选，7：下拉选择器，8：级联选择器，9：业务字段-人员，10：系统默认
   * @format int32
   */
  fieldType?: number;
  /** 主键id */
  id?: string;
  /**
   * 是否支持查询
   * @format int32
   */
  supportQuery?: number;
  /**
   * 是否支持编辑
   * @format int32
   */
  supportUpdate?: number;
  /**
   * 是否是系统字段
   * @format int32
   */
  systemField?: number;
  /**
   * 是否编辑页展示
   * @format int32
   */
  updateShow?: number;
  /**
   * 是否查看页展示
   * @format int32
   */
  viewShow?: number;
}

/**
 * DataScope
 * DataScope对象
 */
export interface DataScope {
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
  /** 菜单主键 */
  menuId?: string;
  /** 数据权限备注 */
  remark?: string;
  /** 资源编号 */
  resourceCode?: string;
  /** 数据权限类名 */
  scopeClass?: string;
  /** 数据权限字段 */
  scopeColumn?: string;
  /** 数据权限可见字段 */
  scopeField?: string;
  /** 数据权限名称 */
  scopeName?: string;
  /**
   * 数据权限类型
   * @format int32
   */
  scopeType?: number;
  /** 数据权限值域 */
  scopeValue?: string;
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

/** DataScopeGrantVO */
export interface DataScopeGrantVO {
  /** 数据权限列表 */
  dataScopeIds?: string[];
  /** 权限ID */
  deptId?: string;
}

/**
 * DataScopeVO
 * DataScopeVO对象
 */
export interface DataScopeVO {
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
  /** 菜单主键 */
  menuId?: string;
  /** 数据权限备注 */
  remark?: string;
  /** 资源编号 */
  resourceCode?: string;
  /** 数据权限类名 */
  scopeClass?: string;
  /** 数据权限字段 */
  scopeColumn?: string;
  /** 数据权限可见字段 */
  scopeField?: string;
  /** 数据权限名称 */
  scopeName?: string;
  /**
   * 数据权限类型
   * @format int32
   */
  scopeType?: number;
  scopeTypeName?: string;
  /** 数据权限值域 */
  scopeValue?: string;
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
 * Dept
 * Dept对象
 */
export interface Dept {
  /** 祖级机构主键 */
  ancestors?: string;
  /**
   * 机构类型
   * @format int32
   */
  deptCategory?: number;
  /** 机构名 */
  deptName?: string;
  /** 机构全称 */
  fullName?: string;
  /** 主键 */
  id?: string;
  /**
   * 是否系统默认权限: 0-否，1-是
   * @format int32
   */
  isDefault?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 父主键 */
  parentId?: string;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 租户ID */
  tenantId?: string;
}

/**
 * DeptVO
 * DeptVO对象
 */
export interface DeptVO {
  /** 祖级机构主键 */
  ancestors?: string;
  children?: DeptVO[];
  /**
   * 机构类型
   * @format int32
   */
  deptCategory?: number;
  deptCategoryName?: string;
  /** 机构名 */
  deptName?: string;
  /** 机构全称 */
  fullName?: string;
  hasChildren?: boolean;
  id?: string;
  /**
   * 是否系统默认权限: 0-否，1-是
   * @format int32
   */
  isDefault?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  parentId?: string;
  parentName?: string;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 租户ID */
  tenantId?: string;
}

/** Device */
export interface Device {
  /** 设备ID */
  deviceId?: string;
  /** 设备变量 */
  deviceVariables?: object;
}

/**
 * Dict
 * Dict对象
 */
export interface Dict {
  /** 字典码 */
  code?: string;
  /** 字典值 */
  dictKey?: string;
  /** 字典名称 */
  dictValue?: string;
  /** 主键 */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 是否已封存
   * @format int32
   */
  isSealed?: number;
  /** 父主键 */
  parentId?: string;
  /** 字典备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

/**
 * DictBiz
 * DictBiz对象
 */
export interface DictBiz {
  /** 字典码 */
  code?: string;
  /** 字典值 */
  dictKey?: string;
  /** 字典名称 */
  dictValue?: string;
  /** 主键 */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 是否已封存
   * @format int32
   */
  isSealed?: number;
  /** 父主键 */
  parentId?: string;
  /** 字典备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 租户ID */
  tenantId?: string;
}

/**
 * DictBizVO
 * DictBizVO对象
 */
export interface DictBizVO {
  children?: DictBizVO[];
  /** 字典码 */
  code?: string;
  /** 字典值 */
  dictKey?: string;
  /** 字典名称 */
  dictValue?: string;
  hasChildren?: boolean;
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 是否已封存
   * @format int32
   */
  isSealed?: number;
  parentId?: string;
  parentName?: string;
  /** 字典备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 租户ID */
  tenantId?: string;
}

/**
 * DictVO
 * DictVO对象
 */
export interface DictVO {
  children?: DictVO[];
  /** 字典码 */
  code?: string;
  /** 字典值 */
  dictKey?: string;
  /** 字典名称 */
  dictValue?: string;
  hasChildren?: boolean;
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 是否已封存
   * @format int32
   */
  isSealed?: number;
  parentId?: string;
  parentName?: string;
  /** 字典备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

/**
 * EnableAccountResultVO
 * 开通账号结果视图
 */
export interface EnableAccountResultVO {
  /** 账号 */
  account?: string;
  /** 工号 */
  jobNumber?: string;
  /** 部门 */
  organizationName?: string;
  /** 密码 */
  password?: string;
  /** 手机号 */
  phone?: string;
  /** 岗位 */
  postName?: string;
  /** 姓名 */
  realName?: string;
}

/**
 * GenerateDataCleanVO
 * 清除压测数据VO
 */
export interface GenerateDataCleanVO {
  /** 业务类型 */
  busType?: number[];
  /** 选中的工位id集合 */
  workstationIds?: string[];
}

/**
 * GenerateDataVO
 * GenerateDataVO对象
 */
export interface GenerateDataVO {
  /** 压测业务： 1. 效率 2. 过程参数 */
  businessTypes?: number[];
  /** 生产日历Code */
  calendarCode?: string;
  /** 生产日历id */
  calendarId?: string;
  /**
   * 每日状态数量
   * @format int32
   */
  dayStatusNum?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   *  生成工位数量
   * @format int32
   */
  generateWorkstationNum?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 选中的工位id集合 */
  workstationIds?: string[];
  /**
   *  生成时工位模式 1. 生成工位 2. 选择已有工位
   * @format int32
   */
  workstationModal?: number;
}

/** GrantTreeVO */
export interface GrantTreeVO {
  apiScope?: MenuVO[];
  card?: TreeNode[];
  dataScope?: MenuVO[];
  menu?: TreeNode[];
}

/** GrantVO */
export interface GrantVO {
  /** apiScopeIds集合 */
  apiScopeIds?: string[];
  /** dataScopeIds集合 */
  dataScopeIds?: string[];
  /** menuIds集合 */
  menuIds?: string[];
  /** roleIds集合 */
  roleIds?: string[];
  /** topMenuIds集合 */
  topMenuIds?: string[];
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

/** HeartbeatRequest */
export interface HeartbeatRequest {
  /** 设备 */
  devices?: Device[];
  /** 产线名称 */
  productionLineName: string;
  /** 服务名称（产线） */
  serviceName: string;
}

/** HmiCreatePadDataVO */
export interface HmiCreatePadDataVO {
  /** 当前ip */
  currentIp?: string;
  /** hmi名称 */
  hmiName?: string;
  /**
   * 关联方式：1 工位 2工位组
   * @format int32
   */
  hmiType?: number;
  /** sn账号 */
  snAccount?: string;
  /** hmi关联工位组id或工位id */
  workstationIdsOrGroupIds?: string[];
}

/** HmiLoginWorkstationVO */
export interface HmiLoginWorkstationVO {
  /**
   * 程序传输方式：0-关闭，1-在线写入，2-ftp，3-串口传输
   * @format int32
   */
  transmissionMethod?: number;
  /** 工位编码 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** HmiPadWorkstationDetailVO */
export interface HmiPadWorkstationDetailVO {
  /** 工位组名称 */
  groupName?: string;
  /** 工位名称，多个工位以逗号去拼接 */
  workstationNames?: string;
}

/** HmiPadWorkstationGroupPageVO */
export interface HmiPadWorkstationGroupPageVO {
  /** 工位组id */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /** 工位编号, 逗号隔开 */
  workstationCode?: string;
  /** 工位id, 逗号隔开 */
  workstationId?: string;
  /** 工位名称, 逗号隔开 */
  workstationName?: string;
}

/** HmiPadWorkstationGroupVO */
export interface HmiPadWorkstationGroupVO {
  /** 工位组id */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /**
   * 关联方式：1 工位 2工位组
   * @format int32
   */
  hmiType?: number;
  /** id */
  id?: string;
  /** pad id */
  padId?: string;
}

/** HmiPadWorkstationVO */
export interface HmiPadWorkstationVO {
  /** 工位组id */
  groupId?: string;
  /** 工位组名称 */
  groupName?: string;
  /**
   * 关联方式：1 工位 2工位组
   * @format int32
   */
  hmiType?: number;
  /** id */
  id?: string;
  /** pad id */
  padId?: string;
  /** 工位编码 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** HmiWorkstationDncVO */
export interface HmiWorkstationDncVO {
  /** 存储空间：1 内部存储  2 以太网 */
  fileLocations?: number[];
  /**
   * 程序传输方式：0-关闭，1-在线写入，2-ftp，3-串口传输
   * @format int32
   */
  transmissionMethod?: number;
  /** 工位编码 */
  workstationCode?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/**
 * I18nDataDTO
 * 国际化信息传输对象
 */
export interface I18NDataDTO {
  /** 唯一标识 = 业务:关键词 */
  code?: string;
  id?: string;
  /** 语言标签 */
  languageTag?: string;
  /** 文本值，可以使用 { } 加角标，作为占位符 */
  message?: string;
  /** 备注 */
  remark?: string;
}

/**
 * I18nDataPageVO
 * 国际化信息分页视图对象
 */
export interface I18NDataPageVO {
  /** 国际化标识 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** ID */
  id?: string;
  /** 语言标签 */
  languageTag?: string;
  /** 文本值，可以使用 { } 加角标，作为占位符 */
  message?: string;
  /** 备注 */
  remark?: string;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
}

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
  extensionKeys?: Character1[];
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
  extensionKeys?: Character1[];
  iso3Country?: string;
  iso3Language?: string;
  language?: string;
  script?: string;
  unicodeLocaleAttributes?: string[];
  unicodeLocaleKeys?: string[];
  variant?: string;
}

/**
 * Menu
 * Menu对象
 */
export interface Menu {
  /**
   * 操作按钮类型
   * @format int32
   */
  action?: number;
  /** 菜单别名 */
  alias?: string;
  /** 所属应用,CPS:FMS:VISION */
  belongApplication?: string;
  /**
   * 菜单类型
   * @format int32
   */
  category?: number;
  /** 菜单编号 */
  code?: string;
  features?: string;
  /** 主键 */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 是否打开新页面
   * @format int32
   */
  isOpen?: number;
  /**
   * 路由缓冲
   * @format int32
   */
  keepAlive?: number;
  /** 菜单名称 */
  name?: string;
  /** 菜单父主键 */
  parentId?: string;
  /** 请求地址 */
  path?: string;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 菜单资源 */
  source?: string;
}

/**
 * MenuVO
 * MenuVO对象
 */
export interface MenuVO {
  /**
   * 操作按钮类型
   * @format int32
   */
  action?: number;
  actionName?: string;
  /** 菜单别名 */
  alias?: string;
  /** 所属应用,CPS:FMS:VISION */
  belongApplication?: string;
  /** @format int32 */
  category?: number;
  categoryName?: string;
  children?: MenuVO[];
  /** 菜单编号 */
  code?: string;
  features?: string;
  hasChildren?: boolean;
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /**
   * 是否打开新页面
   * @format int32
   */
  isOpen?: number;
  isOpenName?: string;
  /**
   * 路由缓冲
   * @format int32
   */
  keepAlive?: number;
  /** 菜单名称 */
  name?: string;
  parentId?: string;
  parentName?: string;
  /** 请求地址 */
  path?: string;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 菜单资源 */
  source?: string;
}

/**
 * MetaObjectType
 * 业务对象
 */
export interface MetaObjectType {
  /** 业务对象编码字段 */
  code?: string;
  fid?: string;
  /** 业务对象名称 */
  name?: string;
  /** 主键字段 */
  primaryKey?: string;
  /** 三方引用得代码字段 */
  refCode?: string;
  /** 三方引用得名称字段 */
  refName?: string;
  /** 业务规则字典 */
  ruleDictCode?: string;
  /** 业务规则 */
  ruleField?: string;
  /** 子系统编码 */
  subsysId?: string;
  /** 所在得物理表 */
  tableName?: string;
}

/** MetaObjectTypeDTO */
export interface MetaObjectTypeDTO {
  /** 编码字段 */
  code?: string;
  fields?: MetaObjectTypeField[];
  /** 业务对象名称 */
  name?: string;
  /** 业务对象编码 */
  objectId?: string;
  /** 主键字段 */
  primaryKey?: string;
  /** 三方引用得代码字段 */
  refCode?: string;
  /** 三方引用得名称字段 */
  refName?: string;
  /** 子系统编码 */
  subsysId?: string;
  /** 所在得物理表 */
  tableName?: string;
}

/**
 * MetaObjectTypeField
 * 业务对象字段
 */
export interface MetaObjectTypeField {
  /** 元素类型 */
  elementType?: string;
  /** 元素下拉列表时候对应的枚举类型Key */
  enumType?: string;
  fcode?: string;
  /** 数据库实体属性 */
  field?: string;
  fname?: string;
  id?: string;
  /** 所属业务对象 */
  objectId?: string;
  refObjectTypeId?: string;
  /**
   * 字段顺序
   * @format int32
   */
  seq?: number;
}

/**
 * MetaObjectTypeField_1
 * 业务对象字段
 */
export interface MetaObjectTypeField1 {
  /** 元素类型 */
  elementType?: string;
  /** 元素下拉列表时候对应的枚举类型Key */
  enumType?: string;
  fcode?: string;
  /** 数据库实体属性 */
  field?: string;
  fname?: string;
  id?: string;
  /** 所属业务对象 */
  objectId?: string;
  /**
   * 字段顺序
   * @format int32
   */
  seq?: number;
}

/** MetaRefObjectType */
export interface MetaRefObjectType {
  fieldName?: string;
  /** 主键id */
  id?: string;
  objectTypeId?: string;
  refObjectTypeId?: string;
}

/**
 * Oss
 * Oss对象
 */
export interface Oss {
  /** accessKey */
  accessKey?: string;
  /** 应用ID */
  appId?: string;
  /** 空间名 */
  bucketName?: string;
  /**
   * 所属分类
   * @format int32
   */
  category?: number;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 资源地址 */
  endpoint?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 资源编号 */
  ossCode?: string;
  /** 地域简称 */
  region?: string;
  /** 备注 */
  remark?: string;
  /** secretKey */
  secretKey?: string;
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

/** OssFile */
export interface OssFile {
  contentType?: string;
  fullLink?: string;
  hash?: string;
  /** @format int64 */
  length?: number;
  link?: string;
  name?: string;
  /** @format date-time */
  putTime?: string;
}

/**
 * OssFileVO
 * 对象存储基本信息表
 */
export interface OssFileVO {
  /** @format int64 */
  length?: number;
  link?: string;
  oriFileName?: string;
  putTimeStr?: string;
}

/**
 * OssVO
 * 对象存储表
 */
export interface OssVO {
  /** accessKey */
  accessKey?: string;
  /** 应用ID */
  appId?: string;
  /** 空间名 */
  bucketName?: string;
  /**
   * 所属分类
   * @format int32
   */
  category?: number;
  categoryName?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 资源地址 */
  endpoint?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 资源编号 */
  ossCode?: string;
  /** 地域简称 */
  region?: string;
  /** 备注 */
  remark?: string;
  /** secretKey */
  secretKey?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  statusName?: string;
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
 * Param
 * Param对象
 */
export interface Param {
  /** 所属模块 */
  belongsModule?: string;
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
  /** 参数键 */
  paramKey?: string;
  /** 参数名 */
  paramName?: string;
  /** 参数值 */
  paramValue?: string;
  /** 参数用途：默认 用户 否 1 程序 */
  personalUse?: boolean;
  /** 备注 */
  remark?: string;
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
 * ParamBiz
 * ParamBiz对象
 */
export interface ParamBiz {
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
  /** 参数键 */
  paramKey?: string;
  /** 参数名 */
  paramName?: string;
  /** 参数值 */
  paramValue?: string;
  /** 备注 */
  remark?: string;
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
  /** 用户ID */
  userId?: string;
}

/** PasswordModifyValidInfo */
export interface PasswordModifyValidInfo {
  compulsoryModify?: boolean;
  message?: string;
  /** @format int32 */
  passwordModifyType?: number;
}

/**
 * Post
 * 岗位表
 */
export interface Post {
  /**
   * 类型
   * @format int32
   */
  category?: number;
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
  /** 岗位编号 */
  postCode?: string;
  /** 岗位名称 */
  postName?: string;
  /** 岗位描述 */
  remark?: string;
  /**
   * 岗位排序
   * @format int32
   */
  sort?: number;
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

/** PostDetailVO */
export interface PostDetailVO {
  /** 主键 */
  id?: string;
  /** 岗位编号 */
  postCode?: string;
  /** 岗位名称 */
  postName?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/** PostMenuVO */
export interface PostMenuVO {
  /**
   * 应用类型：1 HMI端 2 移动端
   * @format int32
   */
  applicationType?: number;
  /** 菜单id */
  menuId?: string;
}

/** PostSelectVO */
export interface PostSelectVO {
  /** 选中的列表数据 */
  ids?: string[];
  /** 关键词：岗位编号/岗位名称 */
  keywords?: string;
  /**
   * 状态：1 启用 0 停用
   * @format int32
   */
  status?: number;
}

/**
 * PostVO
 * 岗位表
 */
export interface PostVO {
  /**
   * 类型
   * @format int32
   */
  category?: number;
  categoryName?: string;
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
  /** 岗位编号 */
  postCode?: string;
  /** 岗位名称 */
  postName?: string;
  /** 岗位描述 */
  remark?: string;
  /**
   * 岗位排序
   * @format int32
   */
  sort?: number;
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
 * Region
 * 行政区划表
 */
export interface Region {
  /** 祖区划编号 */
  ancestors?: string;
  /** 市级区划编号 */
  cityCode?: string;
  /** 市级名称 */
  cityName?: string;
  /** 区划编号 */
  code?: string;
  /** 区级区划编号 */
  districtCode?: string;
  /** 区级名称 */
  districtName?: string;
  /** 区划名称 */
  name?: string;
  /** 父区划编号 */
  parentCode?: string;
  /** 省级区划编号 */
  provinceCode?: string;
  /** 省级名称 */
  provinceName?: string;
  /**
   * 层级
   * @format int32
   */
  regionLevel?: number;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 镇级区划编号 */
  townCode?: string;
  /** 镇级名称 */
  townName?: string;
  /** 村级区划编号 */
  villageCode?: string;
  /** 村级名称 */
  villageName?: string;
}

/**
 * RegionVO
 * 行政区划表
 */
export interface RegionVO {
  /** 祖区划编号 */
  ancestors?: string;
  children?: RegionVO[];
  /** 市级区划编号 */
  cityCode?: string;
  /** 市级名称 */
  cityName?: string;
  /** 区划编号 */
  code?: string;
  /** 区级区划编号 */
  districtCode?: string;
  /** 区级名称 */
  districtName?: string;
  hasChildren?: boolean;
  id?: string;
  /** 区划名称 */
  name?: string;
  /** 父区划编号 */
  parentCode?: string;
  parentId?: string;
  parentName?: string;
  /** 省级区划编号 */
  provinceCode?: string;
  /** 省级名称 */
  provinceName?: string;
  /**
   * 层级
   * @format int32
   */
  regionLevel?: number;
  /** 备注 */
  remark?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 镇级区划编号 */
  townCode?: string;
  /** 镇级名称 */
  townName?: string;
  /** 村级区划编号 */
  villageCode?: string;
  /** 村级名称 */
  villageName?: string;
}

/** RegisterRequest */
export interface RegisterRequest {
  /** 产线名称 */
  productionLineName: string;
  /** 服务名称 */
  serviceName: string;
}

/** RelationWorkstationGroupVO */
export interface RelationWorkstationGroupVO {
  /**
   * 关联方式：1 工位 2工位组
   * @format int32
   */
  hmiType?: number;
  /** pda信息的id */
  padId?: string;
  wids?: string[];
}

/**
 * Role
 * Role对象
 */
export interface Role {
  /** 主键 */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 父主键 */
  parentId?: string;
  /** 角色别名 */
  roleAlias?: string;
  /** 角色名 */
  roleName?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 租户ID */
  tenantId?: string;
}

/** RoleIdVO */
export interface RoleIdVO {
  /** Id集合 */
  ids?: string[];
}

/**
 * RoleVO
 * RoleVO对象
 */
export interface RoleVO {
  children?: RoleVO[];
  hasChildren?: boolean;
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  parentId?: string;
  parentName?: string;
  /** 角色别名 */
  roleAlias?: string;
  /** 角色名 */
  roleName?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 租户ID */
  tenantId?: string;
}

/** TableColumn */
export interface TableColumn {
  columnComment?: string;
  columnName?: string;
}

/** TableDetail */
export interface TableDetail {
  tableColumns?: TableColumn[];
  tableComment?: string;
  tableName?: string;
}

/**
 * Tenant
 * Tenant对象
 */
export interface Tenant {
  /**
   * 账号额度
   * @format int32
   */
  accountNumber?: number;
  /** 联系地址 */
  address?: string;
  /** 系统背景 */
  backgroundUrl?: string;
  /** 租户授权码 */
  bladeLicense?: string;
  /** 联系电话 */
  contactNumber?: string;
  /** 创建部门 */
  createDept?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 数据源ID */
  datasourceId?: string;
  /** 域名地址 */
  domainName?: string;
  /**
   * 过期时间
   * @format date-time
   */
  expireTime?: string;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 授权码 */
  licenseKey?: string;
  /** 联系人 */
  linkman?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
  /** 租户名称 */
  tenantName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
}

/**
 * TopMenu
 * 顶部菜单表
 */
export interface TopMenu {
  /** 顶部菜单编号 */
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
  /** 顶部菜单名 */
  name?: string;
  /**
   * 顶部菜单排序
   * @format int32
   */
  sort?: number;
  /** 顶部菜单资源 */
  source?: string;
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

/** TreeNode */
export interface TreeNode {
  application?: string;
  /** @format int32 */
  category?: number;
  children?: TreeNode[];
  code?: string;
  features?: string;
  hasChildren?: boolean;
  id?: string;
  key?: string;
  parentId?: string;
  title?: string;
  value?: string;
}

/** User */
export interface User {
  account?: string;
  avatar?: string;
  /** @format date-time */
  birthday?: string;
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
  deptId?: string;
  email?: string;
  /** @format int32 */
  enableAccount?: number;
  /** 主键id */
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  password?: string;
  phone?: string;
  postId?: string;
  /** @format int32 */
  pwdSecurityLevel?: number;
  /** @format date-time */
  pwdUpdateDate?: string;
  pwdUpdateRecord?: string;
  realName?: string;
  roleId?: string;
  /** @format int32 */
  sex?: number;
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
  /** @format int32 */
  userType?: number;
}

/**
 * UserSimpleVO
 * UserSimpleVO对象
 */
export interface UserSimpleVO {
  account?: string;
  avatar?: string;
  code?: string;
  email?: string;
  id?: string;
  name?: string;
  phone?: string;
  realName?: string;
  roleId?: string;
}

/**
 * UserVO
 * UserVO对象
 */
export interface UserVO {
  account?: string;
  avatar?: string;
  /** @format date-time */
  birthday?: string;
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
  deptId?: string;
  deptName?: string;
  email?: string;
  /** @format int32 */
  enableAccount?: number;
  id?: string;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  phone?: string;
  postId?: string;
  postName?: string;
  /** @format int32 */
  pwdSecurityLevel?: number;
  /** @format date-time */
  pwdUpdateDate?: string;
  pwdUpdateRecord?: string;
  realName?: string;
  roleId?: string;
  roleName?: string;
  /** @format int32 */
  sex?: number;
  sexName?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
  tenantName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  userExt?: string;
  /** @format int32 */
  userType?: number;
  userTypeName?: string;
}

/**
 * Workbench
 * 工作台对象
 */
export interface Workbench {
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
   * 是否自动生成
   * @format int32
   */
  isSystem?: number;
  /** 工作台名称 */
  name?: string;
  /** 图片展示 */
  pictureLink?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
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
  /** 创建人姓名 */
  userName?: string;
}

/**
 * WorkbenchCardAddVO
 * 工作台卡片新增信息
 */
export interface WorkbenchCardAddVO {
  /** 接口API */
  apiResource?: string;
  /** 卡片Key */
  cardKey?: string;
  /** 卡片长度 */
  cardLength?: string;
  /** 卡片名称 */
  cardName?: string;
  /** 卡片宽度 */
  cardWide?: string;
  /** 文本内容 */
  textContent?: string;
  /** 工作台ID */
  workbenchId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/**
 * WorkbenchCardListAddVO
 * 工作台卡片新增信息
 */
export interface WorkbenchCardListAddVO {
  /** 工作台卡片集合 */
  workbenchCardAddVOList?: WorkbenchCardAddVO[];
  /** 工作台ID */
  workbenchId?: string;
}

/** WorkbenchCardVO */
export interface WorkbenchCardVO {
  apiResource?: string;
  cardKey?: string;
  cardLength?: string;
  /** 卡片名称 */
  cardName?: string;
  cardWide?: string;
  /** 文本内容 */
  textContent?: string;
  /** 工作台ID */
  workbenchId?: string;
  xcoordinate?: string;
  ycoordinate?: string;
}

/** WorkbenchVO */
export interface WorkbenchVO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  id?: string;
  name?: string;
  /** @format int32 */
  sort?: number;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /** 创建人姓名 */
  userName?: string;
}

/**
 * blade_i18n_data
 * 国际化信息
 */
export interface BladeI18NData {
  /** 国际化标识 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建者 */
  createUser?: string;
  /** 主键 */
  id?: string;
  /** 语言标签 */
  languageTag?: string;
  /** 文本值，可以使用 { } 加角标，作为占位符 */
  message?: string;
  /** 备注 */
  remark?: string;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新者 */
  updateUser?: string;
}

/**
 * ApplicationEmpowerVo对象
 * 岗位关联应用授权
 */
export interface ApplicationEmpowerVo {
  /**
   * 应用类型：1 HMI端 2 移动端
   * @format int32
   */
  applicationType?: number;
  id?: string;
  /** 授权菜单id */
  menuId?: string;
  /** 岗位id */
  postId?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /** @format int32 */
  status?: number;
}

/**
 * CustomTemplateFieldListVO对象
 * 自定义字段查询列表
 */
export interface CustomTemplateFieldListVO {
  /**
   * 配置类型
   * @format int32
   */
  configType?: number;
  /** 默认值 */
  defaultValue?: string;
  /** 描述提示文字 */
  fieldDescription?: string;
  /** 字段id */
  fieldId?: string;
  /** 字段名 */
  fieldName?: string;
  /** id */
  id?: string;
  /**
   * 关系中是否必填
   * @format int32
   */
  mustField?: number;
  /**
   * 是否支持查询
   * @format int32
   */
  supportQuery?: number;
  /**
   * 是否支持编辑
   * @format int32
   */
  supportUpdate?: number;
  supportUpdateLabel?: string;
  /**
   * 系统字段是否初始必填
   * @format int32
   */
  sysFieldMust?: number;
  /**
   * 是否是系统字段
   * @format int32
   */
  systemField?: number;
}

/**
 * CustomTemplateFieldOptionVo对象
 * 字段选项值表
 */
export interface CustomTemplateFieldOptionVo {
  /** 自定义字段表id */
  fieldId?: string;
  id?: string;
  /** 父节点id（级联选择器时） */
  parentId?: string;
  /**
   * 选项值
   * @minLength 0
   * @maxLength 255
   */
  value?: string;
}

/**
 * CustomTemplateFieldOption对象
 * 字段选项值表
 */
export interface CustomTemplateFieldOption {
  /** 自定义字段表id */
  fieldId?: string;
  /** 主键 */
  id?: string;
  /** 前端的选项key,特殊情况使用 */
  key?: string;
  /** 父节点id（级联选择器时） */
  parentId?: string;
  /** 选项值 */
  value?: string;
}

/**
 * CustomTemplateFieldRelationVo对象
 * 模板与字段关系表
 */
export interface CustomTemplateFieldRelationVo {
  /**
   * 配置类型 1：新建页，2：编辑页，3：查看页，4：工单，5：查询条件
   * @format int32
   */
  configType?: number;
  /** 字段id集合 */
  fieldList?: string[];
  /** 模板id */
  templateId?: string;
  /** 所属租户 */
  tenantId?: string;
}

/**
 * CustomTemplateFieldRelationVo对象_1
 * 模板与字段关系表
 */
export interface CustomTemplateFieldRelationVo1 {
  /**
   * 配置类型 1：新建页，2：编辑页，3：查看页，4：工单，5：查询条件
   * @format int32
   */
  configType?: number;
  fieldCode?: string;
  /** 字段id */
  fieldId?: string;
  /** 字段名称 */
  fieldName?: string;
  /** @format int32 */
  fieldType?: number;
  /** id */
  id?: string;
  /**
   * 是否是导入字段 0否 1是
   * @format int32
   */
  importField?: number;
  /**
   * 导入时排序
   * @format int32
   */
  importSort?: number;
  /**
   * 是否必填
   * @format int32
   */
  mustField?: number;
  propertyJson?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 状态: 1为启动，0为停用
   * @format int32
   */
  status?: number;
  /**
   * 是否为系统字段
   * @format int32
   */
  systemField?: number;
  /** 模板id */
  templateId?: string;
  /** 所属租户 */
  tenantId?: string;
}

/**
 * CustomTemplateFieldVo对象
 * 自定义字段表
 */
export interface CustomTemplateFieldVo {
  /**
   * 业务类型 1：计划工单，2：产品
   * @format int32
   */
  businessType?: number;
  /**
   * 默认值
   * @minLength 0
   * @maxLength 255
   */
  defaultValue?: string;
  /** 字段编码 */
  fieldCode?: string;
  /**
   * 描述提示文字
   * @minLength 0
   * @maxLength 255
   */
  fieldDescription?: string;
  /**
   * 字段名
   * @minLength 0
   * @maxLength 32
   */
  fieldName?: string;
  /**
   * 字段类型，暂为： 1：输入框，2：数字输入框，3：多行文本，4：日期，5：单选，6：多选，7：下拉选择器，8：级联选择器，9：业务字段-人员，10：系统默认
   * @format int32
   */
  fieldType?: number;
  /** 字段类型源数据 */
  fieldTypeLabel?: string;
  id?: string;
  /** 系统默认字段时编辑时字段编码 */
  modifyFieldCode?: string;
  /**
   * 导入是否必填
   * @format int32
   */
  mustImport?: number;
  /**
   * 类型特有json，前后端协定
   * @minLength 0
   * @maxLength 65535
   */
  propertyJson?: string;
  /** 系统默认字段时查询字段编码 */
  queryFieldCode?: string;
  /** 前端展示区域(多个值,分割) 1-n 需要前端协商 */
  showType?: string;
  /**
   * 原始字段名
   * @minLength 0
   * @maxLength 32
   */
  sourceName?: string;
  /**
   * 状态: 1为启动，0为停用
   * @format int32
   */
  status?: number;
  /**
   * 是否支持导出
   * @format int32
   */
  supportExport?: number;
  /**
   * 是否支持查询
   * @format int32
   */
  supportQuery?: number;
  /**
   * 是否支持编辑
   * @format int32
   */
  supportUpdate?: number;
  /**
   * 系统字段是否初始必填
   * @format int32
   */
  sysFieldMust?: number;
  /**
   * 是否是系统字段
   * @format int32
   */
  systemField?: number;
  /** 是/否基础字段源数据 */
  systemFieldLabel?: string;
  /** 所属租户 */
  tenantId?: string;
  /**
   * 是否编辑页展示
   * @format int32
   */
  updateShow?: number;
  /**
   * 是否查看页展示
   * @format int32
   */
  viewShow?: number;
}

/**
 * CustomTemplateFieldVo对象_1
 * 自定义字段表
 */
export interface CustomTemplateFieldVo1 {
  /**
   * 是否新增页展示
   * @format int32
   */
  addShow?: number;
  /**
   * 业务类型 1：计划工单，2：产品
   * @format int32
   */
  businessType?: number;
  /**
   * 默认值
   * @minLength 0
   * @maxLength 255
   */
  defaultValue?: string;
  /** 字段编码 */
  fieldCode?: string;
  /**
   * 描述提示文字
   * @minLength 0
   * @maxLength 255
   */
  fieldDescription?: string;
  /**
   * 字段名
   * @minLength 0
   * @maxLength 32
   */
  fieldName?: string;
  /**
   * 字段类型，暂为： 1：输入框，2：数字输入框，3：多行文本，4：日期，5：单选，6：多选，7：下拉选择器，8：级联选择器，9：业务字段-人员，10：系统默认
   * @format int32
   */
  fieldType?: number;
  /** 主键id */
  id?: string;
  /** 系统默认字段时编辑时字段编码 */
  modifyFieldCode?: string;
  /**
   * 类型特有json，前后端协定
   * @minLength 0
   * @maxLength 65535
   */
  propertyJson?: string;
  /** 系统默认字段时查询字段编码 */
  queryFieldCode?: string;
  /**
   * 是否支持查询
   * @format int32
   */
  supportQuery?: number;
  /**
   * 是否支持编辑
   * @format int32
   */
  supportUpdate?: number;
  /**
   * 是否是系统字段
   * @format int32
   */
  systemField?: number;
  /**
   * 是否编辑页展示
   * @format int32
   */
  updateShow?: number;
  /**
   * 是否查看页展示
   * @format int32
   */
  viewShow?: number;
}

/**
 * CustomTemplateVo对象
 * 自定义字段模板表
 */
export interface CustomTemplateVo {
  /** 业务类型关联的业务id */
  businessIds?: string[];
  /**
   * 业务类型 1：计划工单，2：产品
   * @format int32
   */
  businessType?: number;
  /**
   * 是否默认 1默认
   * @format int32
   */
  defaultTemplate?: number;
  id?: string;
  /** 业务类型关联的业务对象id ：在business_type为1时为产品类型id */
  relationIds?: string[];
  /**
   * 状态: 1为启动，0为停用
   * @format int32
   */
  status?: number;
  /**
   * 计划类型名称
   * @minLength 0
   * @maxLength 32
   */
  templateName?: string;
  /** 所属租户 */
  tenantId?: string;
}

/**
 * CustomTemplateVo提交对象
 * CustomTemplateVo提交对象
 */
export interface CustomTemplateVo2 {
  /**
   * 业务类型 1：计划工单，2：产品
   * @format int32
   */
  businessType?: number;
  /** 需要预置的配置类型 */
  configTypes?: number[];
  /** 需要copy的来源模板id */
  copySourceId?: string;
  id?: string;
  /** 业务类型关联的业务对象id ：在business_type为1时为产品类型id */
  relationIds?: string[];
  /**
   * 计划类型名称
   * @minLength 0
   * @maxLength 32
   */
  templateName?: string;
  /** 所属租户 */
  tenantId?: string;
}

/**
 * DmpLinkSetVo对象
 * dmp地址设置
 */
export interface DmpLinkSetVo {
  /**
   * dmp地址
   * @minLength 0
   * @maxLength 500
   */
  dmpAddress?: string;
  /**
   * dmp名称
   * @minLength 0
   * @maxLength 100
   */
  dmpName?: string;
  id?: string;
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
}

/**
 * GalleryItemVO对象
 * 图库
 */
export interface GalleryItemVO {
  /**
   * 附件拓展名
   * @minLength 0
   * @maxLength 12
   */
  extension?: string;
  /** 图库ID */
  galleryId?: string;
  /** 主键 */
  id?: string;
  /**
   * 文件地址
   * @minLength 0
   * @maxLength 1000
   */
  link?: string;
  /**
   * 名称
   * @minLength 0
   * @maxLength 64
   */
  name?: string;
  /**
   * 文件原名
   * @minLength 0
   * @maxLength 500
   */
  originalName?: string;
  /**
   * 数据状态，1启用/0停用
   * @format int32
   */
  status?: number;
  /**
   * 缩略图，base64存储
   * @minLength 0
   * @maxLength 65535
   */
  thumbnail?: string;
}

/**
 * GalleryVO对象
 * 图库
 */
export interface GalleryVO {
  /** 主键 */
  id?: string;
  /** 图库名称 */
  name?: string;
}

/**
 * GalleryVo对象
 * 图库
 */
export interface GalleryVo {
  children?: GalleryItemVO[];
  /** 主键 */
  id?: string;
  /**
   * 图库名称
   * @minLength 0
   * @maxLength 64
   */
  name?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
}

/**
 * HmiPadVo对象
 * hmiPAD信息表
 */
export interface HmiPadVo {
  /**
   * 当前ip
   * @minLength 0
   * @maxLength 80
   */
  currentIp?: string;
  /**
   * hmi名称
   * @minLength 0
   * @maxLength 50
   */
  hmiName?: string;
  /**
   * 关联方式：1 工位 2工位组
   * @format int32
   */
  hmiType?: number;
  id?: string;
  /**
   * 登入时间
   * @format date-time
   */
  loginTime?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * sn账号
   * @minLength 0
   * @maxLength 50
   */
  snAccount?: string;
  /** @format int32 */
  status?: number;
  /**
   * @minLength 0
   * @maxLength 10
   */
  tenantId?: string;
}

/** IPage«ApiScopeVO» */
export interface IPageApiScopeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ApiScopeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«AttachVO» */
export interface IPageAttachVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: AttachVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«Attach» */
export interface IPageAttach {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: Attach[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«BasCodeRule» */
export interface IPageBasCodeRule {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: BasCodeRule[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«Client» */
export interface IPageClient {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: Client[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CustomTemplateFieldOptionVo对象» */
export interface IPageCustomTemplateFieldOptionVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CustomTemplateFieldOptionVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CustomTemplateFieldRelationVo对象» */
export interface IPageCustomTemplateFieldRelationVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CustomTemplateFieldRelationVo1[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CustomTemplateFieldVo对象» */
export interface IPageCustomTemplateFieldVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CustomTemplateFieldVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«CustomTemplateVo对象» */
export interface IPageCustomTemplateVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: CustomTemplateVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DataScopeVO» */
export interface IPageDataScopeVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DataScopeVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DictBizVO» */
export interface IPageDictBizVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DictBizVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DictVO» */
export interface IPageDictVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DictVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«GalleryItemVO对象» */
export interface IPageGalleryItemVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: GalleryItemVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«GalleryVO对象» */
export interface IPageGalleryVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: GalleryVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«HmiPadWorkstationGroupPageVO» */
export interface IPageHmiPadWorkstationGroupPageVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: HmiPadWorkstationGroupPageVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«HmiPadWorkstationGroupVO» */
export interface IPageHmiPadWorkstationGroupVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: HmiPadWorkstationGroupVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«HmiPadWorkstationVO» */
export interface IPageHmiPadWorkstationVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: HmiPadWorkstationVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«I18nDataPageVO» */
export interface IPageI18NDataPageVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: I18NDataPageVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«InterfaceConfigFieldVo对象» */
export interface IPageInterfaceConfigFieldVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: InterfaceConfigFieldVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«InterfaceConfigVo对象» */
export interface IPageInterfaceConfigVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: InterfaceConfigVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MetaObjectType» */
export interface IPageMetaObjectType {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MetaObjectType[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«MetaRefObjectType» */
export interface IPageMetaRefObjectType {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: MetaRefObjectType[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«OssVO» */
export interface IPageOssVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: OssVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ParamBiz» */
export interface IPageParamBiz {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ParamBiz[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«Param» */
export interface IPageParam {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: Param[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«PostDetailVO» */
export interface IPagePostDetailVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: PostDetailVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«PostVO» */
export interface IPagePostVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: PostVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«Region» */
export interface IPageRegion {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: Region[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«ResourceDefinitionVo对象» */
export interface IPageResourceDefinitionVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: ResourceDefinitionVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«Tenant» */
export interface IPageTenant {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: Tenant[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«TopMenu» */
export interface IPageTopMenu {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: TopMenu[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«UserVO» */
export interface IPageUserVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: UserVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/**
 * InterfaceConfigFieldVo对象
 * 接口字段表
 */
export interface InterfaceConfigFieldVo {
  /** 父节点是否可选中 */
  checkedParent?: boolean;
  /** 接口配置id */
  configId?: string;
  /**
   * 当数据类型是下拉，树选择的时候指定数据源的地址。用于获取这些选项的数据。
   * @minLength 0
   * @maxLength 255
   */
  dataSource?: string;
  /**
   * 0-文本；1-数值；2-下拉；3-日期； 4-树选择
   * @format int32
   */
  dataType?: number;
  id?: string;
  /** 是否必填： 0 - 不必填; 1 - 必填 */
  isRequired?: boolean;
  /** 当下拉选择的时候指定是否单选：- 0 多选; 1 - 单选 */
  isSingleChoice?: boolean;
  /**
   * 字段描述
   * @minLength 0
   * @maxLength 255
   */
  label?: string;
  /** 请求方法 */
  method?: string;
  /**
   * 字段名称
   * @minLength 0
   * @maxLength 255
   */
  name?: string;
  /** 依赖字段 */
  relationField?: string;
  /** 依赖字段的名称 */
  relationFieldNames?: string[];
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
}

/** InterfaceConfigGroupListVO对象 */
export interface InterfaceConfigGroupListVO {
  groupList?: InterfaceConfigGroupVO[];
}

/** InterfaceConfigGroupVO对象 */
export interface InterfaceConfigGroupVO {
  bizType?: string;
  interfaceList?: InterfaceConfig[];
}

/**
 * InterfaceConfigVo对象
 * 接口配置表
 */
export interface InterfaceConfigVo {
  /**
   * 业务分类
   * @minLength 0
   * @maxLength 64
   */
  bizType?: string;
  id?: string;
  /** 父级业务类型 */
  interfaceParentBizType?: string;
  /**
   * 1 柱状折线图 2 饼图 3 甘特图 4 表格 5 仪表盘
   * @minLength 0
   * @maxLength 255
   */
  owningChart?: string;
  /**
   * 业务状态 1启用 0 停用
   * @format int32
   */
  status?: number;
  /**
   * 接口url
   * @minLength 0
   * @maxLength 255
   */
  url?: string;
  /**
   * 接口中文名
   * @minLength 0
   * @maxLength 64
   */
  urlName?: string;
  /**
   * 接口类型 0 - POST; 1 - PUT; 2 - GET
   * @format int32
   */
  urlType?: number;
}

/**
 * InterfaceConfig对象
 * 接口配置表
 */
export interface InterfaceConfig {
  /** 业务分类 */
  bizType?: string;
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
   * 父级业务类型
   * @format int32
   */
  interfaceParentBizType?: number;
  /**
   * 是否已删除
   * @format int32
   */
  isDeleted?: number;
  /** 1 柱状折线图 2 饼图 3 甘特图 4 表格 5 仪表盘 8: 单键值对 */
  owningChart?: string;
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
  /** 接口url */
  url?: string;
  /** 接口中文名 */
  urlName?: string;
  /**
   * 接口类型 0 - POST; 1 - PUT; 2 - GET; 3-ws
   * @format int32
   */
  urlType?: number;
}

/**
 * ResourceDefinitionVo对象
 * blade_resource_definition
 */
export interface ResourceDefinitionVo {
  /** 是否是菜单按钮 */
  buttonFlag?: boolean;
  /**
   * 控制器类名称
   * @minLength 0
   * @maxLength 255
   */
  className?: string;
  /**
   * 资源的标识
   * @minLength 0
   * @maxLength 255
   */
  code?: string;
  /**
   * 资源所属模块
   * @minLength 0
   * @maxLength 255
   */
  controllerCode?: string;
  /**
   * http请求方法
   * @minLength 0
   * @maxLength 255
   */
  httpMethod?: string;
  /**
   * 控制器中的方法名称
   * @minLength 0
   * @maxLength 255
   */
  methodName?: string;
  /**
   * 应用的标识
   * @minLength 0
   * @maxLength 255
   */
  moduleCode?: string;
  /**
   * 资源名称
   * @minLength 0
   * @maxLength 255
   */
  name?: string;
  /**
   * 资源的请求路径
   * @minLength 0
   * @maxLength 255
   */
  url?: string;
}

/**
 * R«ApiScope»
 * 返回信息
 */
export interface RApiScope {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ApiScope;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Attach»
 * 返回信息
 */
export interface RAttach {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Attach;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«BasCodeRule»
 * 返回信息
 */
export interface RBasCodeRule {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BasCodeRule;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«BasCoderuleDTO»
 * 返回信息
 */
export interface RBasCoderuleDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BasCoderuleDTO;
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
 * R«CheckedTreeVO»
 * 返回信息
 */
export interface RCheckedTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CheckedTreeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Client»
 * 返回信息
 */
export interface RClient {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Client;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CustomConditionFieldsVO»
 * 返回信息
 */
export interface RCustomConditionFieldsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomConditionFieldsVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CustomFieldRelationListVO»
 * 返回信息
 */
export interface RCustomFieldRelationListVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomFieldRelationListVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CustomFieldRelationSelectVO»
 * 返回信息
 */
export interface RCustomFieldRelationSelectVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomFieldRelationSelectVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CustomImportFieldsVO»
 * 返回信息
 */
export interface RCustomImportFieldsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomImportFieldsVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CustomTemplateFieldOptionVo对象»
 * 返回信息
 */
export interface RCustomTemplateFieldOptionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomTemplateFieldOptionVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CustomTemplateFieldRelationVo对象»
 * 返回信息
 */
export interface RCustomTemplateFieldRelationVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomTemplateFieldRelationVo1;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CustomTemplateFieldVo对象»
 * 返回信息
 */
export interface RCustomTemplateFieldVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomTemplateFieldVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CustomTemplateVo对象»
 * 返回信息
 */
export interface RCustomTemplateVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomTemplateVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DataScope»
 * 返回信息
 */
export interface RDataScope {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DataScope;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DeptVO»
 * 返回信息
 */
export interface RDeptVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DeptVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DictBizVO»
 * 返回信息
 */
export interface RDictBizVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DictBizVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DictVO»
 * 返回信息
 */
export interface RDictVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DictVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«GalleryItemVO对象»
 * 返回信息
 */
export interface RGalleryItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: GalleryItemVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«GalleryVO对象»
 * 返回信息
 */
export interface RGalleryVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: GalleryVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«GrantTreeVO»
 * 返回信息
 */
export interface RGrantTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: GrantTreeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«HmiPadVo对象»
 * 返回信息
 */
export interface RHmiPadVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiPadVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«HmiPadWorkstationDetailVO»
 * 返回信息
 */
export interface RHmiPadWorkstationDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiPadWorkstationDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ApiScopeVO»»
 * 返回信息
 */
export interface RIPageApiScopeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageApiScopeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«AttachVO»»
 * 返回信息
 */
export interface RIPageAttachVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAttachVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«Attach»»
 * 返回信息
 */
export interface RIPageAttach {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageAttach;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«BasCodeRule»»
 * 返回信息
 */
export interface RIPageBasCodeRule {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageBasCodeRule;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«Client»»
 * 返回信息
 */
export interface RIPageClient {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageClient;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CustomTemplateFieldOptionVo对象»»
 * 返回信息
 */
export interface RIPageCustomTemplateFieldOptionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCustomTemplateFieldOptionVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CustomTemplateFieldRelationVo对象»»
 * 返回信息
 */
export interface RIPageCustomTemplateFieldRelationVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCustomTemplateFieldRelationVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CustomTemplateFieldVo对象»»
 * 返回信息
 */
export interface RIPageCustomTemplateFieldVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCustomTemplateFieldVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«CustomTemplateVo对象»»
 * 返回信息
 */
export interface RIPageCustomTemplateVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageCustomTemplateVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DataScopeVO»»
 * 返回信息
 */
export interface RIPageDataScopeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDataScopeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DictBizVO»»
 * 返回信息
 */
export interface RIPageDictBizVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDictBizVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DictVO»»
 * 返回信息
 */
export interface RIPageDictVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDictVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«GalleryItemVO对象»»
 * 返回信息
 */
export interface RIPageGalleryItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageGalleryItemVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«GalleryVO对象»»
 * 返回信息
 */
export interface RIPageGalleryVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageGalleryVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«HmiPadWorkstationGroupPageVO»»
 * 返回信息
 */
export interface RIPageHmiPadWorkstationGroupPageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageHmiPadWorkstationGroupPageVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«HmiPadWorkstationGroupVO»»
 * 返回信息
 */
export interface RIPageHmiPadWorkstationGroupVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageHmiPadWorkstationGroupVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«HmiPadWorkstationVO»»
 * 返回信息
 */
export interface RIPageHmiPadWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageHmiPadWorkstationVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«I18nDataPageVO»»
 * 返回信息
 */
export interface RIPageI18NDataPageVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageI18NDataPageVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«InterfaceConfigFieldVo对象»»
 * 返回信息
 */
export interface RIPageInterfaceConfigFieldVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageInterfaceConfigFieldVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«InterfaceConfigVo对象»»
 * 返回信息
 */
export interface RIPageInterfaceConfigVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageInterfaceConfigVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MetaObjectType»»
 * 返回信息
 */
export interface RIPageMetaObjectType {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMetaObjectType;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«MetaRefObjectType»»
 * 返回信息
 */
export interface RIPageMetaRefObjectType {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageMetaRefObjectType;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«OssVO»»
 * 返回信息
 */
export interface RIPageOssVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageOssVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ParamBiz»»
 * 返回信息
 */
export interface RIPageParamBiz {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageParamBiz;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«Param»»
 * 返回信息
 */
export interface RIPageParam {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageParam;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«PostDetailVO»»
 * 返回信息
 */
export interface RIPagePostDetailVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPagePostDetailVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«PostVO»»
 * 返回信息
 */
export interface RIPagePostVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPagePostVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«Region»»
 * 返回信息
 */
export interface RIPageRegion {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageRegion;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«ResourceDefinitionVo对象»»
 * 返回信息
 */
export interface RIPageResourceDefinitionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageResourceDefinitionVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«Tenant»»
 * 返回信息
 */
export interface RIPageTenant {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageTenant;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«TopMenu»»
 * 返回信息
 */
export interface RIPageTopMenu {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageTopMenu;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«UserVO»»
 * 返回信息
 */
export interface RIPageUserVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageUserVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«InterfaceConfigFieldVo对象»
 * 返回信息
 */
export interface RInterfaceConfigFieldVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: InterfaceConfigFieldVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«InterfaceConfigGroupListVO对象»
 * 返回信息
 */
export interface RInterfaceConfigGroupListVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: InterfaceConfigGroupListVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«InterfaceConfigVo对象»
 * 返回信息
 */
export interface RInterfaceConfigVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: InterfaceConfigVo;
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
 * R«List«ApplicationDTO»»
 * 返回信息
 */
export interface RListApplicationDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ApplicationDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ApplicationEmpowerVo对象»»
 * 返回信息
 */
export interface RListApplicationEmpowerVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ApplicationEmpowerVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«AuthClientDetailDTO»»
 * 返回信息
 */
export interface RListAuthClientDetailDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: AuthClientDetailDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CustomTemplateFieldColumnVO»»
 * 返回信息
 */
export interface RListCustomTemplateFieldColumnVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomTemplateFieldColumnVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CustomTemplateFieldOptionVo对象»»
 * 返回信息
 */
export interface RListCustomTemplateFieldOptionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomTemplateFieldOptionVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CustomTemplateFieldVo对象»»
 * 返回信息
 */
export interface RListCustomTemplateFieldVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomTemplateFieldVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«CustomTemplateVo对象»»
 * 返回信息
 */
export interface RListCustomTemplateVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CustomTemplateVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DeptVO»»
 * 返回信息
 */
export interface RListDeptVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DeptVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«Dept»»
 * 返回信息
 */
export interface RListDept {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Dept[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DictBizVO»»
 * 返回信息
 */
export interface RListDictBizVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DictBizVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DictBiz»»
 * 返回信息
 */
export interface RListDictBiz {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DictBiz[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DictVO»»
 * 返回信息
 */
export interface RListDictVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DictVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«Dict»»
 * 返回信息
 */
export interface RListDict {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Dict[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DmpLinkSetVo对象»»
 * 返回信息
 */
export interface RListDmpLinkSetVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DmpLinkSetVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«EnableAccountResultVO»»
 * 返回信息
 */
export interface RListEnableAccountResultVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: EnableAccountResultVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«GalleryItemVO对象»»
 * 返回信息
 */
export interface RListGalleryItemVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: GalleryItemVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«GalleryVO对象»»
 * 返回信息
 */
export interface RListGalleryVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: GalleryVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«GalleryVo对象»»
 * 返回信息
 */
export interface RListGalleryVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: GalleryVo[];
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
 * R«List«HmiLoginWorkstationVO»»
 * 返回信息
 */
export interface RListHmiLoginWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiLoginWorkstationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«HmiPadVo对象»»
 * 返回信息
 */
export interface RListHmiPadVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiPadVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«HmiWorkstationDncVO»»
 * 返回信息
 */
export interface RListHmiWorkstationDncVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiWorkstationDncVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«InterfaceConfigFieldVo对象»»
 * 返回信息
 */
export interface RListInterfaceConfigFieldVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: InterfaceConfigFieldVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«InterfaceConfigVo对象»»
 * 返回信息
 */
export interface RListInterfaceConfigVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: InterfaceConfigVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«Kv»»
 * 返回信息
 */
export interface RListKv {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Kv[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MenuVO»»
 * 返回信息
 */
export interface RListMenuVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MenuVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MetaObjectTypeField»»
 * 返回信息
 */
export interface RListMetaObjectTypeField {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MetaObjectTypeField1[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«MetaObjectTypeField»»_1
 * 返回信息
 */
export interface RListMetaObjectTypeField1 {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MetaObjectTypeField[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«Post»»
 * 返回信息
 */
export interface RListPost {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Post[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«RegionVO»»
 * 返回信息
 */
export interface RListRegionVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RegionVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«Region»»
 * 返回信息
 */
export interface RListRegion {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Region[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«RoleVO»»
 * 返回信息
 */
export interface RListRoleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RoleVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«Role»»
 * 返回信息
 */
export interface RListRole {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Role[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TableDetail»»
 * 返回信息
 */
export interface RListTableDetail {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TableDetail[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«Tenant»»
 * 返回信息
 */
export interface RListTenant {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Tenant[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TopMenu»»
 * 返回信息
 */
export interface RListTopMenu {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TopMenu[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TreeNode»»
 * 返回信息
 */
export interface RListTreeNode {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TreeNode[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«UserSimpleVO»»
 * 返回信息
 */
export interface RListUserSimpleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: UserSimpleVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«User»»
 * 返回信息
 */
export interface RListUser {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: User[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkbenchCardVO»»
 * 返回信息
 */
export interface RListWorkbenchCardVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkbenchCardVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkbenchVO»»
 * 返回信息
 */
export interface RListWorkbenchVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkbenchVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«blade_i18n_data»»
 * 返回信息
 */
export interface RListBladeI18NData {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BladeI18NData[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«object»»
 * 返回信息
 */
export interface RListObject {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: object[];
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
 * R«Map»
 * 返回信息
 */
export interface RMap {
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
 * R«MenuVO»
 * 返回信息
 */
export interface RMenuVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MenuVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MetaObjectType»
 * 返回信息
 */
export interface RMetaObjectType {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MetaObjectType;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OssFileVO»
 * 返回信息
 */
export interface ROssFileVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OssFileVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OssFile»
 * 返回信息
 */
export interface ROssFile {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OssFile;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«OssVO»
 * 返回信息
 */
export interface ROssVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: OssVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ParamBiz»
 * 返回信息
 */
export interface RParamBiz {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ParamBiz;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Param»
 * 返回信息
 */
export interface RParam {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Param;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«PostVO»
 * 返回信息
 */
export interface RPostVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: PostVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Post»
 * 返回信息
 */
export interface RPost {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Post;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«RegionVO»
 * 返回信息
 */
export interface RRegionVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RegionVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ResourceDefinitionVo对象»
 * 返回信息
 */
export interface RResourceDefinitionVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ResourceDefinitionVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«RoleVO»
 * 返回信息
 */
export interface RRoleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: RoleVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Role»
 * 返回信息
 */
export interface RRole {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Role;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Tenant»
 * 返回信息
 */
export interface RTenant {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Tenant;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«TopMenu»
 * 返回信息
 */
export interface RTopMenu {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TopMenu;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«UserVO»
 * 返回信息
 */
export interface RUserVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: UserVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WorkbenchCardVO»
 * 返回信息
 */
export interface RWorkbenchCardVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkbenchCardVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WorkbenchVO»
 * 返回信息
 */
export interface RWorkbenchVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkbenchVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Workbench»
 * 返回信息
 */
export interface RWorkbench {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: Workbench;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«blade_i18n_data»
 * 返回信息
 */
export interface RBladeI18NData {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BladeI18NData;
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

/**
 * R«用户信息VO»
 * 返回信息
 */
export interface R_VO_ {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VO4;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«用户详情VO»
 * 返回信息
 */
export interface RVO2 {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: VO7;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/** 图库新增VO */
export interface _VO {
  /**
   * 图库名称
   * @minLength 0
   * @maxLength 64
   */
  name: string;
}

/** 图库编辑VO */
export interface VO2 {
  /** 主键ID */
  id: string;
  /**
   * 图库名称
   * @minLength 0
   * @maxLength 64
   */
  name: string;
}

/** 图片编辑VO */
export interface VO3 {
  /** 主键ID */
  id: string;
  /**
   * 图片名称
   * @minLength 0
   * @maxLength 500
   */
  originalName: string;
}

/** 用户信息VO */
export interface VO4 {
  /** 账号 */
  account?: string;
  /** 分配员工 */
  associateEmployee?: boolean;
  /** 头像 */
  avatar?: string;
  /** 是否绑定钉钉 */
  bindDingFlag?: boolean;
  /** 是否绑定企业微信 */
  bindQyWechatFlag?: boolean;
  /** 公司名称 */
  companyName?: string;
  /** 职权域id */
  dept_id?: string;
  /** 是否开启钉钉 */
  dingStatus?: boolean;
  /** 邮箱 */
  email?: string;
  /** 主键ID */
  id?: string;
  /** 部门名称 */
  organizationName?: string;
  /** 手机号 */
  phone?: string;
  /** 岗位名称 */
  postName?: string;
  /** 姓名 */
  realName?: string;
  /** 角色id */
  role_id?: string;
  /** 用户id */
  user_id?: string;
  /** 是否开启企业微信 */
  wxStatus?: boolean;
}

/** 用户修改VO */
export interface VO5 {
  /** 账号 */
  account: string;
  /** 邮箱 */
  email?: string;
  /** 资源归属区域 */
  employeeDeptId?: string;
  /** 分配员工 */
  enableEmployee: boolean;
  /**
   * 入职日期
   * @format date-time
   */
  hireDate?: string;
  /** 主键ID */
  id: string;
  /** 工号 */
  jobNumber?: string;
  /** 部门 */
  organizationId?: string;
  /** 手机号 */
  phone: string;
  /** PIN码 */
  pinCode?: string;
  /** 岗位 */
  postId?: string;
  /** 姓名 */
  realName: string;
  /** 所属角色 */
  roleId: string;
  /** 可见资源区域 */
  userDeptId: string;
}

/** 用户新增VO */
export interface VO6 {
  /** 账号 */
  account: string;
  /** 邮箱 */
  email?: string;
  /** 资源归属区域 */
  employeeDeptId?: string;
  /** 分配员工 */
  enableEmployee: boolean;
  /**
   * 入职日期
   * @format date-time
   */
  hireDate?: string;
  /** 工号 */
  jobNumber?: string;
  /** 部门 */
  organizationId?: string;
  /** 密码 */
  password: string;
  /** 手机号 */
  phone: string;
  /** PIN码 */
  pinCode?: string;
  /** 岗位 */
  postId?: string;
  /** 姓名 */
  realName: string;
  /** 所属角色 */
  roleId: string;
  /** 可见资源区域 */
  userDeptId: string;
}

/** 用户详情VO */
export interface VO7 {
  /** 账号 */
  account?: string;
  /** 邮箱 */
  email?: string;
  /** 资源归属区域 */
  employeeDeptId?: string;
  /** 分配员工 */
  enableEmployee?: boolean;
  /**
   * 入职日期
   * @format date-time
   */
  hireDate?: string;
  /** 主键ID */
  id?: string;
  /** 工号 */
  jobNumber?: string;
  /** 部门 */
  organizationId?: string;
  /** 手机号 */
  phone?: string;
  /** PIN码 */
  pinCode?: string;
  /** 岗位 */
  postId?: string;
  /** 姓名 */
  realName?: string;
  /** 所属角色 */
  roleId?: string;
  /** 可见资源区域 */
  userDeptId?: string;
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
  bladeResource = {
    /**
     * @description 传入attach
     *
     * @tags 附件
     * @name AttachDetail
     * @summary 详情
     * @request GET:/blade-resource/attach/detail
     * @secure
     */
    attachDetail: (
      query?: {
        /** 附件大小 */
        attachSize?: string;
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /** 附件域名 */
        domainName?: string;
        /** 附件拓展名 */
        extension?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 附件地址 */
        link?: string;
        /** 附件名称 */
        name?: string;
        /** 附件原名 */
        originalName?: string;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RAttach, void>({
        path: `/blade-resource/attach/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入attach
     *
     * @tags 附件
     * @name AttachList
     * @summary 分页
     * @request GET:/blade-resource/attach/list
     * @secure
     */
    attachList: (
      query?: {
        /** 附件大小 */
        attachSize?: string;
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
         * 当前页
         * @format int32
         */
        current?: number;
        /** 附件域名 */
        domainName?: string;
        /** 附件拓展名 */
        extension?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 附件地址 */
        link?: string;
        /** 附件名称 */
        name?: string;
        /** 附件原名 */
        originalName?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageAttach, void>({
        path: `/blade-resource/attach/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入attach
     *
     * @tags 附件
     * @name AttachPage
     * @summary 分页
     * @request GET:/blade-resource/attach/page
     * @secure
     */
    attachPage: (
      query?: {
        /** 附件大小 */
        attachSize?: string;
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
         * 当前页
         * @format int32
         */
        current?: number;
        /** 附件域名 */
        domainName?: string;
        /** 附件拓展名 */
        extension?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 附件地址 */
        link?: string;
        /** 附件名称 */
        name?: string;
        /** 附件原名 */
        originalName?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageAttachVO, void>({
        path: `/blade-resource/attach/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 附件
     * @name AttachRemove
     * @summary 逻辑删除
     * @request POST:/blade-resource/attach/remove
     * @secure
     */
    attachRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/attach/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入attach
     *
     * @tags 附件
     * @name AttachSave
     * @summary 新增
     * @request POST:/blade-resource/attach/save
     * @secure
     */
    attachSave: (attach: Attach, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-resource/attach/save`,
        method: 'POST',
        body: attach,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入attach
     *
     * @tags 附件
     * @name AttachSubmit
     * @summary 新增或修改
     * @request POST:/blade-resource/attach/submit
     * @secure
     */
    attachSubmit: (attach: Attach, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-resource/attach/submit`,
        method: 'POST',
        body: attach,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入attach
     *
     * @tags 附件
     * @name AttachUpdate
     * @summary 修改
     * @request POST:/blade-resource/attach/update
     * @secure
     */
    attachUpdate: (attach: Attach, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-resource/attach/update`,
        method: 'POST',
        body: attach,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储接口
     * @name OssDefaultOss
     * @summary 获取默认OSS存储地址
     * @request GET:/blade-resource/oss/default
     * @secure
     */
    ossDefaultOss: (params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-resource/oss/default`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入oss
     *
     * @tags 对象存储接口
     * @name OssDetail
     * @summary 详情
     * @request GET:/blade-resource/oss/detail
     * @secure
     */
    ossDetail: (
      query?: {
        /** accessKey */
        accessKey?: string;
        /** 应用ID */
        appId?: string;
        /** 空间名 */
        bucketName?: string;
        /**
         * 所属分类
         * @format int32
         */
        category?: number;
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /** 资源地址 */
        endpoint?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 资源编号 */
        ossCode?: string;
        /** 地域简称 */
        region?: string;
        /** 备注 */
        remark?: string;
        /** secretKey */
        secretKey?: string;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<ROssVO, void>({
        path: `/blade-resource/oss/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 对象存储接口
     * @name OssEnable
     * @summary 配置启用
     * @request POST:/blade-resource/oss/enable
     * @secure
     */
    ossEnable: (
      query: {
        /** 主键 */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/oss/enable`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointCopyFile
     * @summary copyFile
     * @request POST:/blade-resource/oss/endpoint/copy-file
     * @secure
     */
    ossEndpointCopyFile: (
      query: {
        /** destBucketName */
        destBucketName: string;
        /** destFileName */
        destFileName?: string;
        /** fileName */
        fileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/oss/endpoint/copy-file`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointGetFileContent
     * @summary getFileContent
     * @request GET:/blade-resource/oss/endpoint/file-content
     * @secure
     */
    ossEndpointGetFileContent: (
      query: {
        /** fileName */
        fileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/blade-resource/oss/endpoint/file-content`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointFileLink
     * @summary fileLink
     * @request GET:/blade-resource/oss/endpoint/file-link
     * @secure
     */
    ossEndpointFileLink: (
      query: {
        /** fileName */
        fileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RString, void>({
        path: `/blade-resource/oss/endpoint/file-link`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointFilePath
     * @summary filePath
     * @request GET:/blade-resource/oss/endpoint/file-path
     * @secure
     */
    ossEndpointFilePath: (
      query: {
        /** fileName */
        fileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RString, void>({
        path: `/blade-resource/oss/endpoint/file-path`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointMakeBucket
     * @summary makeBucket
     * @request POST:/blade-resource/oss/endpoint/make-bucket
     * @secure
     */
    ossEndpointMakeBucket: (
      query: {
        /** bucketName */
        bucketName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/oss/endpoint/make-bucket`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointPutFile
     * @summary putFile
     * @request POST:/blade-resource/oss/endpoint/put-file
     * @secure
     */
    ossEndpointPutFile: (data: any, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-resource/oss/endpoint/put-file`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointPutFileAttach
     * @summary putFileAttach
     * @request POST:/blade-resource/oss/endpoint/put-file-attach
     * @secure
     */
    ossEndpointPutFileAttach: (data: any, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-resource/oss/endpoint/put-file-attach`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointPutFileAttachByName
     * @summary putFileAttachByName
     * @request POST:/blade-resource/oss/endpoint/put-file-attach-by-name
     * @secure
     */
    ossEndpointPutFileAttachByName: (
      query: {
        /** fileName */
        fileName: string;
      },
      data: {
        /** file */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBladeFile, void>({
        path: `/blade-resource/oss/endpoint/put-file-attach-by-name`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointPutFileByName
     * @summary putFileByName
     * @request POST:/blade-resource/oss/endpoint/put-file-by-name
     * @secure
     */
    ossEndpointPutFileByName: (
      query: {
        /** fileName */
        fileName: string;
      },
      data: {
        /** file */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBladeFile, void>({
        path: `/blade-resource/oss/endpoint/put-file-by-name`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointPutFileWithDetail
     * @summary putFileWithDetail
     * @request POST:/blade-resource/oss/endpoint/put-file-detail
     * @secure
     */
    ossEndpointPutFileWithDetail: (data: any, params: RequestParams = {}) =>
      this.request<ROssFileVO, void>({
        path: `/blade-resource/oss/endpoint/put-file-detail`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointRemoveBucket
     * @summary removeBucket
     * @request POST:/blade-resource/oss/endpoint/remove-bucket
     * @secure
     */
    ossEndpointRemoveBucket: (
      query: {
        /** bucketName */
        bucketName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/oss/endpoint/remove-bucket`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointRemoveFile
     * @summary removeFile
     * @request POST:/blade-resource/oss/endpoint/remove-file
     * @secure
     */
    ossEndpointRemoveFile: (
      query: {
        /** fileName */
        fileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/oss/endpoint/remove-file`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointRemoveFiles
     * @summary removeFiles
     * @request POST:/blade-resource/oss/endpoint/remove-files
     * @secure
     */
    ossEndpointRemoveFiles: (
      query: {
        /** fileNames */
        fileNames: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/oss/endpoint/remove-files`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 对象存储端点
     * @name OssEndpointStatFile
     * @summary statFile
     * @request GET:/blade-resource/oss/endpoint/stat-file
     * @secure
     */
    ossEndpointStatFile: (
      query: {
        /** fileName */
        fileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ROssFile, void>({
        path: `/blade-resource/oss/endpoint/stat-file`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入oss
     *
     * @tags 对象存储接口
     * @name OssList
     * @summary 分页
     * @request GET:/blade-resource/oss/list
     * @secure
     */
    ossList: (
      query?: {
        /** accessKey */
        accessKey?: string;
        /** 应用ID */
        appId?: string;
        /** 空间名 */
        bucketName?: string;
        /**
         * 所属分类
         * @format int32
         */
        category?: number;
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
         * 当前页
         * @format int32
         */
        current?: number;
        /** 资源地址 */
        endpoint?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 资源编号 */
        ossCode?: string;
        /** 地域简称 */
        region?: string;
        /** 备注 */
        remark?: string;
        /** secretKey */
        secretKey?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageOssVO, void>({
        path: `/blade-resource/oss/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入oss
     *
     * @tags 对象存储接口
     * @name OssPage
     * @summary 分页
     * @request GET:/blade-resource/oss/page
     * @secure
     */
    ossPage: (
      query?: {
        /** accessKey */
        accessKey?: string;
        /** 应用ID */
        appId?: string;
        /** 空间名 */
        bucketName?: string;
        /**
         * 所属分类
         * @format int32
         */
        category?: number;
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
         * 当前页
         * @format int32
         */
        current?: number;
        /** 资源地址 */
        endpoint?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 资源编号 */
        ossCode?: string;
        /** 地域简称 */
        region?: string;
        /** 备注 */
        remark?: string;
        /** secretKey */
        secretKey?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
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
        categoryName?: string;
        statusName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageOssVO, void>({
        path: `/blade-resource/oss/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 对象存储接口
     * @name OssRemove
     * @summary 逻辑删除
     * @request POST:/blade-resource/oss/remove
     * @secure
     */
    ossRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/oss/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入oss
     *
     * @tags 对象存储接口
     * @name OssSave
     * @summary 新增
     * @request POST:/blade-resource/oss/save
     * @secure
     */
    ossSave: (oss: Oss, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-resource/oss/save`,
        method: 'POST',
        body: oss,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入oss
     *
     * @tags 对象存储接口
     * @name OssSubmit
     * @summary 新增或修改
     * @request POST:/blade-resource/oss/submit
     * @secure
     */
    ossSubmit: (oss: Oss, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-resource/oss/submit`,
        method: 'POST',
        body: oss,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入oss
     *
     * @tags 对象存储接口
     * @name OssUpdate
     * @summary 修改
     * @request POST:/blade-resource/oss/update
     * @secure
     */
    ossUpdate: (oss: Oss, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-resource/oss/update`,
        method: 'POST',
        body: oss,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 短信服务端点
     * @name SmsEndpointSendMeeting
     * @summary sendMeeting
     * @request POST:/blade-resource/sms/endpoint/send-meeting
     * @secure
     */
    smsEndpointSendMeeting: (
      query: {
        /** phones */
        phones: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/sms/endpoint/send-meeting`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 短信服务端点
     * @name SmsEndpointSendMessage
     * @summary sendMessage
     * @request POST:/blade-resource/sms/endpoint/send-message
     * @secure
     */
    smsEndpointSendMessage: (
      query: {
        /** code */
        code: string;
        /** params */
        params: string;
        /** phones */
        phones: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/sms/endpoint/send-message`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 短信服务端点
     * @name SmsEndpointSendNotice
     * @summary sendNotice
     * @request POST:/blade-resource/sms/endpoint/send-notice
     * @secure
     */
    smsEndpointSendNotice: (
      query: {
        /** phones */
        phones: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/sms/endpoint/send-notice`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 短信服务端点
     * @name SmsEndpointSendOrder
     * @summary sendOrder
     * @request POST:/blade-resource/sms/endpoint/send-order
     * @secure
     */
    smsEndpointSendOrder: (
      query: {
        /** phones */
        phones: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/sms/endpoint/send-order`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 短信服务端点
     * @name SmsEndpointSendValidate
     * @summary sendValidate
     * @request POST:/blade-resource/sms/endpoint/send-validate
     * @secure
     */
    smsEndpointSendValidate: (
      query: {
        /** phone */
        phone: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/sms/endpoint/send-validate`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 短信服务端点
     * @name SmsEndpointValidateMessage
     * @summary validateMessage
     * @request POST:/blade-resource/sms/endpoint/validate-message
     * @secure
     */
    smsEndpointValidateMessage: (
      query?: {
        id?: string;
        phone?: string;
        success?: boolean;
        value?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-resource/sms/endpoint/validate-message`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  bladeSystem = {
    /**
     * @description 传入dataScope
     *
     * @tags 接口权限
     * @name ApiScopeDetail
     * @summary 详情
     * @request GET:/blade-system/api-scope/detail
     * @secure
     */
    apiScopeDetail: (
      query?: {
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /** 接口方法类型 */
        httpMethod?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 菜单主键 */
        menuId?: string;
        /** 接口权限备注 */
        remark?: string;
        /** 资源编号 */
        resourceCode?: string;
        /** 接口权限名称 */
        scopeName?: string;
        /** 接口权限字段 */
        scopePath?: string;
        /**
         * 接口权限类型
         * @format int32
         */
        scopeType?: number;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RApiScope, void>({
        path: `/blade-system/api-scope/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dataScope
     *
     * @tags 接口权限
     * @name ApiScopeList
     * @summary 分页
     * @request GET:/blade-system/api-scope/list
     * @secure
     */
    apiScopeList: (
      query?: {
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
         * 当前页
         * @format int32
         */
        current?: number;
        /** 接口方法类型 */
        httpMethod?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 菜单主键 */
        menuId?: string;
        /** 接口权限备注 */
        remark?: string;
        /** 资源编号 */
        resourceCode?: string;
        /** 接口权限名称 */
        scopeName?: string;
        /** 接口权限字段 */
        scopePath?: string;
        /**
         * 接口权限类型
         * @format int32
         */
        scopeType?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageApiScopeVO, void>({
        path: `/blade-system/api-scope/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 接口权限
     * @name ApiScopeRemove
     * @summary 逻辑删除
     * @request POST:/blade-system/api-scope/remove
     * @secure
     */
    apiScopeRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/api-scope/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dataScope
     *
     * @tags 接口权限
     * @name ApiScopeSave
     * @summary 新增
     * @request POST:/blade-system/api-scope/save
     * @secure
     */
    apiScopeSave: (
      query: {
        /** menuId */
        menuId: string;
        /** resourceCodeList */
        resourceCodeList: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/api-scope/save`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dataScope
     *
     * @tags 接口权限
     * @name ApiScopeSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/api-scope/submit
     * @secure
     */
    apiScopeSubmit: (dataScope: ApiScope, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/api-scope/submit`,
        method: 'POST',
        body: dataScope,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dataScope
     *
     * @tags 接口权限
     * @name ApiScopeUpdate
     * @summary 修改
     * @request POST:/blade-system/api-scope/update
     * @secure
     */
    apiScopeUpdate: (dataScope: ApiScope, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/api-scope/update`,
        method: 'POST',
        body: dataScope,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 岗位绑定系统应用的菜单
     *
     * @tags 岗位关联应用授权管理
     * @name ApplicationEmpowerBindPostAndApp
     * @summary 保存
     * @request POST:/blade-system/application-empower/bind-post-app
     * @secure
     */
    applicationEmpowerBindPostAndApp: (bindPostAndAppVO: BindPostAndAppVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/application-empower/bind-post-app`,
        method: 'POST',
        body: bindPostAndAppVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 移动端和hmi端已授权应用菜单
     *
     * @tags 岗位关联应用授权管理
     * @name ApplicationEmpowerEmpAuthorizedAppMenu
     * @summary 登入员工已授权的应用菜单
     * @request GET:/blade-system/application-empower/emp-authorized-app-menu
     * @secure
     */
    applicationEmpowerEmpAuthorizedAppMenu: (
      query: {
        /**
         * 应用类型：1-HMI端，2-H5
         * @format int32
         */
        applicationType: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMenuVO, void>({
        path: `/blade-system/application-empower/emp-authorized-app-menu`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 岗位已绑定系统应用的菜单
     *
     * @tags 岗位关联应用授权管理
     * @name ApplicationEmpowerPostAndAppDetail
     * @summary 岗位已绑定菜单
     * @request GET:/blade-system/application-empower/post-menu-detail
     * @secure
     */
    applicationEmpowerPostAndAppDetail: (
      query: {
        /** postId */
        postId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListApplicationEmpowerVo, void>({
        path: `/blade-system/application-empower/post-menu-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统应用管理
     * @name ApplicationGrantList
     * @summary 授权拥有的系统应用列表
     * @request GET:/blade-system/application/grant-list
     * @secure
     */
    applicationGrantList: (params: RequestParams = {}) =>
      this.request<RListApplicationDTO, void>({
        path: `/blade-system/application/grant-list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统应用管理
     * @name ApplicationList
     * @summary 系统应用列表
     * @request GET:/blade-system/application/list
     * @secure
     */
    applicationList: (params: RequestParams = {}) =>
      this.request<RListApplicationDTO, void>({
        path: `/blade-system/application/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 系统应用管理
     * @name ApplicationRemove
     * @summary 删除
     * @request POST:/blade-system/application/remove
     * @secure
     */
    applicationRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/application/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统应用管理
     * @name ApplicationSave
     * @summary 新增
     * @request POST:/blade-system/application/save
     * @secure
     */
    applicationSave: (applicationAddDTO: ApplicationAddDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/application/save`,
        method: 'POST',
        body: applicationAddDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入应用
     *
     * @tags 系统应用管理
     * @name ApplicationUpdate
     * @summary 修改
     * @request PUT:/blade-system/application/update
     * @secure
     */
    applicationUpdate: (applicationUpdateVO: ApplicationUpdateDTO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/application/update`,
        method: 'PUT',
        body: applicationUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 启用停用编码规则
     *
     * @tags 编码规则接口
     * @name BasCoderuleChangeDefault
     * @summary 启用停用
     * @request GET:/blade-system/bascoderule/change-default/{id}
     * @secure
     */
    basCoderuleChangeDefault: (id: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/bascoderule/change-default/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 编码规则查询数量
     *
     * @tags 编码规则接口
     * @name BasCoderuleCount
     * @summary count
     * @request GET:/blade-system/bascoderule/count
     * @secure
     */
    basCoderuleCount: (
      query?: {
        /** 业务对象名称 */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RLong, void>({
        path: `/blade-system/bascoderule/count`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 查询所有业务对象编码规则数量
     *
     * @tags 编码规则接口
     * @name BasCoderuleCountAll
     * @summary count-all
     * @request GET:/blade-system/bascoderule/count-all
     * @secure
     */
    basCoderuleCountAll: (params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/bascoderule/count-all`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 根据编码id获取详情
     *
     * @tags 编码规则接口
     * @name BasCoderuleDetail
     * @summary 详情
     * @request GET:/blade-system/bascoderule/detail
     * @secure
     */
    basCoderuleDetail: (
      query?: {
        /** id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBasCoderuleDTO, void>({
        path: `/blade-system/bascoderule/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 编码规则接口
     * @name BasCoderuleGenerateTest
     * @summary generateTest
     * @request POST:/blade-system/bascoderule/generate
     * @secure
     */
    basCoderuleGenerateTest: (
      query?: {
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
        account?: string;
        avatar?: string;
        /** @format date-time */
        birthday?: string;
        code?: string;
        deptId?: string;
        deptName?: string;
        email?: string;
        /** @format int32 */
        enableAccount?: number;
        id?: string;
        password?: string;
        phone?: string;
        postId?: string;
        postName?: string;
        /** @format int32 */
        pwdSecurityLevel?: number;
        /** @format date-time */
        pwdUpdateDate?: string;
        pwdUpdateRecord?: string;
        realName?: string;
        roleId?: string;
        roleName?: string;
        /** @format int32 */
        sex?: number;
        sexName?: string;
        tenantName?: string;
        userExt?: string;
        /** @format int32 */
        userType?: number;
        userTypeName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RString, void>({
        path: `/blade-system/bascoderule/generate`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入业务对象
     *
     * @tags 编码规则接口
     * @name BasCoderuleGetIsExistCodeRuleByBillFormId
     * @summary 根据业务对象查询是否存在编码规则
     * @request GET:/blade-system/bascoderule/is-exist-code-rule
     * @secure
     */
    basCoderuleGetIsExistCodeRuleByBillFormId: (
      query: {
        /** 业务对象 */
        billFormId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/bascoderule/is-exist-code-rule`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入basCoderule
     *
     * @tags 编码规则接口
     * @name BasCoderuleList
     * @summary 分页
     * @request GET:/blade-system/bascoderule/list
     * @secure
     */
    basCoderuleList: (
      query?: {
        /** 业务对象 */
        billFormId?: string;
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
        /** 子系统编码 */
        subsysId?: string;
        condition?: string;
        dictKey?: string;
        objectId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageBasCodeRule, void>({
        path: `/blade-system/bascoderule/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入业务对象的编码字段和业务对象,查询手动补号数据
     *
     * @tags 编码规则接口
     * @name BasCoderulePatchCodeList
     * @summary 获取手动补号数据
     * @request POST:/blade-system/bascoderule/patch-code
     * @secure
     */
    basCoderulePatchCodeList: (
      objectData: Character,
      query?: {
        /** 业务对象 */
        billFormId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListString, void>({
        path: `/blade-system/bascoderule/patch-code`,
        method: 'POST',
        query: query,
        body: objectData,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 编码规则接口
     * @name BasCoderuleRemove
     * @summary 逻辑删除
     * @request POST:/blade-system/bascoderule/remove
     * @secure
     */
    basCoderuleRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/bascoderule/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入basCoderule
     *
     * @tags 编码规则接口
     * @name BasCoderuleSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/bascoderule/submit
     * @secure
     */
    basCoderuleSubmit: (basCoderuleDTO: BasCoderuleDTO, params: RequestParams = {}) =>
      this.request<RBasCodeRule, void>({
        path: `/blade-system/bascoderule/submit`,
        method: 'POST',
        body: basCoderuleDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入client
     *
     * @tags 应用管理
     * @name AuthClientDetail
     * @summary 详情
     * @request GET:/blade-system/client/detail
     * @secure
     */
    authClientDetail: (
      query?: {
        /**
         * 令牌过期秒数
         * @format int32
         */
        accessTokenValidity?: number;
        /** 附加说明 */
        additionalInformation?: string;
        /** 权限 */
        authorities?: string;
        /** 授权类型 */
        authorizedGrantTypes?: string;
        /** 自动授权 */
        autoapprove?: string;
        /** 客户端id */
        clientId?: string;
        /** 客户端密钥 */
        clientSecret?: string;
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
         * 刷新令牌过期秒数
         * @format int32
         */
        refreshTokenValidity?: number;
        /** 资源集合 */
        resourceIds?: string;
        /** 授权范围 */
        scope?: string;
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
        /** 回调地址 */
        webServerRedirectUri?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RClient, void>({
        path: `/blade-system/client/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入client
     *
     * @tags 应用管理
     * @name AuthClientList
     * @summary 分页
     * @request GET:/blade-system/client/list
     * @secure
     */
    authClientList: (
      query?: {
        /**
         * 令牌过期秒数
         * @format int32
         */
        accessTokenValidity?: number;
        /** 附加说明 */
        additionalInformation?: string;
        /** 权限 */
        authorities?: string;
        /** 授权类型 */
        authorizedGrantTypes?: string;
        /** 自动授权 */
        autoapprove?: string;
        /** 客户端id */
        clientId?: string;
        /** 客户端密钥 */
        clientSecret?: string;
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
         * 当前页
         * @format int32
         */
        current?: number;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /**
         * 刷新令牌过期秒数
         * @format int32
         */
        refreshTokenValidity?: number;
        /** 资源集合 */
        resourceIds?: string;
        /** 授权范围 */
        scope?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
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
        /** 回调地址 */
        webServerRedirectUri?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageClient, void>({
        path: `/blade-system/client/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 返回终端列表
     *
     * @tags 应用管理
     * @name AuthClientListTokenValidity
     * @summary 获取终端应用列表
     * @request GET:/blade-system/client/list-token-validity
     * @secure
     */
    authClientListTokenValidity: (params: RequestParams = {}) =>
      this.request<RListAuthClientDetailDTO, void>({
        path: `/blade-system/client/list-token-validity`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 应用管理
     * @name AuthClientRemove
     * @summary 逻辑删除
     * @request POST:/blade-system/client/remove
     * @secure
     */
    authClientRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/client/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入client
     *
     * @tags 应用管理
     * @name AuthClientSave
     * @summary 新增
     * @request POST:/blade-system/client/save
     * @secure
     */
    authClientSave: (authClient: Client, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/client/save`,
        method: 'POST',
        body: authClient,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入client
     *
     * @tags 应用管理
     * @name AuthClientSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/client/submit
     * @secure
     */
    authClientSubmit: (authClient: Client, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/client/submit`,
        method: 'POST',
        body: authClient,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入client
     *
     * @tags 应用管理
     * @name AuthClientUpdate
     * @summary 修改
     * @request POST:/blade-system/client/update
     * @secure
     */
    authClientUpdate: (authClient: Client, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/client/update`,
        method: 'POST',
        body: authClient,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入client
     *
     * @tags 应用管理
     * @name AuthClientUpdateTokenValidity
     * @summary 更新token有效期
     * @request POST:/blade-system/client/update-token-validity
     * @secure
     */
    authClientUpdateTokenValidity: (
      query?: {
        /**
         * 令牌过期秒数
         * @format int32
         */
        accessTokenValidity?: number;
        /** 客户端id */
        clientId?: string;
        /**
         * 刷新令牌过期秒数
         * @format int32
         */
        refreshTokenValidity?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/client/update-token-validity`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 字段选项值表管理
     * @name CustomTemplateFieldOptionCount
     * @summary 字段选项值表统计值
     * @request GET:/blade-system/custom-template-field-option/count
     * @secure
     */
    customTemplateFieldOptionCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-system/custom-template-field-option/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateFieldOption
     *
     * @tags 字段选项值表管理
     * @name CustomTemplateFieldOptionDetail
     * @summary 字段选项值表详情
     * @request GET:/blade-system/custom-template-field-option/get/{id}
     * @secure
     */
    customTemplateFieldOptionDetail: (id: string, params: RequestParams = {}) =>
      this.request<RCustomTemplateFieldOptionVo, void>({
        path: `/blade-system/custom-template-field-option/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateFieldOptionVO
     *
     * @tags 字段选项值表管理
     * @name CustomTemplateFieldOptionInsert
     * @summary 字段选项值表新增
     * @request POST:/blade-system/custom-template-field-option/insert
     * @secure
     */
    customTemplateFieldOptionInsert: (customTemplateFieldOptionVO: CustomTemplateFieldOptionVo, params: RequestParams = {}) =>
      this.request<RCustomTemplateFieldOptionVo, void>({
        path: `/blade-system/custom-template-field-option/insert`,
        method: 'POST',
        body: customTemplateFieldOptionVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 字段选项值表管理
     * @name CustomTemplateFieldOptionList
     * @summary 字段选项值表列表
     * @request GET:/blade-system/custom-template-field-option/list
     * @secure
     */
    customTemplateFieldOptionList: (params: RequestParams = {}) =>
      this.request<RListCustomTemplateFieldOptionVo, void>({
        path: `/blade-system/custom-template-field-option/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 字段选项值表管理
     * @name CustomTemplateFieldOptionPage
     * @summary 字段选项值表分页
     * @request GET:/blade-system/custom-template-field-option/page
     * @secure
     */
    customTemplateFieldOptionPage: (
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
      this.request<RIPageCustomTemplateFieldOptionVo, void>({
        path: `/blade-system/custom-template-field-option/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 字段选项值表管理
     * @name CustomTemplateFieldOptionRemove
     * @summary 字段选项值表删除
     * @request DELETE:/blade-system/custom-template-field-option/remove
     * @secure
     */
    customTemplateFieldOptionRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/custom-template-field-option/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateFieldOptionVO
     *
     * @tags 字段选项值表管理
     * @name CustomTemplateFieldOptionUpdate
     * @summary 字段选项值表修改
     * @request PUT:/blade-system/custom-template-field-option/update
     * @secure
     */
    customTemplateFieldOptionUpdate: (customTemplateFieldOptionVO: CustomTemplateFieldOptionVo, params: RequestParams = {}) =>
      this.request<RCustomTemplateFieldOptionVo, void>({
        path: `/blade-system/custom-template-field-option/update`,
        method: 'PUT',
        body: customTemplateFieldOptionVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationCount
     * @summary 模板与字段关系表统计值
     * @request GET:/blade-system/custom-template-field-relation/count
     * @secure
     */
    customTemplateFieldRelationCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-system/custom-template-field-relation/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateFieldRelation
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationDetail
     * @summary 模板与字段关系表详情
     * @request GET:/blade-system/custom-template-field-relation/get/{id}
     * @secure
     */
    customTemplateFieldRelationDetail: (id: string, params: RequestParams = {}) =>
      this.request<RCustomTemplateFieldRelationVo, void>({
        path: `/blade-system/custom-template-field-relation/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationGetConditionFields
     * @summary 获取可用的查询条件字段
     * @request GET:/blade-system/custom-template-field-relation/getConditionFields
     * @secure
     */
    customTemplateFieldRelationGetConditionFields: (
      query?: {
        /**
         * 模板id
         * @format int32
         */
        businessType?: number;
        /** 模板id */
        templateId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCustomConditionFieldsVO, void>({
        path: `/blade-system/custom-template-field-relation/getConditionFields`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationGetImportFields
     * @summary 获取可用导入字段
     * @request GET:/blade-system/custom-template-field-relation/getImportFields
     * @secure
     */
    customTemplateFieldRelationGetImportFields: (
      query?: {
        /**
         * 业务类型
         * @format int32
         */
        businessType?: number;
        /** 模板id */
        templateId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCustomImportFieldsVO, void>({
        path: `/blade-system/custom-template-field-relation/getImportFields`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateFieldRelationVO
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationInsert
     * @summary 模板与字段关系表新增
     * @request POST:/blade-system/custom-template-field-relation/insert
     * @secure
     */
    customTemplateFieldRelationInsert: (customTemplateFieldRelationSubmitVO: CustomTemplateFieldRelationVo, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/custom-template-field-relation/insert`,
        method: 'POST',
        body: customTemplateFieldRelationSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationPage
     * @summary 模板与字段关系表分页
     * @request GET:/blade-system/custom-template-field-relation/page
     * @secure
     */
    customTemplateFieldRelationPage: (
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
      this.request<RIPageCustomTemplateFieldRelationVo, void>({
        path: `/blade-system/custom-template-field-relation/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationRemove
     * @summary 模板与字段关系表删除
     * @request DELETE:/blade-system/custom-template-field-relation/remove
     * @secure
     */
    customTemplateFieldRelationRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/custom-template-field-relation/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateFieldRelationSortVO
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationSort
     * @summary 拖拽排序
     * @request POST:/blade-system/custom-template-field-relation/sort
     * @secure
     */
    customTemplateFieldRelationSort: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/custom-template-field-relation/sort`,
        method: 'POST',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationSubmitConditionFields
     * @summary 提交查询条件
     * @request POST:/blade-system/custom-template-field-relation/submitConditionFields
     * @secure
     */
    customTemplateFieldRelationSubmitConditionFields: (customConditionFieldsSubmitVO: CustomConditionFieldsSubmitVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/custom-template-field-relation/submitConditionFields`,
        method: 'POST',
        body: customConditionFieldsSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationSubmitImportFields
     * @summary 提交导入字段
     * @request POST:/blade-system/custom-template-field-relation/submitImportFields
     * @secure
     */
    customTemplateFieldRelationSubmitImportFields: (customConditionFieldsSubmitVO: CustomConditionFieldsSubmitVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/custom-template-field-relation/submitImportFields`,
        method: 'POST',
        body: customConditionFieldsSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入customTemplateFieldRelationVO
     *
     * @tags 模板与字段关系表管理
     * @name CustomTemplateFieldRelationUpdate
     * @summary 模板与字段关系表修改
     * @request PUT:/blade-system/custom-template-field-relation/update
     * @secure
     */
    customTemplateFieldRelationUpdate: (customTemplateFieldRelationVO: CustomTemplateFieldRelationVo1, params: RequestParams = {}) =>
      this.request<RCustomTemplateFieldRelationVo, void>({
        path: `/blade-system/custom-template-field-relation/update`,
        method: 'PUT',
        body: customTemplateFieldRelationVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 自定义字段表管理
     * @name CustomTemplateFieldGetColumns
     * @summary 根据模版id获取该模版下字段详情 -- 关联业务CRUD时使用
     * @request GET:/blade-system/custom-template-field/fields
     * @secure
     */
    customTemplateFieldGetColumns: (
      query?: {
        /**
         * configType
         * @format int32
         */
        configType?: number;
        /** showType */
        showType?: string;
        /** templateId */
        templateId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCustomTemplateFieldColumnVO, void>({
        path: `/blade-system/custom-template-field/fields`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateField
     *
     * @tags 自定义字段表管理
     * @name CustomTemplateFieldDetail
     * @summary 自定义字段表详情
     * @request GET:/blade-system/custom-template-field/get/{id}
     * @secure
     */
    customTemplateFieldDetail: (id: string, params: RequestParams = {}) =>
      this.request<RCustomTemplateFieldVo, void>({
        path: `/blade-system/custom-template-field/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 自定义字段表管理
     * @name CustomTemplateFieldGetSelectBox
     * @summary 自定义字段选择-用于添加字段
     * @request GET:/blade-system/custom-template-field/getSelectBox
     * @secure
     */
    customTemplateFieldGetSelectBox: (
      query?: {
        /**
         * 配置类型
         * @format int32
         */
        configType?: number;
        /** 模板id */
        templateId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCustomFieldRelationSelectVO, void>({
        path: `/blade-system/custom-template-field/getSelectBox`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateFieldVO
     *
     * @tags 自定义字段表管理
     * @name CustomTemplateFieldInsert
     * @summary 自定义字段表新增
     * @request POST:/blade-system/custom-template-field/insert
     * @secure
     */
    customTemplateFieldInsert: (customTemplateFieldSubmitVO: CustomTemplateFieldVo1, params: RequestParams = {}) =>
      this.request<RCustomTemplateFieldVo, void>({
        path: `/blade-system/custom-template-field/insert`,
        method: 'POST',
        body: customTemplateFieldSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入业务类型
     *
     * @tags 自定义字段表管理
     * @name CustomTemplateFieldList
     * @summary 自定义字段表列表
     * @request GET:/blade-system/custom-template-field/list
     * @secure
     */
    customTemplateFieldList: (
      query?: {
        /**
         * 业务类型
         * @format int32
         */
        businessType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCustomTemplateFieldVo, void>({
        path: `/blade-system/custom-template-field/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 自定义字段表管理
     * @name CustomTemplateFieldListField
     * @summary 已配置自定义字段表列表
     * @request GET:/blade-system/custom-template-field/listField
     * @secure
     */
    customTemplateFieldListField: (
      query?: {
        /**
         * 配置类型
         * @format int32
         */
        configType?: number;
        /** 模板id */
        templateId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCustomFieldRelationListVO, void>({
        path: `/blade-system/custom-template-field/listField`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 自定义字段表管理
     * @name CustomTemplateFieldPage
     * @summary 自定义字段表分页
     * @request GET:/blade-system/custom-template-field/page
     * @secure
     */
    customTemplateFieldPage: (
      query?: {
        /**
         * 业务类型
         * @format int32
         */
        businessType?: number;
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
      this.request<RIPageCustomTemplateFieldVo, void>({
        path: `/blade-system/custom-template-field/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 自定义字段表管理
     * @name CustomTemplateFieldRemove
     * @summary 自定义字段表删除
     * @request DELETE:/blade-system/custom-template-field/remove
     * @secure
     */
    customTemplateFieldRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/custom-template-field/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateFieldVO
     *
     * @tags 自定义字段表管理
     * @name CustomTemplateFieldUpdate
     * @summary 自定义字段表修改
     * @request PUT:/blade-system/custom-template-field/update
     * @secure
     */
    customTemplateFieldUpdate: (customTemplateFieldUpdateVO: CustomTemplateFieldUpdateVO, params: RequestParams = {}) =>
      this.request<RCustomTemplateFieldVo, void>({
        path: `/blade-system/custom-template-field/update`,
        method: 'PUT',
        body: customTemplateFieldUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入customTemplate
     *
     * @tags 自定义字段模板表管理
     * @name CustomTemplateDetail
     * @summary 自定义字段模板表详情
     * @request GET:/blade-system/custom-template/get/{id}
     * @secure
     */
    customTemplateDetail: (id: string, params: RequestParams = {}) =>
      this.request<RCustomTemplateVo, void>({
        path: `/blade-system/custom-template/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateVO
     *
     * @tags 自定义字段模板表管理
     * @name CustomTemplateInsert
     * @summary 自定义字段模板表新增
     * @request POST:/blade-system/custom-template/insert
     * @secure
     */
    customTemplateInsert: (customTemplateSubmitVO: CustomTemplateVo2, params: RequestParams = {}) =>
      this.request<RCustomTemplateVo, void>({
        path: `/blade-system/custom-template/insert`,
        method: 'POST',
        body: customTemplateSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description businessType
     *
     * @tags 自定义字段模板表管理
     * @name CustomTemplateList
     * @summary 自定义字段模板表列表
     * @request GET:/blade-system/custom-template/list
     * @secure
     */
    customTemplateList: (
      query?: {
        /**
         * 业务类型
         * @format int32
         */
        businessType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListCustomTemplateVo, void>({
        path: `/blade-system/custom-template/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 自定义字段模板表管理
     * @name CustomTemplatePage
     * @summary 自定义字段模板表分页
     * @request GET:/blade-system/custom-template/page
     * @secure
     */
    customTemplatePage: (
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
      this.request<RIPageCustomTemplateVo, void>({
        path: `/blade-system/custom-template/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 自定义字段模板表管理
     * @name CustomTemplateRemove
     * @summary 自定义字段模板表删除
     * @request DELETE:/blade-system/custom-template/remove
     * @secure
     */
    customTemplateRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/custom-template/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入customTemplateVO
     *
     * @tags 自定义字段模板表管理
     * @name CustomTemplateUpdate
     * @summary 自定义字段模板表修改
     * @request PUT:/blade-system/custom-template/update
     * @secure
     */
    customTemplateUpdate: (customTemplateSubmitVO: CustomTemplateVo2, params: RequestParams = {}) =>
      this.request<RCustomTemplateVo, void>({
        path: `/blade-system/custom-template/update`,
        method: 'PUT',
        body: customTemplateSubmitVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dept
     *
     * @tags 数据权限
     * @name DataScopeManagerDetail
     * @summary 详情
     * @request GET:/blade-system/data-scope-manager/detail
     * @secure
     */
    dataScopeManagerDetail: (
      query?: {
        /** 祖级机构主键 */
        ancestors?: string;
        /**
         * 机构类型
         * @format int32
         */
        deptCategory?: number;
        /** 机构名 */
        deptName?: string;
        /** 机构全称 */
        fullName?: string;
        /** 主键 */
        id?: string;
        /**
         * 是否系统默认权限: 0-否，1-是
         * @format int32
         */
        isDefault?: number;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 父主键 */
        parentId?: string;
        /** 备注 */
        remark?: string;
        /**
         * 排序
         * @format int32
         */
        sort?: number;
        /** 租户ID */
        tenantId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDeptVO, void>({
        path: `/blade-system/data-scope-manager/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 数据权限
     * @name DataScopeManagerGrant
     * @summary 设置数据权限
     * @request POST:/blade-system/data-scope-manager/grant
     * @secure
     */
    dataScopeManagerGrant: (grantVO: DataScopeGrantVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/data-scope-manager/grant`,
        method: 'POST',
        body: grantVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 数据权限
     * @name DataScopeManagerGrantSelect
     * @summary 选中的权限
     * @request GET:/blade-system/data-scope-manager/grant-select
     * @secure
     */
    dataScopeManagerGrantSelect: (
      query?: {
        /** deptId */
        deptId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListString, void>({
        path: `/blade-system/data-scope-manager/grant-select`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dept
     *
     * @tags 数据权限
     * @name DataScopeManagerLazyList
     * @summary 懒加载列表
     * @request GET:/blade-system/data-scope-manager/lazy-list
     * @secure
     */
    dataScopeManagerLazyList: (
      query?: {
        /** 数据权限名称 */
        deptName?: string;
        /** 数据权限全称 */
        fullName?: string;
        /** parentId */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDeptVO, void>({
        path: `/blade-system/data-scope-manager/lazy-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 数据权限
     * @name DataScopeManagerLazyTree
     * @summary 懒加载树形结构
     * @request GET:/blade-system/data-scope-manager/lazy-tree
     * @secure
     */
    dataScopeManagerLazyTree: (
      query?: {
        /** parentId */
        parentId?: string;
        /** tenantId */
        tenantId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDeptVO, void>({
        path: `/blade-system/data-scope-manager/lazy-tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dept
     *
     * @tags 数据权限
     * @name DataScopeManagerList
     * @summary 列表
     * @request GET:/blade-system/data-scope-manager/list
     * @secure
     */
    dataScopeManagerList: (
      query?: {
        /** 数据权限名称 */
        deptName?: string;
        /** 数据权限全称 */
        fullName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDeptVO, void>({
        path: `/blade-system/data-scope-manager/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 数据权限
     * @name DataScopeManagerRemove
     * @summary 删除
     * @request POST:/blade-system/data-scope-manager/remove
     * @secure
     */
    dataScopeManagerRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/data-scope-manager/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id集合
     *
     * @tags 数据权限
     * @name DataScopeManagerSelect
     * @summary 下拉数据源
     * @request GET:/blade-system/data-scope-manager/select
     * @secure
     */
    dataScopeManagerSelect: (
      query?: {
        /** deptId */
        deptId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDept, void>({
        path: `/blade-system/data-scope-manager/select`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dept
     *
     * @tags 数据权限
     * @name DataScopeManagerSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/data-scope-manager/submit
     * @secure
     */
    dataScopeManagerSubmit: (dept: Dept, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/data-scope-manager/submit`,
        method: 'POST',
        body: dept,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 数据权限
     * @name DataScopeManagerTree
     * @summary 树形结构
     * @request GET:/blade-system/data-scope-manager/tree
     * @secure
     */
    dataScopeManagerTree: (
      query?: {
        /** tenantId */
        tenantId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDeptVO, void>({
        path: `/blade-system/data-scope-manager/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dataScope
     *
     * @tags 数据权限
     * @name DataScopeDetail
     * @summary 详情
     * @request GET:/blade-system/data-scope/detail
     * @secure
     */
    dataScopeDetail: (
      query?: {
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
        /** 菜单主键 */
        menuId?: string;
        /** 数据权限备注 */
        remark?: string;
        /** 资源编号 */
        resourceCode?: string;
        /** 数据权限类名 */
        scopeClass?: string;
        /** 数据权限字段 */
        scopeColumn?: string;
        /** 数据权限可见字段 */
        scopeField?: string;
        /** 数据权限名称 */
        scopeName?: string;
        /**
         * 数据权限类型
         * @format int32
         */
        scopeType?: number;
        /** 数据权限值域 */
        scopeValue?: string;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RDataScope, void>({
        path: `/blade-system/data-scope/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dataScope
     *
     * @tags 数据权限
     * @name DataScopeList
     * @summary 分页
     * @request GET:/blade-system/data-scope/list
     * @secure
     */
    dataScopeList: (
      query?: {
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
         * 当前页
         * @format int32
         */
        current?: number;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 菜单主键 */
        menuId?: string;
        /** 数据权限备注 */
        remark?: string;
        /** 资源编号 */
        resourceCode?: string;
        /** 数据权限类名 */
        scopeClass?: string;
        /** 数据权限字段 */
        scopeColumn?: string;
        /** 数据权限可见字段 */
        scopeField?: string;
        /** 数据权限名称 */
        scopeName?: string;
        /**
         * 数据权限类型
         * @format int32
         */
        scopeType?: number;
        /** 数据权限值域 */
        scopeValue?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDataScopeVO, void>({
        path: `/blade-system/data-scope/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 数据权限
     * @name DataScopeRemove
     * @summary 逻辑删除
     * @request POST:/blade-system/data-scope/remove
     * @secure
     */
    dataScopeRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/data-scope/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dataScope
     *
     * @tags 数据权限
     * @name DataScopeSave
     * @summary 新增
     * @request POST:/blade-system/data-scope/save
     * @secure
     */
    dataScopeSave: (dataScope: DataScope, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/data-scope/save`,
        method: 'POST',
        body: dataScope,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dataScope
     *
     * @tags 数据权限
     * @name DataScopeSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/data-scope/submit
     * @secure
     */
    dataScopeSubmit: (dataScope: DataScope, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/data-scope/submit`,
        method: 'POST',
        body: dataScope,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dataScope
     *
     * @tags 数据权限
     * @name DataScopeUpdate
     * @summary 修改
     * @request POST:/blade-system/data-scope/update
     * @secure
     */
    dataScopeUpdate: (dataScope: DataScope, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/data-scope/update`,
        method: 'POST',
        body: dataScope,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dict
     *
     * @tags 业务字典
     * @name DictBizChildList
     * @summary 列表
     * @request GET:/blade-system/dict-biz/child-list
     * @secure
     */
    dictBizChildList: (
      query?: {
        /** 字典编号 */
        code?: string;
        /** 字典名称 */
        dictValue?: string;
        /** 字典名称 */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDictBizVO, void>({
        path: `/blade-system/dict-biz/child-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dict
     *
     * @tags 业务字典
     * @name DictBizDetail
     * @summary 详情
     * @request GET:/blade-system/dict-biz/detail
     * @secure
     */
    dictBizDetail: (
      query?: {
        /** 字典码 */
        code?: string;
        /** 字典值 */
        dictKey?: string;
        /** 字典名称 */
        dictValue?: string;
        /** 主键 */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /**
         * 是否已封存
         * @format int32
         */
        isSealed?: number;
        /** 父主键 */
        parentId?: string;
        /** 字典备注 */
        remark?: string;
        /**
         * 排序
         * @format int32
         */
        sort?: number;
        /** 租户ID */
        tenantId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDictBizVO, void>({
        path: `/blade-system/dict-biz/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 获取字典
     *
     * @tags 业务字典
     * @name DictBizDictionary
     * @summary 获取字典
     * @request GET:/blade-system/dict-biz/dictionary
     * @secure
     */
    dictBizDictionary: (
      query?: {
        /** code */
        code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDictBiz, void>({
        path: `/blade-system/dict-biz/dictionary`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 获取字典树
     *
     * @tags 业务字典
     * @name DictBizDictionaryTree
     * @summary 获取字典树
     * @request GET:/blade-system/dict-biz/dictionary-tree
     * @secure
     */
    dictBizDictionaryTree: (
      query?: {
        /** code */
        code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDictBizVO, void>({
        path: `/blade-system/dict-biz/dictionary-tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dict
     *
     * @tags 业务字典
     * @name DictBizList
     * @summary 列表
     * @request GET:/blade-system/dict-biz/list
     * @secure
     */
    dictBizList: (
      query?: {
        /** 字典编号 */
        code?: string;
        /** 字典名称 */
        dictValue?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDictBizVO, void>({
        path: `/blade-system/dict-biz/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dict
     *
     * @tags 业务字典
     * @name DictBizParentList
     * @summary 列表
     * @request GET:/blade-system/dict-biz/parent-list
     * @secure
     */
    dictBizParentList: (
      query?: {
        /** 字典编号 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 字典名称 */
        dictValue?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDictBizVO, void>({
        path: `/blade-system/dict-biz/parent-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 业务字典
     * @name DictBizParentTree
     * @summary 树形结构
     * @request GET:/blade-system/dict-biz/parent-tree
     * @secure
     */
    dictBizParentTree: (params: RequestParams = {}) =>
      this.request<RListDictBizVO, void>({
        path: `/blade-system/dict-biz/parent-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 业务字典
     * @name DictBizRemove
     * @summary 删除
     * @request POST:/blade-system/dict-biz/remove
     * @secure
     */
    dictBizRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/dict-biz/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dict
     *
     * @tags 业务字典
     * @name DictBizSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/dict-biz/submit
     * @secure
     */
    dictBizSubmit: (dict: DictBiz, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/dict-biz/submit`,
        method: 'POST',
        body: dict,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 业务字典
     * @name DictBizTree
     * @summary 树形结构
     * @request GET:/blade-system/dict-biz/tree
     * @secure
     */
    dictBizTree: (params: RequestParams = {}) =>
      this.request<RListDictBizVO, void>({
        path: `/blade-system/dict-biz/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dict
     *
     * @tags 字典
     * @name DictChildList
     * @summary 列表
     * @request GET:/blade-system/dict/child-list
     * @secure
     */
    dictChildList: (
      query?: {
        /** 字典编号 */
        code?: string;
        /** 字典名称 */
        dictValue?: string;
        /** 字典名称 */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDictVO, void>({
        path: `/blade-system/dict/child-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 清除字典缓存
     *
     * @tags 字典
     * @name DictClearDictionaryCache
     * @summary 清除字典缓存
     * @request GET:/blade-system/dict/clear-dictionary-cache
     * @secure
     */
    dictClearDictionaryCache: (params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/dict/clear-dictionary-cache`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dict
     *
     * @tags 字典
     * @name DictDetail
     * @summary 详情
     * @request GET:/blade-system/dict/detail
     * @secure
     */
    dictDetail: (
      query?: {
        /** 字典码 */
        code?: string;
        /** 字典值 */
        dictKey?: string;
        /** 字典名称 */
        dictValue?: string;
        /** 主键 */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /**
         * 是否已封存
         * @format int32
         */
        isSealed?: number;
        /** 父主键 */
        parentId?: string;
        /** 字典备注 */
        remark?: string;
        /**
         * 排序
         * @format int32
         */
        sort?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDictVO, void>({
        path: `/blade-system/dict/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 获取字典
     *
     * @tags 字典
     * @name DictDictionary
     * @summary 获取字典
     * @request GET:/blade-system/dict/dictionary
     * @secure
     */
    dictDictionary: (
      query?: {
        /** code */
        code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDict, void>({
        path: `/blade-system/dict/dictionary`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 获取字典树
     *
     * @tags 字典
     * @name DictDictionaryTree
     * @summary 获取字典树
     * @request GET:/blade-system/dict/dictionary-tree
     * @secure
     */
    dictDictionaryTree: (
      query?: {
        /** code */
        code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDictVO, void>({
        path: `/blade-system/dict/dictionary-tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dict
     *
     * @tags 字典
     * @name DictList
     * @summary 列表
     * @request GET:/blade-system/dict/list
     * @secure
     */
    dictList: (
      query?: {
        /** 字典编号 */
        code?: string;
        /** 字典名称 */
        dictValue?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDictVO, void>({
        path: `/blade-system/dict/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dict
     *
     * @tags 字典
     * @name DictParentList
     * @summary 列表
     * @request GET:/blade-system/dict/parent-list
     * @secure
     */
    dictParentList: (
      query?: {
        /** 字典编号 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 字典名称 */
        dictValue?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDictVO, void>({
        path: `/blade-system/dict/parent-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 字典
     * @name DictParentTree
     * @summary 树形结构
     * @request GET:/blade-system/dict/parent-tree
     * @secure
     */
    dictParentTree: (params: RequestParams = {}) =>
      this.request<RListDictVO, void>({
        path: `/blade-system/dict/parent-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 字典
     * @name DictRemove
     * @summary 删除
     * @request POST:/blade-system/dict/remove
     * @secure
     */
    dictRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/dict/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 字典
     * @name DictSubmit
     * @summary submit
     * @request POST:/blade-system/dict/submit
     * @secure
     */
    dictSubmit: (dict: Dict, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/dict/submit`,
        method: 'POST',
        body: dict,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 字典
     * @name DictTree
     * @summary 树形结构
     * @request GET:/blade-system/dict/tree
     * @secure
     */
    dictTree: (params: RequestParams = {}) =>
      this.request<RListDictVO, void>({
        path: `/blade-system/dict/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dmp心跳服务
     * @name DmpHeartbeatServerHeartbeat
     * @summary 服务心跳
     * @request POST:/blade-system/dmp-heartbeat-server/heartbeat
     * @secure
     */
    dmpHeartbeatServerHeartbeat: (heartbeatRequest: HeartbeatRequest, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/dmp-heartbeat-server/heartbeat`,
        method: 'POST',
        body: heartbeatRequest,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dmp心跳服务
     * @name DmpHeartbeatServerRegister
     * @summary 服务注册
     * @request POST:/blade-system/dmp-heartbeat-server/register
     * @secure
     */
    dmpHeartbeatServerRegister: (registerRequest: RegisterRequest, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/dmp-heartbeat-server/register`,
        method: 'POST',
        body: registerRequest,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dmpLinkSetVO
     *
     * @tags dmp地址设置管理
     * @name DmpLinkSetInsert
     * @summary dmp地址设置新增
     * @request POST:/blade-system/dmp-link-set/insert
     * @secure
     */
    dmpLinkSetInsert: (dmpLinkSetVO: DmpLinkSetVo, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/dmp-link-set/insert`,
        method: 'POST',
        body: dmpLinkSetVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags dmp地址设置管理
     * @name DmpLinkSetList
     * @summary dmp地址设置列表
     * @request GET:/blade-system/dmp-link-set/list
     * @secure
     */
    dmpLinkSetList: (params: RequestParams = {}) =>
      this.request<RListDmpLinkSetVo, void>({
        path: `/blade-system/dmp-link-set/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags dmp地址设置管理
     * @name DmpLinkSetRemove
     * @summary dmp地址设置删除
     * @request DELETE:/blade-system/dmp-link-set/remove
     * @secure
     */
    dmpLinkSetRemove: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/dmp-link-set/remove`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dmpLinkSetVO
     *
     * @tags dmp地址设置管理
     * @name DmpLinkSetUpdate
     * @summary dmp地址设置修改
     * @request PUT:/blade-system/dmp-link-set/update
     * @secure
     */
    dmpLinkSetUpdate: (dmpLinkSetVO: DmpLinkSetVo, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/dmp-link-set/update`,
        method: 'PUT',
        body: dmpLinkSetVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 图库图片管理
     * @name GalleryItemCount
     * @summary 图库图片统计值
     * @request GET:/blade-system/gallery-item/count
     * @secure
     */
    galleryItemCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-system/gallery-item/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入galleryItem
     *
     * @tags 图库图片管理
     * @name GalleryItemDetail
     * @summary 图库图片详情
     * @request GET:/blade-system/gallery-item/get/{id}
     * @secure
     */
    galleryItemDetail: (id: string, params: RequestParams = {}) =>
      this.request<RGalleryItemVO, void>({
        path: `/blade-system/gallery-item/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入galleryItemVO
     *
     * @tags 图库图片管理
     * @name GalleryItemInsert
     * @summary 图库图片新增
     * @request POST:/blade-system/gallery-item/insert
     * @secure
     */
    galleryItemInsert: (
      data: {
        /** file */
        file: File;
      },
      query?: {
        /** 图库类别ID */
        galleryId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RGalleryItemVO, void>({
        path: `/blade-system/gallery-item/insert`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 图库图片管理
     * @name GalleryItemList
     * @summary 图库图片列表
     * @request GET:/blade-system/gallery-item/list
     * @secure
     */
    galleryItemList: (
      query?: {
        /** 图库图片类别ID */
        galleryId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListGalleryItemVO, void>({
        path: `/blade-system/gallery-item/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 图库图片管理
     * @name GalleryItemPage
     * @summary 图库图片分页
     * @request GET:/blade-system/gallery-item/page
     * @secure
     */
    galleryItemPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 图库图片类别ID */
        galleryId?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageGalleryItemVO, void>({
        path: `/blade-system/gallery-item/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 图库图片管理
     * @name GalleryItemRemove
     * @summary 图库图片删除
     * @request DELETE:/blade-system/gallery-item/remove
     * @secure
     */
    galleryItemRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/gallery-item/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入galleryItemUpdateVO
     *
     * @tags 图库图片管理
     * @name GalleryItemUpdate
     * @summary 图库图片修改
     * @request PUT:/blade-system/gallery-item/update
     * @secure
     */
    galleryItemUpdate: (galleryItemUpdateVO: VO3, params: RequestParams = {}) =>
      this.request<RGalleryItemVO, void>({
        path: `/blade-system/gallery-item/update`,
        method: 'PUT',
        body: galleryItemUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 图库管理
     * @name GalleryCount
     * @summary 图库统计值
     * @request GET:/blade-system/gallery/count
     * @secure
     */
    galleryCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-system/gallery/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入gallery
     *
     * @tags 图库管理
     * @name GalleryDetail
     * @summary 图库详情
     * @request GET:/blade-system/gallery/get/{id}
     * @secure
     */
    galleryDetail: (id: string, params: RequestParams = {}) =>
      this.request<RGalleryVO, void>({
        path: `/blade-system/gallery/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入galleryInsertVO
     *
     * @tags 图库管理
     * @name GalleryInsert
     * @summary 图库新增
     * @request POST:/blade-system/gallery/insert
     * @secure
     */
    galleryInsert: (galleryInsertVO: _VO, params: RequestParams = {}) =>
      this.request<RGalleryVO, void>({
        path: `/blade-system/gallery/insert`,
        method: 'POST',
        body: galleryInsertVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 图库管理
     * @name GalleryList
     * @summary 图库列表
     * @request GET:/blade-system/gallery/list
     * @secure
     */
    galleryList: (params: RequestParams = {}) =>
      this.request<RListGalleryVO, void>({
        path: `/blade-system/gallery/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 图库管理
     * @name GalleryPage
     * @summary 图库分页
     * @request GET:/blade-system/gallery/page
     * @secure
     */
    galleryPage: (
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
      this.request<RIPageGalleryVO, void>({
        path: `/blade-system/gallery/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 图库管理
     * @name GalleryRemove
     * @summary 图库删除
     * @request DELETE:/blade-system/gallery/remove
     * @secure
     */
    galleryRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/gallery/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 图库管理
     * @name GalleryTree
     * @summary 图库树结构， 带图片
     * @request GET:/blade-system/gallery/tree
     * @secure
     */
    galleryTree: (
      query?: {
        /**
         * 图库图片类别ID
         * @format int32
         */
        itemCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListGalleryVo, void>({
        path: `/blade-system/gallery/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入galleryUpdateVO
     *
     * @tags 图库管理
     * @name GalleryUpdate
     * @summary 图库修改
     * @request PUT:/blade-system/gallery/update
     * @secure
     */
    galleryUpdate: (galleryUpdateVO: VO2, params: RequestParams = {}) =>
      this.request<RGalleryVO, void>({
        path: `/blade-system/gallery/update`,
        method: 'PUT',
        body: galleryUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 图库管理
     * @name GalleryZipDownload
     * @summary 批量导出图库，返回zip文件信息
     * @request POST:/blade-system/gallery/zip/download
     * @secure
     */
    galleryZipDownload: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-system/gallery/zip/download`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 图库zip文件
     *
     * @tags 图库管理
     * @name GalleryZipImport
     * @summary 批量导入图库
     * @request POST:/blade-system/gallery/zip/import
     * @secure
     */
    galleryZipImport: (
      data: {
        /**
         * 图库文件
         * @format binary
         */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/gallery/zip/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 压测数据生成
     * @name GenerateDataCleanGenerateData
     * @summary 清除压测数据
     * @request DELETE:/blade-system/generate/clean
     * @secure
     */
    generateDataCleanGenerateData: (generateDataCleanVO: GenerateDataCleanVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/generate/clean`,
        method: 'DELETE',
        body: generateDataCleanVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 压测数据生成
     * @name GenerateDataGenerateData
     * @summary 效率分析压测数据生成
     * @request POST:/blade-system/generate/generateData
     * @secure
     */
    generateDataGenerateData: (generateDataVO: GenerateDataVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/generate/generateData`,
        method: 'POST',
        body: generateDataVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 压测数据生成
     * @name GenerateDataGetTree
     * @summary 工位树
     * @request GET:/blade-system/generate/workstationTree
     * @secure
     */
    generateDataGetTree: (params: RequestParams = {}) =>
      this.request<RListGroupTreeVO, void>({
        path: `/blade-system/generate/workstationTree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 确认当前用户引导完成
     *
     * @tags 引导页记录
     * @name GuidePageRecordConfirm
     * @summary 确认当前用户引导完成
     * @request POST:/blade-system/guide-page/confirm
     * @secure
     */
    guidePageRecordConfirm: (guideType: number, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/guide-page/confirm`,
        method: 'POST',
        body: guideType,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入引导页类型
     *
     * @tags 引导页记录
     * @name GuidePageRecordGetGuideStatus
     * @summary 查看当前用户引导页状态
     * @request GET:/blade-system/guide-page/{guideType}
     * @secure
     */
    guidePageRecordGetGuideStatus: (guideType: number, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/guide-page/${guideType}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description dnc全局使用
     *
     * @tags hmiPAD信息表管理
     * @name HmiPadHmiDncWorkstation
     * @summary dnc对应工位
     * @request POST:/blade-system/hmi-pad/dnc-global-workstation
     * @secure
     */
    hmiPadHmiDncWorkstation: (workstationIds: string[], params: RequestParams = {}) =>
      this.request<RListHmiWorkstationDncVO, void>({
        path: `/blade-system/hmi-pad/dnc-global-workstation`,
        method: 'POST',
        body: workstationIds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hmiPAD信息表管理
     * @name HmiPadHmiStartData
     * @summary hmi初始化PAD信息
     * @request POST:/blade-system/hmi-pad/hmi-start-data
     * @secure
     */
    hmiPadHmiStartData: (hmiCreatePadDataVO: HmiCreatePadDataVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/hmi-pad/hmi-start-data`,
        method: 'POST',
        body: hmiCreatePadDataVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hmiPAD信息表管理
     * @name HmiPadHmiUpStartData
     * @summary 更新hmiPAD初始化信息
     * @request POST:/blade-system/hmi-pad/hmi-start-up-data
     * @secure
     */
    hmiPadHmiUpStartData: (hmiUpPadDataVO: HmiCreatePadDataVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/hmi-pad/hmi-start-up-data`,
        method: 'POST',
        body: hmiUpPadDataVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hmiPAD信息表管理
     * @name HmiPadInspectFirstInitialized
     * @summary 校验pad是否完成初始化
     * @request GET:/blade-system/hmi-pad/inspect-initialized
     * @secure
     */
    hmiPadInspectFirstInitialized: (
      query: {
        /** snCode */
        snCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/hmi-pad/inspect-initialized`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description hmi全局使用
     *
     * @tags hmiPAD信息表管理
     * @name HmiPadHmiLoginGlobalWorkstation
     * @summary hmi登入员工所对应的工位
     * @request GET:/blade-system/hmi-pad/login-global-workstation
     * @secure
     */
    hmiPadHmiLoginGlobalWorkstation: (
      query: {
        /** snCode */
        snCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListHmiLoginWorkstationVO, void>({
        path: `/blade-system/hmi-pad/login-global-workstation`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hmiPAD信息表管理
     * @name HmiPadPadLoginTimeUp
     * @summary pad登入时间更新
     * @request GET:/blade-system/hmi-pad/pad-login-time-up
     * @secure
     */
    hmiPadPadLoginTimeUp: (
      query: {
        /** snCode */
        snCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/hmi-pad/pad-login-time-up`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hmiPAD信息表管理
     * @name HmiPadDelPad
     * @summary 删除pad信息
     * @request GET:/blade-system/hmi-pad/pc-pad-del
     * @secure
     */
    hmiPadDelPad: (
      query: {
        /** padId */
        padId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/hmi-pad/pc-pad-del`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hmiPAD信息表管理
     * @name HmiPadEditPadDada
     * @summary 编辑PAD的hmi名称
     * @request GET:/blade-system/hmi-pad/pc-pad-edit
     * @secure
     */
    hmiPadEditPadDada: (
      query: {
        /** hmiName */
        hmiName: string;
        /** padId */
        padId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RHmiPadVo, void>({
        path: `/blade-system/hmi-pad/pc-pad-edit`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hmiPAD信息表管理
     * @name HmiPadHmiPadList
     * @summary pc端PAD信息列表
     * @request GET:/blade-system/hmi-pad/pc-pad-list
     * @secure
     */
    hmiPadHmiPadList: (
      query: {
        /** hmiName */
        hmiName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListHmiPadVo, void>({
        path: `/blade-system/hmi-pad/pc-pad-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description PAD绑定的工位/工位组
     *
     * @tags HMI pad关联工位或工位组表管理
     * @name HmiRelationWorkstationAddGroupOrWorkstation
     * @summary 绑定工位/工位组
     * @request POST:/blade-system/hmi-relation-workstation/add-group-or-workstation
     * @secure
     */
    hmiRelationWorkstationAddGroupOrWorkstation: (relationWorkstationGroupVO: RelationWorkstationGroupVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/hmi-relation-workstation/add-group-or-workstation`,
        method: 'POST',
        body: relationWorkstationGroupVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除PAD绑定的工位/工位组
     *
     * @tags HMI pad关联工位或工位组表管理
     * @name HmiRelationWorkstationDelHmiRelationWorkstation
     * @summary 删除
     * @request GET:/blade-system/hmi-relation-workstation/del-group-or-workstation
     * @secure
     */
    hmiRelationWorkstationDelHmiRelationWorkstation: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/hmi-relation-workstation/del-group-or-workstation`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 工位组工位详情
     *
     * @tags HMI pad关联工位或工位组表管理
     * @name HmiRelationWorkstationGetHmiPadWorkstationDetail
     * @summary 工位详情
     * @request GET:/blade-system/hmi-relation-workstation/pad-workstation-detail
     * @secure
     */
    hmiRelationWorkstationGetHmiPadWorkstationDetail: (
      query: {
        /** groupId */
        groupId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RHmiPadWorkstationDetailVO, void>({
        path: `/blade-system/hmi-relation-workstation/pad-workstation-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description hmi 获取pad未绑定工位组接口
     *
     * @tags HMI pad关联工位或工位组表管理
     * @name HmiRelationWorkstationPageNotRelateGroup
     * @summary 未绑定的工位组
     * @request GET:/blade-system/hmi-relation-workstation/page-not-relate-group
     * @secure
     */
    hmiRelationWorkstationPageNotRelateGroup: (
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
        /** padId */
        padId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageHmiPadWorkstationGroupPageVO, void>({
        path: `/blade-system/hmi-relation-workstation/page-not-relate-group`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description hmi 获取pad绑定工位组接口
     *
     * @tags HMI pad关联工位或工位组表管理
     * @name HmiRelationWorkstationGetHmiPadWorkstationGroupList
     * @summary 工位组分页
     * @request GET:/blade-system/hmi-relation-workstation/workstation-group-page
     * @secure
     */
    hmiRelationWorkstationGetHmiPadWorkstationGroupList: (
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
        /** padId */
        padId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageHmiPadWorkstationGroupVO, void>({
        path: `/blade-system/hmi-relation-workstation/workstation-group-page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description hmi 获取pad绑定工位列表接口
     *
     * @tags HMI pad关联工位或工位组表管理
     * @name HmiRelationWorkstationGetHmiPadWorkstationList
     * @summary 工位分页
     * @request GET:/blade-system/hmi-relation-workstation/workstation-page
     * @secure
     */
    hmiRelationWorkstationGetHmiPadWorkstationList: (
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
        /** padId */
        padId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageHmiPadWorkstationVO, void>({
        path: `/blade-system/hmi-relation-workstation/workstation-page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 新增国际化信息
     *
     * @tags 国际化信息管理
     * @name I18NDataSave
     * @summary 新增国际化信息
     * @request POST:/blade-system/i18n/i18n-data
     * @secure
     */
    i18NDataSave: (i18nDataDTO: I18NDataDTO, params: RequestParams = {}) =>
      this.request<RBladeI18NData, void>({
        path: `/blade-system/i18n/i18n-data`,
        method: 'POST',
        body: i18nDataDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 修改国际化信息
     *
     * @tags 国际化信息管理
     * @name I18NDataUpdateById
     * @summary 修改国际化信息
     * @request PUT:/blade-system/i18n/i18n-data
     * @secure
     */
    i18NDataUpdateById: (i18nDataDTO: I18NDataDTO, params: RequestParams = {}) =>
      this.request<RBladeI18NData, void>({
        path: `/blade-system/i18n/i18n-data`,
        method: 'PUT',
        body: i18nDataDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 通过id删除国际化信息
     *
     * @tags 国际化信息管理
     * @name I18NDataRemove
     * @summary 通过id删除国际化信息
     * @request DELETE:/blade-system/i18n/i18n-data
     * @secure
     */
    i18NDataRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/i18n/i18n-data`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 国际化信息 Excel 模板
     *
     * @tags 国际化信息管理
     * @name I18NDataExcelTemplate
     * @summary 国际化信息 Excel 模板
     * @request GET:/blade-system/i18n/i18n-data/excel-template
     * @secure
     */
    i18NDataExcelTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-system/i18n/i18n-data/excel-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 导出国际化信息
     *
     * @tags 国际化信息管理
     * @name I18NDataExportI18NData
     * @summary 导出国际化信息
     * @request GET:/blade-system/i18n/i18n-data/export
     * @secure
     */
    i18NDataExportI18NData: (
      query?: {
        /** 国际化标识 */
        code?: string;
        /** 前端输入狂，文本信息或者备注信息 */
        condition?: string;
        /** 语言标签 */
        languageTag?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBladeFile, void>({
        path: `/blade-system/i18n/i18n-data/export`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 导入国际化信息
     *
     * @tags 国际化信息管理
     * @name I18NDataImportI18NData
     * @summary 导入国际化信息
     * @request POST:/blade-system/i18n/i18n-data/import
     * @secure
     */
    i18NDataImportI18NData: (data: any, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-system/i18n/i18n-data/import`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 查询指定国际化标识的所有数据
     *
     * @tags 国际化信息管理
     * @name I18NDataListByCode
     * @summary 查询指定国际化标识的所有数据
     * @request GET:/blade-system/i18n/i18n-data/list
     * @secure
     */
    i18NDataListByCode: (
      query: {
        /** code */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListBladeI18NData, void>({
        path: `/blade-system/i18n/i18n-data/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 分页查询
     *
     * @tags 国际化信息管理
     * @name I18NDataGetI18NDataPage
     * @summary 分页查询
     * @request GET:/blade-system/i18n/i18n-data/page
     * @secure
     */
    i18NDataGetI18NDataPage: (
      query?: {
        /** 国际化标识 */
        code?: string;
        /** 前端输入狂，文本信息或者备注信息 */
        condition?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 语言标签 */
        languageTag?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageI18NDataPageVO, void>({
        path: `/blade-system/i18n/i18n-data/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 动态接口字段管理
     * @name InterfaceConfigFieldCount
     * @summary 接口字段表统计值
     * @request GET:/blade-system/interface-config-field/count
     * @secure
     */
    interfaceConfigFieldCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-system/interface-config-field/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入interfaceConfigField
     *
     * @tags 动态接口字段管理
     * @name InterfaceConfigFieldDetail
     * @summary 接口字段表详情
     * @request GET:/blade-system/interface-config-field/get/{id}
     * @secure
     */
    interfaceConfigFieldDetail: (id: string, params: RequestParams = {}) =>
      this.request<RInterfaceConfigFieldVo, void>({
        path: `/blade-system/interface-config-field/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入interfaceConfigFieldVO
     *
     * @tags 动态接口字段管理
     * @name InterfaceConfigFieldInsert
     * @summary 接口字段表新增
     * @request POST:/blade-system/interface-config-field/insert
     * @secure
     */
    interfaceConfigFieldInsert: (interfaceConfigFieldVO: InterfaceConfigFieldVo, params: RequestParams = {}) =>
      this.request<RInterfaceConfigFieldVo, void>({
        path: `/blade-system/interface-config-field/insert`,
        method: 'POST',
        body: interfaceConfigFieldVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 动态接口字段管理
     * @name InterfaceConfigFieldList
     * @summary 接口字段表列表
     * @request GET:/blade-system/interface-config-field/list
     * @secure
     */
    interfaceConfigFieldList: (
      query?: {
        /** 根据接口ID获取接口字段配置 */
        configId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListInterfaceConfigFieldVo, void>({
        path: `/blade-system/interface-config-field/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 动态接口字段管理
     * @name InterfaceConfigFieldPage
     * @summary 接口字段表分页
     * @request GET:/blade-system/interface-config-field/page
     * @secure
     */
    interfaceConfigFieldPage: (
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
      this.request<RIPageInterfaceConfigFieldVo, void>({
        path: `/blade-system/interface-config-field/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 动态接口字段管理
     * @name InterfaceConfigFieldRemove
     * @summary 接口字段表删除
     * @request DELETE:/blade-system/interface-config-field/remove
     * @secure
     */
    interfaceConfigFieldRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/interface-config-field/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入interfaceConfigFieldVO
     *
     * @tags 动态接口字段管理
     * @name InterfaceConfigFieldUpdate
     * @summary 接口字段表修改
     * @request PUT:/blade-system/interface-config-field/update
     * @secure
     */
    interfaceConfigFieldUpdate: (interfaceConfigFieldVO: InterfaceConfigFieldVo, params: RequestParams = {}) =>
      this.request<RInterfaceConfigFieldVo, void>({
        path: `/blade-system/interface-config-field/update`,
        method: 'PUT',
        body: interfaceConfigFieldVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 动态接口管理
     * @name InterfaceConfigCount
     * @summary 接口配置表统计值
     * @request GET:/blade-system/interface-config/count
     * @secure
     */
    interfaceConfigCount: (params: RequestParams = {}) =>
      this.request<RLong, void>({
        path: `/blade-system/interface-config/count`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入interfaceConfig
     *
     * @tags 动态接口管理
     * @name InterfaceConfigDetail
     * @summary 接口配置表详情
     * @request GET:/blade-system/interface-config/get/{id}
     * @secure
     */
    interfaceConfigDetail: (id: string, params: RequestParams = {}) =>
      this.request<RInterfaceConfigVo, void>({
        path: `/blade-system/interface-config/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description bizType 使用字典 interface_biz_type 转义
     *
     * @tags 动态接口管理
     * @name InterfaceConfigGetGroupList
     * @summary 业务分组下的接口列表
     * @request GET:/blade-system/interface-config/groupList
     * @secure
     */
    interfaceConfigGetGroupList: (params: RequestParams = {}) =>
      this.request<RInterfaceConfigGroupListVO, void>({
        path: `/blade-system/interface-config/groupList`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入interfaceConfigVO
     *
     * @tags 动态接口管理
     * @name InterfaceConfigInsert
     * @summary 接口配置表新增
     * @request POST:/blade-system/interface-config/insert
     * @secure
     */
    interfaceConfigInsert: (interfaceConfigVO: InterfaceConfigVo, params: RequestParams = {}) =>
      this.request<RInterfaceConfigVo, void>({
        path: `/blade-system/interface-config/insert`,
        method: 'POST',
        body: interfaceConfigVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 动态接口管理
     * @name InterfaceConfigList
     * @summary 接口配置表列表
     * @request GET:/blade-system/interface-config/list
     * @secure
     */
    interfaceConfigList: (
      query?: {
        /** 根据 */
        owningChart?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListInterfaceConfigVo, void>({
        path: `/blade-system/interface-config/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 动态接口管理
     * @name InterfaceConfigPage
     * @summary 接口配置表分页
     * @request GET:/blade-system/interface-config/page
     * @secure
     */
    interfaceConfigPage: (
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
      this.request<RIPageInterfaceConfigVo, void>({
        path: `/blade-system/interface-config/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 动态接口管理
     * @name InterfaceConfigRemove
     * @summary 接口配置表删除
     * @request DELETE:/blade-system/interface-config/remove
     * @secure
     */
    interfaceConfigRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/interface-config/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 动态接口管理
     * @name InterfaceConfigUpdate
     * @summary 接口配置表修改
     * @request PUT:/blade-system/interface-config/update
     * @secure
     */
    interfaceConfigUpdate: (vo: InterfaceConfigVo, params: RequestParams = {}) =>
      this.request<RInterfaceConfigVo, void>({
        path: `/blade-system/interface-config/update`,
        method: 'PUT',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 菜单
     * @name MenuAuthRoutes
     * @summary 菜单的角色权限
     * @request GET:/blade-system/menu/auth-routes
     * @secure
     */
    menuAuthRoutes: (params: RequestParams = {}) =>
      this.request<RListKv, void>({
        path: `/blade-system/menu/auth-routes`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 前端按钮数据
     *
     * @tags 菜单
     * @name MenuButtons
     * @summary 前端按钮数据
     * @request GET:/blade-system/menu/buttons
     * @secure
     */
    menuButtons: (params: RequestParams = {}) =>
      this.request<RListMenuVO, void>({
        path: `/blade-system/menu/buttons`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入menu
     *
     * @tags 菜单
     * @name MenuDetail
     * @summary 详情
     * @request GET:/blade-system/menu/detail
     * @secure
     */
    menuDetail: (
      query?: {
        /**
         * 操作按钮类型
         * @format int32
         */
        action?: number;
        /** 菜单别名 */
        alias?: string;
        /** 所属应用,CPS:FMS:VISION */
        belongApplication?: string;
        /**
         * 菜单类型
         * @format int32
         */
        category?: number;
        /** 菜单编号 */
        code?: string;
        /** 主键 */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /**
         * 是否打开新页面
         * @format int32
         */
        isOpen?: number;
        /**
         * 路由缓冲
         * @format int32
         */
        keepAlive?: number;
        /** 菜单名称 */
        name?: string;
        /** 菜单父主键 */
        parentId?: string;
        /** 请求地址 */
        path?: string;
        /** 备注 */
        remark?: string;
        /**
         * 排序
         * @format int32
         */
        sort?: number;
        /** 菜单资源 */
        source?: string;
        features?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMenuVO, void>({
        path: `/blade-system/menu/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 顶部菜单树形结构
     *
     * @tags 菜单
     * @name MenuGrantTopTree
     * @summary 顶部菜单树形结构
     * @request GET:/blade-system/menu/grant-top-tree
     * @secure
     */
    menuGrantTopTree: (params: RequestParams = {}) =>
      this.request<RGrantTreeVO, void>({
        path: `/blade-system/menu/grant-top-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 权限分配树形结构
     *
     * @tags 菜单
     * @name MenuGrantTree
     * @summary 权限分配树形结构
     * @request GET:/blade-system/menu/grant-tree
     * @secure
     */
    menuGrantTree: (params: RequestParams = {}) =>
      this.request<RGrantTreeVO, void>({
        path: `/blade-system/menu/grant-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 权限分配树形结构(卡片)
     *
     * @tags 菜单
     * @name MenuGrantTreeCard
     * @summary 权限分配树形结构(卡片)
     * @request GET:/blade-system/menu/grant-tree-card
     * @secure
     */
    menuGrantTreeCard: (params: RequestParams = {}) =>
      this.request<RGrantTreeVO, void>({
        path: `/blade-system/menu/grant-tree-card`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入menu
     *
     * @tags 菜单
     * @name MenuLazyList
     * @summary 懒加载列表
     * @request GET:/blade-system/menu/lazy-list
     * @secure
     */
    menuLazyList: (
      query?: {
        /** 所属应用 CPS:FMS:VISION */
        belongApplication?: string;
        /** 菜单编号 */
        code?: string;
        /** 菜单名称 */
        name?: string;
        /** parentId */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMenuVO, void>({
        path: `/blade-system/menu/lazy-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入menu
     *
     * @tags 菜单
     * @name MenuLazyMenuList
     * @summary 懒加载菜单列表
     * @request GET:/blade-system/menu/lazy-menu-list
     * @secure
     */
    menuLazyMenuList: (
      query?: {
        /** 所属应用 CPS:FMS:VISION */
        belongApplication?: string;
        /** 菜单编号 */
        code?: string;
        /** 菜单名称 */
        name?: string;
        /** parentId */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMenuVO, void>({
        path: `/blade-system/menu/lazy-menu-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入menu
     *
     * @tags 菜单
     * @name MenuList
     * @summary 列表
     * @request GET:/blade-system/menu/list
     * @secure
     */
    menuList: (
      query?: {
        /** 菜单编号 */
        code?: string;
        /** 菜单名称 */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMenuVO, void>({
        path: `/blade-system/menu/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入menu
     *
     * @tags 菜单
     * @name MenuListNotRadio
     * @summary 列表(无按钮)
     * @request GET:/blade-system/menu/list-not-radio
     * @secure
     */
    menuListNotRadio: (
      query?: {
        /** 菜单编号 */
        code?: string;
        /** 菜单名称 */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMenuVO, void>({
        path: `/blade-system/menu/list-not-radio`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入menu
     *
     * @tags 菜单
     * @name MenuMenuList
     * @summary 菜单列表
     * @request GET:/blade-system/menu/menu-list
     * @secure
     */
    menuMenuList: (
      query?: {
        /** 菜单编号 */
        code?: string;
        /** 菜单名称 */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMenuVO, void>({
        path: `/blade-system/menu/menu-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 菜单
     * @name MenuRemove
     * @summary 删除
     * @request POST:/blade-system/menu/remove
     * @secure
     */
    menuRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/menu/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 角色所分配的树
     *
     * @tags 菜单
     * @name MenuRoleTreeKeys
     * @summary 角色所分配的树
     * @request GET:/blade-system/menu/role-tree-keys
     * @secure
     */
    menuRoleTreeKeys: (
      query?: {
        /** roleIds */
        roleIds?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCheckedTreeVO, void>({
        path: `/blade-system/menu/role-tree-keys`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 前端菜单数据
     *
     * @tags 菜单
     * @name MenuRoutes
     * @summary 前端菜单数据
     * @request GET:/blade-system/menu/routes
     * @secure
     */
    menuRoutes: (
      query?: {
        /** appCode */
        appCode?: string;
        /** topMenuId */
        topMenuId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMenuVO, void>({
        path: `/blade-system/menu/routes`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 前端菜单数据
     *
     * @tags 菜单
     * @name MenuRoutesExt
     * @summary 前端菜单数据
     * @request GET:/blade-system/menu/routes-ext
     * @secure
     */
    menuRoutesExt: (
      query?: {
        /** topMenuId */
        topMenuId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMenuVO, void>({
        path: `/blade-system/menu/routes-ext`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入menu
     *
     * @tags 菜单
     * @name MenuSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/menu/submit
     * @secure
     */
    menuSubmit: (menu: Menu, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/menu/submit`,
        method: 'POST',
        body: menu,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 顶部菜单数据
     *
     * @tags 菜单
     * @name MenuTopMenu
     * @summary 顶部菜单数据
     * @request GET:/blade-system/menu/top-menu
     * @secure
     */
    menuTopMenu: (params: RequestParams = {}) =>
      this.request<RListTopMenu, void>({
        path: `/blade-system/menu/top-menu`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 顶部菜单所分配的树
     *
     * @tags 菜单
     * @name MenuTopTreeKeys
     * @summary 顶部菜单所分配的树
     * @request GET:/blade-system/menu/top-tree-keys
     * @secure
     */
    menuTopTreeKeys: (
      query?: {
        /** topMenuIds */
        topMenuIds?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RCheckedTreeVO, void>({
        path: `/blade-system/menu/top-tree-keys`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 菜单
     * @name MenuTree
     * @summary 树形结构
     * @request GET:/blade-system/menu/tree
     * @secure
     */
    menuTree: (params: RequestParams = {}) =>
      this.request<RListTreeNode, void>({
        path: `/blade-system/menu/tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 业务对象字段类型列表
     *
     * @tags 业务对象字段类型相关接口
     * @name MetaObjectTypeFieldFindAll
     * @summary 分页
     * @request GET:/blade-system/meta-object-type-field/list
     * @secure
     */
    metaObjectTypeFieldFindAll: (
      query?: {
        /** 元素类型 */
        elementType?: string;
        /** 字段编码 */
        fCode?: string;
        /** 字段标题 */
        fName?: string;
        /** 数据库实体属性 */
        field?: string;
        /** 所属业务对象 */
        objectId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListMetaObjectTypeField1, void>({
        path: `/blade-system/meta-object-type-field/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象字段类型相关接口
     * @name MetaObjectTypeFieldRemove
     * @summary remove
     * @request POST:/blade-system/meta-object-type-field/remove
     * @secure
     */
    metaObjectTypeFieldRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/meta-object-type-field/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象字段类型相关接口
     * @name MetaObjectTypeFieldSubmit
     * @summary submit
     * @request POST:/blade-system/meta-object-type-field/submit
     * @secure
     */
    metaObjectTypeFieldSubmit: (vo: MetaObjectTypeField, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/meta-object-type-field/submit`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象相关接口
     * @name MetaObjectTypeDetail
     * @summary 详情
     * @request GET:/blade-system/meta-object-type/detail
     * @secure
     */
    metaObjectTypeDetail: (
      query: {
        /** fId */
        fId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RMetaObjectType, void>({
        path: `/blade-system/meta-object-type/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 获取业务对象指定条件下得字段列表
     *
     * @tags 业务对象相关接口
     * @name MetaObjectTypeListField
     * @summary 分页
     * @request GET:/blade-system/meta-object-type/field/list
     * @secure
     */
    metaObjectTypeListField: (ListField: any, params: RequestParams = {}) =>
      this.request<RListMetaObjectTypeField, void>({
        path: `/blade-system/meta-object-type/field/list`,
        method: 'GET',
        body: ListField,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象相关接口
     * @name MetaObjectTypeFindAll
     * @summary findAll
     * @request GET:/blade-system/meta-object-type/findAll
     * @secure
     */
    metaObjectTypeFindAll: (
      query: {
        /** columns */
        columns: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListObject, void>({
        path: `/blade-system/meta-object-type/findAll`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 业务对象列表
     *
     * @tags 业务对象相关接口
     * @name MetaObjectTypeList
     * @summary 分页
     * @request GET:/blade-system/meta-object-type/list
     * @secure
     */
    metaObjectTypeList: (
      subsysId: string,
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
      this.request<RIPageMetaObjectType, void>({
        path: `/blade-system/meta-object-type/list`,
        method: 'GET',
        query: query,
        body: subsysId,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象相关接口
     * @name MetaObjectTypeRemove
     * @summary remove
     * @request POST:/blade-system/meta-object-type/remove
     * @secure
     */
    metaObjectTypeRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/meta-object-type/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象相关接口
     * @name MetaObjectTypeSaveRuleField
     * @summary 开启分类，或者关闭分类
     * @request GET:/blade-system/meta-object-type/save-rule-field
     * @secure
     */
    metaObjectTypeSaveRuleField: (
      query: {
        /** objectId */
        objectId: string;
        /** ruleDictKey */
        ruleDictKey?: string;
        /** ruleField */
        ruleField?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/meta-object-type/save-rule-field`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象相关接口
     * @name MetaObjectTypeSubmit
     * @summary submit
     * @request POST:/blade-system/meta-object-type/submit
     * @secure
     */
    metaObjectTypeSubmit: (metaObjectTypeDTO: MetaObjectTypeDTO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/meta-object-type/submit`,
        method: 'POST',
        body: metaObjectTypeDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象相关接口
     * @name MetaObjectTypeTableDetail
     * @summary tableDetail
     * @request GET:/blade-system/meta-object-type/tableDetail
     * @secure
     */
    metaObjectTypeTableDetail: (params: RequestParams = {}) =>
      this.request<RListTableDetail, void>({
        path: `/blade-system/meta-object-type/tableDetail`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 业务对象引用关系列表
     *
     * @tags 业务对象字段类型相关接口
     * @name MetaRefObjectTypeList
     * @summary 分页
     * @request GET:/blade-system/meta-ref-object-type/list
     * @secure
     */
    metaRefObjectTypeList: (
      refObjectTypeId: string,
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
      this.request<RIPageMetaRefObjectType, void>({
        path: `/blade-system/meta-ref-object-type/list`,
        method: 'GET',
        query: query,
        body: refObjectTypeId,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象字段类型相关接口
     * @name MetaRefObjectTypeRemove
     * @summary remove
     * @request POST:/blade-system/meta-ref-object-type/remove
     * @secure
     */
    metaRefObjectTypeRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/meta-ref-object-type/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 业务对象字段类型相关接口
     * @name MetaRefObjectTypeSubmit
     * @summary submit
     * @request POST:/blade-system/meta-ref-object-type/submit
     * @secure
     */
    metaRefObjectTypeSubmit: (metaRefObjectType: MetaRefObjectType, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/meta-ref-object-type/submit`,
        method: 'POST',
        body: metaRefObjectType,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入param
     *
     * @tags 业务参数管理
     * @name ParamBizDetail
     * @summary 详情
     * @request GET:/blade-system/param-biz/detail
     * @secure
     */
    paramBizDetail: (
      query?: {
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
        /** 参数键 */
        paramKey?: string;
        /** 参数名 */
        paramName?: string;
        /** 参数值 */
        paramValue?: string;
        /** 备注 */
        remark?: string;
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
        /** 用户ID */
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RParamBiz, void>({
        path: `/blade-system/param-biz/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入param
     *
     * @tags 业务参数管理
     * @name ParamBizList
     * @summary 分页
     * @request GET:/blade-system/param-biz/list
     * @secure
     */
    paramBizList: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 参数键名 */
        paramKey?: string;
        /** 参数名称 */
        paramName?: string;
        /** 参数键值 */
        paramValue?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageParamBiz, void>({
        path: `/blade-system/param-biz/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 业务参数管理
     * @name ParamBizRemove
     * @summary 逻辑删除
     * @request POST:/blade-system/param-biz/remove
     * @secure
     */
    paramBizRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/param-biz/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入param
     *
     * @tags 业务参数管理
     * @name ParamBizSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/param-biz/submit
     * @secure
     */
    paramBizSubmit: (param: ParamBiz, params: RequestParams = {}) =>
      this.request<RParamBiz, void>({
        path: `/blade-system/param-biz/submit`,
        method: 'POST',
        body: param,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入param
     *
     * @tags 参数管理
     * @name ParamDetail
     * @summary 详情
     * @request GET:/blade-system/param/detail
     * @secure
     */
    paramDetail: (
      query?: {
        /** 所属模块 */
        belongsModule?: string;
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
        /** 参数键 */
        paramKey?: string;
        /** 参数名 */
        paramName?: string;
        /** 参数值 */
        paramValue?: string;
        /** 参数用途：默认 用户 否 1 程序 */
        personalUse?: boolean;
        /** 备注 */
        remark?: string;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RParam, void>({
        path: `/blade-system/param/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入param
     *
     * @tags 参数管理
     * @name ParamList
     * @summary 分页
     * @request GET:/blade-system/param/list
     * @secure
     */
    paramList: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 参数键名 */
        paramKey?: string;
        /** 参数名称 */
        paramName?: string;
        /** 参数键值 */
        paramValue?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageParam, void>({
        path: `/blade-system/param/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 参数管理
     * @name ParamRemove
     * @summary 逻辑删除
     * @request POST:/blade-system/param/remove
     * @secure
     */
    paramRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/param/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入param
     *
     * @tags 参数管理
     * @name ParamSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/param/submit
     * @secure
     */
    paramSubmit: (param: Param, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/param/submit`,
        method: 'POST',
        body: param,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 获取系统版本详细
     *
     * @tags 参数管理
     * @name ParamAppVersion
     * @summary 系统版本
     * @request GET:/blade-system/param/version
     * @secure
     */
    paramAppVersion: (params: RequestParams = {}) =>
      this.request<RMap, void>({
        path: `/blade-system/param/version`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入post
     *
     * @tags 岗位
     * @name PostDetail
     * @summary 详情
     * @request GET:/blade-system/post/detail
     * @secure
     */
    postDetail: (
      query?: {
        /**
         * 类型
         * @format int32
         */
        category?: number;
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
        /** 岗位编号 */
        postCode?: string;
        /** 岗位名称 */
        postName?: string;
        /** 岗位描述 */
        remark?: string;
        /**
         * 岗位排序
         * @format int32
         */
        sort?: number;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RPostVO, void>({
        path: `/blade-system/post/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 岗位
     * @name PostExportPost
     * @summary 导出岗位
     * @request POST:/blade-system/post/export-post
     * @secure
     */
    postExportPost: (postSelectVO: PostSelectVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-system/post/export-post`,
        method: 'POST',
        body: postSelectVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 岗位
     * @name PostExportTemplate
     * @summary 导出模板
     * @request GET:/blade-system/post/export-template
     * @secure
     */
    postExportTemplate: (params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-system/post/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 岗位
     * @name PostImportPost
     * @summary 导入岗位
     * @request POST:/blade-system/post/import-post
     * @secure
     */
    postImportPost: (data: any, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/post/import-post`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入post
     *
     * @tags 岗位
     * @name PostList
     * @summary 分页
     * @request GET:/blade-system/post/list
     * @secure
     */
    postList: (
      query?: {
        /**
         * 类型
         * @format int32
         */
        category?: number;
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
         * 当前页
         * @format int32
         */
        current?: number;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 岗位编号 */
        postCode?: string;
        /** 岗位名称 */
        postName?: string;
        /** 岗位描述 */
        remark?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 岗位排序
         * @format int32
         */
        sort?: number;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPagePostVO, void>({
        path: `/blade-system/post/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入post
     *
     * @tags 岗位
     * @name PostPage
     * @summary 分页
     * @request GET:/blade-system/post/page
     * @secure
     */
    postPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 选中的列表数据 */
        ids?: string[];
        /** 关键词：岗位编号/岗位名称 */
        keywords?: string;
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
      this.request<RIPagePostDetailVO, void>({
        path: `/blade-system/post/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 岗位
     * @name PostRemove
     * @summary 逻辑删除
     * @request POST:/blade-system/post/remove
     * @secure
     */
    postRemove: (
      query: {
        /** 主键集合 */
        ids: string;
        /**
         * 删除传0 停用传1
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/post/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入post
     *
     * @tags 岗位
     * @name PostSave
     * @summary 新增
     * @request POST:/blade-system/post/save
     * @secure
     */
    postSave: (post: Post, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/post/save`,
        method: 'POST',
        body: post,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入post
     *
     * @tags 岗位
     * @name PostSelect
     * @summary 下拉数据源
     * @request GET:/blade-system/post/select
     * @secure
     */
    postSelect: (
      query?: {
        /** tenantId */
        tenantId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListPost, void>({
        path: `/blade-system/post/select`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入post
     *
     * @tags 岗位
     * @name PostSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/post/submit
     * @secure
     */
    postSubmit: (post: Post, params: RequestParams = {}) =>
      this.request<RPost, void>({
        path: `/blade-system/post/submit`,
        method: 'POST',
        body: post,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入post
     *
     * @tags 岗位
     * @name PostUpdate
     * @summary 修改
     * @request POST:/blade-system/post/update
     * @secure
     */
    postUpdate: (post: Post, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/post/update`,
        method: 'POST',
        body: post,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入region
     *
     * @tags 行政区划
     * @name RegionDetail
     * @summary 详情
     * @request GET:/blade-system/region/detail
     * @secure
     */
    regionDetail: (
      query?: {
        /** 祖区划编号 */
        ancestors?: string;
        /** 市级区划编号 */
        cityCode?: string;
        /** 市级名称 */
        cityName?: string;
        /** 区划编号 */
        code?: string;
        /** 区级区划编号 */
        districtCode?: string;
        /** 区级名称 */
        districtName?: string;
        /** 区划名称 */
        name?: string;
        /** 父区划编号 */
        parentCode?: string;
        /** 省级区划编号 */
        provinceCode?: string;
        /** 省级名称 */
        provinceName?: string;
        /**
         * 层级
         * @format int32
         */
        regionLevel?: number;
        /** 备注 */
        remark?: string;
        /**
         * 排序
         * @format int32
         */
        sort?: number;
        /** 镇级区划编号 */
        townCode?: string;
        /** 镇级名称 */
        townName?: string;
        /** 村级区划编号 */
        villageCode?: string;
        /** 村级名称 */
        villageName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RRegionVO, void>({
        path: `/blade-system/region/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入user
     *
     * @tags 行政区划
     * @name RegionExportRegion
     * @summary 导出行政区划
     * @request GET:/blade-system/region/export-region
     * @secure
     */
    regionExportRegion: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/blade-system/region/export-region`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 行政区划
     * @name RegionExportUser
     * @summary 导出模板
     * @request GET:/blade-system/region/export-template
     * @secure
     */
    regionExportUser: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/blade-system/region/export-template`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入excel
     *
     * @tags 行政区划
     * @name RegionImportRegion
     * @summary 导入行政区划
     * @request POST:/blade-system/region/import-region
     * @secure
     */
    regionImportRegion: (
      data: {
        /** file */
        file?: File;
      },
      query?: {
        /**
         * isCovered
         * @format int32
         */
        isCovered?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/region/import-region`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 传入menu
     *
     * @tags 行政区划
     * @name RegionLazyList
     * @summary 懒加载列表
     * @request GET:/blade-system/region/lazy-list
     * @secure
     */
    regionLazyList: (
      query?: {
        /** 区划编号 */
        code?: string;
        /** 区划名称 */
        name?: string;
        /** parentCode */
        parentCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListRegionVO, void>({
        path: `/blade-system/region/lazy-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入menu
     *
     * @tags 行政区划
     * @name RegionLazyTree
     * @summary 懒加载列表
     * @request GET:/blade-system/region/lazy-tree
     * @secure
     */
    regionLazyTree: (
      query?: {
        /** 区划编号 */
        code?: string;
        /** 区划名称 */
        name?: string;
        /** parentCode */
        parentCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListRegionVO, void>({
        path: `/blade-system/region/lazy-tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入region
     *
     * @tags 行政区划
     * @name RegionList
     * @summary 分页
     * @request GET:/blade-system/region/list
     * @secure
     */
    regionList: (
      query?: {
        /** 祖区划编号 */
        ancestors?: string;
        /** 市级区划编号 */
        cityCode?: string;
        /** 市级名称 */
        cityName?: string;
        /** 区划编号 */
        code?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 区级区划编号 */
        districtCode?: string;
        /** 区级名称 */
        districtName?: string;
        /** 区划名称 */
        name?: string;
        /** 父区划编号 */
        parentCode?: string;
        /** 省级区划编号 */
        provinceCode?: string;
        /** 省级名称 */
        provinceName?: string;
        /**
         * 层级
         * @format int32
         */
        regionLevel?: number;
        /** 备注 */
        remark?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 排序
         * @format int32
         */
        sort?: number;
        /** 镇级区划编号 */
        townCode?: string;
        /** 镇级名称 */
        townName?: string;
        /** 村级区划编号 */
        villageCode?: string;
        /** 村级名称 */
        villageName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageRegion, void>({
        path: `/blade-system/region/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入主键
     *
     * @tags 行政区划
     * @name RegionRemove
     * @summary 删除
     * @request POST:/blade-system/region/remove
     * @secure
     */
    regionRemove: (
      query: {
        /** 主键 */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/region/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入region
     *
     * @tags 行政区划
     * @name RegionSave
     * @summary 新增
     * @request POST:/blade-system/region/save
     * @secure
     */
    regionSave: (region: Region, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/region/save`,
        method: 'POST',
        body: region,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入tenant
     *
     * @tags 行政区划
     * @name RegionSelect
     * @summary 下拉数据源
     * @request GET:/blade-system/region/select
     * @secure
     */
    regionSelect: (
      query?: {
        /**
         * code
         * @default "00"
         */
        code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListRegion, void>({
        path: `/blade-system/region/select`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入region
     *
     * @tags 行政区划
     * @name RegionSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/region/submit
     * @secure
     */
    regionSubmit: (region: Region, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/region/submit`,
        method: 'POST',
        body: region,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入region
     *
     * @tags 行政区划
     * @name RegionUpdate
     * @summary 修改
     * @request POST:/blade-system/region/update
     * @secure
     */
    regionUpdate: (region: Region, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/region/update`,
        method: 'POST',
        body: region,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 接口管理
     * @name ResourceDefinitionAllController
     * @summary 所有接口Controller
     * @request GET:/blade-system/resource-definition/all-controller
     * @secure
     */
    resourceDefinitionAllController: (
      query: {
        /** moduleCode */
        moduleCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListString, void>({
        path: `/blade-system/resource-definition/all-controller`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 接口管理
     * @name ResourceDefinitionAllModule
     * @summary 所有接口模块
     * @request GET:/blade-system/resource-definition/all-module
     * @secure
     */
    resourceDefinitionAllModule: (params: RequestParams = {}) =>
      this.request<RListString, void>({
        path: `/blade-system/resource-definition/all-module`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入resourceDefinition
     *
     * @tags 接口管理
     * @name ResourceDefinitionDetail
     * @summary 接口详情
     * @request GET:/blade-system/resource-definition/get/{id}
     * @secure
     */
    resourceDefinitionDetail: (id: string, params: RequestParams = {}) =>
      this.request<RResourceDefinitionVo, void>({
        path: `/blade-system/resource-definition/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入resourceDefinitionVO
     *
     * @tags 接口管理
     * @name ResourceDefinitionInsert
     * @summary 接口新增
     * @request POST:/blade-system/resource-definition/insert
     * @secure
     */
    resourceDefinitionInsert: (resourceDefinitionVO: ResourceDefinitionVo, params: RequestParams = {}) =>
      this.request<RResourceDefinitionVo, void>({
        path: `/blade-system/resource-definition/insert`,
        method: 'POST',
        body: resourceDefinitionVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 接口管理
     * @name ResourceDefinitionPage
     * @summary 接口分页
     * @request GET:/blade-system/resource-definition/page
     * @secure
     */
    resourceDefinitionPage: (
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
        /** controllerCode */
        controllerCode?: string;
        /** menuId */
        menuId?: string;
        /** moduleCode */
        moduleCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageResourceDefinitionVo, void>({
        path: `/blade-system/resource-definition/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 接口管理
     * @name ResourceDefinitionRemove
     * @summary 接口删除
     * @request DELETE:/blade-system/resource-definition/remove
     * @secure
     */
    resourceDefinitionRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/resource-definition/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入resourceDefinitionVO
     *
     * @tags 接口管理
     * @name ResourceDefinitionUpdate
     * @summary 接口修改
     * @request PUT:/blade-system/resource-definition/update
     * @secure
     */
    resourceDefinitionUpdate: (resourceDefinitionVO: ResourceDefinitionVo, params: RequestParams = {}) =>
      this.request<RResourceDefinitionVo, void>({
        path: `/blade-system/resource-definition/update`,
        method: 'PUT',
        body: resourceDefinitionVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入role
     *
     * @tags 角色
     * @name RoleDetail
     * @summary 详情
     * @request GET:/blade-system/role/detail
     * @secure
     */
    roleDetail: (
      query?: {
        /** 主键 */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 父主键 */
        parentId?: string;
        /** 角色别名 */
        roleAlias?: string;
        /** 角色名 */
        roleName?: string;
        /**
         * 排序
         * @format int32
         */
        sort?: number;
        /** 租户ID */
        tenantId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RRoleVO, void>({
        path: `/blade-system/role/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入roleId集合以及menuId集合
     *
     * @tags 角色
     * @name RoleGrant
     * @summary 权限设置
     * @request POST:/blade-system/role/grant
     * @secure
     */
    roleGrant: (grantVO: GrantVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/role/grant`,
        method: 'POST',
        body: grantVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入role
     *
     * @tags 角色
     * @name RoleList
     * @summary 列表
     * @request GET:/blade-system/role/list
     * @secure
     */
    roleList: (
      query?: {
        /** 角色别名 */
        roleAlias?: string;
        /** 参数名称 */
        roleName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListRoleVO, void>({
        path: `/blade-system/role/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 角色
     * @name RoleRemove
     * @summary 删除
     * @request POST:/blade-system/role/remove
     * @secure
     */
    roleRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/role/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id集合
     *
     * @tags 角色
     * @name RoleSelect
     * @summary 下拉数据源
     * @request GET:/blade-system/role/select
     * @secure
     */
    roleSelect: (
      query?: {
        /** roleId */
        roleId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListRole, void>({
        path: `/blade-system/role/select`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入role
     *
     * @tags 角色
     * @name RoleSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/role/submit
     * @secure
     */
    roleSubmit: (role: Role, params: RequestParams = {}) =>
      this.request<RRole, void>({
        path: `/blade-system/role/submit`,
        method: 'POST',
        body: role,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 角色
     * @name RoleTree
     * @summary 树形结构
     * @request GET:/blade-system/role/tree
     * @secure
     */
    roleTree: (
      query?: {
        /** tenantId */
        tenantId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListRoleVO, void>({
        path: `/blade-system/role/tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 树形结构
     *
     * @tags 角色
     * @name RoleTreeById
     * @summary 树形结构
     * @request GET:/blade-system/role/tree-by-id
     * @secure
     */
    roleTreeById: (
      query?: {
        /** roleId */
        roleId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListRoleVO, void>({
        path: `/blade-system/role/tree-by-id`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入deptName或者parentId
     *
     * @tags 查询
     * @name SearchDeptSearch
     * @summary 部门信息查询
     * @request GET:/blade-system/search/dept
     * @secure
     */
    searchDeptSearch: (
      query?: {
        /** deptName */
        deptName?: string;
        /** parentId */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDeptVO, void>({
        path: `/blade-system/search/dept`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入postName
     *
     * @tags 查询
     * @name SearchPostSearch
     * @summary 岗位信息查询
     * @request GET:/blade-system/search/post
     * @secure
     */
    searchPostSearch: (
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
        /** postName */
        postName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPagePostVO, void>({
        path: `/blade-system/search/post`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入roleName或者parentId
     *
     * @tags 查询
     * @name SearchRoleSearch
     * @summary 角色信息查询
     * @request GET:/blade-system/search/role
     * @secure
     */
    searchRoleSearch: (
      query?: {
        /** parentId */
        parentId?: string;
        /** roleName */
        roleName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListRoleVO, void>({
        path: `/blade-system/search/role`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入datasource_id
     *
     * @tags 租户管理
     * @name TenantDatasource
     * @summary 数据源配置
     * @request POST:/blade-system/tenant/datasource
     * @secure
     */
    tenantDatasource: (
      query: {
        /** 数据源ID */
        datasourceId: string;
        /** 租户ID */
        tenantId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/tenant/datasource`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入tenant
     *
     * @tags 租户管理
     * @name TenantDetail
     * @summary 详情
     * @request GET:/blade-system/tenant/detail
     * @secure
     */
    tenantDetail: (
      query?: {
        /**
         * 账号额度
         * @format int32
         */
        accountNumber?: number;
        /** 联系地址 */
        address?: string;
        /** 系统背景 */
        backgroundUrl?: string;
        /** 租户授权码 */
        bladeLicense?: string;
        /** 联系电话 */
        contactNumber?: string;
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /** 数据源ID */
        datasourceId?: string;
        /** 域名地址 */
        domainName?: string;
        /**
         * 过期时间
         * @format date-time
         */
        expireTime?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 授权码 */
        licenseKey?: string;
        /** 联系人 */
        linkman?: string;
        /**
         * 业务状态
         * @format int32
         */
        status?: number;
        /** 租户ID */
        tenantId?: string;
        /** 租户名称 */
        tenantName?: string;
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
      this.request<RTenant, void>({
        path: `/blade-system/tenant/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入tenant
     *
     * @tags 租户管理
     * @name TenantFindByName
     * @summary 详情
     * @request GET:/blade-system/tenant/find-by-name
     * @secure
     */
    tenantFindByName: (
      query?: {
        /** name */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListTenant, void>({
        path: `/blade-system/tenant/find-by-name`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入domain
     *
     * @tags 租户管理
     * @name TenantInfo
     * @summary 配置信息
     * @request GET:/blade-system/tenant/info
     * @secure
     */
    tenantInfo: (
      query?: {
        /** domain */
        domain?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RKv, void>({
        path: `/blade-system/tenant/info`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入tenant
     *
     * @tags 租户管理
     * @name TenantList
     * @summary 分页
     * @request GET:/blade-system/tenant/list
     * @secure
     */
    tenantList: (
      query?: {
        /** 联系电话 */
        contactNumber?: string;
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
        /** 参数名称 */
        tenantId?: string;
        /** 角色别名 */
        tenantName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageTenant, void>({
        path: `/blade-system/tenant/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入tenant
     *
     * @tags 租户管理
     * @name TenantPage
     * @summary 分页
     * @request GET:/blade-system/tenant/page
     * @secure
     */
    tenantPage: (
      query?: {
        /**
         * 账号额度
         * @format int32
         */
        accountNumber?: number;
        /** 联系地址 */
        address?: string;
        /** 系统背景 */
        backgroundUrl?: string;
        /** 租户授权码 */
        bladeLicense?: string;
        /** 联系电话 */
        contactNumber?: string;
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
         * 当前页
         * @format int32
         */
        current?: number;
        /** 数据源ID */
        datasourceId?: string;
        /** 域名地址 */
        domainName?: string;
        /**
         * 过期时间
         * @format date-time
         */
        expireTime?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 授权码 */
        licenseKey?: string;
        /** 联系人 */
        linkman?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 业务状态
         * @format int32
         */
        status?: number;
        /** 租户ID */
        tenantId?: string;
        /** 租户名称 */
        tenantName?: string;
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
      this.request<RIPageTenant, void>({
        path: `/blade-system/tenant/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 租户管理
     * @name TenantRemove
     * @summary 逻辑删除
     * @request POST:/blade-system/tenant/remove
     * @secure
     */
    tenantRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/tenant/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入tenant
     *
     * @tags 租户管理
     * @name TenantSelect
     * @summary 下拉数据源
     * @request GET:/blade-system/tenant/select
     * @secure
     */
    tenantSelect: (
      query?: {
        /**
         * 账号额度
         * @format int32
         */
        accountNumber?: number;
        /** 联系地址 */
        address?: string;
        /** 系统背景 */
        backgroundUrl?: string;
        /** 租户授权码 */
        bladeLicense?: string;
        /** 联系电话 */
        contactNumber?: string;
        /** 创建部门 */
        createDept?: string;
        /**
         * 创建时间
         * @format date-time
         */
        createTime?: string;
        /** 创建人 */
        createUser?: string;
        /** 数据源ID */
        datasourceId?: string;
        /** 域名地址 */
        domainName?: string;
        /**
         * 过期时间
         * @format date-time
         */
        expireTime?: string;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 授权码 */
        licenseKey?: string;
        /** 联系人 */
        linkman?: string;
        /**
         * 业务状态
         * @format int32
         */
        status?: number;
        /** 租户ID */
        tenantId?: string;
        /** 租户名称 */
        tenantName?: string;
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
      this.request<RListTenant, void>({
        path: `/blade-system/tenant/select`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids,accountNumber,expireTime
     *
     * @tags 租户管理
     * @name TenantSetting
     * @summary 授权配置
     * @request POST:/blade-system/tenant/setting
     * @secure
     */
    tenantSetting: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      expireTime: number,
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/tenant/setting`,
        method: 'POST',
        query: query,
        body: expireTime,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入tenant
     *
     * @tags 租户管理
     * @name TenantSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/tenant/submit
     * @secure
     */
    tenantSubmit: (tenant: Tenant, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/tenant/submit`,
        method: 'POST',
        body: tenant,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入theme
     *
     * @tags 主题管理
     * @name ThemeChange
     * @summary 切换主题
     * @request POST:/blade-system/theme/theme-change
     * @secure
     */
    themeChange: (
      query?: {
        /** theme */
        theme?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RParam, void>({
        path: `/blade-system/theme/theme-change`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入topMenu
     *
     * @tags 顶部菜单
     * @name TopMenuDetail
     * @summary 详情
     * @request GET:/blade-system/topmenu/detail
     * @secure
     */
    topMenuDetail: (
      query?: {
        /** 顶部菜单编号 */
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
        /** 顶部菜单名 */
        name?: string;
        /**
         * 顶部菜单排序
         * @format int32
         */
        sort?: number;
        /** 顶部菜单资源 */
        source?: string;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RTopMenu, void>({
        path: `/blade-system/topmenu/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入topMenuId集合以及menuId集合
     *
     * @tags 顶部菜单
     * @name TopMenuGrant
     * @summary 顶部菜单配置
     * @request POST:/blade-system/topmenu/grant
     * @secure
     */
    topMenuGrant: (grantVO: GrantVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/topmenu/grant`,
        method: 'POST',
        body: grantVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入topMenu
     *
     * @tags 顶部菜单
     * @name TopMenuList
     * @summary 分页
     * @request GET:/blade-system/topmenu/list
     * @secure
     */
    topMenuList: (
      query?: {
        /** 顶部菜单编号 */
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
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 主键id */
        id?: string;
        /**
         * 是否已删除
         * @format int32
         */
        isDeleted?: number;
        /** 顶部菜单名 */
        name?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * 顶部菜单排序
         * @format int32
         */
        sort?: number;
        /** 顶部菜单资源 */
        source?: string;
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageTopMenu, void>({
        path: `/blade-system/topmenu/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 顶部菜单
     * @name TopMenuRemove
     * @summary 逻辑删除
     * @request POST:/blade-system/topmenu/remove
     * @secure
     */
    topMenuRemove: (
      query: {
        /** 主键集合 */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/topmenu/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入topMenu
     *
     * @tags 顶部菜单
     * @name TopMenuSave
     * @summary 新增
     * @request POST:/blade-system/topmenu/save
     * @secure
     */
    topMenuSave: (topMenu: TopMenu, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/topmenu/save`,
        method: 'POST',
        body: topMenu,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入topMenu
     *
     * @tags 顶部菜单
     * @name TopMenuSubmit
     * @summary 新增或修改
     * @request POST:/blade-system/topmenu/submit
     * @secure
     */
    topMenuSubmit: (topMenu: TopMenu, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/topmenu/submit`,
        method: 'POST',
        body: topMenu,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入topMenu
     *
     * @tags 顶部菜单
     * @name TopMenuUpdate
     * @summary 修改
     * @request POST:/blade-system/topmenu/update
     * @secure
     */
    topMenuUpdate: (topMenu: TopMenu, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/topmenu/update`,
        method: 'POST',
        body: topMenu,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 增加工作台
     *
     * @tags 工作台
     * @name WorkbenchAddWorkbench
     * @summary 增加工作台
     * @request POST:/blade-system/workbench
     * @secure
     */
    workbenchAddWorkbench: (
      query?: {
        /** 工作台名称 */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RWorkbench, void>({
        path: `/blade-system/workbench`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 编辑工作台
     *
     * @tags 工作台
     * @name WorkbenchUpdateWorkbench
     * @summary 编辑工作台
     * @request PUT:/blade-system/workbench
     * @secure
     */
    workbenchUpdateWorkbench: (workbenchVO: WorkbenchVO, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/workbench`,
        method: 'PUT',
        body: workbenchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除工作台
     *
     * @tags 工作台
     * @name WorkbenchDeleteWorkbench
     * @summary 删除工作台
     * @request DELETE:/blade-system/workbench
     * @secure
     */
    workbenchDeleteWorkbench: (
      query: {
        /** 工作台Id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/workbench`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 新增工作台卡片
     *
     * @tags 工作台卡片
     * @name WorkbenchCardCreateWorkbenchCard
     * @summary 新增工作台卡片
     * @request POST:/blade-system/workbench-card/create-workbench-card
     * @secure
     */
    workbenchCardCreateWorkbenchCard: (workbenchCardListAddVO: WorkbenchCardListAddVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-system/workbench-card/create-workbench-card`,
        method: 'POST',
        body: workbenchCardListAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除工作台卡片
     *
     * @tags 工作台卡片
     * @name WorkbenchCardDeleteWorkbenchCard
     * @summary 删除工作台卡片
     * @request POST:/blade-system/workbench-card/delete-workbench-card
     * @secure
     */
    workbenchCardDeleteWorkbenchCard: (
      query: {
        /** 卡片Id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-system/workbench-card/delete-workbench-card`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 查看详情
     *
     * @tags 工作台卡片
     * @name WorkbenchCardDetail
     * @summary 查看详情
     * @request GET:/blade-system/workbench-card/detail
     * @secure
     */
    workbenchCardDetail: (
      query: {
        /** 卡片Id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RWorkbenchCardVO, void>({
        path: `/blade-system/workbench-card/detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 卡片列表
     *
     * @tags 工作台卡片
     * @name WorkbenchCardGetWorkbenchCardlist
     * @summary 卡片列表
     * @request GET:/blade-system/workbench-card/list
     * @secure
     */
    workbenchCardGetWorkbenchCardlist: (
      query: {
        /** 工作台ID */
        workbenchId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkbenchCardVO, void>({
        path: `/blade-system/workbench-card/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 工作台详情
     *
     * @tags 工作台
     * @name WorkbenchQueryWorkbench
     * @summary 工作台详情
     * @request GET:/blade-system/workbench/detailed-workbench
     * @secure
     */
    workbenchQueryWorkbench: (
      query: {
        /** 工作台Id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RWorkbenchVO, void>({
        path: `/blade-system/workbench/detailed-workbench`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 查看所有工作台
     *
     * @tags 工作台
     * @name WorkbenchList
     * @summary 查看所有工作台
     * @request GET:/blade-system/workbench/list
     * @secure
     */
    workbenchList: (
      query?: {
        /**
         * status
         * @format int32
         */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListWorkbenchVO, void>({
        path: `/blade-system/workbench/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 排序工作台
     *
     * @tags 工作台
     * @name WorkbenchSortWorkbench
     * @summary 排序工作台
     * @request PUT:/blade-system/workbench/sort
     * @secure
     */
    workbenchSortWorkbench: (workbenchVOS: WorkbenchVO[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-system/workbench/sort`,
        method: 'PUT',
        body: workbenchVOS,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 启动/禁用工作台
     *
     * @tags 工作台
     * @name WorkbenchOpenWorkbench
     * @summary 启动/禁用工作台
     * @request POST:/blade-system/workbench/switch-status
     * @secure
     */
    workbenchOpenWorkbench: (
      query: {
        /** 工作台Id */
        id: string;
        /**
         * 启用
         * @format int32
         */
        status: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-system/workbench/switch-status`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  bladeUser = {
    /**
     * No description
     *
     * @tags 用户
     * @name UserBatchEnableAccount
     * @summary 批量开通账号
     * @request POST:/blade-user/batch-enable-account
     * @secure
     */
    userBatchEnableAccount: (batchEnableAccountVO: BatchEnableAccountVO, params: RequestParams = {}) =>
      this.request<RListEnableAccountResultVO, void>({
        path: `/blade-user/batch-enable-account`,
        method: 'POST',
        body: batchEnableAccountVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id和是否启用
     *
     * @tags 用户
     * @name UserEnable
     * @summary 用户启停用
     * @request POST:/blade-user/changeStatus
     * @secure
     */
    userEnable: (
      query: {
        /** 主键 */
        enable: boolean;
        /** 主键 */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-user/changeStatus`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户
     * @name UserCheckAccountSecurity
     * @summary 用户密码安全检查
     * @request POST:/blade-user/check-account-security
     * @secure
     */
    userCheckAccountSecurity: (params: RequestParams = {}) =>
      this.request<PasswordModifyValidInfo, void>({
        path: `/blade-user/check-account-security`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 用户
     * @name UserDetail
     * @summary 查看详情
     * @request GET:/blade-user/detail/{id}
     * @secure
     */
    userDetail: (id: string, params: RequestParams = {}) =>
      this.request<RVO2, void>({
        path: `/blade-user/detail/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入roleId集合以及menuId集合
     *
     * @tags 用户
     * @name UserGrant
     * @summary 权限设置
     * @request POST:/blade-user/grant
     * @secure
     */
    userGrant: (
      query: {
        /** roleId集合 */
        roleIds: string;
        /** userId集合 */
        userIds: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-user/grant`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户
     * @name UserInfo
     * @summary 查看用户信息
     * @request GET:/blade-user/info
     * @secure
     */
    userInfo: (params: RequestParams = {}) =>
      this.request<R_VO_, void>({
        path: `/blade-user/info`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入userInsertVO
     *
     * @tags 用户
     * @name UserInsert
     * @summary 新增
     * @request POST:/blade-user/insert
     * @secure
     */
    userInsert: (userInsertVO: VO6, params: RequestParams = {}) =>
      this.request<RUserVO, void>({
        path: `/blade-user/insert`,
        method: 'POST',
        body: userInsertVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入account和realName
     *
     * @tags 用户
     * @name UserList
     * @summary 列表
     * @request GET:/blade-user/list
     * @secure
     */
    userList: (
      query?: {
        /** 账号名 */
        account?: string;
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 姓名 */
        realName?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageUserVO, void>({
        path: `/blade-user/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入account和realName
     *
     * @tags 用户
     * @name UserPage
     * @summary 列表
     * @request GET:/blade-user/page
     * @secure
     */
    userPage: (
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
        /** deptId */
        deptId?: string;
        /** keywords */
        keywords?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageUserVO, void>({
        path: `/blade-user/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入id
     *
     * @tags 用户
     * @name UserPlatformDetail
     * @summary 查看平台详情
     * @request GET:/blade-user/platform-detail
     * @secure
     */
    userPlatformDetail: (
      query?: {
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
        /**
         * 更新时间
         * @format date-time
         */
        updateTime?: string;
        /** 更新人 */
        updateUser?: string;
        account?: string;
        avatar?: string;
        /** @format date-time */
        birthday?: string;
        code?: string;
        deptId?: string;
        email?: string;
        /** @format int32 */
        enableAccount?: number;
        password?: string;
        phone?: string;
        postId?: string;
        /** @format int32 */
        pwdSecurityLevel?: number;
        /** @format date-time */
        pwdUpdateDate?: string;
        pwdUpdateRecord?: string;
        realName?: string;
        roleId?: string;
        /** @format int32 */
        sex?: number;
        /** @format int32 */
        userType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RUserVO, void>({
        path: `/blade-user/platform-detail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入user
     *
     * @tags 用户
     * @name UserRegisterGuest
     * @summary 第三方注册用户
     * @request POST:/blade-user/register-guest
     * @secure
     */
    userRegisterGuest: (
      query?: {
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
        /**
         * 更新时间
         * @format date-time
         */
        updateTime?: string;
        /** 更新人 */
        updateUser?: string;
        account?: string;
        avatar?: string;
        /** @format date-time */
        birthday?: string;
        code?: string;
        deptId?: string;
        email?: string;
        /** @format int32 */
        enableAccount?: number;
        password?: string;
        phone?: string;
        postId?: string;
        /** @format int32 */
        pwdSecurityLevel?: number;
        /** @format date-time */
        pwdUpdateDate?: string;
        pwdUpdateRecord?: string;
        realName?: string;
        roleId?: string;
        /** @format int32 */
        sex?: number;
        /** @format int32 */
        userType?: number;
        /** oauthId */
        oauthId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-user/register-guest`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入id集合
     *
     * @tags 用户
     * @name UserRemove
     * @summary 删除
     * @request POST:/blade-user/remove
     * @secure
     */
    userRemove: (
      query: {
        /** ids */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-user/remove`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入userId集合
     *
     * @tags 用户
     * @name UserResetPassword
     * @summary 初始化密码
     * @request POST:/blade-user/reset-password
     * @secure
     */
    userResetPassword: (
      query: {
        /** userId集合 */
        userIds: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-user/reset-password`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 用户列表查询
     *
     * @tags 用户
     * @name UserUserSearch
     * @summary 用户列表查询
     * @request GET:/blade-user/search/user
     * @secure
     */
    userUserSearch: (
      query?: {
        /** 账号 */
        account?: string;
        /**
         * 当前页数
         * @format int32
         */
        current?: number;
        /** 部门名称 */
        deptName?: string;
        /** 人员姓名 */
        name?: string;
        /** 职位名称 */
        postName?: string;
        /**
         * 每页数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageUserVO, void>({
        path: `/blade-user/search/user`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户
     * @name UserUnlock
     * @summary 解锁用户
     * @request POST:/blade-user/unlock
     * @secure
     */
    userUnlock: (
      query: {
        /** 用户Id */
        userId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-user/unlock`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入userUpdateVO
     *
     * @tags 用户
     * @name UserUpdate
     * @summary 修改
     * @request PUT:/blade-user/update
     * @secure
     */
    userUpdate: (userUpdateVO: VO5, params: RequestParams = {}) =>
      this.request<RUserVO, void>({
        path: `/blade-user/update`,
        method: 'PUT',
        body: userUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入User
     *
     * @tags 用户
     * @name UserUpdateInfo
     * @summary 修改基本信息
     * @request POST:/blade-user/update-info
     * @secure
     */
    userUpdateInfo: (user: User, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-user/update-info`,
        method: 'POST',
        body: user,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入密码
     *
     * @tags 用户
     * @name UserUpdatePassword
     * @summary 修改密码
     * @request POST:/blade-user/update-password
     * @secure
     */
    userUpdatePassword: (
      query: {
        /** 新密码 */
        newPassword: string;
        /** 新密码 */
        newPassword1: string;
        /** 旧密码 */
        oldPassword: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-user/update-password`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入user
     *
     * @tags 用户
     * @name UserUpdatePlatform
     * @summary 配置用户平台信息
     * @request POST:/blade-user/update-platform
     * @secure
     */
    userUpdatePlatform: (
      query?: {
        /** userExt */
        userExt?: string;
        /** userId */
        userId?: string;
        /**
         * userType
         * @format int32
         */
        userType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<R, void>({
        path: `/blade-user/update-platform`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入user
     *
     * @tags 用户
     * @name UserUserList
     * @summary 用户列表
     * @request GET:/blade-user/user-list
     * @secure
     */
    userUserList: (
      query?: {
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
        /**
         * 更新时间
         * @format date-time
         */
        updateTime?: string;
        /** 更新人 */
        updateUser?: string;
        account?: string;
        avatar?: string;
        /** @format date-time */
        birthday?: string;
        code?: string;
        deptId?: string;
        email?: string;
        /** @format int32 */
        enableAccount?: number;
        password?: string;
        phone?: string;
        postId?: string;
        /** @format int32 */
        pwdSecurityLevel?: number;
        /** @format date-time */
        pwdUpdateDate?: string;
        pwdUpdateRecord?: string;
        realName?: string;
        roleId?: string;
        /** @format int32 */
        sex?: number;
        /** @format int32 */
        userType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListUser, void>({
        path: `/blade-user/user-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 查询角色下关联的用户
     *
     * @tags 用户
     * @name UserUserListForRole
     * @summary 查询角色下关联的用户
     * @request GET:/blade-user/{roleId}/list
     * @secure
     */
    userUserListForRole: (roleId?: string, params: RequestParams = {}) =>
      this.request<RListUserSimpleVO, void>({
        path: `/blade-user/${roleId}/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 角色下移除账号(多个账号)
     *
     * @tags 用户
     * @name UserRoleRemoveUsers
     * @summary 角色移除账号
     * @request DELETE:/blade-user/{roleId}/remove
     * @secure
     */
    userRoleRemoveUsers: (roleIdVO: RoleIdVO, roleId?: string, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-user/${roleId}/remove`,
        method: 'DELETE',
        body: roleIdVO,
        secure: true,
        ...params,
      }),

    /**
     * @description 角色下绑定账号(多个账号)
     *
     * @tags 用户
     * @name UserRoleBindUsers
     * @summary 角色绑定账号
     * @request POST:/blade-user/{roleId}/save
     * @secure
     */
    userRoleBindUsers: (roleIdVO: RoleIdVO, roleId?: string, params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-user/${roleId}/save`,
        method: 'POST',
        body: roleIdVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
