/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-27 11:43:14
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-07 14:06:49
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, computed } from 'vue'
import { enumConfigAccount } from "@/config/enum";
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
  name: 'Spending',
  setup(props) {

    const dataTable = computed(() => {
      return props.data
    })

    return () => (
      <>
        <div class="d-flex">
          <dv-border-box-9 class="p-4"
            color={['#00c2ff', '#00c2ff']}
            reverse={true}>
            <div class="d-flex title pt-3">
              <h5 class="fs-md text-blue">{enumConfigAccount.DIG_TITLE_NAME}</h5>
            </div>
            <div class="table-wrapper">
              <dv-border-box-7>
                <g-table-swiper data={dataTable.value.data}
                  header={dataTable.value.header} />
              </dv-border-box-7>
            </div>
          </dv-border-box-9>
        </div>
      </>
    );
  }
})