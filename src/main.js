// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import i18n from './locale'
import iview from 'iview'
import '@/assets/less/variable.less'
import store from './store'
Vue.config.productionTip = false
Vue.use(iview)
Vue.use(VueI18n)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: { App }
})
