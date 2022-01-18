/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-31 08:53:39
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 10:08:44
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigAnnualSalary } from "@/config/enum";
import vAnnualSalaryColumnar from "../component/annualSalaryColumnar"

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
    vAnnualSalaryColumnar,
  },
  name: 'AnnualSalary',
  setup(props) {

    const dataChart = reactive({
      height: "600px",
      width: "1820px",
      data: props.data[0].data.data,
      xName: props.data[0].data.xName
    })

    return () => (
      <>
        <div class="d-flex">
          <dv-border-box-8 class="p-4"
            color={['#00c2ff', '#00c2ff']} >
            <div class="d-flex title">
              <h5 class="fs-md text-blue">{enumConfigAnnualSalary.TITLE_NAME}</h5>
            </div>
            <v-annual-salary-columnar data={dataChart.data}
              xName={dataChart.xName}
              height={dataChart.height}
              width={dataChart.width}
            />
          </dv-border-box-8>
        </div>
      </>
    );
  }
})