import Vue from 'vue'
import Router from 'vue-router'
// import util from '@/util/myUtil'
import {Indicator } from 'mint-ui'

//首页组件定义
let Home=(resolve) => require(['@/components/Home'], resolve)

//价格计算
let Unit=(resolve) => require(['@/components/price/Unit'], resolve)
let Weigh=(resolve) => require(['@/components/price/Weigh'], resolve)
let Lisuan=(resolve) => require(['@/components/price/Lisuan'], resolve)
let Juanban=(resolve) => require(['@/components/price/Juanban'], resolve)

//查询类别
let Category=(resolve) => require(['@/components/category/Index'], resolve)

Vue.use(Router)
let routes=[
  {
    path: '/',
    name: 'Home',
    meta:{
      title:'钢材查询计算'
    },
    component: Home
  },
  {
    path: '/price/unit',
    name: 'Unit',
    meta:{
      title:'平板单价'
    },
    component: Unit
  },
  {
    path: '/price/weigh',
    name: 'Weigh',
    meta:{
      title:'平板过磅计价'
    },
    component: Weigh
  },
  {
    path: '/price/lisuan',
    name: 'Lisuan',
    meta:{
      title:'平板理算计价'
    },
    component: Lisuan
  },
  {
    path: '/price/juanban',
    name: 'Juanban',
    meta:{
      title:'卷板计价'
    },
    component: Juanban
  },
  {
    path: '/category',
    name: 'Category',
    meta:{
      title:'查询类别'
    },
    component: Category
  }
]

const router= new Router({
  routes,
  linkActiveClass: 'active',
  mode:'history'
})

router.beforeEach((to, from, next) => {
  Indicator.open({spinnerType: 'fading-circle'})
  document.title=to.meta.title
  setTimeout(()=>next(),500)
})

router.afterEach((to, from, next) => {
  Indicator.close()
  window.scrollTo(0, 0)
})

export default router
