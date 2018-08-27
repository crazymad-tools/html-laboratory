// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Box from './vue/Box'
import router from './router/main'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#box',
  router,
  components: { Box },
  template: '<Box/>'
})

window.onload = function () {
  console.log('hello world')
}
