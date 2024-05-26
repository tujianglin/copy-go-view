import { PickCreateComponentType } from '../packages/types';
import { CustomColorsType, chartColors } from '../settings/chartSetting';
import { EditCanvasConfigType } from '../store/types';
type StylesType = PickCreateComponentType<'styles'>;

/**
 * * 合并基础颜色和自定义颜色
 * @param chartDefaultColors
 * @param customColor
 * @returns
 */
export const colorCustomMerge = (customColor?: CustomColorsType[]) => {
  type FormateCustomColorType = {
    [T: string]: {
      color: string[];
      name: string;
    };
  };
  const formateCustomColor: FormateCustomColorType = {};
  customColor?.forEach((item) => {
    formateCustomColor[item.id] = {
      color: item.color,
      name: item.name,
    };
  });
  return { ...formateCustomColor, ...chartColors };
};

/**
 * 滤镜
 * @param styles
 * @returns
 */
export const getFilterStyle = (styles?: StylesType | EditCanvasConfigType) => {
  if (!styles || !styles.filterShow) return {};
  const { opacity, saturate, contrast, hueRotate, brightness } = styles;
  return {
    opacity: opacity,
    filter: `saturate(${saturate}) contrast(${contrast}) hue-rotate(${hueRotate}deg) brightness(${brightness})`,
  };
};

/**
 * 混合模式
 * @param styles
 * @returns
 */
export const getBlendModeStyle = (styles: StylesType) => {
  if (!styles || !styles.filterShow) return {};
  const { blendMode } = styles;
  return {
    'mix-blend-mode': blendMode,
  };
};

/**
 * 变换
 * @param styles
 * @returns
 */
export const getTransformStyle = (styles: StylesType) => {
  const { rotateZ, rotateX, rotateY, skewX, skewY } = styles;
  return {
    transform: `rotateZ(${rotateZ || 0}deg) rotateX(${rotateX || 0}deg) rotateY(${rotateY || 0}deg) skewX(${skewX || 0}deg) skewY(${skewY || 0}deg)`,
  };
};

/**
 * 动画
 * @param animations
 * @returns
 */
export const animationsClass = (animations: string[]) => {
  if (animations.length) {
    return `animate__animated  animate__${animations[0]}`;
  }
  return '';
};
