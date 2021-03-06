/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-24 10:40:24
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-12 09:20:04
 */
import { defineComponent, reactive, } from 'vue';
import { enumConfigEducation, enumConfig } from "@/config/enum";
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
    gDoubleDealer,
    gPie
  },
  name: 'Education',
  setup(props) {

    const dataDoubleDealer = reactive(
      props.data[1].data.map(item => {
        return {
          fontSize: item.fontSize,
          name: item.name,
          number: item.number,
          textAlign: item.textAlign,
        }
      })
    )

    const dataPie = reactive({
      height: "360px",
      width: "770px",
      seriesPosition: "outside",
      seriesRadius: ['0%', '50%'],
      legendLeft: "10%",
      legendTop: "30%",
      legendOrient: "vertical",
      lines: props.data[0].data.lines,
      data: props.data[0].data.data
    })

    return () => (
      <>
        <div class="d-flex">
          <div class="personnel-wrapper">
            <dv-border-box-11 reverse={true}
              color={['#00c2ff', '#00c2ff']}>

              <div class="d-flex flex-column jc-evenly h-100">
                {dataDoubleDealer.map((item, index) => index == 0 ?
                  <div class="d-flex flex-column ai-center">
                    <g-double-dealer class="dv-dig-flop dv-dig-title"
                      number={item.number}
                      fontSize={item.fontSize}
                      textAlign={item.textAlign} />
                    <h2>{item.name}</h2>
                  </div> :
                  <div class="d-flex jc-between ai-center sex-info">
                    <div class="mx-5">
                      <svg-icon name={item.name}
                        size={60}
                        color="#fff" />
                    </div>

                    <g-double-dealer class="dv-dig-flop"
                      number={item.number}
                      fontSize={item.fontSize}
                      textAlign={item.textAlign} />
                    <dv-decoration-1 class="dv-dec-1"
                      color={['transparent', '#00c2ff',]} />
                  </div>)}
              </div>

            </dv-border-box-11>
          </div>
          <div class="d-flex education">
            <dv-border-box-5 color={['#00c2ff', '#00c2ff']}>
              <div class="d-flex title pl-3 pt-3">
                <h5 class="fs-md text-blue">
                  {enumConfigEducation.TITLE_NAME}
                  <span class="text-info">
                    （{enumConfig.PERSONNEL_STATUS}）
                  </span>
                </h5>
              </div>
              <g-pie height={dataPie.height}
                width={dataPie.width}
                data={dataPie.data}
                lines={dataPie.lines}
                legendTop={dataPie.legendTop}
                legendLeft={dataPie.legendLeft}
                legendOrient={dataPie.legendOrient}
                seriesRadius={dataPie.seriesRadius}
                seriesPosition={dataPie.seriesPosition} />
              <dv-decoration-3 class="dv-dec-3"
                color={['transparent', '#00c2ff',]} />
            </dv-border-box-5>
          </div>
        </div>
      </>
    );
  }
})