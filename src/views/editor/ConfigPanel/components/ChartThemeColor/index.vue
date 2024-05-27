<script lang="tsx">
  import { Card } from 'ant-design-vue';
  import { computed, defineComponent, toRefs } from 'vue';
  import { useEditStore } from '/@/store/modules/edit';
  import { colorCustomMerge } from '/@/utils';
  import { cloneDeep } from 'lodash-es';
  export default defineComponent({
    setup() {
      const editStore = useEditStore();
      const { editCanvasConfig } = toRefs(editStore.state);
      // 合并默认颜色和自定义颜色
      const comChartColors = computed(() => {
        return colorCustomMerge(editStore.state.editCanvasConfig.chartCustomThemeColorInfo);
      });

      return () => (
        <div class="h-full overflow-auto p-2">
          {Object.entries(comChartColors.value).map(([key, val]) => (
            <div class="hover:(cursor-pointer)" onClick={() => (editCanvasConfig.value.chartThemeColor = key)}>
              <Card class={['mb-4 bd-transparent bg-layout', { '!bd-primary': key === editCanvasConfig.value.chartThemeColor }]}>
                <div class="flex justify-between ">
                  <div class="w-12">{val.name}</div>
                  {cloneDeep(val.color)
                    .splice(0, 6)
                    .map((i) => (
                      <div class="w-5 h-5 flex-center b-rd-1" style={{ background: i }}></div>
                    ))}
                </div>
                <div class="h-[2px] mt-1" style={{ backgroundImage: `linear-gradient(to right, ${val.color[0]} 0%, ${val.color[5]} 100%)` }}></div>
              </Card>
            </div>
          ))}
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
