/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-20 16:57:46
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 16:46:21
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigPayment } from "@/config/enum";
import vPaymentBubble from "../component/paymentBubble"

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
    vPaymentBubble
  },
  name: 'Spending',
  setup(props) {

    const dataBubble = reactive(
      props.data[0].data.map(item => {
        return {
          name: item.name,
          value: item.value
        }
      })
    )

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex title">
            <h5 class="fs-md text-blue">{enumConfigPayment.TITLE_NAME}</h5>
          </div>
          <div class="d-flex">
            <v-payment-bubble data={dataBubble} />
          </div>
        </dv-border-box-9>
      </>
    );
  }
})