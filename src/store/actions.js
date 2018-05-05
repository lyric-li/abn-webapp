import httpclient from '@/utils/httpclient'
import api from '@/api'

const actions = {
  async helloAbn ({commit, state}, payload) {
    await httpclient.get(api.hello.abn)
  }
}

export default actions
