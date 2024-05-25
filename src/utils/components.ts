import { defineAsyncComponent, AsyncComponentLoader } from 'vue';
import { AsyncLoading } from '/@/components/Application';
import { CreateComponentGroupType, CreateComponentType } from '../packages/types';

/**
 * * 异步加载组件
 * @param loader
 * @returns
 */
export const loadAsyncComponent = (loader: AsyncComponentLoader<any>) =>
  defineAsyncComponent({
    loader,
    loadingComponent: AsyncLoading,
    delay: 20,
  });

/**
 * 动态注册组件
 * @param key
 * @param node
 */
export const componentInstall = <T>(key: string, node: T) => {
  if (!window.$vue.component(key) && node) {
    window.$vue.component(key, node);
  }
};

/**
 * 修改元素位置
 * @param target 对象
 * @param x X轴
 * @param y Y轴
 */
export const setComponentPosition = (target: CreateComponentType | CreateComponentGroupType, x?: number, y?: number) => {
  x && (target.attr.x = x);
  y && (target.attr.y = y);
};
