<script lang="tsx">
  import { PropType, defineComponent, ref } from 'vue';
  import { ConfigType, CreateComponentType } from '/@/packages/types';
  import { fetchImages } from '/@/utils/image';
  import { componentInstall } from '/@/utils/components';
  import { fetchChartComponent, createComponent } from '/@/packages';
  import { useEditStore } from '/@/store/modules/edit';
  export default defineComponent({
    props: {
      menuOptions: {
        type: Array as PropType<ConfigType[]>,
        default: () => [],
      },
    },
    setup(props) {
      const editStore = useEditStore();
      // 获取图片
      function fetchImageUrl(image) {
        const imageInfo = ref('');
        imageInfo.value = fetchImages(image);
        return <img class="group-hover:scale-[1.08] max-w-35 h-25 flex-center pointer-events-none  transition-all-400" v-lazy={imageInfo.value} />;
      }

      async function onDblclick(i: ConfigType) {
        if (i.disabled) return;
        try {
          // 动态注册图表组件
          componentInstall(i.chartKey, fetchChartComponent(i));
          componentInstall(i.conKey, fetchChartComponent(i));
          // 创建新图表组件
          const newComponent: CreateComponentType = await createComponent(i);
          if (i.redirectComponent) {
            i.dataset && (newComponent.option.dataset = i.dataset);
            newComponent.chartConfig.title = i.title;
            newComponent.chartConfig.chartFrame = i.chartFrame;
          }
          // 添加
          editStore.addComponentList(newComponent, false, true);
          editStore.setTargetSelectChart(newComponent.id);
        } catch (error) {
          console.log(error);
        }
      }
      return () => (
        <div class="p-2">
          <div class="group flex flex-wrap justify-between gap-2">
            {props.menuOptions.map((i) => (
              <div class="bg-container w-full overflow-hidden b-rd-1.5 cursor-pointer bd-layout" draggable onDblclick={() => onDblclick(i)}>
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
