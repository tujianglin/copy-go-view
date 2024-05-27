<script lang="tsx">
  import { PropType, defineComponent, ref } from 'vue';
  import { ConfigType, CreateComponentType } from '/@/packages/types';
  import { fetchImages } from '/@/utils/image';
  import { componentInstall } from '/@/utils/components';
  import { fetchChartComponent, createComponent, fetchConfigComponent } from '/@/packages';
  import { useEditStore } from '/@/store/modules/edit';
  import { DragKeyEnum } from '/@/enums/editPageEnum';
  import { JSONStringify } from '/@/utils';
  import { omit } from 'lodash-es';
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
          componentInstall(i.conKey, fetchConfigComponent(i));
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

      // 拖拽处理
      function dragStartHandle(e: DragEvent, item: ConfigType) {
        if (item.disabled) return;
        // 动态注册图表组件
        componentInstall(item.chartKey, fetchChartComponent(item));
        componentInstall(item.conKey, fetchConfigComponent(item));
        // 将配置项绑定到拖拽属性上
        e!.dataTransfer!.setData(DragKeyEnum.DRAG_KEY, JSONStringify(omit(item, ['image'])));
        // 修改状态
        editStore.state.editCanvas.isCreate = true;
      }

      // 拖拽结束
      function dragendHandle() {
        editStore.state.editCanvas.isCreate = false;
      }

      // 单击事件
      function clickHandle(item: ConfigType) {
        item?.configEvents?.addHandle(item);
      }

      return () => (
        <div class="p-2">
          <div class="group flex flex-wrap justify-between gap-2">
            {props.menuOptions.map((i) => (
              <div
                class="bg-container w-full overflow-hidden b-rd-1.5 cursor-pointer bd-layout"
                draggable={!i.disabled}
                onDragstart={(e) => dragStartHandle(e, i)}
                onDragend={dragendHandle}
                onDblclick={() => onDblclick(i)}
                onClick={() => clickHandle(i)}
              >
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
