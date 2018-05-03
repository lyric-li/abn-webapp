<template>
  <div class="abn-tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home"
                       :to="{name: 'home'}"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="like-o" dot>发现</van-tabbar-item>
      <van-tabbar-item icon="chat"
                       info="20"
                       :to="{name: 'barrage'}"
      >
        动弹
      </van-tabbar-item>
      <van-tabbar-item icon="contact" info="5">我的</van-tabbar-item>
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
  }
}
</script>
