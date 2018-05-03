<template>
  <div class="home">
    <van-swipe class="swipe"
               :autoplay="3000"
    >
      <van-swipe-item class="swipe-item"
                      :key="index"
                      v-for="(item, index) in 5"
      >
        {{ item }}
      </van-swipe-item>
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
    background-color #fff
    height 20rem
    text-align center
    .swipe-item
      height 20rem
      line-height 20rem
</style>
