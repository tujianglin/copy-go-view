<script lang="tsx">
  import { PropType, computed, defineComponent, ref } from 'vue';
  import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
  import { LayerModeEnum } from '/@/store/types';
  import { fetchImages } from '/@/utils/image';
  import { useEditStore } from '/@/store/modules/edit';
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
      const editStore = useEditStore();
      const select = computed(() => {
        const id = props.componentData.id;
        return editStore.state.targetChart.selectId.find((i) => i === id);
      });
      // 获取图片
      function fetchImageUrl(image) {
        const imageInfo = ref('');
        imageInfo.value = fetchImages(image);
        return <img class="h-13 b-rd-1 p-0.5 pointer-events-none transition-all-400" v-lazy={imageInfo.value} />;
      }
      function onMousedown() {}
      return () => (
        <div class="group mb-1 relative w-[90%] cursor-pointer" onMousedown={onMousedown}>
          <div class={['p-1 b-rd-1 bd-layout group-hover:(bg-bg-hover bd-primary)', { select: select.value }]}>{fetchImageUrl(props.componentData.chartConfig?.image)}</div>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
../../../../../packages/types
