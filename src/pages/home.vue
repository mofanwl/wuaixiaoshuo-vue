<template>
  <div id="header">
    <div class="banner"></div>
    <div class="details">
      <div class="book">
        <div class="book-image bookes">
          <img src="../assets/180.jpg" alt="">
        </div>
        <div class="book-info bookes">
          <h1>{{book.text}}&nbsp;&nbsp;&nbsp;<span>{{book.writer}} 著</span></h1>
          <Label></Label>
          <p>{{book.intro}}</p>
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
  import axios from 'axios'

  export default {
    components: {
      Nav,
      Label,
      Rec
    },
    data() {
      return {
        book: {
          text: "庆余年",
          writer: "猫腻",
          intro: "醒掌天下权，醉卧美人膝，五千年风华烟雨，是非成败转头空！"
        }
      }
    },
    mounted() {
      _this = this;
      axios.get("").then(function (res) {
        _this.book = res.data.list;
      })
    },
    methods: {
      fun() {
        alert("冲了钱才能订阅");
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }
  a:hover{
    color: deeppink;
  }
  body{
    margin: 0;
    padding: 0;
    background-color: #F7F6F2;
  }
  .banner {
    width: 100%;
    height: 292px;
    background: url(../assets/0.jpg) no-repeat center left;
    position: relative;
  }

  .details {
    width: 990px;
    height: 1000px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -495px;
  }

  .book {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 -5px 10px #e7e7e7;
  }

  .book .bookes {
    float: left;
  }

  .book-info h1 span {
    font-size: 14px;
    font-weight: normal;
  }

  .book-fen h1 span {
    font-size: 20px;
  }
</style>
