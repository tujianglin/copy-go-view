import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import '/@/design/index.less';
import { router, setupRouter } from '/@/router';
import { setupStore } from '/@/store';
import { setupI18n } from '/@/locales';
import { setupRouterGuard } from '/@/router/guard';
import 'uno.css';

async function bootstrap() {
  const app = createApp(App);
  // 配置 store
  setupStore(app);
  // 配置 多语言
  await setupI18n(app);
  // 配置 路由
  await setupRouter(app);
  setupRouterGuard(router);
  app.mount('#app');
}

bootstrap();
