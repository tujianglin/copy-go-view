<script lang="tsx">
  import { PropType, computed, defineComponent, ref } from 'vue';
  import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
  import { LayerModeEnum } from '/@/store/types';
  import { fetchImages } from '/@/utils/image';
  import { useEditStore } from '/@/store/modules/edit';
  import { toRaw } from 'vue';
  import { MenuEnum, MouseEventButton } from '/@/enums/editPageEnum';
  import { MenuOptionsItemType, useContextMenu } from '../../../ContextMenu/useContextMenu';
  import Status from '../Status/index.vue';
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
      // 悬浮对象
      const hover = computed(() => {
        return props.componentData.id === editStore.state.targetChart.hoverId;
      });
      // 组件状态 隐藏/锁定
      const status = computed(() => {
        return props.componentData.status;
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
      function onMouseenter() {
        editStore.state.targetChart.hoverId = id;
      }
      function onMouseleave() {
        editStore.state.targetChart.hoverId = undefined;
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
        <div
          class="group mb-1 relative w-[90%] cursor-pointer "
          onMousedown={onMousedown}
          onMouseenter={onMouseenter}
          onMouseleave={onMouseleave}
          onContextmenu={(e) => handleContextMenu(e, props.componentData, optionsHandle)}
        >
          <div class={['flex items-center justify-between p-1 mb-1 b-rd-1 bd-transparent group-hover:(bg-layout)', { '!bg-bg-hover !bd-primary': select.value }]}>
            {fetchImageUrl(props.componentData.chartConfig?.image)}
            <div class="flex-1 ml-1 text-3 text-ellipsis">{props.componentData.chartConfig.title}</div>
            <Status isGroup={props.isGroup} hover={hover.value} status={status.value}></Status>
          </div>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
