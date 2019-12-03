<template>
  <div class="center_header">
    <div class="center_wrapper">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../../assets/gerenlogo.png"/>
          </div>
        </el-col>
        <el-col :span="3" :offset="1">
          <div class="grid-content bg-purple">
            <img src="../../assets/krack_1.png"/>
          </div>
        </el-col>
        <el-col :span="3" :offset="0">
          <div class="grid-content bg-purple">
            <img src="../../assets/krack_2.png"/>
          </div>
        </el-col>
        <el-col :span="3" :offset="0">
          <div class="grid-content bg-purple">
            <img src="../../assets/krack_3.png"/>
          </div>
        </el-col>
        <el-col :span="3" :offset="0">
          <div class="grid-content bg-purple">
            <img src="../../assets/krack_4.png"/>
          </div>
        </el-col>
        <el-col :span="2" :offset="2">
          <div class="grid-content bg-purple">
            <img src="../../assets/krack_5.png"/>
          </div>
        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Bookrack"
  }
</script>

<style>
  #app {
    margin-top: 0px;
  }

  .center_header {
    position: relative;
    z-index: 2;
    min-width: 990px;
    height: 72px;
    color: #fff;
    background: #3e3d43;
  }

  .center_wrapper {
    overflow: hidden;
    width: 990px;
    height: 72px;
    margin: 0 auto;
  }


</style>
