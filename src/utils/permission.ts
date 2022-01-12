/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2020-08-31 10:33:51
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 14:29:24
 */
import router from "@/router";
import store from '@/store';
import { ElMessage } from 'element-plus';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false }); //进度条 配置

const title = "tsx-big-data";
const whiteList = ['/boss', '/login']; // 路由白名单
const getPageTitle = pageTitle => pageTitle ? `${pageTitle} - ${title}` : `${title}`;

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  document.title = getPageTitle(to.meta.title);
  const hasLogin = sessionStorage.getItem('login');
  if (hasLogin) {

    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      const hasGetInfoLogin = store.getters.info["login"];
      if (hasGetInfoLogin) {
        next();
      } else {
        try {
          next({ ...to, replace: true });
        } catch (error) {
          sessionStorage.removeItem("login");
          await store.dispatch('user/resetUserInfo');
          ElMessage.error(`${error}` || 'Has Error');
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }

  } else {

    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
})

router.afterEach(() => NProgress.done())