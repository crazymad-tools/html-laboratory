<template>
  <div class="input-container">
    <input id="register-account" v-model="registerAccount" class="login-input" type="text" placeholder="请输入邮箱"/><br/>
    <input id="register-password" v-model="registerPassword" class="login-input" type="password" placeholder="请输入密码"/><br/>
    <input id="register-password-repeat" v-model="registerPasswordRepeat" class="login-input" type="password" placeholder="请再次输入密码"/><br/>
    <div>
      <input id="login-code" v-model="registerCode" class="login-input" type="text" placeholder="请输入验证码"/>
      <div style="margin: auto auto; width: 70%; background: #2c3e50; height: 60px; color: white">老子是验证码</div>
    </div>
    <input id="register-submit" class="login-submit" type="submit" value="注册"/><br/>
    <router-link to="/" class="jump-tip">已经有账号啦，那就赶紧登录呗~</router-link>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => {
    return {
      registerAccount: '',
      registerPassword: '',
      registerPasswordRepeat: '',
      registerCode: ''
    }
  }
}
</script>

<style lang="scss">
  @import "../css/login.scss";
</style>
