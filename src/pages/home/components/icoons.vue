<template>
  <div class="icons">
    <swiper :option="swiperOption" >
    <swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl" alt="">
            <p class="icon-des">{{item.desc}}</p>
        </div>
    </div>
    </swiper-slide>
</swiper>
  </div>
</template>
<script>
export default {
name:'v-icoons',
props:{list:Array},
data(){
  return{
    swiperOption: {
      autoplay: false
      },
  }
},

 computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
 .icons{
  margin-top: .5rem;
 }
 .icons .icon{
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
 }
 .icons .icon .icon-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    padding: .1rem;
    box-sizing: border-box;
 }
 .icons .icon .icon-img .icon-imgcontent{
    height: 100%;
    display: block;
    margin: 0 auto;
 }
 .icon-des{
    position: absolute;
    left: 0;
        right:0;
        bottom: -15px;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color:black;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis
 }
</style>