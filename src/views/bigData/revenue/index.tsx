/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-09 16:33:09
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-17 16:21:35
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigrevenue } from "@/config/enum";
import vRevenueChart from "../component/revenueChart"
import vRevenuePie from "../component/revenuePie"
import gDoubleDealer from "@/components/doubleDealer"

export default defineComponent({
  components: {
    vRevenueChart,
    vRevenuePie,
    gDoubleDealer
  },
  name: 'Revenue',
  setup() {

    const dataChart = reactive({
      lines: ["收入", "支出"],
      xNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      lists: [
        [67, 97, 51, 38, 67, 97, 51, 38, 94, 23, 43, 18],
        [94, 23, 43, 18, 97, 51, 38, 67, 67, 97, 51, 38]
      ],
      number: [0],
      fontSize: 20,
    })

    const dataPie = reactive({
      lines: ["年收入", "年支出"],
      data: [{
        name: '年收入',
        value: 789
      }, {
        name: '年支出',
        value: 2789
      }]
    })

    setTimeout(() => {
      dataChart.number = [9999999]
    }, 1000)

    return () => (
      <>
        <dv-border-box-9 class="p-4">

          <h5 class="fs-md text-blue title-revenue">{enumConfigrevenue.MONTHLY_REVENUE_NAME}</h5>
          <div class="pt-3 d-flex jc-between">
            <v-revenue-chart lines={dataChart.lines}
              xNames={dataChart.xNames}
              lists={dataChart.lists} />
            <div class="d-flex flex-column">
              <div class="d-flex number-revenue jc-center">
                <div class="d-flex flex-column text-center">
                  <g-DoubleDealer class="mt-2 dv-dig-flop"
                    number={dataChart.number}
                    fontSize={dataChart.fontSize} />
                  <p class="mt-1 text-blue">{enumConfigrevenue.ANNUAL_PROFIT_NAME}</p>
                </div>
              </div>

              <vRevenuePie lines={dataPie.lines}
                data={dataPie.data} />
            </div>
          </div>

        </dv-border-box-9>
      </>
    );
  }
})