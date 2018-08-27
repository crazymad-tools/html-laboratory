// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Body from './Body'
import router from './router/main'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#body',
  router,
  components: { Body },
  template: '<App/>'
})

window.onload = function () {
  console.log('hello world')
  alert('hello world')
}
