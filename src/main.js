import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false
Vue.use(require('vue-moment'));

new Vue({
  render: h => h(App),
}).$mount('#app')
