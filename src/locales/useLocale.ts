/**
 * Multi-language related operations
 */
import { unref, computed } from 'vue';
import { setHtmlPageLang } from './helper';
import { i18n } from './';
import type { Locale } from 'ant-design-vue/es/locale-provider';
import { useAppStoreWithOut } from '/@/store/modules/app';

interface LangModule {
  message: Record<string, any>;
  dateLocale: Record<string, any>;
  dateLocaleName: string;
}

function setI18nLanguage(locale) {
  const appStore = useAppStoreWithOut();

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as any).value = locale;
  }
  appStore.toggleLocale(locale);
  setHtmlPageLang(locale);
}

export function useLocale() {
  const appStore = useAppStoreWithOut();
  const getLocale = computed(() => appStore.locale);

  const getAntdLocale = computed<Locale>((): any => {
    return i18n.global.getLocaleMessage<{ antdLocale: Locale }>(unref(getLocale)).antdLocale;
  });

  async function changeLocale(locale) {
    const globalI18n = i18n.global;
    const currentLocale = unref(globalI18n.locale);
    if (currentLocale === locale) {
      return locale;
    }
    const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule;
    if (!langModule) return;

    const { message } = langModule;

    globalI18n.setLocaleMessage(locale, message);

    setI18nLanguage(locale);
    return locale;
  }

  return {
    getLocale,
    changeLocale,
    getAntdLocale,
  };
}
