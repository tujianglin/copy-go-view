import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { packagesList } from '/@/datavComponents';

export const usePackageStore = defineStore('package', () => {
  const state = reactive({
    getPackagesList: Object.freeze(packagesList),
  });
  return {
    state,
  };
});
