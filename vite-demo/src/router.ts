import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/vue3A',
    name: 'vue3A',
    component: () => import('@/components/vue-demo-A.vue'),
  },
  {
    path: '/vue3B',
    name: 'vue3B',
    component: () => import('@/components/vue-demo-B.vue'),
  },
  
];
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
