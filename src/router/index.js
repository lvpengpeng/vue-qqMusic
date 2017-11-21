import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mheader from '@/components/Mheader'
import  rank from  '../views/rank/index.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
    name: '主页'
  }, {
    path: '/home',
    component: rank
    // ,
    // children: [{
    //   path: '/home/:id',
    //   component: Mheader
    // }]
  }
  , {
    path: '/HelloWorld',
    component: HelloWorld
    //   ,
    // children: [{
    //   path: '/HelloWorld/:id',
    //   component: SingerDetail
    // }]
  }
    // , {
  //   path: '/search',
  //   component: Search,
  //   children: [{
  //     path: '/search/:id',
  //     component: SingerDetail
  //   }]
  //
  // }, {
  //   path: '/rank',
  //   component: Rank,
  //   children: [{
  //     path: '/rank/:id',
  //     component: RankDetail
  //   }]
  // }, {
  //   path: '/user',
  //   component: UserCenter
  // }
  ]
})
