/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-17 16:38:44
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-20 11:01:52
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigCustomer } from "@/config/enum";
import gPie from "@/components/pie"


export default defineComponent({
  components: {
    gPie
  },
  name: 'Spending',
  setup() {

    const dataPie = reactive({
      height: "300px",
      width: "520px",
      seriesPosition: "outside",
      seriesRadius: ['0%', '50%'],
      legendTop: "0%",
      lines: ["工资付款", "其他付款", "转账"],
      data: [{
        name: '工资付款',
        value: 789
      }, {
        name: '其他付款',
        value: 2789
      }, {
        name: '转账',
        value: 2789
      }]
    })

    return () => (
      <>
        <dv-border-box-12 class="p-4">
          <div class="d-flex title-customer">
            <h5 class="fs-md text-blue">{enumConfigCustomer.CUSTOMER_NAME}</h5>
            <div class="d-flex jc-end date-pagination"></div>
          </div>
          <div class="d-flex">
            <g-pie height={dataPie.height}
              width={dataPie.width}
              data={dataPie.data}
              lines={dataPie.lines}
              legendTop={dataPie.legendTop}
              seriesRadius={dataPie.seriesRadius}
              seriesPosition={dataPie.seriesPosition} />
          </div>
        </dv-border-box-12>
      </>
    );
  }
})