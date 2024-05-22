<script lang="tsx">
  import { Input, Space } from 'ant-design-vue';
  import { computed, defineComponent, ref } from 'vue';
  import { useEditStore } from '/@/store/modules/edit';
  import { EditCanvasConfigEnum } from '/@/store/types';
  export default defineComponent({
    setup() {
      const editStore = useEditStore();
      const title = ref('');

      const comTitle = computed(() => {
        const newTitle = title.value.length ? title.value : '新项目';
        editStore.setEditCanvasConfig(EditCanvasConfigEnum.PROJECT_NAME, newTitle);
        return newTitle;
      });
      return () => (
        <Space class="flex-center">
          工作空间 - <span>{comTitle.value}</span> <Input></Input>
        </Space>
      );
    },
  });
</script>
<style lang="less" scoped></style>
