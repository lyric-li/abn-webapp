<template>
  <div class="login">
    <div class="form">
      <abn-avatar class="avatar"
                  avatar="static/logo.png"
                  @click.native="jump({name: 'egg'})"
      />
      <van-cell-group>
        <van-field
          v-model="user.username"
          type="text"
          label="用户名"
          icon="contact"
          placeholder="请输入用户名..."
          required
          :error="username.error"
          @focus="focus0"
        />
        <van-field
          v-model="user.password"
          label="密码"
          :type="password.type"
          :icon="password.icon"
          placeholder="请输入密码..."
          required
          :error="password.error"
          @click-icon="showOrNotPassword"
          @focus="focus1"
        />
      </van-cell-group>
      <van-button class="submit"
                  size="large"
                  type="danger"
                  @click="submit(user)"
      >
        登录
      </van-button>
      <div class="tip"
      >
        <span @click="jump({name: 'register'})">没有账号? 立即创建</span>
      </div>
    </div>
  </div>
</template>

<script>
import AbnAvatar from '@/components/common/abn-avatar'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      username: {
        error: false
      },
      password: {
        show: false,
        type: 'password',
        icon: 'password-not-view',
        error: false
      }
    }
  },
  components: {
    AbnAvatar
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    // 用户名输入框获取焦点方法
    focus0 () {
      if (this.username.error) {
        this.username.error = false
      }
    },
    // 密码输入框获取焦点方法
    focus1 () {
      if (this.password.error) {
        this.password.error = false
      }
    },
    // 是否显示密码
    showOrNotPassword () {
      const show = this.password.show = !this.password.show
      if (show) {
        this.password.type = 'text'
        this.password.icon = 'password-view'
      } else {
        this.password.type = 'password'
        this.password.icon = 'password-not-view'
      }
    },
    // 校验表单
    validate (user) {
      let bool = true
      if (!user.username) {
        this.username.error = true
        bool = false
      }
      if (!user.password) {
        this.password.error = true
        bool = false
      }
      return bool
    },
    // 提交登录
    submit (user) {
      if (!this.validate(user)) return
      this.login(user).then(data => {
        this.jump({name: 'home'})
      })
    }
  }
}
</script>

<style lang="stylus">
.login
  .van-field__icon
    display inline !important
</style>

<style lang="stylus" scoped>
.login
  .form
    position absolute
    top 32%
    transform translate(0, -50%)
    width 100%
  .avatar
    margin .08rem auto
  .submit
    margin .08rem auto
    height .32rem
    line-height .32rem
    font-size 14px
  .tip
    padding .08rem
    text-align right
    text-decoration underline
</style>
