<template>
<div class="header">
    <div class="header-left">
   <div class="iconfont  back-icon" >&#xe660;</div>
    </div>
    <div class="header-input">
    <span class="iconfont">&#xe8b9;</span>
    请输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <span @click="goCity">{{ city }}</span>
    <span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
</div>
</template>

<script>
export default {
name:'v-header',
props:{city:String},
methods:{
  goCity(){
    this.$router.push('/city')
  }
}
}
</script>
<style scoped>
  .header{
    background-color:#00bcd4;
    line-height:.86rem;
    color: #fff;
    display: flex;
  }
  .header-left{
    width: .64rem;
    float: left;
  }
  .back-icon{
    font-size: .4rem;
    text-align: center;
  }
  .header-input{
     flex: 1;
     line-height: .64rem;
     margin-top: .12rem;
     margin-bottom: .12rem;
     margin-left: .2rem;
     padding-left: .2rem;
     background: #fff;
     border-radius: .1rem;
     color: #ccc;
  }
  .header-right{
    width:1.24rem;
    float:right;
    text-align: center;
  }
  .arrow-icon{
    margin-left: .04rem;
    font-size: .24rem;
  }
</style>