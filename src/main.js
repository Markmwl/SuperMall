import Vue from 'vue'
import App from './App.vue'
import router from './router' 
// 全局引入global
import global from "@/global/global.js"

Vue.prototype.global = global
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
	router
}).$mount('#app')
