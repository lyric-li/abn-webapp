<template>
  <div class="abn-container">
    <keep-alive>
      <transition :name="$store.state.transName">
        <router-view v-if="$route.meta.keepalive"></router-view>
      </transition>
    </keep-alive>
    <transition :name="$store.state.transName">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'abn-container'
}
</script>

<style lang="stylus" scoped>
.abn-container
  height calc(100vh - (46px + 50px))
  overflow-x hidden
  overflow-y auto
</style>
