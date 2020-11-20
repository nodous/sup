import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'

import 'lib-flexible/flexible'  // 页面适配

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
