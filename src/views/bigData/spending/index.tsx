/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-17 16:38:44
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 16:10:41
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigSpending } from "@/config/enum";
import gPie from "@/components/pie"
import gDashboard from "@/components/dashboard"
import gTableSwiper from "@/components/tableSwiper"
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
    gPie,
    gDashboard,
    gTableSwiper,
    gDoubleDealer
  },
  name: 'Spending',
  setup(props) {

    const dataPie = reactive({
      height: "340px",
      width: "480px",
      seriesPosition: "outside",
      seriesRadius: ['0%', '50%'],
      legendTop: "0%",
      fontSize: 30,
      content2: props.data[0].data.content2,
      number2: props.data[0].data.number2,
      number1: props.data[0].data.number1,
      lines: props.data[0].data.lines,
      data: props.data[0].data.data
    })

    const dataDashboard = reactive({
      height: "300px",
      width: "240px",
    })

    const dataTable = reactive({
      header: props.data[1].data.header,
      data: props.data[1].data.data
    })

    return () => (
      <>
        <dv-border-box-12 class="p-4">
          <div class="d-flex title">
            <h5 class="fs-md text-blue">{enumConfigSpending.TITLE_NAME}</h5>
          </div>
          <div class="d-flex">
            <div class="d-flex info-wrapper">
              <div class="info-left">
                <g-pie height={dataPie.height}
                  width={dataPie.width}
                  data={dataPie.data}
                  lines={dataPie.lines}
                  legendTop={dataPie.legendTop}
                  seriesRadius={dataPie.seriesRadius}
                  seriesPosition={dataPie.seriesPosition} />
              </div>
              <div class="d-flex ai-center info-right">
                <div class="count-wrapper">
                  <g-dashboard height={dataDashboard.height}
                    width={dataDashboard.width} />
                  <div class="d-flex flex-column jc-center ai-center count-main">
                    <p class="fs-xl">{enumConfigSpending.STROKE_COUNT_NAME}</p>
                    <g-double-dealer class="mt-4 dv-dig-flop"
                      number={dataPie.number1}
                      fontSize={dataPie.fontSize} />
                  </div>
                </div>
                <div class="d-flex flex-column ai-center month-wrapper">
                  <g-double-dealer class="dv-dig-flop"
                    content={dataPie.content2}
                    number={dataPie.number2}
                    fontSize={dataPie.fontSize} />
                  <p class="fs-xl mt-4">{enumConfigSpending.LAST_MONTH_NAME}</p>
                  <dv-decoration-1 class="dv-dec-1"
                    color={['transparent', '#00c2ff',]} />
                </div>
              </div>
              <dv-decoration-3 class="dv-dec-3"
                color={['transparent', '#00c2ff',]} />
            </div>
            <div class="table-wrapper">
              <dv-border-box-7>
                <g-table-swiper data={dataTable.data}
                  header={dataTable.header} />
              </dv-border-box-7>
            </div>
          </div>
        </dv-border-box-12>
      </>
    );
  }
})