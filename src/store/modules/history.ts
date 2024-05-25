import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
import { EditCanvasType, HistoryActionTypeEnum, HistoryItemType, HistoryStackItemEnum, HistoryTargetTypeEnum } from '../types';
import { editHistoryMax } from '/@/settings/designSetting';

export const useHistoryStore = defineStore('history', () => {
  const state = reactive({
    // 后退栈
    backStack: [],
    // 前进栈
    forwardStack: [],
  });
  /**
   * 新增记录并插入栈
   * @param item
   * @param actionType
   * @param targetType
   */
  function createStackItem(
    item: CreateComponentType[] | CreateComponentGroupType[] | EditCanvasType[],
    actionType: HistoryActionTypeEnum,
    targetType: HistoryTargetTypeEnum = HistoryTargetTypeEnum.CHART,
  ) {
    // 优化性能转为 freeze
    pushBackStackItem(
      Object.freeze({
        [HistoryStackItemEnum.ID]: new Date().getTime().toString(),
        [HistoryStackItemEnum.HISTORY_DATA]: item,
        [HistoryStackItemEnum.ACTION_TYPE]: actionType,
        [HistoryStackItemEnum.TARGET_TYPE]: targetType,
      } as const),
    );
  }
  /**
   * 推入后退栈
   * @param item
   * @param notClear
   * @returns
   */
  function pushBackStackItem(item: HistoryItemType | Array<HistoryItemType>, notClear = false): void {
    if (item instanceof Array) state.backStack = [...state.backStack, ...item];
    else state.backStack.push(item);
    state.backStack.splice(0, state.backStack.length - editHistoryMax);
    // 新动作需清空前进栈
    if (notClear) return;
    clearForwardStack();
  }
  /**
   * 新增组件记录
   * @param item
   */
  function createAddHistory(item: Array<CreateComponentType | CreateComponentGroupType>) {
    createStackItem(item, HistoryActionTypeEnum.ADD, HistoryTargetTypeEnum.CHART);
  }
  /** 清空前进栈 */
  function clearForwardStack() {
    state.forwardStack = [];
  }
  /** 推入前进栈 */
  function pushForwardStack(item: HistoryItemType | Array<HistoryItemType>): void {
    if (item instanceof Array) state.forwardStack = [...state.forwardStack, ...item];
    else state.forwardStack.push(item);
  }
  /** 移出后退栈 */
  function popBackStackItem(): HistoryItemType | undefined {
    if (state.backStack.length > 0) {
      return state.backStack.pop();
    }
  }
  /** 移出前进栈 */
  function popForwardStack(): HistoryItemType | undefined {
    if (state.forwardStack.length > 0) {
      return state.forwardStack.pop();
    }
  }
  /** 后退  */
  function backAction() {
    try {
      // 排除画布初始化
      if (state.backStack.length > 0) {
        const targetData = popBackStackItem();
        if (!targetData) {
          return;
        }
        // 移除记录到前进堆
        pushForwardStack(targetData);
        return targetData;
      }
    } catch (error) {}
  }
  /** 前进 */
  function forwardAction() {
    try {
      if (state.forwardStack.length) {
        const targetData = popForwardStack();
        if (!targetData) {
          return;
        }
        // 放入后退栈
        pushBackStackItem(targetData, true);
        return targetData;
      }
    } catch (error) {}
  }
  /**
   * 删除组件记录
   * @param item
   */
  function createDeleteHistory(item: Array<CreateComponentType | CreateComponentGroupType>) {
    createStackItem(item, HistoryActionTypeEnum.DELETE, HistoryTargetTypeEnum.CHART);
  }
  /**
   * 改变层级组件记录
   * @param item
   * @param type
   */
  function createLayerHistory(
    item: Array<CreateComponentType | CreateComponentGroupType>,
    type: HistoryActionTypeEnum.TOP | HistoryActionTypeEnum.DOWN | HistoryActionTypeEnum.UP | HistoryActionTypeEnum.BOTTOM,
  ) {
    createStackItem(item, type, HistoryTargetTypeEnum.CHART);
  }
  /**
   * 创建分组
   * @param item
   */
  function createGroupHistory(item: Array<CreateComponentType | CreateComponentGroupType>) {
    createStackItem(item, HistoryActionTypeEnum.GROUP, HistoryTargetTypeEnum.CHART);
  }
  /**
   * 解除分组
   * @param item
   */
  function createUnGroupHistory(item: Array<CreateComponentType | CreateComponentGroupType>) {
    createStackItem(item, HistoryActionTypeEnum.UN_GROUP, HistoryTargetTypeEnum.CHART);
  }
  /**
   * 锁定记录
   * @param item
   */
  function createLockHistory(item: Array<CreateComponentType | CreateComponentGroupType>) {
    createStackItem(item, HistoryActionTypeEnum.LOCK, HistoryTargetTypeEnum.CHART);
  }
  /**
   * 解锁记录
   * @param item
   */
  function createUnLockHistory(item: Array<CreateComponentType | CreateComponentGroupType>) {
    createStackItem(item, HistoryActionTypeEnum.UNLOCK, HistoryTargetTypeEnum.CHART);
  }
  /**
   * 隐藏记录
   * @param item
   */
  function createHideHistory(item: Array<CreateComponentType | CreateComponentGroupType>) {
    createStackItem(item, HistoryActionTypeEnum.HIDE, HistoryTargetTypeEnum.CHART);
  }
  /**
   * 展示记录
   * @param item
   */
  function createShowHistory(item: Array<CreateComponentType | CreateComponentGroupType>) {
    createStackItem(item, HistoryActionTypeEnum.SHOW, HistoryTargetTypeEnum.CHART);
  }
  /**
   * 移动组件记录
   * @param item
   */
  function createMoveHistory(item: Array<CreateComponentType | CreateComponentGroupType>) {
    createStackItem(item, HistoryActionTypeEnum.MOVE, HistoryTargetTypeEnum.CHART);
  }
  return {
    state,
    createAddHistory,
    backAction,
    forwardAction,
    createDeleteHistory,
    createLayerHistory,
    createGroupHistory,
    createUnGroupHistory,
    createLockHistory,
    createUnLockHistory,
    createHideHistory,
    createShowHistory,
    createMoveHistory,
  };
});
