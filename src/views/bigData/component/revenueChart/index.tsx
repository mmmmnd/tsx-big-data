/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-16 15:02:59
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-17 16:21:12
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
          left: '5%',
          top: '10%',
          bottom: '10%',
          right: '3%',
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          data: val.xNames,
        },
        yAxis: {
          name: val.name,
          axisLine: {
            lineStyle: {
              color: '#808eb7',
              width: 2
            }
          },
          splitLine: { //分割线配置
            lineStyle: {
              color: "#AAAAAA56",
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#fff',
            fontSize: 14
          }
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
