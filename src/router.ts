import { createRouter, createWebHistory } from 'vue-router';
import NotFoundPage from '@/views/layout/not-found';
import PermissionLayout from '@/views/layout/permission.vue';
import autoRoutes from '~pages';


const routes = [
  {
    path: '/initialization',
    name: 'initialization',
    component: () => import('@/views/initialization')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/login-code',
    name: 'loginCode',
    component: () => import('@/views/login/code.vue')
  },
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
        component: PermissionLayout,
        children: autoRoutes
      }
    ]
  },
  // {
  //   path: '/login/redirect',
  //   name: 'login',
  //   meta: { 
  //     title: '登录',
  //     routerTabIgnore: true 
  //   },
  //   component: () => import('@/views/login/index.vue')
  // },

  {
    path: '/:pathMatch(.*)',
    component: NotFoundPage,
    hidden: true,
    meta: {
      title: '404',
      routerTabIgnore: true 
    }
  }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;