const state = {
  title: 'All is to be nice',
  leftText: '返回',
  leftArrow: true
}

const actions = {

}

const mutations = {
  // 设置标题
  SET_TITLE (state, title) {
    state.title = title
  },
  // 设置左侧文案
  SET_LEFTTEXT (state, leftText) {
    state.leftText = leftText
  },
  // 设置是否显示左箭头
  SET_LEFTARROW (state, bool) {
    state.leftArrow = bool
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
