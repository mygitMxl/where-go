<template>
  <div id="app">
    <keep-alive exclude="V-detail"><!-- 标签的意义在于,优先加载缓存 ,exclude不包括detail页面-->
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
name:'app',
}
</script>

<style>

</style>