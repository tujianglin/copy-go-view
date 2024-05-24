import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { StorageEnum } from '/@/enums/storageEnum';
import { Storage } from '/@/utils/storage';
import { SettingStoreType } from '../types';
import { systemSetting } from '/@/settings/systemSetting';

const { SETTING_STROE } = StorageEnum;

const storageSetting: SettingStoreType = Storage.getLocal(SETTING_STROE);

export const useSettingStore = defineStore('setting', () => {
  const state = reactive<SettingStoreType>(storageSetting || systemSetting);
  function setItem<T extends keyof SettingStoreType, K extends SettingStoreType[T]>(key: T, value: K): void {
    state[key] = value;
    Storage.setLocal(SETTING_STROE, state);
  }
  return {
    state,
    setItem,
  };
});
