<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icoons></Icoons>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icoons from './components/icoons.vue'
export default {
name:'v-home',
components:{Header,Swiper,Icoons}
}
</script>

<style>

</style>