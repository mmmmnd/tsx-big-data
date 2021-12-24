/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 10:24:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-21 17:34:35
 */
import "@/assets/scss/boss.scss";
import { defineComponent } from 'vue'
import vPersonnel from "../personnel";
export default defineComponent({
  components: {
    vPersonnel
  },
  name: 'Boss',
  setup() {
    return () => (
      <>
        <div id="boss">

          <div class="d-flex item-box">
            <div class="d-flex personnel">
              <v-personnel />
            </div>
          </div>

        </div>
      </>
    );
  }
})