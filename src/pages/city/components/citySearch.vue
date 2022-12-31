<template>
  <div class="search">
    <input  class="searchInput" placeholder="请输入城市名或拼音"/>
  </div>
</template>

<script>
export default {
name:'v-search'
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

</style>