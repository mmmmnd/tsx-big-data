/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-09 16:33:09
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-21 14:47:17
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigRevenue } from "@/config/enum";
import vRevenueChart from "../component/revenueChart"
import gPie from "@/components/pie"
import gDoubleDealer from "@/components/doubleDealer"

export default defineComponent({
  components: {
    vRevenueChart,
    gPie,
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
      height: "300px",
      width: "420px",
      seriesPosition: "outside",
      seriesRadius: ['30%', '50%'],
      legendTop: "5%",
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
          <h5 class="fs-md text-blue title-revenue">{enumConfigRevenue.MONTHLY_REVENUE_NAME}</h5>
          <div class="pt-3 d-flex jc-between">
            <v-revenue-chart lines={dataChart.lines}
              xNames={dataChart.xNames}
              lists={dataChart.lists} />
            <div class="d-flex flex-column">
              <dv-border-box-8 class="dv-dor-8">
                <div class="d-flex number-revenue jc-center">
                  <div class="d-flex flex-column text-center">
                    <g-double-dealer class="mt-2 dv-dig-flop"
                      number={dataChart.number}
                      fontSize={dataChart.fontSize} />
                    <p class="mt-1 text-blue">{enumConfigRevenue.ANNUAL_PROFIT_NAME}</p>
                  </div>
                </div>

                <g-pie height={dataPie.height}
                  width={dataPie.width}
                  data={dataPie.data}
                  lines={dataPie.lines}
                  legendTop={dataPie.legendTop}
                  seriesRadius={dataPie.seriesRadius}
                  seriesPosition={dataPie.seriesPosition} />
              </dv-border-box-8>

            </div>
          </div>

        </dv-border-box-9>
      </>
    );
  }
})