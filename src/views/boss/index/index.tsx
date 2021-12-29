/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 10:24:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-29 09:30:36
 */
import "@/assets/scss/boss.scss";
import { defineComponent } from 'vue'
import vPersonnel from "../personnel";
import vDataMonthSpending from "../dataMonthSpending";
import vDataMonthAccount from "../dataMonthaccount";
import vEducation from "../education";
import vRank from "../rank";
import vAge from "../age";
import vSalary from "../salary";

export default defineComponent({
  components: {
    vPersonnel,
    vDataMonthSpending,
    vDataMonthAccount,
    vEducation,
    vRank,
    vAge,
    vSalary
  },
  name: 'Boss',
  setup() {
    return () => (
      <>
        <div id="boss">

          <div class="d-flex item-box">
            <div class="d-flex personnel">
              <v-personnel />
            </div>
          </div>

          <div class="d-flex jc-between item-box">
            <div class="d-flex data-month-spending">
              <v-data-month-spending />
            </div>
            <div class="d-flex data-month-account">
              <v-data-month-account />
            </div>
          </div>

          <div class="d-flex jc-between item-box">
            <div class="d-flex education">
              <v-education />
            </div>
            <div class="d-flex rank">
              <v-rank />
            </div>
          </div>

          <div class="d-flex jc-between item-box">
            <div class="d-flex age">
              <v-age />
            </div>
            <div class="d-flex salary">
              <v-salary />
            </div>
          </div>

        </div>
      </>
    );
  }
})