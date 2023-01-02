<template>
    <div class="container" v-if="showGallery" @click="handleGallery">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for=" (item,index) in imgs " :key="index">
                    <img :src='item' alt="" class="img">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-gallery',
    props:{
        showGallery:Boolean
    },
   data(){
    return{
        swiperOptions:{
        Pagination:'swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
    },
    imgs:['//imgs.qunarzz.com/p/p15/1809/19/494898a39defb102.jpg_256x160_cc948293.jpg','//imgs.qunarzz.com/p/p15/1809/19/494898a39defb102.jpg_256x160_cc948293.jpg']
    }
   },
   methods:{
    handleGallery(){
      this.$parent.showGallery=false
    }
   }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column; /* 列 */
    justify-content: center;
    /* align-items :center; */
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
}
.wrapper {
    overflow: hidden;
    background-color: aliceblue;
    width: 100%;
     /* padding-bottom: 100%;
    height: 0 */
}
.img{
    width: 100%;
}
.swiper-pagination{
    color: aliceblue;
}

</style>