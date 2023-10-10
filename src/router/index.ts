import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const Login = () => import('../views/login/Login.vue')
const Main = () => import('../views/main/Main.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
