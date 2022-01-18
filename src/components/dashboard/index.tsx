/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-20 11:33:15
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-30 18:20:34
 */
import { defineComponent, ref, watch, shallowReactive } from 'vue'

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
} as const

export default defineComponent({
  name: 'Dashboard',
  props: PropsType,
  setup(props) {
    const chartRef = ref()

    let angle = 0;//角度，用来做简单的动画效果的
    const value = 0;
    let options = shallowReactive({ title: null, series: null, })

    watch(() => props, () => {
      options = {
        title: {
          x: 'center',
          y: 'center',
          textStyle: {
            rich: {
              a: {
                fontSize: 20,
                color: '#29EEF3'
              },

              c: {
                fontSize: 48,
                color: '#ffffff',
              }
            }
          }
        },
        series: [{
          name: "ring5",
          type: 'custom',
          coordinateSystem: "none",
          renderItem: function (params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                startAngle: (0 + angle) * Math.PI / 180,
                endAngle: (90 + angle) * Math.PI / 180
              },
              style: {
                stroke: "#0CD3DB",
                fill: "transparent",
                lineWidth: 1.5
              },
              silent: true
            };
          },
          data: [0]
        }, {
          name: "ring5",
          type: 'custom',
          coordinateSystem: "none",
          renderItem: function (params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                startAngle: (180 + angle) * Math.PI / 180,
                endAngle: (270 + angle) * Math.PI / 180
              },
              style: {
                stroke: "#0CD3DB",
                fill: "transparent",
                lineWidth: 1.5
              },
              silent: true
            };
          },
          data: [0]
        }, {
          name: "ring5",
          type: 'custom',
          coordinateSystem: "none",
          renderItem: function (params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                startAngle: (270 + -angle) * Math.PI / 180,
                endAngle: (40 + -angle) * Math.PI / 180
              },
              style: {
                stroke: "#0CD3DB",
                fill: "transparent",
                lineWidth: 1.5
              },
              silent: true
            };
          },
          data: [0]
        }, {
          name: "ring5",
          type: 'custom',
          coordinateSystem: "none",
          renderItem: function (params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                startAngle: (90 + -angle) * Math.PI / 180,
                endAngle: (220 + -angle) * Math.PI / 180
              },
              style: {
                stroke: "#0CD3DB",
                fill: "transparent",
                lineWidth: 1.5
              },
              silent: true
            };
          },
          data: [0]
        }, {
          name: "ring5",
          type: 'custom',
          coordinateSystem: "none",
          renderItem: function (params, api) {
            const x0 = api.getWidth() / 2;
            const y0 = api.getHeight() / 2;
            const r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
            const point = getCirlPoint(x0, y0, r, (90 + -angle))
            return {
              type: 'circle',
              shape: {
                cx: point.x,
                cy: point.y,
                r: 4
              },
              style: {
                stroke: "#0CD3DB",//粉
                fill: "#0CD3DB"
              },
              silent: true
            };
          },
          data: [0]
        }, {
          name: "ring5",  //绿点
          type: 'custom',
          coordinateSystem: "none",
          renderItem: function (params, api) {
            const x0 = api.getWidth() / 2;
            const y0 = api.getHeight() / 2;
            const r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
            const point = getCirlPoint(x0, y0, r, (270 + -angle))
            return {
              type: 'circle',
              shape: {
                cx: point.x,
                cy: point.y,
                r: 4
              },
              style: {
                stroke: "#0CD3DB",      //绿
                fill: "#0CD3DB"
              },
              silent: true
            };
          },
          data: [0]
        }, {
          type: 'pie',
          radius: ['58%', '45%'],
          animation: false,
          data: [{
            value: value,
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#4FADFD' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#28E8FA' // 100% 处的颜色
                  }]
                },
              }
            }
          }]
        }]
      }
    },
      {
        immediate: true,
        deep: true
      }
    )


    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    const getCirlPoint = (x0, y0, r, angle) => {
      const x1 = x0 + r * Math.cos(angle * Math.PI / 180)
      const y1 = y0 + r * Math.sin(angle * Math.PI / 180)
      return {
        x: x1,
        y: y1
      }
    }

    function startTimer() {
      setInterval(() => {
        angle += 3
        chartRef.value && chartRef.value.initChart(options)
      }, 20);
    }

    startTimer();

    return () => {
      return <echart ref={chartRef} options={options} height={props.height} width={props.width} />
    }
  }
})
