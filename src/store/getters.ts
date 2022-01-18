/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-05 11:39:02
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 14:34:53
 */
import { User } from "@/interfaces/user";
import { iObject } from "@/interfaces/index";

const getters = {
  info: (state: User.index): iObject => state.user.info,
}

export default getters
