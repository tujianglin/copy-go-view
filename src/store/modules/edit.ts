import { defineStore } from 'pinia';
import { reactive, toRaw } from 'vue';
import { EditStoreType, EditCanvasConfigType, HistoryItemType, HistoryTargetTypeEnum, EditCanvasType, HistoryActionTypeEnum, RecordChartType } from '../types';
import { defaultTheme, globalThemeJson } from '/@/settings/chartSetting';
import { previewScaleType, requestInterval, requestIntervalUnit } from '/@/settings/designSetting';
import { CreateComponentType, CreateComponentGroupType } from '/@/packages/types';
import { cloneDeep, debounce, isArray, isString } from 'lodash-es';
import { PublicGroupConfigClass } from '/@/packages/public';
import { getUUID } from '/@/utils';
import { MenuEnum } from '/@/enums/editPageEnum';
import { useHistoryStore } from './history';
import { useSettingStore } from './setting';
import { message } from 'ant-design-vue';

const historyStore = useHistoryStore();
const settingStore = useSettingStore();

export const useEditStore = defineStore('edit', () => {
  const state = reactive<EditStoreType>({
    // 画布属性
    editCanvas: {
      // 编辑区域 Dom
      editLayoutDom: null,
      editContentDom: null,
      // 偏移量
      offset: 20,
      // 系统控制缩放
      scale: 1,
      // 用户控制的缩放
      userScale: 1,
      // 锁定缩放
      lockScale: false,
      // 初始化
      isCreate: false,
      // 拖拽中
      isDrag: false,
      // 框选中
      isSelect: false,
      // 代码编辑中
      isCodeEdit: false,
    },
    // 右键菜单
    rightMenuShow: false,
    // 鼠标定位
    mousePosition: {
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
    },
    // 目标图表
    targetChart: {
      hoverId: undefined,
      selectId: [],
    },
    // 记录临时数据（复制等）
    recordChart: undefined,
    // -----------------------
    // 画布属性（需存储给后端）
    editCanvasConfig: {
      // 项目名称
      projectName: undefined,
      // 默认宽度
      width: 1920,
      // 默认高度
      height: 1080,
      // 启用滤镜
      filterShow: false,
      // 色相
      hueRotate: 0,
      // 饱和度
      saturate: 1,
      // 对比度
      contrast: 1,
      // 亮度
      brightness: 1,
      // 透明度
      opacity: 1,
      // 变换（暂不更改）
      rotateZ: 0,
      rotateX: 0,
      rotateY: 0,
      skewX: 0,
      skewY: 0,
      // 混合模式
      blendMode: 'normal',
      // 默认背景色
      background: undefined,
      backgroundImage: undefined,
      // 是否使用纯颜色
      selectColor: true,
      // chart 主题色
      chartThemeColor: defaultTheme || 'dark',
      // 自定义颜色列表
      chartCustomThemeColorInfo: undefined,
      // 全局配置
      chartThemeSetting: globalThemeJson,
      // 适配方式
      previewScaleType: previewScaleType,
    },
    // 数据请求处理（需存储给后端）
    requestGlobalConfig: {
      requestDataPond: [],
      requestOriginUrl: '',
      requestInterval: requestInterval,
      requestIntervalUnit: requestIntervalUnit,
      requestParams: {
        Body: {
          'form-data': {},
          'x-www-form-urlencoded': {},
          json: '',
          xml: '',
        },
        Header: {},
        Params: {},
      },
    },
    // 图表数组（需存储给后端）
    componentList: [],
  });

  /**
   * 新增组件列表
   * @param componentInstance 新图表实例
   * @param isHead 是否头部插入
   * @param isHistory 是否进行记录
   * @returns
   */
  function addComponentList(componentInstance: CreateComponentType | CreateComponentGroupType | Array<CreateComponentType | CreateComponentGroupType>, isHead = false, isHistory = false): void {
    if (componentInstance instanceof Array) {
      componentInstance.forEach((item) => {
        addComponentList(item, isHead, isHistory);
      });
      return;
    }
    if (isHistory) {
      historyStore.createAddHistory([componentInstance]);
    }
    if (isHead) {
      state.componentList.unshift(componentInstance);
      return;
    }
    state.componentList.push(componentInstance);
  }
  /**
   * 移除组件列表
   * @param id
   * @param isHistory
   * @returns
   */
  function removeComponentList(id?: string | string[], isHistory = true): void {
    try {
      const idArr = idPreFormat(id);
      const history: Array<CreateComponentType | CreateComponentGroupType> = [];
      // 遍历所有对象
      if (!idArr.length) return;

      idArr.forEach((ids) => {
        const index = fetchTargetIndex(ids);
        if (index !== -1) {
          history.push(state.componentList[index]);
          state.componentList.splice(index, 1);
        }
      });
      isHistory && historyStore.createDeleteHistory(history);
      return;
    } catch (value) {}
  }
  /**
   * 设置 editCanvas 数据项
   * @param key
   * @param value
   */
  function setEditCanvas<T extends keyof EditCanvasType, K extends EditCanvasType[T]>(key: T, value: K) {
    state.editCanvas[key] = value;
  }
  /**
   * 设置editCanvasConfig（需保存后端） 数据项
   * @param key
   * @param value
   */
  function setEditCanvasConfig<T extends keyof EditCanvasConfigType, K extends EditCanvasConfigType[T]>(key: T, value: K) {
    state.editCanvasConfig[key] = value;
  }
  /** 计算缩放 */
  function computedScale() {
    if (state.editCanvas.editLayoutDom) {
      // 现有展示区域
      const width = state.editCanvas.editLayoutDom.clientWidth - state.editCanvas.offset * 2 - 5;
      const height = state.editCanvas.editLayoutDom.clientHeight - state.editCanvas.offset * 4;
      // 用户设定大小
      const editCanvasWidth = state.editCanvasConfig.width;
      const editCanvasHeight = state.editCanvasConfig.height;
      // 需保持的比例
      const baseProportion = parseFloat((editCanvasWidth / editCanvasHeight).toFixed(5));
      const currentRate = parseFloat((width / height).toFixed(5));
      if (currentRate > baseProportion) {
        // 表示更宽
        const scaleWidth = parseFloat(((height * baseProportion) / editCanvasWidth).toFixed(5));
        setScale(scaleWidth > 1 ? 1 : scaleWidth);
      } else {
        // 表示更高
        const scaleHeight = parseFloat((width / baseProportion / editCanvasHeight).toFixed(5));
        setScale(scaleHeight > 1 ? 1 : scaleHeight);
      }
    } else {
      // window['$message'].warning('请先创建画布，再进行缩放');
    }
  }
  /**
   * 重置组件位置
   * @param item
   * @param isForward
   */
  function resetComponentPosition(item: CreateComponentType | CreateComponentGroupType, isForward: boolean): void {
    const index = fetchTargetIndex(item.id);
    if (index > -1) {
      const componentInstance = state.componentList[index];
      if (isForward) {
        componentInstance.attr = Object.assign(componentInstance.attr, {
          x: item.attr.x + item.attr.offsetX,
          y: item.attr.y + item.attr.offsetY,
        });
      } else {
        componentInstance.attr = Object.assign(componentInstance.attr, {
          x: item.attr.x,
          y: item.attr.y,
        });
      }
    }
  }
  /**
   * 设置目标数据
   * @param selectId
   * @param push
   * @returns
   */
  function setTargetSelectChart(selectId?: string | string[], push: boolean = false) {
    // 重复选中
    if (state.targetChart.selectId.find((e: string) => e === selectId)) return;
    // 无 id 清空
    if (!selectId) {
      state.targetChart.selectId = [];
      return;
    }
    // 多选
    if (push) {
      // 字符串
      if (isString(selectId)) {
        state.targetChart.selectId.push(selectId);
        return;
      }
      // 数组
      if (isArray(selectId)) {
        state.targetChart.selectId.push(...selectId);
        return;
      }
    } else {
      // 字符串
      if (isString(selectId)) {
        state.targetChart.selectId = [selectId];
        return;
      }
      // 数组
      if (isArray(selectId)) {
        state.targetChart.selectId = selectId;
        return;
      }
    }
  }
  /**
   * 获取针对 componentList 顺序排过序的 selectId
   * @param ids
   * @returns
   */
  function getSelectIdSortList(ids?: string[]): string[] {
    if (!state.targetChart.selectId.length && !ids) return [];
    const sortArr: string[] = [];
    state.componentList.forEach((item: CreateComponentType | CreateComponentGroupType) => {
      if (ids) {
        ids.forEach((id: string) => {
          if (item.id === id) {
            sortArr.push(id);
          }
        });
      } else {
        state.targetChart.selectId.forEach((id: string) => {
          if (item.id === id) {
            sortArr.push(id);
          }
        });
      }
    });
    return sortArr;
  }
  /**
   * 移动位置
   * @param keyboardValue
   * @returns
   */
  function setMove(keyboardValue: MenuEnum) {
    const index = fetchTargetIndex();
    if (index === -1) return;
    const attr = state.componentList[index].attr;
    const distance = settingStore.state.chartMoveDistance;
    switch (keyboardValue) {
      case MenuEnum.ARROW_UP:
        attr.y -= distance;
        break;
      case MenuEnum.ARROW_RIGHT:
        attr.x += distance;
        break;
      case MenuEnum.ARROW_DOWN:
        attr.y += distance;
        break;
      case MenuEnum.ARROW_LEFT:
        attr.x -= distance;
        break;
    }
  }
  /**
   * 创建分组
   * @param id
   * @param isHistory
   * @returns
   */
  function setGroup(id?: string | string[], isHistory = true) {
    try {
      let selectIds = idPreFormat(id) || state.targetChart.selectId;
      selectIds = getSelectIdSortList(selectIds);
      if (selectIds.length < 2) return;
      const groupClass = new PublicGroupConfigClass();
      const targetList: CreateComponentType[] = [];
      const historyList: CreateComponentType[] = [];

      // 若目标中有数组则先解组
      const newSelectIds: string[] = [];
      selectIds.forEach((id: string) => {
        const targetIndex = fetchTargetIndex(id);
        if (targetIndex !== -1 && state.componentList[targetIndex].isGroup) {
          setUnGroup(
            [id],
            (e: CreateComponentType[]) => {
              e.forEach((e) => {
                addComponentList(e);
                newSelectIds.push(e.id);
              });
            },
            false,
          );
        } else if (targetIndex !== -1) {
          newSelectIds.push(id);
        }
      });
      // 记录整体坐标
      const groupAttr = {
        l: 0,
        t: 0,
        r: 0,
        b: 0,
      };
      newSelectIds.forEach((id: string, index: number) => {
        // 获取目标数据并从 list 中移除 (成组后不可再次成组, 断言处理)
        const item = state.componentList.splice(fetchTargetIndex(id), 1)[0] as CreateComponentType;
        const { x, y, w, h } = item.attr;
        if (index === 0) {
          groupAttr.l = x;
          groupAttr.t = y;
          groupAttr.r = x + w;
          groupAttr.b = y + h;
        } else {
          const { l, t, r, b } = groupAttr;
          // 左
          groupAttr.l = l > x ? x : l;
          // 上
          groupAttr.t = t > y ? y : t;
          // 宽
          groupAttr.r = r < x + w ? x + w : r;
          // 高
          groupAttr.b = b < y + h ? y + h : b;
        }

        targetList.push(item);
        historyList.push(toRaw(item));
      });

      // 修改原数据之前，先记录
      if (isHistory) historyStore.createGroupHistory(historyList);

      // 设置子组件的位置
      targetList.forEach((item: CreateComponentType) => {
        item.attr.x = item.attr.x - groupAttr.l;
        item.attr.y = item.attr.y - groupAttr.t;
        groupClass.groupList.push(item);
      });

      // 设置 group 属性
      groupClass.attr.x = groupAttr.l;
      groupClass.attr.y = groupAttr.t;
      groupClass.attr.w = groupAttr.r - groupAttr.l;
      groupClass.attr.h = groupAttr.b - groupAttr.t;
      addComponentList(groupClass);
      setTargetSelectChart(groupClass.id);
    } catch (error) {}
  }
  /**
   * 解除分组
   * @param ids
   * @param callBack
   * @param isHistory
   * @returns
   */
  function setUnGroup(ids?: string[], callBack?: (e: CreateComponentType[]) => void, isHistory = true) {
    try {
      const selectGroupIdArr = ids || state.targetChart.selectId;
      if (selectGroupIdArr.length !== 1) return;
      // 解组
      const unGroup = (targetIndex: number) => {
        const targetGroup = state.componentList[targetIndex] as CreateComponentGroupType;
        if (!targetGroup.isGroup) return;
        // 记录数据
        if (isHistory) historyStore.createUnGroupHistory(cloneDeep([targetGroup]));

        // 分离组件并还原位置属性
        targetGroup.groupList.forEach((item) => {
          item.attr.x = item.attr.x + targetGroup.attr.x;
          item.attr.y = item.attr.y + targetGroup.attr.y;
          if (!callBack) {
            addComponentList(item);
          }
        });
        setTargetSelectChart(targetGroup.id);
        // 删除分组
        removeComponentList(targetGroup.id, false);

        if (callBack) {
          callBack(targetGroup.groupList);
        }
      };

      const targetIndex = fetchTargetIndex(selectGroupIdArr[0]);
      // 判断目标是否为分组父级
      if (targetIndex !== -1) {
        unGroup(targetIndex);
      }
    } catch (error) {}
  }
  /**
   * 锁定
   * @param status
   * @param isHistory
   * @returns
   */
  function setLock(status: boolean = true, isHistory: boolean = true) {
    try {
      // 暂不支持多选
      if (state.targetChart.selectId.length > 1) return;
      const index: number = fetchTargetIndex();
      if (index !== -1) {
        // 更新状态
        const targetItem = state.componentList[index];
        targetItem.status.lock = status;

        // 历史记录
        if (isHistory) {
          status ? historyStore.createLockHistory([targetItem]) : historyStore.createUnLockHistory([targetItem]);
        }
        updateComponentList(index, targetItem);
        // 锁定添加失焦效果
        if (status) setTargetSelectChart(undefined);
        return;
      }
    } catch (value) {}
  }
  /**
   * 解除锁定
   * @param isHistory
   */
  function setUnLock(isHistory: boolean = true) {
    setLock(false, isHistory);
  }
  /**
   * 隐藏
   * @param status
   * @param isHistory
   * @returns
   */
  function setHide(status: boolean = true, isHistory: boolean = true) {
    try {
      // 暂不支持多选
      if (state.targetChart.selectId.length > 1) return;
      const index: number = fetchTargetIndex();
      if (index !== -1) {
        // 更新状态
        const targetItem = state.componentList[index];
        targetItem.status.hide = status;

        // 历史记录
        if (isHistory) {
          status ? historyStore.createHideHistory([targetItem]) : historyStore.createShowHistory([targetItem]);
        }
        updateComponentList(index, targetItem);

        // 隐藏添加失焦效果
        if (status) setTargetSelectChart(undefined);
      }
    } catch (value) {}
  }
  /**
   * 显示
   * @param isHistory
   */
  function setShow(isHistory: boolean = true) {
    setHide(false, isHistory);
  }
  /** 复制 */
  function setCopy(isCut = false) {
    try {
      // 暂不支持多选
      if (state.targetChart.selectId.length > 1) return;
      const index: number = fetchTargetIndex();
      if (index !== -1) {
        const copyData: RecordChartType = {
          charts: state.componentList[index],
          type: isCut ? HistoryActionTypeEnum.CUT : HistoryActionTypeEnum.COPY,
        };
        setRecordChart(copyData);
        message.success(isCut ? '剪切图表成功' : '复制图表成功');
      }
    } catch (value) {}
  }
  /** 剪切 */
  function setCut() {
    setCopy(true);
  }
  /** 粘贴 */
  function setParse() {
    try {
      const recordCharts = state.recordChart;
      if (recordCharts === undefined) {
        return;
      }
      const parseHandle = (e: CreateComponentType | CreateComponentGroupType) => {
        e = cloneDeep(e);
        e.attr.x = state.mousePosition.startX;
        e.attr.y = state.mousePosition.startY;
        // 外层生成新 id
        e.id = getUUID();
        // 分组列表生成新 id
        if (e.isGroup) {
          (e as CreateComponentGroupType).groupList.forEach((item: CreateComponentType) => {
            item.id = getUUID();
          });
        }

        return e;
      };
      const isCut = recordCharts.type === HistoryActionTypeEnum.CUT;
      const targetList = Array.isArray(recordCharts.charts) ? recordCharts.charts : [recordCharts.charts];
      // 多项
      targetList.forEach((e: CreateComponentType | CreateComponentGroupType) => {
        addComponentList(parseHandle(e), undefined, true);
        // 剪切需删除原数据
        if (isCut) {
          setTargetSelectChart(e.id);
          removeComponentList(undefined, true);
        }
      });
      if (isCut) setRecordChart(undefined);
    } catch (value) {}
  }
  /**
   * 移动组件
   * @param item
   */
  function moveComponentList(item: Array<CreateComponentType | CreateComponentGroupType>) {
    historyStore.createMoveHistory(item);
  }
  /**
   * 撤回/前进 目标处理
   * @param HistoryItem
   * @param isForward
   * @returns
   */
  function setBackAndSetForwardHandle(HistoryItem: HistoryItemType, isForward = false) {
    // 处理画布
    if (HistoryItem.targetType === HistoryTargetTypeEnum.CANVAS) {
      state.editCanvas = HistoryItem.historyData[0] as EditCanvasType;
      return;
    }

    // 取消选中
    setTargetSelectChart();

    // 重新选中
    const historyData = HistoryItem.historyData as Array<CreateComponentType | CreateComponentGroupType>;
    if (isArray(historyData)) {
      // 选中目标元素，支持多个
      historyData.forEach((item: CreateComponentType | CreateComponentGroupType) => {
        setTargetSelectChart(item.id, true);
      });
    }

    // 处理新增类型
    const isAdd = HistoryItem.actionType === HistoryActionTypeEnum.ADD;
    const isDel = HistoryItem.actionType === HistoryActionTypeEnum.DELETE;
    if (isAdd || isDel) {
      if ((isAdd && isForward) || (isDel && !isForward)) {
        historyData.forEach((item) => {
          addComponentList(item);
        });
        return;
      }
      historyData.forEach((item) => {
        removeComponentList(item.id, false);
      });
      return;
    }

    // 处理移动
    const isMove = HistoryItem.actionType === HistoryActionTypeEnum.MOVE;
    if (isMove) {
      historyData.forEach((item) => {
        resetComponentPosition(item, isForward);
      });
      return;
    }

    // 处理层级
    const isTop = HistoryItem.actionType === HistoryActionTypeEnum.TOP;
    const isBottom = HistoryItem.actionType === HistoryActionTypeEnum.BOTTOM;
    if (isTop || isBottom) {
      if (!isForward) {
        // 插入到原有位置
        if (isTop) state.componentList.pop();
        if (isBottom) state.componentList.shift();
        state.componentList.splice(historyData[0].attr.zIndex, 0, historyData[0]);
        return;
      }
      if (isTop) setTop(false);
      if (isBottom) setBottom(false);
    }

    const isUp = HistoryItem.actionType === HistoryActionTypeEnum.UP;
    const isDown = HistoryItem.actionType === HistoryActionTypeEnum.DOWN;
    if (isUp || isDown) {
      if ((isUp && isForward) || (isDown && !isForward)) {
        setUp(false);
        return;
      }
      setDown(false);
      return;
    }
    // 处理分组
    const isGroup = HistoryItem.actionType === HistoryActionTypeEnum.GROUP;
    const isUnGroup = HistoryItem.actionType === HistoryActionTypeEnum.UN_GROUP;
    if (isGroup || isUnGroup) {
      if ((isGroup && isForward) || (isUnGroup && !isForward)) {
        const ids: string[] = [];
        if (historyData.length > 1) {
          historyData.forEach((item) => {
            ids.push(item.id);
          });
        } else {
          const group = historyData[0] as CreateComponentGroupType;
          group.groupList.forEach((item) => {
            ids.unshift(item.id);
          });
        }
        setGroup(ids, false);
        return;
      }
      // 都需使用子组件的id去解组
      if (historyData.length > 1) {
        setUnGroup([(historyData[0] as CreateComponentType).id], undefined, false);
      } else {
        setUnGroup([(historyData[0] as CreateComponentGroupType).groupList[0].id], undefined, false);
      }
      return;
    }
    // 处理锁定
    const isLock = HistoryItem.actionType === HistoryActionTypeEnum.LOCK;
    const isUnLock = HistoryItem.actionType === HistoryActionTypeEnum.UNLOCK;
    if (isLock || isUnLock) {
      if ((isLock && isForward) || (isUnLock && !isForward)) {
        historyData.forEach((item) => {
          setLock(!item.status.lock, false);
        });
        return;
      }
      historyData.forEach(() => {
        setUnLock(false);
      });
      return;
    }
    // 处理隐藏
    const isHide = HistoryItem.actionType === HistoryActionTypeEnum.HIDE;
    const isShow = HistoryItem.actionType === HistoryActionTypeEnum.SHOW;
    if (isHide || isShow) {
      if ((isHide && isForward) || (isShow && !isForward)) {
        historyData.forEach((item) => {
          setHide(!item.status.hide, false);
        });
        return;
      }
      historyData.forEach(() => {
        setShow(false);
      });
      return;
    }
  }
  /** 撤回 */
  function setBack() {
    try {
      const targetData = historyStore.backAction();
      if (!targetData) {
        return;
      }
      setBackAndSetForwardHandle(targetData);
    } catch (value) {}
  }
  /** 前进 */
  function setForward() {
    try {
      const targetData = historyStore.forwardAction();
      if (!targetData) {
        return;
      }
      setBackAndSetForwardHandle(targetData, true);
    } catch (value) {}
  }

  /**
   * 找到目标 id 数据的下标位置，id可为父级或子集数组（无则返回-1）
   * @param id
   * @returns
   */
  function fetchTargetIndex(id?: string): number {
    const targetId = id || (state.targetChart.selectId.length && state.targetChart.selectId[0]) || undefined;
    if (!targetId) {
      return -1;
    }
    const targetIndex = state.componentList.findIndex((e) => e.id === targetId);

    // 当前
    if (targetIndex !== -1) {
      return targetIndex;
    } else {
      const length = state.componentList.length;
      for (let i = 0; i < length; i++) {
        if (state.componentList[i].isGroup) {
          for (const cItem of (state.componentList[i] as CreateComponentGroupType).groupList) {
            if (cItem.id === targetId) {
              return i;
            }
          }
        }
      }
    }
    return -1;
  }
  /**
   * 统一格式化处理
   * @param id
   * @returns
   */
  function idPreFormat(id?: string | string[]) {
    const idArr = [];
    if (!id) {
      idArr.push(...state.targetChart.selectId);
      return idArr;
    }
    if (isString(id)) idArr.push(id);
    if (isArray(id)) idArr.push(...id);
    return idArr;
  }
  /**
   *
   * @param isEnd
   * @param isHistory
   * @returns
   */
  function setBothEnds(isEnd = false, isHistory = true): void {
    try {
      // 暂不支持多选
      if (state.targetChart.selectId.length > 1) return;
      const length = state.componentList.length;
      if (length < 2) {
        return;
      }
      const index = fetchTargetIndex();
      const targetData = state.componentList[index];
      if (index !== -1) {
        // 置底排除最底层, 置顶排除最顶层
        if ((isEnd && index === 0) || (!isEnd && index === length - 1)) {
          return;
        }
        // 记录原有位置
        const setIndex = (componentInstance: CreateComponentType | CreateComponentGroupType, i: number) => {
          const temp = cloneDeep(componentInstance);
          temp.attr.zIndex = i;
          return temp;
        };

        // 历史记录
        if (isHistory) {
          historyStore.createLayerHistory([setIndex(targetData, index)], isEnd ? HistoryActionTypeEnum.BOTTOM : HistoryActionTypeEnum.TOP);
        }

        // 插入两端
        addComponentList(targetData, isEnd);
        state.componentList.splice(isEnd ? index + 1 : index, 1);
        return;
      }
    } catch (value) {}
  }
  /**
   * 上移/下移互换图表位置
   * @param isDown
   * @param isHistory
   * @returns
   */
  function wrap(isDown = false, isHistory = true) {
    try {
      // 暂不支持多选
      if (state.targetChart.selectId.length > 1) return;
      const length = state.componentList.length;
      if (length < 2) {
        return;
      }

      const index: number = fetchTargetIndex();
      if (index !== -1) {
        // 下移排除最底层, 上移排除最顶层
        if ((isDown && index === 0) || (!isDown && index === length - 1)) {
          return;
        }
        // 互换位置
        const swapIndex = isDown ? index - 1 : index + 1;
        const targetItem = state.componentList[index];
        const swapItem = state.componentList[swapIndex];

        // 历史记录
        if (isHistory) {
          historyStore.createLayerHistory([targetItem], isDown ? HistoryActionTypeEnum.DOWN : HistoryActionTypeEnum.UP);
        }
        updateComponentList(index, swapItem);
        updateComponentList(swapIndex, targetItem);
        return;
      }
    } catch (value) {}
  }
  /**
   * 置顶
   * @param isHistory
   */
  function setTop(isHistory = true): void {
    setBothEnds(false, isHistory);
  }
  /**
   * 置底
   * @param isHistory
   */
  function setBottom(isHistory = true): void {
    setBothEnds(true, isHistory);
  }
  /**
   * 图层上移
   * @param isHistory
   */
  function setUp(isHistory = true) {
    wrap(false, isHistory);
  }
  /**
   * 图层下移
   * @param isHistory
   */
  function setDown(isHistory = true) {
    wrap(true, isHistory);
  }
  /**
   * 更新组件列表某一项的值
   * @param index
   * @param newData
   * @returns
   */
  function updateComponentList(index: number, newData: CreateComponentType | CreateComponentGroupType) {
    if (index < 1 && index > state.componentList.length) return;
    state.componentList[index] = newData;
  }
  /**
   * 设置记录数据
   * @param item
   */
  function setRecordChart(item: RecordChartType | undefined) {
    state.recordChart = cloneDeep(item);
  }
  /**
   * 设置页面样式属性
   * @param key
   * @param value
   */
  function setPageStyle<T extends keyof CSSStyleDeclaration>(key: T, value: any): void {
    const dom = state.editCanvas.editContentDom;
    if (dom) {
      dom.style[key] = value;
    }
  }
  /**
   * 设置页面大小
   * @param scale
   */
  function setPageSize(scale: number): void {
    setPageStyle('height', `${state.editCanvasConfig.height * scale}px`);
    setPageStyle('width', `${state.editCanvasConfig.width * scale}px`);
  }
  /**
   * 设置缩放
   * @param scale
   * @param force
   */
  function setScale(scale: number, force = false): void {
    if (!state.editCanvas.lockScale || force) {
      setPageSize(scale);
      state.editCanvas.userScale = scale;
      state.editCanvas.scale = scale;
    }
  }
  /**
   * 设置鼠标位置
   * @param x
   * @param y
   * @param startX
   * @param startY
   */
  function setMousePosition(x?: number, y?: number, startX?: number, startY?: number): void {
    if (x) state.mousePosition.x = x;
    if (y) state.mousePosition.y = y;
    if (startX) state.mousePosition.startX = startX;
    if (startY) state.mousePosition.startY = startY;
  }

  /**
   * 监听缩放
   * @returns
   */
  function listenerScale(): Fn {
    const resize = debounce(computedScale, 200);
    // 默认执行一次
    resize();
    // 开始监听
    window.addEventListener('resize', resize);
    // 销毁函数
    const remove = () => {
      window.removeEventListener('resize', resize);
    };
    return remove;
  }
  return {
    state,
    addComponentList,
    removeComponentList,
    setEditCanvas,
    setEditCanvasConfig,
    computedScale,
    setTargetSelectChart,
    setMove,
    setLock,
    setUnLock,
    setHide,
    setShow,
    setCopy,
    setCut,
    setParse,
    setGroup,
    setUnGroup,
    setUp,
    setDown,
    setBottom,
    setTop,
    setBack,
    moveComponentList,
    setForward,
    setRecordChart,
    setScale,
    setMousePosition,
    listenerScale,
    fetchTargetIndex,
  };
});
