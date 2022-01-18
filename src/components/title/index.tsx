/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-09 11:33:26
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 17:40:15
 */
import { defineComponent } from "vue";

const PropsType = {
  timeInfo: {
    type: Object,
    default: {},
  },
  routerName: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  }
} as const

export default defineComponent({
  name: 'Title',
  props: PropsType,
  setup(props) {

    return () => (
      <>
        <div class="d-flex jc-center">
          <div class="d-flex flex-column jc-start nav">
            <dv-decoration-10 class="dv-dec-10 mt-4" />
            <div class="d-flex mt-4 ai-center">
              <h3 class="dateDay text-dark-green fs-xxxl">{props.timeInfo.dateDay as string}</h3>
              <div class="d-flex flex-column ml-4 fs-md">
                <span class="dateYear">{props.timeInfo.dateYear as string}</span>
                <span class="dateWeek">{props.timeInfo.dateWeek as string}</span>
              </div>
            </div>
          </div>
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8 mt-5"
              color={['#00c2ff', '#000000']} />
            <div class="d-flex flex-column ai-center title">
              <h1 class="text-center title-text my-4">{props.title as string}</h1>
              <dv-decoration-5 class="dv-dec-5"
                color={['#00c2ff', '#000000']} />
            </div>
            <dv-decoration-8 class="dv-dec-8 mt-5"
              color={['#00c2ff', '#000000']}
              reverse={true}
            />
          </div>
          <div class="d-felx jc-end nav">
            <dv-decoration-10 class="dv-dec-10-s mt-4" />
            <router-link to={props.color === "#f9c801" ? "boss" : "bigData"} class="on-route">
              <div class="d-flex flex-column ai-center mt-4">
                <svg-icon name="switch"
                  size={50}
                  color={props.color}
                  class="router"
                  style={{ border: `1px solid${props.color as string}` }} />
                <span class="mt-1"
                  style={{ color: props.color as string }}>{props.routerName as string}</span>
              </div>
            </router-link>
          </div>
        </div>
      </>
    );
  }
})