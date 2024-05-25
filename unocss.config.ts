import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss';
import presetChinese from 'unocss-preset-chinese';
import presetEase from 'unocss-preset-ease';
import antdUnoTheme from './themes/antd-uno-theme.json';

export default defineConfig({
  safelist: [],
  theme: {
    ...antdUnoTheme,
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetChinese(),
    presetEase(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['flex-between', 'flex items-center justify-between'],
    ['flex-end', 'flex items-end justify-between'],
    ['bd-layout', ' b-layout b-solid b-1'],
    ['bd-primary', ' b-primary b-solid b-1'],
    ['text-ellipsis', 'text-ellipsis overflow-hidden whitespace-nowrap'],
    ['wh-full', 'w-full h-full'],
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
