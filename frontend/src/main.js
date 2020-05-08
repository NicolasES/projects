import Vue from 'vue'
import App from './App.vue'
import 'vue-material-design-icons/styles.css'

import  './plugins/axios'

Vue.config.productionTip = false

import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
