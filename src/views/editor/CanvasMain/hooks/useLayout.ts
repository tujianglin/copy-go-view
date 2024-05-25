import { onUnmounted, onMounted } from 'vue';
import { useEditStore } from '/@/store/modules/edit';
import { EditCanvasTypeEnum } from '/@/store/types';

const editStore = useEditStore();

// 布局处理
export const useLayout = (fn: () => Promise<void>) => {
  let removeScale: Function = () => {};
  onMounted(async () => {
    // 设置 Dom 值(ref 不生效先用 document)
    editStore.setEditCanvas(EditCanvasTypeEnum.EDIT_LAYOUT_DOM, document.getElementById('edit-layout'));
    editStore.setEditCanvas(EditCanvasTypeEnum.EDIT_CONTENT_DOM, document.getElementById('edit-content'));

    // 获取数据
    await fn();
    // 监听初始化
    removeScale = editStore.listenerScale();
  });

  onUnmounted(() => {
    editStore.setEditCanvas(EditCanvasTypeEnum.EDIT_LAYOUT_DOM, null);
    editStore.setEditCanvas(EditCanvasTypeEnum.EDIT_CONTENT_DOM, null);
    removeScale();
  });
};
