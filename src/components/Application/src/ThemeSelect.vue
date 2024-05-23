<script lang="tsx">
  import { Button } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { useAppStore } from '/@/store/modules/app';
  export default defineComponent({
    setup() {
      const appStore = useAppStore();
      function onClick() {
        appStore.toggleTheme();
      }
      return () => <Button onClick={onClick}>主题</Button>;
    },
  });
</script>
<style lang="less" scoped></style>
