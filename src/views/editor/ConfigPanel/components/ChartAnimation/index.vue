<script lang="tsx">
  import { Button, Col, Row } from 'ant-design-vue';
  import { defineComponent, ref } from 'vue';
  import { Collapse } from '/@/components';
  import { animations } from '/@/settings/animates';
  import { useTargetData } from '../../hooks/useTargetData';

  export default defineComponent({
    setup() {
      const hoverPreviewAnimate = ref('');
      const { targetData } = useTargetData();

      /**
       * 选中的动画样式
       * @param value
       */
      function activeIndex(value: string) {
        const selectValue = targetData.value.styles.animations;
        if (!selectValue.length) return false;
        return selectValue[0] === value;
      }
      // 清除动画
      function clearAnimate() {
        targetData.value.styles.animations = [];
        hoverPreviewAnimate.value = '';
      }
      return () => (
        <div class="h-full overflow-auto p-2">
          <Button block onClick={clearAnimate}>
            清除动画
          </Button>
          {animations.map((i) => (
            <Collapse label={i.label}>
              <Row gutter={[8, 8]}>
                {i.children.map((ii) => (
                  <Col span={8}>
                    <div onMouseover={() => (hoverPreviewAnimate.value = ii.value)}>
                      <Button
                        class={['w-full', activeIndex(ii.value) && 'bd-primary', hoverPreviewAnimate.value === ii.value && `animate__animated  animate__${ii.value}`]}
                        onClick={() => (targetData.value.styles.animations = [ii.value])}
                      >
                        {ii.label}
                      </Button>
                    </div>
                  </Col>
                ))}
              </Row>
            </Collapse>
          ))}
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
