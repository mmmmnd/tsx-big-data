/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-06 17:41:28
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-10 11:01:14
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as axios from "axios";
declare module '@jiaminghi/data-view';

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
  interface ResponseData<T> {
    code: number,
    msg: string,
    data: T
  }
}
