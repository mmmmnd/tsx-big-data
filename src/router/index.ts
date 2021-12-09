/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-06 17:41:28
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-09 15:15:59
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    redirect: '/bigData',
    component: () => import("../views/index"),
    children: [{
      path: 'bigData',
      name: 'Bigdata',
      component: () => import("../views/bigData"),
    }, {
      path: 'boss',
      name: 'Boss',
      component: () => import("../views/boss"),
    }]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
