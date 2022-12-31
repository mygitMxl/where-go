<template>
  <div>
    <ul class="list"  >
        <li class="item" v-for="(item,key) in cities" :key="key">{{ key }}</li>
    </ul>
  </div>
</template>

<script>
export default {
name:'v-alphabet',
props:{cities:Object}
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