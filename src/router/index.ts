/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-06 17:41:28
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-04 15:49:54
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
