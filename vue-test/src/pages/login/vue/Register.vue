<template>
  <div class="input-container">
    <input id="register-account" v-model="registerAccount" class="login-input" type="text" placeholder="请输入手机号"/><br/>
    <input id="register-password" v-model="registerPassword" class="login-input" type="password" placeholder="请输入密码"/><br/>
    <div style="position: relative;">
      <input id="register-code" v-model="registerCode" class="login-input" type="text" placeholder="获取手机验证码"/>
      <span v-bind:class="{'tip-gray': tipGray, 'tip-normal': !tipGray}" id="code-tip" v-text="codeTip" @click="sendMessage()"></span>
    </div>
    <input id="register-submit" class="login-submit" @click="submitRegister" type="submit" value="注册"/><br/>
    <router-link to="/" class="jump-tip">已经有账号啦，那就赶紧登录呗~</router-link>
  </div>
</template>

<script>
import {cmAjax} from '@/js/ajax.js'
import {apiUrlContainer} from '@/js/apiUrlContainer.js'

export default {
  name: 'Register',
  data: () => {
    return {
      registerAccount: '',
      registerPassword: '',
      registerCode: '',
      codeTip: '获取手机验证码',
      canSendCode: true,
      tipGray: false
    }
  },
  methods: {
    submitRegister: function () {
      console.log('submit register')
      if (this.registerAccount === '') {
        this.$emit('tips', '请输入手机号', 'shake')
      } else if (this.registerPassword === '') {
        this.$emit('tips', '请输入密码', 'shake')
      } else if (this.registerCode === '') {
        this.$emit('tips', '请输入短信验证码', 'shake')
      }
      var obj = this
      var data = {
        account: this.registerAccount,
        password: this.registerPassword,
        code: this.registerCode
      }
      cmAjax.postJson(apiUrlContainer.register, data, function (res) {
        if (res.state === 1) {
          obj.$emit('tips', '注册成功，正在跳转...')
        } else if (res.state === 0) {
          obj.$emit('tips', '注册失败，请稍后重试...', 'shake')
        } else {
          console.log('非法操作，注册失败')
        }
      })
    },
    sendMessage: function () {
      if (this.canSendCode === false) {
        return null
      }
      var obj = this
      cmAjax.post(apiUrlContainer.registerPhoneCode, {phone: this.registerAccount}, function (res) {
        if (res.state === 1) {
          console.log('message send success')
          obj.countdown()
        } else if (res.state === 2) {
          console.log('')
        }
      })
    },
    countdown: function () {
      var obj = this
      var second = 60
      obj.tipGray = true
      obj.codeTip = second + '秒后重新发送'
      obj.canSendCode = false
      var timer = setInterval(function () {
        second -= 1
        obj.codeTip = second + '秒后重新发送'
        if (second === 0) {
          clearInterval(timer)
          obj.codeTip = '获取手机验证码'
          obj.canSendCode = true
          obj.tipGray = false
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  @import "../css/login.scss";

  .tip-gray {
    color: gray;
  }
  .tip-normal {
    color: #348fc9;
    &:hover {
      color: rgba(59, 147, 232, 0.75);
    }
  }
  #register-code {
    padding-right: 130px !important;
  }
  #code-tip {
    position: absolute;
    right: 18%;
    font-size: 13px;
    cursor: pointer;
    top: 8px;
  }
</style>
