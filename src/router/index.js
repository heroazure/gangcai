import Vue from 'vue'
import Router from 'vue-router'
import util from '@/util/myUtil'
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

//材质
let Material=(resolve) => require(['@/components/material/Index'], resolve)

//重量计算
let Gangban=(resolve) => require(['@/components/weight/Gangban'], resolve)
let Yuangang=(resolve) => require(['@/components/weight/Yuangang'], resolve)
let Fanggang=(resolve) => require(['@/components/weight/Fanggang'], resolve)
let Liujiaogang=(resolve) => require(['@/components/weight/Liujiaogang'], resolve)
let Bajiaogang=(resolve) => require(['@/components/weight/Bajiaogang'], resolve)
let Biangang=(resolve) => require(['@/components/weight/Biangang'], resolve)
let Dengbianjiaogang=(resolve) => require(['@/components/weight/Dengbianjiaogang'], resolve)
let Budengbianjiaogang=(resolve) => require(['@/components/weight/Budengbianjiaogang'], resolve)
let Wufengguan=(resolve) => require(['@/components/weight/Wufengguan'], resolve)
let Caogang=(resolve) => require(['@/components/weight/Caogang'], resolve)
let Gongzigang=(resolve) => require(['@/components/weight/Gongzigang'], resolve)
let Fangguan=(resolve) => require(['@/components/weight/Fangguan'], resolve)

//查询详情
let Detail=(resolve) => require(['@/components/detail/Index'], resolve)
// let Chicun=(resolve) => require(['@/components/detail/List'], resolve)

//冷热轧钢
let Cold=(resolve) => require(['@/components/zhagang/Cold'], resolve)
let Hot=(resolve) => require(['@/components/zhagang/Hot'], resolve)

Vue.use(Router)

let routes=[
  {
    path: '/',
    name: 'Home',
    meta:{
      title:'不锈钢计算器'
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
  },
  {
    path: '/weight/1',
    name: 'Gangban',
    meta:{
      title:'平板重量计算'
    },
    component: Gangban
  },
  {
    path: '/weight/2',
    name: 'Yuangang',
    meta:{
      title:'圆钢重量计算'
    },
    component: Yuangang
  },
  {
    path: '/weight/3',
    name: 'Fanggang',
    meta:{
      title:'方钢重量计算'
    },
    component: Fanggang
  },
  {
    path: '/weight/4',
    name: 'Liujiaogang',
    meta:{
      title:'六角棒重量计算'
    },
    component: Liujiaogang
  },
  {
    path: '/weight/5',
    name: 'Bajiaogang',
    meta:{
      title:'八角棒重量计算'
    },
    component: Bajiaogang
  },
  {
    path: '/weight/6',
    name: 'Biangang',
    meta:{
      title:'扁钢重量计算'
    },
    component: Biangang
  },
  {
    path: '/weight/7',
    name: 'Dengbianjiaogang',
    meta:{
      title:'等边角钢重量计算'
    },
    component: Dengbianjiaogang
  },
  {
    path: '/weight/8',
    name: 'Budengbianjiaogang',
    meta:{
      title:'不等边角钢重量计算'
    },
    component: Budengbianjiaogang
  },
  {
    path: '/weight/9',
    name: 'Wufengguan',
    meta:{
      title:'无缝管/焊管重量计算'
    },
    component: Wufengguan
  },
  {
    path: '/weight/10',
    name: 'Caogang',
    meta:{
      title:'槽钢重量计算'
    },
    component: Caogang
  },
  {
    path: '/weight/11',
    name: 'Gongzigang',
    meta:{
      title:'工字钢重量计算'
    },
    component: Gongzigang
  },
  {
    path: '/weight/12',
    name: 'Fangguan',
    meta:{
      title:'方管/矩形管重量计算'
    },
    component: Fangguan
  },
  {
    path: '/detail/index/:id/:type',
    name: 'detail',
    meta:{
      title:'详情'
    },
    component: Detail
  },
  /*{
    path: '/detail/list/:chicun',
    name: 'chicun',
    meta:{
      title:'冷热轧钢'
    },
    component: Chicun
  },*/
  {
    path: '/material',
    name: 'material',
    meta:{
      title:'材质'
    },
    component: Material
  },
  {
    path: '/zhagang/cold',
    name: 'cold',
    meta:{
      title:'冷轧钢'
    },
    component: Cold
  },
  {
    path: '/zhagang/hot',
    name: 'hot',
    meta:{
      title:'热轧钢'
    },
    component: Hot
  }
]

const router= new Router({
  routes,
  linkActiveClass: 'active',
  mode:'hash'
})

router.beforeEach((to, from, next) => {
  Indicator.open({spinnerType: 'fading-circle'})
  util.setTitle(to.meta.title)
  next()
})

router.afterEach((to, from, next) => {
  setTimeout(()=>Indicator.close(),300)
  window.scrollTo(0, 0)
})

export default router
