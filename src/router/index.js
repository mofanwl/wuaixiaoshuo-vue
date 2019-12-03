import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/User/login'
import regist from '@/components/User/regist'
import phone from '@/components/User/phone'
import yzm from '@/components/User/phone-yzm'
import details from '@/components/User/Details'


import index from '@/components/Index/index'


import oeuvre from '@/components/Sord/oeuvre'

import Home from '../pages/home'
import Search from '../pages/search'
import Kong from '../pages/kong'
import Mulu from '../pages/mulu'
import Zuopin from '../pages/zuopin'
import manage from '../pages/manage'
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
    },
    /*虎*/
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          name: "Zuopin",
          path: "zuopin",
          component: Zuopin
        },
        {
          name: "Mulu",
          path: "mulu",
          component: Mulu
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/kong',
      name: 'Kong',
      component: Kong
    },
    {
      path:'/manage',
      name:'manage',
      component:manage
    }
  ]
})
