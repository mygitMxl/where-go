<template>
    <div>
        <Header></Header>
        <Search :cities="cities"></Search>
        <List :cities="cities" :hot="hotCities" :letter="letter"></List>
        <Alphabet :cities="cities"></Alphabet>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Search from './components/citySearch.vue'
import List from './components/List.vue'
import Alphabet from './components/Alphabet.vue';
import axios from 'axios';
export default {
    name: 'v-city',
    components: { Header, Search, List, Alphabet },
    data() {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    }
    ,
    mounted() {
        axios.get('https://www.fastmock.site/mock/38dfa39bc0c9589ddba42d007a5a14cd/where/city')
            .then(res => {
                let { ret } = res.data
                if (ret === true) {
                    let data = res.data.data
                    data.forEach(item=>{
                        this.hotCities=item.hotCities
                        this.cities=item.cities
                    })
                }
            })
    }
}
</script>

<style>

</style>