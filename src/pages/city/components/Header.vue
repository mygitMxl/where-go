<template>
  <div class="header">
    城市选择
    <div class="iconfont header-back " @click="back">&#xe660;</div>
  </div>
</template>

<script>
export default {
name:'v-header',
methods:{
    back(){
        window.history.back()
    }
}
}
</script>

<style scoped>
.header{
    position: relative;
    overflow: hidden;
    border: 1px solid; 
    text-align: center;
    line-height:.86rem ;
    background-color:#17c0c8 ;
    color: #fff;
    font-size: .3.7rem;
}
.header-back{
   position: absolute;
    top: 0;
    left: .3rem;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    color: #fff;
}
</style>