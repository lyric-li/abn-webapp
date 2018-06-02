// 生成指定范围的随机数
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 打乱数组
const upsetArr = arr => {
  return arr.sort(() => {
    return Math.random() - 0.5
  })
}

export {
  randomNum,
  upsetArr
}
