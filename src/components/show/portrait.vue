<template>
  <div id="person">
    <!--<el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" style="padding-left:750px">
      <el-menu-item index="1" style="font-size: 18px;margin: 0 8px 0 0">
        <router-link to="/myself">我的首页</router-link>
      </el-menu-item>
      <el-menu-item index="2" style="font-size: 18px;margin: 0 8px 0 0">
        <router-link to="/kong">我的书架</router-link>
      </el-menu-item>
      <el-menu-item index="3" style="font-size: 18px;margin: 0 8px 0 0">
        <router-link to="/kong">消息中心</router-link>
      </el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank" style="text-decoration: none;font-size: 18px;margin: 0 8px 0 0">
        <router-link to="/kong">游戏</router-link>
      </a></el-menu-item>
      <el-submenu index="2">
        <template slot="title">用户名</template>
        <el-menu-item index="2-1">
          <router-link to="/bookpay">充值</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/setting">个人设置</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/myself">我的主页</router-link>
        </el-menu-item>
        <el-menu-item index="2-4">
          <router-link to="/kong">客服中心</router-link>
        </el-menu-item>
        <el-menu-item index="2-5">
          <router-link to="/kong">退出</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>-->

    <div class="center_header">
      <div class="center_wrapper">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#3E3D43"
          text-color="#FFFFFF"
          active-text-color="#FFFFFF">
          <el-row :gutter="0">
            <el-col :span="4">
              <img src="http://q1bj8tdy9.bkt.clouddn.com/gerenlogo.png"/>
            </el-col>
            <el-col :span="3" :offset="0">
              <router-link to="/myself"><el-menu-item index="1"><i class="el-icon-s-home"></i>我的首页</el-menu-item></router-link>
            </el-col>
            <el-col :span="3" :offset="0">
              <router-link to="/bookcenter/bookrack"><el-menu-item index="1"><i class="el-icon-s-management"></i>我的书架</el-menu-item></router-link>
            </el-col>
            <el-col :span="3" :offset="0">
              <el-menu-item index="1"><i class="el-icon-message-solid"></i>消息中心</el-menu-item>
            </el-col>
            <el-col :span="3" :offset="0">
              <a href="http://game.qidian.com/"><el-menu-item index="1"><i class="el-icon-coordinate"></i>游戏</el-menu-item></a>
            </el-col>
            <el-col :span="2.5" :offset="0">
              <router-link to="/indexindex"><el-menu-item index="1">起点首页</el-menu-item></router-link>
            </el-col>
            <el-col :span="5" :offset="0">
              <el-submenu index="2">
                <template slot="title">用户</template>
                <router-link to="/bookpay"><el-menu-item index="2-1">充值</el-menu-item></router-link>
                <router-link to="/setting"><el-menu-item index="2-2">个人设置</el-menu-item></router-link>
                <router-link to="/myself"><el-menu-item index="2-3">我的主页</el-menu-item></router-link>
                <el-menu-item index="2-4">客服中心</el-menu-item>
                <el-menu-item index="2-5">退出</el-menu-item>
              </el-submenu>
            </el-col>

          </el-row>
        </el-menu>
      </div>
    </div>



    <div class="details">
      <el-container style="height: 700px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title">个人中心</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link to="/myself">首页</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="/property">账务中心</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link to="/bookmeber ">会员中心</router-link>
                </el-menu-item>
                <el-menu-item index="1-4">
                  <router-link to="/kong">我的红包</router-link>
                </el-menu-item>
                <el-menu-item index="1-5">
                  <router-link to="/kong">我的书评</router-link>
                </el-menu-item>
                <el-menu-item index="1-6">
                  <router-link to="/kong">我的本章说</router-link>
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="1-7">
                  <router-link to="/kong">经验值</router-link>
                </el-menu-item>
                <el-menu-item index="1-8">
                  <router-link to="/kong">任务</router-link>
                </el-menu-item>
                <el-menu-item index="1-9">
                  <router-link to="/kong">徽章/称号/认证</router-link>
                </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="1-10">
                  <router-link to="/kong">票夹</router-link>
                </el-menu-item>
                <el-menu-item index="1-11">
                  <router-link to="/kong">安全中心</router-link>
                </el-menu-item>
                <el-menu-item index="1-12">
                  <router-link to="/kong">作家专区</router-link>
                </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
      <div>
        <div>
          <el-upload class="upload-demo" action="auto" :http-request="uploadSectionFile" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
          </el-upload>
          <el-button size="small" type="primary" @click="upload">提交</el-button>
        </div>
      </div>
    </el-container>
    </div>
  </div>
</template>

<script>
  import {setCookie,getCookie} from '../../assets/js/cookie'
  import axios from "axios"
  export default {
    data() {
      return {
        uploadFile: "",
        user_id:""
      };
    },
    methods: {
      uploadSectionFile(param) {
        let fileObj = param.file;

        const isLt2M = fileObj.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
          return;
        }
        if (fileObj.type === "image/jpeg") {
          this.uploadFile = new File([fileObj], new Date().getTime() + ".jpg", {
            type: "image/jpeg"
          });
        } else if (fileObj.type === "image/png") {
          this.uploadFile = new File([fileObj], new Date().getTime() + ".png", {
            type: "image/png"
          });
        } else {
          this.$message.error("只能上传jpg/png文件");
          return;
        }
      },
      upload() {
       // alert(this.user_id)
        var param = new FormData(); // FormData 对象
        param.append("file", this.uploadFile); // 文件对象
        param.append("idid", this.user_id); // 其他参数
        this.$axios({
          method: "post",
          url: "api/user/touxiang",
          data: param
        }).then(response => {
         // alert(response.data.user_portrait)
          setCookie('user_portrait',response.data.user_portrait);

          this.$message({
            message: '上传成功',
            type: 'success'
          });
        }).catch(error => {
          this.$message.error("上传失败,请稍后重试");
        });
      }
    } ,
    mounted(){
      //let vip = getCookie('vip');
      let user_id = getCookie('user_id');
      this.user_id=user_id
  /*    let user_name = getCookie('user_name');
      let user_portrait = getCookie('user_portrait');
      let user_total_mount = getCookie('user_total_mount');
      let user_vip_time = getCookie('user_vip_time');
      this.user_name=user_name
      this.money=user_total_mount
      this.url=user_portrait
      this.date=user_vip_time
      //_this = this;
      /!* axios.get("").then(function (res) {
         this.user = res.data.list;
       })*!/*/
    }
  };
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover{
    color: deeppink;
  }
  body{
    margin: 0;
    padding: 0;
    background-color: #F7F6F2;
  }son{
  }
  .center a{
    text-decoration: none;
    float: left;
    font-size: 14px;
    width: 102px;
    height: 34px;
    margin-right: 10px;
    line-height: 34px;
    text-align: center;
    color: #fff;
    background-color: #bf2c24;
  }
  .details{
    width: 990px;
    height: 700px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -495px;
}
  #one{
    background-color: cornflowerblue;
    width: 800px;
    height: 400px;
  }




  .el-menu-item, .el-submenu__title {
    height: 74px;
    line-height: 74px;
    position: relative;
    -webkit-box-sizing: border-box;
    white-space: nowrap;
    list-style: none;
  }


  .center_wrapper {
    overflow: hidden;
    width: 990px;
    height: 74px;
    margin: 0 auto;
  }

  .center_header {
    position: relative;
    z-index: 2;
    min-width: 990px;
    height: 74px;
    color: #fff;
    background: #3e3d43;
  }
</style>

