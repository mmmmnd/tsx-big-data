/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-05 11:39:02
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-07 16:58:27
 */
import { ActionContext } from 'vuex'
import { iObject } from "@/interfaces/index";
import { User } from "@/interfaces/user";
import useStorage from '@/utils/useStorage';
const storage = useStorage();

interface State {
  userInfo: User.userInfo
}

const state = {
  userInfo: storage.getItem("userInfo") || {
    login: false
  }
}

const mutations = {
  SET_USER_LOGIN(state: State, login: User.userInfo): void {
    const userInfo: iObject = Object.assign(state.userInfo, login);
    storage.setItem("userInfo", userInfo)
  },
  RESET_USER_INFO(state: State): void {
    state.userInfo.login = false;
    storage.removeItem("userInfo")
  }
}

const actions = {
  setUserLogin({ commit }: ActionContext<State, null>, login: User.userInfo): void {
    commit('SET_USER_LOGIN', login)
  },
  resetUserInfo({ commit }: ActionContext<State, null>): void {
    commit('RESET_USER_INFO')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
