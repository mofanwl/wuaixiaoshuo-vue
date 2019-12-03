<template>
    <div id="header">
        <div class="banner"></div>
        <div class="details">
            <div class="book">
                <div class="book-image bookes">
                    <img src="../assets/180.jpg" alt="">
                </div>
                <div class="book-info bookes">
                    <h1>{{text}}&nbsp;&nbsp;&nbsp;<span>猫腻 著</span></h1>
                    <Label></Label>
                    <p>醒掌天下权，醉卧美人膝，五千年风华烟雨，是非成败转头空！</p>
                    <Rec></Rec>
                    <Nav></Nav>
                </div>
                <div class="book-fen bookes">
                    <h1>9.<span>2</span></h1>
                    <p>1021 人评价</p>
                    <span @click="fun()">订阅</span>
                </div>
            </div>
            <div class="jieshao">
                <router-link to="/home/zuopin">作品信息</router-link>
                <router-link to="/home/mulu">目录<span>(831章)</span></router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from "../components/show/nav";
import Label from "../components/show/label";
import Rec from "../components/show/rec";
export default {
    components:{
        Nav,
        Label,
        Rec
    },
    data(){
        return{
            text:"庆余年"
        }
    },
    methods:{
        fun(){
           alert("订阅成功");
        }
    }
}
</script>

<style scoped>
.banner{
    width: 100%;
    height: 292px;
    background: url(../assets/0.jpg) no-repeat center left ;
    position: relative;
}
.details{
    width: 990px;
    height: 1000px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -495px;
}
.book{
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 -5px 10px #e7e7e7;
}
.book .bookes{
    float: left;
}
.book-info h1 span{
    font-size: 14px;
    font-weight: normal;
}
.book-fen h1 span{
    font-size: 20px;
}
</style>
