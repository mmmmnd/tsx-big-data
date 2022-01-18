/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-10 14:27:21
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-10 14:27:22
 */
export default function () {
  const phone = (phone: string) => /^1[0-9]{10}$/.test(phone);

  return {
    phone
  }
}