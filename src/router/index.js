import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// 首页
const home = reslove => require(['@/pages/home'], reslove)
// 关注
const follow = reslove => require(['@/pages/follow'], reslove)
// 动弹
const barrage = reslove => require(['@/pages/barrage'], reslove)
// 个人中心
const personal = reslove => require(['@/pages/personal'], reslove)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        titie: '首页',
        back: false
      }
    },
    {
      path: '/follow',
      name: 'follow',
      component: follow,
      meta: {
        titie: '关注',
        back: false
      }
    },
    {
      path: '/barrage',
      name: 'barrage',
      component: barrage,
      meta: {
        titie: '动弹',
        back: false
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: {
        titie: '个人中心',
        back: false
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
  // 设置导航栏
  const title = to.meta.titie || 'All is to be nice'
  store.commit('navbar/SET_TITLE', title)
  if (to.meta.back) {
    store.commit('navbar/SET_LEFTTEXT', '返回')
    store.commit('navbar/SET_LEFTARROW', true)
  } else {
    store.commit('navbar/SET_LEFTTEXT', '')
    store.commit('navbar/SET_LEFTARROW', false)
  }

  // 记录 标签栏选中位置
  const name = to.name
  let temp = 0
  switch (name) {
    case 'home':
      temp = 0
      break
    case 'follow':
      temp = 1
      break
    case 'barrage':
      temp = 2
      break
    case 'personal':
      temp = 3
      break
  }
  sessionStorage.setItem('active', temp)
  next()
})

export default router
