<template>
  <div class="input-container">
    <input id="login-account" v-model="loginAccount" class="login-input" type="text" placeholder="请输入手机号"/><br/>
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
import {cmAjax} from '@/js/ajax.js'
import {apiUrlContainer} from '@/js/apiUrlContainer.js'
export default {
  name: 'Login',
  data: function () {
    return {
      loginAccount: '',
      loginPassword: '',
      loginCode: ''
    }
  },
  created: () => {
    document.title = 'CM小说-登录'
  },
  methods: {
    formCheck: function () {
      if (this.loginAccount === '') {
        this.$emit('tips', '请输入手机号', 'shake')
        return false
      } else if (this.loginAccount.match(/^[1][3-9][0-9]{9}$/g) === null) {
        this.$emit('tips', '请输入正确的手机号', 'shake')
        return false
      } else if (this.loginPassword === '') {
        this.$emit('tips', '请输入密码', 'shake')
        return false
      } else if (this.loginCode === '') {
        this.$emit('tips', '请输入验证码', 'shake')
        return false
      }
      return true
    },
    submitLogin: function () {
      if (this.formCheck() === false) {
        return null
      }
      var parent = this
      var data = {
        username: this.loginAccount,
        password: this.loginPassword,
        code: this.loginCode
      }
      cmAjax.postJson(apiUrlContainer.login, data, function (res) {
        console.log(res)
        if (res.state === 1) {
          parent.$emit('tips', '登录成功，跳转中...', 3000)
        } else if (res.state === 0) {
          parent.$emit('tips', '账号或密码错误', 'shake')
        } else if (res.state === 2) {
          parent.$emit('tips', '用户不存在', 'shake')
        } else if (res.state === 3) {
          parent.$emit('tips', '密码错误', 'shake')
        } else if (res.state === 4) {
          parent.$emit('tips', '验证码错误', 'shake')
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import "../css/login.scss";
</style>
