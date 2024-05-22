import type { AppRouteModule } from '/#/router';
const Home: AppRouteModule[] = [
  {
    path: '/',
    name: 'Editor',
    component: () => import('/@/views/editor/index.vue'),
    meta: { title: '编辑器' },
  },
];

export default Home;
