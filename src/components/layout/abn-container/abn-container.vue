<template>
  <div class="abn-container">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"></router-view>
    </keep-alive>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'abn-container'
}
</script>

<style lang="stylus" scoped>
.abn-container
  height 100vh - (46px + 50px)
</style>
