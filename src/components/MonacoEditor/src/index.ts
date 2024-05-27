import { nextTick, onBeforeUnmount, ref, watch } from 'vue';
import type { editor as MEditor } from 'monaco-editor';
import type { Monaco } from '@monaco-editor/loader';
import loader from '@monaco-editor/loader';
import { useAppStore } from '/@/store/modules/app';
loader.config({
  paths: {
    vs: '/monaco-editor/min/vs',
  },
});
export const useMonacoEditor = (language = 'javascript') => {
  const appStore = useAppStore();
  let monaco: Monaco | null = null;
  let editor: MEditor.IStandaloneCodeEditor | null = null;
  let initReadOnly = false;
  const el = ref<HTMLElement | null>(null);

  watch(
    () => appStore.appConfig.darkTheme,
    (val) => {
      monaco.editor.setTheme(val ? 'vs-dark' : 'vs');
    },
  );

  // 格式化
  const onFormatDoc = async () => {
    await editor?.getAction('editor.action.formatDocument')?.run();
  };

  // 更新
  const updateVal = (val: string) => {
    nextTick(async () => {
      editor?.setValue(val);
      initReadOnly && editor?.updateOptions({ readOnly: false });
      await onFormatDoc();
      initReadOnly && editor?.updateOptions({ readOnly: true });
    });
  };

  // 创建实例
  const createEditor = async (editorOption: MEditor.IStandaloneEditorConstructionOptions): Promise<MEditor.IStandaloneCodeEditor> => {
    if (!el.value) return;
    monaco = await loader.init();
    const javascriptModel = monaco.editor.createModel('', language);
    initReadOnly = !!editorOption.readOnly;
    editor = monaco.editor.create(el.value, {
      model: javascriptModel,
      // 主题
      theme: appStore.appConfig.darkTheme ? 'vs-dark' : 'vs',
      // 是否启用预览图
      minimap: { enabled: false },
      // 圆角
      roundedSelection: true,
      // 主键
      multiCursorModifier: 'ctrlCmd',
      // 滚动条
      scrollbar: {
        verticalScrollbarSize: 6,
        horizontalScrollbarSize: 6,
      },
      // 行号
      lineNumbers: 'on',
      // tab大小
      tabSize: 2,
      //字体大小
      fontSize: 14,
      // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
      autoIndent: 'advanced',
      // 自动布局
      automaticLayout: true,
      // 溢出显示
      fixedOverflowWidgets: true,
      ...editorOption,
    });
    return editor;
  };

  // 卸载
  onBeforeUnmount(() => {
    if (editor) editor.dispose();
  });
  return {
    el,
    getEditor: () => editor,
    createEditor,
    onFormatDoc,
    updateVal,
  };
};
