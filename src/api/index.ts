/*
 * @Description: 登录
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-28 16:25:18
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-10 14:46:56
 */
import { ResponseData } from 'axios'
import HTTP from '@/utils/request'
import { User } from "@/interfaces/user";

export function indexApi(): Promise<ResponseData<any>> {
  return HTTP({
    url: 'bigdata/bigdata/index',
    method: 'get',
  })
}

export function smsApi(params: User.userPhone): Promise<ResponseData<User.userPhone>> {
  return HTTP({
    url: 'bigdata/bigdata/sms',
    method: 'post',
    data: params
  })
}
