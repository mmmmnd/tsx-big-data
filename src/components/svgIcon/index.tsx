/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-09 10:55:28
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-09 11:03:10
 */
import { defineComponent } from "vue";

const PropsType = {
  name: {
    type: String,
    required: true,
    default: "",
  },
  size: {
    type: Number,
    default: 32,
  },
  color: {
    type: String,
    default: "#000",
  },
} as const

export default defineComponent({
  name: "svgIcon",
  props: PropsType,
  setup(props) {

    return () => (
      <svg class="svg-icon"
        style={{
          width: props.size + 'px' as string,
          height: props.size + 'px' as string,
          color: props.color as string
        }}>
        <use xlinkHref={`#icon-${props.name as string}`}
          fill={props.color as string} />
      </svg >
    )
  },
});