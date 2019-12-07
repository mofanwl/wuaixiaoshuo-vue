<template>
  <div class="zuopin">
    <div class="oleft">
      <p>{{book.miaoshu}}</p>
    </div>
    <div class="oreight">
      <img src="../assets/180.jpg">
      <p>{{writer.name}}</p>
      <p>{{writer.message}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        writer: {
          name: "猫腻",
          message: "阅文集团白金作家，超人气玄幻作者，作品文学性很强，2015中国原创文学风云榜前十。"
        },
        book: {
          miaoshu: "          积善之家，必有余庆，留余庆，留余庆，忽遇恩人；幸娘亲，幸娘亲，积得阴功。劝人生，济困扶穷……\n" +
            "          而谁可知，人生于世，上承余庆，终究却是要自己做出道路抉择，正是所谓岔枝发：\n" +
            "          　　东风携云雨，幼藤吐新芽。\n" +
            "          　　急催如颦鼓，洗尽茸与华。\n" +
            "          　　且待朝阳至，绿遍庭中架。\n" +
            "          　　更盼黄叶时，采得数枚瓜。\n" +
            "          　　……\n" +
            "          　　……\n" +
            "          　　《庆余年》同名影视剧由张若昀、李沁、陈道明、吴刚等主演，11月26日起在腾讯视频、爱奇艺开播。"
        }
      }
    },
    mounted() {
      _this = this;
      axios.get("").then(function (res) {
        _this.writer = res.data.list;
        _this.book = res.data.list;
      })
    }
  }
</script>

<style scoped>
  .zuopin {
    width: 990px;
    height: 1000px;
    background: #ccc;
    margin: 160px auto 0;
    z-index: 999;
  }

  .oleft {
    float: left;
    width: 772px;
  }

  .oreight {
    width: 218px;
    height: 1000px;
    float: right;
    background: pink;
  }

  .oreight img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
</style>
