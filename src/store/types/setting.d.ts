export enum ToolsStatusEnum {
  DOCK = 'dock',
  ASIDE = 'aside',
}

export interface SettingStoreType {
  // 侧边栏折叠是否隐藏全部
  asideAllCollapsed: boolean;
  // 拖拽页面左侧表单分类只有一项的时候是否隐藏
  hidePackageOneCategory: boolean;
  // 切换语言是否进行路由刷新
  changeLangReload: boolean;
  // 图表移动时按方向键移动的距离
  chartMoveDistance: number;
  // 图表拖拽时的吸附距离（px）
  chartAlignRange: number;
  // 图表工具栏状态（侧边工具状态）
  chartToolsStatus: ToolsStatusEnum;
  // 图表工具栏状态隐藏（刚开始不隐藏）
  chartToolsStatusHide: boolean;
}
