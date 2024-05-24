export enum InteractEvents {
  INTERACT_ON = 'interactOn',
  INTERACT_COMPONENT_ID = 'interactComponentId',
  INTERACT_FN = 'interactFn',
}

// 基础事件类型(vue不加 on)
export enum BaseEvent {
  // 点击
  ON_CLICK = 'click',
  // 双击
  ON_DBL_CLICK = 'dblclick',
  // 移入
  ON_MOUSE_ENTER = 'mouseenter',
  // 移出
  ON_MOUSE_LEAVE = 'mouseleave',
}

// vue3 生命周期事件
export enum EventLife {
  // 渲染之后
  VNODE_MOUNTED = 'vnodeMounted',
  // 渲染之前
  VNODE_BEFORE_MOUNT = 'vnodeBeforeMount',
}
