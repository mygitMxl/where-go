<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <div class="buttonList">
                    <div class="buttonWraper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="title">热门城市</div>
            <div class="buttonList">
                <div class="buttonWraper">
                    <div class="button">北京</div>
                </div>
                <div class="buttonWraper">
                    <div class="button">北京</div>
                </div>
                <div class="buttonWraper">
                    <div class="button">北京</div>
                </div>
                <div class="buttonWraper">
                    <div class="button">北京</div>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="item-list">
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                </div>
                <div class="title">A</div>
                <div class="item-list">
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                </div>
                <div class="title">A</div>
                <div class="item-list">
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                </div>
                <div class="title">A</div>
                <div class="item-list">
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                    <div class="item">阿那尔</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'v-List',
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper)
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
</style>