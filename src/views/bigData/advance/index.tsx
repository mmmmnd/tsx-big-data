/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-06 14:33:13
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 16:32:48
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigAdvance } from "@/config/enum";
import vAdvanceChat from "../component/advanceChat"
import gWaves from "@/components/waves";
import gDoubleDealer from "@/components/doubleDealer"

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
    vAdvanceChat,
    gWaves,
    gDoubleDealer
  },
  name: 'Advance',
  setup(props) {

    const dataAdvance = reactive({
      height: "350px",
      width: "500px",
      name: props.data[0].data.header,
      value: props.data[0].data.data
    })

    const dataWaves = reactive({
      height: "300px",
      width: "320px",
      name: props.data[1].data.name,
      value: props.data[1].data.value,
      data: props.data[1].data.data
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