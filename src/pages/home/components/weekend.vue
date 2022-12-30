<template>
    <div>
        <div class="recomend-title">周末去哪</div>
        <ul >
            <li class="item" v-for="item in recommendList" :key="item.id">
               <div class='item-img-wraper'>
                <img class="item-img" :src="item.imgUrl" alt="">
               </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}11111111111111111111111111111111111</p>
                    <p class="item-desc">{{item.desc}}22222222222222222222222222222222</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'v-weekend',
    data(){
        return{
            recommendList:[
                {
                    id:'0001',
                    imgUrl:'//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
                    title:'1',
                    desc:'2'
                }    
            ]
        } 
    }
}
</script>

<style scoped>
.recomend-title {
    margin: .2rem 0 0 0;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    /* 文本缩进 */
}

.item {
    height: 1.9rem;
    border-bottom: 1px solid #ccc;
    margin: .1rem;
}
.item-img-wraper{
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
}

.item-img-wraper .item-img {
   width: 100%;
}

.item-info {
    overflow: hidden;
    padding: .1rem;
    min-width: 0;
}

.item-title {
    line-height: .54rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.item-desc {
    line-height: .4rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;/* 强制在一行显示 */
    text-overflow: ellipsis;
}

.item-button {
    background: #ff9300;
    padding: 0 .1rem;
    border-radius: .06rem;
    margin-top: 0.3rem;
    padding: 0 .2rem;
}
</style>