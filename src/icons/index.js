import Vue from 'vue'
import AbnIcon from '@/components/common/abn-icon'

Vue.component('abn-icon', AbnIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
