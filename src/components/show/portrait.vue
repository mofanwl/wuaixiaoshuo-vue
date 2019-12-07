<template>
  <div id="person">
    <el-menu
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
    </el-menu>
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
      <div id="one">
        <el-tabs type="border-card">
          <el-tab-pane label="头像设置" style="height: 400px">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              style="height: 80px;width: 80px;margin-left: 80px">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p style="margin-top: 160px;">本地上传: 选择本地图片编辑后上传 (上传头像将会在2个工作日内进行审核，通过后需重新登录显示新头像)。

              支持jpg格式图片，上传文件大小不超过2MB，图片尺寸需大于200*200。</p>
            <div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                style="height: 80px;width: 80px;margin-left: 80px">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      </div>
    </el-container>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        imageUrl: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
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
</style>

