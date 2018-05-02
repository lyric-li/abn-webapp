<template>
  <div class="abn-home">
    <van-swipe class="abn-swipe"
               :autoplay="3000"
    >
      <van-swipe-item class="abn-swipe-item"
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
.abn-home
  .abn-swipe
    background-color #fff
    height 20rem
    text-align center
    .abn-swipe-item
      height 20rem
      line-height 20rem
</style>
