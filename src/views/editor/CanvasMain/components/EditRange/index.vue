<script lang="tsx">
  import { computed, defineComponent, CSSProperties } from 'vue';
  import { mousedownBoxSelect } from '../../hooks/useDrag';
  import { useEditStore } from '/@/store/modules/edit';
  import { useSizeStyle } from '../../hooks/useStyle';
  import EditSelect from './components/EditSelect.vue';
  import EditAlignLine from './components/EditAlignLine.vue';

  export default defineComponent({
    setup(_, { slots }) {
      const editStore = useEditStore();
      const size = computed(() => {
        return {
          w: editStore.state.editCanvasConfig.width,
          h: editStore.state.editCanvasConfig.height,
        };
      });
      const rangeStyle = computed(() => {
        // 缩放
        const scale = {
          transform: `scale(${editStore.state.editCanvas.scale})`,
        };
        return {
          ...useSizeStyle(size.value),
          ...scale,
          ...{
            position: 'relative',
            transformOrigin: 'left top',
            backgroundSize: 'cover',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-container)',
          },
        } as CSSProperties;
      });

      // 模态层
      const rangeModelStyle = computed(() => {
        const dragStyle = editStore.state.editCanvas.isCreate && { 'z-index': 99999 };
        return {
          ...useSizeStyle(size.value),
          ...dragStyle,
          ...({
            zIndex: '-1',
            position: 'absolute',
            left: '0',
            top: '0',
          } as CSSProperties),
        };
      });
      return () => (
        <div style={rangeStyle.value} onMousedown={mousedownBoxSelect}>
          {slots?.default?.()}
          {/* 辅助对齐线 */}
          <EditAlignLine></EditAlignLine>
          {/* 框选时的样式框 */}
          <EditSelect></EditSelect>
          {/* 拖拽时的遮罩 */}
          <div class="go-edit-range-model" style={rangeModelStyle.value}></div>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
