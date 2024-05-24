import { ref, nextTick, toRaw } from 'vue';
import { useEditStore } from '/@/store/modules/edit';
import { MenuEnum } from '/@/enums/editPageEnum';
import { cloneDeep } from 'lodash-es';
import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
import { on, off } from '/@/utils';

const editStore = useEditStore();

export interface MenuOptionsItemType {
  type?: string;
  label?: string;
  key: MenuEnum | string;
  icon?: Function;
  fnHandle?: Function;
  disabled?: boolean;
  hidden?: boolean;
}

/**
 * 分割线
 * @param {number} n > 2
 * @returns
 */
export const divider = (n: number = 3) => {
  return {
    type: 'divider',
    key: `d${n}`,
  };
};

// * 默认单组件选项
export const defaultOptions: MenuOptionsItemType[] = [
  {
    label: '锁定',
    key: MenuEnum.LOCK,
    fnHandle: editStore.setLock,
  },
  {
    label: '解锁',
    key: MenuEnum.UNLOCK,
    fnHandle: editStore.setUnLock,
  },
  {
    label: '隐藏',
    key: MenuEnum.HIDE,
    fnHandle: editStore.setHide,
  },
  {
    label: '显示',
    key: MenuEnum.SHOW,
    fnHandle: editStore.setShow,
  },
  {
    type: 'divider',
    key: 'd0',
  },
  {
    label: '复制',
    key: MenuEnum.COPY,
    fnHandle: editStore.setCopy,
  },
  {
    label: '剪切',
    key: MenuEnum.CUT,
    fnHandle: editStore.setCut,
  },
  {
    label: '粘贴',
    key: MenuEnum.PARSE,
    fnHandle: editStore.setParse,
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '置顶',
    key: MenuEnum.TOP,
    fnHandle: editStore.setTop,
  },
  {
    label: '置底',
    key: MenuEnum.BOTTOM,
    fnHandle: editStore.setBottom,
  },
  {
    label: '上移',
    key: MenuEnum.UP,
    fnHandle: editStore.setUp,
  },
  {
    label: '下移',
    key: MenuEnum.DOWN,
    fnHandle: editStore.setDown,
  },
  {
    type: 'divider',
    key: 'd2',
  },
  {
    label: '清空剪贴板',
    key: MenuEnum.CLEAR,
    fnHandle: editStore.setRecordChart,
  },
  {
    label: '删除',
    key: MenuEnum.DELETE,
    fnHandle: editStore.removeComponentList,
  },
];

// * 默认多选组件选项
export const defaultMultiSelectOptions: MenuOptionsItemType[] = [
  {
    label: '创建分组',
    key: MenuEnum.GROUP,
    fnHandle: editStore.setGroup,
  },
  {
    label: '解除分组',
    key: MenuEnum.UN_GROUP,
    fnHandle: editStore.setUnGroup,
  },
];

// * 无数据传递拥有的选项
const defaultNoItemKeys = [MenuEnum.PARSE, MenuEnum.CLEAR];

/**
 * * 挑选选项
 * @param options
 * @param pickList
 * @returns
 */
const pickOption = (options: MenuOptionsItemType[], pickList?: MenuEnum[]) => {
  if (!pickList) return options;
  const list: MenuOptionsItemType[] = [];
  pickList.forEach((e) => {
    list.push(...options.filter((op) => op.key === e));
  });
  return list;
};

/**
 * * 去除选项
 * @param options
 * @param hideList
 * @returns
 */
const hideOption = (options: MenuOptionsItemType[], hideList?: MenuEnum[]) => {
  if (!hideList) return options;
  return options.filter((op: MenuOptionsItemType) => {
    return hideList.findIndex((e: MenuEnum) => e !== op.key) !== -1;
  });
};

// * 右键内容
const menuOptions = ref<MenuOptionsItemType[]>([]);

/**
 * 右键处理
 * @param e
 * @param targetInstance 右键对象
 * @param optionsHandle 判断函数
 * @param hideOptionsList 隐藏选项列表
 * @param pickOptionsList 挑选选项列表
 */
const handleContextMenu = (e: MouseEvent, targetInstance?: CreateComponentType | CreateComponentGroupType, optionsHandle?: Function, hideOptionsList?: MenuEnum[], pickOptionsList?: MenuEnum[]) => {
  e.stopPropagation();
  e.preventDefault();
  let target = e.target;
  while (target instanceof SVGElement) {
    target = target.parentNode;
  }
  editStore.setTargetSelectChart(targetInstance && targetInstance.id);
  // 隐藏旧列表
  editStore.state.rightMenuShow = false;
  // * 多选默认选项
  if (editStore.state.targetChart.selectId.length > 1) {
    menuOptions.value = defaultMultiSelectOptions;
  } else {
    // * 单选默认选项
    menuOptions.value = defaultOptions;
  }
  if (!targetInstance) {
    menuOptions.value = pickOption(toRaw(menuOptions.value), defaultNoItemKeys);
  }
  if (hideOptionsList) {
    menuOptions.value = hideOption([...defaultMultiSelectOptions, divider(), ...defaultOptions], hideOptionsList);
  }
  if (pickOptionsList) {
    menuOptions.value = pickOption([...defaultMultiSelectOptions, divider(), ...defaultOptions], pickOptionsList);
  }
  if (optionsHandle) {
    // 自定义函数能够拿到当前选项和所有选项
    menuOptions.value = optionsHandle(cloneDeep(toRaw(menuOptions.value)), [...defaultMultiSelectOptions, ...defaultOptions], targetInstance);
  }
  nextTick().then(() => {
    editStore.state.mousePosition.x = e.clientX;
    editStore.state.mousePosition.y = e.clientY;
    editStore.state.rightMenuShow = true;
    on(document, 'click', () => (editStore.state.rightMenuShow = false));
  });
};

/**
 * * 右键hook
 * @param menuConfig
 * @returns
 */
export const useContextMenu = () => {
  // 设置默认项
  menuOptions.value = defaultOptions;

  // * 失焦
  const onClickOutSide = () => {
    off(document, 'click', () => (editStore.state.rightMenuShow = false));
    editStore.state.rightMenuShow = false;
  };

  // * 事件处理
  const handleMenuSelect = (key: string) => {
    onClickOutSide();
    const targetItem: MenuOptionsItemType[] = menuOptions.value.filter((e: MenuOptionsItemType) => e.key === key);

    menuOptions.value.forEach((e: MenuOptionsItemType) => {
      if (e.key === key) {
        if (e.fnHandle) {
          e.fnHandle();
          return;
        }
        if (!targetItem) return;
      }
    });
  };

  return {
    menuOptions,
    defaultOptions,
    defaultMultiSelectOptions,
    handleContextMenu,
    onClickOutSide,
    handleMenuSelect,
    mousePosition: editStore.state.mousePosition,
  };
};
