<template>
  <div class="box-center">
    <div class="login-area-wrap cf">
      <div class="login-op-img fl">
        <img src="../../assets/loginBg.jpg"/>
      </div>

      <div class="login-wrap type-10 fl">
        <div class="login-container">
          <el-form :model="user" :rules="user"
                   status-icon
                   ref="ruleForm2"
                   label-position="left"
                   label-width="0px"
                   class="demo-ruleForm login-page">
            <h3 class="title">找回密码</h3>
            <el-form-item prop="tel">
              <el-input v-model="user.user_name" auto-complete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input type="password" v-model="user.user_pwd" auto-complete="off" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input type="password" v-model="user.user_pwds" auto-complete="off" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
              <el-button type="primary" style="width:100%;" @click="loginSubmit()" :loading="logining">重置密码</el-button>
              <el-link @click="yzm()" target="_blank">用户名登陆 |</el-link>
              <el-link  @click="regist()" target="_blank">用户注册</el-link>
            </el-form-item>

          </el-form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from "axios"
  const TIME_COUNT = 4 // 倒计时的时间
  export default {
    data(){
      return {
        logining: false,
        user: {}
        /* user: {
           username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
           password: [{required: true, message: '请输入密码', trigger: 'blur'}]
         }*/,
        checked: false,
        buttonText: '发送验证码',
        isDisabled: false, // 是否禁止点击发送验证码按钮
        flag: true,

        //验证码
        loginForm: {
          mobile: '',
          code: ''
        },
        show: true,
        count: '发送验证码',
        timer: null
      }
    },
    methods: {
      //验证码
      getCode (formData) {
        // 验证码倒计时
        if (!this.timer) {
          alert("发送。。。");
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
              this.count="发送验证码"
            }
          }, 1000)
        }
      },
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
    margin: 22px auto;
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


  .box-center {
    width: 1200px;
    margin: 0 auto;
  }
  .login-area-wrap {
    position: relative;
    z-index: 1;
    padding: 100px 0;
    min-height: 430px;
  }
  .login-op-img {
    position: relative;
    z-index: 1;
    width: 534px;
    height: 400px;
    padding-left: 110px;
    margin-right: 78px;
  }
  .login-wrap {
    position: relative;
    z-index: 1;
    width: 398px;
    min-height: 400px;
    background: white;
    /*border: 1px solid #E6E6E6;*/
  }
  .fl {
    float: left;
  }


  .login-container {
    width: 100%;
    height: 100%;
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
  /*验证码*/
  .pr {
    position: relative;
  }
  .code-btn {
    width: 100px;
    height: 24px;
    position: absolute;
    top: 10px;
    right: 5px;
    z-index: 222;
    color: #409EFF;
    font-size: 14px;
    border: none;
    border-left: 1px solid #bababa;
    padding-left: 10px;
    background-color: #fff;
  }

</style>
