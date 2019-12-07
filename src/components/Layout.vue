<template>
  <div class="outertd">
    <div class="yv-header">
      <div class="yv-header-content"><a @click="toNo1">
        <img id="header-img" src="../assets/1.png"></a>
        <div class="input-with-select" style="margin-top: 15px;width:300px;margin-top: -10px;margin-left: 240px">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" style="background-color: crimson;color: aliceblue"
                       @click="searchM(input5)">搜索
            </el-button>
          </el-input>
        </div>
        <div class="wodeshujia" style="margin-top: -10px;margin-left: 100px">
          <a @click="toShujia" target="_blank" data-eid="qd_A14" id="numero2" style="color: black"><img
            src="../assets/w1.png">我的书架</a>
        </div>
        <!--<div class="header-login-regist">
          <div class="header-login"><a @click="toLogin" class="el-icon-user-solid">登录</a></div>
          <div class="header-splid">|</div>
          <div class="header-login"><a @click="toRegist" target="_blank" class="el-icon-user">注册</a></div>
        </div>-->
        <!--档登陆成功后，显示用户名且去掉登录和注册按钮，显示用户名-->
        <div class="header-login-regist">
          <ul v-if="!showname">
            <div class="header-login"><a @click="toLogin" class="el-icon-user-solid">登录</a></div>
            <div class="header-splid">|</div>
              <div class="header-login"><a @click="toRegist" target="_blank" class="el-icon-user">注册</a>
              </div>
          </ul>
          <span v-if="!showname1">欢迎：<a @click="toMyself">振虎总裁</a></span>
          </div>
        </div>

      </div>
    </div>
</template>

<script>

  export default {
    name: "Layout",
    data() {
      return {
        input5: '',
        select: '',
        showname:false,
        showname1:false
      }
    },
    methods: {
      toNo1: function () {
        alert("即将回首页")
        this.$router.push("/indexindex")
      },
      toLogin: function () {
        alert("即将进入登录页面")
        this.$router.push("/login")
      },
      toRegist: function () {
        alert("即将进入注册页面")
        this.$router.push("/regist")
      },
      toShujia: function () {
        alert("即将传送至我的书架")
        this.$router.push("/bookcenter/bookrack")
      },
      /*带参（key:value）到达个人中心*/
      toMyself:function(scop){
        this.$router.push("/myself?uid="+scop)
      },
      searchM: function (scop) {
        // alert(scop);
        this.$router.push('/search?scc=' + scop)
      }
    },
    created: function () {
      this.$emit('public_header', false)
    },
    created: function () {
      this.$emit('public_footer', false)
    },
    mounted() {
      if(1==0){
this.showname=true;
this.showname1=false;
      }else {
        this.showname=false;
        this.showname1=true;
      }
    }
  }
</script>

<style scoped>
  .outertd {
    width: 100%;
    height: 50px;
    margin-top: 50px;
  }

  a:hover {
    cursor: pointer
  }

  .wodeshujia a img {
    float: left;
    padding-left: 20px;
  }

  .yv-header {
    margin-top: -20px;
  }

  #header-img, .input-with-select, .wodeshujia, .header-login, .header-splid {
    float: left;
  }

  #header-img {
    margin-left: 70px;
    margin-top: -25px;
  }

  .header-login-regist {
    margin-top: 30px;
    margin-left: 1080px;
  }

  .wodeshujia a:hover {
    background-color: red;
  }

  .wodeshujia a {
    font: 14px sans-serif;
    display: block;
    width: 118px;
    height: 30px;
    text-align: center;
    padding-top: 10px;
    border: 1px solid #e6e6e6;
  }

  a {
    color: #000;
    text-decoration: none;
    width: 100px;
    height: 22px;
    line-height: 22px;
  }

  a:hover {
    background: #f4f4f4;
    color: red;
  }
</style>
