<template>
  <div id="app">
    <app-header v-if="$route.meta.keep"></app-header>
    <router-view v-on:public_header="Footer"></router-view>
    <app-footer v-if="$route.meta.keep"></app-footer>
  </div>
</template>

<script>
  import Layout from '@/components/Layout';
  import Footer from '@/components/Footer';
  export default {
    name: 'App',
    data(){
      return {
        header_show:true,
        footer_show:true,
      }
    },
    components: {
      'app-header':Layout,
      'app-footer':Footer,
    },
    methods:{
      //是否显示头部

      public_header:function (bool) {
        this.header_show = false;
      },
      //是否显示底部
      public_footer:function (bool) {
        this.footer_show = bool;
      }

    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
