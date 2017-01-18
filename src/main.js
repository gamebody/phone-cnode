// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import infiniteScroll from 'vue-infinite-scroll'

import { routes } from 'src/routes'
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(Vuex)

import './assets/css/fontstyle.styl'
import '../static/css/reset.css'
import 'github-markdown-css'
import vueScroll from 'vue-scroll'

Vue.use(vueScroll)
Vue.use(infiniteScroll)

import { formatDate } from 'src/filters/formatDate'
// 全局过滤器
Vue.filter('formatDate', formatDate)

const router = new VueRouter({
  mode: 'history',
  routes
})

import storeState from './vuex/store'
const store = new Vuex.Store({
  storeState
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
