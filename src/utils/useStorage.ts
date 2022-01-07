/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-05 17:22:56
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-07 17:00:23
 */
import { iObject } from "@/interfaces/index";

const storage = window.localStorage;

export default function () {

  const getItem = (key: string) => {
    return JSON.parse(storage.getItem(key))
  }

  const setItem = (key: string, val: iObject) => {
    storage.setItem(key, JSON.stringify(val))
  }

  const delItem = () => {
    storage.clear()
  }

  const showKeys = () => {
    return storage.keys()
  }

  const removeItem = (key: string) => {
    storage.removeItem(key)
  }

  return {
    getItem,
    setItem,
    delItem,
    showKeys,
    removeItem
  }
}