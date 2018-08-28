<template>
  <div v-show="isShow" class="dialog">
    <span v-bind:class="{'dialog-show': isShow}" v-text="message">hello</span>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data: () => {
    return {
      isShow: false,
      message: '登录成功，正在跳转...',
      classname: 'dialog-hidden'
    }
  }
}
</script>

<style lang="scss">
  .dialog {
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 30%;
    color: white;
    @mixin dialog-common {
      display: inline-block;
      background: rgba(6, 0, 6, 0.62);
    }

    .dialog-hidden {
      @include dialog-common;
      padding: 5px;
      font-size: 10px;
      transition: all 50ms;
      opacity: 0.3;
    }

    .dialog-show {
      @include dialog-common;
      padding: 13px 25px;
      font-size: 15px;
      transition: all 50ms;
      opacity: 1;
    }
  }
</style>
