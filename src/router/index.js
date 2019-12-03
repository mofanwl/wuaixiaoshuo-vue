import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/User/login'
import regist from '@/components/User/regist'
import phone from '@/components/User/phone'
import yzm from '@/components/User/phone-yzm'
import details from '@/components/User/Details'


import index from '@/components/Index/index'


import oeuvre from '@/components/Sord/oeuvre'

Vue.use(Router)

export default new Router({
  routes: [
    /*张浩*/
    {
      path: '/',
      name: 'index',
      component: index
    }
  /*孔*/
    ,
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/phone',
      name: 'phone',
      component: phone
    }
    ,
    {
      path: '/yzm',
      name: 'yzm',
      component: yzm
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    /*程*/
    {
      path: '/oeuvre',
      name: 'oeuvre',
      component: oeuvre
    }
  ]
})
