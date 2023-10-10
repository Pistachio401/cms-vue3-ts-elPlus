import { localCache } from '@/utils/cache'
import jpRequest from '..'
import { LOGIN_TOKEN } from '@/global/constants'

export function accountLogin(account: any) {
  return jpRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserById(id: number) {
  return jpRequest.get({
    url: '/users/' + id /* ,
    headers: {
      Authorization: 'Bearer ' + localCache.getCache(LOGIN_TOKEN)
    } */
  })
}

export function getRoleMenus(id: number) {
  return jpRequest.get({
    url: `/role/${id}/menu`
  })
}
