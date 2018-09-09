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
    tips: function (message, type = 'normal', overtime = 1000) {
      console.log(message)
      console.log(this.$refs.dialogTip.isShow)
      this.$refs.dialogTip.show(overtime, message, type)
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
