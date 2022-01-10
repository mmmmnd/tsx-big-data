/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 10:24:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-07 18:04:18
 */
import "@/assets/scss/boss.scss";
import { defineComponent, reactive, } from 'vue'
import vPersonnel from "../personnel";
import vDataMonthSpending from "../dataMonthSpending";
import vDataMonthAccount from "../dataMonthAccount";
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
    const data = reactive<any>({
      personnel: [{
        title: "dyrysl",
        data: []
      }, {
        title: "dyryldzb",
        data: []
      }],
      monthAccount: [{
        title: "dydzsj",
        data: {}
      }],
      education: [{
        title: "xlfb",
        data: []
      }, {
        title: "nnrs",
        data: []
      }],
      rank: [{
        title: "ryxzfb",
        data: {}
      }],
      age: [{
        title: "rynlfb",
        data: {}
      }, {
        title: "ryslfb",
        data: {}
      }],
      proportion: [{
        title: "ywlxfb",
        data: {}
      }],
      annualSalary: [{
        title: "ghypjgz",
        data: {}
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
              {!!data.personnel[0].data.length && <v-education data={data.education} />}
            </div>
            <div class="d-flex rank">
              {!!data.rank[0].data?.value && <v-rank data={data.rank[0].data} />}
            </div>
          </div>

          <div class="d-flex jc-between item-box">
            <div class="d-flex age">
              {!!data.age[0].data?.data && <v-age data={data.age} />}
            </div>
            <div class="d-flex salary">
              <v-salary />
            </div>
          </div>

          <div class="d-flex item-box">
            <div class="d-flex personnel">
              {!!data.personnel[0].data.length && <v-personnel data={data.personnel} />}
            </div>
          </div>

          <div class="d-flex jc-between item-box">
            <div class="d-flex data-month-spending">
              <v-data-month-spending />
            </div>
            <div class="d-flex data-month-account">
              {!!data.monthAccount[0].data?.data && <v-data-month-account data={data.monthAccount[0].data} />}
            </div>
          </div>

          <div class="d-flex jc-between item-box">
            <div class="d-flex proportion">
              {!!data.proportion[0].data?.data && <v-proportion data={data.proportion[0].data} />}
            </div>
            <div class="d-flex average-salary">
              <v-average-salary />
            </div>
          </div>

          <div class="d-flex item-box">
            <div class="d-flex annualSalary">
              {!!data.annualSalary[0].data?.data && <v-annual-salary data={data.annualSalary[0].data} />}
            </div>
          </div>

        </div>
      </>
    );
  }
})