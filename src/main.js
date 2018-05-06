// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/index'
import VueRouter from 'vue-router'
import store from './store/index'
import mavonEditor from 'mavon-editor'
import ElementUI from 'element-ui'
import Vuerify from 'vuerify'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'
import './style/base.css'
import './style/common.scss'

// import '../static/css/element-variables.scss'

Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(Vuerify)

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  // mode: routerMode,
  // strict: process.env.NODE_ENV !== 'production',
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     if (from.meta.keepAlive) {
  //       from.meta.savedPosition = document.body.scrollTop;
  //     }
  //     return { x: 0, y: to.meta.savedPosition || 0 }
  //   }
  // }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
