/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-29 15:47:02
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 10:08:00
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import gPie from "@/components/pie"
import { enumConfigAverageSalary } from "@/config/enum";
import gTableSwiper from "@/components/tableSwiper"

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
    gTableSwiper,
  },
  name: 'Proportion',
  setup(props) {

    const dataPie = reactive({
      height: "350px",
      width: "900px",
      seriesPosition: "outside",
      seriesRadius: ['0%', '50%'],
      legendTop: "0%",
      lines: props.data[0].data.lines,
      data: props.data[0].data.data
    })

    return () => (
      <>
        <div class="d-flex">
          <dv-border-box-9 class="p-4"
            color={['#00c2ff', '#00c2ff']}>
            <div class="d-flex title pt-3">
              <h5 class="fs-md text-blue">{enumConfigAverageSalary.TITLE_NAME}</h5>
            </div>
            <div class="table-wrapper">
              <g-pie height={dataPie.height}
                width={dataPie.width}
                data={dataPie.data}
                lines={dataPie.lines}
                legendTop={dataPie.legendTop}
                seriesRadius={dataPie.seriesRadius}
                seriesPosition={dataPie.seriesPosition} />
              <dv-decoration-3 class="dv-dec-3"
                color={['transparent', '#00c2ff',]} />
            </div>
          </dv-border-box-9>
        </div>
      </>
    );
  }
})