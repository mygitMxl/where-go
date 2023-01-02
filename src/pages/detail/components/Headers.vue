<template>
  <div>
    <div class="header-abs" v-show="showAbs">
      <div class="iconfont  back-icon" @click="back">&#xe660;</div>
    </div>
  <div class="header" v-show="!showAbs" :style="opacity">
    <span>城市选择</span>
    <div class="iconfont header-back " @click="back">&#xe660;</div>
  </div>
  </div>
</template>

<script>
export default {
name:'v-header',
data(){
  return{
    showAbs:true,
        opacity: 0.5
 
  }
},
methods:{
  back(){
    window.history.back()
  },
  handleScroll(){
    console.log(document.documentElement.scrollTop);
    const top=document.documentElement.scrollTop
    if(top>60){
      let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacity = { opacity }
      this.showAbs=false
    }else{
      this.showAbs=true
    }

  }
},
mounted(){
  window.addEventListener('scroll', this.handleScroll)
},
 deactivated(){//当组件切换时调用,并且这两个生命周期函数是keep-alive提供的,在App组件中有使用
  window.removeEventListener('scroll',this.handleScroll)
 }
}
</script>

<style scoped>
.header-abs{
  position: absolute;
  left: .3rem;
  top: .4rem;
  width: .8rem;
  height: .8rem;
  border-radius: .4rem;
  background-color: black;
  text-align: center;
  line-height: .8rem;
}
.back-icon{
  color: #fff;
  font-size: .4rem;
}

.header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    overflow: hidden;
    border: 1px solid; 
    text-align: center;
    line-height:.86rem ;
    background-color:#17c0c8 ;
    color: #fff;
    font-size: .3.7rem;
    text-align: center
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