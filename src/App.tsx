/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-06 16:28:44
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-07 09:13:03
 */
import '@/assets/scss/App.scss';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class="app">
        <RouterView />
      </div>
    );
  }
});