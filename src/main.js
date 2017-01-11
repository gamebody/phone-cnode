// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import { routes } from 'src/routes'
/* eslint-disable no-new */
Vue.use(VueRouter)

import './assets/css/fontstyle.styl'
import '../static/css/reset.css'
import 'github-markdown-css'
import { formatDate } from 'src/filters/formatDate'
// 全局过滤器
Vue.filter('formatDate', formatDate)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
