<template>
<div>
    <Header></Header>
    <Search></Search>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Search from './components/citySearch.vue'
export default {
name:'v-city',
components:{Header,Search}
}
</script>

<style>

</style>