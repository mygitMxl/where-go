<template>
    <div class="wraper">
     <swiper :option="swiperOption">
    <swiper-slide v-for="item in swiperList" :key="item.id">
          <img :src='item.imgUrl' alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
export default {
name:'v-Swiper',
data(){
    return{
        swiperOption: {
        pagination:'.swiper-pagination',
        loop: true,
      },
      swiperList:[{
        id:'0001',
        imgUrl:"//gw.alicdn.com/bao/uploaded///asearch.alicdn.com/bao/uploaded/O1CN01lzlIZQ1OpNV32Nb0h_!!2212651111754.jpg_300x300q90.jpg_.webp"
      },
      {
        id:'0002',
        imgUrl:'//gw.alicdn.com/bao/uploaded/i1/2131609179/O1CN01U3Ip8m2Hg2I0qNzso_!!0-item_pic.jpg_300x300q90.jpg_.webp'
      }
    ]
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