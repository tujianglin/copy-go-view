import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import '/@/styles/index.less';
import 'uno.css';
import 'vue3-sketch-ruler/lib/style.css';
import { router, setupRouter } from '/@/router';
import { setupStore } from '/@/store';
import { setupI18n } from '/@/locales';
import { setupRouterGuard } from '/@/router/guard';
import { setupDirectives } from '/@/directives';

async function bootstrap() {
  const app = createApp(App);
  // 注册全局自定义指令
  setupDirectives(app);
  // 配置 store
  setupStore(app);
  // 配置 多语言
  await setupI18n(app);
  // 配置 路由
  await setupRouter(app);
  setupRouterGuard(router);
  app.mount('#app');
  window.$vue = app;
}

bootstrap();
