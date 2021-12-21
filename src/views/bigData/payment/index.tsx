/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-20 16:57:46
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-20 17:07:20
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigAccount } from "@/config/enum";
import gPie from "@/components/pie"
import gDashboard from "@/components/dashboard"
import gDoubleDealer from "@/components/doubleDealer"

export default defineComponent({
  components: {
    gPie,
    gDashboard,
    gDoubleDealer
  },
  name: 'Spending',
  setup() {

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex title-customer">
            <h5 class="fs-md text-blue">{enumConfigAccount.ACCOUNT_NAME}</h5>
          </div>
        </dv-border-box-9>
      </>
    );
  }
})