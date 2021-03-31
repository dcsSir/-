import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import stroe from "@/store"

import "@/static/style/commom.scss"

import "lib-flexible"
Vue.config.productionTip = false

new Vue({
  router,
  stroe,
  render: h => h(App),
}).$mount('#app')
