<template>
  <div id="header">
    <div class="banner"></div>
    <div class="details">
<el-container style="height: 1500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>《==</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">首页</el-menu-item>
          <el-menu-item index="1-2">账务中心</el-menu-item>
          <el-menu-item index="1-3">我的票夹</el-menu-item>
          <el-menu-item index="1-4">我的红包</el-menu-item>
          <el-menu-item index="1-5">我的书评</el-menu-item>
          <el-menu-item index="1-6">我的本章说</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="1-7">经验值等级</el-menu-item>
          <el-menu-item index="1-8">任务</el-menu-item>
          <el-menu-item index="1-9">徽章/称号/认证</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="1-10">会员中心</el-menu-item>
          <el-menu-item index="1-11">安全中心</el-menu-item>
          <el-menu-item index="1-12">作家专区</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .banner{
    width: 100%;
    height: 292px;
    position: relative;
  }
  .details{
    width: 990px;
    height: 1000px;
    position: absolute;
    left: 50%;
    top: 180px;
    margin-left: -495px;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
