import Vue from 'vue'
import Router from 'vue-router'

const home = reslove => require(['@/pages/home'], reslove)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        titie: '首页'
      }
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
