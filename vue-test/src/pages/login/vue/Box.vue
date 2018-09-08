<template>
  <div id="box" @showtip="tips">
    <span id="title">CM小说</span> <br>
    <span id="description" v-on:onclick="tips">作者朋友的最好伙伴</span>
    <router-view ref="inputContainer" v-on:tips="tips"/>
    <Dialog ref="dialogTip"></Dialog>
  </div>
</template>

<script>
import Dialog from './Dialog'
export default {
  name: 'Box',
  components: {Dialog},
  methods: {
    tips: function (message) {
      console.log(message)
      console.log(this.$refs.dialogTip.isShow)
      /*
      var obj = this.$refs.dialogTip
      obj.isShow = true
      obj.message = '密码错误'
      setTimeout(function () {
        obj.isShow = false
      }, 1000)
      */
      this.$refs.dialogTip.show(1000, '登录失败，密码错误...', 'shake')
    }
  },
  component: {
    Dialog
  }
}
</script>

<style lang="scss">
  @import "../css/login.scss";
  #box {
    background: white;
  }
</style>
