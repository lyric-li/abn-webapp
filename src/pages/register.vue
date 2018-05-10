<template>
  <div class="register">
    <div class="form">
      <abn-avatar class="avatar"
                  avatar="static/logo.png"
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
        <van-field
          v-model="user.password2"
          label="确认密码"
          :type="password2.type"
          :icon="password2.icon"
          placeholder="请再次输入密码..."
          required
          :error="password2.error"
          @click-icon="showOrNotPassword2"
          @focus="focus2"
        />
      </van-cell-group>
      <van-button class="submit"
                  size="large"
                  type="danger"
                  @click="submit(user)"
      >
        注册
      </van-button>
      <div class="tip"
      >
        <span @click="jump({name: 'login'})">已有账号? 去登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import AbnAvatar from '@/components/common/abn-avatar'
import { mapActions } from 'vuex'
export default {
  name: 'register',
  meta: {
    titie: '注册'
  },
  data () {
    return {
      user: {
        username: '',
        password: '',
        password2: ''
      },
      username: {
        error: false
      },
      password: {
        show: false,
        type: 'password',
        icon: 'password-not-view',
        error: false
      },
      password2: {
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
      register: 'register'
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
    // 密码再次输入框获取焦点方法
    focus2 () {
      if (this.password2.error) {
        this.password2.error = false
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
    // 是否显示密码
    showOrNotPassword2 () {
      const show = this.password2.show = !this.password2.show
      if (show) {
        this.password2.type = 'text'
        this.password2.icon = 'password-view'
      } else {
        this.password2.type = 'password'
        this.password2.icon = 'password-not-view'
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
      if (!user.password2) {
        this.password2.error = true
        bool = false
      }
      if (user.password !== user.password2) {
        this.password2.error = true
        bool = false
      }
      return bool
    },
    // 提交注册
    submit (user) {
      if (!this.validate(user)) return
      this.register(user).then(data => {
        console.log('注册成功:', data)
        this.jump({name: 'login'})
      }).catch(err => {
        console.log('注册失败:', err)
      })
    }
  }
}
</script>

<style lang="stylus">
.register
  .van-field__icon
    display inline !important
</style>

<style lang="stylus" scoped>
.register
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
