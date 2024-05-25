<script lang="tsx">
  import { computed, defineComponent } from 'vue';
  import { mousedownBoxSelect } from '../../hooks/useDrag';
  import EditSelect from './components/EditSelect.vue';
  import { useEditStore } from '/@/store/modules/edit';
  import { useSizeStyle } from '../../hooks/useStyle';
  import { CSSProperties } from 'vue';
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
          },
        } as CSSProperties;
      });
      return () => (
        <div style={rangeStyle.value} onMousedown={mousedownBoxSelect}>
          {slots?.default?.()}
          <EditSelect></EditSelect>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
