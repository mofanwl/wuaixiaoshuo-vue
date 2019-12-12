<template>
  <div id="header">
    <div class="banner"></div>
    <div class="details">
      <div class="book">
        <div class="book-image bookes">
          <img :src=book.books_pic width="200px" height="260px">
        </div>
        <div class="book-info bookes">
          <h1>{{book.books_name}}&nbsp;&nbsp;&nbsp;<span>{{book.books_author}} 著</span></h1>
          <div class="biaoqian" style="width: 100%">
            <span>{{book.status_name}}</span>
            <span>签约</span>
            <span>{{book.vip_name}}</span>
            <span>{{book.type_name}}</span>
          </div>
          <p style="width: 700px">{{book.books_describe}}</p>
          <div class="rec">
            <span>{{book.books_count}}</span><i>字</i>
            <span>341.5</span><i>万总推介</i>
            <span>1819</span><i>周推介</i>
          </div>
          <div class="nav" style="margin: auto">
            <a :href=book.books_url>免费试读</a>
            <!--<router-link to="/kong">加入书架</router-link>-->
            <router-link to="" @click="fun1(book)">加入书架</router-link>
            <router-link to="/kong">投票互动</router-link>
            <router-link to="/kong">手机App阅读</router-link>
          </div>
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
    <br><br>
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
          books_name: "庆余年",
          books_author: "猫腻",
          books_describe: "醒掌天下权，醉卧美人膝，五千年风华烟雨，是非成败转头空！",
          status_name:'已完结',
          type_name:'玄幻',
          vip_name:'VIP',
          books_url:'https://www.baidu.com'
        }
      }
    },
    mounted() {
      // alert(this.$route.query.id)
      axios.get("api/book/selectAllById/"+this.$route.query.id).then(res=> {
        console.log(res.data)
        this.book = res.data;
      })
    },
    methods: {
      fun() {
        alert("冲了钱才能订阅");
      },
      fun1:function () {
       // console.log(this.book.collect_uid)
        /*axios.get("api/collect/insUserOne" + book).then(function (res) {
          console.log(res);
          if(res.data=="ok"){
            alert("加入成功");
          }else {
            alert("加入失败");
          }
        })*/
      }
    }
  }
</script>

<style scoped>
  .nav{
    width: 475px;
    height: 36px;
  }
  .nav a{
    text-decoration: none;
    float: left;
    font-size: 14px;
    width: 102px;
    height: 34px;
    margin-right: 10px;
    line-height: 34px;
    text-align: center;
  }
  .nav a:nth-child(1){
    color: #fff;
    background-color: #bf2c24;
  }
  .nav a:nth-child(2){
    color: #3f5a93;
    border: 1px solid #3f5a93;
  }
  .nav a:nth-child(3){
    color: #3f5a93;
    border: 1px solid #3f5a93;
  }
  .nav a:nth-child(4){
    font-size: 12px;
    color: #fff;
    background-color: #bf2c24;
  }
  .rec span{
    font-size: 18px;
  }
  .rec i{
    font-style: normal;
    font-size: 12px;
  }
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
