import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'

const Login = () => import('../views/login/Login.vue')
const Main = () => import('../views/main/Main.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
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

// 导航守卫
router.beforeEach((to /* , from, next */) => {
  console.log(to)
  const token = localCache.getCache(LOGIN_TOKEN)
  if (token) {
    if (to.path === '/login') return '/main'
    // else return
  } else {
    if (to.path !== '/login') return '/login'
    else return
  }
})

export default router
