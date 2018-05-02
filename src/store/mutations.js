import * as TYPE from './mutations-type'

const mutations = {
  // 设置标题
  [TYPE.SET_TITLE] (state, title) {
    state.title = title
  }
}

export default mutations
