/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-29 15:47:39
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-30 18:13:44
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigProportion } from "@/config/enum";
import gTableSwiper from "@/components/tableSwiper"
import vAverageSalary from "../component/averageSalaryChart"

export default defineComponent({
  components: {
    gTableSwiper,
    vAverageSalary
  },
  name: 'AverageSalary',
  setup() {

    const dataChart = reactive({
      height: "350px",
      width: "900px",
      data: [94, 35, 65, 14, 105, 23],
      xName: ["外包A类", "外包B类", "外包C类", "外包D类", "劳务派遣A类", "劳务派遣B类"],
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