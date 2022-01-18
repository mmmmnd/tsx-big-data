/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-09 16:33:09
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-12 15:24:48
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
    vCustomerChart,
    Swiper,
    SwiperSlide,
    gDoubleDealer
  },
  name: 'Customer',
  setup(props) {

    const dataChart = reactive(
      props.data[0].data.map(item => {
        return {
          name: item.name,
          number: item.number,
          fontSize: item.fontSize,
          lines: item.lines,
          xNames: item.xNames,
          lists: item.lists
        }
      })
    )

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

    return () => (
      <>
        <dv-border-box-9 class="p-4">
          <div class="d-flex jc-between title">
            <h5 class="fs-md text-blue">{enumConfigCustomer.TITLE_NAME}</h5>
            <div class="d-flex flex-column jc-end">
              <div class="date-pagination"></div>
              <dv-decoration-2 class="dv-dec-2"
                color={['#00c2ff', '#000000']} />
            </div>
          </div>
          <swiper spaceBetween={30}
            centeredSlides={true}
            thumbs={swiper_options.thumbs}
            // autoplay={swiper_options.autoplay}
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