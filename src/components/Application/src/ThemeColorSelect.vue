<script lang="tsx">
  import { Button, Divider, Modal, Space } from 'ant-design-vue';
  import { defineComponent, ref, toRefs, watch } from 'vue';
  import designColor from '/@/settings/designColor.json';
  import designColorRecommend from '/@/settings/designColorRecommend.json';
  import { useAppStore } from '/@/store/modules/app';
  import { useScroll } from '@vueuse/core';

  export default defineComponent({
    setup() {
      let splitNumber = 50;
      const scrollRef = ref();
      const appStore = useAppStore();
      const { arrivedState } = useScroll(scrollRef, {
        offset: { bottom: 200 },
      });
      const { bottom } = toRefs(arrivedState);
      const designColorSplit = ref(designColor.slice(0, splitNumber));
      const open = ref(false);

      watch(bottom, (val) => {
        if (val) {
          splitNumber += 50;
          designColorSplit.value = designColor.slice(0, splitNumber);
        }
      });

      watch(open, (val) => {
        if (!val) {
          splitNumber = 50;
          designColorSplit.value = designColor.slice(0, splitNumber);
        }
      });

      async function onClick(i) {
        appStore.toggleColorPrimary(i.hex);
      }

      function ColorRender(i) {
        return (
          <div
            class="min-w-75 flex items-center p-2 b-rd-1 b-1 b-solid b-transparent shadow-[0_8px_20px_#00000026] hover:(b-1 b-solid b-[var(--color-primary)]) cursor-pointer"
            onClick={() => onClick(i)}
          >
            <div class="w-2 h-10 b-rd-0.5 mr-2" style={{ backgroundColor: i.hex }}></div>
            <Space direction="vertical">
              <Space>
                <span style={{ color: i.hex }}>{i.name}</span>
                <span>{i.pinyin.toUpperCase()}</span>
              </Space>
              <div>
                <span>{i.hex}</span>
                <Divider type="vertical"></Divider>
                <span>{`rgb(${i.RGB[0]}, ${i.RGB[1]}, ${i.RGB[2]})`}</span>
              </div>
            </Space>
          </div>
        );
      }
      return () => (
        <>
          <Button onClick={() => (open.value = true)}>颜色</Button>
          <Modal v-model:open={open.value} title="主题颜色选择" footer={null} width="90%" centered>
            <Divider></Divider>
            {open.value ? (
              <div ref={scrollRef} class="overflow-y-auto max-h-[80vh]">
                <Space wrap>{designColorRecommend.map((i) => ColorRender(i))}</Space>
                <Divider></Divider>
                <Space wrap>{designColorSplit.value.map((i) => ColorRender(i))}</Space>
              </div>
            ) : (
              ''
            )}
          </Modal>
        </>
      );
    },
  });
</script>
<style lang="less" scoped></style>
