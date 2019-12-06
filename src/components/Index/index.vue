<template>
  <div id="zhuye">
    <div id="lay1">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"><el-row :gutter="20">
          <el-col :span="1"><div class="grid-content bg-purple bg-purple0"></div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple bg-purple1"><b class="el-icon-menu">作品分类</b></div></el-col>
          <el-col :span="14"><div class="grid-content bg-purple bg-purple2" style="margin-left: -15px;margin-right: 50px"><el-row>
            <el-col :span="4"><div class="grid-content bg-purpley"><a @click="quanbu"><b>全部作品</b></a></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purpley-light"><a><b>排行</b></a></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purpley"><a><b>完本</b></a></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purpley-light"><a><b>免费</b></a></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purpley"><a class="el-icon-s-custom"><b>作家专区</b></a></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purpley-light"><a class="el-icon-mobile"><b>客户端</b></a></div></el-col>
          </el-row></div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple bg-purple00" style="margin-left: -60px"><el-dropdown>
            <el-button type="primary">
              <b class="el-icon-s-platform">页游</b>|<b class="el-icon-mouse">手游</b><i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的英雄学院<br><img src="https://img0.qidian.com/upload/gamesy/2019/10/31/20191031101327vpge5vigfl.jpg" style="width: 150px;height: 50px"></el-dropdown-item>
              <el-dropdown-item>最强王者<br><img src="https://img0.qidian.com/upload/gamesy/2019/10/31/20191031101327vpge5vigfl.jpg" style="width: 150px;height: 50px"></el-dropdown-item>
              <el-dropdown-item>霸王雄心<br><img src="https://img0.qidian.com/upload/gamesy/2019/10/31/20191031101327vpge5vigfl.jpg" style="width: 150px;height: 50px"></el-dropdown-item>
              <el-dropdown-item>烟雨江湖<br><img src="https://img0.qidian.com/upload/gamesy/2019/10/31/20191031101327vpge5vigfl.jpg" style="width: 150px;height: 50px"></el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown></div></el-col>
        </el-row></div></el-col>
      </el-row>
    </div>
    <div id="lay2">
      <el-row :gutter="22">
        <el-col :span="5" ><div class="grid-content bg-purpley2 bg-purpley2left" style="margin-left: 15px" >

          <!--<el-row>-->
          <!--遍历拿到所有类型的数据信息-->
          <div v-for="(items,index) in tableData">
            <el-col :span="12">
              <div class="grid-content bg-purple-light21"  @click="findType(items.type_id)">
                  <cite><img :src=items.type_img style="margin-top: 5px"/>
                    <span class="info">
            <i>{{items.type_name}}</i><b>{{items.type_col}}</b>
          </span>
                  </cite>
              </div>
            </el-col></div>
          <!--<el-col :span="12"><div class="grid-content bg-purple-light21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q2.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>奇幻</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--</el-row>-->
          <!--<el-row>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q3.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>武侠</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q4.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>仙侠</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--</el-row><el-row>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple-light21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q5.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>都市</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple-light21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q6.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>现实</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--</el-row><el-row>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q7.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>军事</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q8.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>历史</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--</el-row><el-row>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple-light21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q9.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>游戏</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple-light21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q10.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>体育</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--</el-row><el-row>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q11.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>科幻</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q12.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>悬疑</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--</el-row><el-row>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple-light21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q13.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>女生网</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--<el-col :span="12"><div class="grid-content bg-purple-light21"><a href="/xuanhuan" target="_blank" data-eid="qd_A71"><cite><img src="../../assets/q14.png" style="margin-top: 5px"/>-->
          <!--<span class="info"><i>轻小说</i><b>721722</b></span></cite></a></div></el-col>-->
          <!--</el-row>-->
        </div></el-col>
        <el-col :span="13"><div class="grid-content bg-purpley2mid"><el-container>
          <el-header><div class="block">
            <span class="demonstration"></span>
            <el-carousel trigger="click" height="220px">
              <el-carousel-item v-for="item in carouselList" :key="item.key">
                <img :src="item.src" style="width: 700px;height: 235px">
                <h3>{{item.desc}}</h3>
              </el-carousel-item>
            </el-carousel>
          </div></el-header>
          <el-main style="overflow-x:hidden"><el-row>
            <el-col :span="8"><div class="grid-content bg-purple3" style="height: 170px"><img src="https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/7eaa8bd8fc72d4f536c17be887df8238.png"/></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple3" style="height: 170px;background: azure"><img src="https://img2.qidian.com/upload/gamesy/2019/11/05/20191105172857rg5gdsfwzb.png"/></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple3" style="height: 170px"><img src="https://qidian.qpic.cn/qidian_common/349573/bd326aea6e0a7ca656ed6a4011745b90/0"/></div></el-col>
          </el-row></el-main>
        </el-container></div></el-col>
        <el-col :span="5"><div class="grid-content bg-purpley2 bg-purpley2right"><div class="notice" id="notice" data-l1="7"><a class="more" id="more-notice" href="//www.qidian.com/news/index" target="_blank" data-eid="qd_A190">
          <em class="dib-wrap point"><span></span><span></span><span></span></em><i></i></a><h4><a href="https://acts.qidian.com/2019/6612247/index.html" target="_blank" data-eid="qd_A93"><div style="color: black">网络文学优秀作品联展</div></a></h4><div class="notice-list">
          <ul><li class="color-type_0">
            <a href="http://www.qidian.com/news/detail/072952497" target="_blank" data-eid="qd_A94"><p align="left">[公告]PC本章说功能优化</p></a><li class="color-type_0" data-rid="2">
            <a href="http://tv.cctv.com/2019/11/20/VIDEOMNc0CmxDaKAwvksHSxq191120.shtml?spm=C31267.PFsKSaKh6QQC.S71105.17" target="_blank" data-eid="qd_A95"><p align="left">[资讯]干涉中国内政必将徒劳</p></a></li><li class="color-type_0" data-rid="3">
            <a href="http://tv.cctv.com/2019/11/20/VIDEF05DX353aFt5N3AyMuG4191120.shtml?spm=C31267.PFsKSaKh6QQC.S71105.16" target="_blank" data-eid="qd_A96"><p align="left">[资讯]新华社评论员文章</p></a></li><li class="color-type_0" data-rid="4">
            <a href="http://tv.cctv.com/2019/11/20/VIDEUTLO0s9MLcDLWqMMkEo2191120.shtml?spm=C31267.PFsKSaKh6QQC.S71105.15" target="_blank" data-eid="qd_A97"><p align="left">[资讯]人民日报评论员文章</p></a></li><li class="color-type_0 color-type_01" data-rid="5">
            <a class="red" href="http://cpgame.qd.game.qidian.com/Home/Index/directLogin/name/syfml/way/1?qd_game_key=syfml-7&amp;qd_dd_p1=43754" target="_blank" data-eid="qd_A98" data-qd_dd_p1="1"><p align="left" style="margin-left: -10px"><em>页游</em>圣域伏魔录</p></a></li><li class="color-type_0 color-type_01" data-rid="6">
            <a class="red" href="http://cpgame.qd.game.qidian.com/Home/Index/directLogin/name/lqtx/way/1?qd_game_key=lqtx-7&amp;qd_dd_p1=41313" target="_blank" data-eid="qd_A99" data-qd_dd_p1="1"><p align="left" style="margin-left: -10px"><em>页游</em>机甲之平行三国</p></a></li></ul></div>
          <div class="attention"><div class="iconfont" style="color: red"><b>广播：</b></div><marquee direction="left" behavior="scroll" scrollamount="4" loop="0" onmouseover="this.stop()" onmouseout="this.start()"><span>鲸胃填海打赏<a href="//book.qidian.com/info/1016733058" target="_blank">仙界黑客</a>100W点，【成为该书白银大盟】</span>
          </marquee></div></div></div><div><img src="../../assets/gg.jpg" style="height: 90px;width: 250px;margin-top: 40px"/></div></el-col>
      </el-row>
    </div>
    <br><br>
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

        <el-col :span="13"><div class="grid-content bg-purpley3-light"><div class="el-header1"><h3>编辑推荐</h3></div><br><hr><el-container>
          <el-header>
            <h3>风陵渡口初相遇，一见杨过误终身。</h3>
          </el-header>
          <el-main><el-row>
            <!--  <el-button v-popover:popover1>hover 激活</el-button>-->
            <el-col :span="11"><div class="grid-content bg-purple3mid"><el-carousel @change="change()"  :interval="4000" type="card" height="125px">
              <el-carousel-item v-for="(item,index) in bookList" :ref="index"  :key="item.key">
                <img :src="item.src" style="width: 93px;height: 124px" :title="item.desc" >

              </el-carousel-item>
            </el-carousel></div></el-col>
            <el-col :span="13"><div class="grid-content bg-purple3mid1" style="color: red"><el-carousel  name="second"  height="125px">
              <el-carousel-item v-for="(item,index) in bookList" :key="item.key">
                <h3>{{item.desc}}</h3><br>怎么大风越吹，我心越荡
              </el-carousel-item>
            </el-carousel>
            </div></el-col>
          </el-row></el-main>
          <el-main><div class="haha" v-for="(items,index) in suiJi.slice(1,7)">
            <div class="grid-content bg-purple3mid2" style="width: 202px;margin-left: 10px;float: left;overflow-y:hidden">
              <h4><div class="total1"><a href="//book.qidian.com/info/1016218809" target="_blank" style="color: black">{{items.books_name}}</a></div></h4>
              <div class="total" style="color: red;margin-top: -10px"><cite>{{items.books_count}}</cite><i>人在追</i></div>
              <h6 style="margin-top: 1px"><p align="left">{{items.books_describe}}</p></h6>
            </div>

            <!--<el-col :span="8"><div class="grid-content bg-purple3mid3"><h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
              <em class="total" style="color: red"><cite>58,889</cite><i>人在追222</i></em>
              <h6>{{items.books_describe}}</h6></div></el-col>-->

          </div></el-main>
         <!-- <el-main><el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple3mid3"><h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
              <em class="total" style="color: red"><cite>58,889</cite><i>人在追</i></em>
              <h6>意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒，……</h6></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple3mid3"><h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
              <em class="total" style="color: red"><cite>58,889</cite><i>人在追</i></em>
              <h6>意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒，……</h6></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple3mid3"><h4><a href="//book.qidian.com/info/1016218809" data-eid="qd_A110" data-bid="1016218809" target="_blank" style="color: black">穿越到电影世界</a></h4>
              <em class="total" style="color: red"><cite>58,889</cite><i>人在追</i></em>
              <h6>意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒，……</h6></div></el-col>
          </el-row></el-main>-->
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
    <div id="lay4"><div class="filter-search-wrap" data-l1="21">
      <div class="box-center cf">
        <div class="filter-search-box fl">
          <div class="title fl">没有找到？试试这里</div>
          <div class="filter-search fl">
            <div class="lbf-combobox classify" id="classify"><a href="javascript:;" class="lbf-button lbf-combobox-label" data-value="21" hidefocus="true">
              <span class="lbf-combobox-caption" @click="selectFl(scope.row)">玄幻</span>
              <span class="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
            </a></div><div class="lbf-combobox" id="serial">
            <a href="javascript:;" class="lbf-button lbf-combobox-label" data-value="0" hidefocus="true">
              <span class="lbf-combobox-caption">连载</span><span class="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
            </a></div><div class="lbf-combobox" id="charge">
            <a href="javascript:;" class="lbf-button lbf-combobox-label" data-value="0" hidefocus="true">
              <span class="lbf-combobox-caption">免费</span>
              <span class="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
            </a></div><div class="lbf-combobox words" id="words">
            <a href="javascript:;" class="lbf-button lbf-combobox-label" data-value="5" hidefocus="true">
              <span class="lbf-combobox-caption">200万以上</span>
              <span class="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
            </a></div><div class="lbf-combobox tags" id="tags">
            <a href="javascript:;" class="lbf-button lbf-combobox-label" data-value="全部标签" hidefocus="true">
              <span class="lbf-combobox-caption">全部标签</span>
              <span class="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
            </a></div><a id="btn-filter-search" class="red-btn" href="javascript:" target="_blank" data-eid="qd_A167">按条件找书</a>
          </div></div><div class="everyone fl" data-eid="qd_A147"><p class="title fl">大家都在搜</p>
        <div class="key-words fl"><a href="http://www.qidian.com/all?size=4&amp;chanId=21&amp;action=0" target="_blank" data-eid="qd_A168">玄幻+连载+100万~200万</a>
          <a href="http://www.qidian.com/all?chanId=4&amp;action=0&amp;vip=1" target="_blank" data-eid="qd_A168">都市+连载+vip</a></div>
      </div></div></div></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    data() {
      return {
        /*空集合数组，准备接受Axios根据模糊查询请求来的对象数据*/
        suiJi: [
          {books_id:1,books_name:'小说',books_vip:1,books_type:1,books_url:'123',books_pic:'123',books_author:'强哥的猫',books_describe:'我们一起学猫叫，一起喵喵喵',books_count:21.3,books_status:1,books_lianzai:1}
        ],
        /*空集合数组，准备接受Axios请求来的对象数据*/
        tableData: [
          {type_id:1,type_name:'武侠',type_img:'12122',type_col:'121212'}
        ],
        fenleiDate:[],
        carouselList: [
          {key: 'hnbc', src: 'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/c666111488a50565ab32f6cd1edc45c4.jpg', desc: '海纳百川'},
          {key: 'xhdz', src: 'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/b1b490b22ec041c9706dbde4bf1ba322.jpg', desc: 'xxxx'},
          {key: 'shxns', src: 'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/8aa76339246aa8b518c2af718fb69fa8.jpg', desc: 'xxxx'},
          {key: 'wjxm', src: 'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/e51c738c1fc47d174b894a90771dcd71.jpg', desc: 'xxxx'},
          {key: 'lqtx', src: 'https://img0.qidian.com/upload/gamesy/2019/09/27/20190927173424sgxfmlrqav.jpg', desc: 'xxxx'}
        ],
        bookList: [
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
        }],
        ref:""
      }

    },
    methods:{
      /*左侧分类栏接口*/
      //查询全部,不带分页
      findAll:function () {
        var  _this = this;
        axios.get("api/book/booktype").then(function (res) {
          console.log(res.data)
          _this.tableData=  res.data;
        })
      },
      /*通过类别Id查对应类别所有数据*/
      findType:function(scop){
        // alert(scop);
        this.$router.push("/type_search?id="+scop)
      },
      quanbu:function(){
        alert("即将前往全部作品页，请系好安全带")
        this.$router.push("/oeuvre")
      },
      change:function (par) {
        //alert(par)
        // setActiveItem()
      }/*,
      setActiveItem:function (par) {
        alert(par)
      }*/
    },
    mounted(){
      this.findAll();
      axios.get("api/book/selectAll").then(res=>{
        //alert(this.$route.query.scc)
        console.log(res.data)
        //res.data.books_type=3?'奇幻':'武侠'
        this.suiJi=res.data;
      })
    }
  };
