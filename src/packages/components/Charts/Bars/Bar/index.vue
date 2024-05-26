<script lang="tsx">
  import { PropType, defineComponent } from 'vue';
  import config from './config';
  export default defineComponent({
    name: 'VBar',
    props: {
      themeSetting: {
        type: Object,
        required: true,
      },
      themeColor: {
        type: Object,
        required: true,
      },
      chartConfig: {
        type: Object as PropType<config>,
        required: true,
      },
    },
    setup() {
      return () => <div>111</div>;
    },
  });
</script>
<style lang="less" scoped></style>
