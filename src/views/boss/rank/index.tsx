/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-24 10:40:49
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-04 14:32:37
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigrank } from "@/config/enum";
import vRankColumnar from "../component/rankColumnar";

export default defineComponent({
  components: {
    vRankColumnar
  },
  name: 'Rank',
  setup() {

    const dataColumnar = reactive({
      height: "380px",
      width: "700px",
      name: ["专业", "主管", "经理"],
      value: [194, 295, 399]
    })

    return () => (
      <>
        <dv-border-box-4 color={['#00c2ff', '#00c2ff']}>
          <div class="d-flex title pl-5">
            <h5 class="fs-md text-blue">{enumConfigrank.TITLE_NAME}</h5>
          </div>
          <v-rank-columnar height={dataColumnar.height}
            width={dataColumnar.width}
            name={dataColumnar.name}
            value={dataColumnar.value} />
          <dv-decoration-2 class="dv-dec-2"
            color={['#00c2ff', '#00c2ff']} />
        </dv-border-box-4>
      </>
    );
  }
})