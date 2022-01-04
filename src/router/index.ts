/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-06 17:41:28
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-04 16:55:05
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const global: Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'login' }, meta: { title_cn: '重定向', title_en: 'Redirect' } },
  { path: '/login', name: 'login', component: () => import("../views/login"), meta: { title_cn: '登录', title_en: 'Login' } },
]

const main: Array<RouteRecordRaw> = [
  {
    path: "/index",
    name: "Index",
    redirect: '/boss',
    component: () => import("../views/index"),
    children: [{
      path: 'bigData',
      name: 'Bigdata',
      component: () => import("../views/bigData/index"),
    }, {
      path: 'boss',
      name: 'Boss',
      component: () => import("../views/boss/index"),
    }]
  }
]

const routes: RouteRecordRaw[] = global.concat(main)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
