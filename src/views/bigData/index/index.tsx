/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 10:24:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-13 16:37:26
 */
import "@/assets/scss/bigData.scss";
import { defineComponent } from 'vue';
import vCustomer from "../customer/index";
import vRevenue from "../revenue";

export default defineComponent({
  components: {
    vCustomer,
    vRevenue
  },
  name: 'BigData',
  setup() {

    return () => (
      <>
        <div id="bigData">
          <div class="d-flex customer">
            <v-customer />
            <v-revenue />
          </div>
        </div>
      </>
    );
  }
})