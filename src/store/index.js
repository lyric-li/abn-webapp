import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
