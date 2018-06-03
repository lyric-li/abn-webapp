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
    <van-cell-group>
      <van-cell title="Three Library"
                is-link
                @click="jump({name: 'three'})"
      >
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="注销"
                @click="logout"
      >
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
  },
  methods: {
    logout () {
      this.$store.commit('SAVE_USER', '')
      this.jump({name: 'login'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.personal
  padding .08rem 0
  height calc(100% - .16rem)
  .avatar
    margin-left auto
    margin-right auto
    margin-bottom .08rem
  .cell-icon-left
    font-size 16px
    height 24px
    line-height 24px
    margin-right 5px
</style>