</script>

<style>
  a,.bg-purple-light21:hover{
    cursor:pointer
  }
  #zhuye{
    left:0;
    right:0;
  }
  #lay1{
    /*padding-top: 30px;*/
  }
  .bg-purple1,.bg-purple2{
    background: #161415;
  }
  .bg-purpley2mid{
    background: aliceblue;
    height: 370px;
  }
  .bg-purple-dark {
    background: #302a2c;
  }
  .bg-purpley:hover,.bg-purpley-light:hover{
    background: #2B2B2B;
    box-shadow: 6px 6px 6px rgba(0,0,0,0.3);
  }
  .bg-purpley a,.bg-purpley-light a{
    color: ghostwhite;
  }
  .bg-purple00,.bg-purple1{
    color: aliceblue;
  }

  #lay2{
    margin-left: 50px;

  }
  .bg-purpley2{
    background:#dde4ec;
    height: 450px;
  }
  .bg-purpley2right{
    height: 350px;
  }
  .info{
    font-size: 14px;
    color: black;
  }
  .bg-purple21:hover,.bg-purple-light21:hover{
    box-shadow: 12px 12px 12px rgba(0,0,0,0.3);
    margin-right: 20px;
    padding-right: 20px;
    background: #494b4b;
  }
  .bg-purple21 .info:hover,.bg-purple-light21 .info:hover{
    color: aliceblue;
  }
  .bg-purple3:hover{
    box-shadow: 6px 6px 6px rgba(0,0,0,0.3);
    background: #fefdff;
  }
  .bg-purple-light21{
    background: #f4f5f3;
    height: 60px;
  }
  .bg-purple21{
    background: #e4e5e3;
    height: 60px;
  }
  .notice{
    border: gray 1px;
    background: #fefdff;
    margin-top: -10px;
  }
  .bg-purple3{
    margin-top: 200px;
    background: #fff6fc;
    width:258px;
    margin-left: -22px;
    margin-right: 50px;
  }
  .block{
    margin-top: 10px;
    background: gainsboro;
    width: 683px;
    height: 235px;
    margin-left: -20px;
  }
  .grid-content {
    min-height: 35px;
    padding-top: 2px;
  }
  .color-type_0 a{
    color: black;
    font-size: 16px;
  }
  .color-type_01{
    padding-left: 10px;
  }
  .red em{
    font: 14px sans-serif;
    display: block;
    width: 50px;
    height: 20px;
    text-align: center;
    background-color: red;
    color: ghostwhite;
    border: 1px solid #e6e6e6;
  }
  a{
    text-decoration:none;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  #lay3{
    margin-left: 50px;
    margin-top: -25px;
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
    background: #fcffe0;
    height: 140px;
    margin-top: 0px;
  }
  .bg-purple3mid2,.bg-purple3mid3{
    height: 200px;
    margin-top: 15px;
    background: #fff8f9;
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
  .filter-search{
    margin-left: 300px;
  }

</style>
