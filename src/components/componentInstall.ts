/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-06 17:41:28
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-08 17:42:25
 */
import type { DefineComponent } from 'vue'

const component = Object.create(null)
/* eslint-disable */
import Echart from './echart/index'

component.install = function (vue: DefineComponent, options: any) {
  // ECharts 图表渲染
  vue.component('echart', Echart)
}
export default component
