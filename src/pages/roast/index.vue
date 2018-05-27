<template>
  <div class="roast">
    <div class="bb"
         :key="index"
         v-for="(item, index) in 16"
    >
      <abn-bb title="哔一下"
              desc="就是爱哔哔呐..."
              :time="'2018-05-04 12:28:43'"
              avatar="static/avatar.jpg"
              nickname="9 s"
              :supportCount="100"
              :unsupportCount="100"
              :discussCount="100"
              :stand="bb.stand"
              @support="support"
              @unsupport="unsupport"
      />
    </div>
    <div class="tip">我也是有底线的...</div>
  </div>
</template>

<script>
import AbnBb from '@/components/common/abn-bb'
export default {
  name: 'roast',
  data () {
    return {
      bb: {
        stand: 'support'
      }
    }
  },
  components: {
    AbnBb
  },
  methods: {
    // 支持
    support () {
      const stand = this.bb.stand
      if (stand === 'support') {
        this.bb.stand = ''
      } else {
        this.bb.stand = 'support'
      }
    },
    // 反对
    unsupport () {
      const stand = this.bb.stand
      if (stand === 'unsupport') {
        this.bb.stand = ''
      } else {
        this.bb.stand = 'unsupport'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.roast
  margin-bottom .08rem
  .bb
    box-shadow 0 0 5px #eee
    margin-bottom .08rem
  .tip
    text-align center
    color #909399
</style>
