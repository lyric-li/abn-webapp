import httpclient from '@/utils/httpclient'
import user from '@/api/user'
import md5 from 'md5'

const actions = {
  // 用户注册
  register ({commit, state}, userInfo) {
    const username = userInfo.username
    const password = md5(userInfo.password)
    return new Promise((resolve, reject) => {
      httpclient.post(user.register, {
        username,
        password
      }).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 用户登录
  login ({commit, state}, userInfo) {
    commit('SAVE_USER', userInfo)
    const username = userInfo.username
    const password = md5(userInfo.password)
    return new Promise((resolve, reject) => {
      httpclient.post(user.login, {
        username,
        password
      }).then(data => {
        commit('SAVE_USER', data)
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default actions
