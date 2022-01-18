/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-29 10:23:41
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-12 09:23:36
 */

import { defineComponent, watch, shallowReactive } from 'vue'

// 定义类型
const PropsType = {
  height: {
    type: String,
    default: "500px",
    require: true
  },
  width: {
    type: String,
    default: "680px",
    require: true
  },
  xName: {
    type: Array,
    default: [],
    require: true
  },
  data: {
    type: Array,
    default: [],
    require: true
  },
  class: {
    type: String,
    default: "",
    require: true
  }
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {

    const colors = ['#0278e6', '#34d160', '#fcdf39', '#f19611', '#00c6ff', '#f76363'];
    let options = shallowReactive({ grid: null, tooltip: null, xAxis: null, yAxis: null, series: null })

    watch(() => props, (val) => {
      options = {
        grid: {
          left: '13%'
        },
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "#fff",
            fontSize: '100%',
          },
        },
        xAxis: {
          data: val.xName,
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
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#FFFFFF'
            }
          },
        },
        yAxis: [{
          type: "value",
          name: "人数",
          nameTextStyle: {
            fontSize: 16,
            color: "#ffffff"
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#FFFFFF'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 16,
              color: "#ffffff"
            }
          },
        }],
        series: [{
          name: "",
          type: "bar",
          barWidth: 15,
          data: val.data,
          itemStyle: {
            normal: {
              color: (params) => colors[params.dataIndex],
            },
          },
          label: {
            show: true,
            position: 'top',
            color: '#ffffff',
            fontSize: 16,
          },
        }]
      }
    },
      {
        immediate: true,
        deep: true
      }
    )


    return () => {
      return <echart class={props.class} options={options} height={props.height} width={props.width} />
    }
  }
})
