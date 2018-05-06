<template>
  <div id="abn">
    <!-- 背景 -->
    <abn-background/>
    <router-view></router-view>
  </div>
</template>

<script>
import AbnBackground from '@/components/layout/abn-background'
export default {
  name: 'abn',
  components: {
    AbnBackground
  }
}
</script>
