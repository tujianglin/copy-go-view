import { RequestConfigType } from '/@/store/types';
import { GlobalThemeJsonType } from '/@/settings/chartSetting';

// 包分类枚举
export enum PackagesCategoryEnum {
  CHARTS = 'Charts',
  TABLES = 'Tables',
  INFORMATIONS = 'Informations',
  PHOTOS = 'Photos',
  ICONS = 'Icons',
  DECORATES = 'Decorates',
}

// 包分类名称
export enum PackagesCategoryName {
  CHARTS = '图表',
  TABLES = '列表',
  INFORMATIONS = '信息',
  PHOTOS = '图片',
  ICONS = '图标',
  DECORATES = '小组件',
}

// 图表包类型
export type PackagesType = {
  Charts: ConfigType[];
  Tables: ConfigType[];
  Informations: ConfigType[];
  Photos: ConfigType[];
  Icons: ConfigType[];
  Decorates: ConfigType[];
};

// 组件实例类
export interface PublicConfigType {
  id: string;
  isGroup: boolean;
  attr: { x: number; y: number; w: number; h: number; zIndex: number; offsetX: number; offsetY: number };
  styles: {
    // 滤镜-启用
    filterShow: boolean;
    // 滤镜-色相
    hueRotate: number;
    // 滤镜-饱和度
    saturate: number;
    // 滤镜-亮度
    brightness: number;
    // 滤镜-对比度
    contrast: number;
    // 滤镜-不透明度
    opacity: number;
    // 变换（暂不使用）
    rotateZ: number;
    rotateX: number;
    rotateY: number;
    skewX: number;
    skewY: number;
    blendMode: string;
    // 动画
    animations: string[];
  };
  preview?: {
    // 预览超出隐藏
    overFlowHidden?: boolean;
  };
  filter?: string;
  status: StatusType;
  interactActions?: InteractActionsType[];
  events: {
    baseEvent: {
      [K in BaseEvent]?: string;
    };
    advancedEvents: {
      [K in EventLife]?: string;
    };
    interactEvents: {
      interactOn: InteractEventOn | undefined;
      interactComponentId: string | undefined;
      interactFn: { [name: string]: string };
    }[];
  };
}
interface requestConfig {
  request: RequestConfigType;
}
export interface CreateComponentType extends PublicConfigType, requestConfig {
  key: string;
  chartConfig: ConfigType;
  option: GlobalThemeJsonType;
  groupList?: Array<CreateComponentType>;
}

// 组件成组实例类
export interface CreateComponentGroupType extends CreateComponentType {
  groupList: Array<CreateComponentType>;
}
// 组件配置
export type ConfigType = {
  // 组件 key
  key: string;
  // 画布组件 key
  chartKey: string;
  // 右侧设置面板组件 key
  conKey: string;
  // 标题
  title: string;
  // 分类
  category: string;
  // 分类名称
  categoryName: string;
  // 所属包
  package: string;
  // 归类
  chartFrame?: ChartFrameEnum;
  // 预览图
  image: string;
  // 从指定路径创建创建该组件
  redirectComponent?: string;
  // 组件预设的 dataset 值(图片/图标)
  dataset?: any;
  // 禁用 拖拽或双击生成组件
  disabled?: boolean;
  // 图标
  icon?: string;
  // 事件
  configEvents?: { [T: string]: Function };
};
