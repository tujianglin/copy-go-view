import type { App } from 'vue';
import LangSelect from './src/LangSelect.vue';
import ThemeSelect from './src/ThemeSelect.vue';
import WmLoading from './src/Loading.vue';
import AsyncLoading from './src/Loading.vue';
import ThemeColorSelect from './src/ThemeColorSelect.vue';

// 异步
AsyncLoading.install = (app: App): void => {
  app.component('AsyncLoading', AsyncLoading);
};

export { LangSelect, WmLoading, AsyncLoading, ThemeSelect, ThemeColorSelect };
