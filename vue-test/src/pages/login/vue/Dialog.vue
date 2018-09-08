<template>
  <div v-show="isShow" class="dialog">
    <span v-bind:class="{'dialog-show': isShow, 'dialog-shake': isShake, 'dialog-normal': isNormal, 'dialog-hidden': !isShow}" v-text="message">hello</span>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data: () => {
    return {
      isShow: false,
      isShake: false,
      isNormal: false,
      message: ''
    }
  },
  methods: {
    getType: function (type) {
      switch (type) {
        case 'shake':
          return 'isShake'
        case 'normal':
          return 'isNormal'
        default:
          return 'isNormal'
      }
    },
    show: function (overtime, message, type) {
      var obj = this
      if (obj.isShow === true) {
        return null
      }
      obj.isShow = true
      obj.message = message
      type = this.getType(type)
      console.log(type)
      obj[type] = true
      setTimeout(function () {
        obj.isShow = false
        obj[type] = false
      }, overtime)
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
      background: rgba(6, 0, 6, 0.76);
    }

    span {
      font-weight: bold;
    }

    .dialog-hidden {
      @include dialog-common;
      padding: 5px;
      font-size: 10px;
      opacity: 0;
    }

    .dialog-show {
      @include dialog-common;
      padding: 18px 30px;
      font-size: 15px;
      opacity: 1;
    }

    .dialog-shake {
      -webkit-animation: shakeDialog 0.3s;
    }

    .dialog-normal {
      -webkit-animation: normalDialog 0.3s;
    }

    @keyframes normalDialog {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes shakeDialog {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
      0%, 100% {
        -webkit-transform: translateX(0);
      }
      12.5%, 62.5% {
        -webkit-transform: translateX(-2px);
      }
      37.5%, 87.5% {
        -webkit-transform: translateX(2px);
      }
    }
  }
</style>
