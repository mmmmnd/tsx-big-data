/*
 * @Description: 登录
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-28 16:25:18
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-31 16:09:50
 */
import HTTP from '@/utils/request'

export function loginApi(params: any): any {
  return HTTP({
    url: '/base/login',
    method: 'post',
    data: params
  })
}
