<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <!-- 标签栏 -->
    <abn-tabbar/>
  </div>
</template>

<script>
import AbnTabbar from '@/components/layout/abn-tabbar'
export default {
  name: 'app',
  components: {
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
  margin-top: 60px;
}
</style>
