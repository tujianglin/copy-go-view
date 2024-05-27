<script lang="tsx">
  import { PropType, computed, defineComponent, ref } from 'vue';
  import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
  import { fetchImages } from '/@/utils/image';
  import { useEditStore } from '/@/store/modules/edit';
  import { toRaw } from 'vue';
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
    },
    emits: ['contextmenu', 'mousedown'],
    setup(props, { emit }) {
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
      function onMouseenter() {
        editStore.state.targetChart.hoverId = id;
      }
      function onMouseleave() {
        editStore.state.targetChart.hoverId = undefined;
      }
      return () => (
        <div
          class={['group mb-1 relative cursor-pointer', { 'w-[90%]': !props.isGroup }]}
          onMousedown={(e) => emit('mousedown', e)}
          onMouseenter={onMouseenter}
          onMouseleave={onMouseleave}
          onContextmenu={(e) => emit('contextmenu', e)}
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
