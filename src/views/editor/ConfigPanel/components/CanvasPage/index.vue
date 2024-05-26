<script lang="tsx">
  import { Button, Col, Form, InputNumber, Row, Select, Tooltip, Upload, UploadProps, message } from 'ant-design-vue';
  import { defineComponent, nextTick, ref, toRefs } from 'vue';
  import { useEditStore } from '/@/store/modules/edit';
  import { backgroundImageSize } from '/@/settings/designSetting';
  import { fileToUrl, getAssetsFile } from '/@/utils';
  import ColorPicker from '/@/components/ColorPicker/src/index.vue';
  import { PreviewScaleEnum } from '/@/enums/styleEnum';
  import { Radio } from 'ant-design-vue';
  export default defineComponent({
    setup() {
      // 默认应用类型
      const selectColorOptions = [
        {
          label: '应用颜色',
          value: 0,
        },
        {
          label: '应用背景',
          value: 1,
        },
      ];
      const previewTypeList = [
        {
          key: PreviewScaleEnum.FIT,
          title: '自适应',
          desc: '自适应比例展示，页面会有留白',
        },
        {
          key: PreviewScaleEnum.SCROLL_Y,
          title: 'Y轴滚动',
          desc: 'X轴铺满，Y轴自适应滚动',
        },
        {
          key: PreviewScaleEnum.SCROLL_X,
          title: 'X轴滚动',
          desc: 'Y轴铺满，X轴自适应滚动',
        },
        {
          key: PreviewScaleEnum.FULL,
          title: '铺满',
          desc: '强行拉伸画面，填充所有视图',
        },
      ];
      const editStore = useEditStore();
      const { editCanvasConfig } = toRefs(editStore.state);
      const fileList = ref([]);
      const selectColorValue = ref(editCanvasConfig.value.selectColor ? 0 : 1);
      const switchSelectColorLoading = ref(false);

      const customRequest: UploadProps['customRequest'] = (e) => {
        nextTick(() => {
          if (e.file) {
            const ImageUrl = fileToUrl(e.file as File);
            editStore.state.editCanvasConfig.backgroundImage = ImageUrl;
            editStore.state.editCanvasConfig.selectColor = false;
          } else {
            message.error('添加图片失败，请稍后重试！');
          }
        });
      };
      function onColorChange(val) {
        editCanvasConfig.value.selectColor = val == 0;
      }
      // 启用/关闭 颜色（强制更新）
      function switchSelectColorHandle() {
        switchSelectColorLoading.value = true;
        setTimeout(() => {
          switchSelectColorLoading.value = false;
        });
      }
      // 清除背景
      function clearImage() {
        editCanvasConfig.value.backgroundImage = undefined;
        editCanvasConfig.value.selectColor = true;
      }
      // 清除颜色
      function clearColor() {
        editCanvasConfig.value.background = undefined;
        if (editCanvasConfig.value.backgroundImage) {
          editCanvasConfig.value.selectColor = false;
        }
        switchSelectColorHandle();
      }
      return () => (
        <div class="h-full overflow-auto p-2">
          <Form colon={false}>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item label="宽度">
                  <InputNumber v-model:value={editCanvasConfig.value.width} class="w-full" min={50}></InputNumber>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="高度">
                  <InputNumber v-model:value={editCanvasConfig.value.height} class="w-full" min={50}></InputNumber>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div class="mb-4">
            <Upload.Dragger v-model:fileList={fileList.value} showUploadList={false} name="file" customRequest={customRequest}>
              {editCanvasConfig.value.backgroundImage ? <img class="h-42.5 w-fit" src={editCanvasConfig.value.backgroundImage} alt="" /> : ''}
              <div v-show={!editCanvasConfig.value.backgroundImage} class="flex flex-col flex-center">
                <img class="h-37.5 w-fit" src={getAssetsFile('images/no/noImage.png')} alt="" />
                <span class="text-text2">背景图需小于 {backgroundImageSize}M ，格式为 png/jpg/gif 的文件</span>
              </div>
            </Upload.Dragger>
          </div>
          <Form colon={false}>
            <Form.Item label="背景颜色">{!switchSelectColorLoading.value ? <ColorPicker v-model:value={editCanvasConfig.value.background}></ColorPicker> : ''}</Form.Item>
            <Form.Item label="应用类型">
              <Select v-model:value={selectColorValue.value} disabled={!editCanvasConfig.value.backgroundImage} options={selectColorOptions} onChange={onColorChange}></Select>
            </Form.Item>
            <Form.Item label="背景控制">
              <Button class="mr-2" disabled={!editCanvasConfig.value.backgroundImage} onClick={clearImage}>
                清除背景
              </Button>
              <Button disabled={!editCanvasConfig.value.background} onClick={clearColor}>
                清除颜色
              </Button>
            </Form.Item>
            <Form.Item label="适配方式">
              <Radio.Group v-model:value={editCanvasConfig.value.previewScaleType}>
                {previewTypeList.map((i) => (
                  <Tooltip title={i.desc}>
                    <Radio.Button value={i.key}>{i.title}</Radio.Button>
                  </Tooltip>
                ))}
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
