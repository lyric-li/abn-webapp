<template>
  <div class="abn-point">
    <div class="pic">
      <img :src="imgUrl"/>
      <div class="desc">
        <div class="title">{{ title }}</div>
        <div class="subtitle">
          {{ subtitle }}
        </div>
        <div class="tag">
          <abn-icon class="point-icon"
                    iconClass="discuss"
                    :info="discussCount | formatCount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'abn-point',
  props: {
    imgUrl: {
      type: String,
      default: 'static/point.png'
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    discussCount: {
      type: [Number, String],
      default: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.abn-point
  background-color #fff
  height 2rem
  .pic
    position relative
    > img
      width 100%
      height 100%
    .desc
      position absolute
      left 0
      bottom 4px
      background-color rgba(0,0,0,.3)
      padding .08rem
      width calc(100% - .16rem)
      color #fff
      .title
        font-size .16rem
        font-weight bold
      .tag
        text-align right
        .point-icon
          margin-right 12px
</style>
