import Vue from 'vue'
import VueI18n from 'vue-i18n'

import iviewEn from 'iview/dist/locale/en-US'
import ivewiZh from 'iview/dist/locale/zh-CN'
import enUs from './en.js'
import zhCN from './zh.js'

Vue.use(VueI18n)
Vue.locale = () => {}
// 合并资源
const messages = {
  en: Object.assign(enUs, iviewEn),
  zh: Object.assign(zhCN, ivewiZh)
}
let language = window.navigator.language || navigator.browserLanguage
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: language.split('-')[0],  // set locale
  messages  // set locale messages
})
export default i18n
