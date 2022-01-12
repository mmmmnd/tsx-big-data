/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-31 16:06:50
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 15:51:50
 */
import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'
import { HTTP_ERROR } from '@/config/index'

/**
 * 异常消息提示
 * @param { String } message 错误信息
 */
const prompt = (message?: string): void => {
  ElMessage({
    showClose: true,
    message: message,
    type: 'warning',
  })
}
let loading = null;

/**
 * axios创建
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // timeout: TIME_OUT,
  // headers: {
  //   'Content-Type': CONTENT_TYPE
  // }
})

/**
 * 拦截器
 */
service.interceptors.request.use(
  config => {
    loading = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
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
    console.log(error)
    return Promise.reject(error)
  }
)

/**
 * 响应器
 */
service.interceptors.response.use(
  response => {
    loading.close()
    return !response.data.code && response.data ? response.data || null : prompt(response.data.msg);
  },
  error => {
    const msg = error && error.response ? HTTP_ERROR[error.response.status] || `连接错误${error.response.status}` : "连接到服务器失败";
    loading.close()
    prompt(msg);
    return Promise.reject(error)
  }
)

export default service
