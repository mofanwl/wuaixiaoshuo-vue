<template>
  <div id="person">
    <!--<el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" style="padding-left:750px">
      <el-menu-item index="1" style="font-size: 18px;margin: 0 8px 0 0">
        <router-link to="/myself">我的首页</router-link>
      </el-menu-item>
      <el-menu-item index="2" style="font-size: 18px;margin: 0 8px 0 0">
        <router-link to="/kong">我的书架</router-link>
      </el-menu-item>
      <el-menu-item index="3" style="font-size: 18px;margin: 0 8px 0 0">
        <router-link to="/kong">消息中心</router-link>
      </el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank" style="text-decoration: none;font-size: 18px;margin: 0 8px 0 0">
        <router-link to="/kong">游戏</router-link>
      </a></el-menu-item>
      <el-submenu index="2">
        <template slot="title">用户名</template>
        <el-menu-item index="2-1">
          <router-link to="/bookpay">充值</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/setting">个人设置</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/myself">我的主页</router-link>
        </el-menu-item>
        <el-menu-item index="2-4">
          <router-link to="/kong">客服中心</router-link>
        </el-menu-item>
        <el-menu-item index="2-5">
          <router-link to="/kong">退出</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>-->


    <div class="center_header">
      <div class="center_wrapper">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#3E3D43"
          text-color="#FFFFFF"
          active-text-color="#FFFFFF">
          <el-row :gutter="0">
            <el-col :span="4">
              <img src="http://q1bj8tdy9.bkt.clouddn.com/gerenlogo.png"/>
            </el-col>
            <el-col :span="3" :offset="0">
              <router-link to="/myself"><el-menu-item index="1"><i class="el-icon-s-home"></i>我的首页</el-menu-item></router-link>
            </el-col>
            <el-col :span="3" :offset="0">
              <router-link to="/bookcenter/bookrack"><el-menu-item index="1"><i class="el-icon-s-management"></i>我的书架</el-menu-item></router-link>
            </el-col>
            <el-col :span="3" :offset="0">
              <el-menu-item index="1"><i class="el-icon-message-solid"></i>消息中心</el-menu-item>
            </el-col>
            <el-col :span="3" :offset="0">
              <a href="http://game.qidian.com/"><el-menu-item index="1"><i class="el-icon-coordinate"></i>游戏</el-menu-item></a>
            </el-col>
            <el-col :span="2.5" :offset="0">
              <router-link to="/indexindex"><el-menu-item index="1">起点首页</el-menu-item></router-link>
            </el-col>
            <el-col :span="5" :offset="0">
              <el-submenu index="2">
                <template slot="title">{{user_name}}</template>
                <router-link to="/bookpay"><el-menu-item index="2-1">充值</el-menu-item></router-link>
                <router-link to="/setting"><el-menu-item index="2-2">个人设置</el-menu-item></router-link>
                <router-link to="/myself"><el-menu-item index="2-3">我的主页</el-menu-item></router-link>
                <el-menu-item index="2-4">客服中心</el-menu-item>
                <el-menu-item index="2-5">退出</el-menu-item>
              </el-submenu>
            </el-col>

          </el-row>
        </el-menu>
      </div>
    </div>




    <div class="details">
    <el-container style="height: 700px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">个人中心</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/myself">首页</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/property">账务中心</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/bookmeber">会员中心</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link to="/kong">我的红包</router-link>
            </el-menu-item>
            <el-menu-item index="1-5">
              <router-link to="/kong">我的书评</router-link>
            </el-menu-item>
            <el-menu-item index="1-6">
              <router-link to="/kong">我的本章说</router-link>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="1-7">
              <router-link to="/kong">经验值</router-link>
            </el-menu-item>
            <el-menu-item index="1-8">
              <router-link to="/kong">任务</router-link>
            </el-menu-item>
            <el-menu-item index="1-9">
              <router-link to="/kong">徽章/称号/认证</router-link>
              </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="1-10">
              <router-link to="/kong">票夹</router-link>
            </el-menu-item>
            <el-menu-item index="1-11">
              <router-link to="/kong">安全中心</router-link>
            </el-menu-item>
            <el-menu-item index="1-12">
              <router-link to="/kong">作家专区</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
      <div>
      <div id="one">
        <div id="one_img" class="demo-fit">
          <div class="block" v-for="fit in fits" :key="fit">
            <router-link to="/portrait">
            <el-avatar shape="circle" :size="120" :fit="fit" :src="url"></el-avatar>
            </router-link>
          </div>
        </div>
        <div id="one_name">
          <p style="margin-top: -20px">用户:{{user_name}}</p>
          <p style="margin-top: -20px">会员到期时间:{{date}}</p>
        </div>
        <div id="one_per" class="center">
          <router-link to="/kong">个人主页</router-link>
        </div>
        <div id="one_set">
          <router-link to="/setting" class="el-icon-setting"></router-link>
        </div>
        <div id="safety" class="block">
          <span class="demonstration"></span>
          <el-slider v-model="value5" disabled style="width: 100px"></el-slider>
        </div>
        <div id="sign">
          <el-badge :value="12" class="item">
            <el-button size="small">
              <router-link to="/kong">关注</router-link>
            </el-button>
          </el-badge>
          <el-badge :value="3" class="item">
            <el-button size="small">
              <router-link to="/kong">粉丝</router-link>
            </el-button>
          </el-badge>
          <el-badge :value="3" class="item">
            <el-button size="small">
              <router-link to="/kong">大神之光</router-link>
            </el-button>
          </el-badge>
        </div>
      </div>
      <div id="two">
        <div class="rechange">
          <p style="margin-top: 30px">账户余额</p>
          <p>{{money}}&nbsp;&nbsp;起点币</p>
          <el-divider></el-divider>
          <router-link to="/bookpay">充值</router-link>
        </div>
        <div class="ticket">
          <p style="margin-top: 30px">我的票夹</p>
          <p>{{money}}&nbsp;&nbsp;月票</p>
          <el-divider></el-divider>
          <router-link to="/kong">立即查看</router-link>
        </div>
        <div class="collect">
          <p style="margin-top: 30px">我的书架</p>
          <p>{{money}}&nbsp;&nbsp;本藏书</p>
          <el-divider></el-divider>
          <router-link to="/kong">立即查看</router-link>
        </div>
        <div class="attention">
          <p style="margin-top: 30px">我的书单</p>
          <p>{{money}}&nbsp;&nbsp;个关注</p>
          <el-divider></el-divider>
          <router-link to="/kong">立即查看</router-link>
        </div>
      </div>
      </div>
    </el-container>
    </div>
  </div>
