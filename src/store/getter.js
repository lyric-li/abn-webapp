import Cookies from 'js-cookie'

const getter = {
  getUser: state => {
    let user = state.user
    if (!user) {
      const temp = Cookies.get('user')
      if (temp) {
        user = JSON.parse(temp)
      }
    }
    return user
  }
}

export default getter
