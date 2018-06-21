const sleep = delay => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      resolve()
    }, delay * 1000)
  })
}

export default sleep
