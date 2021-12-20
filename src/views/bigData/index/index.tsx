/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 10:24:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-20 15:06:54
 */
import "@/assets/scss/bigData.scss";
import { defineComponent } from 'vue';
import vCustomer from "../customer";
import vRevenue from "../revenue";
import vSpending from "../spending";

export default defineComponent({
  components: {
    vCustomer,
    vRevenue,
    vSpending
  },
  name: 'BigData',
  setup() {

    return () => (
      <>
        <div id="bigData" class="d-flex flex-column ">

          <div class="d-flex jc-between item-box">
            <div class="d-flex jc-start customer">
              <v-customer />
            </div>
            <div class="d-flex jc-end revenue">
              <v-revenue />
            </div>
          </div>

          <div class="d-flex item-box">
            <div class="spending">
              <v-spending />
            </div>
          </div>

        </div>
      </>
    );
  }
})