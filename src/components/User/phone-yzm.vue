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


    <!--程长青-->
    <div class="footer">
      <div class="link">
        <a href="//www.qidian.com/about/intro" target="_blank">关于起点</a>
        <a href="//www.qidian.com/about/contact" target="_blank">联系我们</a>
        <a href="http://join.book.qq.com/index.html" target="_blank">加入我们</a>
        <a href="http://kf.qidian.com/Default.aspx" target="_blank">客服中心</a>
        <a href="http://bbs.qidian.com/list/53" target="_blank">提交建议</a>
        <a href="https://jubao.yuewen.com/" target="_blank">举报中心</a>
      </div>
      <p>Copyright (C) 2002-2019 www.qidian.com All Right Reserved版权所有 上海玄霆娱乐信息科技有限公司</p>
      <p>上海玄霆娱乐信息科技有限公司 增值电信业务经营许可证沪B2-20080046 沪网文[2012]0068-008 新出网证（沪）字010 沪ICP备08017520号-1</p>
      <p>请所有作者发布作品时务必遵守国家互联网信息管理办法规定，我们拒绝任何色情小说，一经发现，即作删除！客服电话：010-59357051</p>
      <p>本站所收录作品、社区话题、书库评论及本站所做之广告均属个人行为，与本站立场无关</p>
      <div class="safety-box">
        <div class="safety-img dib-wrap">
          <a class="site1" href="http://www.pdxa.cn/Welcome.Asp?Id=3101151112" target="_blank"><img src="http://q1bj8tdy9.bkt.clouddn.com/bao1.png"/></a>
          <a class="site2" href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20111011181417625" target="_blank"><img src="http://q1bj8tdy9.bkt.clouddn.com/bao2.png"/></a>
          <a class="site3" href="http://www.cyberpolice.cn/wfjb" target="_blank"><img src="http://q1bj8tdy9.bkt.clouddn.com/bao3.png"/></a>
          <a class="site4" href="https://ss.knet.cn/verifyseal.dll?sn=e12120411010037414000000&pa=090993" target="_blank"><img src="http://q1bj8tdy9.bkt.clouddn.com/bao4.png"/></a>
          <a class="site5" href="http://www.shjbzx.cn" target="_blank"><img src="http://q1bj8tdy9.bkt.clouddn.com/bao5.png"/></a>
          <a class="site6" href="http://www.12377.cn/node_548446.htm" target="_blank"><img src="http://q1bj8tdy9.bkt.clouddn.com/bao6.png"/></a>
          <a class="site7" href="http://www.12377.cn/" target="_blank"><img src="http://q1bj8tdy9.bkt.clouddn.com/bao7.png"/></a>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import SIdentify from '@/components/User/utilspic.vue'
  import axios from "axios"
  const TIME_COUNT = 60 // 倒计时的时间
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
          alert("发送成功！");
          //alert("发送。。。");
          axios.post("api/user/short", this.user).then(res => {
            alert(res.data)
            alert(res.data.short_cg);
            //alert(res.data.tishi);
            if ("ok" == res.data.short_cg) {
              alert("短信验证码发送成功！")
            } else if ("no" == res.data.short_cg) {
              alert("短信验证码发送失败")
            }
          })


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
      //验证码登录
      loginSubmit:function () {
        this.$refs.user.validate(valid => {
          // alert("1")
          if(valid){
           // alert("2")
            axios.post("api/user/logintel",this.user).then(res=>{
              //alert(res.data.dlyz)
              // alert(res.data.dlyz);
              //alert(res.data.tishi);
              if("yzmnok"==res.data.dlyz){
                alert("登录成功！")

                this.$router.push("/indexindex")
              }else if("nophone"==res.data.dlyz){
                alert("手机号不存在，请先注册")
              }else if("yzmno"==res.data.dlyz){
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

  #app{
    margin-top: 0px;
  }
  .footer {
    padding-bottom: 20px;
    text-align: center;
    background: #FAFAFA;
  }
  .footer .link {
    padding-top: 32px;
    margin-bottom: 10px;
    font-size: 0;
  }
  .footer p {
    color: #A6A6A6;
    font: 12px/20px "PingFangSC-Regular", "-apple-system", Simsun;
    display: block;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .footer .safety-box {
    padding-top: 20px;
  }
  .footer .link a {
    display: inline-block;
    color: #666;
    font: 12px/16px "PingFangSC-Regular", "-apple-system", Simsun;
    margin-left: 15px;
    height: 20px;
  }
  a {
    outline: none;
    text-decoration: none;
    color: #262626;
    transition: color .3s, background-color .3s;
  }
  .footer .safety-img {
    padding: 0 0 20px;
  }
  .dib-wrap {
    font-size: 0;
  }
  .footer .safety-img a {
    width: 140px;
    height: 52px;
    margin-right: 14px;
    border: 1px solid #EDEDED;
  }


  .header {
    height: 80px;
    border-bottom: 1px solid #DFDFDF;
    margin-top: 50px;
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
    min-height: 520px;
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
