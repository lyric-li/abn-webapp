import * as TYPE from './mutations-type'

const mutations = {
  // 设置路由切换效果
  [TYPE.SET_TRANSNAME] (state, transName) {
    state.transName = transName
  }
}

export default mutations
