/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-06 14:41:46
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-06 15:48:05
 */
import { defineComponent, watch, shallowReactive } from 'vue'

const PropsType = {
  name: {
    type: Array,
    default: [],
    require: true
  },
  value: {
    type: Array,
    default: [],
    require: true
  },
  height: {
    type: String,
    default: "300px",
    require: true
  },
  width: {
    type: String,
    default: "420px",
    require: true
  },
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {

    let options = shallowReactive({ tooltip: null, xAxis: null, yAxis: null, series: null })

    watch(() => props, (val: any) => {
      options = {
        tooltip: {
          show: true,
          textStyle: {
            color: "#ffffff",
            fontSize: 14
          },
        },
        xAxis: [{
          type: 'category',
          data: val.name,
          axisTick: {
            alignWithLabel: true,
          },
          nameTextStyle: {
            color: '#82b0ec',
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#82b0ec',
            },
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: '14',
            },
            margin: 30,
          },
        }],
        yAxis: [{
          show: false,
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
          splitLine: {
            lineStyle: {
              color: '#0c2c5a',
            },
          },
          axisLine: {
            show: false,
          },
        }],
        series: [{
          name: '',
          type: 'pictorialBar',
          symbolSize: [40, 10],
          symbolOffset: [0, -6], // 上部椭圆
          symbolPosition: 'end',
          z: 12,
          // "barWidth": "0",
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: "{c} 元",
              fontSize: 15,
              fontWeight: 'bold',
              color: '#34DCFF',
            },
          },
          color: '#2DB1EF',
          data: val.value,
        }, {
          name: '',
          type: 'pictorialBar',
          symbolSize: [40, 10],
          symbolOffset: [0, 7], // 下部椭圆
          // "barWidth": "20",
          z: 12,
          color: '#2DB1EF',
          data: val.value,
        }, {
          name: '',
          type: 'pictorialBar',
          symbolSize: function (d) {
            return d > 0 ? [50, 15] : [0, 0]
          },
          symbolOffset: [0, 12], // 下部内环
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#2EA9E5',
              borderType: 'solid',
              borderWidth: 1,
            },
          },
          data: val.value,
        }, {
          name: '',
          type: 'pictorialBar',
          symbolSize: [70, 20],
          symbolOffset: [0, 18], // 下部外环
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#19465D',
              borderType: 'solid',
              borderWidth: 2,
            },
          },
          data: val.value,
        }, {
          type: 'bar',
          //silent: true,
          barWidth: '40',
          barGap: '10%', // Make series be overlap
          barCateGoryGap: '10%',
          itemStyle: {
            normal: {
              color: "#2DB1EF",
              opacity: 0.8,
            },
          },
          data: val.value,
        }],
      }
    }, {
      immediate: true,
    })

    return () => {
      return <echart options={options} height={props.height} width={props.width} />
    }
  }
})
