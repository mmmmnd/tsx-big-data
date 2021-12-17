/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-17 09:45:14
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-17 18:11:34
 */
import { defineComponent, watch, shallowReactive } from 'vue'

const PropsType = {
  lines: {
    type: Array,
    default: [],
    require: true
  },
  data: {
    type: Array,
    default: [],
    require: true
  },
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {

    const colors = ['#0278e6', '#34d160', '#fcdf39', '#f19611', '#00c6ff', '#f76363'];

    let options = shallowReactive({ color: null, legend: null, tooltip: null, series: null })

    watch(() => props, (val: any) => {
      options = {
        color: colors,
        legend: {
          orient: 'horizontal',
          top: "5%",
          itemGap: 50,
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          data: props.lines,
        },
        tooltip: {
          trigger: 'item',
          textStyle: {
            color: "#ffffff",
            fontSize: 14
          },
          formatter: function (params) {
            return params.name + '：' + params.value + '元<br>占比：' + params.percent.toFixed(2) + '%'
          }
        },
        series: [{
          name: "",
          radius: ['30%', '50%'],
          center: ["50%", "50%"],
          type: 'pie',
          label: {
            show: true,
            normal: {
              position: 'inner',
              fontSize: 16,
              textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#fff',
              },
              formatter: (params) => {
                return params.value + '元';
              }
            }
          },
          labelLine: {
            length: 1,
            length2: 20,
            smooth: true
          },
          data: props.data
        }]
      }
    },
      {
        immediate: true,
      }
    )


    return () => {
      const height = "300px", width = "420px";
      return <echart options={options} height={height} width={width} />
    }
  }
})
