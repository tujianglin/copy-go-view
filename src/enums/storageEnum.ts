export enum StorageEnum {
  TOKEN_KEY = 'TOKEN_KEY',
  APP_CONFIG = 'APP_CONFIG',
  THEME_TOKEN = 'THEME_TOKEN',
  LAYOUT_CONFIG = 'LAYOUT_CONFIG',
}

export type BaseStorage = keyof typeof StorageEnum;
