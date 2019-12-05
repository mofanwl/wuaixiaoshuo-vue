<template>
  <div class="box-center">

    <div>
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
              <div>
                <el-row>
                  <el-button type="danger">书籍详情</el-button><br>
                  <el-button type="danger">加入书架</el-button>
                </el-row>
              </div>

            </li>

          </ul><hr>

        </div>

      </el-col>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Bookseek",
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
        }]
      }
    }
  }
</script>

<style scoped>
  .box-center {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
  }

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
    width: 1000px;
    background-color: #b5acab;
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

    display: block;
    -webkit-margin-before: 0em;
    margin-block-start: 0em;
    -webkit-margin-after: 0em;
    margin-block-end: 0em;
    -webkit-margin-start: 0px;
    margin-inline-start: 0px;
    -webkit-margin-end: 0px;
    margin-inline-end: 0px;
  }

  .book-img-text .book-mid-info p {
    font-family: PingFangSC-Regular, '-apple-system', Simsun;
    font-size: 12px;
  }

  /*  .book-img-text .book-mid-info p.author {
      overflow: hidden;
      height: 13px;
      margin-bottom: 6px;
    }*/

  .book-img-text .book-mid-info p.intro {
    font-size: 14px;
    /* line-height: 24px; */
    overflow: hidden;
    height: 48px;
    margin-bottom: 8px;
    color: #666;
  }

  .el-col-19 {
    width: 100%;
  }

  img {
    width: 115px;
    height: 192px;
  }

</style>
