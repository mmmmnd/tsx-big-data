/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-28 09:20:53
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-29 17:54:04
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigSalary } from "@/config/enum";
import vSalaryColumnar from "../component/salaryColumnar";

export default defineComponent({
  components: {
    vSalaryColumnar
  },
  name: 'Salary',
  setup() {

    const dataColumnar = reactive({
      height: "450px",
      width: "695px",
      xName: ['3K以下', '3-5K', '5-10K', '10-15K', '15-20K', '20K以上'],
      data: [4950, 5768, 3421, 5887, 4655, 5490]
    })

    return () => (
      <>
        <dv-border-box-5 color={['#00c2ff', '#00c2ff']}
          reverse={true} >
          <div class="d-flex title pl-5 pt-3">
            <h5 class="fs-md text-blue">{enumConfigSalary.TITLE_NAME}</h5>
          </div>
          <v-salary-columnar height={dataColumnar.height}
            width={dataColumnar.width}
            data={dataColumnar.data}
            xName={dataColumnar.xName} />
        </dv-border-box-5>
      </>
    );
  }
})