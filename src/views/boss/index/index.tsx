/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-07 10:24:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-24 10:44:34
 */
import "@/assets/scss/boss.scss";
import { defineComponent } from 'vue'
import vPersonnel from "../personnel";
import vEducation from "../education";
import vSalary from "../salary";

export default defineComponent({
  components: {
    vPersonnel,
    vEducation,
    vSalary
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
            <div class="d-flex jc-end salary">
              <v-salary />
            </div>
          </div>

        </div>
      </>
    );
  }
})