import { defineAsyncComponent, AsyncComponentLoader } from 'vue';
import { AsyncLoading } from '/@/components/Application';

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
