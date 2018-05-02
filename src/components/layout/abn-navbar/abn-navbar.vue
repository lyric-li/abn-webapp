<template>
  <div class="abn-navbar">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
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
      console.log('按钮')
    }
  }
}
</script>
