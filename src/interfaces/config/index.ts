/* eslint-disable @typescript-eslint/no-namespace */
/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-11 17:41:51
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 17:43:49
 */

export namespace Config {

  export interface jtId {
    jituanid: boolean
  }

  export interface sms {
    RequestId: string,
    Message: string,
    BizId: string,
    Code: string,
  }

}
