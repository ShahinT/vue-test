import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js';
import "./style/main.css"
import './assets/css/tailwind.css';

Vue.config.productionTip = false
window.loggg = function(data){
  console.log(JSON.parse(JSON.stringify(data)))
}
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
