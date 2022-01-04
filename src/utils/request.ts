/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-31 16:06:50
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-04 16:28:48
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { HTTP_ERROR } from '@/config/index'

/**
 * @description: 异常消息提示
 * @param {string} string
 * @return {*}
 * @author: gumingchen
 */
const prompt = (message?: string): void => {
  ElMessage({
    showClose: true,
    message: message,
    type: 'warning',
  })
}

/**
 * @description: axios创建
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // timeout: TIME_OUT,
  // headers: {
  //   'Content-Type': CONTENT_TYPE
  // }
})

/**
 * @description: axios请求拦截器
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
service.interceptors.request.use(
  config => {
    // const tokenVal = store.getters['user/tokenVal']
    // if (tokenVal) {
    //   config.headers[TOKEN_KEY] = tokenVal
    // }
    // if (config.data) {
    //   if (config.headers['Content-Type'] === ContentType.FORM) {
    //     config.data = qs.stringify(config.data)
    //   }
    // }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

/**
 * @description: axios响应拦截器
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
service.interceptors.response.use(
  response => {
    return response.data || null
  },
  error => {
    const msg = error && error.response ? HTTP_ERROR[error.response.status] || `连接错误${error.response.status}` : "连接到服务器失败";

    prompt(msg);
    return Promise.reject(error)
  }
)

export default service
