import Vue from 'vue'
import Router from 'vue-router'
import iview from 'iview'
import store from '@/store'
import data from './config'
Vue.use(Router)
let router = new Router({
  routes: data
})
router.beforeEach((to, from, next) => {
  iview.LoadingBar.start()
  if (to.meta.requireAuth) {
    if (store.state.token) {
      document.title = to.meta.title
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    document.title = to.meta.title
    next()
  }
})

router.afterEach(() => {
  iview.LoadingBar.finish()
  window.scrollTo(0, 0)
})
export default router
