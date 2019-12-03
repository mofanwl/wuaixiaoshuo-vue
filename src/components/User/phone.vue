<template>
  <div class="login-container">
    <el-form :model="user" :rules="user"
             status-icon
             ref="ruleForm2"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">用户登录</h3>
      <el-form-item prop="tel">
        <el-input v-model="user.user_name" auto-complete="off" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item prop="pass">
        <el-input type="password" v-model="user.user_pwd" auto-complete="off" placeholder="输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="user.user_pwd" auto-complete="off" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item prop="tel">
        <el-input v-model="user.user_phone" auto-complete="off" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="smscode" class="code">
        <el-input v-model="user.user_yzm" placeholder="验证码"></el-input>
        <el-button type="primary" :disabled='isDisabled' @click="sendCode">{{buttonText}}</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()" style="width:100%;">注册</el-button>
        <el-link   @click="gotoLogin" target="_blank">已有账号？立即登录</el-link>
      </el-form-item>

    </el-form>
  </div>
</template>



<script>
  import axios from "axios"
  export default {
    data(){
      return {
        logining: false,
        user: {},
       /* user: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        }*/
        checked: false,
        buttonText: '发送验证码',
        isDisabled: false, // 是否禁止点击发送验证码按钮
        flag: true
      }
    },
    methods: {
      // <!--提交注册-->
      submitForm:function () {
        axios.post("api/user/insert",this.user).then(res=>{
          //alert(+"--"+res.data.tishi);
          if("zcok"==res.data.ins_cg){
            alert("注册成功！");
          }else if("zcno"==res.data.ins_cg){
            alert("注册失败！");
          }else if("phoneok"==res.data.ins_cg){
            alert("手机号已存在！");
          }else if("yzmno"==res.data.ins_cg){
            alert("验证码错误！");
          }else if("userno"==res.data.ins_cg){
            alert("此用户名已存在！");
          }
        })

      },
      regist:function () {
        this.$router.push("/regist")

      },
      // <!--进入登录页-->
      gotoLogin() {
        this.$router.push({
          path: "/login"
        });
      }
    }
  };
</script>

<style scoped>
  .login-container {
    width: 100%;
    height: 100%;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login:hover {
    color: #2c2fd6;
  }
  .code >>> .el-form-item__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .code button {
    margin-left: 20px;
    width: 140px;
    text-align: center;
  }
  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }
</style>
