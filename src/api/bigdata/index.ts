/*
 * @Description: 登录
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-28 16:25:18
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-06 09:07:08
 */
import HTTP from '@/utils/request'

export function indexApi(): any {
  return HTTP({
    url: 'bigdata/bigdata/index',
    method: 'get',
  })
}
