<template>
  <div id="app">
    <!-- 导航栏 -->
    <abn-navbar/>
    <router-view/>
    <!-- 标签栏 -->
    <abn-tabbar/>
  </div>
</template>

<script>
import AbnNavbar from '@/components/layout/abn-navbar'
import AbnTabbar from '@/components/layout/abn-tabbar'
export default {
  name: 'app',
  components: {
    AbnNavbar,
    AbnTabbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
