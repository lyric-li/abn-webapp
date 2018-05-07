<template>
  <div class="abn-bb">
    <van-card :title="title"
              :desc="desc"
              :price="time | formatDateDiff"
              currency=""
    >
      <div class="bb-user"
           slot="thumb"
      >
        <abn-avatar class="bb-avatar"
                    :avatar="avatar"
                    :size="avatarSize"
        />
        <div class="nickname">{{nickname}}</div>
      </div>
      <div slot="footer">
        <abn-icon class="bb-icon"
                  iconClass="support"
                  :info="supportCount | formatCount"
                  :className="stand === 'support' ? 'bb-svg' : ''"
                  @click.native="onSupport"
        />
        <abn-icon class="bb-icon"
                  iconClass="unsupport"
                  :info="unsupportCount | formatCount"
                  :className="stand === 'unsupport' ? 'bb-svg' : ''"
                  @click.native="onUnsupport"
        />
        <abn-icon class="bb-icon"
                  iconClass="discuss"
                  :info="discussCount | formatCount"
                  @click.native="onBB"
        />
      </div>
    </van-card>
  </div>
</template>

<script>
import AbnAvatar from '@/components/common/abn-avatar'
export default {
  name: 'abn-bb',
  props: {
    title: {
      type: String,
      default: '哔一下'
    },
    desc: {
      type: String,
      default: '我就是爱瞎 BB...'
    },
    time: {
      type: String,
      default: '1 秒钟前'
    },
    avatar: {
      type: String,
      default: 'static/avatar.jpg'
    },
    avatarSize: {
      type: Number,
      default: 48
    },
    nickname: {
      type: String
    },
    supportCount: {
      type: Number,
      default: 0
    },
    unsupportCount: {
      type: Number,
      default: 0
    },
    discussCount: {
      type: Number,
      default: 0
    },
    stand: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      support: false,
      unsupport: false
    }
  },
  components: {
    AbnAvatar
  },
  methods: {
    // 支持
    onSupport () {
      this.$emit('support')
    },
    // 反对
    onUnsupport () {
      this.$emit('unsupport')
    },
    // 哔哔
    onBB () {
      this.$emit('bb')
    }
  }
}
</script>

<style lang="stylus">
.bb-svg
  color #f44
.bb-user
  text-align center
  .bb-avatar
    margin 0 auto
</style>

<style lang="stylus" scoped>
.bb-icon
  margin-right .26rem
  &:active
    background-color #eee
</style>
