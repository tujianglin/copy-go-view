<script lang="tsx">
  import { PropType, defineComponent } from 'vue';
  import { PickCreateComponentType } from '/@/packages/types';
  import { Col, Form, InputNumber, Row } from 'ant-design-vue';
  export default defineComponent({
    props: {
      chartAttr: {
        type: Object as PropType<Omit<PickCreateComponentType<'attr'>, 'node' | 'conNode'>>,
        required: true,
      },
      isGroup: {
        type: Boolean,
        required: false,
      },
    },
    setup(props) {
      return () => (
        <Form colon={false} labelCol={{ span: 4 }} labelAlign="left">
          <Form.Item label="尺寸">
            <Row gutter={8}>
              <Col span={12}>
                <InputNumber class="w-full" v-model:value={props.chartAttr.w} min={0} disabled={props.isGroup} placeholder="px" prefix="宽度"></InputNumber>
              </Col>
              <Col span={12}>
                <InputNumber class="w-full" v-model:value={props.chartAttr.h} min={0} disabled={props.isGroup} placeholder="px" prefix="高度"></InputNumber>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      );
    },
  });
</script>
<style lang="less" scoped>
  :deep(.ant-input-number-prefix) {
    color: var(--text4);
  }
</style>
