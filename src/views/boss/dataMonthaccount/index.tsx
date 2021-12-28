/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-27 11:43:14
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-27 16:58:16
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive } from 'vue'
import { enumConfigAccount } from "@/config/enum";
import gTableSwiper from "@/components/tableSwiper"


export default defineComponent({
  components: {
    gTableSwiper,
  },
  name: 'Spending',
  setup() {

    const dataTable = reactive({
      header: ['到账单位', '到账金额', '到账时间'],
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

    return () => (
      <>
        <div class="d-flex">
          <dv-border-box-9 class="p-4"
            color={['#00c2ff', '#00c2ff']}
            reverse={true}>
            <div class="d-flex title pt-3">
              <h5 class="fs-md text-blue">{enumConfigAccount.DIG_TITLE_NAME}</h5>
            </div>
            <div class="table-wrapper">
              <dv-border-box-7>
                <g-table-swiper data={dataTable.data}
                  header={dataTable.header} />
              </dv-border-box-7>
            </div>
          </dv-border-box-9>
        </div>
      </>
    );
  }
})