import { computed, Ref } from 'vue';
import { CreateComponentType, CreateComponentGroupType } from '/@/packages/types';
import { useEditStore } from '/@/store/modules/edit';

// 获取当前对象数据
export const useTargetData = () => {
  const editStore = useEditStore();
  const targetData: Ref<CreateComponentType | CreateComponentGroupType> = computed(() => {
    const list = editStore.state.componentList;
    const targetIndex = editStore.fetchTargetIndex();
    return list[targetIndex];
  });
  return { targetData, editStore };
};
