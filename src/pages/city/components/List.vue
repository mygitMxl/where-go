<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <div class="buttonList">
                    <div class="buttonWraper">
                        <div class="button" >{{nowcity}}</div>
                    </div>
                </div>
            </div>
            <div class="title">热门城市</div>
            <div class="buttonList">
                <div class="buttonWraper" v-for="item of hot" :key="item.id" @click="hotcity(item.name)" >
                    <div class="button" >{{ item.name}}</div>
                </div>
            </div>
            <div class="area" v-for=" (item,key) in cities" :key="key" :ref="key" >
                <div class="title">{{ key }}</div>
                <div class="item-list" >
                    <div class="item" v-for=" data in item" :key="data.id"  @click="hotcity(data.name)" >{{data.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'v-List',
    props:{
        cities:Object,
        hot:Array,
        letter:String
    },
    watch:{
        letter(){/* 监听letter变化 */
          if(this.letter){
            const element=this.$refs[this.letter][0]
            console.log(element);
            this.scroll.scrollToElement(element)
          }
       }
    }
    ,
    methods:{
        hotcity(name){
          this.$store.dispatch('citys',name)
          this.$router.push('/')
        },
        hacnle(){
            console.log(this.letter);
        },
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper)
      
    },
    computed:{
        nowcity(){
            return this.$store.state.city.city
        }
    }
}
</script>

<style scoped>
.list {
    overflow: hidden;
    position: absolute;
    top: 1.64rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
}

.title {
    line-height: .54rem;
    background-color: #eee;
    color: #666;
    font-size: .26rem;
    border-bottom: 1px solid #ccc;
    padding: 0 .2rem;
}

.buttonList {
    padding: .1rem .6rem .1rem .1rem;
    overflow: hidden;
}

.buttonWraper {
    float: left;
    width: 33.3%;
}

.button {
    margin: .1rem;
    border: .02rem solid #ccc;
    text-align: center;
    padding: .1rem 0;
    border-radius: .06rem
}

.item-list {
    padding: .1rem 0;

}

.item {
    line-height: .76rem;
    padding-left: .3rem;
    border-bottom: 1px solid #ccc;
}

.item:first-child {
    line-height: .67rem;
}
.area{

}
</style>