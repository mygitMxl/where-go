<template>
  <div id="app">
    <keep-alive><!-- 标签的意义在于,优先加载缓存 -->
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