/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-06 17:41:28
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-07 09:02:45
 */
import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view';
// 引入全局css
import './assets/scss/style.scss';
// 引入图表（所有图标见 icon 目录下的 demo_index.html）
import './assets/icon/iconfont.css'
// 引入 全局注册组件
import PublicComponent from '@/components/componentInstall';

const app = createApp(App)
app.use(PublicComponent)
app.use(dataV)
app.use(store)
app.use(router)
app.mount('#app')
