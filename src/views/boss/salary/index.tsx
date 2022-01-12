/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-28 09:20:53
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-12 09:22:49
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigSalary, enumConfig } from "@/config/enum";
import vSalaryColumnar from "../component/salaryColumnar";

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
    vSalaryColumnar
  },
  name: 'Salary',
  setup(props) {

    const dataColumnar = reactive({
      height: "450px",
      width: "695px",
      xName: props.data[0].data.xName,
      data: props.data[0].data.data
    })

    return () => (
      <>
        <dv-border-box-5 color={['#00c2ff', '#00c2ff']}
          reverse={true} >
          <div class="d-flex title pl-5 pt-3">
            <h5 class="fs-md text-blue">
              {enumConfigSalary.TITLE_NAME}
              <span class="text-info">
                （{enumConfig.PERSONNEL_STATUS}）
              </span>
            </h5>
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