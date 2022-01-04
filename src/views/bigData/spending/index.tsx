/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-17 16:38:44
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-04 10:13:24
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigSpending } from "@/config/enum";
import gPie from "@/components/pie"
import gDashboard from "@/components/dashboard"
import gTableSwiper from "@/components/tableSwiper"
import gDoubleDealer from "@/components/doubleDealer"

export default defineComponent({
  components: {
    gPie,
    gDashboard,
    gTableSwiper,
    gDoubleDealer
  },
  name: 'Spending',
  setup() {

    const dataPie = reactive({
      height: "340px",
      width: "480px",
      seriesPosition: "outside",
      seriesRadius: ['0%', '50%'],
      legendTop: "0%",
      content: "{nt}% ↑",
      fontSize: 30,
      number: [0],
      lines: ["工资付款", "其他付款", "转账"],
      data: [{
        name: '工资付款',
        value: 789
      }, {
        name: '其他付款',
        value: 2789
      }, {
        name: '转账',
        value: 2789
      }]
    })

    const dataDashboard = reactive({
      height: "300px",
      width: "240px",
    })

    const dataTable = reactive({
      header: ['申报名称', '实发总额', '发放时间'],
      data: [
        ['海口市财政国库支付局2021年第十八批海口市引进人才住房补贴人员名单住房补贴结算', '94328', '2021-12-20'],
        ['陵水黎族自治县统计局（代发）2021-12结算申报表', '94327', '2021-12-20'],
        ['海口市美兰区江东新区动迁工作指挥部2021年第十八批海口市引进人才住房补贴人员名单住房补贴结算表', '1639985744', '行3列3'],
        ['陵水黎族自治县统计局2021-12结算申报表', '1639985979', '2021-12-20'],
        ['陵水黎族自治县教育局（熊芷莹）2021-12结算申报表', '94328', '2021-12-20'],
        ['陵水黎族自治县教育局（邱霜霜）2021-12结算申报表', '1639985744', '2021-12-20'],
        ['中国电信股份有限公司澄迈分公司后端部（天诚公司）2021-12结算申报表', '1639985744', '2021-12-20'],
        ['定安县人民政府招待所22021-12结算申报表', '94328', '2021-12-20'],
        ['儋州市那大镇茶山村民委员会2021-12结算申报表', '1639985744', '2021-12-20'],
        ['定安县人民政府招待所（公益性1）2021-12结算申报表', '1639985744', '2021-12-20']
      ]
    })

    setTimeout(() => {
      dataPie.number = [1167]
    }, 1000)

    return () => (
      <>
        <dv-border-box-12 class="p-4">
          <div class="d-flex title">
            <h5 class="fs-md text-blue">{enumConfigSpending.TITLE_NAME}</h5>
          </div>
          <div class="d-flex">
            <div class="d-flex info-wrapper">
              <div class="info-left">
                <g-pie height={dataPie.height}
                  width={dataPie.width}
                  data={dataPie.data}
                  lines={dataPie.lines}
                  legendTop={dataPie.legendTop}
                  seriesRadius={dataPie.seriesRadius}
                  seriesPosition={dataPie.seriesPosition} />
              </div>
              <div class="d-flex ai-center info-right">
                <div class="count-wrapper">
                  <g-dashboard height={dataDashboard.height}
                    width={dataDashboard.width} />
                  <div class="d-flex flex-column jc-center ai-center count-main">
                    <p class="fs-xl">{enumConfigSpending.STROKE_COUNT_NAME}</p>
                    <g-double-dealer class="mt-4 dv-dig-flop"
                      number={dataPie.number}
                      fontSize={dataPie.fontSize} />
                  </div>
                </div>
                <div class="d-flex flex-column ai-center month-wrapper">
                  <g-double-dealer class="dv-dig-flop"
                    content={dataPie.content}
                    number={dataPie.number}
                    fontSize={dataPie.fontSize} />
                  <p class="fs-xl mt-4">{enumConfigSpending.LAST_MONTH_NAME}</p>
                  <dv-decoration-1 class="dv-dec-1"
                    color={['transparent', '#00c2ff',]} />
                </div>
              </div>
              <dv-decoration-3 class="dv-dec-3"
                color={['transparent', '#00c2ff',]} />
            </div>
            <div class="table-wrapper">
              <dv-border-box-7>
                <g-table-swiper data={dataTable.data}
                  header={dataTable.header} />
              </dv-border-box-7>
            </div>
          </div>
        </dv-border-box-12>
      </>
    );
  }
})