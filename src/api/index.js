/**
 * The file enables `@/api/index.js` to import all api modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('.', false, /\.js$/)
const api = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  api[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default api
