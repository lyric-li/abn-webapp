<template>
  <div class="register">
    <div class="form">
      <abn-avatar class="avatar"/>
      <van-cell-group>
        <van-field
          v-model="user.username"
          label="用户名"
          icon="clear"
          placeholder="请输入用户名"
          required
          @click-icon="username = ''"
        />
        <van-field
          v-model="user.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
        <van-field
          v-model="user.password2"
          type="password"
          label="密码"
          placeholder="请再次输入密码"
          required
        />
      </van-cell-group>
      <van-button class="submit"
                  size="large"
                  type="danger"
                  @click="submit(user)"
      >
        注册
      </van-button>
    </div>
  </div>
</template>

<script>
import AbnAvatar from '@/components/common/abn-avatar'
import { mapActions } from 'vuex'
export default {
  name: 'register',
  data () {
    return {
      user: {
        username: '',
        password: '',
        password2: ''
      }
    }
  },
  components: {
    AbnAvatar
  },
  methods: {
    ...mapActions({
      registerUser: 'registerUser'
    }),
    submit (user) {
      this.registerUser(user)
    }
  }
}
</script>

<style lang="stylus" scoped>
.register
  .form
    position absolute
    top 32%
    transform translate(0, -50%)
    width 100%
  .avatar
    margin .8rem auto
  .submit
    margin .8rem auto
    height 3.2rem
    line-height 3.2rem
    font-size 14px
</style>
