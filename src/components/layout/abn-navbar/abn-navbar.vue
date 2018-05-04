<template>
  <div class="abn-navbar">
    <van-nav-bar
      :title="$store.state.navbar.title"
      :left-text="$store.state.navbar.leftText"
      :left-arrow="$store.state.navbar.leftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <abn-icon iconClass="github"
                slot="right"
      />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'abn-navbar',
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      const url = 'https://gitee.com/lyric-li/abn-webapp'
      window.open(url, '_blank')
    }
  }
}
</script>
