/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-29 15:47:02
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-30 18:13:35
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import gPie from "@/components/pie"
import { enumConfigaverageSalary } from "@/config/enum";
import gTableSwiper from "@/components/tableSwiper"

export default defineComponent({
  components: {
    gPie,
    gTableSwiper,
  },
  name: 'Proportion',
  setup() {

    const dataPie = reactive({
      height: "350px",
      width: "900px",
      seriesPosition: "outside",
      seriesRadius: ['0%', '50%'],
      legendTop: "0%",
      legendLeft: "15%",
      lines: ["外包A类", "外包B类", "外包C类", "外包D类", "劳务派遣A类", "劳务派遣B类"],
      data: [{
        name: '外包A类',
        value: 2363
      }, {
        name: '外包B类',
        value: 11344
      }, {
        name: '外包C类',
        value: 1253
      }, {
        name: '外包D类',
        value: 4643
      }, {
        name: '劳务派遣A类',
        value: 7854
      }, {
        name: '劳务派遣B类',
        value: 4534
      }]
    })

    return () => (
      <>
        <div class="d-flex">
          <dv-border-box-9 class="p-4"
            color={['#00c2ff', '#00c2ff']}>
            <div class="d-flex title pt-3">
              <h5 class="fs-md text-blue">{enumConfigaverageSalary.TITLE_NAME}</h5>
            </div>
            <div class="table-wrapper">
              <g-pie height={dataPie.height}
                width={dataPie.width}
                data={dataPie.data}
                lines={dataPie.lines}
                legendTop={dataPie.legendTop}
                legendLeft={dataPie.legendLeft}
                seriesRadius={dataPie.seriesRadius}
                seriesPosition={dataPie.seriesPosition} />
            </div>
          </dv-border-box-9>
        </div>
      </>
    );
  }
})