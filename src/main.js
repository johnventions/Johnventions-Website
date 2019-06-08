import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/animate.css'
import '../node_modules/lity/dist/lity.min.css'

import lity from 'lity';
Object.defineProperty(Vue.prototype, '$lity', { value: lity });

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
