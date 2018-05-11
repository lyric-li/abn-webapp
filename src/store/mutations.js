import * as TYPE from './mutations-type'

const mutations = {
  // 设置路由切换效果
  [TYPE.SET_TRANSNAME] (state, transName) {
    state.transName = transName
  },
  // 设置路由切换效果
  [TYPE.SAVE_USER] (state, user) {
    state.user = user
  }
}

export default mutations
