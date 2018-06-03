<template>
  <div class="three"
       ref="three"
  >
    <div class="title">基础篇</div>
    <van-cell-group>
      <van-cell title="第一个三维场景"
                is-link
                @click="jump({name: 'three-start'})"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'three'
}
</script>

<style lang="stylus" scoped>
.three
  height calc(100% - .16rem)
  .title
    margin .08rem
    font-size .16rem
    color #909399
</style>
