import Vue from 'vue'
import Router from 'vue-router'
import Login from '../vue/Login'
import Register from '../vue/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
