<template>
  <div class="abn-tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home"
                       :to="{name: 'home'}"
                       replace
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="password-view"
                       dot
                       :to="{name: 'slotspot'}"
                       replace
      >
        槽点
      </van-tabbar-item>
      <van-tabbar-item icon="chat"
                       info="20"
                       :to="{name: 'roast'}"
                       replace
      >
        吐槽
      </van-tabbar-item>
      <van-tabbar-item icon="contact"
                       :to="{name: 'personal'}"
                       replace
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'abn-tabbar',
  data () {
    return {
      active: 0
    }
  },
  created () {
    const active = sessionStorage.getItem('active')
    if (active) {
      this.active = parseInt(active)
    }
  }
}
</script>
