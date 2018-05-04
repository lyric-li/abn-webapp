import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// 首页
const home = reslove => require(['@/pages/home'], reslove)
// 槽点
const slotspot = reslove => require(['@/pages/slotspot'], reslove)
// 吐槽
const roast = reslove => require(['@/pages/roast'], reslove)
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
      path: '/slotspot',
      name: 'slotspot',
      component: slotspot,
      meta: {
        titie: '槽点',
        back: false
      }
    },
    {
      path: '/roast',
      name: 'roast',
      component: roast,
      meta: {
        titie: '吐槽',
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
    case 'slotspot':
      temp = 1
      break
    case 'roast':
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
