/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-20 14:46:34
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-20 16:18:35
 */
import { defineComponent } from 'vue'

const PropsType = {
  header: {
    type: Array,
    default: [""]
  },
  data: {
    type: Array,
    default: [""]
  }
} as const

export default defineComponent({
  name: "DoubleDealer",
  props: PropsType,
  setup(props) {

    const config = {
      data: props.data,
      header: props.header,
      headerBGC: "transparent",
      oddRowBGC: "transparent",
      evenRowBGC: "transparent",
      columnWidth: [700],
      align: ['center']
    }

    return () => (
      <dv-scroll-board config={config} />
    );
  }
})