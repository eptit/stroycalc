import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layout/AppLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/vuews/Main.vue'),
      },
      {
        path: '/',
        name: 'Estimate',
        component: () => import('@/vuews/Estimates.vue'),
      },
      {
        path: '/',
        name: 'Documentation',
        component: () => import('@/vuews/Documentation.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
