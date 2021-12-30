/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-30 09:57:08
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-30 18:09:26
 */
import { defineComponent, watch, shallowReactive } from 'vue'
import * as echarts from 'echarts'

// 定义类型
const PropsType = {
  height: {
    type: String,
    default: "350px",
    require: true
  },
  width: {
    type: String,
    default: "900px",
    require: true
  },
  class: {
    type: String,
    default: "",
    require: true
  },
  data: {
    type: Array,
    default: [],
    require: true
  },
  xName: {
    type: Array,
    default: [],
    require: true
  }
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {

    let options = shallowReactive({ tooltip: null, legend: null, xAxis: null, yAxis: null, series: null })


    const json = {
      xName: props.xName,
      low: props.data,
      lowLine: [],
    };

    const zrUtil = echarts.util;
    zrUtil.each(json.xName, function (item, index) {
      json.lowLine.push([{
        coord: [index, json.low[index]]
      }, {
        coord: [index + 1, json.low[index + 1]]
      }]);
    });

    watch(() => props, (val) => {
      options = {
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "#fff",
            fontSize: '100%',
          },
        },
        legend: {
          data: ['平均工资'],
          textStyle: {
            fontSize: 16,
            color: '#ffffff'
          },
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
          data: json.xName
        },
        yAxis: {
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
        series: [{
          name: '平均工资',
          type: 'line',
          // smooth: true,
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            normal: {
              color: '#00c2ff'
            }
          },
          data: val.data,
          label: {
            show: true,
            position: 'top',
            color: '#ffffff',
            fontSize: 16,
          },
        }, {
          type: 'lines',
          coordinateSystem: 'cartesian2d',
          zlevel: 1,
          smooth: true,
          symbol: 'circle',
          effect: {
            show: true,
            smooth: true,
            period: 2,
            symbolSize: 8
          },
          lineStyle: {
            normal: {
              color: '#00c2ff',
              width: 0,
              opacity: 0,
              curveness: 0,
            }
          },
          data: json.lowLine
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
