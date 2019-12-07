<template>
  <div id="search">
    <div class="lay1" style="background: gainsboro">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><a @click="backIndex">返回首页</a></el-menu-item>
        <el-submenu index="2">
          <template slot="title" style="width: 350px"><b>起点中文网</b></template>
          <el-menu-item index="2-1">起点女生网</el-menu-item>
          <el-menu-item index="2-2">创世纪中文网</el-menu-item>
          <el-menu-item index="2-3">云起书院</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">玄幻</a></el-menu-item>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">科幻</a></el-menu-item>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">仙侠</a></el-menu-item>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">都市</a></el-menu-item>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">游戏</a></el-menu-item>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">历史</a></el-menu-item>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">排行</a></el-menu-item>
        <el-submenu index="4">
          <template slot="title">更多</template>
          <el-menu-item index="4-1">全部分类</el-menu-item>
          <el-menu-item index="4-2">轻小说</el-menu-item>
          <el-menu-item index="4-3">奇幻</el-menu-item>
          <el-menu-item index="4-4">武侠</el-menu-item>
          <el-menu-item index="4-5">悬疑</el-menu-item>
          <el-menu-item index="4-6">军事</el-menu-item>
          <el-menu-item index="4-7">现实</el-menu-item>
          <el-menu-item index="4-8">体育</el-menu-item>
          <el-menu-item index="4-9">短篇</el-menu-item>
        </el-submenu>
        <el-menu-item index="5">
          <div class="input-with-select" style="width:300px;">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"
                         style="background-color: #494b4b;color: aliceblue"></el-button>
            </el-input>
          </div>
        </el-menu-item>
        <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">登录</a> | <a href="https://www.ele.me"
                                                                                         target="_blank">注册</a>
        </el-menu-item>
        <el-menu-item index="7">
          <div class="wodeshujia">
            <a @click="toShujia" target="_blank"><img src="../../assets/w1.png">我的书架</a>
          </div>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="lay2">
      <div class="input-with-select" style="width:500px;margin: auto">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select" style="margin-top: 10px">
          <el-button slot="append" icon="el-icon-search" style="background-color: crimson;color: aliceblue">搜索
          </el-button>
        </el-input>
      </div>
    </div>
    <div class="lay3" style="width: 1200px;margin: auto">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple" style="margin-top: 15px">
            <div class="left1"
                 style="padding-top: 5px;padding-left: 20px;background: antiquewhite;padding-bottom: 10px">
              <div class="left11" style="font-size: 14px"><p align="left"><b>已选</b><a
                style="margin-left: 20px;width:50px;height:50px;padding: 5px;border: 1px solid #e6e6e6;background: red;color: gainsboro">全部</a>
              </p></div>
              <div class="left11" style="font-size: 14px"><p align="left"><b>站点</b></p></div>
              <div class="left11" style="font-size: 14px"><p align="left"><b>分类</b></p></div>
              <div class="left11" style="font-size: 14px"><p align="left"><b>状态</b></p></div>
              <div class="left11" style="font-size: 14px"><p align="left"><b>属性</b></p></div>
              <div class="left11" style="font-size: 14px"><p align="left"><b>字数</b></p></div>
              <div class="left11" style="font-size: 14px"><p align="left"><b>品质</b></p></div>
              <div class="left11" style="font-size: 14px"><p align="left"><b>更新时间</b></p></div>
            </div>
            <div class="left2" style="height: 40px;background: antiquewhite">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><a style="color: red"><b>搜索相关性↓</b></a></el-menu-item>
                <el-menu-item index="2"><a><b>更新时间</b></a></el-menu-item>
                <el-menu-item index="2"><a><b>总收藏</b></a></el-menu-item>
                <el-menu-item index="2"><a><b>总字数</b></a></el-menu-item>
                <el-submenu index="3">
                  <template slot="title">推荐票</template>
                  <el-menu-item index="3-1">周推荐</el-menu-item>
                  <el-menu-item index="3-2">月推荐</el-menu-item>
                  <el-menu-item index="3-3">总推荐</el-menu-item>
                </el-submenu>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">共99999本相关作品</a></el-menu-item>
              </el-menu>
            </div>
            <div  style="height: 700px;width: 835px">
            <div class="left3" style="overflow-x: hidden;width: 100%;height: 100%;margin-left: -35px">
              <div>
                <el-col :span="19">
                  <div class="book-img-text" v-for="(items,index) in (this.$route.query.key==0?mianFei:moHu)">
                    <ul class="all-img-list cf" >
                      <li data-rid="1">
                        <div class="book-img-box" @click="fun4(items)">
                          <img :src=items.books_pic width="102px" height="136px" class="yangshi"/>
                        </div>
                        <div class="book-mid-info">
                          <h4 @click="fun4(items)" class="yangshi">{{items.books_name}}</h4>
                          <p class="name" align="left">作者:{{items.books_author}} | 状态:{{items.status_name}} | {{items.booksStatus=1?'上架':'已下架'}}</p>
                          <p class="intro" align="left">描述:{{items.books_describe}}</p>
                          <p class="update" align="left">{{items.books_count}}字</p></div>
                        <div class="right" style="margin-top: 30px">
                          <el-row>
                            <el-button type="danger"><a @click="toXq">书籍详情</a></el-button>
                            <br><br>
                            <el-button type="danger">加入书架</el-button>
                          </el-row>
                        </div>

                      </li>

                    </ul>
                    <hr style="width: 790px;margin-left: 30px;">

                  </div>

                </el-col>
              </div>
            </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple" style="height: 500px;margin-top: 15px;background: #c3fce6"><div class="grid-content bg-purpley3;background: #fefdff"><el-row>
            <el-col :span="12"><div style="margin-top:10px"><h3>本周强推</h3></div></el-col>
            <el-col :span="10"><div class="grid-content bg-purple-light" style="background: #c3fce6"><a href=""><h5>更多>></h5></a></div></el-col>
          </el-row><hr><el-table
            :data= "(this.$route.query.key==0?mianFei:moHu)"
            style="width: 100%;height: 650px">
            <el-table-column
              prop="type_name"
              width="70">
            </el-table-column>
            <el-table-column
              prop="books_name"
              width="200">
            </el-table-column>
            <el-table-column
              prop="vip_name"
            >
              <template scope="scope">
                <span v-if="scope.row.vip_name==='VIP'" style="color: red">会员</span>
                <span v-else style="color: green">免费</span>
              </template>
            </el-table-column></el-table></div></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "search",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        /*空集合数组，准备接受Axios根据模糊查询请求来的对象数据*/
        mianFei: [
          {books_id:1,books_name:'小说',booksVip:1,booksType:1,books_url:'123',books_pic:'123',books_author:'强哥的猫',books_describe:'我们一起学猫叫，一起喵喵喵',books_count:21.3,booksStatus:1,status_name:'已完结',vip_name:'会员',type_name:'仙侠'}
        ],
        moHu: [
          {books_id:1,books_name:'小说',booksVip:1,booksType:1,books_url:'123',books_pic:'123',books_author:'强哥的猫',books_describe:'我们一起学猫叫，一起喵喵喵',books_count:21.3,booksStatus:1,status_name:'已完结',vip_name:'会员',type_name:'仙侠'}
        ]
      }
    },
    methods: {
      backIndex(){
        this.$router.push("/indexindex")
      },
      toShujia:function(){
        alert("即将传送至我的书架")
        this.$router.push("/bookcenter/bookrack")
      },
      toXq(){
        this.$router.push("/home")
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){
      // alert(this.$route.query.key)
      if((this.$route.query.key) == 0){
        axios.get("api/book/selectAllMoney").then(res=>{
          //alert(this.$route.query.key)
          console.log(res.data)
          //res.data.books_type=3?'奇幻':'武侠'
          this.mianFei=res.data;
        })
      }else{
        axios.get("api/book/selectAllByName?name="+this.$route.query.scc).then(res=>{
          //alert(this.$route.query.scc)
          console.log(res.data)
          //res.data.books_type=3?'奇幻':'武侠'
          this.moHu=res.data;
        })
      }
        }
  }
