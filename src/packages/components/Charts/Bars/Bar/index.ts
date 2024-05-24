import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '../../../../types';
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d';

export const BarConfig: ConfigType = {
  key: 'Bar',
  chartKey: 'VBar',
  conKey: 'VCBar',
  title: '柱状图',
  category: ChatCategoryEnum.BAR,
  categoryName: ChatCategoryEnumName.BAR,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartFrameEnum.ECHARTS,
  image: 'bar_x.png',
};
