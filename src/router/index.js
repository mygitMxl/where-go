import Vue from "vue";
import Router from 'vue-router'
import Home from '../pages/home/home.vue'
import City from '../pages/city/city.vue';
import Detail from '../pages/detail/detail.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    ,
    {
      path:'/city',
      name:'city',
      component:City
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }
    return {
        x: 0,
        y: 0
    }
}

})