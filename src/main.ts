/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-06 17:41:28
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-09 10:56:49
 */
import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view';

// 引入全局css
import './assets/scss/style.scss';

// 引入 全局注册组件
import PublicComponent from '@/components/componentInstall';
import SvgIcon from '@/components/svgIcon'

// 引入svg
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const r = require.context('@/assets/svg', false, /.svg$/)
requireAll(r)

const app = createApp(App)

app.use(dataV)
app.use(store)
app.use(router)
app.mount('#app')

app.use(PublicComponent)
app.component(SvgIcon.name, SvgIcon)