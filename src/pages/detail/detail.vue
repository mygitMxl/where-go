<template>
  <div >
    <banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></banner>
    <headerVue></headerVue>
    <List :list="list" class="content"></List>
  </div>
</template>

<script>
import axios from 'axios'
import banner from './components/banner.vue'
import headerVue from './components/Headers.vue'
import List from './components/list.vue'
export default {
name:'V-detail',
components:{banner,headerVue,List},
data(){
    return{
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list:[]
    }
},
methods:{
  getDetailInfo(){
     axios.get('static/mock/detail.json',{
      params:{
        id:this.$route.params.id
      }
     })
     .then(res=>{
      console.log(res.data);
      const data = res.data.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
     })
  }
},
mounted(){
  this.getDetailInfo()
}
}
</script>

<style scoped>
.content{
  height: 50rem
}

</style>