</template>

<script>
  import {setCookie,getCookie} from '../../assets/js/cookie'
  import axios from 'axios'
  export default {
    data() {
      return {
        fits: ['fill'],
        //url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        activeIndex: '1',
        activeIndex2: '1',
        user_name:'lisi',
        user_id:'',
        data:'',
        money:''
        /*user:{
          name:'',
          money:'0',
        }*/
      };
    },

    methods: {
      selMoney(){
       // alert(this.user_id)
        axios.get("api/user/selMoney/"+this.user_id).then(res => {
         // alert(this.user_id)
          //alert(res.data.user_total_mount)
         // alert(res.data.user_vip_time)
          setCookie('user_vip_time',res.data.user_vip_time);
          setCookie('user_total_mount',res.data.user_total_mount);
          //alert()
        })
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){

      //let vip = getCookie('vip');


      let user_id = getCookie('user_id');
      this.user_id=user_id
      let user_name = getCookie('user_name');
      let user_portrait = getCookie('user_portrait');
      let user_total_mount = getCookie('user_total_mount');
      let user_vip_time = getCookie('user_vip_time');
      this.user_name=user_name
      this.money=user_total_mount
      this.url=user_portrait
      this.date=user_vip_time
      this.selMoney();


      //_this = this;
      /* axios.get("").then(function (res) {
         this.user = res.data.list;
       })*/
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
  .attention{
    float: left;
    background-color: aliceblue;
    width: 200px;
    height: 100%;
  }
  .collect{
    float: left;
    background-color: aliceblue;
    width: 200px;
    height: 100%;
  }
  .ticket{
    float: left;
    background-color: aliceblue;
    width: 200px;
    height: 100%;
  }
  .rechange{
    float: left;
    background-color: aliceblue;
    width: 200px;
    height: 100%;
  }
  .item {
    float: left;
    margin-top: 10px;
    margin-right: 30px;
  }
  #person{
  }
  #sign{
    width: 300px;
    height: 50px;
    float: left;
    margin-top: 20px;
    margin-left: -150px;
  }
  #safety{
    width: 100px;
    height: 40px;
    float: left;
    margin-top: -20px;
    margin-left: 100px;
  }
  .center a{
    text-decoration: none;
    float: left;
    font-size: 14px;
    width: 102px;
    height: 34px;
    margin-right: 10px;
    line-height: 34px;
    text-align: center;
    color: #fff;
    background-color: #bf2c24;
  }
  .details{
    width: 990px;
    height: 700px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -495px;
}
  #one{
    background: url("../../assets/userbjt.jpg");
    width: 800px;
    height: 220px;
  }
  #one_img{
    background-color: darkgray;
    width: 120px;
    height: 120px;
    margin-top: 80px;
    margin-left: 50px;
    border-radius: 100%;
    float: left;
  }
  #one_name{
    font-size: 150%;
    width: 300px;
    height: 40px;
    float: left;
    margin-top: 60px;
    margin-left: 15px;
  }
  #one_per{
    background-color: darkorange;
    width: 90px;
    height: 30px;
    border-radius: 40%;
    float: left;
    margin-top: 100px;
    margin-left: 140px;
  }
  #one_set{
    background-color: darkorange;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    float: left;
    margin-top: 100px;
    margin-left: 20px;
  }
  #two{
    background-color: darkorchid;
    width: 800px;
    height: 180px;
    margin-top: 10px;
  }




  .el-menu-item, .el-submenu__title {
    height: 74px;
    line-height: 74px;
    position: relative;
    -webkit-box-sizing: border-box;
    white-space: nowrap;
    list-style: none;
  }


  .center_wrapper {
    overflow: hidden;
    width: 990px;
    height: 74px;
    margin: 0 auto;
  }

  .center_header {
    position: relative;
    z-index: 2;
    min-width: 990px;
    height: 74px;
    color: #fff;
    background: #3e3d43;
  }
</style>

