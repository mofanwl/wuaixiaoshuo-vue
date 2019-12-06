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
              <el-input disabled v-model="sizeForm.name">{{sizeForm.name}}</el-input>
            </el-form-item>
            <el-form-item label="账户余额">
              <el-input disabled v-model="sizeForm.pay">{{sizeForm.pay}}</el-input>
            </el-form-item>

            <el-form-item label="充值方式">
              <el-radio-group v-model="sizeForm.a" size="medium">
                <el-radio border label="支付宝"></el-radio>
                <el-radio border label="微信"></el-radio>
                <el-radio border label="QQ钱包"></el-radio>
                <el-radio border label="银联"></el-radio>
                <el-radio border label="手机卡充值"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="充值金额">
              <el-radio-group v-model="sizeForm.b" size="medium">
                <el-radio border label="10"></el-radio>
                <el-radio border label="20"></el-radio>
                <el-radio border label="30"></el-radio>
                <el-radio border label="50"></el-radio>
                <el-radio border label="100"></el-radio>

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

  export default {
    name: "Bookpay",
    data() {
      return {
        sizeForm: {
          id: '1',
          name: 'zhang',
          pay: 120,
          a: '',
          b: ''
        }
      }
    },
    methods: {
      onSubmit(sizeForm) {
        alert(sizeForm.id + sizeForm.name + sizeForm.a + sizeForm.b);
        axios.get("" + sizeForm.a + "/" + sizeForm.b + "/" + sizeForm.id + "/" + sizeForm.name).then(function (res) {

        })

        const h = this.$createElement;
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
        });
      }

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
