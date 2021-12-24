/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-24 15:59:30
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-24 17:37:00
 */
import { defineComponent, watch, reactive, shallowReactive } from 'vue'

// 定义类型
const PropsType = {
  data: {
    type: Array,
    default: [],
    require: true
  },
  value: {
    type: Array,
    default: [],
    require: true
  },
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {

    const config = reactive({
      height: "400px",
      width: "700px",
      colors: ['#0278e6', '#34d160', '#fcdf39', '#f19611', '#00c6ff', '#f76363']
    })

    let options = shallowReactive({ barWidth: null, tooltip: null, legend: null, xAxis: null, yAxis: null, series: null, })

    watch(() => props, (val) => {
      options = {
        barWidth: 15,
        tooltip: {
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
        },
        legend: {
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          data: val.data,
        },
        xAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: "#ffffff",
              type: 'dashed'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff",
              fontSize: 16
            }
          }
        },
        yAxis: {
          type: 'category',
          data: val.data,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#2c4054'
            }
          },
          axisLabel: {
            textStyle: {
              color: "#ffffff",
              fontSize: 16
            }
          }
        },
        series: [{
          type: 'bar',
          barWidth: 20,
          data: val.value,
          label: {
            show: true,
            position: 'right',
            color: '#A7D6F4',
            fontSize: 14,
            distance: 15,
          },
          itemStyle: {
            normal: {
              barBorderRadius: [0, 30, 30, 0],
              color: (params) => config.colors[params.dataIndex],
              shadowBlur: 0,
              shadowColor: 'rgba(87,220,222,0.7)'
            },
          }
        }]
      }
    },
      {
        immediate: true,
        deep: true
      }
    )

    return () => {
      return <echart options={options} height={config.height} width={config.width} />
    }
  }
})
