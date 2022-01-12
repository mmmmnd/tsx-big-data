/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-24 10:40:49
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-12 09:21:04
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigrank, enumConfig } from "@/config/enum";
import vRankColumnar from "../component/rankColumnar";

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
    vRankColumnar
  },
  name: 'Rank',
  setup(props) {

    const dataColumnar = reactive({
      height: "380px",
      width: "700px",
      name: props.data[0].data.name,
      value: props.data[0].data.value
    })

    return () => (
      <>
        <dv-border-box-4 color={['#00c2ff', '#00c2ff']}>
          <div class="d-flex title pl-4 pt-3">
            <h5 class="fs-md text-blue">
              {enumConfigrank.TITLE_NAME}
              <span class="text-info">
                （{enumConfig.PERSONNEL_STATUS}）
              </span>
            </h5>
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