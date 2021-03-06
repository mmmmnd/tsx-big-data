/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-01 16:27:59
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-10 16:06:06
 */
export const WEEK = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

export const TITLE = ["大薪薪BOSS实时数据大屏", "大薪薪大数据中心"];

export const ROUTERNAME = ["切换到数据中心", "切换到boss"];

export const DATE = ["年", "季度", "月"];

export const HTTP_ERROR = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
  401: '用户没有权限（令牌、用户名、密码错误）',
  403: '用户得到授权，但是访问是被禁止的',
  404: '请求不存在',
  405: '请求方法未允许',
  406: '请求的格式不可得',
  408: '请求超时',
  410: '请求的资源被永久删除，且不会再得到的',
  411: '需要知道长度',
  413: '请求的实体太大',
  414: '请求的URL太长',
  415: '不支持的媒体类型',
  422: '当创建一个对象时，发生一个验证错误',
  500: '服务器发生错误，请检查服务器',
  501: '网络未实现',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
  505: 'http版本不支持该请求'
};