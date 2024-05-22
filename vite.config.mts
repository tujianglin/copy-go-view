import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/vite';
import { wrapperEnv } from './build/utils';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_PROXY } = viteEnv;
  return {
    base: VITE_PUBLIC_PATH,
    root,
    server: {
      port: VITE_PORT,
      host: true,
      proxy: {
        '/api': {
          target: VITE_PROXY,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/api`), '/'),
        },
      },
    },
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    build: {
      cssTarget: 'chrome80',
      chunkSizeWarningLimit: 2000,
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: '@import "/@/styles/common/index.less";',
        },
      },
    },
    plugins: createVitePlugins(),
  };
});
