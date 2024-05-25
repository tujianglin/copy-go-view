<script lang="tsx">
  import { ref, toRefs, watch, defineComponent } from 'vue';
  import { useEditStore } from '/@/store/modules/edit';
  import { selectBoxIndex } from '/@/settings/designSetting';
  import { useComponentStyle, useSizeStyle } from '../../../hooks/useStyle';
  export default defineComponent({
    setup() {
      // 全局颜色
      const editStore = useEditStore();
      const { isSelect, scale } = toRefs(editStore.state.editCanvas);

      // 位置
      const positionStyle = ref();

      watch(
        () => editStore.state.mousePosition,
        (positionInfo) => {
          if (!isSelect.value) return;

          // 这里的 x,y 是已经计算过的相对位移值
          const { startX, startY, x, y } = positionInfo;

          const attr = {
            zIndex: selectBoxIndex,
            // left
            x: 0,
            // top
            y: 0,
            // 宽
            w: 0,
            // 高
            h: 0,
            // 偏移
            offsetX: 0,
            offsetY: 0,
          };

          // 处理位置
          if (x > startX && y > startY) {
            // 右下方向
            attr.x = startX;
            attr.y = startY;
            attr.w = Math.round((x - startX) / scale.value);
            attr.h = Math.round((y - startY) / scale.value);
          } else if (x > startX && y < startY) {
            // 右上方向
            attr.x = startX;
            attr.w = Math.round((x - startX) / scale.value);
            attr.h = Math.round((startY - y) / scale.value);
            attr.y = startY - attr.h;
          } else if (x < startX && y > startY) {
            // 左下方向
            attr.y = startY;
            attr.w = Math.round((startX - x) / scale.value);
            attr.h = Math.round((y - startY) / scale.value);
            attr.x = startX - attr.w;
          } else {
            // 左上方向
            attr.w = Math.round((startX - x) / scale.value);
            attr.h = Math.round((startY - y) / scale.value);
            attr.x = startX - attr.w;
            attr.y = startY - attr.h;
          }

          positionStyle.value = {
            ...useComponentStyle(attr, selectBoxIndex),
            ...useSizeStyle(attr),
          };
        },
        {
          deep: true,
        },
      );
      return () => (
        <>
          {isSelect.value ? (
            <div class="absolute" style={positionStyle.value}>
              <div class="absolute wh-full overflow-hidden left-0 top-0 opacity-100 bd-primary"></div>
              <div class="absolute wh-full overflow-hidden top-0.5 left-0.5 opacity-8 bg-primary"></div>
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
