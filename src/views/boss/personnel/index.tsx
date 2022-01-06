/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-21 16:52:41
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-06 11:53:02
 */
import { defineComponent, computed, reactive } from 'vue'
import { enumConfigBossPersonnel } from "@/config/enum";
import vWaves from "../component/personnelWaves";
import gDashboard from "@/components/dashboard"
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
    vWaves,
    gDashboard,
    gDoubleDealer
  },
  name: 'Personnel',
  setup(props) {

    const dataWaves = computed(() => {
      return props.data[1]
    })

    const dataDoubleDealer = computed(() => {
      return props.data[0]
    })

    const dataDashboard = reactive({
      height: "200px",
      width: "300px",
    })


    return () => (
      <>
        <dv-border-box-12>
          <div class="d-flex jc-center title">
            <h5 class="fs-md text-blue">{enumConfigBossPersonnel.TITLE_NAME}</h5>
          </div>
          <div class="d-flex jc-between">
            <div class="d-flex during-wrapper">
              <div class="d-flex during-info">{dataWaves.value.data.map(item =>

                <div class="d-flex flex-column">
                  <div class="d-flex jc-center ">
                    <div class="d-flex ai-center bg-blue during-title">
                      <svg-icon name="personnel"
                        size={50}
                        color="#fff" />
                      <div class="d-flex flex-column">
                        <p class="text-white">{item.title}</p>
                        <g-double-dealer class="dv-dig-flop"
                          number={item.number}
                          textAlign={item.textAlign}
                          fontSize={item.fontSize} />
                      </div>
                    </div>
                  </div>
                  <v-waves height={item.height}
                    width={item.width}
                    value={item.value}
                    name={item.name} />
                </div>)}

              </div>
              <dv-decoration-3 class="dv-dec-3"
                color={['transparent', '#00c2ff',]} />
            </div>
            <div class="d-flex flex-wrap average-wrapper">
              {dataDoubleDealer.value.data.map(item =>
                <div class="count-wrapper">
                  <g-dashboard height={dataDashboard.height}
                    width={dataDashboard.width} />
                  <div class="d-flex jc-center ai-center count-main">
                    <g-double-dealer class="dv-dig-flop"
                      number={item.number}
                      fontSize={item.fontSize} />
                  </div>
                  <p class="text-center count-text">{item.name}</p>
                </div>)}
            </div>
          </div>
        </dv-border-box-12>
      </>
    );
  }
})