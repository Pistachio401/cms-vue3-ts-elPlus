import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface JPInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: any) => any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface JPRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: JPInterceptors<T>
}
