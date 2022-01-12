/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-16 15:02:59
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 18:19:22
 */
import { defineComponent, watch, shallowReactive } from 'vue'

const PropsType = {
  lines: {
    type: Array,
    default: [],
    require: true
  },
  xNames: {
    type: Array,
    default: [],
    require: true
  },
  lists: {
    type: Array,
    default: [],
    require: true
  }
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {

    let options = shallowReactive({ grid: null, legend: null, tooltip: null, yAxis: null, xAxis: null, series: null })

    const datas: any[] = (props.lines as Array<number>).map((item, index) => {
      return index % 2 ? {
        name: item,
        data: props.lists[index],
        type: 'line',
        symbolSize: 16,
        itemStyle: {
          normal: {
            color: "#d14f83",
            label: {
              show: true,
              textStyle: {
                color: "#ffb21e",
                fontWeight: "bold",
                fontSize: "16"
              },
            }
          }
        },
      } : {
        name: item,
        type: 'bar',
        barMaxWidth: 30,
        data: props.lists[index],
        itemStyle: {
          normal: {
            color: "#4a4df0",
            label: {
              show: true,
              textStyle: {
                color: "#f34c30",
                fontWeight: "bold",
                fontSize: "16"
              },
            }
          }
        },
      }
    })

    watch(() => props, (val: any) => {
      options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {
            color: "#fff"
          }
        },
        legend: {
          right: "3%",
          textStyle: {
            color: '#fff',
          },
        },
        grid: {
          left: '10%',
          top: '20%',
          bottom: '10%',
          right: '3%',
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ffffff',
            },
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
              fontSize: 16
            }
          },
          data: val.xNames,
        },
        yAxis: {
          name: "万",
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
        },
        series: datas
      }
    },
      {
        immediate: true,
      }
    )

    return () => {
      const height = "340px", width = "720px";
      return <echart options={options} height={height} width={width} />
    }
  }
})
