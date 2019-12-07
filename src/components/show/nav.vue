<template>
    <div class="nav">
        <a :href="book.url">免费试读</a>
        <router-link to="/kong">加入书架</router-link>
        <router-link to="/kong">投票互动</router-link>
        <router-link to="/kong">手机App阅读</router-link>
    </div>
</template>

<script>
export default {
  data(){
    return{
      book:{
        url:"http://t.mofan.la/%E5%B0%8F%E8%AF%B4/%E4%BB%99%E4%BE%A0/%E4%B8%80%E5%93%81%E4%BF%AE%E4%BB%99/%E7%AC%AC%E4%B8%80%E7%AB%A0%EF%BC%9A%E8%A7%A3%E5%BF%A7%E6%9D%82%E8%B4%A7%E9%93%BA.html"
      }
    }
  },
  mounted() {
    _this = this;
    axios.get("").then(function (res) {
      _this.book = res.data.list;
    })
  }

}
</script>

<style scoped>
.nav{
    width: 475px;
    height: 36px;
}
.nav a{
	text-decoration: none;
    float: left;
    font-size: 14px;
    width: 102px;
    height: 34px;
    margin-right: 10px;
    line-height: 34px;
    text-align: center;
}
.nav a:nth-child(1){
    color: #fff;
    background-color: #bf2c24;
}
.nav a:nth-child(2){
    color: #3f5a93;
    border: 1px solid #3f5a93;
}
.nav a:nth-child(3){
    color: #3f5a93;
    border: 1px solid #3f5a93;
}
.nav a:nth-child(4){
    font-size: 12px;
    color: #fff;
    background-color: #bf2c24;
}
</style>
