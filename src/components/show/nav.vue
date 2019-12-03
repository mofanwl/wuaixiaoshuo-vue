<template>
    <div class="nav">
        <router-link to="/kong">免费试读</router-link>
        <router-link to="/kong">加入书架</router-link>
        <router-link to="/kong">投票互动</router-link>
        <router-link to="/kong">手机App阅读</router-link>
    </div>
</template>

<script>
export default {
    
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