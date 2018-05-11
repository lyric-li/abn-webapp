import axios from 'axios'
import Qs from 'qs'
import { Toast } from 'vant'
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
      data = Qs.stringify(data)
      return data
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
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
  if (data.code === 0) {
    Toast(data.reason)
    return Promise.reject(data)
  } else if (data.code === -1) {
    Toast('服务器异常, 请稍后重试！')
    return Promise.reject(data)
  }
  return res
}, err => {
  Toast('服务器异常, 请稍后重试！')
  return Promise.reject(err)
})

export default http
