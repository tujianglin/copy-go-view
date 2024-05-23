<script lang="tsx">
  import { Input, Space } from 'ant-design-vue';
  import { computed, defineComponent, nextTick, ref } from 'vue';
  import { useEditStore } from '/@/store/modules/edit';
  import { EditCanvasConfigEnum } from '/@/store/types';
  import { fetchRouteParamsLocation, setTitle } from '/@/utils';
  export default defineComponent({
    setup() {
      const editStore = useEditStore();
      const title = ref(fetchProhectInfoById() || '');
      const focus = ref<boolean>(false);
      const inputRef = ref();

      const comTitle = computed(() => {
        const newTitle = title.value || '新项目';
        setTitle(newTitle);
        editStore.setEditCanvasConfig(EditCanvasConfigEnum.PROJECT_NAME, newTitle);
        return newTitle;
      });

      // 根据路由 id 参数获取项目信息
      function fetchProhectInfoById() {
        const id = fetchRouteParamsLocation();
        if (id.length) {
          return id[0];
        }
        return '';
      }

      function onFocus() {
        focus.value = true;
        nextTick(() => {
          inputRef.value?.focus();
        });
      }
      return () => (
        <Space class="flex-center">
          <span v-show={!focus.value} class="cursor-pointer" onClick={onFocus}>
            {comTitle.value}
          </span>
          <Input ref={inputRef} v-show={focus.value} v-model:value={[title.value, ['trim']]} onBlur={() => (focus.value = false)}></Input>
        </Space>
      );
    },
  });
</script>
<style lang="less" scoped></style>
