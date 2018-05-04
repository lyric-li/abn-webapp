import http from './http'

const httpclient = {
  async post (url, params) {
    console.log('┏---------------------------------------------┓')
    console.log('请求地址:', url)
    console.log('请求参数:', params)
    try {
      const res = await http.post(url, params)
      const data = res.data
      console.log('响应结果:', data)
      return data
    } catch (err) {
      console.error('请求异常:', err)
    }
    console.log('┗---------------------------------------------┛')
  }
}

export default httpclient
