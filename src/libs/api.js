import axios from 'axios'
import store from '@/store'
import router from '@/router'
let env = process.env.NODE_ENV
const ajaxUrl = env === 'development'
  ? '/'
  : env === 'production'
  ? './'
  : 'https://debug.url.com'

// http request 拦截器
axios.interceptors.request.use(
    config => {
      config.headers.app = 'website'
      if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.token = `${store.state.token}`
      }
      return config
    },
    err => {
      return Promise.reject(err)
    })
axios.interceptors.response.use(data => {
  return data
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
                  // 返回 401 清除token信息并跳转到登录页面
        store.commit('logout')
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  return Promise.reject(error.response.data)   // 返回接口返回的错误信息
})
axios.defaults.baseURL = ajaxUrl
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
export default axios
