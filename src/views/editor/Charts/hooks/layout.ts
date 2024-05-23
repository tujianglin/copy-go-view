import { toRefs } from 'vue';
import { useLayoutStore } from '/@/store/modules/layout';

// 结构控制
const { setItem } = useLayoutStore();
const { state } = toRefs(useLayoutStore());

export { setItem, state };
