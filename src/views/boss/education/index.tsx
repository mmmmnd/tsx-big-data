/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-24 10:40:24
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-27 10:33:51
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
      name: "在职人员统计",
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
      width: "790px",
      seriesPosition: "outside",
      seriesRadius: ['0%', '50%'],
      legendLeft: "10%",
      legendTop: "30%",
      legendOrient: "vertical",
      lines: ["津贴", "减免", "稳岗", "未分类", "工资", "其他"],
      data: [{
        name: '津贴',
        value: 2363
      }, {
        name: '减免',
        value: 11344
      }, {
        name: '稳岗',
        value: 1253
      }, {
        name: '未分类',
        value: 4643
      }, {
        name: '工资',
        value: 7854
      }, {
        name: '其他',
        value: 4534
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
            <dv-border-box-5 reverse={true}
              color={['#00c2ff', '#00c2ff']}>
              <div class="d-flex flex-column jc-evenly h-100">
                {dataDoubleDealer.map((item, index) => index == 0 ?
                  <div class="d-flex flex-column ai-center ">
                    <g-double-dealer class="dv-dig-flop"
                      number={item.number}
                      fontSize={item.fontSize}
                      textAlign={item.textAlign} />
                    <h4>{item.name}</h4>
                  </div> :
                  <div class="d-flex jc-between ai-center">
                    <div class="mx-5">
                      <svg-icon name={item.name}
                        size={60}
                        color="#fff" />
                    </div>

                    <g-double-dealer class="dv-dig-flop"
                      number={item.number}
                      fontSize={item.fontSize}
                      textAlign={item.textAlign} />
                  </div>)}
              </div>

            </dv-border-box-5>
          </div>
          <div class="d-flex education">
            <dv-border-box-6 color={['#00c2ff', '#00c2ff']}>
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
            </dv-border-box-6>
          </div>
        </div>
      </>
    );
  }
})