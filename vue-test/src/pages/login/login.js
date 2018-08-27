// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Box from './vue/Box'
import router from './router/main'

import 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#box',
  router,
  components: { Box },
  template: '<Box/>',
  data: {
    test: 'hello'
  }
})

window.onload = function () {
  console.log(app.loginAccount);
  console.log(app.test)
  app.test = 'crazymad'
}
