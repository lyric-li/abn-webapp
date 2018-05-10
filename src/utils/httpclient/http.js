import axios from 'axios'
import { Toast } from 'vant'
// import Qs from 'qs'
// import encrypt from './encrypt'

let host, port
if (process.env.NODE_ENV === 'development') {
  host = '127.0.0.1'
  port = '14250'
} else {
  host = '127.0.0.1'
  port = '14250'
}
const baseURL = `http://${host}:${port}`

const http = axios.create({
  baseURL: baseURL,
  transformRequest: [
    data => {
      // data = encrypt(data)
      // data = Qs.stringify(data)
      data = JSON.stringify(data)
      return data
    }
  ],
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded'
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 25000
})

http.interceptors.request.use(config => {
  Toast.loading({
    mask: true,
    message: '请稍后...'
  })
  return config
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(res => {
  // 响应数据
  const data = res.data

  // 响应描述信息
  const msg = data.message

  Toast(msg)
  return res
}, err => {
  Toast('服务器异常, 请稍后重试！')
  return Promise.reject(err)
})

export default http
