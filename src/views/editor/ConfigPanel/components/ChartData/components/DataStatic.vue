<script lang="tsx">
  import { defineComponent, ref } from 'vue';
  import { MonacoEditor } from '/@/components';
  export default defineComponent({
    setup() {
      const value = ref();
      return () => <MonacoEditor language="javascript" v-model={value.value}></MonacoEditor>;
    },
  });
</script>
<style lang="less" scoped></style>
