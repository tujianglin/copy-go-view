import antdLocal from 'ant-design-vue/es/locale/zh_CN';
import { genMessage } from '../helper';

const modules = import.meta.glob('./zh-CN/**/*.ts', { eager: true }) as any;
export default {
  message: {
    ...genMessage(modules, 'zh-CN'),
    antdLocal,
  },
};
