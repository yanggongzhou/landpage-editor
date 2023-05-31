import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { App } from 'vue'
import { createRouterGuards } from '@/router/router-guards'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/editor',
    name: 'editor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/editor/Editor.vue')
  }
]

export function setupRouter (app: App): void {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
