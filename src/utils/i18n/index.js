import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './lang/zh-CN.config'
import enUS from './lang/en-US.config'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n
