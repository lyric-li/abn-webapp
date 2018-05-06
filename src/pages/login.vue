<template>
  <div class="login" @click="jump({name: 'home'})">
    登录
    <div @click="jump({name: 'register'})">注册</div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="stylus" scoped>

</style>
