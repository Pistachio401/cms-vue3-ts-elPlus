import { BASE_URL, TIME_OUT } from './config'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import JPRequest from './request'

const jpRequest = new JPRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    responseSuccessFn: (config) => {
      const token = localCache.getCache(LOGIN_TOKEN)
      if (config.headers && token) {
        config.headers!.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})

export const hyRequest2 = new JPRequest({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 8000,

  interceptors: {
    requestSuccessFn: (config) => {
      console.log('爱彼迎的请求成功的拦截')
      return config
    },
    requestFailureFn: (err) => {
      console.log('爱彼迎的请求失败的拦截')
      return err
    },
    responseSuccessFn: (res) => {
      console.log('爱彼迎的响应成功的拦截')
      return res
    },
    responseFailureFn: (err) => {
      console.log('爱彼迎的响应失败的拦截')
      return err
    }
  }
})

export default jpRequest
