import router /* , { addRoutesWithMenu } */ from '@/router'
import { accountLogin, getRoleMenus, getUserById } from '@/service/login/login'
import { localCache } from '@/utils/cache'
// import { mapMenusToPermissions, mapMenusToRoutes } from '@/utils/map-menus'
import { defineStore } from 'pinia'
// import useMainStore from '../main/main'
import type { IAccount } from '@/types'
import { LOGIN_TOKEN } from '@/global/constants'
// import type { RouteRecordRaw } from 'vue-router'

interface ILoginState {
  token: string
  userInfo: any
  /* 这里userMenus不让写成any[]，因为下方获取的有可能是never[]，
    而never是不能赋值给任何其他值的 */
  userMenus: any
  permissions: string[]
}

// 保存在pinia（Vuex）中的数据相当于保存在内存中，刷新过后就没有了
// 因此如果想长久的共享某一个数据，就必须保存在其他地方，比如localCache
const useLoginStore = defineStore('login', {
  // pinia会自动对state中的数据做响应式处理（也就是用Proxy包裹）
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenus: localCache.getCache('userMenus') ?? [],
    permissions: []
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      // 1.获取登录信息
      const loginRes = await accountLogin(account)
      console.log(loginRes)
      const { id, token } = loginRes.data
      this.token = token

      // 2.保存在cache中
      // 因为接下来获取用户信息的请求头里要用到
      // 所以要在这里缓存，不能延期缓存
      localCache.setCache(LOGIN_TOKEN, token)

      // 3.获取用户信息
      /* const userRes = await getUserById(id)
      this.userInfo = userRes.data
      localCache.setCache('userInfo', this.userInfo)

      // 4.根据role的id获取菜单
      const roleId = this.userInfo.role.id
      const menuRes = await getRoleMenus(roleId)
      this.userMenus = menuRes.data
      localCache.setCache('userMenus', this.userMenus)

      // 5.获取登录用户所有按钮的权限
      const permissions = mapMenusToPermissions(this.userMenus)
      this.permissions = permissions
      localCache.setCache('permissions', this.permissions)

      // 6.请求所有的数据：请求所有roles和department数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
 */
      // 7.动态添加路由
      /*
        a. 获取菜单（userMenus,第四步已经做过了）
        b. 动态获取所有的路由对象，然后放到数组中
          路由都在独立的文件中，从文件中将所有的路由对象先读取到数组中
        c. 根据菜单去匹配正确的路由
      */
      // const localRoutes: Array<RouteRecordRaw> = []
      // // 1 读取router/main中所有的ts文件
      // const files: Record<string, any> = import.meta.glob('../../router/main/**/*.ts', {
      //   eager: true // 表示想要立即获得模块化的结果，而不是懒加载出来
      // })
      // // 2 将加载的对象放在localRoutes
      // for (const key in files) {
      //   const module = files[key]
      //   localRoutes.push(module.default)
      // }
      // console.log(localRoutes)
      // // 3.根据菜单去匹配正确的路由
      // for (const menu of this.userMenus) {
      //   for (const submenu of menu.children) {
      //     const route = localRoutes.find((item) => item.path === submenu.url)
      //     if (route) router.addRoute('main', route)
      //   }
      // }
      /* const routes = mapMenusToRoutes(this.userMenus)
      routes.forEach((route) => router.addRoute('main', route)) */
      // addRoutesWithMenu(this.userMenus)

      // 跳转到首页
      router.push('/main')
    },
    // 用户进行刷新时pinia中数据别重置，重新请求加载新的数据
    loadLocalDataAction() {
      // 1.用户进行刷新默认加载数据
      /* this.token = localCache.getCache(LOGIN_TOKEN)
      this.userInfo = localCache.getCache('userInfo')
      this.userMenus = localCache.getCache('userMenus')
      this.permissions = localCache.getCache('permissions')

      if (this.token && this.userMenus && this.permissions) {
        // 2.动态添加路由表
        const routes = mapMenusToRoutes(this.userMenus)
        routes.forEach((route) => router.addRoute('main', route))
        // 3.请求所有的数据：请求所有roles和department数据
        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction()
      } */
    }
  }
})

export default useLoginStore
