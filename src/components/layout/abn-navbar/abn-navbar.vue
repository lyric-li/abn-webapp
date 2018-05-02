<template>
  <div class="abn-navbar">
    <van-nav-bar
      :title="$store.state.title"
      left-text="返回"
      left-arrow
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
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft () {
      console.log('返回')
    },
    onClickRight () {
      window.location.href = 'https://gitee.com/lyric-li/abn-webapp'
    }
  }
}
</script>
