/* eslint-disable @typescript-eslint/no-namespace */
/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-05 17:50:25
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 15:01:44
 */
import { iObject } from "@/interfaces/index";
export namespace User {

  export interface index {
    user: iObject;
  }

  export interface info {
    login: boolean
  }

  export interface phone {
    mobile: string
  }

  export interface checkPhone extends phone {
    sms: string
  }
}

