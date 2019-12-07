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
            <h3 class="title">用户注册</h3>
            <el-form-item prop="user_name">
              <el-input v-model="user.user_name" auto-complete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>

            <el-form-item prop="user_pwd">
              <el-input type="password" v-model="user.user_pwd" auto-complete="off" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="user_pwds">
              <el-input type="password" v-model="user.user_pwds" auto-complete="off" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item prop="user_phone">
              <el-input v-model="user.user_phone" auto-complete="off" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="user_yzm" class="code">
              <el-input v-model="user.user_yzm" placeholder="手机验证码"></el-input>
              <!--<el-button type="primary" :disabled='isDisabled' @click="sendCode">{{buttonText}}</el-button>-->
              <button @click="getCode(regForm)" class="code-btn" :disabled="!show">
                <span v-show="show">发送验证码</span>
                <span v-show="!show" class="count">{{count}} s</span>
              </button>
            </el-form-item>
            <el-form-item prop="verifycode">
              <!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
              <el-input v-model="user.verifycode" placeholder="请输入图片验证码" class="identifyinput"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="identifybox">
                <div @click="refreshCode">
                  <s-identify :identifyCode="identifyCode"></s-identify>
                </div>
                <el-button @click="refreshCode" type='text' class="textbtn">看不清，换一张</el-button>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native.prevent="submitForm()" style="width:100%;">注册</el-button>
              <el-link   @click="gotoLogin" target="_blank">已有账号？立即登录</el-link>
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
  const TIME_COUNT = 4 // 倒计时的时间
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
      //确认密码
      const validateUser_pwds = (rule, value, callback) => {
        //alert(this.user.user_pwd+"pwds")
        if (value === '') {
          callback(new Error('请设置正确格式的密码'));
        } else if (value.length < 6) {
          callback(new Error('密码长度最小6位'));
        } else if(this.user.user_pwd!=this.user.user_pwds){
          callback(new Error('密码不一致'));
        }else{
          callback();
        }
      }
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
          user_name:'',
          user_pwd:'',
          user_pwds:'',
          user_phone:'',
          user_yzm:'',
          required:'',
        },
        identifyCodes: '1234567890',
        identifyCode: '',
      /*  user: {
          user_name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          user_pwd: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },*/
/*        checked: false,
        buttonText: '发送验证码',
        isDisabled: false, // 是否禁止点击发送验证码按钮
        flag: true,*/
        //验证码
        loginRules: { // 绑定在form表单中的验证规则
        user_name: [
            { required: true, trigger: 'blur', validator: validateUser_name }
          ],
            user_pwd: [
            { required: true, trigger: 'blur', validator: validateUser_pwd }
          ],
          user_pwds: [
            { required: true, trigger: 'blur', validator: validateUser_pwds }
          ],
          user_phone: [
            { required: true, trigger: 'blur', validator: validateUser_phone }
          ],
          user_yzm: [
            { required: true, trigger: 'blur', validator: validateUser_yzm }
          ],
          verifycode: [
            { required: true, trigger: 'blur', validator: validateVerifycode }
          ]
        },
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
      // <!--提交注册-->
      submitForm:function () {
        this.$refs.user.validate(valid => {
          // alert("1")
          if(valid){
            //alert("2")
            axios.post("api/user/insert",this.user).then(res=>{
              //alert(+"--"+res.data.tishi);
              if("zcok"==res.data.ins_cg){
                alert("注册成功！");
                this.$router.push("/login")
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
            this.$store.dispatch('Login', this.user).then(res => {
              alert("tan")
            })
          }
        })




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
    },
    mounted(){
      // 验证码初始化
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
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


  .login-container {
    width: 100%;
    height: 100%;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    /*margin: -42px auto;*/
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
    min-height: 700px;
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
  .identifybox {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
  }
</style>
