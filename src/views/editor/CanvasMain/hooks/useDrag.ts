import { toRaw } from 'vue';
import { createComponent } from '/@/packages';
import { ConfigType, CreateComponentType, CreateComponentGroupType, PickCreateComponentType } from '/@/packages/types';
import { useEditStore } from '/@/store/modules/edit';
import { useContextMenu } from '../../ContextMenu/useContextMenu';
import { EditCanvasTypeEnum } from '/@/store/types';
import { JSONParse } from '/@/utils';
import { setComponentPosition } from '/@/utils/components';
import { cloneDeep, throttle } from 'lodash-es';
import { DragKeyEnum, MouseEventButton } from '/@/enums/editPageEnum';

const editStore = useEditStore();
const { onClickOutSide } = useContextMenu();

/**
 * 拖拽到编辑区域里
 * @param e
 * @returns
 */
export const dragHandle = async (e: DragEvent) => {
  e.preventDefault();

  try {
    // 获取拖拽数据
    const drayDataString = e!.dataTransfer!.getData(DragKeyEnum.DRAG_KEY);
    if (!drayDataString) {
      return;
    }
    // 修改状态
    editStore.setEditCanvas(EditCanvasTypeEnum.IS_CREATE, false);
    const dropData: Exclude<ConfigType, ['image']> = JSONParse(drayDataString);
    if (dropData.disabled) return;

    // 创建新图表组件
    const newComponent: CreateComponentType = await createComponent(dropData);
    if (dropData.redirectComponent) {
      dropData.dataset && (newComponent.option.dataset = dropData.dataset);
      newComponent.chartConfig.title = dropData.title;
      newComponent.chartConfig.chartFrame = dropData.chartFrame;
    }

    setComponentPosition(newComponent, e.offsetX - newComponent.attr.w / 2, e.offsetY - newComponent.attr.h / 2);
    editStore.addComponentList(newComponent, false, true);
    editStore.setTargetSelectChart(newComponent.id);
  } catch (error) {}
};

// * 进入拖拽区域
export const dragoverHandle = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
};

/**
 * 不拦截默认行为点击
 * @param e
 * @param item
 * @returns
 */
export const mousedownHandleUnStop = (_: MouseEvent, item?: CreateComponentType | CreateComponentGroupType) => {
  if (item) {
    editStore.setTargetSelectChart(item.id);
    return;
  }
  editStore.setTargetSelectChart(undefined);
};

/**
 * 框选
 * @param e
 * @returns
 */
export const mousedownBoxSelect = (e: MouseEvent) => {
  if (e.which == 2) return;
  if (window.$KeyboardActive?.space) return;
  mousedownHandleUnStop(e);

  // 记录点击初始位置
  const startOffsetX = e.offsetX;
  const startOffsetY = e.offsetY;
  const startScreenX = e.screenX;
  const startScreenY = e.screenY;

  // 记录缩放
  const scale = editStore.state.editCanvas.scale;

  editStore.setMousePosition(undefined, undefined, startOffsetX, startOffsetY);

  // 移动框选
  const mousemove = throttle((moveEvent: MouseEvent) => {
    // 取消当前选中
    editStore.setTargetSelectChart();
    editStore.setEditCanvas(EditCanvasTypeEnum.IS_SELECT, true);

    // 这里先把相对值算好，不然组件无法获取 startScreenX 和 startScreenY 的值
    const currX = startOffsetX + moveEvent.screenX - startScreenX;
    const currY = startOffsetY + moveEvent.screenY - startScreenY;
    editStore.setMousePosition(currX, currY);

    // 计算框选的左上角和右下角
    const selectAttr = {
      // 左上角
      x1: 0,
      y1: 0,
      // 右下角
      x2: 0,
      y2: 0,
    };
    if (currX > startOffsetX && currY > startOffsetY) {
      // 右下方向
      selectAttr.x1 = startOffsetX;
      selectAttr.y1 = startOffsetY;
      selectAttr.x2 = Math.round(startOffsetX + (moveEvent.screenX - startScreenX) / scale);
      selectAttr.y2 = Math.round(startOffsetY + (moveEvent.screenY - startScreenY) / scale);
    } else if (currX > startOffsetX && currY < startOffsetY) {
      // 右上方向
      selectAttr.x1 = startOffsetX;
      selectAttr.y1 = Math.round(startOffsetY - (startScreenY - moveEvent.screenY) / scale);
      selectAttr.x2 = Math.round(startOffsetX + (moveEvent.screenX - startScreenX) / scale);
      selectAttr.y2 = startOffsetY;
    } else if (currX < startOffsetX && currY > startOffsetY) {
      selectAttr.x1 = Math.round(startOffsetX - (startScreenX - moveEvent.screenX) / scale);
      selectAttr.y1 = startOffsetY;
      selectAttr.x2 = startOffsetX;
      selectAttr.y2 = Math.round(startOffsetY + (moveEvent.screenY - startScreenY) / scale);
      // 左下方向
    } else {
      // 左上方向
      selectAttr.x1 = Math.round(startOffsetX - (startScreenX - moveEvent.screenX) / scale);
      selectAttr.y1 = Math.round(startOffsetY - (startScreenY - moveEvent.screenY) / scale);
      selectAttr.x2 = startOffsetX;
      selectAttr.y2 = startOffsetY;
    }

    // 遍历组件
    editStore.state.componentList.forEach((item) => {
      if (!editStore.state.targetChart.selectId.includes(item.id)) {
        // 处理左上角
        const { x, y, w, h } = item.attr;
        const targetAttr = {
          // 左上角
          x1: x,
          y1: y,
          // 右下角
          x2: x + w,
          y2: y + h,
        };
        // 全包含则选中
        if (
          targetAttr.x1 - selectAttr.x1 >= 0 &&
          targetAttr.y1 - selectAttr.y1 >= 0 &&
          targetAttr.x2 - selectAttr.x2 <= 0 &&
          targetAttr.y2 - selectAttr.y2 <= 0 &&
          !item.status.lock &&
          !item.status.hide
        ) {
          editStore.setTargetSelectChart(item.id, true);
        }
      }
    });
  }, 30);

  // 鼠标抬起
  const mouseup = () => {
    // 鼠标抬起时，结束mousemove的节流函数，避免选框不消失问题
    mousemove.cancel();
    editStore.setEditCanvas(EditCanvasTypeEnum.IS_SELECT, false);
    editStore.setMousePosition(0, 0, 0, 0);
    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseup);
  };
  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
};

