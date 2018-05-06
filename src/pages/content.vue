<template>
  <div class="content">
    <!-- 导航栏 -->
    <abn-navbar/>
    <!-- 内容 -->
    <abn-container/>
    <!-- 标签栏 -->
    <abn-tabbar/>
  </div>
</template>

<script>
import AbnNavbar from '@/components/layout/abn-navbar'
import AbnTabbar from '@/components/layout/abn-tabbar'
import AbnContainer from '@/components/layout/abn-container'
export default {
  name: 'abn',
  components: {
    AbnNavbar,
    AbnTabbar,
    AbnContainer
  }
}
</script>
