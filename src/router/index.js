import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

// 安装路由插件
Vue.use(Router)

// 登录
const login = reslove => require(['@/pages/login'], reslove)
// 注册
const register = reslove => require(['@/pages/register'], reslove)
// 布局
const layout = reslove => require(['@/pages/layout'], reslove)
// 首页
const home = reslove => require(['@/pages/home'], reslove)
// 槽点
const slotspot = reslove => require(['@/pages/slotspot'], reslove)
// 吐槽
const roast = reslove => require(['@/pages/roast'], reslove)
// 个人中心
const personal = reslove => require(['@/pages/personal'], reslove)

// 路由
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        titie: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        titie: '注册'
      }
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children: [
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
        }
      ]
    },
    {
      path: '*',
      redirect: {
        name: 'login'
      }
    }
  ]
})

/* 权限验证 */
// 忽略名单
const ignores = ['login']
// 全局守卫
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
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

  // 设置路由切换动效
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  if (toDepth === fromDepth) {
    store.commit('SET_TRANSNAME', 'slide-fade')
  } else {
    const transName = toDepth > fromDepth ? 'slide-right' : 'slide-left'
    store.commit('SET_TRANSNAME', transName)
  }

  // 不校验直接跳转
  if (ignores.includes(to.name)) {
    next()
  } else {
    // 登录验证
    const user = store.state.user
    console.log('user:', user)
    if (user) {
      next()
    } else {
      next({name: 'login'})
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

// 全局后置守卫
router.afterEach(() => {
  NProgress.done() // finish progress bar
})

export default router
