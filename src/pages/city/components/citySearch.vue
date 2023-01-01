<template>
  <div>
  <div class="search">
    <input  class="searchInput" placeholder="请输入城市名或拼音" v-model="keyword"/>
  </div>
  <div class="search-content"   ref="search" v-show="keyword">
    <ul>
      <li v-for="item in list" :key="item.id" class="search-item" @click="changecity( item.name )">
       {{ item.name }}
      </li>
      <li class="search-item" v-show="hasNoData">没有找到匹配的数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
name:'v-search',
props:{cities:Object},
data(){
  return{
    keyword:'',
    list:[],
    timer:null
  }
},
mounted(){
  this.scroll = new Bscroll(this.$refs.search)
},
computed:{
  hasNoData(){
    return ! this.list.length
  }
},
methods:{
  changecity(name){
  this.$store.dispatch('citys',name)
  this.$router.push('/')
  } 
},
watch:{
  keyword(){
    if(this.timer){
      clearTimeout(this.timer)
    }
    if(!this.keyword){
      return  this.list=[]
    }
    this.timer=setTimeout(()=>{
      const result=[]
      for(let i in this.cities){
         this.cities[i].forEach(item=>{
          if(item.spell.indexOf(this.keyword)>-1||item.name.indexOf(this.keyword)>-1){
            result.push(item)
          }
         })
      }
      this.list=result
    },100)
  }
},

}
</script>

<style scoped>
.search{
    line-height: .72rem;
    background-color:#00bcd4 ;
    padding: 0 .1rem;
}
 .searchInput{
    box-sizing: border-box;/* 加了box-sizing:border-box属性，padding和border的值就不会在影响元素的宽高 */
     width: 100%;
     text-align: center;
     border-radius: .06rem;
     height: .62rem;
     color: #666;
     padding: 0 .3rem;
 }
 .search-content{
  /* overflow: hidden; */
  position: absolute;
  z-index: 1;
  top: 1.70rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc
 }
 .search-item{
  line-height:.62rem ;
  background-color: #fff;
  padding-left: .2rem;
  color: #666;
 }
</style>