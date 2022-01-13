/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2021-12-21 09:33:05
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-12 16:06:28
 */
import { defineComponent, ref, reactive, watch, shallowReactive } from 'vue'

const PropsType = {
  data: {
    type: Array,
    default: [],
    require: true
  },
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {

    const config = reactive({
      rotation: 0,
      symbolSizeData: [90, 150, 130, 90, 90, 130, 130, 130],
      colors: ["#e25052", "#31b677", "#29b3e5", "#4ec1be", "#d47b36", "#d54de4", "#927b12", "#447cc5"],
      img: require("@/assets/img/bubble.png"),
      offsetData: [
        // x y  
        [0, 20],
        [30, 70],
        [60, 23],
        [100, 88],
        [80, 68],
        [20, 33],
        [63, 80],
        [88, 30],
      ]
    })

    const chartRef = ref()

    let options = shallowReactive({ grid: null, xAxis: null, yAxis: null, series: null, graphic: null })

    const wordLength = (value) => {
      let ret = ""; //拼接加\n返回的类目项
      const maxLength = 5; //每项显示文字个数
      const valLength = value.length; //X轴类目项的文字个数
      const rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
      if (rowN < 1) { //如果类目项的文字大于3,
        return value;
      } else {
        for (let i = 0; i < rowN; i++) {
          let temp = ""; //每次截取的字符串
          const start = i * maxLength; //开始截取的位置
          const end = start + maxLength; //结束截取的位置
          temp = value.substring(start, end) + "\n";  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
          ret += temp; //凭借最终的字符串
        }
        return ret;
      }
    }

    const datas: any[] = (props.data as Array<string>).map((item: any, index: number) => {
      return {
        name: wordLength(item.name) + "\n" + item.value,
        value: config.offsetData[index],
        symbolSize: config.symbolSizeData[index],
        label: {
          normal: {
            textStyle: {
              fontSize: 18
            }
          }
        },
        itemStyle: {
          normal: {
            color: config.colors[index],
            shadowColor: config.colors[index],
            opacity: 0.8,
          },
        }
      }
    })

    watch(() => props, () => {
      options = {
        grid: {
          show: false,
          top: 10,
          bottom: 10
        },
        xAxis: [{
          gridIndex: 0,
          type: "value",
          show: false,
          min: 0,
          max: 100,
          nameLocation: "middle",
          nameGap: 5
        }],
        yAxis: [{
          gridIndex: 0,
          min: 0,
          show: false,
          max: 100,
          nameLocation: "middle",
          nameGap: 30
        }],
        series: [{
          type: "scatter",
          symbol: "circle",
          symbolSize: 120,
          label: {
            normal: {
              show: true,
              formatter: "{b}",
              color: "#fff",
              textStyle: {
                fontSize: "20"
              }
            }
          },
          animationDurationUpdate: 1000,
          animationEasingUpdate: 1000,
          animationDelay: function (idx) {
            // 越往后的数据延迟越大
            return idx * 100;
          },
          itemStyle: {
            normal: {
              color: "#00acea"
            }
          },
          data: datas
        }],
        graphic: [{
          type: 'image',
          id: 'logo',
          left: '45%',
          bottom: '30%',
          z: -10,
          bounding: 'raw',
          origin: [675, 5],
          style: {
            image: config.img,
            width: 120,
            height: 120,
            opacity: 0.4
          }
        }, {
          type: 'image',
          id: 'logo1',
          right: '14%',
          bottom: '0',
          z: -10,
          bounding: 'raw',
          origin: [275, 5],
          style: {
            image: config.img,
            width: 80,
            height: 80,
            opacity: 0.4
          }
        }, {
          type: 'image',
          id: 'logo2',
          left: '10%',
          bottom: '2%',
          z: -10,
          bounding: 'raw',
          origin: [875, 15],
          style: {
            image: config.img,
            width: 60,
            height: 60,
            opacity: 0.4
          }
        }, {
          type: 'image',
          id: 'logo3',
          left: '36%',
          bottom: 0,
          z: -10,
          bounding: 'raw',
          origin: [975, 5],
          style: {
            image: config.img,
            width: 40,
            height: 40,
            opacity: 0.4
          }
        }, {
          type: 'image',
          id: 'logo4',
          left: '32%',
          bottom: '10%',
          z: -10,
          bounding: 'raw',
          origin: [76, 76],
          style: {
            image: config.img,
            width: 50,
            height: 50,
            opacity: 0.4
          }
        }, {
          type: 'image',
          id: 'logo5',
          left: '40%',
          bottom: '35%',
          z: -10,
          bounding: 'raw',
          origin: [76, 76],
          style: {
            image: config.img,
            width: 90,
            height: 90,
            opacity: 0.4
          }
        }, {
          type: 'image',
          id: 'logo6',
          left: '5%',
          bottom: '50%',
          z: -10,
          bounding: 'raw',
          origin: [76, 76],
          style: {
            image: config.img,
            width: 160,
            height: 160,
            opacity: 0.4
          }
        }]
      }
    },
      {
        immediate: true,
      }
    )

    setInterval(function () {
      chartRef.value && chartRef.value.initChart({
        graphic: [{
          id: 'logo',
          rotation: -(config.rotation += Math.PI / 860) % (Math.PI * 2),
        }, {
          id: 'logo1',
          rotation: -(config.rotation += Math.PI / 640) % (Math.PI * 2),
        }, {
          id: 'logo2',
          rotation: -(config.rotation += Math.PI / 360) % (Math.PI * 2),
        }, {
          id: 'logo3',
          rotation: -(config.rotation += Math.PI / 720) % (Math.PI * 2),
        }]
      })

    }, 30);

    return () => {
      const height = "320px", width = "1200px";
      return <echart ref={chartRef} options={options} height={height} width={width} />
    }
  }
})
