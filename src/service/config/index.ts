let BASE_URL = ''
const TIME_OUT = 6000

if (import.meta.env.DEV) {
  BASE_URL = 'http://codercba.com:5000'
} else if (import.meta.env.PROD) {
  BASE_URL = 'http://codercba.com:5000'
}

export { BASE_URL, TIME_OUT }

// 区分开发环境和生产环境
// 方式1：打包时人为切换BASE_URL
// 但是有风险，因为是人在操作
// export const BASE_URL = 'http://codercba.prod:8000'
// export const BASE_URL = 'http://codercba.dev:8000'

// 方式2：利用vite提供的环境变量进行判断
// vite默认提供的环境变量
// console.log(import.meta.env.MODE) // 当前处于prod还是dev环境
// console.log(import.meta.env.DEV) // 当前是否处于开发环境
// console.log(import.meta.env.PROD) // 当前是否处于生产环境
// console.log(import.meta.env.SSR) // 当前是否是服务器端渲染SSR(server side render)

// let baseUrl = ''
// if (import.meta.env.DEV) {
//   baseUrl = 'http://codercba.dev:8000'
// } else if (import.meta.env.PROD) {
//   baseUrl = 'http://codercba.prod:8000'
// }

// 方式3：通过.env文件直接读取变量
// console.log(import.meta.env)
