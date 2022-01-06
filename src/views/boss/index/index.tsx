/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 10:24:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-06 11:19:41
 */
import "@/assets/scss/boss.scss";
import { defineComponent, reactive } from 'vue'
import vPersonnel from "../personnel";
import vDataMonthSpending from "../dataMonthSpending";
import vDataMonthAccount from "../dataMonthaccount";
import vEducation from "../education";
import vRank from "../rank";
import vAge from "../age";
import vSalary from "../salary";
import vProportion from "../proportion";
import vAverageSalary from "../averageSalary";
import vAnnualSalary from "../annualSalary";

import { indexApi } from '@/api/bigdata'

export default defineComponent({
  components: {
    vPersonnel,
    vDataMonthSpending,
    vDataMonthAccount,
    vEducation,
    vRank,
    vAge,
    vSalary,
    vProportion,
    vAverageSalary,
    vAnnualSalary
  },
  name: 'Boss',
  setup() {
    const data = reactive({
      personnel: [{
        title: "dyrysl",
        data: []
      }, {
        title: "dyryldzb",
        data: []
      }]
    })

    indexApi().then(r => {
      const lists = r.data;
      for (const i in data) {
        for (const j in data[i]) {
          lists.forEach(list => {
            if (data[i][j].title == list.title) {
              data[i][j].data = list.data
            }
          })
        }
      }

    })

    return () => (
      <>
        <div id="boss">

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

          <div class="d-flex item-box">
            <div class="d-flex personnel">
              <v-personnel data={data.personnel} />
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
            <div class="d-flex proportion">
              <v-proportion />
            </div>
            <div class="d-flex average-salary">
              <v-average-salary />
            </div>
          </div>

          <div class="d-flex item-box">
            <div class="d-flex annualSalary">
              <v-annualSalary />
            </div>
          </div>

        </div>
      </>
    );
  }
})