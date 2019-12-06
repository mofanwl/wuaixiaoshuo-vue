<template>
    <div class="mulu">

    </div>
</template>

<script>
  import $ from "jquery"

export default {

  methods:{

  },
  mounted(){
    $(function () {
      $("div").load("https://www.baidu.com")
    })
  }
}
</script>
<style scoped>

.mulu{
    width: 990px;
    height: 600px;
    background: #ccc;
    margin: 160px auto 0;
    z-index: 999;
}
</style>
