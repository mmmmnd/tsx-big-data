/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 09:14:26
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-07 10:17:01
 */
import "@/assets/scss/index.scss";
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { formatTime } from "@/utils/date";
import { WEEK } from "@/config/index";
import useDraw from "@/utils/useDraw";

export default defineComponent({
  name: 'Index',
  setup() {
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
        timeInfo.dateDay = formatTime(date, "HH: mm: ss");
        timeInfo.dateYear = formatTime(date, "yyyy-MM-dd");
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
                : <div class="host-body"></div>
            }
          </div>
        </div>
      </>
    );

  },
});
