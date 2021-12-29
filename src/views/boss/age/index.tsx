/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-28 09:20:22
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-29 17:51:46
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigAge } from "@/config/enum";
import vAge from "../component/agePie"
import gPie from "@/components/pie"
import gDoubleDealer from "@/components/doubleDealer"

export default defineComponent({
  components: {
    vAge,
    gPie,
    gDoubleDealer
  },
  name: 'Age',
  setup() {

    const dataAgePie = reactive({
      height: "400px",
      width: "585px",
      number: [0],
      fontSize: 20,
      content: '{nt}岁',
      data: [{
        value: 153,
        name: '25岁以下',
      }, {
        value: 203,
        name: '26-35岁',
      }, {
        value: 173,
        name: '36-45岁',
      }, {
        value: 136,
        name: '45岁以上',
      }],
    })

    const dataPie = reactive({
      height: "400px",
      width: "585px",
      number: [0],
      fontSize: 20,
      content: '{nt}年',
      seriesPosition: "outside",
      seriesRadius: ['30%', '50%'],
      legendTop: "5%",
      legendLeft: "15%",
      lines: ["1年", "2年", "3年", "4年", "5年以上"],
      data: [{
        name: '1年',
        value: 76
      }, {
        name: '2年',
        value: 45
      }, {
        name: '3年',
        value: 36
      }, {
        name: '4年',
        value: 24
      }, {
        name: '5年以上',
        value: 11
      }]
    })

    setTimeout(() => {
      dataAgePie.number = [1167]
      dataPie.number = [1167]
    }, 1000)

    return () => (
      <>
        <dv-border-box-4 color={['#00c2ff', '#00c2ff']}
          reverse={true}>
          <dv-decoration-2 class="dv-dec-2"
            color={['#00c2ff', '#00c2ff']} />
          <div class="d-flex title pl-3">
            <h5 class="fs-md text-blue">{enumConfigAge.TITLE_NAME}</h5>
          </div>
          <div class="d-flex mt-5">
            <div class="d-flex flex-column ai-center">
              <div class="d-flex age-title">
                <h3>{enumConfigAge.AGE_NAME}：</h3>
                <g-double-dealer class="dv-dig-flop"
                  number={dataAgePie.number}
                  fontSize={dataAgePie.fontSize}
                  content={dataAgePie.content} />
              </div>
              <v-age height={dataPie.height}
                width={dataPie.width}
                data={dataAgePie.data} />
            </div>

            <div class="d-flex flex-column ai-center">
              <div class="d-flex age-title">
                <h3>{enumConfigAge.WORKING_AGE_NAME}：</h3>
                <g-double-dealer class="dv-dig-flop"
                  number={dataPie.number}
                  fontSize={dataPie.fontSize}
                  content={dataPie.content} />
              </div>
              <g-pie height={dataPie.height}
                width={dataPie.width}
                data={dataPie.data}
                lines={dataPie.lines}
                legendTop={dataPie.legendTop}
                legendLeft={dataPie.legendLeft}
                seriesRadius={dataPie.seriesRadius}
                seriesPosition={dataPie.seriesPosition} />
            </div>

          </div>

        </dv-border-box-4>
      </>
    );
  }
})