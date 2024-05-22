import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const state = reactive({
    // 图层控制
    layers: true,
    // 图表组件
    charts: true,
    // 详情设置（收缩为true）
    details: false,
  });
  return {
    state,
  };
});
