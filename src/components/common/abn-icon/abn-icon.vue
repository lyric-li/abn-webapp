<template>
  <div class="abn-icon">
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
    <div class="info" v-if="show">{{info}}</div>
  </div>
</template>

<script>
export default {
  name: 'abn-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    info: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return `svg-icon ${this.className}`
      } else {
        return 'svg-icon'
      }
    },
    show () {
      let bool = false
      if (this.info) {
        bool = true
      }
      return bool
    }
  }
}
</script>

<style lang="stylus" scoped>
.abn-icon
  display inline-block
  position relative
  width .16rem
  height .16rem
  .info
    position absolute
    left 50%
    top -.5em
    background-color #f44
    font-family PingFang SC,Helvetica Neue,Arial,sans-serif
    color #fff
    font-size .5em
    margin-left .8em
    padding 0 .3em
    text-align center
    min-width 1.2em
    line-height 1.2em
    border-radius .6em
    -webkit-box-sizing border-box
    box-sizing border-box
.svg-icon
  display inline-block
  position relative
  width 100%
  height 100%
  vertical-align -0.15em
  fill currentColor
  overflow hidden
</style>
