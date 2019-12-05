<template>
  <div>
    <div class="yv-header">
      <div class="yv-header-content">
        <img id="header-img" src="../assets/1.png" >
        <div class="input-with-select" style="margin-top: 15px;width:300px;margin-top: -10px;margin-left: 300px">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" style="background-color: crimson;color: aliceblue">搜索</el-button>
          </el-input>
        </div>
        <div class="wodeshujia" style="margin-top: -10px;margin-left: 100px">
        <a href="//me.qidian.com/bookCase/bookCase.aspx?caseId=-2" target="_blank" data-eid="qd_A14" id="numero2" style="color: black"><img src="../assets/w1.png">我的书架</a>
        </div>
          <div class="header-login-regist">
            <div class="header-login"><a href="//me.qidian.com/bookCase/bookCase.aspx?caseId=-2" target="_blank">登录</a></div>
          <div class="header-splid">|</div>
            <div class="header-login"><a href="//me.qidian.com/bookCase/bookCase.aspx?caseId=-2" target="_blank">注册</a></div>
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
            select: ''
          }
        },
      created:function () {
        this.$emit('public_header', false)
      },
      created:function () {
        this.$emit('public_footer', false)
      }
    }
</script>

<style scoped>
  .wodeshujia a img{
    float: left;
    padding-left: 20px;
  }
  .yv-header{
    margin-top: -20px;
  }
#header-img,.input-with-select,.wodeshujia,.header-login,.header-splid{
  float: left;
}
#header-img{
  margin-left: 40px;
  margin-top: -25px;
}
.header-login-regist{
  margin-top: 30px;
  margin-left: 1200px;
}
.wodeshujia a:hover{
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
a {color:#000;
  text-decoration:none;
  width:100px; height:22px; line-height:22px;}
a:hover {background:#f4f4f4;
  color:red;}
</style>
