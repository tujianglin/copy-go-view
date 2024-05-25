<script lang="tsx">
  import { LockOutlined, UnlockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons-vue';
  import { PropType, defineComponent } from 'vue';
  import { StatusType } from '/@/packages/types';
  import { useEditStore } from '/@/store/modules/edit';
  export default defineComponent({
    props: {
      isGroup: {
        type: Boolean,
        default: false,
      },
      hover: {
        type: Boolean,
        default: false,
      },
      status: {
        type: Object as PropType<StatusType>,
        default: () => ({
          lock: false,
          hide: false,
        }),
      },
    },
    setup(props) {
      const editStore = useEditStore();
      // 锁定 / 解锁
      function lockHandle(e: MouseEvent) {
        e.stopPropagation();
        props.status.lock ? editStore.setUnLock() : editStore.setLock();
      }
      // 隐藏 / 展示
      function showHandle(e: MouseEvent) {
        e.stopPropagation();
        props.status.hide ? editStore.setShow() : editStore.setHide();
      }
      return () => (
        <div class="group flex items-center" v-show={!props.isGroup}>
          <div class={['opacity-0 group-hover:(opacity-100 text-primary)', { 'opacity-100 text-primary': props.status.lock }]} onClick={lockHandle}>
            {props.status.lock ? <LockOutlined></LockOutlined> : <UnlockOutlined></UnlockOutlined>}
          </div>
          <div class={['opacity-0 group-hover:(opacity-100 text-primary) ml-1', { 'opacity-100 text-primary': props.status.hide }]} onClick={showHandle}>
            {props.status.hide ? <EyeInvisibleOutlined></EyeInvisibleOutlined> : <EyeOutlined></EyeOutlined>}
          </div>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