</script>

<style>
  #app {
    margin-top: 0px;
  }

  #search {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .bg-purple3mid4 {
    height: 100px;
    background: #c9c8dc;
  }

  .bg-purple3mid4:hover {
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  }

  .bg-purple3mid4 a:hover {
    color: red;
  }

  /*图书详情*/

  div {
    margin: 0;
    padding: 0;
  }

  .tool-bar {
    position: relative;
    z-index: 1;
    /* height: 40px;
     margin-bottom: 24px;*/
    padding: 0 12px;
    background: #f7f6f2;
  }

  li, ol, ul {
    list-style: none outside none;
  }

  .cf {
    zoom: 1;
  }

  .book-img-text .book-mid-info h4 {
    font: 18px/24px PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif;
    overflow: hidden;
    height: 22px;
    margin-bottom: 16px;
  }

  .book-img-text .all-img-list li {
    width: 372px;
  }

  .book-img-text .all-img-list li {
    float: left;
    width: 1160px;
    height: 195px;
  }

  .book-img-text li:first-child {
    padding-top: 0;
    border-top: none;
  }

  .book-img-text li {
    height: 162px;
    padding-top: 25px;
    border-top: 1px solid #e6e6e6;
  }

  .book-img-text .book-img-box {
    position: relative;
    z-index: 3;
    width: 110px;
    height: 156px;
    margin-right: 5px;
  }

  .book-img-text .book-img-box, .book-img-text .book-mid-info {
    float: left;
  }

  li {
    text-align: -webkit-match-parent;
  }

  .book-img-text .all-img-list li .book-mid-info {
  }

  .book-img-text .book-mid-info {
    width: 542px;
  }

  h4 {
    display: block;
    margin-block-start: 0em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  p {
    word-wrap: break-word;
    word-break: break-all;
  }

  .book-img-text .book-mid-info p {
    font-family: PingFangSC-Regular, '-apple-system', Simsun;
    font-size: 12px;
  }

  .book-img-text .book-mid-info p {
    overflow: hidden;
    height: 13px;
    margin-bottom: 6px;
  }

  .book-img-text .book-mid-info p.intro {
    font-size: 14px;
    /* line-height: 24px; */
    overflow: hidden;
    height: 33px;
    color: #666;
  }

  .el-col-19 {
    width: 100%;
  }

  .book-img-box img {
    width: 100px;
    height: 136px;
  }

  .book-mid-info, .right {
    float: left;
  }
  a{
    text-decoration:none;
  }

</style>
