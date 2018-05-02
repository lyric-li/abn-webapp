<template>
  <div class="home">
    <van-swipe class="swipe" :autoplay="3000">
      <van-swipe-item class="swipe-item">1</van-swipe-item>
      <van-swipe-item class="swipe-item">2</van-swipe-item>
      <van-swipe-item class="swipe-item">3</van-swipe-item>
      <van-swipe-item class="swipe-item">4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="stylus" scoped>
.home
  .swipe
    height 200px
    background-color #eee
    .swipe-item {
      height 200px
      line-height 200px
}
</style>
