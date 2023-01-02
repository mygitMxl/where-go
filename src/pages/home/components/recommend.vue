<template>
    <div>
        <div class="recomend-title">热销推荐</div>
        <ul >
            <router-link tag="li" :to="'/detail/'+item.id"  class="item" v-for="item of list" :key="item.id"><!-- tag="li"将a便签编程li标签 -->
                <img class="item-img" :src="item.imgUrl"
                    alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'v-recommend',
    props:{list:Array},
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
    display: flex;
    overflow: hidden;
    height: 1.9rem;
    /* background: rgb(236, 234, 234); */
    border-bottom: 1px solid #ccc;

}

.item .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
}

.item-info {
    flex: 1;
    padding: .1rem;
    min-width: 0;
}

.item-title {
    line-height: .54rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.item-desc {
    line-height: .4rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;/* 强制在一行显示 */
    text-overflow: ellipsis
}

.item-button {
    background: #ff9300;
    padding: 0 .1rem;
    border-radius: .06rem;
    margin-top: 0.3rem;
    padding: 0 .2rem;

}
</style>