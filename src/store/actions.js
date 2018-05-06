import httpclient from '@/utils/httpclient'
import api from '@/api'

const actions = {
  async registerUser ({commit, state}, user) {
    await httpclient.post(api.user.register, user)
  },
  async helloAbn ({commit, state}, payload) {
    await httpclient.get(api.hello.abn)
  }
}

export default actions
