/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-21 16:52:41
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-24 09:54:18
 */
import { defineComponent, reactive } from 'vue'

import vWaves from "../component/waves";
import gDashboard from "@/components/dashboard"
import gDoubleDealer from "@/components/doubleDealer"
export default defineComponent({
  components: {
    vWaves,
    gDashboard,
    gDoubleDealer
  },
  name: 'Boss',
  setup() {

    const dataWaves = reactive([{
      height: "350px",
      width: "450px",
      value: 0.6,
      number: [0],
      fontSize: 20,
      textAlign: "left",
      title: "当月入住人数",
      name: "入职率"
    }, {
      height: "350px",
      width: "450px",
      value: 0.6,
      number: [0],
      fontSize: 20,
      textAlign: "left",
      title: "当月离职人数",
      name: "离职率"
    }])

    const dataDoubleDealer = reactive([{
      number: [0],
      fontSize: 30,
      name: "入职人员平均司龄"
    }, {
      number: [0],
      fontSize: 30,
      name: "入职人员平均年龄"
    }, {
      number: [0],
      fontSize: 30,
      name: "入职人员平均薪资"
    }, {
      number: [0],
      fontSize: 30,
      name: "离职人员平均司龄"
    }, {
      number: [0],
      fontSize: 30,
      name: "离职人员平均年龄"
    }, {
      number: [0],
      fontSize: 30,
      name: "离职人员平均薪资"
    },])

    const dataDashboard = reactive({
      height: "200px",
      width: "300px",
    })

    setTimeout(() => {
      dataDoubleDealer[0].number = [1167]
      dataDoubleDealer[1].number = [1167]
      dataDoubleDealer[2].number = [1167]
      dataDoubleDealer[3].number = [1167]
      dataDoubleDealer[4].number = [1167]
      dataDoubleDealer[5].number = [1167]
    }, 1000)

    setTimeout(() => {
      dataWaves[0].number = [116799999999]
      dataWaves[1].number = [116799999999]
    }, 1000)

    return () => (
      <>
        <dv-border-box-12>
          <div class="d-flex jc-center title">
            <h5 class="fs-md text-blue">当月人员流动指标</h5>
          </div>
          <div class="d-flex jc-between">
            <div class="d-flex during-wrapper">
              <div class="d-flex during-info">{dataWaves.map(item =>

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
            </div>
            <div class="d-flex flex-wrap average-wrapper">
              {dataDoubleDealer.map(item =>
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