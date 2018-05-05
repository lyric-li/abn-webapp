<template>
  <div class="personal">
    <abn-avatar class="avatar"/>
    <van-cell-group>
      <van-cell title="码云"
                is-link
      >
        <abn-icon class="cell-icon-left"
                  iconClass="github"
                  slot="icon"
        />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import AbnAvatar from '@/components/common/abn-avatar'
export default {
  name: 'personal',
  components: {
    AbnAvatar
  }
}
</script>

<style lang="stylus" scoped>
.personal
  height calc(100% + 1.6rem)
  .avatar
    margin .8rem auto
  .cell-icon-left
    font-size 16px
    height 24px
    line-height 24px
    margin-right 5px
</style>
