import http from './http'

// http 请求客户端
const httpclient = {
  // GET 请求
  get (url, params) {
    return new Promise((resolve, reject) => {
      http.get(url, { params }).then(res => {
        console.log('┏---------------------------------------------┓')
        console.log(' 请求地址:', url)
        console.log(' 请求参数:', params)
        const data = res.data
        console.log(' 响应结果:', data)
        console.log('┗---------------------------------------------┛')
        resolve(data.result)
      }).catch(err => {
        console.log('┏---------------------------------------------┓')
        console.log(' 请求地址:', url)
        console.log(' 请求参数:', params)
        console.error(' 请求异常:', err)
        console.log('┗---------------------------------------------┛')
        reject(err)
      })
    })
  },
  // POST 请求
  post (url, params) {
    return new Promise((resolve, reject) => {
      http.post(url, params).then(res => {
        console.log('┏---------------------------------------------┓')
        console.log(' 请求地址:', url)
        console.log(' 请求参数:', params)
        const data = res.data
        console.log(' 响应结果:', data)
        console.log('┗---------------------------------------------┛')
        resolve(data.result)
      }).catch(err => {
        console.log('┏---------------------------------------------┓')
        console.log(' 请求地址:', url)
        console.log(' 请求参数:', params)
        console.error(' 请求异常:', err)
        console.log('┗---------------------------------------------┛')
        reject(err)
      })
    })
  }
}

export default httpclient
