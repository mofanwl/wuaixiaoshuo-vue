<template>
  <div id="person">
    <el-menu
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
      <el-menu-item index="4"><a href="#" target="_blank"
                                 style="text-decoration: none;font-size: 18px;margin: 0 8px 0 0">
        <router-link to="/kong">游戏</router-link>
      </a></el-menu-item>
      <el-submenu index="2">
        <template slot="title">用户名</template>
        <el-menu-item index="2-1">
          <router-link to="/kong">充值</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/kong">个人设置</router-link>
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
    </el-menu>
    <div class="details">
      <el-container style="height: 700px; border: 1px solid #eee;">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1" style="background-color: #F7F6F2;">
              <template slot="title">个人中心</template>
              <el-menu-item-group style="background-color: #F7F6F2;">
                <el-menu-item index="1-1">
                  <router-link to="/myself">首页</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="/property">账务中心</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link to="/kong">我的票夹</router-link>
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
              <el-menu-item-group style="background-color: #F7F6F2;">
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
              <el-menu-item-group style="background-color: #F7F6F2;">
                <template slot="title"></template>
                <el-menu-item index="1-10">
                  <router-link to="/kong">会员中心</router-link>
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
          <div id="myzichan">
            <p style="float: left;font-weight: bold;font-size: 25px;height: 12px">我的资产</p>
          </div>
          <div id="one2">
            <div id="qdb">
              <p>账户余额（起点币）</p>
            </div>
            <div id="one_per" class="center">
              <p style="font-size: 50px;float: left;margin-top: -11px;margin-left: 20px">{{user.money}}</p>
              <router-link to="/kong" style="float: right">充值</router-link>
            </div>
            <div id="one_qd">
              <p style="float: left;margin-left: 20px">含0增币&nbsp;&nbsp;</p>
              <router-link to="/kong" class="el-icon-question" style="float: left;margin-top: 18px"></router-link>
            </div>
          </div>
          <div id="myjiaoyi">
            <p style="float: left;font-weight: bold;font-size: 25px;height: 12px">交易记录</p>
            <p style="float: left;margin-top: 33px">&nbsp;&nbsp;交易记录可能存在延时，仅供参考，请以实际金额变化为准</p>
          </div>
          <div id="two">
            <el-tabs type="border-card">
              <el-tab-pane label="充值记录" style="height: 400px">
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-container>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        user:{
          name:'游客233333333333333',
          money:'0',
        }
      };
    },
    mounted(){
      _this = this;
      axios.get("").then(function (res) {
        _this.user = res.data.list;
      })
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  }
</script>

<style scoped>
  #one_qd{
    float: left;
    margin-top: -5px;
    width: 800px;
    height: 35px;
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
  #one_per{
    width: 800px;
    height: 36px;
    float: left;
    margin-top: 10px;
  }
  #qdb{
    float: left;
    height: 35px;
    margin-left: 25px;
  }
  #myjiaoyi{
    float: left;
    width: 800px;
    height: 60px;
    margin-left: 20px;
    margin-top: -10px;
  }
  #myzichan{
    float: left;
    height: 60px;
    margin-left: 20px;
    margin-top: -10px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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
  #person {
  }

  .center a {
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

  .details {
    background-color: #F7F6F2;
    width: 990px;
    height: 700px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -495px;
  }

  #one2 {
    background: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2124757487,2986057549&fm=26&gp=0.jpg");
    width: 800px;
    height: 135px;
    margin-top: 50px;
    position: relative;
  }
  #two{
    background-color: darkorchid;
    width: 800px;
    height: 500px;
    margin-top: 60px;
  }
</style>

