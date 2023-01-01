<template>
  <div>
    <Header></Header>
    <Swiper :list="swiperList"></Swiper>
    <Icoons :list="iconList"></Icoons>
    <Recommend :list="recommendList"></Recommend>
    <Weekend :list="weekendList"></Weekend>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icoons from './components/icoons.vue'
import Recommend from './components/recommend.vue'
import Weekend from './components/weekend.vue'
import axios from 'axios'
export default {
name:'v-home',
components:{Header,Swiper,Icoons,Recommend,Weekend},
data(){
  return{
     lastCity: '',
     city:this.$store.state.city.city,
     swiperList:[],
     iconList: [],
     recommendList:[],
     weekendList: []
  }
},
methods:{
  getHomeInfo(){
   axios({
    url:'https://www.fastmock.site/mock/38dfa39bc0c9589ddba42d007a5a14cd/where/home',
    data:{
      params:{
        city:this.city
      }
    }
   })
   .then(res=>{
    res = res.data
     if(res.ret&&res.data){
      const data=res.data
      this.swiperList=data.swiperList
      this.iconList=data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
     }
   })
  }
},
computed:{
   
}
,
mounted(){
   this.getHomeInfo()
  this.lastCity=this.city
},
activated(){/* 有keep-alive才出现的什生命周期,keep-alive在app组件 */
 if(this.lastCity !== this.city){
  this.lastCity = this.city
  this.getHomeInfo()
 }
}
}
</script>

<style>

</style>