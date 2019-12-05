<template>
    <div id="type_sea">
      <div class="lay1" style="background: gainsboro">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
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
              <a href="//me.qidian.com/bookCase/bookCase.aspx?caseId=-2" target="_blank"><img src="../../assets/w1.png">我的书架</a>
            </div>
          </el-menu-item>
        </el-menu>
      </div>
      <div id="lay3">
        <el-row :gutter="22">
          <el-col :span="5"><div class="grid-content bg-purpley3;background: #fefdff"><el-row>
            <el-col :span="12"><div style="margin-top:-20px"><h3>本周强推</h3></div></el-col>
            <el-col :span="10"><div class="grid-content bg-purple-light"><a href=""><h5>更多>></h5></a></div></el-col>
          </el-row><hr><el-table
            :data="bookData"
            style="width: 100%">
            <el-table-column
              prop="type"
              width="70">
            </el-table-column>
            <el-table-column
              prop="name"
              width="100">
            </el-table-column>
            <el-table-column
              prop="zuozhe"
            >
            </el-table-column></el-table></div></el-col>

          <el-col :span="13"><div class="grid-content bg-purpley3-light"><div class="el-header1"><h3>本类强推</h3></div><br><hr><el-container>
            <el-header>
              <h3>风陵渡口初相遇，一见杨过误终身。</h3>
            </el-header>
            <el-main><el-row>
              <!--  <el-button v-popover:popover1>hover 激活</el-button>-->
              <el-col :span="11"><div class="grid-content bg-purple3mid"><el-carousel @change="change()"  :interval="4000" type="card" height="125px">
                <el-carousel-item v-for="(item,index) in bookList">
                  <img :src="item.src" style="width: 93px;height: 124px" :title="item.desc" >

                </el-carousel-item>
              </el-carousel></div></el-col>
              <el-col :span="13"><div class="grid-content bg-purple3mid"><el-carousel @change="change()"  :interval="4000" type="card" height="125px">
                <el-carousel-item v-for="(item,index) in bookList">
                  <img :src="item.src" style="width: 93px;height: 124px" :title="item.desc" >
                </el-carousel-item>
              </el-carousel></div></el-col>
            </el-row></el-main>
            <el-main><el-row :gutter="20">
              <el-col :span="8"><div class="grid-content bg-purple3mid2">
                <h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
                <em class="total" style="color: red"><cite>58,889</cite><i>人在追</i></em>
                <h6>意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒，……</h6></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple3mid2"><h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
                <em class="total" style="color: red"><cite>58,889</cite><i>人在追</i></em>
                <h6>意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒，……</h6></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple3mid2"><h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
                <em class="total" style="color: red"><cite>58,889</cite><i>人在追</i></em>
                <h6>意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒，……</h6></div></el-col>
            </el-row></el-main>
            <el-main><el-row :gutter="20">
              <el-col :span="8"><div class="grid-content bg-purple3mid3"><h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
                <em class="total" style="color: red"><cite>58,889</cite><i>人在追</i></em>
                <h6>意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒，……</h6></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple3mid3"><h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
                <em class="total" style="color: red"><cite>58,889</cite><i>人在追</i></em>
                <h6>意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒，……</h6></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple3mid3"><h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
                <em class="total" style="color: red"><cite>58,889</cite><i>人在追</i></em>
                <h6>意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒，……</h6></div></el-col>
            </el-row></el-main>
            <el-main><el-row :gutter="20">
              <el-col :span="12"><div class="grid-content bg-purple3mid4"><div class="hover-box"><div class="book-info"><h3>
                <a href="//book.qidian.com/info/1016509432" data-eid="qd_A172" data-bookid="1016509432" target="_blank">世界树的游戏</a>
              </h3><p style="font-size: 12px;margin-left: 10px">化身异界真神，召唤玩家，建设游戏世界。</p></div><div class="book-img">
                <a href="//book.qidian.com/info/1016509432" target="_blank" data-eid="qd_A171" data-bid="1016218809">
                  <img class="lazy" src="//bookcover.yuewen.com/qdbimg/349573/1016509432/90" data-original="//bookcover.yuewen.com/qdbimg/349573/1016509432/90" alt="世界树的游戏" style="display: inline;width: 60px;height: 80px;padding-top: 10px;color: red;padding-right: 10px"></a>
              </div></div></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple3mid4"><div class="hover-box"><div class="book-info"><h3><a href="//book.qidian.com/info/1016540399" data-eid="qd_A172" data-bookid="1016540399" target="_blank">我的学姐会魔法</a>
              </h3><p style="font-size: 12px;margin-left: 10px">穿越魔法世界，学姐，带带我！</p></div><div class="book-img"><a href="//book.qidian.com/info/1016540399" target="_blank" data-eid="qd_A171" data-bid="1016564253">
                <img class="lazy" src="//bookcover.yuewen.com/qdbimg/349573/1016540399/90" data-original="//bookcover.yuewen.com/qdbimg/349573/1016540399/90" alt="我的学姐会魔法" style="display: inline;width: 60px;height: 80px;padding-top: 10px;color: red;margin-left: 50px"></a>
              </div></div></div></el-col>
            </el-row></el-main>
          </el-container></div></el-col>
          <el-col :span="5"><div class="grid-content bg-purpley3;background: #fefdff"><el-row>
            <el-col :span="12"><div style="margin-top:-20px"><h3>三江·网文新风</h3></div></el-col>
            <el-col :span="10"><div class="grid-content bg-purple-light"><a href=""><h5>更多>></h5></a></div></el-col>
          </el-row><hr><el-table
            :data="bookData"
            style="width: 100%">
            <el-table-column
              prop="type"
              width="70">
            </el-table-column>
            <el-table-column
              prop="name"
              width="100">
            </el-table-column>
            <el-table-column
              prop="zuozhe"
            >
            </el-table-column></el-table></div></el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "type_search",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          bookList: [
            {key: 'hnbc', src: 'https://bookcover.yuewen.com/qdbimg/349573/1015753893/90', desc: '出名太快怎么办'},
            {key: 'xhdz', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016289011/90', desc: '华山剑气'},
            {key: 'shxns', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016457486/90', desc: '重生日本做大叔'},
            {key: 'wjxm', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016340840/90', desc: 'x如何绑定左侧图片名称到此处？x'},
            {key: 'lqtx', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016427988/90', desc: '绿茵传奇'},
            {key: 'fssj', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016565478/90', desc: '捏造飞升世界'},
            {key: 'lgwc', src: 'https://bookcover.yuewen.com/qdbimg/349573/1013293257/90', desc: '舌尖上的罗哥沃茨'}
          ],bookList2: [
            {key: 'hnbc', src: 'https://bookcover.yuewen.com/qdbimg/349573/1015753893/90', desc: '出名太快怎么办'},
            {key: 'xhdz', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016289011/90', desc: '华山剑气'},
            {key: 'shxns', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016457486/90', desc: '重生日本做大叔'},
            {key: 'wjxm', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016340840/90', desc: 'x如何绑定左侧图片名称到此处？x'},
            {key: 'lqtx', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016427988/90', desc: '绿茵传奇'},
            {key: 'fssj', src: 'https://bookcover.yuewen.com/qdbimg/349573/1016565478/90', desc: '捏造飞升世界'},
            {key: 'lgwc', src: 'https://bookcover.yuewen.com/qdbimg/349573/1013293257/90', desc: '舌尖上的罗哥沃茨'}
          ],
          bookData: [{
            type: '[都市]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }, {
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          },{
            type: '[科幻]',
            name: '王小虎',
            zuozhe: '上海市'
          }]
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style>
  #app {
    margin-top: 0px;
  }
  #type_sea {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
  #lay3{
    margin-left: 50px;
    margin-top: 25px;
  }
  .el-header1{
    color: black;
    text-align: center;
    line-height: 0px;
    padding-right: 550px;
  }
  .el-header{
  }
  .el-main {
    color: #333;
    text-align: center;
    margin-top: -30px;
  }

  body > .el-container {
    margin-bottom: 20px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 200px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .bg-purpley3-light{
    margin-top: -10px;
  }
  .bg-purple3mid1{
    background: #c7ccff;
    height: 140px;
    margin-top: 0px;
  }
  .bg-purple3mid2,.bg-purple3mid3{
    height: 150px;
  }
  .bg-purple3mid4{
    height: 100px;
    background: #c9c8dc;
  }
  .bg-purple3mid4:hover{
    box-shadow: 6px 6px 6px rgba(0,0,0,0.3);
  }
  .bg-purple3mid4 a:hover{
    color: red;
  }
  .cf li{
    float:left;
  }
  .book-info,.book-img{
    float: left;
  }

  .filter-search-wrap{
    width: 100%;
    background: darkgray;
  }
  .lbf-combobox-caption{
    float: left;
  }
  li, ol, ul {
    list-style: none outside none;
  }
  a{
    text-decoration:none;
  }
</style>
