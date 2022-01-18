/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-09 16:33:09
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-12 15:49:45
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigRevenue } from "@/config/enum";
import vRevenueChart from "../component/revenueChart"
import gPie from "@/components/pie"
import gDoubleDealer from "@/components/doubleDealer"

// 定义类型
const PropsType = {
  data: {
    type: Object,
    default: {},
    require: true
  }
} as const

export default defineComponent({
  props: PropsType,
  components: {
    vRevenueChart,
    gPie,
    gDoubleDealer
  },
  name: 'Revenue',
  setup(props) {

    const dataChart = reactive({
      lines: props.data[0].data.lines,
      xNames: props.data[0].data.xNames,
      lists: props.data[0].data.lists,
    })

    const dataPie = reactive({
      height: "300px",
      width: "490px",
      seriesPosition: "outside",
      seriesRadius: ['30%', '50%'],
      legendTop: "5%",
      fontSize: 20,
      number: props.data[1].data.number,
      lines: props.data[1].data.lines,
      data: props.data[1].data.data
    })


    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <h5 class="fs-md text-blue title-revenue">{enumConfigRevenue.TITLE_NAME}</h5>
          <div class="pt-3 d-flex jc-between">
            <v-revenue-chart lines={dataChart.lines}
              xNames={dataChart.xNames}
              lists={dataChart.lists} />
            <div class="d-flex flex-column">
              <dv-border-box-8 class="dv-dor-8">
                <div class="d-flex number-revenue jc-center">
                  <div class="d-flex flex-column text-center">
                    <g-double-dealer class="mt-2 dv-dig-flop"
                      number={dataPie.number}
                      fontSize={dataPie.fontSize} />
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