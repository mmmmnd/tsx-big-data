/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-13 10:35:23
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-17 11:43:31
 */
import { defineComponent, computed } from 'vue'

const PropsType = {
  number: {
    type: Array,
    default: [0]
  },
  fontSize: {
    type: Number,
    default: 20
  }
} as const

export default defineComponent({
  name: "DoubleDealer",
  props: PropsType,
  setup(props) {

    const config = computed(() => {
      return {
        number: props.number,
        style: { fontSize: props.fontSize },
        content: '{nt}'
      }
    })

    return () => (
      <dv-digital-flop config={config.value} />
    );
  }
})