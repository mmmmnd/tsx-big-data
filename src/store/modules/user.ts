/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-05 11:39:02
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 14:28:32
 */
import { ActionContext } from 'vuex'
import { iObject } from "@/interfaces/index";
import { User } from "@/interfaces/user";
import useStorage from '@/utils/useStorage';
const storage = useStorage();

interface State {
  info: User.info
}

const state = {
  info: storage.getItem("info") || {
    login: false
  }
}

const mutations = {
  SET_USER_LOGIN(state: State, login: User.info): void {
    const info: iObject = Object.assign(state.info, login);
    storage.setItem("info", info)
  },
  RESET_USER_INFO(state: State): void {
    state.info.login = false;
    storage.removeItem("info")
  }
}

const actions = {
  setUserLogin({ commit }: ActionContext<State, null>, login: User.info): void {
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
