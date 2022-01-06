/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-06 14:33:18
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-06 16:46:46
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigAdvanceRanking } from "@/config/enum";
import gTableSwiper from "@/components/tableSwiper"

export default defineComponent({
  components: {
    gTableSwiper,
  },
  name: 'AdvanceRanking',
  setup() {

    const dataTable = reactive({
      columnWidth: [550],
      header: ['结算单位', '未还款金额'],
      data: [
        ['海口市财政国库支付局2021年第十八批海口市引进人才住房补贴人员名单住房补贴结算', '94328'],
        ['陵水黎族自治县统计局（代发）2021-12结算申报表', '94327'],
        ['海口市美兰区江东新区动迁工作指挥部2021年第十八批海口市引进人才住房补贴人员名单住房补贴结算表', '1639985744'],
        ['陵水黎族自治县统计局2021-12结算申报表', '1639985979'],
        ['陵水黎族自治县教育局（熊芷莹）2021-12结算申报表', '94328'],
        ['陵水黎族自治县教育局（邱霜霜）2021-12结算申报表', '1639985744'],
        ['中国电信股份有限公司澄迈分公司后端部（天诚公司）2021-12结算申报表', '1639985744'],
        ['定安县人民政府招待所22021-12结算申报表', '94328'],
        ['儋州市那大镇茶山村民委员会2021-12结算申报表', '1639985744'],
        ['定安县人民政府招待所（公益性1）2021-12结算申报表', '1639985744']
      ],

    })

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex title">
            <h5 class="fs-md text-blue">{enumConfigAdvanceRanking.TITLE_NAME}</h5>
          </div>
          <div class="d-flex table-wrapper">
            <dv-border-box-7>
              <g-table-swiper data={dataTable.data}
                header={dataTable.header}
                columnWidth={dataTable.columnWidth} />
            </dv-border-box-7>
          </div>
        </dv-border-box-9>
      </>
    );
  }
})