/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-07 16:33:19
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-07 16:56:51
 */
export interface iObject {
  [key: string]: any
}

export interface iFn {
  (...args: any[]): any
}