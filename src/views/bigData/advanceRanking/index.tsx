/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-06 14:33:18
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 16:28:35
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigAdvanceRanking } from "@/config/enum";
import gTableSwiper from "@/components/tableSwiper"

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
    gTableSwiper,
  },
  name: 'AdvanceRanking',
  setup(props) {

    const dataTable = reactive({
      columnWidth: [550],
      header: props.data[0].data.header,
      data: props.data[0].data.data,
    })

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex title">
            <h5 class="fs-md text-blue">{enumConfigAdvanceRanking.TITLE_NAME}</h5>
          </div>
          <div class="d-flex table-wrapper">
            <dv-border-box-7>
              <g-table-swiper data={dataTable.data}
                header={dataTable.header}
                columnWidth={dataTable.columnWidth} />
            </dv-border-box-7>
          </div>
        </dv-border-box-9>
      </>
    );
  }
})