// * 鼠标事件
export const useMouseHandle = () => {
  // *  Click 事件, 松开鼠标触发
  const mouseClickHandle = (e: MouseEvent, item: CreateComponentType | CreateComponentGroupType) => {
    e.preventDefault();
    e.stopPropagation();
    if (item.status.lock) return;
    // 若此时按下了 CTRL, 表示多选
    if (window.$KeyboardActive?.ctrl) {
      // 若已选中，则去除
      if (editStore.state.targetChart.selectId.includes(item.id)) {
        const exList = editStore.state.targetChart.selectId.filter((e) => e !== item.id);
        editStore.setTargetSelectChart(exList);
      } else {
        editStore.setTargetSelectChart(item.id, true);
      }
    }
  };

  // * 按下事件（包含移动事件）
  const mousedownHandle = (e: MouseEvent, item: CreateComponentType | CreateComponentGroupType) => {
    e.preventDefault();
    e.stopPropagation();
    if (item.status.lock) return;
    onClickOutSide();
    // 按下左键 + CTRL
    if (e.buttons === MouseEventButton.LEFT && window.$KeyboardActive?.ctrl) return;

    // 按下右键 + 选中多个 + 目标元素是多选子元素
    const selectId = editStore.state.targetChart.selectId;
    if (e.buttons === MouseEventButton.RIGHT && selectId.length > 1 && selectId.includes(item.id)) return;

    // 选中当前目标组件
    editStore.setTargetSelectChart(item.id);

    // 按下右键
    if (e.buttons === MouseEventButton.RIGHT) return;

    const scale = editStore.state.editCanvas.scale;
    const canvasWidth = editStore.state.editCanvasConfig.width;
    const canvasHeight = editStore.state.editCanvasConfig.height;

    // 记录图表初始位置和大小
    const targetMap = new Map();
    editStore.state.targetChart.selectId.forEach((id) => {
      const index = editStore.fetchTargetIndex(id);
      if (index !== -1) {
        const { x, y, w, h } = toRaw(editStore.state.componentList[index]).attr;
        targetMap.set(id, { x, y, w, h });
      }
    });

    // 记录点击初始位置
    const startX = e.screenX;
    const startY = e.screenY;

    // 记录历史位置
    const prevComponentInstance: Array<CreateComponentType | CreateComponentGroupType> = [];
    editStore.state.targetChart.selectId.forEach((id) => {
      if (!targetMap.has(id)) return;

      const index = editStore.fetchTargetIndex(id);
      // 拿到初始位置数据
      prevComponentInstance.push(cloneDeep(editStore.state.componentList[index]));
    });

    // 记录初始位置
    editStore.setMousePosition(undefined, undefined, startX, startY);

    // 移动-计算偏移量
    const mousemove = throttle((moveEvent: MouseEvent) => {
      editStore.setEditCanvas(EditCanvasTypeEnum.IS_DRAG, true);
      editStore.setMousePosition(moveEvent.screenX, moveEvent.screenY);

      // 当前偏移量，处理 scale 比例问题
      const offsetX = (moveEvent.screenX - startX) / scale;
      const offsetY = (moveEvent.screenY - startY) / scale;

      editStore.state.targetChart.selectId.forEach((id) => {
        if (!targetMap.has(id)) return;

        const index = editStore.fetchTargetIndex(id);
        // 拿到初始位置数据
        const { x, y, w, h } = targetMap.get(id);
        const componentInstance = editStore.state.componentList[index];

        let currX = Math.round(x + offsetX);
        let currY = Math.round(y + offsetY);

        // 要预留的距离
        const distance = 50;

        // 基于左上角位置检测
        currX = currX < -w + distance ? -w + distance : currX;
        currY = currY < -h + distance ? -h + distance : currY;

        // 基于右下角位置检测
        currX = currX > canvasWidth - distance ? canvasWidth - distance : currX;
        currY = currY > canvasHeight - distance ? canvasHeight - distance : currY;
        if (componentInstance) {
          componentInstance.attr = Object.assign(componentInstance.attr, {
            x: currX,
            y: currY,
          });
        }
      });
      return;
    }, 20);

    const mouseup = () => {
      try {
        editStore.setMousePosition(0, 0, 0, 0);
        editStore.setEditCanvas(EditCanvasTypeEnum.IS_DRAG, false);
        // 加入历史栈
        if (prevComponentInstance.length) {
          editStore.state.targetChart.selectId.forEach((id) => {
            if (!targetMap.has(id)) return;
            const index = editStore.fetchTargetIndex(id);
            const curComponentInstance = editStore.state.componentList[index];
            // 找到记录的所选组件
            prevComponentInstance.forEach((preItem) => {
              if (preItem.id === id) {
                preItem.attr = Object.assign(preItem.attr, {
                  offsetX: curComponentInstance.attr.x - preItem.attr.x,
                  offsetY: curComponentInstance.attr.y - preItem.attr.y,
                });
              }
            });
          });

          const moveComponentInstance = prevComponentInstance.filter((item) => item.attr.offsetX !== 0 && item.attr.offsetY !== 0);
          moveComponentInstance.length && editStore.moveComponentList(moveComponentInstance);
        }
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
      } catch (err) {
        console.log(err);
      }
    };

    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);
  };

  /**
   * 进入事件
   * @param e
   * @param item
   */
  const mouseenterHandle = (e: MouseEvent, item: CreateComponentType | CreateComponentGroupType) => {
    e.preventDefault();
    e.stopPropagation();
    if (!editStore.state.editCanvas.isSelect) {
      editStore.state.targetChart.hoverId = item.id;
    }
  };

  /**
   * 移出事件
   * @param e
   */
  const mouseleaveHandle = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    editStore.setEditCanvas(EditCanvasTypeEnum.IS_DRAG, false);
    editStore.state.targetChart.hoverId = undefined;
  };

  return { mouseClickHandle, mousedownHandle, mouseenterHandle, mouseleaveHandle };
};

