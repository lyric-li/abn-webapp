<template>
  <div class="abn-toast"
      :class="animate"
      v-if="show"
  >
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'abn-toast',
  data () {
    return {
      text: '',
      show: false,
      animate: 'vivify fadeIn'
    }
  },
  watch: {
    async show (val) {
      if (val) {
        await this.$sleep(2)
        this.animate = 'vivify fadeOut'
        await this.$sleep(4)
        this.show = false
        this.animate = 'vivify fadeIn'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.abn-toast {
  position: fixed;
  left: 50%;
  bottom: 25px;
  transform: translate(-50%, 0);
  width: 75%;
  background-color: rgba(0, 0, 0, .75);
  color: #FFF;
  padding: 8px;
  border-radius: 5px;
  text-align: center;
}
</style>
