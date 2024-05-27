<script lang="tsx">
  import { Form, Select } from 'ant-design-vue';
  import { computed, defineComponent } from 'vue';
  import { SelectCreateDataEnum, SelectCreateDataType } from './types';
  import { RequestDataTypeEnum } from '/@/enums/httpEnum';
  import { useTargetData } from '../../hooks/useTargetData';
  import { ChartFrameEnum } from '/@/packages/types';
  import { loadAsyncComponent } from '/@/utils/components';
  const DataStatic = loadAsyncComponent(() => import('./components/DataStatic.vue'));
  export default defineComponent({
    setup() {
      const { targetData } = useTargetData();
      // 选项
      const selectOptions: SelectCreateDataType[] = [
        {
          label: SelectCreateDataEnum.STATIC,
          value: RequestDataTypeEnum.STATIC,
        },
        {
          label: SelectCreateDataEnum.AJAX,
          value: RequestDataTypeEnum.AJAX,
        },
        {
          label: SelectCreateDataEnum.Pond,
          value: RequestDataTypeEnum.Pond,
        },
      ];
      // 无数据源
      const isNotData = computed(() => {
        return targetData.value.chartConfig?.chartFrame === ChartFrameEnum.STATIC || typeof targetData.value?.option?.dataset === 'undefined';
      });
      return () => (
        <div class="h-full overflow-auto p-2">
          <Form colon={false} labelCol={{ span: 4 }}>
            <Form.Item label="请求方式">
              <Select v-model:value={targetData.value.request.requestDataType} disabled={isNotData.value} options={selectOptions}></Select>
            </Form.Item>
          </Form>
          {/* 静态数据 */}
          {targetData.value.request.requestDataType === RequestDataTypeEnum.STATIC ? <DataStatic></DataStatic> : ''}
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
