import Vue from 'vue'
import AbnToast from './abn-toast'

const AbnToastConstructor = Vue.extend(AbnToast)

const Toast = options => {
  options = options || {}
  const toast = new AbnToastConstructor({
    data: options
  })
  toast.vm = toast.$mount()
  document.body.appendChild(toast.vm.$el)
  toast.vm.show = true
}

Vue.prototype.$toast = Toast
