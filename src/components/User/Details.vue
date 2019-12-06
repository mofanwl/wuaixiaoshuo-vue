<template>
  <div class="header">
    <div class="personal-sideBar">
    <ul class="sideBar-group">
      <li class="active">
        <a class="sideBar-list-a">首页</a>
      </li>
    </ul>
    </div>

    <div class="qdp-content">
      <div class="home-user-wrapper qdp-border">
        <!--头像-->
        <div class="home-user-avatar">
          <a class="user-avatar-a">
            <img class="user-avatar-img" src="https://qidian.gtimg.com/qd/images/ico/default_user.0.2.png"/>
          </a>
          <a class="home-user-vip icon icon-pt"></a>
        </div>

        <div class="home-user">
          <div class="qdp-button">
            <a class="qdp-button-a mlr4" target="_blank">个人主页

            </a>
            <h3>
              <a>书友1283248293</a>
            </h3>
          </div>
        </div>

      </div>

    </div>

    <!--余额-->
    <ul class="qdp-border home-msg-wrapper">

    </ul>

  </div>
</template>

<script>

  export default {
    components:{

    },
    data(){
      return{

      }
    },
    methods:{
      fun(){
        console.log("订阅成功")
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 990px;
    min-height: calc(100vh - 277px);
    background-color: lawngreen;
    margin: 0 auto;
  }
  .personal-sideBar {
    float: left;
    width: 174px;
    margin: 36px 40px 0 0;
    background-color: darkred;
  }
  .sideBar-group {
    margin: 0 0 20px;
  }
  .sideBar-group li.active {
    font-weight: 600;
    color:
      #ee4259;
    border: 1px solid
    #e0deda;
    background:
      #fff;
  }
  .home-user-wrapper {
    position: relative;
    margin: 20px 0 0 0;
    padding: 55px 0 0 0;
    background:
      #fff url(https://qidian.gtimg.com/qdp/img/home-index-bg.b2c89.png) no-repeat;
  }
  /*头像*/
  .home-user-avatar {
    position: relative;
    float: left;
    width: 140px;
    text-align: center;
  }
  .user-avatar-a {
    display: inline-block;
    border-radius: 50%;
  }
  .user-avatar-img {
    width: 100px;
    height: 100px;
    vertical-align: top;
    border: 3px solid #fff;
    border: 3px solid
    rgba(255,255,255,.5);
    border-radius: 50%;
  }
  .home-user-vip {
    font-size: 12px;
    position: absolute;
    bottom: -7px;
    left: 50%;
    margin: 0 0 0 -25px;
    color:
      #fff;
    border-radius: 2px;
  }

  .icon-pt {
    background-image: url(https://qidian.gtimg.com/qdp/icon/common/sprite.f9dce.png);
    background-position: 0 0;
    width: 52px;
    height: 20px;
  }
  .qdp-button-a {
    display: inline-block;
    margin: 0 0 0 16px;
    padding: 4px 12px;
    transition: background .15s,border-color .15s;
    color:#fff;
    border: 1px solid #fff;
    border: 1px solid
    rgba(255,255,255,.5);
    border-radius: 50px;
    background: rgba(0,0,0,.2);
  }
  .home-user-wrapper .qdp-button {
    right: 20px;
    margin: 5px 0 0 0;
  }
  .qdp-button {
    position: absolute;
  }
  a {
    transition: color .3s;
    text-decoration: none;
    color: inherit;
  }
  .home-user h3 {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }



  .home-msg-wrapper {
    font-size: 0;
    line-height: 0;
    margin: 20px 0 0 0;
    background:fff;
  }
  .qdp-badge-a, .qdp-border, .qdp-hovertips, .qdp-list {
    border: 1px solid
    #e0deda;
    border-radius: 4px;
  }


  .sideBar-group li .sideBar-list-a {

    display: block;
    overflow: hidden;
    padding: 0 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 4px;

  }


  .qdp-content {
    display: table-cell;
    width: 2000px;
    padding: 16px 0 0;
    color: #7f7f7f;
  }

</style>
