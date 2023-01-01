import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/border.css'
import './assets/reset.css'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
