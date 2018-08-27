<template>
  <div id="box">
    <span id="title">CM小说</span> <br>
    <span id="description">作者朋友的最好伙伴</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Box'
}
</script>

<style lang="scss">
  @import "../css/login.scss";
</style>
