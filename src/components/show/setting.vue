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
                <template slot="title">用户</template>
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
                  <router-link to="/bookmeber ">会员中心</router-link>
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
          <div id="one1">
            <el-tabs type="border-card">
              <el-tab-pane label="基本设置" style="height: 600px">
                <div id="updatename">
                  <p style="color: darkgray">昵称&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p>{{user.name}}</p>
                  <el-button type="text" @click="open" style="float: left;margin-left: 15px;margin-top: 8px">修改昵称</el-button>
                </div>
                <div id="qdid">
                  <p style="color: darkgray;margin-left: -13px">起点ID&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p style="margin-top: 20px">{{user.id}}</p>
                </div>
                <div id="qdrz">
                  <p style="color: darkgray">实名认证&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <router-link to="/kong" style="float: left;margin-top: 17px">查看实名认证信息</router-link>
                </div>
                <div id="qdsex">
                  <p style="color: darkgray">性别&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <template>
                    <el-radio v-model="user.sex" label="1" style="float: left;margin-top: 20px">男</el-radio>
                    <el-radio v-model="user.sex" label="0" style="float: left;margin-top: 20px">女</el-radio>
                  </template>
                </div>
                <div id="qddate" class="block">
                  <p style="color: darkgray">生日&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <el-date-picker
                    v-model="user.birthday"
                    type="date"
                    placeholder="选择日期"
                    style="float: left;margin-top: 5px">
                  </el-date-picker>
                </div>
                <div id="qdcity">
                  <p style="color: darkgray">地区&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <el-dropdown size="medium" split-button type="primary" style="float: left;margin-top: 5px">
                    {{user.city}}
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>西安</el-dropdown-item>
                      <el-dropdown-item>上海</el-dropdown-item>
                      <el-dropdown-item>重庆</el-dropdown-item>
                      <el-dropdown-item>三亚</el-dropdown-item>
                      <el-dropdown-item>天津</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div id="qdjianjie">
                  <p style="color: darkgray">简介&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <el-input
                    type="textarea"
                    placeholder="可以简单的描述自己"
                    v-model="user.myself"
                    maxlength="140"
                    show-word-limit
                    autosize
                    style="width: 500px;float: left;margin-top: 10px;margin-left: 10px"
                  >
                  </el-input>
                </div>
                <button
                  style="color:#fff;background-color: #bf2c24;
                  min-width: 70px;float: left;margin-top: 30px;margin-left: 50px"
                >提交</button>
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
        text: '',
        textarea: '',
        user:{
          name:'游客233333333333333',
          id:'340385082',
          sex:'1',
          birthday:'1970-1-1',
          city:'北京市',
          myself:'牛逼',
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
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
      },
      open() {
        this.$prompt('你只能免费修改一次昵称', '修改昵称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '昵称格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的昵称是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  }
</script>

<style scoped>
  #updatename,#qdid,#qdsex,#qddate,#qdcity,#qdjianjie{
    float: left;
    margin-left: 30px;
    width: 700px;
    height: 50px;
  }
  p{
    float: left;

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

  #one1 {
    background-color: lightgreen;
    width: 800px;
    height: 600px;
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

