<script lang="tsx">
  import { defineComponent } from 'vue';
  import { getAssetsFile } from '/@/utils';
  export default defineComponent({
    setup() {
      return () => (
        <div class="wm-loading-svg flex-center">
          <img src={getAssetsFile('/images/tips/loading.svg')} alt="" />
        </div>
      );
    },
  });
</script>
<style lang="less" scoped>
  .wm('loading-svg', {
    width: 100%;
    height: 100%;
    background-color: transparent;
    img {
      height: 50px;
    }
  });
</style>
