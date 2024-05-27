<script lang="tsx">
  import { defineComponent, h, resolveComponent } from 'vue';
  import { useTargetData } from '../../hooks/useTargetData';
  import { NameSetting, SizeSetting, PositionSetting, StyleSetting } from '/@/components';
  export default defineComponent({
    setup() {
      const { targetData, editStore } = useTargetData();

      return () => (
        <>
          {targetData.value ? (
            <div class="h-full overflow-auto p-2">
              {/* 名称 */}
              <NameSetting chartConfig={targetData.value.chartConfig}></NameSetting>
              {/* 尺寸 */}
              <SizeSetting isGroup={targetData.value.isGroup} chartAttr={targetData.value.attr}></SizeSetting>
              {/* 位置 */}
              <PositionSetting chartAttr={targetData.value.attr} canvasConfig={editStore.state.editCanvasConfig}></PositionSetting>
              {/* 滤镜 */}
              <StyleSetting isGroup={targetData.value.isGroup} chartStyles={targetData.value.styles}></StyleSetting>
              {/* 自定义配置项 */}
              {h(resolveComponent(targetData.value.chartConfig.conKey), {
                optionData: targetData.value.option,
              })}
            </div>
          ) : (
            ''
          )}
        </>
      );
    },
  });
</script>
<style lang="less" scoped></style>
