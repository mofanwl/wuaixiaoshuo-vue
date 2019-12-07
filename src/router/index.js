import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/User/login'
import regist from '@/components/User/regist'
import phone from '@/components/User/phone'
import yzm from '@/components/User/phone-yzm'
import details from '@/components/User/Details'
import retrieve from '@/components/User/retrieve'
import ceshi from '@/components/User/ceshi'
import ceshi3 from '@/components/User/ceshi3'
import modify from '@/components/User/modify'


import indexindex from '@/components/Index/index'
import search from '@/components/Search/search'
import type_search from '@/components/Search/type_search'


import oeuvre from '@/components/Sord/oeuvre'
import bookrack from '@/components/Sord/Bookrack'
import bookcenter from '@/components/Sord/Bookcenter'
import bookpay from '@/components/Sord/Bookpay'
import bookmeber from '@/components/Sord/Bookmeber'

import myself from '@/components/show/myself'
import portrait from '@/components/show/portrait'
import property from '@/components/show/property'
import setting from '@/components/show/setting'
import Home from '../pages/home'
import Search from '../pages/search'
import Kong from '../pages/kong'
import Mulu from '../pages/mulu'
import Zuopin from '../pages/zuopin'
Vue.use(Router)

export default new Router({
  routes: [
    /*张浩*/

    {
      path: '/indexindex',
      name: 'indexindex',
      component: indexindex,
      meta: {
        keep: true
      }
    }
    , {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        keep: false
      }
    }, {
      path: '/type_search',
      name: 'type_search',
      component: type_search,
      meta: {
        keep: false
      }
    },
    /*孔*/
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
    {
      path: '/retrieve',
      name: 'retrieve',
      component: retrieve
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    },
    {
      path: '/ceshi3',
      name: 'ceshi3',
      component: ceshi3
    },
    /*程*/
    {
      path: '/oeuvre',
      name: 'oeuvre',
      component: oeuvre,
      meta: {
        keep: true
      }

    }
    , {
      path: '/bookcenter',
      name: 'bookcenter',
      component: bookcenter,
      children: [
        {path: 'bookrack', name: 'bookrack', component: bookrack}
      ]
    }, {
      path: '/bookpay',
      name: 'bookpay',
      component: bookpay
    },
    {
      path: '/bookmeber',
      name: 'bookmeber',
      component: bookmeber
    },
    /*虎*/
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
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
      path:'/myself',
      name:'myself',
      component:myself
    },
    {
      path:'/portrait',
      name:'portrait',
      component:portrait
    },
    {
      path:'/property',
      name:'property',
      component:property
    },
    {
      path:'/setting',
      name:'setting',
      component:setting
    }
  ]
})

