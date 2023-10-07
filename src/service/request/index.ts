import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { JPRequestConfig } from './type'

class JPRequest {
  instance: AxiosInstance

  // request示例 => axios示例
  constructor(config: JPRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        console.log('全局请求成功的拦截')
        return config
      },
      (err) => {
        console.log('全局请求成功的拦截')
        return err
      }
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功的拦截')
        return res.data
      },
      (err) => {
        console.log('全局响应失败的拦截')
        return err
      }
    )
    // 针对特定的hyRequest实例添加拦截器
    const requestSuccessFn: any = config.interceptors?.requestSuccessFn
    this.instance.interceptors.request.use(
      // config.interceptors?.requestSuccessFn,
      requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  request<T = any>(config: JPRequestConfig<T>) {
    // 单次请求成功的拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: JPRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: JPRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: JPRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: JPRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default JPRequest
