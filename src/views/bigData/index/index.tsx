/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 10:24:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 16:28:09
 */
import "@/assets/scss/bigData.scss";
import { defineComponent, reactive } from 'vue';
import vCustomer from "../customer";
import vRevenue from "../revenue";
import vSpending from "../spending";
import vAccount from "../account";
import vAdvance from "../advance";
import vAdvanceRanking from "../advanceRanking";
import vPersonnel from "../personnel";
import vPayment from "../payment";

import { bigDataApi } from '@/api'

export default defineComponent({
  components: {
    vCustomer,
    vRevenue,
    vSpending,
    vAccount,
    vAdvance,
    vAdvanceRanking,
    vPersonnel,
    vPayment
  },
  name: 'BigData',
  setup() {

    const data = reactive<any>({
      customer: [{
        title: "boss_khxx",
        data: []
      }],
      personnel: [{
        title: "boss_ryxx",
        data: []
      }, {
        title: "boss_ryxxday",
        data: []
      }],
      payment: [{
        title: "boss_allxc",
        data: []
      }],
      account: [{
        title: "boss_daozhang",
        data: []
      }, {
        title: "boss_daozhangtj",
        data: []
      }],
      spending: [{
        title: "boss_zhichutj",
        data: []
      }, {
        title: "boss_zhichu",
        data: []
      }],
      revenue: [{
        title: "boss_yys",
        data: []
      }, {
        title: "boss_zys",
        data: []
      }],
      advance: [{
        title: "boss_dzzs",
        data: []
      }, {
        title: "boss_dzhkl",
        data: []
      }],
      advanceRanking: [{
        title: "boss_dztop10",
        data: []
      }],
    })

    bigDataApi().then(r => {
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
        <div id="bigData" class="d-flex flex-column ">

          <div class="d-flex jc-between item-box">
            <div class="d-flex jc-start customer">
              {!!data.customer[0].data.length && <v-customer data={data.customer} />}
            </div>
            <div class="d-flex jc-end revenue">
              {!!data.revenue[0].data?.lists && <v-revenue data={data.revenue} />}
            </div>
          </div>

          <div class="d-flex item-box">
            <div class="spending">
              {!!data.spending[0].data?.data && <v-spending data={data.spending} />}
            </div>
          </div>

          <div class="d-flex item-box">
            <div class="spending">
              {!!data.account[0].data?.data && <v-account data={data.account} />}
            </div>
          </div>

          <div class="d-flex jc-between item-box">
            <div class="d-flex jc-start advance">
              {!!data.advance[0].data?.data && <v-advance data={data.advance} />}
            </div>
            <div class="d-flex jc-end advance-ranking">
              {!!data.advanceRanking[0].data?.data && <v-advance-ranking data={data.advanceRanking} />}
            </div>
          </div>

          <div class="d-flex jc-between item-box">
            <div class="d-flex jc-start personnel">
              {!!data.personnel[0].data?.data && <v-personnel data={data.personnel} />}
            </div>
            <div class="d-flex jc-end payment">
              {!!data.payment[0].data.length && <v-payment data={data.payment} />}
            </div>
          </div>
        </div>
      </>
    );
  }
})