<template>

  <div class="outerd">
    <div class="laf1">
      <div class="oeuvre_wrapper">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-row :gutter="20" style=" margin-left: 0px;  margin-right: 0px;height: 50px;">
            <el-col :span="5" :offset="0">
              <el-menu-item index="1">作品分类</el-menu-item>
            </el-col>
            <el-col :span="3" :offset="0">
              <router-link to="/oeuvre"><el-menu-item index="1">全部作品</el-menu-item></router-link>
            </el-col>
            <el-col :span="3" :offset="1">
              <el-menu-item index="1">排行</el-menu-item>
            </el-col>
            <el-col :span="3" :offset="0">
              <el-menu-item index="1">完本</el-menu-item>
            </el-col>
            <el-col :span="3" :offset="0">
              <el-menu-item index="1">免费</el-menu-item>
            </el-col>
            <el-col :span="3" :offset="0">
              <el-menu-item index="1">作家专区</el-menu-item>
            </el-col>
            <el-col :span="3" :offset="0">
              <el-menu-item index="1">客户端</el-menu-item>
            </el-col>
          </el-row>
        </el-menu>

      </div>
    </div>
    <div class="oeuvre-center">
      <el-row class="tac">
        <el-col :span="5">

          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>分类</span>
            </div>

            <table cellspacing="0" class="nangao">
              <ul class="myul" v-for="(items,index) in classes">
                <div class="left11" style="font-size: 14px">
                  <li @click="fun1(items)" class="myli"
                      style="margin-left: 20px;width:42px;height:14px;padding: 5px;border: 1px solid #e6e6e6">
                    {{items}}
                  </li>
                </div>
              </ul>
            </table>


          </el-card>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>状态</span>
            </div>
            <div>
              <table cellspacing="0" class="nangao">
                <ul class="my1ul" v-for="(itams,index) in condition">
                  <li @click="fun2(itams)" class="my1li"
                      style="margin-left: 20px;width:42px;height:14px;padding: 5px;border: 1px solid #e6e6e6">
                    {{itams}}
                  </li>
                </ul>
              </table>

            </div>

          </el-card>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>属性</span>
            </div>
            <div>
              <table cellspacing="0" class="nangao">
                <ul class="my1ul" v-for="(itams,index) in nature">
                  <li @click="fun3(itams)" class="my1li"
                      style="margin-left: 20px;width:42px;height:14px;padding: 5px;border: 1px solid #e6e6e6">
                    {{itams}}
                  </li>
                </ul>
              </table>

            </div>

          </el-card>
        </el-col>
        <el-col :span="19">
          <div class="book-img-text" v-for="(items,index) in book">
            <ul class="all-img-list cf">
              <li data-rid="1">
                <div class="book-img-box" @click="fun4(items)">
                  <img :src=items.imgs width="102px" height="136px" class="yangshi"/>
                </div>
                <div class="book-mid-info">
                  <h4 @click="fun4(items)" class="yangshi">{{items.name}}</h4>
                  <p class="name">{{items.writer}} | {{items.genre}} | {{items.state}}</p>
                  <p class="intro">{{items.describe}}</p>
                  <p class="update">{{items.num}}万字</p>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <div class="blocks">
          <span class="demonstration">下一页更精彩哦</span>
          <el-pagination
            layout="prev, pager, next"
            :total="total" :page-size="this.params.size" :current-page="this.params.page"
            v-on:current-change="changePage">
          </el-pagination>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        book: [{
          id: 1,
          imgs: 'https://bookcover.yuewen.com/qdbimg/349573/1004608738/150',
          name: '圣墟',
          writer: '辰东',
          genre: '玄幻·东方玄幻',
          state: '连载',
          describe: '在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……',
          num: '512.64',
        }, {
          id: 2,
          imgs: 'https://bookcover.yuewen.com/qdbimg/349573/3602691/150',
          name: '修真聊天群',
          writer: '圣骑士的传说',
          genre: '都市·都市异能',
          state: '连载',
          describe: '某天，宋书航意外加入了一个仙侠中二病资深患者的交流群，里面的群友们都以‘道友’相称，群名片都是各种府主、洞主、真人、天师。连群主走失的宠物犬都称为大妖犬离家出走。整天聊的是炼丹、闯秘境、炼功经验啥的。',
          num: '819.98',
        }, {
          id: 3,
          imgs: 'https://bookcover.yuewen.com/qdbimg/349573/3602691/150',
          name: '修真聊天群',
          writer: '圣骑士的传说',
          genre: '都市·都市异能',
          state: '连载',
          describe: '某天，宋书航意外加入了一个仙侠中二病资深患者的交流群，里面的群友们都以‘道友’相称，群名片都是各种府主、洞主、真人、天师。连群主走失的宠物犬都称为大妖犬离家出走。整天聊的是炼丹、闯秘境、炼功经验啥的。',
          num: '819.98',
        }],
        params: {
          size: 2,
          page: 1,
        },
        total: 10,
        classes: [
          "全部", "玄幻", "奇幻", "武侠", "仙侠", "都市", "现实", "军事", "历史", "游戏", "体育", "科幻", "悬疑", "轻小说", "短篇"]
        ,
        condition: ["全部", "连载", "完本"],
        nature: ["全部", "免费", "VIP"],
      }
    },
    methods: {
      changePage: function (page) {
        this.params.page = page;
        this.findAll();
        // this.fun1(items);
      },
      findAll: function () {
        var _this = this;
        axios.get("" + this.params.size + "/" + this.params.page).then(function (res) {
          _this.book = res.data.list;
          _this.total = res.data.total
        })
      },
      // 根据分类查
      fun1: function (items) {

        alert(items)
      },
      //根据状态查
      fun2: function (items) {
        alert(items)
      },
      //根据属性查
      fun3: function (items) {
        // (".left11").removeClass("myli");
        // this.addClass("myli");

        alert(items);
      },
      //点击图片和书名跳转页面
      fun4: function (items) {
        alert(items.id)
      }
    }
  }
