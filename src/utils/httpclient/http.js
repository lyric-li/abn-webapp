import axios from 'axios'
import Qs from 'qs'
// import encrypt from './encrypt'

let host, port
if (process.env.NODE_ENV === 'development') {
  host = '139.219.185.33'
  port = '9527'
} else {
  host = '139.219.185.33'
  port = '9527'
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
  timeout: 30000
})

export default http
