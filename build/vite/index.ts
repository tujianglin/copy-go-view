import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import Unocss from 'unocss/vite';
export function createVitePlugins () {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx(), vueSetupExtend(), Unocss()];

  return vitePlugins;
}
