/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-31 08:53:39
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-31 15:18:19
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigAnnualSalary } from "@/config/enum";
import vAnnualSalaryColumnar from "../component/annualSalaryColumnar"

export default defineComponent({
  components: {
    vAnnualSalaryColumnar,
  },
  name: 'AnnualSalary',
  setup() {

    const dataChart = reactive({
      height: "600px",
      width: "1820px",
      data: [359, 123, 345, 214, 345, 123, 621, 124, 143, 652, 621, 324, 234, 542, 123],
      xName: [
        '信息传输、软件和信息技术服务业',
        '金融业',
        '科学研究和技术服务业',
        '卫生和社会工作',
        '租赁和商务服务业',
        '制造业',
        '交通运输、仓储和邮政业',
        '建筑业',
        '房地产业',
        '采矿业',
        '电力、热力、燃气及水生产和供应业',
        '文化、体育和娱乐业',
        '教育',
        '水利、环境和公共设施管理业',
        '农、林、牧、渔业',
      ]
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