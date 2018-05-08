import httpclient from '@/utils/httpclient'
import user from '@/api/user'

const actions = {
  // 用户注册
  register ({commit, state}, userInfo) {
    return new Promise((resolve, reject) => {
      httpclient.post(user.register, userInfo).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 用户登录
  login ({commit, state}, userInfo) {
    return new Promise((resolve, reject) => {
      httpclient.post(user.login, userInfo).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default actions
