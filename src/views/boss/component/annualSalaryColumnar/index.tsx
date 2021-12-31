/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-31 08:57:26
 * @LastEditors: 莫卓才
 * @LastEditTime: 2021-12-31 15:33:00
 */
import { defineComponent, watch, ref, shallowReactive } from 'vue'

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

    const chartRef = ref()

    let options = shallowReactive({ grid: null, tooltip: null, legend: null, xAxis: null, yAxis: null, series: null, dataZoom: null, })

    const tooltip = {
      show: true,
      trigger: "axis",
      textStyle: {
        color: "#fff",
        fontSize: '100%',
      },
    }

    watch(() => props, (val) => {
      options = {
        grid: {
          bottom: '35%'
        },
        tooltip,
        legend: {
          itemWidth: 24,
          itemHeight: 15,
          itemGap: 15,
          top: '2%',
          right: '7%',
          selectedMode: false,
          textStyle: { fontSize: 12, color: '#fff' },
        },
        dataZoom: [{
          show: false,
          type: 'slider',
          startValue: 0,
          endValue: 7,
          moveOnMouseWheel: true,
          moveOnMouseMove: true,
          zoomOnMouseWheel: false,
        }],
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
            margin: 25,
            rotate: 40,
            color: 'white',
            fontSize: 16,
          },
          data: val.xName,
        },
        yAxis: [{
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
        series: [
          {
            name: "年薪",
            type: 'bar',
            barGap: '-100%',
            barWidth: 24,
            data: val.data,
            itemStyle: { color: "#00c2ff" },
            label: {
              show: true,
              position: 'top',
              color: '#ffffff',
              fontSize: 16,
            },
          }, {
            type: 'pictorialBar',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [24, 10],
            data: val.data,
            itemStyle: { color: "#00c2ff" },
            tooltip: { show: false },
          }
        ]
      }
    },
      {
        immediate: true,
        deep: true
      }
    )

    // 轮询
    const poll = (startValue = 0, endValue = 7) => {
      const index = props.data as any;

      if (chartRef.value) {
        setInterval(() => {
          endValue >= index.length
            ? chartRef.value.setDispatchAction({ type: 'dataZoom', startValue: startValue = 0, endValue: endValue = 7 })
            : chartRef.value.setDispatchAction({ type: 'dataZoom', startValue: startValue += 7, endValue: endValue += 7 });

          chartRef.value.initChart({ tooltip });
        }, 5000)
      }

    }

    // 启动轮询
    poll(0, 7)

    return () => {
      return <echart ref={chartRef} class={props.class} options={options} height={props.height} width={props.width} />
    }
  }
})
