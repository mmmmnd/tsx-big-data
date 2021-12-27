/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 10:24:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-27 10:40:26
 */
import "@/assets/scss/boss.scss";
import { defineComponent } from 'vue'
import vPersonnel from "../personnel";
import vEducation from "../education";
import vRank from "../rank";

export default defineComponent({
  components: {
    vPersonnel,
    vEducation,
    vRank
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

          <div class="d-flex jc-between item-box">
            <div class="d-flex jc-start education">
              <v-education />
            </div>
            <div class="d-flex jc-end rank">
              <v-rank />
            </div>
          </div>

        </div>
      </>
    );
  }
})