<template>
  <div class="content">
    <!-- 导航栏 -->
    <abn-navbar/>
    <!-- 内容 -->
    <abn-container ref="container"/>
    <!-- 标签栏 -->
    <abn-tabbar id="tabbar" ref="tabbar"/>
  </div>
</template>

<script>
import AbnNavbar from '@/components/layout/abn-navbar'
import AbnTabbar from '@/components/layout/abn-tabbar'
import AbnContainer from '@/components/layout/abn-container'
import BScroll from 'better-scroll'
// import Velocity from 'velocity-animate'
import TWEEN from 'tween.js'

let posY = 0

export default {
  name: 'layout',
  components: {
    AbnNavbar,
    AbnTabbar,
    AbnContainer
  },
  mounted () {
    // this.init()
  },
  methods: {
    init () {
      let scroll = new BScroll('.abn-container', {
        probeType: 3
      })
      scroll.on('scroll', pos => {
        // console.log('posY:', pos.y)
        const y = pos.y
        const diff = y - posY
        if (diff < 0 && Math.abs(diff) > 5) {
          console.log('向下滑动')
          new TWEEN.Tween(document.getElementById('tabbar')).to({alpha: 0}, 1000).start()
          // Velocity(document.getElementById('tabbar'), { opacity: 0 }, { duration: 500 })
        }
        if (diff > 0 && Math.abs(diff) > 5) {
          console.log('向上滑动')
          // Velocity(document.getElementById('tabbar'), { opacity: 1 }, { duration: 500 })
        }
        posY = y
      })
    }
  }
}
</script>
