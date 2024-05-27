<script lang="tsx">
  import { PropType, defineComponent, watch } from 'vue';
  import { ConfigType } from '/@/packages/types';
  import { Form, Input, message } from 'ant-design-vue';
  export default defineComponent({
    props: {
      chartConfig: {
        type: Object as PropType<ConfigType>,
        required: true,
      },
    },
    setup(props) {
      watch(
        () => props.chartConfig.title,
        (val) => {
          if (!val.length) {
            message.warning('请输入至少一个字符');
          }
        },
      );
      return () => (
        <Form colon={false} labelCol={{ span: 4 }} labelAlign="left">
          <Form.Item label="名称">
            <Input v-model:value={props.chartConfig.title} placeholder="请输入图表名称"></Input>
          </Form.Item>
        </Form>
      );
    },
  });
</script>
<style lang="less" scoped></style>
