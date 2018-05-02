<template>
  <div id="app">
    <!-- 背景 -->
    <abn-background/>
    <!-- 导航栏 -->
    <abn-navbar/>
    <router-view/>
    <!-- 标签栏 -->
    <abn-tabbar/>
  </div>
</template>

<script>
import AbnBackground from '@/components/layout/abn-background'
import AbnNavbar from '@/components/layout/abn-navbar'
import AbnTabbar from '@/components/layout/abn-tabbar'
export default {
  name: 'app',
  components: {
    AbnBackground,
    AbnNavbar,
    AbnTabbar
  }
}
</script>

<style lang="stylus">
@import '~@/assets/styl/app.styl'
@import '~@/assets/vivify/vivify.min.css'
</style>
