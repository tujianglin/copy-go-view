import antdLocal from 'ant-design-vue/es/locale/en_US';
import { genMessage } from '../helper';

const modules = import.meta.glob('./en-US/**/*.ts', { eager: true }) as any;

export default {
  message: {
    ...genMessage(modules, 'en-US'),
    antdLocal,
  },
};
