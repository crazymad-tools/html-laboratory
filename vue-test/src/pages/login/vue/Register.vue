<template>
  <div class="input-container">
    <input id="register-account" v-model="registerAccount" class="login-input" type="text" placeholder="请输入手机号"/><br/>
    <input id="register-email" v-model="registerEmail" class="login-input" type="text" placeholder="请输入邮箱地址"/><br/>
    <input id="register-password" v-model="registerPassword" class="login-input" type="password" placeholder="请输入密码"/><br/>
    <input id="register-password-repeat" v-model="registerPasswordRepeat" class="login-input" type="password" placeholder="请再次输入密码"/><br/>
    <div style="position: relative;">
      <input id="login-code" v-model="registerCode" class="login-input" type="text" placeholder="获取手机验证码"/>
      <span id="code-tip" v-text="codeTip"></span>
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
      registerCode: '',
      registerEmail: '',
      codeTip: '获取手机验证码'
    }
  }
}
</script>

<style lang="scss">
  @import "../css/login.scss";

  #login-code {
    padding-right: 100px;
  }
  #code-tip {
    position: absolute;
    right: 18%;
    font-size: 13px;
    color: #348fc9;
    cursor: pointer;
    top: 8px;
    &:hover {
      color: rgba(59, 147, 232, 0.75);
    }
  }
</style>
