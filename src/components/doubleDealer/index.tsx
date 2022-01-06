/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-13 10:35:23
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-06 11:48:17
 */
import { defineComponent, ref } from 'vue'

const PropsType = {
  number: {
    type: Array,
    default: [0]
  },
  fontSize: {
    type: Number,
    default: 20
  },
  textAlign: {
    type: String,
    default: "center",
  },
  content: {
    type: String,
    default: '{nt}'
  }
} as const

export default defineComponent({
  name: "DoubleDealer",
  props: PropsType,
  setup(props) {
    const type = ref(true);

    const config1 = {
      number: [0],
      style: { fontSize: props.fontSize },
      textAlign: props.textAlign,
      content: props.content
    }

    const config2 = {
      number: props.number,
      style: { fontSize: props.fontSize },
      textAlign: props.textAlign,
      content: props.content
    }

    setTimeout(() => type.value = false, 0)

    return () => (
      <dv-digital-flop config={type.value ? config1 : config2} />
    );
  }
})