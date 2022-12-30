<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icoons></Icoons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icoons from './components/icoons.vue'
import Recommend from './components/recommend.vue'
import Weekend from './components/weekend.vue'
export default {
name:'v-home',
components:{Header,Swiper,Icoons,Recommend,Weekend}
}
</script>

<style>

</style>