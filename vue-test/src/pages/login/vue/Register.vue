<template>
  <div class="input-container">
    <input id="register-account" v-model="registerAccount" class="login-input" type="text" placeholder="请输入手机号"/><br/>
    <div id="phoneImageCode" v-show="needPhoneImageCode">
      <div style="margin: auto auto; background: #f4f4f4;">
        <span>请点击图片中的倒立文字&emsp;<img class="cur-pointer" @click="refreshImageCode"  src="@/images/refresh.png" width="13px" height="13px"/></span>
        <div id="imageCodeContainer">
          <img @click="getMousePosition" v-bind:src="imageCodePath" width="200px" height="50px"/>
          <!--<canvas @click="getMousePosition" id="codeClickCanvas" width="200px" height="50px"></canvas>-->
        </div>
      </div>
    </div>
    <div style="position: relative;">
      <div style="clear: both;"></div>
      <input id="register-code" v-model="registerPhoneCode" class="login-input" type="text" placeholder="获取手机验证码"/>
      <span v-bind:class="{'tip-gray': tipGray, 'tip-normal': !tipGray}" id="code-tip" v-text="codeTip" @click="sendMessage()"></span>
    </div>
    <input id="register-password" v-model="registerPassword" class="login-input" type="password" placeholder="请输入密码"/><br/>
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
      imageCodePath: '',
      registerAccount: '',
      registerPassword: '',
      registerPhoneCode: '',
      registerImageCode: [],
      codeTip: '获取手机验证码',
      canSendCode: true,
      tipGray: false,
      needPhoneImageCode: false
    }
  },
  created: () => {
    document.title = 'CM小说-注册'
  },
  methods: {
    // 获取鼠标位置
    getMousePosition: function (event) {
      console.log(this.$el.offsetParent)
      console.log('left:' + this.$el.offsetLeft + ' top:' + this.$el.offsetTop)
      console.log('clientX:' + event.clientX + ' clientY:' + event.clientY)
    },
    // 刷新图片验证码
    refreshImageCode: function () {
      this.imageCodePath = apiUrlContainer.registerPphoneImageCode + '?d=' + Math.random()
    },
    // 检查表单内容是否合格
    formCheck: function () {
      if (this.registerAccount === '') {
        this.$emit('tips', '请输入手机号', 'shake')
        return false
      } else if (this.registerPassword === '') {
        this.$emit('tips', '请输入密码', 'shake')
        return false
      } else if (this.registerPhoneCode === '') {
        this.$emit('tips', '请输入短信验证码', 'shake')
        return false
      }
      return true
    },
    // 提交注册信息
    submitRegister: function () {
      if (this.formCheck() === false) {
        return null
      }
      console.log('submit register')
      var obj = this
      var data = {
        account: this.registerAccount,
        password: this.registerPassword,
        code: this.registerPhoneCode
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
    // 发送短信验证码
    sendMessage: function () {
      // 判断是否可以发送短信
      if (this.canSendCode === false) {
        return null
      } else if (this.registerAccount === '') {
        this.$emit('tips', '请输入手机号', 'shake')
        return null
      } else if (this.registerAccount.match(/^[1][3-9][0-9]{9}$/g) === null) {
        this.$emit('tips', '请输入正确的手机号', 'shake')
        return null
      } else if (this.registerImageCode === []) {
        this.$emit('tips', '请输入图片验证码', 'shake')
        return null
      }
      // 向后端服务器发送请求
      var obj = this
      cmAjax.post(apiUrlContainer.registerPhoneCode, {phone: this.registerAccount}, function (res) {
        if (res.state === 1) {
          console.log('message send success')
          obj.countdown()
          obj.$emit('tips', '短信验证码发送成功，请注意查收', 'normal', 2000)
        } else if (res.state === 4) {
          obj.$emit('tips', '手机号已存在，请直接登录', 'shake')
        } else if (res.state === 2) {
          obj.$emit('tips', '请点击图片中的倒立文字', 'shake')
          obj.refreshImageCode()
          obj.needPhoneImageCode = true
        } else {
          console.log('message send failure')
          obj.$emit('tips', '短信验证码发送失败，请稍后重试...', 'shake')
        }
      })
    },
    // 重新发送验证码倒计时
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

  #phoneImageCode {
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 1% 15%;
    span {
      color: gray;
      font-size: 13px;
    }
    #imageCodeContainer {
      text-align: center;
      margin-top: 10px;
      img {
        margin: auto auto;
        display: block;
      }
      #codeClickCanvas {
        margin: auto auto;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0;
        opacity: 0;
      }
    }
  }
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
