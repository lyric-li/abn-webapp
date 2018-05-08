import axios from 'axios'
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
  timeout: 5000
})

export default http
