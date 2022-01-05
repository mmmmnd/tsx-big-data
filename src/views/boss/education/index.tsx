/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-24 10:40:24
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-05 15:30:34
 */
import { defineComponent, reactive } from 'vue';
import { enumConfigEducation } from "@/config/enum";
import gPie from "@/components/pie"
import gDoubleDealer from "@/components/doubleDealer"

export default defineComponent({
  components: {
    gDoubleDealer,
    gPie
  },
  name: 'Education',
  setup() {

    const dataDoubleDealer = reactive([{
      number: [0],
      fontSize: 30,
      name: "在职人员总计",
      textAlign: "center"
    }, {
      number: [0],
      fontSize: 30,
      name: "male",
      textAlign: "left"
    }, {
      number: [0],
      fontSize: 30,
      name: "girl",
      textAlign: "left"
    }])

    const dataPie = reactive({
      height: "360px",
      width: "770px",
      seriesPosition: "outside",
      seriesRadius: ['0%', '50%'],
      legendLeft: "10%",
      legendTop: "30%",
      legendOrient: "vertical",
      lines: ["大专以下", "大专", "本科", "硕士", "博士",],
      data: [{
        name: '大专以下',
        value: 2363
      }, {
        name: '大专',
        value: 11344
      }, {
        name: '本科',
        value: 1253
      }, {
        name: '硕士',
        value: 4643
      }, {
        name: '博士',
        value: 7854
      }]
    })

    setTimeout(() => {
      dataDoubleDealer[0].number = [1167]
      dataDoubleDealer[1].number = [1167]
      dataDoubleDealer[2].number = [1167]
    }, 1000)

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
                <h5 class="fs-md text-blue">{enumConfigEducation.TITLE_NAME}</h5>
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