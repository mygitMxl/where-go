<template>
  <div >
    <banner></banner>
    <headerVue></headerVue>
    <List :list="list"></List>
  </div>
</template>

<script>
import banner from './components/banner.vue'
import headerVue from './components/Headers.vue'
import List from './components/list.vue'
export default {
name:'V-detail',
components:{banner,headerVue,List},
data(){
    return{
        list:[
            {title:'成人票',
             children:[{
              title:'成人三馆联票',
              children:[{
                title:"已售空"
              }]
             }]
          },
            {title:'学生票'},
            {title:'儿童票'},
            {title:'特惠票'},
            {title:'学生票'},
            {title:'儿童票'},
            {title:'特惠票'},
            {title:'学生票'},
            {title:'儿童票'},
            {title:'特惠票'},
            {title:'学生票'},
            {title:'儿童票'},
            {title:'特惠票'},
            {title:'学生票'},
            {title:'儿童票'},
            {title:'特惠票'},
            {title:'学生票'},
            {title:'儿童票'},
            {title:'特惠票'},
        ]
    }
}
}
</script>

<style>

</style>