<template>
  <div id="app">
    <div class="header">
      <div class="pay-center">
        <el-row :gutter="20">
          <el-col :span="4">
            <img src="http://q1bj8tdy9.bkt.clouddn.com/pay1.png"/>
          </el-col>
          <el-col :span="3" :offset="1">
            <img src="http://q1bj8tdy9.bkt.clouddn.com/pay2.png"/>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pay-outer">
      <div class="pay-main">
        <div class="pay-method">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="用户">
              <el-input disabled v-model="sizeForm.id">{{sizeForm.id}}</el-input>
            </el-form-item>
            <el-form-item label="账户余额">
              <el-input disabled v-model="sizeForm.pay">{{sizeForm.pay}}</el-input>
            </el-form-item>
            <h3><p style="color: #E21918">注:一个月15元,三个月30元,半年70元,一年120元</p></h3><br>
            <el-form-item label="充值时间">
              <el-radio-group v-model="sizeForm.a" size="medium">
                <el-radio border label="1个月"></el-radio>
                <el-radio border label="3个月"></el-radio>
                <el-radio border label="半年"></el-radio>
                <el-radio border label="一年"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item size="large">
              <el-button type="primary" @click="onSubmit(sizeForm)">立即支付</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {setCookie,getCookie} from '../../assets/js/cookie'
  export default {
    name: "Bookpay",
    data() {
      return {
        sizeForm: {
          id: '1',
          name: 'zhang',
          pay: '0',
          a: '1个月'
        },
       // id:'2',
       // pay:'200'
      }
    },
    methods: {
      onSubmit(sizeForm) {
        // var _value=this.value;
       // alert(sizeForm.id)
       // alert(sizeForm.a);
        axios.get("api/user/tovip/" + sizeForm.id + "/"+ sizeForm.a).then(function (res) {
          if("ok"==res.data.msg){
            alert("会员已到账！")
            //this.$router.push("show/myself")
            window.location.href="http://localhost:8080/#/myself";
          }else{
            alert("宇额不足，请先充值！")
            window.location.href="http://localhost:8080/#/bookpay";
            //this.$router.push("/bookpay")
          }
          //this.$router.push("/bookpay")


          ///alert(res.data.msg)

        })

        /*const h = this.$createElement;
        this.$msgbox({
          title: '等待支付',
          message: h('p', null, [
            h('span', null, '请在新打开的页面中完成支付 ')
          ]),
          showCancelButton: true,
          confirmButtonText: '已完成支付',
          cancelButtonText: '关闭',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  this.$router.push('/oeuvre')
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });*/
      }

    },
    mounted(){
      let user_id = getCookie('user_id');
      let user_total_mount = getCookie('user_total_mount');
      this.sizeForm.id=user_id
      this.sizeForm.pay=user_total_mount
    }
  }

</script>

<style>

  #app {
    margin-top: 0px;
    /*text-align: center;*/
  }

  .header {
    height: 60px;
    margin-bottom: 12px;
    background: #fff;
    /*margin-top: 60px;*/
  }

  .pay-center {
    width: 960px;
    margin: 0 auto;
  }

  .pay-outer {
    width: 960px;
    height: 600px;
    margin: 0 auto;
    background-color: #F7F7F7;
  }

  .pay-main {
    min-height: 450px;
    padding: 48px;
    background: #fff;
  }

  div {
    margin: 0;
    padding: 0;
  }

  .pay-main .account-wrap {
    margin-bottom: 24px;
  }

  .pay-main h6 {
    font: 12px/1.5 'PingFangSC-Regular', '-apple-system', Simsun;
    margin-bottom: 12px;
    color: #a6a6a6;
  }

  .pay-main .pay-list, .pay-main .operator-list {
    margin-bottom: 24px;
  }

  .el-form-item--mini.el-form-item {
    margin-bottom: 35px;
  }
</style>
