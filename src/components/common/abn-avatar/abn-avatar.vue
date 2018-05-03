<template>
  <div class="abn-avatar">
    <img :class="{'circle': circle}"
         :src="avatar"
         :width="Size"
         :height="Size"
    />
  </div>
</template>

<script>
export default {
  name: 'abn-avatar',
  props: {
    avatar: {
      type: String,
      default: 'static/avatar.jpg'
    },
    size: {
      type: [Number, String],
      default: 64
    },
    circle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    Size () {
      return `${this.size} px`
    }
  }
}
</script>

<style lang="stylus" scoped>
.abn-avatar
  width max-content
  .circle
    border-radius 50%
</style>
