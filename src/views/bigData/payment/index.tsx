/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-20 16:57:46
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-21 11:13:23
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigPayment } from "@/config/enum";
import vPaymentBubble from "../component/paymentBubble"

export default defineComponent({
  components: {
    vPaymentBubble
  },
  name: 'Spending',
  setup() {

    const dataBubble = reactive([{
      name: "工资笔数",
      value: "12355"
    }, {
      name: "工资人数",
      value: "12093"
    }, {
      name: "公积金人数",
      value: "8874"
    }, {
      name: "社保人数",
      value: "7427"
    }, {
      name: "个税总额",
      value: "4308"
    }, {
      name: "社保总额",
      value: "12355"
    }, {
      name: "其他总额",
      value: "12093"
    }, {
      name: "工资总额",
      value: "8874"
    }]);

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex title-customer">
            <h5 class="fs-md text-blue">{enumConfigPayment.PAYMENT_NAME}</h5>
          </div>
          <div class="d-flex">
            <v-payment-bubble data={dataBubble} />
          </div>
        </dv-border-box-9>
      </>
    );
  }
})