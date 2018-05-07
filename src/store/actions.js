import httpclient from '@/utils/httpclient'
import user from '@/api/user'

const actions = {
  // 用户注册
  async registerUser ({commit, state}, userInfo) {
    await httpclient.post(user.register, userInfo)
  }
}

export default actions
