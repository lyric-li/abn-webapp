// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './vant'
import './icons'
import './utils/components'
import './utils/mixins'
import './utils/filters'
import i18n from './utils/i18n'

import '@/assets/styl/app.styl'
import '@/assets/vivify/vivify.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