</script>
<style>
  .oeuvre_wrapper {
    overflow: hidden;
    width: 1200px;
    height: 55px;
    margin: 0 auto;
  }

  .outerd {
    width: 100%;
  }

  .myli:hover {
    background: black;
    color: aliceblue;
  }

  .my1li:hover {
    background: black;
    color: aliceblue;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }

  .oeuvre-center {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
  }

  .cf {
    zoom: 1;
  }

  li, ol, ul {
    list-style: none outside none;
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
    width: 455px;
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
    width: 300px;
  }

  .book-img-text .book-mid-info {
    width: 542px;
  }

  h4 {
    display: block;
    margin-block-start: 1.33em;
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

  .book-img-text .book-mid-info p.author {
    overflow: hidden;
    height: 13px;
    margin-bottom: 6px;
  }

  .book-img-text .book-mid-info p.intro {
    font-size: 14px;
    /* line-height: 24px; */
    overflow: hidden;
    height: 48px;
    margin-bottom: 8px;
    color: #666;
  }

  a, blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    /*padding: 0;*/
  }

  .demonstration {
    color: darkorange;
    font-size: 15px;

  }

  .box-card {
    font-size: 15px;
    font-family: '宋体'
  }

  .nangao {
    margin-left: -55px;
  }

  .myul {
    width: 240px;
  }

  .myli {
    cursor: pointer;
    width: 60px;
    float: left;
    display: block;

  }

  .my1ul {
    width: 240px;
  }

  .my1li {
    cursor: pointer;
    width: 80px;
    float: left;
    display: block;

  }

  .yangshi {
    cursor: pointer;
  }

  .name {
    margin-bottom: 10px
  }
  .el-menu-item, .el-submenu__title {
    height: 50px;
    line-height: 50px;
    position: relative;
    -webkit-box-sizing: border-box;
    white-space: nowrap;
    list-style: none;
  }
</style>
