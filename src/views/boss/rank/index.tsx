/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-24 10:40:49
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-27 10:41:08
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
      data: ["专业", "主管", "经理"],
      value: [194, 295, 399]
    })

    return () => (
      <>
        <dv-border-box-5 color={['#00c2ff', '#00c2ff']}>
          <div class="d-flex title pl-3 pt-3">
            <h5 class="fs-md text-blue">{enumConfigrank.TITLE_NAME}</h5>
          </div>
          <v-rank-columnar data={dataColumnar.data}
            value={dataColumnar.value} />
        </dv-border-box-5>
      </>
    );
  }
})