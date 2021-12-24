/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-20 09:44:43
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-24 15:32:03
 */
import { defineComponent, watch, shallowReactive } from 'vue'

const PropsType = {
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
  legendLeft: {
    type: String,
    default: "0%",
    require: true
  },
  legendTop: {
    type: String,
    default: "0%",
    require: true
  },
  legendOrient: {
    type: String,
    default: "horizontal",
    require: true
  },
  seriesPosition: {
    type: String,
    default: "outside",
    require: true
  },
  seriesRadius: {
    type: Array,
    default: ["0", "0"],
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
          orient: val.legendOrient,
          top: val.legendTop,
          left: val.legendLeft,
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          data: val.lines,
        },
        tooltip: {
          trigger: 'item',
          textStyle: {
            color: "#ffffff",
            fontSize: 14
          },
          formatter: function (params) {
            return params.name + '：' + params.value + '<br>占比：' + params.percent.toFixed(2) + '%'
          }
        },
        series: [{
          radius: val.seriesRadius,
          center: ["50%", "50%"],
          type: 'pie',
          label: {
            normal: {
              position: 'outside',
              fontSize: 16,
              textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#fff',
              },
              formatter: (params) => {
                return params.name + '：' + params.value;
              }
            }
          },
          data: val.data
        }, {
          radius: val.seriesRadius,
          type: 'pie',
          label: {
            normal: {
              position: 'inner',
              fontSize: 16,
              textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#fff',
              },
              formatter: (params) => {
                return params.percent.toFixed(2) + '%';
              }
            }
          },
          data: val.data
        }]
      }
    },
      {
        immediate: true,
      }
    )


    return () => {
      return <echart options={options} height={props.height} width={props.width} />
    }
  }
})
