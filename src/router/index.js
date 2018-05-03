import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// 首页
const home = reslove => require(['@/pages/home'], reslove)
// 动弹
const barrage = reslove => require(['@/pages/barrage'], reslove)

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
      path: '/barrage',
      name: 'barrage',
      component: barrage,
      meta: {
        titie: '动弹'
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
  const title = to.meta.titie || 'All is to be nice'
  store.commit('SET_TITLE', title)
  next()
})

export default router
