import { RequestConfigType } from '/@/store/types';
import { GlobalThemeJsonType } from '/@/settings/chartSetting';

// 滤镜/变换枚举
export enum FilterEnum {
  // 是否启用
  FILTERS_SHOW = 'filterShow',
  // 透明度
  OPACITY = 'opacity',
  // 饱和度
  SATURATE = 'saturate',
  // 对比度
  CONTRAST = 'contrast',
  // 色相
  HUE_ROTATE = 'hueRotate',
  // 亮度
  BRIGHTNESS = 'brightness',
  // 旋转
  ROTATE_Z = 'rotateZ',
  ROTATE_X = 'rotateX',
  ROTATE_Y = 'rotateY',
  // 倾斜
  SKEW_X = 'skewX',
  SKEW_Y = 'skewY',
  // 混合模式
  BLEND_MODE = 'blendMode',
}
// 组件实例类
export interface PublicConfigType {
  id: string;
  isGroup: boolean;
  attr: { x: number; y: number; w: number; h: number; zIndex: number; offsetX: number; offsetY: number };
  styles: {
    [FilterEnum.FILTERS_SHOW]: boolean;
    [FilterEnum.OPACITY]: number;
    [FilterEnum.SATURATE]: number;
    [FilterEnum.CONTRAST]: number;
    [FilterEnum.HUE_ROTATE]: number;
    [FilterEnum.BRIGHTNESS]: number;

    [FilterEnum.ROTATE_Z]: number;
    [FilterEnum.ROTATE_X]: number;
    [FilterEnum.ROTATE_Y]: number;

    [FilterEnum.SKEW_X]: number;
    [FilterEnum.SKEW_Y]: number;
    [FilterEnum.BLEND_MODE]: string;
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
      [InteractEvents.INTERACT_ON]: InteractEventOn | undefined;
      [InteractEvents.INTERACT_COMPONENT_ID]: string | undefined;
      [InteractEvents.INTERACT_FN]: { [name: string]: string };
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
