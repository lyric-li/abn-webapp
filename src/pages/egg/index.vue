<template>
  <div class="egg">
    <div class="slogan">
      <h2>成语消消乐</h2>
    </div>
    <div class="balance">
      <van-row>
        <van-col span="12">耗时: {{ balance.time }} S</van-col>
        <van-col span="12">得分: {{ balance.score }} 分</van-col>
      </van-row>
    </div>
    <div class="stage">
      <abn-txts :txts="txts"
                @select="onselect"
      />
      <div class="mask" v-show="mask"></div>
    </div>
    <div class="action">
      <van-button :size="btn.size"
                  :type="btn.type"
                  @click="action"
      >
        {{ btn.label }}
      </van-button>
    </div>
  </div>
</template>

<script>
import AbnTxts from '@/components/common/abn-txts'
import { Toast } from 'vant'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'egg',
  data () {
    return {
      selectIndexs: [],
      selectTxts: [],
      count: 0,
      balance: {
        time: 0,
        score: 100
      },
      mask: true,
      btn: {
        type: 'primary',
        size: 'large',
        label: '开始游戏'
      },
      isStart: false
    }
  },
  watch: {
    selectTxts (val) {
      const len = val.length
      if (len === 4) {
        const arr = [].concat(val)
        const arrStr = arr.sort().toString()
        this.idioms.every(idiom => {
          const idiomStr = idiom.split('').sort().toString()
          console.log('arr:', arrStr)
          console.log('idiom:', idiomStr)
          if (idiomStr === arrStr) {
            console.log('对上了')
            this.selectIndexs.map(index => {
              const temps = [].concat(this.txts)
              temps.splice(index, 1, '')
              this.SET_TXTS(temps)
            })
            this.selectIndexs = []
            this.selectTxts = []
            this.count++
            return false
          }
          return true
        })
        this.selectIndexs = []
        this.selectTxts = []
      }
    },
    count (val) {
      if (val === 4) {
        Toast('挑战成功')
        this.count = 0
        if (this.timer) clearInterval(this.timer)
        this.init()
        this.isStart = false
        this.btn.label = '开始游戏'
        this.mask = true
      }
    }
  },
  computed: {
    ...mapState({
      idioms: state => state.egg.idioms,
      txts: state => state.egg.txts
    })
  },
  components: {
    AbnTxts
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions({
      getTdioms: 'egg/getTdioms',
      getTxts: 'egg/getTxts'
    }),
    ...mapMutations({
      SET_TXTS: 'egg/SET_TXTS'
    }),
    init () {
      this.getTdioms()
      this.getTxts()
    },
    onselect (index, txt) {
      console.log('index:', index)
      console.log('txt:', txt)
      if (this.selectIndexs.includes(index)) {
        return
      }
      this.selectIndexs.push(index)
      this.selectTxts.push(txt)
    },
    action () {
      this.mask = false
      this.count = 0
      Toast.clear()

      // 计算得分
      this.balance.time = 1
      this.balance.score = 99
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.balance.time++
        this.balance.score--
        if (this.balance.score === 60 || this.balance.score < 60) {
          this.balance.score = 60
        }
      }, 1000)

      if (!this.isStart) {
        this.isStart = true
        this.btn.label = '重新开始'
      } else {
        this.init()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.egg
  text-align center
  width 75%
  position absolute
  top 45%
  left 50%
  transform translate(-50%, -50%)
  .slogan
    margin-bottom .50rem
  .balance
    margin-bottom .05rem
    font-weight bold
  .stage
    text-align center
    position relative
    .mask
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background-color rgba(0,0,0,0)
  .action
    margin-top .25rem
    > button
      height .42rem
      line-height .42rem
</style>
