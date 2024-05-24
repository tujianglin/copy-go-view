<script lang="tsx">
  import { PropType, computed, defineComponent, ref } from 'vue';
  import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
  import { LayerModeEnum } from '/@/store/types';
  import { fetchImages } from '/@/utils/image';
  import { useEditStore } from '/@/store/modules/edit';
  import { toRaw } from 'vue';
  import { MenuEnum, MouseEventButton } from '/@/enums/editPageEnum';
  import { MenuOptionsItemType, useContextMenu } from '../../../ContextMenu/useContextMenu';
  export default defineComponent({
    props: {
      componentData: {
        type: Object as PropType<CreateComponentType | CreateComponentGroupType>,
        required: true,
      },
      isGroup: {
        type: Boolean,
        default: false,
      },
      layerMode: {
        type: String as PropType<LayerModeEnum>,
        default: LayerModeEnum.THUMBNAIL,
      },
    },
    setup(props) {
      const { handleContextMenu, onClickOutSide } = useContextMenu();
      const id = toRaw(props.componentData.id);
      const editStore = useEditStore();

      const select = computed(() => {
        return editStore.state.targetChart.selectId.find((i) => i === id);
      });
      // 获取图片
      function fetchImageUrl(image) {
        const imageInfo = ref('');
        imageInfo.value = fetchImages(image);
        return <img class="h-13 b-rd-1 p-0.5 pointer-events-none transition-all-400" v-lazy={imageInfo.value} />;
      }
      function onMousedown(e: MouseEvent) {
        onClickOutSide();
        if (e.buttons === MouseEventButton.LEFT && window.$KeyboardActive?.ctrl) {
          // 若已选中，则去除
          if (editStore.state.targetChart.selectId.includes(id)) {
            const exList = editStore.state.targetChart.selectId.filter((e) => e !== id);
            editStore.setTargetSelectChart(exList);
          } else {
            editStore.setTargetSelectChart(id, true);
          }
          return;
        }
        editStore.setTargetSelectChart(id);
      }
      // 右键事件
      function optionsHandle(targetList: MenuOptionsItemType[], _: MenuOptionsItemType[], targetInstance: CreateComponentType) {
        // 多选处理
        if (editStore.state.targetChart.selectId.length > 1) {
          return targetList.filter((i) => i.key === MenuEnum.GROUP);
        }
        const statusMenuEnums: MenuEnum[] = [];
        // 处理锁定与隐藏
        if (targetInstance.status.lock) {
          statusMenuEnums.push(MenuEnum.LOCK);
        } else {
          statusMenuEnums.push(MenuEnum.UNLOCK);
        }
        if (targetInstance.status.hide) {
          statusMenuEnums.push(MenuEnum.HIDE);
        } else {
          statusMenuEnums.push(MenuEnum.SHOW);
        }
        return targetList.filter((item) => !statusMenuEnums.includes(item.key as MenuEnum));
      }
      return () => (
        <div class="group mb-1 relative w-[90%] cursor-pointer" onMousedown={onMousedown} onContextmenu={(e) => handleContextMenu(e, props.componentData, optionsHandle)}>
          <div class={['p-1 b-rd-1 bd-layout group-hover:(bg-bg-hover bd-primary)', { select: select.value }]}>{fetchImageUrl(props.componentData.chartConfig?.image)}</div>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
