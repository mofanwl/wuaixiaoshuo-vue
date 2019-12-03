<template>
  <div class="login-container">
    <el-form :model="user" :rules="user"
             status-icon
             ref="ruleForm2"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">手机号登录</h3>
      <el-form-item prop="tel">
        <el-input v-model="user.user_phone" auto-complete="off" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="smscode" class="code">
        <el-input v-model="user.user_yzm" placeholder="验证码"></el-input>
        <el-button type="primary" :disabled='isDisabled' @click="sendCode">{{buttonText}}</el-button>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="loginSubmit()" :loading="logining">登录</el-button>
        <el-link @click="yzm()" target="_blank">用户名登陆 |</el-link>
        <el-link  @click="regist()" target="_blank">用户注册</el-link>
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
        user: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
        checked: false,
        buttonText: '发送验证码',
        isDisabled: false, // 是否禁止点击发送验证码按钮
        flag: true
      }
    },
    methods: {
      //用户登录
      loginSubmit:function () {
        axios.post("api/user/logintel",this.user).then(res=>{
          // alert(res.data.dlyz);
          //alert(res.data.tishi);
          if("yzmnok"==res.data.fh_cg){
            alert("登录成功！")
          }else if("nophone"==res.data.fh_cg){
            alert("手机号不存在，请先注册")
          }else if("yzmno"==res.data.fh_cg){
            alert("验证码错误")
          }
        })

      },
      //注册
      regist:function () {
        this.$router.push("/regist")
      },
      //用户名
      yzm:function () {
        this.$router.push("/login")
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
  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
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
</style>
