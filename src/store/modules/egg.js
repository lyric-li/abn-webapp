import httpclient from '@/utils/httpclient'
import egg from '@/api/egg'
import { randomNum, upsetArr } from '@/utils/common'

const state = {
  totalIdioms: [
    '鸟语花香', '鳞次栉比', '缘木求鱼', '乌鸟私情',
    '昙花一现', '暗香疏影', '榆木疙瘩', '笔下生花',
    '附庸风雅', '春寒料峭', '移风易俗', '山雨欲来',
    '叶公好龙', '肝胆相照', '觥筹交错', '玩世不恭'
  ],
  idioms: [],
  txts: []
}

const actions = {
  // 获取总共成语组
  getTotalTdioms () {
    httpclient.get(egg.httpclient)
  },
  // 获取需要的成语组
  getTdioms ({state, commit}) {
    const idioms = []
    const nums = []
    const len = state.totalIdioms.length
    let i = 0
    while (i < 4) {
      const num = randomNum(0, len - 1)
      if (!nums.includes(num)) {
        nums.push(num)
        idioms.push(state.totalIdioms[num])
        i++
      }
    }
    commit('SET_IDIOMS', idioms)
  },
  // 获取打乱文字
  getTxts ({state, commit}) {
    let txts = state.idioms.join('')
    txts = upsetArr(txts.split(''))
    commit('SET_TXTS', txts)
  }
}

const mutations = {
  // 设置成语组
  SET_IDIOMS (state, idioms) {
    state.idioms = idioms
  },
  // 设置随机文本
  SET_TXTS (state, txts) {
    state.txts = txts
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
