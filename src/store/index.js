import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: '',
    id: +new Date()
  },
  getters: {
    getToken (state) {
      return state.token
    }
  },
  mutations: {
    login (state, tokenValue) {
      window.sessionStorage.token = tokenValue
      state.token = tokenValue
    },
    logout (state) {
      sessionStorage.removeItem('token')
      state.token = ''
    }
  },
  actions: {

  }
})
export default store
