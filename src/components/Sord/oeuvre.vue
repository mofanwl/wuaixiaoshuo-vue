<template>
  <div id="app">
    <el-row class="tac">
      <el-col :span="5">

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分类</span>
          </div>
          <table cellspacing="0">
            <ul v-for="(items,index) in classes">
              <li>{{items}}</li>
            </ul>
          </table>


        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>状态</span>
          </div>
          <div>
            全部 连载 完本

          </div>

        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>属性</span>
          </div>
          <div>
            全部 免费 VIP

          </div>

        </el-card>
      </el-col>
      <el-col :span="19">
        <div class="book-img-text" v-for="(items,index) in book">
          <ul class="all-img-list cf">
            <li data-rid="1">
              <div class="book-img-box">
                <img :src=items.imgs width="102px" height="136px"/>
              </div>
              <div class="book-mid-info">
                <h4>{{items.name}}</h4>
                <p class="name">{{items.classify}}</p>
                <p class="intro">{{items.describe}}</p>
                <p class="update">{{items.num}}万字</p>
              </div>
            </li>
          </ul>

        </div>

      </el-col>
      <div class="block">
        <span class="demonstration">下一页更精彩哦</span>
        <el-pagination
          layout="prev, pager, next"
          :total="total" :page-size="this.params.size" :current-page="this.params.page"
          v-on:current-change="changePage">
        </el-pagination>
      </div>
    </el-row>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        book: [{
          imgs: 'https://bookcover.yuewen.com/qdbimg/349573/1004608738/150',
          name: '圣墟',
          classify: '辰东|玄幻·东方玄幻|连载',
          describe: '在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……',
          num: '512.64',
        }, {
          imgs: 'https://bookcover.yuewen.com/qdbimg/349573/3602691/150',
          name: '修真聊天群',
          classify: '圣骑士的传说|都市·都市异能|连载',
          describe: '某天，宋书航意外加入了一个仙侠中二病资深患者的交流群，里面的群友们都以‘道友’相称，群名片都是各种府主、洞主、真人、天师。连群主走失的宠物犬都称为大妖犬离家出走。整天聊的是炼丹、闯秘境、炼功经验啥的。',
          num: '819.98',
        }, {
          imgs: 'https://bookcover.yuewen.com/qdbimg/349573/3602691/150',
          name: '修真聊天群',
          classify: '圣骑士的传说|都市·都市异能|连载',
          describe: '某天，宋书航意外加入了一个仙侠中二病资深患者的交流群，里面的群友们都以‘道友’相称，群名片都是各种府主、洞主、真人、天师。连群主走失的宠物犬都称为大妖犬离家出走。整天聊的是炼丹、闯秘境、炼功经验啥的。',
          num: '819.98',
        }],
        params: {
          size: 2,
          page: 1,
        },
        classes: [
          "全部", "玄幻", "奇幻", "武侠", "仙侠", "都市", "现实", "军事", "历史", "游戏", "体育", "科幻", "悬疑", "轻小说", "短篇"]
        ,

        total: 10,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    changePage: function (page) {
      this.params.page = page;
      this.findAll();
    },
    findAll: function () {
      var _this = this;
      axios.get("" + this.params.size + "/" + this.params.page).then(function (res) {
        _this.book = res.data.list;
        _this.total = res.data.total

      })
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
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
    width: 477px;
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
    width: 240px;
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

</style>
