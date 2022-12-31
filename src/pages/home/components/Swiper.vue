<template>
    <div class="wraper">
     <swiper :option="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item in list" :key="item.id">
          <img :src='item.imgUrl' alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
export default {
name:'v-Swiper',
props:{list:Array},
data(){
    return{
        swiperOption: {
        pagination:'.swiper-pagination',
        loop: true,
      },
      swiperList:[]
    }
},
computed:{
  showSwiper(){
  return this.list.length
  }
}
}
</script>
<style scoped>
 .wraper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
 }
 .swiper-pagination{
    background-color: aqua;
 }
 img{
    width: 100%;
 }
</style>