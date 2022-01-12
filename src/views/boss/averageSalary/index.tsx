/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-29 15:47:39
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 10:12:22
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigProportion } from "@/config/enum";
import gTableSwiper from "@/components/tableSwiper"
import vAverageSalary from "../component/averageSalaryChart"

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
    gTableSwiper,
    vAverageSalary
  },
  name: 'AverageSalary',
  setup(props) {

    const dataChart = reactive({
      height: "350px",
      width: "900px",
      data: props.data[0].data.data,
      xName: props.data[0].data.xName,
    })

    return () => (
      <>
        <div class="d-flex">
          <dv-border-box-9 class="p-4"
            color={['#00c2ff', '#00c2ff']} >
            <div class="d-flex title pt-3">
              <h5 class="fs-md text-blue">{enumConfigProportion.TITLE_NAME}</h5>
            </div>
            <div class="table-wrapper">
              <v-average-salary data={dataChart.data}
                xName={dataChart.xName}
                height={dataChart.height}
                width={dataChart.width} />
            </div>
          </dv-border-box-9>
        </div>
      </>
    );
  }
})