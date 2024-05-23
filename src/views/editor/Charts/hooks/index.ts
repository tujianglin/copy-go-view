import { h, ref } from 'vue';
import { ConfigType } from '/@/packages/index.d';
import { usePackageStore } from '/@/store/modules/package';
import { MehOutlined } from '@ant-design/icons-vue';
import { LayoutStoreEnum } from '/@/store/types';
import { state, setItem } from './layout';
// 图表
export type MenuOptionsType = {
  key: string;
  icon: any;
  label: string;
  list: ConfigType[];
  title?: string;
};

const packagesListObj = {
  Charts: {
    icon: h(MehOutlined),
    label: '图表',
  },
  Tables: {
    icon: h(MehOutlined),
    label: '列表',
  },
  Informations: {
    icon: h(MehOutlined),
    label: '信息',
  },
  Photos: {
    icon: h(MehOutlined),
    label: '图片',
  },
  Icons: {
    icon: h(MehOutlined),
    label: '图标',
  },
  Decorates: {
    icon: h(MehOutlined),
    label: '小组件',
  },
};

export const useAsideHook = () => {
  const packagesStore = usePackageStore();
  const menuOptions: MenuOptionsType[] = [];

  // 处理列表
  const handlePackagesList = () => {
    for (const val in packagesStore.state.getPackagesList) {
      menuOptions.push({
        key: val,
        icon: packagesListObj[val].icon,
        label: packagesListObj[val].label,
        list: packagesStore.state.getPackagesList[val],
        title: '',
      });
    }
  };
  handlePackagesList();

  // 记录选中值
  let beforeSelect: string = menuOptions[0]['key'];
  const selectValue = ref([menuOptions[0]['key']]);

  // 选中的对象值
  const selectOptions = ref(menuOptions[0]);

  // 点击 item
  const clickItemHandle = ({ item, key }) => {
    selectOptions.value = item.originItemValue;
    // // 处理折叠
    if (beforeSelect === key) {
      setItem(LayoutStoreEnum.CHARTS, !state.value[LayoutStoreEnum.CHARTS], false);
    } else {
      setItem(LayoutStoreEnum.CHARTS, true, false);
    }
    beforeSelect = key;
  };

  return {
    selectOptions,
    selectValue,
    menuOptions,
    clickItemHandle,
  };
};
