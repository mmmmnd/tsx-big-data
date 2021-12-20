/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-09 16:33:09
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-20 16:10:01
 */
import 'swiper/swiper-bundle.min.css';
import { defineComponent, reactive, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import { DATE } from "@/config/index";
import { enumConfigCustomer } from "@/config/enum";
import vCustomerChart from "../component/customerChart"
import gDoubleDealer from "@/components/doubleDealer"
import SwiperCore, { Autoplay, Pagination, FreeMode, Thumbs } from 'swiper'

SwiperCore.use([Autoplay, Pagination, FreeMode, Thumbs]);

export default defineComponent({
  components: {
    vCustomerChart,
    Swiper,
    SwiperSlide,
    gDoubleDealer
  },
  name: 'Customer',
  setup() {

    const dataChart = reactive(
      [
        {
          lines: ["结算单位", "协议单位"],
          xNames: ["2021", "2020", "2019", "2018"],
          lists: [[67, 97, 51, 38], [94, 23, 43, 18]]
        }, {
          lines: ["结算单位", "协议单位"],
          xNames: ["第一季度", "第二季度", "第三季度", "第四季度"],
          lists: [[67, 97, 51, 38], [94, 23, 43, 18]]
        },
        {
          lines: ["结算单位", "协议单位"],
          xNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
          lists: [
            [67, 97, 51, 38, 67, 97, 51, 38, 94, 23, 43, 18],
            [94, 23, 43, 18, 97, 51, 38, 67, 67, 97, 51, 38]
          ]
        }
      ]
    )

    const navCustomer = reactive([{
      name: enumConfigCustomer.YEARS_NAME,
      number: [0],
      fontSize: 20,
    }, {
      name: enumConfigCustomer.QUARTER_NAME,
      number: [0],
      fontSize: 20,
    }, {
      name: enumConfigCustomer.MONTH_NAME,
      number: [0],
      fontSize: 20,
    }])

    const thumbsSwiper = ref(null);

    const swiper_options = reactive({
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      loop: true,
      speed: 1000,
      thumbs: {
        swiper: thumbsSwiper
      },
      pagination: {
        el: '.date-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class=${className}>${DATE[index]}</span>`
        }
      }
    })

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    }

    setTimeout(() => {
      navCustomer[0].number = [1167]
      navCustomer[1].number = [12312]
      navCustomer[2].number = [11562367]
    }, 1000)

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex title-customer">
            <h5 class="fs-md text-blue">{enumConfigCustomer.CUSTOMER_NAME}</h5>
            <div class="d-flex jc-end date-pagination"></div>
          </div>
          <swiper class="my-1 nav-customer"
            freeMode={true}
            watchSlidesProgress={true}
            spaceBetween={10}
            slidesPerView={1}
            onSwiper={setThumbsSwiper}>{navCustomer.map(item =>
              <swiper-slide class="swiper-no-swiping">
                <div class="d-flex flex-column text-center">
                  <g-double-dealer class="mt-2 dv-dig-flop"
                    number={item.number}
                    fontSize={item.fontSize} />
                  <p class="mt-1 text-blue">{item.name}</p>
                </div>
              </swiper-slide>)}
          </swiper>
          <swiper spaceBetween={30}
            centeredSlides={true}
            thumbs={swiper_options.thumbs}
            autoplay={swiper_options.autoplay}
            pagination={swiper_options.pagination}
            class="mySwiper"> {dataChart.map(item =>
              <swiper-slide>
                <v-customer-chart lines={item.lines}
                  xNames={item.xNames}
                  lists={item.lists} />
              </swiper-slide>)}
          </swiper>
        </dv-border-box-9>
      </>
    );
  }
})