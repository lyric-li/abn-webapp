import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// // 登录
// const login = reslove => require(['@/pages/login'], reslove)
// const login = require('@/pages/login').default
// console.log('login:', login)
// // 注册
// const register = reslove => require(['@/pages/register'], reslove)
// // 内容
// const content = reslove => require(['@/pages/content'], reslove)
// // 首页
// const home = reslove => require(['@/pages/home'], reslove)
// // 槽点
// const slotspot = reslove => require(['@/pages/slotspot'], reslove)
// // 吐槽
// const roast = reslove => require(['@/pages/roast'], reslove)
// // 个人中心
// const personal = reslove => require(['@/pages/personal'], reslove)

// 安装路由插件
Vue.use(Router)

// 一级路由
const level1 = []

// 二级路由
const level2 = {
  path: '/content',
  name: 'content',
  component: {},
  children: []
}

const files = require.context('../pages', true, /\.vue$/)
// console.log('files:', files)
// console.log('keys:', files.keys())

files.keys().map(key => {
  // console.log('key:', key)
  // console.log('file:', files(key).default)
  // const id = files.resolve(key)
  // console.log('id:', id)

  const component = files(key).default
  const path = `/${component.name}`
  const name = component.name
  const meta = component.meta

  const route = {
    path,
    name,
    component,
    meta
  }

  const depth = key.split('/').length
  // console.log('depth:', depth)
  // 一级路由
  if (depth === 2) {
    if (name === 'abn') {
      level2.component = component
      return
    }
    level1.push(route)
  }
  // 二级路由
  if (depth === 3) {
    level2.children.push(route)
  }
})

// 路由对象
const routes = level1.concat(level2)
routes.push({
  path: '*',
  redirect: {
    name: 'login'
  }
})

// console.log('routes:', routes)

const router = new Router({
  routes: routes
})

// 路由
// const router = new Router({
//   routes: [
//     {
//       path: '/login',
//       name: 'login',
//       component: login,
//       meta: {
//         titie: '登录'
//       }
//     },
//     {
//       path: '/register',
//       name: 'register',
//       component: register,
//       meta: {
//         titie: '注册'
//       }
//     },
//     {
//       path: '/content',
//       name: 'content',
//       component: content,
//       children: [
//         {
//           path: '/home',
//           name: 'home',
//           component: home,
//           meta: {
//             titie: '首页',
//             back: false
//           }
//         },
//         {
//           path: '/slotspot',
//           name: 'slotspot',
//           component: slotspot,
//           meta: {
//             titie: '槽点',
//             back: false
//           }
//         },
//         {
//           path: '/roast',
//           name: 'roast',
//           component: roast,
//           meta: {
//             titie: '吐槽',
//             back: false
//           }
//         },
//         {
//           path: '/personal',
//           name: 'personal',
//           component: personal,
//           meta: {
//             titie: '个人中心',
//             back: false
//           }
//         }
//       ]
//     },
//     {
//       path: '*',
//       redirect: {
//         name: 'login'
//       }
//     }
//   ]
// })

// 路由守卫
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

  // 设置路由切换动效
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  if (toDepth === fromDepth) {
    store.commit('SET_TRANSNAME', 'slide-fade')
  } else {
    const transName = toDepth > fromDepth ? 'slide-right' : 'slide-left'
    store.commit('SET_TRANSNAME', transName)
  }
})

export default router
