<template>
  <div class="input-container">
    <input id="login-account" v-model="loginAccount" class="login-input" type="text" placeholder="请输入邮箱"/><br/>
    <input id="login-password" v-model="loginPassword" class="login-input" type="password" placeholder="请输入密码"/><br/>
    <div>
      <input id="login-code" v-model="loginCode" class="login-input" type="text" placeholder="请输入验证码"/><br/>
      <div style="margin: auto auto; width: 70%; background: #2c3e50; height: 60px;"></div>
    </div>
    <input v-bind:onclick="ajax.submitLogin(loginAccount, loginPassword)" id="register-submit" class="login-submit" type="submit" value="登录"/><br/>
    <router-link to="/register" class="jump-tip" >没有账号，那就注册一个呗~</router-link>
  </div>
</template>

<script>
import {ajax} from '../js/ajax.js'
ajax.submitLogin(null, null)
export default {
  name: 'Login',
  data: () => {
    return {
      loginAccount: '',
      loginPassword: '',
      loginCode: ''
    }
  }
}
</script>

<style lang="scss">
  @import "../css/login.scss";
</style>
