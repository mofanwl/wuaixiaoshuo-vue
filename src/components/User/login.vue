<template>
  <div class="box-center">
    <div class="login-area-wrap cf">
      <div class="login-op-img fl">
        <img src="../../assets/loginBg.jpg"/>
      </div>

      <div class="login-wrap type-10 fl">
        <div class="login-container">
          <el-form :model="user" :rules="loginRules"status-icon ref="user" label-position="left" label-width="0px" class="demo-ruleForm login-page">
            <h3 class="title">用户登录</h3>
            <el-form-item prop="user_name">
              <el-input type="text" v-model="user.user_name"auto-complete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="user_pwd">
              <el-input type="password" v-model="user.user_pwd" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>

            <el-form-item prop="verifycode">
              <!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
              <el-input v-model="user.verifycode" placeholder="请输入验证码" class="identifyinput"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="identifybox">
                <div @click="refreshCode">
                  <s-identify :identifyCode="identifyCode"></s-identify>
                </div>
                <el-button @click="refreshCode" type='text' class="textbtn">看不清，换一张</el-button>
              </div>
            </el-form-item>

            <!--      <el-checkbox
                    v-model="checked"
                    class="rememberme"
                  >记住密码</el-checkbox>-->
            <el-form-item style="width:100%;">
              <el-button type="primary" style="width:100%;" @click.native.prevent="loginSubmit" :loading="logining">登录</el-button>
              <el-link @click="yzm()" target="_blank">手机验证码登陆 |</el-link>
              <el-link  @click="regist()" target="_blank">用户注册 |</el-link>
              <el-link  @click="Retrieve()" target="_blank">忘记密码？</el-link>

            </el-form-item>
          </el-form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import SIdentify from '@/components/User/utilspic.vue'
  import axios from "axios"
  export default {
    data(){
      //用户名验证
      const validateUser_name = (rule, value, callback) => {
        // alert(value);
        var reg=  /^[a-zA-Z0-9]{5,16}$/;
        if (value === '') {
          callback(new Error('请输入用户名'))

        } else if (!reg.test(value)) {
          callback(new Error('用户名必须由5个以上的字母跟数字组成!'))
        } else {
          callback()
        }
      }
       /* if (true) {
          callback(new Error('请输入正确的用户55名'))
        } else {
          console.log('user', value)
          callback()
        }*/
      // 验证码自定义验证规则
      const validateVerifycode = (rule, value, callback) => {
        //alert(value);
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else if (value !== this.identifyCode) {
          console.log('validateVerifycode:', value)
          callback(new Error('验证码不正确,请重新输入!'))
          this.refreshCode()
        } else {
          callback()
        }
      }
      //密码
      const validateUser_pwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请设置正确格式的密码'));
        } else if (value.length < 6) {
          callback(new Error('密码长度最小6位'));
        } else {
          callback();
        }
      }
      return {
        logining: false,
        user: {
          user_name:'',
          user_pwd:'',
          required:'',
        },
        checked: false,
        identifyCodes: '1234567890',
        identifyCode: '',
        loginRules: { // 绑定在form表单中的验证规则
          user_name: [
            { required: true, trigger: 'blur', validator: validateUser_name }
          ],
          user_pwd: [
            { required: true, trigger: 'blur', validator: validateUser_pwd }
          ],

         /* password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
          ],*/
           verifycode: [
             { required: true, trigger: 'blur', validator: validateVerifycode }
           ]
        }
      }
    },
    components: {
      SIdentify
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
            }
          }, 1000)
        }
      },
      //用户登录
      loginSubmit:function () {
        this.$refs.user.validate(valid => {
         // alert("1")
          if(valid){
            //alert("2")
            axios.post("api/user/login",this.user).then(res=>{
              // alert(res.data.dlyz);
              //alert(res.data.tishi);
              if("ok"==res.data.dlyz){
                alert("登录成功！")
              }else if("userno"==res.data.dlyz){
                alert("此用户不存在，请先注册")
              }else if("no"==res.data.dlyz){
                alert("密码错误")
              }
            })
            this.$store.dispatch('Login', this.user).then(res => {
              alert("tan")
            })
          }
        })



      }
      ,
      //注册
      regist:function () {
        this.$router.push("/regist")
      },
      //验证码
      yzm:function () {
        this.$router.push("/yzm")
      },
      //找回
      Retrieve:function () {
        this.$router.push("/retrieve")

      },
      // 生成随机数
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
// 切换验证码
      refreshCode() {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
// 生成四位随机验证码
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ]
        }
        console.log(this.identifyCode)
      }
    },
    mounted(){
      // 验证码初始化
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
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
    margin: 5px auto;
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
  /*图片验证码*/
  .divIdentifyingCode {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    width: 102px; /*设置图片显示的宽*/
    height: 40px; /*图片显示的高*/
    background: #e2e2e2;
    margin: 0;
  }
  .identifybox{
    display: flex;
    justify-content: space-between;
    margin-top:7px;
  }

</style>
