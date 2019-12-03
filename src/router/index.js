import Vue from 'vue'
import Router from 'vue-router'
import userlogin from '@/components/User/login'
import indexindex from '@/components/Index/index'
import oeuvre from '@/components/Sord/oeuvre'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userlogin',
      component: userlogin
    },
    {
      path: '/indexindex',
      name: 'indexindex',
      component: indexindex
    },
    {
      path: '/oeuvre',
      name: 'oeuvre',
      component: oeuvre
    }
  ]
})
