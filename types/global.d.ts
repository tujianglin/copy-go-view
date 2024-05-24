import { App } from 'vue';

declare type Recordable<T = any> = Record<string, T>;
declare interface ViteEnv {
  VITE_PORT: number;
  VITE_PROXY: string;
  VITE_PUBLIC_PATH: string;
  VITE_GLOB_APP_TITLE: string;
  VITE_DROP_CONSOLE: boolean;
  VITE_GLOB_API_URL: string;
}

declare global {
  interface Window {
    $vue: App;
    $KeyboardActive: {
      ctrl: boolean;
      space: boolean;
    };
    onKeySpacePressHold?: Function;
  }
}
