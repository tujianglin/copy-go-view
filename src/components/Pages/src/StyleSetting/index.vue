<script lang="tsx">
  import { PropType, defineComponent, toRefs } from 'vue';
  import { PickCreateComponentType } from '/@/packages/types';
  import { Collapse } from '/@/components';
  import { Divider, Form, Slider } from 'ant-design-vue';
  export default defineComponent({
    props: {
      isGroup: {
        type: Boolean,
        required: false,
      },
      isCanvas: {
        type: Boolean,
        default: false,
      },
      chartStyles: {
        type: Object as PropType<Omit<PickCreateComponentType<'styles'>, 'animations'>>,
        required: true,
      },
    },
    setup(props) {
      const { chartStyles } = toRefs(props);
      return () => (
        <>
          <Divider v-show={props.isGroup}></Divider>
          <Collapse label={props.isCanvas ? '滤镜' : '滤镜 / 变换'} toggle v-model={chartStyles.value.filterShow}>
            <Form colon={false} labelCol={{ span: 3 }} labelAlign="left">
              <Form.Item label="色相">
                <Slider v-model:value={chartStyles.value.hueRotate} step={3} min={0} max={360} tipFormatter={(val) => `${val}deg`}></Slider>
              </Form.Item>
              <Form.Item label="饱和度">
                <Slider v-model:value={chartStyles.value.saturate} step={0.1} min={0} max={2} tipFormatter={(val) => `${(val * 100).toFixed(0)}%`}></Slider>
              </Form.Item>
              <Form.Item label="对比度">
                <Slider v-model:value={chartStyles.value.contrast} step={0.1} min={0} max={2} tipFormatter={(val) => `${(val * 100).toFixed(0)}%`}></Slider>
              </Form.Item>
              <Form.Item label="亮度">
                <Slider v-model:value={chartStyles.value.brightness} step={0.1} min={0} max={2} tipFormatter={(val) => `${(val * 100).toFixed(0)}%`}></Slider>
              </Form.Item>
              <Form.Item label="透明度">
                <Slider v-model:value={chartStyles.value.opacity} step={0.1} min={0} max={1} tipFormatter={(val) => `${(val * 100).toFixed(0)}%`}></Slider>
              </Form.Item>
            </Form>
          </Collapse>
        </>
      );
    },
  });
</script>
<style lang="less" scoped>
  .ant-form {
    .ant-form-item {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
