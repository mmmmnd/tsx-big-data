/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-28 10:37:37
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-29 15:12:41
 */
import { defineComponent, watch, shallowReactive } from 'vue'

// 定义类型
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
    let options = shallowReactive({ color: null, tooltip: null, legend: null, series: null })

    watch(() => props, (val) => {
      options = {
        color: colors,
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
        legend: {
          top: "5%",
          left: 'center',
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
        },
        series: [{
          type: 'pie',
          roseType: 'radius',
          center: ['50%', '50%'],
          zlevel: 10,
          itemStyle: {
            borderRadius: 100
          },
          startAngle: 10,
          label: {
            normal: {
              position: 'outside',
              fontSize: 16,
              textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#fff',
              },
              formatter: '{b}:{c}',
            },
          },
          data: val.data
        }, {
          type: 'pie',
          roseType: 'radius',
          center: ['50%', '50%'],
          zlevel: 10,
          itemStyle: {
            borderRadius: 100
          },
          startAngle: 10,
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
        }],
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
