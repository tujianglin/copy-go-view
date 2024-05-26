<script lang="tsx">
  import { defineComponent } from 'vue';
  import { Collapse, Divider, Switch } from 'ant-design-vue';
  export default defineComponent({
    props: {
      label: String,
      toggle: Boolean,
      modelValue: Boolean,
    },
    emits: ['update:modelValue'],
    setup(props, { slots, emit }) {
      return () => (
        <>
          <Divider></Divider>
          <Collapse ghost expandIconPosition={'start'} collapsible="header">
            <Collapse.Panel
              key="1"
              v-slots={{
                header: () => <div class="w-full">{props.label}</div>,
                extra: () => (
                  <div class=" flex">
                    <div class="flex items-center">{props.toggle && <Switch checked={props.modelValue} onChange={(val) => emit('update:modelValue', val)}></Switch>}</div>
                    {slots?.button?.()}
                  </div>
                ),
              }}
            >
              {slots?.default?.()}
            </Collapse.Panel>
          </Collapse>
        </>
      );
    },
  });
</script>
<style lang="less" scoped>
  :deep(.ant-collapse-header) {
    padding: 0 !important;
  }
</style>
