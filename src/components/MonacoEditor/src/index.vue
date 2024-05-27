<script lang="tsx">
  import { defineComponent, onMounted, watch } from 'vue';
  import { useMonacoEditor } from '.';
  export default defineComponent({
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      preComment: {
        type: String,
        default: '',
      },
      language: {
        type: String,
        default: 'typescript',
      },
      editorOptions: {
        type: Object,
        default: () => ({}),
      },
    },
    emits: ['update:modelValue', 'blur'],
    setup(props, { emit }) {
      const { el, updateVal, getEditor, createEditor } = useMonacoEditor(props.language);

      watch(
        () => props.modelValue,
        (val: string) => {
          val !== getEditor()?.getValue() && updateMonacoVal(val);
        },
      );

      onMounted(async () => {
        const editor = await createEditor(props.editorOptions);
        editor!.onDidChangeModelContent(() => {
          emit('update:modelValue', editor!.getValue());
        });
        editor!.onDidBlurEditorText(() => {
          emit('blur');
        });
        updateMonacoVal();
      });

      function updateMonacoVal(_val?: string) {
        const { modelValue, preComment } = props;
        const val = preComment ? `${preComment}\n${_val || modelValue}` : _val || modelValue;
        updateVal(val);
      }

      return () => <div ref={el} class="h-100 bd-shadow bd-border"></div>;
    },
  });
</script>
<style lang="less" scoped></style>
