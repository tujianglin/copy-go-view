import { App } from 'vue';
import { createI18n, I18n, I18nOptions } from 'vue-i18n';
import { setHtmlPageLang } from './helper';
import { useAppStore } from '/@/store/modules/app';

export let i18n: ReturnType<typeof createI18n>;

async function createI18nOptions(): Promise<I18nOptions> {
  const appStore = useAppStore();
  const { locale } = appStore;
  const defLocal = await import(`./lang/${locale}.ts`);
  const message = defLocal.default?.message ?? {};
  setHtmlPageLang(locale);
  return {
    legacy: false,
    locale,
    messages: {
      [locale]: message,
    },
  };
}

export const setupI18n = async (app: App) => {
  const options = await createI18nOptions();
  i18n = createI18n(options) as I18n;
  app.use(i18n);
};
