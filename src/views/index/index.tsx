/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 09:14:26
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-09 16:22:26
 */
import "@/assets/scss/index.scss";
import {
  defineComponent,
  ref,
  reactive,
  computed,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { useRoute, RouterView } from 'vue-router';
import { formatTime } from "@/utils/date";
import { WEEK, TITLE, ROUTERNAME } from "@/config/index";
import useDraw from "@/utils/useDraw";
import vTitle from "@/components/title";
export default defineComponent({
  components: {
    vTitle
  },
  name: 'Index',
  setup() {

    const route = useRoute();

    const {
      appRef,
      calcRate,
      windowDraw,
      unWindowDraw
    } = useDraw();

    const timeInfo = reactive({
      setInterval: 0,
      dateDay: "",
      dateYear: "",
      dateWeek: "",
    });

    const loading = ref<boolean>(true);

    const index = computed(() => route.name == 'Bigdata' ? 0 : route.name == 'Boss' ? 1 : "");

    const getColorStyle = computed(() => () => {
      return ROUTERNAME.map(item => ROUTERNAME[index.value] === item ? "#f9c801" : "#ff623e")[0]
    })

    onMounted(() => {
      cancelLoading();
      handleTime();

      windowDraw();
      calcRate();
    });

    onBeforeUnmount(() => {
      unWindowDraw();
      clearInterval(timeInfo.setInterval);
    });

    const cancelLoading = () => {
      setTimeout(() => loading.value = false, 500);
    };

    const handleTime = () => {
      timeInfo.setInterval = setInterval(() => {
        const date = new Date();
        timeInfo.dateDay = formatTime(date, "HH:mm:ss");
        timeInfo.dateYear = formatTime(date, "yyyy年MM月dd日");
        timeInfo.dateWeek = WEEK[date.getDay()];
      }, 1000);
    };

    return () => (
      <>
        <div id="index" ref={appRef}>
          <div class="bg">
            {
              loading.value
                ? <dv-loading>Loading...</dv-loading>
                : <div class="host-body">
                  <v-title timeInfo={timeInfo}
                    title={TITLE[index.value]}
                    routerName={ROUTERNAME[index.value]}
                    color={getColorStyle.value()} />
                  <RouterView />
                </div>
            }
          </div>
        </div>
      </>
    );

  },
});
