import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'

let defaultCity = '广州'
try {
  if (localStorage.getItem('city')) {
    defaultCity = localStorage.getItem('city')
  }
} catch (e) {}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  getters,
  mutations
})
