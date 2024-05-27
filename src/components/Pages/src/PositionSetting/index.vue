<script lang="tsx">
  import { PropType, defineComponent, toRefs } from 'vue';
  import { EditCanvasConfigType } from '/@/store/types';
  import { PickCreateComponentType } from '/@/packages/types';
  import { Button, Col, Divider, Form, InputNumber, Row } from 'ant-design-vue';
  export default defineComponent({
    props: {
      canvasConfig: {
        type: Object as PropType<EditCanvasConfigType>,
        required: true,
      },
      chartAttr: {
        type: Object as PropType<PickCreateComponentType<'attr'>>,
        required: true,
      },
    },
    setup(props) {
      const { chartAttr, canvasConfig } = toRefs(props);
      const positionList = [
        {
          key: 'AlignHorizontalLeftIcon',
          lable: '居左',
        },
        {
          key: 'AlignVerticalCenterIcon',
          lable: 'X轴居中',
        },
        {
          key: 'AlignHorizontalRightIcon',
          lable: '居右',
        },
        {
          key: 'AlignVerticalTopIcon',
          lable: '顶部',
        },
        {
          key: 'AlignHorizontalCenterIcon',
          lable: 'Y轴居中',
        },
        {
          key: 'AlignVerticalBottomIcon',
          lable: '底部',
        },
      ];

      function positonHandle(key: string) {
        switch (key) {
          // 局左
          case positionList[0]['key']:
            chartAttr.value.x = 0;
            break;
          // X轴居中
          case positionList[1]['key']:
            chartAttr.value.y = (canvasConfig.value.height - chartAttr.value.h) / 2;
            break;
          // 局右
          case positionList[2]['key']:
            chartAttr.value.x = canvasConfig.value.width - chartAttr.value.w;
            break;
          // 顶部
          case positionList[3]['key']:
            chartAttr.value.y = 0;
            break;
          // Y轴居中
          case positionList[4]['key']:
            chartAttr.value.x = (canvasConfig.value.width - chartAttr.value.w) / 2;
            break;
          // 底部
          case positionList[5]['key']:
            chartAttr.value.y = canvasConfig.value.height - chartAttr.value.h;
            break;
        }
      }
      return () => (
        <>
          <Divider></Divider>
          <div class="flex justify-around">
            {positionList.map((i) => (
              <Button key={i.key} onClick={() => positonHandle(i.key)}>
                {i.lable}
              </Button>
            ))}
          </div>
          <Form class="mt-3" colon={false} labelCol={{ span: 4 }} labelAlign="left">
            <Form.Item label="尺寸">
              <Row gutter={8}>
                <Col span={12}>
                  <InputNumber class="w-full" v-model:value={props.chartAttr.y} min={0} placeholder="px" prefix="上"></InputNumber>
                </Col>
                <Col span={12}>
                  <InputNumber class="w-full" v-model:value={props.chartAttr.x} min={0} placeholder="px" prefix="左"></InputNumber>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </>
      );
    },
  });
</script>
<style lang="less" scoped>
  :deep(.ant-input-number-prefix) {
    color: var(--text4);
  }
</style>
