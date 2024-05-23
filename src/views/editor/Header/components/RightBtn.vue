<script lang="tsx">
  import { Space, Tooltip, Button } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { LangSelect, ThemeSelect, ThemeColorSelect } from '/@/components/Application';
  export default defineComponent({
    setup() {
      const btnList = [
        {
          select: true,
          title: '预览',
          event: previewHandle,
        },
        {
          select: true,
          title: '发布',
          event: sendHandle,
        },
      ];

      function previewHandle() {}

      function sendHandle() {}
      return () => (
        <Space>
          {btnList.map((i) => (
            <Tooltip title={i.title}>
              <Button type="primary" ghost onClick={i.event}>
                {i.title}
              </Button>
            </Tooltip>
          ))}
          <LangSelect></LangSelect>
          <ThemeColorSelect></ThemeColorSelect>
          <ThemeSelect></ThemeSelect>
        </Space>
      );
    },
  });
</script>
<style lang="less" scoped></style>
