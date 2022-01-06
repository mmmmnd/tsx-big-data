/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-20 14:46:34
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-06 16:40:27
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
  },
  columnWidth: {
    type: Array,
    default: [650]
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
      columnWidth: props.columnWidth,
      align: ['center']
    }

    return () => (
      <dv-scroll-board config={config} />
    );
  }
})