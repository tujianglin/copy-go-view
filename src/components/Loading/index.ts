import type { App } from 'vue';
import WmLoading from './index.vue';
import AsyncLoading from './index.vue';

// 正常组件
export { WmLoading };

// 异步
AsyncLoading.install = (app: App): void => {
  app.component('AsyncLoading', AsyncLoading);
};

export { AsyncLoading };
