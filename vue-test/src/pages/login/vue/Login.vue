<template>
  <div class="input-container">
    <input id="login-account" v-model="loginAccount" class="login-input" type="text" placeholder="请输入邮箱"/><br/>
    <input id="login-password" v-model="loginPassword" class="login-input" type="password" placeholder="请输入密码"/><br/>
    <div>
      <input id="login-code" v-model="loginCode" class="login-input" type="text" placeholder="请输入验证码"/><br/>
      <div style="margin: auto auto; width: 70%; background: #2c3e50; height: 60px; color: white">老子是验证码</div>
    </div>
    <!--<input id="register-submit" onclick="javascript: alert('test')" class="login-submit" type="submit" value="登录"/><br/>-->
    <input id="register-submit" v-on:click="submitLogin(loginAccount, loginPassword, loginCode)" class="login-submit" type="submit" value="登录"/><br/>
    <router-link to="/register" class="jump-tip" >没有账号，那就注册一个呗~</router-link>
  </div>
</template>

<script>
import {cmAjax} from '../js/ajax'
export default {
  name: 'Login',
  data: function () {
    return {
      loginAccount: '',
      loginPassword: '',
      loginCode: ''
    }
  },
  methods: {
    submitLogin: function (username, password, code) {
      // ajax(username, password)
      console.log('卧槽，到底输不输出')
      this.$emit('showtip', '登录成功，正在跳转中。。。')
      // var parent = this.$emit
      /*
      cmAjax.commit({
        url: '/login/success',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          username: username,
          password: password,
          code: code
        }),
        success: function (res) {
          console.log(res)
          if (res.state === 1) {
            parent('showtip', '登录成功')
          } else if (res.state === 2) {
            parent('showtip', '用户不存在')
          } else if (res.state === 3) {
            parent('showtip', '密码错误')
          } else if (res.state === 4) {
            parent('showtip', '验证码错误')
          }
        }
      })
      */
    }
  }
}
</script>

<style lang="scss">
  @import "../css/login.scss";
</style>
