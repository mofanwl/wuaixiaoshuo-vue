<template>
  <div class="rack-wrapper">
    <el-table
      :data="book"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="书名:">
              <span>{{ props.row.books_name }}</span>
            </el-form-item>
            <el-form-item label="作者:">
              <span>{{ props.row. books_author }}</span>
            </el-form-item>
            <el-form-item label="类型:">
              <span>「{{ props.row.type_name }}」</span>
            </el-form-item>
            <el-form-item label="状态:">
              <span>{{ props.row.books_status}}</span>
            </el-form-item>
            <el-form-item label="字数:">
              <span>{{ props.row.books_count }}万字</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="书名"
        prop="books_name">
      </el-table-column>
      <el-table-column
        label="作者"
        prop="books_author">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click="deleteById(scope.row)" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="blocks">
      <el-pagination
        layout="prev, pager, next"
        :total="total" :page-size="this.params.size" :current-page="this.params.page" v-on:current-change="changePage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Bookrack",
    data() {
      return {
        book: [
          /*{id: 1, name: '圣墟', writer: '陈东', genre: '玄幻·东方玄幻', state: '连载', num: '513.04'},
          {id: 2, name: '圣墟', writer: '陈东', genre: '玄幻·东方玄幻', state: '连载', num: '513.04'},*/
        ],
        params: {
          page: 1,
          size: 2,
        },
        total: 10,
      }
    },
    methods: {
      changePage: function (page) {
        this.params.page = page;
        this.findAll();
      },
      //查
      findAll: function () {
        axios.get("api/collect/selListByuser/"+15+"/" + this.params.page + "/" +   this.params.size).then(res => {
          //alert(res.data)
          console.log(res.data)
          this.book = res.data.list;
          this.total = res.data.total;
          // _this.page = res.data.page
        })
      },
      //删
      deleteById:function (scope) {
        alert(scope.books_id)
        axios.post("api/collect/delByBid?collect_bid="+scope.books_id).then(res=>{
         // if(res.data==("success")){
            this.findAll()
         /* }else {
            alert("删除失败")
          }*/
        })
      }
    },
    mounted() {
      this.findAll()
    }
  }
</script>

<style scoped>

  .rack-wrapper {
    width: 990px;
    min-height: calc(100vh - 277px);
    margin: 0 auto;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
