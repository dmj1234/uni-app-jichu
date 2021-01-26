import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.baseurl="www.1234.com";

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
