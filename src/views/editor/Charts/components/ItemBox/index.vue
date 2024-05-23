<script lang="tsx">
  import { PropType, defineComponent, ref } from 'vue';
  import { ConfigType } from '/@/packages/index.d';
  import { fetchImages } from '/@/utils/image';
  export default defineComponent({
    props: {
      menuOptions: {
        type: Array as PropType<ConfigType[]>,
        default: () => [],
      },
    },
    setup(props) {
      // 获取图片
      function fetchImageUrl(image) {
        const imageInfo = ref('');
        imageInfo.value = fetchImages(image);
        return <img class="max-w-35 h-25 flex-center pointer-events-none" v-lazy={imageInfo.value} />;
      }
      return () => (
        <div class="p-2">
          <div class="flex flex-wrap justify-between gap-2">
            {props.menuOptions.map((i) => (
              <div class="bg-container w-full overflow-hidden b-rd-1.5 cursor-pointer b-1 b-solid b-layout" draggable>
                <div class="bg-layout flex items-center justify-between px-4 py-0.5 text-text2">{i.title}</div>
                <div class="py-2 overflow-hidden flex-center">{fetchImageUrl(i.image)}</div>
              </div>
            ))}
          </div>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
