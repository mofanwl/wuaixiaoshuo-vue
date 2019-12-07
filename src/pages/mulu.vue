<template>
  <div class="mulu">
    <iframe :src="book.url" width="100%;" height="100%"></iframe>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        book: {
          url: "http://t.mofan.la/小说/仙侠/一品修仙/ms一品修仙.html"
        }
      }
    },
  mounted()
  {
    axios.get("api/book/selectAllById/"+this.$route.query.id).then(res=> {
      console.log(res.data)
      this.book = res.data;
    })
    _this = this;
    axios.get("").then(function (res) {
      _this.book = res.data.list;
    })
  }
  ,
  methods:{
    // fun:$(function(){
    //     $("#dh").load("http://www.baidu.com")
    // })
  }
  }
</script>
<style scoped>

  .mulu {
    width: 990px;
    height: 600px;
    background: #ccc;
    margin: 160px auto 0;
    z-index: 999;
  }
</style>
