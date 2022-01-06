/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-06 14:33:13
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-06 16:46:59
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigAdvance } from "@/config/enum";
import vAdvanceChat from "../component/advanceChat"
import gWaves from "@/components/waves";
import gDoubleDealer from "@/components/doubleDealer"

export default defineComponent({
  components: {
    vAdvanceChat,
    gWaves,
    gDoubleDealer
  },
  name: 'Advance',
  setup() {

    const dataAdvance = reactive({
      height: "350px",
      width: "500px",
      name: ['垫资总额', '已还款金额'],
      value: [99999.99, 66666.66]
    })

    const dataWaves = reactive({
      height: "300px",
      width: "320px",
      name: "还款率",
      value: 0.6,
      data: [{
        number: [123123],
        fontSize: 30,
        content: '{nt}笔',
        name: "垫资笔数"
      }, {
        number: [1231],
        fontSize: 30,
        content: '{nt}家',
        name: "垫资单位数"
      }]
    })

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex title">
            <h5 class="fs-md text-blue">{enumConfigAdvance.TITLE_NAME}</h5>
          </div>
          <div class="d-flex ">
            <div class="d-flex flex-column advance-chat">
              <v-advance-chat height={dataAdvance.height}
                width={dataAdvance.width}
                name={dataAdvance.name}
                value={dataAdvance.value} />
            </div>
            <div class="d-flex flex-wrap advance-number">
              <div class="d-flex">
                <g-waves height={dataWaves.height}
                  width={dataWaves.width}
                  value={dataWaves.value}
                  name={dataWaves.name} />
                <div class="d-flex flex-column">{dataWaves.data.map(item =>
                  <div class="d-flex flex-column advance-info ai-center">
                    <g-double-dealer class="dv-dig-flop"
                      number={item.number}
                      fontSize={item.fontSize}
                      content={item.content} />
                    <p class="fs-md mt-2">{item.name}</p>
                  </div>)}
                </div>
              </div>
              <dv-decoration-1 class="dv-dec-1"
                color={['#00c2ff', 'transparent',]} />
            </div>
          </div>
        </dv-border-box-9>
      </>
    );
  }
})