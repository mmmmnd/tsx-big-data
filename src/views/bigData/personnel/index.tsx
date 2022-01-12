/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-20 16:52:53
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 16:47:47
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigPersonnel } from "@/config/enum";
import gPie from "@/components/pie"
import gDashboard from "@/components/dashboard"
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
      lines: props.data[0].data.lines,
      data: props.data[0].data.data
    })

    const dataDashboard = reactive({
      height: "160px",
      width: "200px",
    })

    const dataDoubleDealer = reactive(
      props.data[1].data.map(item => {
        return {
          number: item.number,
          fontSize: item.fontSize,
          name: item.name
        }
      })
    )

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex title">
            <h5 class="fs-md text-blue">{enumConfigPersonnel.TITLE_NAME}</h5>
          </div>
          <div class="d-flex ">
            <div class="d-flex flex-column pie-wrapper">
              <g-pie height={dataPie.height}
                width={dataPie.width}
                data={dataPie.data}
                lines={dataPie.lines}
                legendTop={dataPie.legendTop}
                seriesRadius={dataPie.seriesRadius}
                seriesPosition={dataPie.seriesPosition} />
              <dv-decoration-1 class="dv-dec-1"
                color={['#00c2ff', 'transparent',]} />
            </div>
            <div class="d-flex flex-wrap personnel-info">{dataDoubleDealer.map(item =>
              <div class="count-wrapper">
                <g-dashboard height={dataDashboard.height}
                  width={dataDashboard.width} />
                <div class="d-flex jc-center ai-center count-main">
                  <g-double-dealer class="dv-dig-flop"
                    number={item.number}
                    fontSize={18} />
                </div>
                <p class="text-center count-text">{item.name}</p>
              </div>)}
            </div>
          </div>
        </dv-border-box-9>
      </>
    );
  }
})