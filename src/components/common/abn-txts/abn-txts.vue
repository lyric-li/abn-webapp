<template>
  <div class="abn-txts">
    <van-row>
      <van-col span="6"
              :key="index"
              v-for="(txt, index) in txts"
              @click.native="onclick(index, txt)"
      >
        <div class="abn-txt"
             :class="{'select': selects.includes(index)}"
        >
          {{ txt }}
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'abn-txt',
  props: {
    txts: {
      type: Array
    }
  },
  data () {
    return {
      selects: []
    }
  },
  methods: {
    onclick (index, txt) {
      this.$emit('select', index, txt)
      if (this.selects.includes(index)) {
        return
      }
      this.selects.push(index)
      if (this.selects.length === 4) {
        this.selects = []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.abn-txts
  background-color #fff
  .abn-txt
    width .48rem
    height .48rem
    line-height .48rem
    margin 0 auto
    font-size .23rem
    font-weight bold
    transition color .25s ease
  .select
    color #2196f3
</style>
