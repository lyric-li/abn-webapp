<template>
  <div class="slotspot">
    <abn-point imgUrl="static/point.png"
               title="标题"
               subtitle="副标题"
               discussCount="9"
    />
  </div>
</template>

<script>
import AbnPoint from '@/components/common/abn-point'
export default {
  name: 'slotspot',
  meta: {
    titie: '槽点',
    back: false
  },
  components: {
    AbnPoint
  }
}
</script>

<style lang="stylus" scoped>
.slotspot
  height 100%
</style>
