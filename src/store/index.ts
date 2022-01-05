/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-05 11:39:02
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-05 11:45:34
 */

import { createStore } from 'vuex'
import getters from './getters'

const modulesFiles: any = require.context('./modules', true, /\.(ts|js)$/)
const modules = modulesFiles.keys().reduce((modules: any, modulePath: string) => {
  const moduleName: string = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value: any = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default createStore({
  modules,
  getters
});

