<template>
  <div id="box" @showtip="tips">
    <span id="title">CM小说</span> <br>
    <span id="description" v-on:onclick="tips">作者朋友的最好伙伴</span>
    <router-view ref="inputContainer"/>
    <Dialog></Dialog>
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
      this.$refs.logintip.isShow = true
      console.log('show tips')
    }
  },
  component: {
    Dialog
  }
}
</script>

<style lang="scss">
  @import "../css/login.scss";
</style>
