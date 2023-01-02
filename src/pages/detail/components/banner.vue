<template>
   <div>
    <div class="baner" @click="handleBannerChange">
        <img  class='baner-img' src="//img1.qunarzz.com/sight/p0/2211/6e/6e7bb7875e998fa4a3.water.jpg_256x160_63c02743.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">
                1
            </div>
            <div class="banner-number">
                <span class="iconfont  banner-icon">&#xe8b9;</span>
                123
            </div>
        </div>
    </div>
    <CommonGallery :showGallery="showGallery"></CommonGallery>
   </div>
</template>

<script>
import CommonGallery from '../../../common/gallery/gallery.vue'
export default {
    name: 'v-banner',
    components:{CommonGallery},
    data(){
      return {
        showGallery:false
      }
    }
    ,
    methods:{
        handleBannerChange(){
        return this.showGallery=true
        }
    }
}
</script>

<style scoped>
.baner {
     overflow: hidden;
     height: 0;
     padding-bottom: 55%;
     position: relative;

 }
 .baner-img {
     width: 100%;
 }
 .banner-info{
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    line-height:.6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    color: #fff;
 }
 .banner-title{
    flex: 1;
    font-size: .32rem;
    padding: 0 .2rem;
 }
 .banner-number{
    height: .32rem;
        line-height:.32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, .8);
        font-size: .24rem;
 }
 .banner-icon{
    font-size: .24rem;
 }
</style>