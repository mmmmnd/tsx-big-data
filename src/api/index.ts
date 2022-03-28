/*
 * @Description: 登录
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2020-12-28 16:25:18
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-03-28 09:27:12
 */
import { ResponseData } from 'axios'
import HTTP from '@/utils/request'
import { User } from "@/interfaces/user";
import { Config } from "@/interfaces/config";

export function bossApi(): Promise<ResponseData<any>> {
  return HTTP({
    url: 'bigdata/bigdata/index',
    method: 'get',
  })
}

export function bigDataApi(): Promise<ResponseData<any>> {
  return HTTP({
    url: 'bigdata/bigdata/boss',
    method: 'get',
  })
}

export function smsApi(params: User.phone): Promise<ResponseData<Config.sms>> {
  return HTTP({
    url: 'bigdata/bigdata/big_sms',
    method: 'post',
    data: params
  })
}

export function checkApi(params: User.checkPhone): Promise<ResponseData<Config.jtId>> {
  return HTTP({
    url: 'bigdata/bigdata/check',
    method: 'post',
    data: params
  })
}
