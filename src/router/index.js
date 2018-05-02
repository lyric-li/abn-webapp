import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const home = reslove => require(['@/pages/home'], reslove)

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
  const title = to.meta.titie || 'abn'
  store.commit('SET_TITLE', title)
  next()
})

export default router
