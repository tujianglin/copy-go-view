import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';
export function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx(), Unocss()];

  return vitePlugins;
}
