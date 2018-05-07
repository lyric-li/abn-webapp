<template>
  <div class="home">
    <van-swipe class="swipe"
               :autoplay="3000"
    >
      <van-swipe-item class="swipe-item"
                      :key="index"
                      v-for="(swipe, index) in swipes"
      >
        <img v-lazy="swipe"/>
      </van-swipe-item>
    </van-swipe>
    <div class="demo1">你好啊</div>
    <div class="demo2">你好啊</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      swipes: [
        'static/swipe/1.jpg',
        'static/swipe/1.jpg',
        'static/swipe/1.jpg',
        'static/swipe/1.jpg',
        'static/swipe/1.jpg'
      ]
    }
  },
  created () {
    this.$store.dispatch('helloAbn')
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styl/variables.styl'
.home
  height 100%
  .swipe
    background-color #fff
    height 20rem
    text-align center
    .swipe-item
      height 20rem
      line-height 20rem
      > img
        width 100%
        height 20rem
  .demo1
    font-size 16px
  .demo2
    font-size 1.6rem
</style>
