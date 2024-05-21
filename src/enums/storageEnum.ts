export enum StorageEnum {
  TOKEN_KEY = 'TOKEN_KEY',
  APP_CONFIG = 'APP_CONFIG',
  THEME_TOKEN = 'THEME_TOKEN',
}

export type BaseStorage = keyof typeof StorageEnum;
