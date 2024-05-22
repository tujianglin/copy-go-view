import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useHistoryStore = defineStore('history', () => {
  const state = reactive({
    // 后退栈
    backStack: [],
    // 前进栈
    forwardStack: [],
  });
  return {
    state,
  };
});