// * 移动锚点
export const useMousePointHandle = (e: MouseEvent, point: string, attr: PickCreateComponentType<'attr'>) => {
  e.stopPropagation();
  e.preventDefault();

  // 设置拖拽状态
  editStore.setEditCanvas(EditCanvasTypeEnum.IS_DRAG, true);
  const scale = editStore.state.editCanvas.scale;

  const itemAttrX = attr.x;
  const itemAttrY = attr.y;
  const itemAttrW = attr.w;
  const itemAttrH = attr.h;

  // 记录点击初始位置
  const startX = e.screenX;
  const startY = e.screenY;

  // 记录初始位置
  editStore.setMousePosition(startX, startY);

  const mousemove = throttle((moveEvent: MouseEvent) => {
    editStore.setMousePosition(moveEvent.screenX, moveEvent.screenY);

    const currX = Math.round((moveEvent.screenX - startX) / scale);
    const currY = Math.round((moveEvent.screenY - startY) / scale);

    const isTop = /t/.test(point);
    const isBottom = /b/.test(point);
    const isLeft = /l/.test(point);
    const isRight = /r/.test(point);

    const newHeight = itemAttrH + (isTop ? -currY : isBottom ? currY : 0);
    const newWidth = itemAttrW + (isLeft ? -currX : isRight ? currX : 0);

    attr.h = newHeight > 0 ? newHeight : 0;
    attr.w = newWidth > 0 ? newWidth : 0;
    attr.x = itemAttrX + (isLeft ? currX : 0);
    attr.y = itemAttrY + (isTop ? currY : 0);
  }, 50);

  const mouseup = () => {
    editStore.setEditCanvas(EditCanvasTypeEnum.IS_DRAG, false);
    editStore.setMousePosition(0, 0, 0, 0);
    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseup);
  };

  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
};
