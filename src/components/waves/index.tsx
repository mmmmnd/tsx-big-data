/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-22 10:38:29
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-30 09:55:11
 */
import { defineComponent, watch, reactive, shallowReactive } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'

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
  value: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    default: ""
  }
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {

    const config = reactive({
      value: (props.value as number) * 100,
      data: [props.value, props.value, props.value],
      img: require("@/assets/img/wavesIcon.png")
    })

    let options = shallowReactive({ title: null, series: null, })

    watch(() => props, (val) => {
      options = {
        title: [{
          bottom: '15%',
          left: 'center',
          text: val.name,
          textStyle: {
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 300
          }
        }],
        series: [{
          type: 'liquidFill',
          radius: '45%',
          color: [
            '#def2fe',
            '#b6e3fc',
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#72D1FB",
            }, {
              offset: 0.8,
              color: "#43ABF7",
            }
            ])],
          data: config.data,
          center: ['50%', '50%'],
          label: {
            normal: {
              fontSize: 30,
              fontWeight: 400,
              color: '#72D1FB'
            }
          },
          itemStyle: {
            //opacity: 0.7, // 波浪的透明度
            shadowBlur: 0 // 波浪的阴影范围
          },
          emphasis: {
            itemStyle: {
              opacity: 0.8, // 鼠标经过波浪颜色的透明度
            },
          },
          outline: {
            borderDistance: 0,
            itemStyle: {
              borderWidth: 4,
              borderColor: '#ecebea',
              shadowBlur: 20
            }
          },
          backgroundStyle: {
            color: '#fff'
          }
        }, {
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['50%', '51%'],
          hoverAnimation: false,
          borderCap: 'round',
          data: [{
            name: '',
            value: config.value,
            labelLine: {
              show: false,
            },
            itemStyle: {
              normal: {
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#43ABF7'
                }, {
                  offset: 1,
                  color: '#72D1FB'
                }]),
                borderWidth: 5
              },
              emphasis: {
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#43ABF7'
                }, {
                  offset: 1,
                  color: '#72D1FB'
                }]),
                borderWidth: 5
              }
            },
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
          }, { //画中间的图标
            name: "",
            value: 0,
            label: {
              position: 'inside',
              backgroundColor: {
                image: config.img
              },
              shadowColor: 'rgba(18, 64, 123, 0.38)',
              shadowBlur: 8,
              padding: 20,
              distance: 50
            }
          }, {
            //画剩余的刻度圆环
            name: '',
            value: 100 - config.value,
            itemStyle: {
              normal: {
                color: '#ecebea',
              },
              emphasis: {
                color: '#ecebea',
              }
            },
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }
          }, {
            // 解决叠加明显的问题
            name: '',
            value: 0.2,
            itemStyle: {
              color: 'rgba(0,0,0,0)',
            },
          }
          ],
        }]
      }
    },
      {
        immediate: true,
        deep: true
      }
    )

    return () => {
      return <echart options={options} height={props.height} width={props.width} />
    }
  }
})
