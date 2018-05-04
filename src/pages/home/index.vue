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
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styl/variables.styl'
.home
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
</style>
