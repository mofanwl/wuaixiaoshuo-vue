<template>
  <div class="box-center">
    <!--程长青-->
    <div class="header">
      <div class="login-center">
        <router-link to="/indexindex" style="float: left;"><img src="http://q1bj8tdy9.bkt.clouddn.com/login1.png"/></router-link>
      </div>
    </div>


    <!--孔令锦-->
    <div class="login-area-wrap cf">
      <div class="login-op-img fl">
        <img src="../../assets/loginBg.jpg"/>
      </div>

      <div class="login-wrap type-10 fl">
        <div class="login-container">
          <el-form :model="user" :rules="loginRules"
                   status-icon
                   ref="user"
                   label-position="left"
                   label-width="0px"
                   class="demo-ruleForm login-page">
            <h3 class="title">手机号登录</h3>
            <el-form-item prop="user_phone">
              <el-input v-model="user.user_phone" auto-complete="off" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="user_yzm" class="code">
              <el-input v-model="user.user_yzm" placeholder="验证码"></el-input>
              <!--<el-button type="primary" :disabled='isDisabled' @click="getCode(regForm)">{{count}}</el-button>-->
              <button @click="getCode(regForm)" class="code-btn" :disabled="!show">
                <span v-show="show">发送验证码</span>
                <span v-show="!show" class="count">{{count}} s</span>
              </button>
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

            <el-form-item style="width:100%;">
              <el-button type="primary" style="width:100%;"  @click.native.prevent="loginSubmit()" :loading="logining">登录</el-button>
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
  import SIdentify from '@/components/User/utilspic.vue'
  import axios from "axios"
  const TIME_COUNT = 4 // 倒计时的时间
  export default {
    data(){
      //手机号验证
      const validateUser_phone = (rule, value, callback) => {
        var reg=/^1[3456789]\d{9}$/;
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else if (!reg.test(value)) {
          callback(new Error('请输入正确的手机号'));
        } else {
          callback();
        }
      }
      //手机验证码验证
      const validateUser_yzm = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机验证码'));
        } else if (value.length < 4) {
          callback(new Error('请输入正确的验证码'));
        } else {
          callback();
        }
      }

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
      return {
        logining: false,
        user: {
          user_phone:'',
          user_yzm:'',
          required:'',
        }
       /* user: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        }*/,

        checked: false,
        buttonText: '发送验证码',
        identifyCodes: '1234567890',
        identifyCode: '',
        isDisabled: false, // 是否禁止点击发送验证码按钮
        flag: true,
        //验证码
        loginRules: { // 绑定在form表单中的验证规则
          user_phone: [
            { required: true, trigger: 'blur', validator: validateUser_phone }
          ],
          user_yzm: [
            { required: true, trigger: 'blur', validator: validateUser_yzm }
          ],
          verifycode: [
            { required: true, trigger: 'blur', validator: validateVerifycode }
          ],

         /* user_name: [
            { required: true, trigger: 'blur', validator: validateUser_name }
          ],
          user_pwd: [
            { required: true, trigger: 'blur', validator: validateUser_pwd }
          ],*/

          /* password: [
             { required: true, message: '请输入密码', trigger: 'blur' },
             { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
           ],*/
        },

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
              this.count="发送验证码"
            }
          }, 1000)
        }
      },
      //用户登录
      loginSubmit:function () {
        this.$refs.user.validate(valid => {
          // alert("1")
          if(valid){
           // alert("2")
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
            this.$store.dispatch('Login', this.user).then(res => {
              alert("tan")
            })
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
    }
  };
</script>

<style scoped>
  /*程长青*/
  .header {
    height: 80px;
    border-bottom: 1px solid #DFDFDF;
  }
  .login-center{
    width: 990px;
    margin: -35px auto;
  }

  /*孔令锦*/




  .login-container {
    width: 100%;
    height: 100%;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 30px auto;
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
    /*padding: 100px 0;*/
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
