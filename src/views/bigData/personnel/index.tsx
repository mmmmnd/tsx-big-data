/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-20 16:52:53
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-21 16:33:44
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigPersonnel } from "@/config/enum";
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

    const dataPie = reactive({
      height: "300px",
      width: "480px",
      seriesPosition: "outside",
      seriesRadius: ['0%', '50%'],
      legendTop: "0%",
      lines: ["离职人数", "在职人数"],
      data: [{
        name: '离职人数',
        value: 16746
      }, {
        name: '在职人数',
        value: 212134
      }]
    })

    const dataDashboard = reactive({
      height: "160px",
      width: "200px",
    })

    const dataDoubleDealer = reactive([{
      number: [0],
      fontSize: 30,
      name: "累计总员工数"
    }, {
      number: [0],
      fontSize: 30,
      name: "当前在职人数"
    }, {
      number: [0],
      fontSize: 30,
      name: "当日入职人数"
    }, {
      number: [0],
      fontSize: 30,
      name: "当日离职人数"
    }])

    setTimeout(() => {
      dataDoubleDealer[0].number = [1167]
      dataDoubleDealer[1].number = [1167]
      dataDoubleDealer[2].number = [1167]
      dataDoubleDealer[3].number = [1167]
    }, 1000)

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex title-customer">
            <h5 class="fs-md text-blue">{enumConfigPersonnel.PERSONNEL_NAME}</h5>
          </div>
          <div class="d-flex ">
            <div class="d-flex flex-column pie-wrapper">
              <g-pie height={dataPie.height}
                width={dataPie.width}
                data={dataPie.data}
                lines={dataPie.lines}
                legendTop={dataPie.legendTop}
                seriesRadius={dataPie.seriesRadius}
                seriesPosition={dataPie.seriesPosition} />
              <dv-decoration-1 class="dv-dec-1"
                color={['#00c2ff', 'transparent',]} />
            </div>
            <div class="d-flex flex-wrap personnel-info">{dataDoubleDealer.map(item =>
              <div class="count-wrapper">
                <g-dashboard height={dataDashboard.height}
                  width={dataDashboard.width} />
                <div class="d-flex jc-center ai-center count-main">
                  <g-double-dealer class="dv-dig-flop"
                    number={item.number}
                    fontSize={item.fontSize} />
                </div>
                <p class="count-text">{item.name}</p>
              </div>)}
            </div>
          </div>
        </dv-border-box-9>
      </>
    );
  }
})