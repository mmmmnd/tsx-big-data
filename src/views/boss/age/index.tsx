/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-28 09:20:22
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-12 09:32:44
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigAge, enumConfig } from "@/config/enum";
import gPie from "@/components/pie"
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
    gPie,
    gDoubleDealer
  },
  name: 'Age',
  setup(props) {
    const dataAgePie = reactive({
      height: "400px",
      width: "585px",
      seriesPosition: "outside",
      seriesRadius: ['30%', '50%'],
      legendTop: "5%",
      fontSize: 20,
      content: '{nt}岁',
      number: props.data[0].data.number,
      lines: props.data[0].data.lines,
      data: props.data[0].data.data,
    })

    const dataPie = reactive({
      height: "400px",
      width: "585px",
      seriesPosition: "outside",
      seriesRadius: ['30%', '50%'],
      legendTop: "5%",
      fontSize: 20,
      content: '{nt}年',
      number: props.data[1].data.number,
      lines: props.data[1].data.lines,
      data: props.data[1].data.data
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
            <h5 class="fs-md text-blue">
              {enumConfigAge.TITLE_NAME}
              <span class="text-info">
                （{enumConfig.PERSONNEL_STATUS}）
              </span>
            </h5>
          </div>
          <div class="d-flex mt-5 age-wrapper">
            <div class="d-flex flex-column ai-center">
              <div class="d-flex age-title">
                <h3>{enumConfigAge.AGE_NAME}：</h3>
                <g-double-dealer class="dv-dig-flop"
                  number={dataAgePie.number}
                  fontSize={dataAgePie.fontSize}
                  content={dataAgePie.content} />
              </div>
              <g-pie height={dataAgePie.height}
                width={dataAgePie.width}
                data={dataAgePie.data}
                lines={dataPie.lines}
                legendTop={dataAgePie.legendTop}
                seriesRadius={dataAgePie.seriesRadius}
                seriesPosition={dataAgePie.seriesPosition} />
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
                seriesRadius={dataPie.seriesRadius}
                seriesPosition={dataPie.seriesPosition} />
            </div>
            <dv-decoration-3 class="dv-dec-3"
              color={['#00c2ff', 'transparent',]} />
          </div>

        </dv-border-box-4>
      </>
    );
  }
})