<template>
  <div>
    <el-form :model="user" status-icon   style="width: 400px" label-width="100px">

      <el-form-item label="用户名" >
        <el-input name="username" v-model="user.username" ></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input name="pass" v-model="user.pass" ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="sublogin()">登录</el-button>
        <el-button >重置</el-button>
      </el-form-item>
    </el-form>
    <a href="indexindex">index</a>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
        user:{}
      };
    },
    methods: {
      sublogin:function () {
        //alert(this.user.username,this.user.pass);
        axios.post("http://localhost:888/selectLogin",this.user).then(res=>{
          // alert(res.data);
          if(res.data=="ok"){
            this.$router.push("/userlist")
          }else if(res.data=="err"){
            alert("您的权限不足");
          }else{
            alert("用户名或密码错误！");
          }
        })

      }
    }
  }
</script>
