<template>
<div>
    <Header></Header>
    <Search></Search>
    <List></List>
    <Alphabet></Alphabet>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Search from './components/citySearch.vue'
import List  from './components/List.vue'
import Alphabet from './components/Alphabet.vue';
export default {
name:'v-city',
components:{Header,Search,List,Alphabet}
}
</script>

<style>

</style>