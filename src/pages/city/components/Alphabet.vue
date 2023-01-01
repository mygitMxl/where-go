<template>
  <div>
    <ul class="list"  >
        <li class="item" v-for="item in letters" :key="item" 
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleClick"
        :ref="item"
        >
        {{ item}}
    </li>
    </ul>
  </div>
</template>

<script>
export default {
name:'v-alphabet',
props:{cities:Object},
data(){
 return{
    touchStatus:false,
    timer:null,
    startY: 0,
 }
},
computed:{
  letters(){
    const letter=[]
      for(let  i in this.cities){
        letter.push(i)
      }
      return letter
  }
},
updated(){
 this.startY=this.$refs['A'][0].offsetTop/* 获取A所对应的offsetTop的值,距离顶部距离 */
},
methods:{
    handleClick(e){
        console.log( e.target.innerText);
        this.$emit('change',e.target.innerText)
    },
    handleTouchStart(){
     this.touchStatus=true
    },
    handleTouchMove(e){
     if(this.touchStatus){
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 5)
     }
    },
    handleTouchEnd(){
    this.touchStatus=false
    }
}
}
</script>

<style scoped>
  .list{
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top:1.58rem;
    right:0;
    bottom: 0;
    width: .4rem;
  }
  .item{
    line-height: .4rem;
    text-align: center;
    color: #17c0c8;
  }
</style>