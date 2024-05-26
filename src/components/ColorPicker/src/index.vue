<script lang="tsx">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
  import Pickr from '@simonwep/pickr';
  import '@simonwep/pickr/dist/themes/classic.min.css'; // 可根据需要更换主题
  import { Input } from 'ant-design-vue';

  export default defineComponent({
    name: 'ColorPicker',
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    emits: ['update:value'],
    setup(props, { emit }) {
      const pickrContainer = ref<HTMLElement | null>(null);
      let pickr: Pickr | null = null;
      const inputRef = ref();

      onMounted(() => {
        if (pickrContainer.value) {
          pickr = Pickr.create({
            el: pickrContainer.value,
            theme: 'classic', // or 'monolith', or 'nano'
            default: props.value,
            components: {
              // Main components
              preview: true,
              opacity: true,
              hue: true,

              // Input / output Options
              interaction: {
                hex: true,
                input: true,
                save: true,
                clear: true,
              },
            },
            i18n: {
              'btn:save': '确定',
              'btn:clear': '清除',
            },
          });

          pickr.on('save', (color: any) => {
            const selectedColor = color?.toHEXA()?.toString() || '';
            emit('update:value', selectedColor);
            pickr?.hide();
          });

          pickr.on('hide', () => {
            inputRef.value?.blur?.();
          });
        }
      });

      onBeforeUnmount(() => {
        pickr?.destroyAndRemove();
      });

      return () => (
        <Input
          ref={inputRef}
          class="color-picker"
          onFocus={() => pickr.show()}
          v-model:value={props.value}
          style={{ background: props.value, '--color': props.value }}
          readonly
          v-slots={{
            suffix: () => <div ref={pickrContainer} class="hidden"></div>,
          }}
        ></Input>
      );
    },
  });
</script>

<style lang="less">
  .color-picker {
    .ant-input {
      background: var(--color);
      text-align: center;
    }
    .ant-input-suffix {
      .pickr {
        pointer-events: none;

        .pcr-button {
          opacity: 0;
          width: 0;
          height: 0;
          padding: 0;
        }
      }
    }
  }
</style>
