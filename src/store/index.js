import Vue from 'vue'
import Vuex from 'vuex'
import admin from '@/app/Admin/modules/'
 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ...admin,
     
  }
})
