<template>
  <div   style="height:100% ;width: 100%;display: flex; align-items: center; justify-content: center; flex-direction: column;">
    <div id="Airquality" ref="Airquality"  style="width: 380px; height: 240px;"></div>
    <div id="Thermometer"   ref="Thermometer"  style="width: 460px;height:180px;"></div>
    <div id="alarmLevel" style="position:relative;left: 17%;bottom: 37%;display:none;border-radius:20px;text-align:center;">
        <span style="color:#ffffff; fontFamily: '微软雅黑';padding: 10px 10px;">{{alarmType}}{{alarmLevel}}预警</span>
    </div>
    <div  style="position:relative;bottom: 11%;left: 14%;">
         <span style="color:#1296db; fontFamily: '微软雅黑';padding: 10px 10px;">{{wea}}&nbsp;&nbsp;{{lowerTemperature}}°C~{{higherTemperatureNum}}°C</span>
     </div>
    <div style="width: 60%;">
        <img  src="../../images/humidity.png"/><span style="color:#1296db; fontFamily: '微软雅黑';vertical-align: super;">相对湿度:&nbsp;&nbsp;{{humidityNum}}</span> 
        <img src="../../images/wind.png" style="padding-left: 5%"/><span style="color:#1296db; fontFamily: '微软雅黑';vertical-align: super;">{{winDirection}}</span> &nbsp;&nbsp;<span style="color:#1296db; fontFamily: '微软雅黑';vertical-align: super;">{{winSpeed}}</span>    
    </div>
  </div>
</template>


<script>
let echarts = require('echarts/lib/echarts')
// 引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

  export default {
    name: 'RenderAir',
    data: function () {
      return {
        aqiNum:'',//空气质量数据
        temperatureNum:0,//温度数据
        humidityNum:'',//湿度数据
        winDirection:'',//风向
        alarmType:'',//预警类型
        alarmLevel: '',//预警级别
        winMeter:'',//风速
        lowerTemperature :'',//低温
        higherTemperatureNum:'',//高温
        winSpeed:'' ,//风速
        wea:'',//天气
        alarmShow: false //是否显示预警数据
      }
    },
    created() {
    },
    mounted() {
        this.getWeather();
    },
    methods: {
        getWeather() {
         this.$axios({
             mounted:'get',
            url: 'https://www.tianqiapi.com/api?version=v6&appid=75698768&appsecret=7LyHELsc&city=马尔康'
         }).then((response) =>{
          this.aqiNum = response.data.air;
          this.temperatureNum = parseInt(response.data.tem);  //温度
          this.humidityNum = response.data.humidity; //相对湿度
          this.winDirection = response.data.win; //风向
          this.alarm = response.data.alarm; //预警数据
          this.winSpeed = response.data.win_speed; //风力等级
          this.lowerTemperature = response.data.tem2;//低温
          this.higherTemperatureNum = response.data.tem1;//高温
          this.winMeter = response.data.win_meter;
          this.wea = response.data.wea;
          this.alarmType = response.data.alarm.alarm_type;//预警类型
          this.alarmLevel= response.data.alarm.alarm_level;//预警级别
          // this.alarmType = '高温';//演示数据
          // this.alarmLevel= '橙色';//演示数据
          if(this.alarmType != "" && this.alarmLevel != ""){ //有预警数据时显示
            this.alarmShow = true;   
            this.setAlarmLevel(this.alarmLevel);
          }
          // debugger
          this.drawAirquality(); //描绘空气质量图
          this.drawThermometer(); //描绘温度计
          console.log(response.data);
          // console.log("预警类型",this.alarmType);
          // console.log("预警等级",this.alarmLevel);
        }).catch((error) =>{
           console.log(error);
        });
    },
    drawThermometer(){
      // debugger
      console.log(this.temperatureNum);
      var Thermometer = echarts.init(document.getElementById('Thermometer'));
            var TP_value = this.temperatureNum;
            var kd = [];
            var Gradient = [];
            var leftColor = '';
            var showValue = '';
            var boxPosition = [75, 0];
            var TP_txt = ''
            // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
            for(var i = 0, len = 135; i <= len; i++) {
                if(i < 10 || i > 130) {
                    kd.push('')
                } else {
                    if((i - 10) % 20 === 0) {
                        kd.push('-3');
                    } else if((i - 10) % 4 === 0) {
                        kd.push('-1');
                    } else {
                        kd.push('');
                    }
                }

            }
            //中间线的渐变色和文本内容
            if(TP_value > 80) {
                TP_txt = '';
                Gradient.push({
                    offset: 0,
                    color: '#93FE94'
                }, {
                    offset: 0.5,
                    color: '#E4D225'
                }, {
                    offset: 1,
                    color: '#E01F28'
                })
            } else if(TP_value > 10) {
                TP_txt = '';
                Gradient.push({
                    offset: 0,
                    color: '#93FE94'
                }, {
                    offset: 1,
                    color: '#E4D225'
                })
            } else {
                TP_txt = '';
                Gradient.push({
                    offset: 1,
                    color: '#93FE94'
                })
            }
            leftColor = Gradient[Gradient.length - 1].color;
            // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
            var option = {
                // backgroundColor: '#098',
                title: {
                    text: '温度计',
                    show: false
                },
                 yAxis: [{
                    show: false,
                    data: [],
                    min: 0,
                    max: 135,
                    axisLine: {
                        show: false
                    }
                }, {
                    show: false,
                    min: 0,
                    max: 50,
                }, {
                    type: 'category',
                    data: ['', '', '', '', '', '', '', '', '', '', '°C'],
                    position: 'left',
                    offset: -80,
                    axisLabel: {
                        fontSize: 15,
                        color: 'white'
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                }], 
                grid: {
                    left: "30%",
                    right: "4%",
                    bottom: "30%",
                    width: "100%",
                    height: "80%",
                    containLabel: true
                },
                xAxis: [{
                    show: false,
                    min: -10,
                    max: 80,
                    data: []
                }, {
                    show: false,
                    min: -10,
                    max: 80,
                    data: []
                }, {
                    show: false,
                    min: -10,
                    max: 80,
                    data: []
                }, {
                    show: false,
                    min: -5,
                    max: 80,

                }],
                series: [{
                    name: '条',
                    type: 'bar',
                    // 对应上面XAxis的第一个对)象配置
                    xAxisIndex: 0,
                    data: [{
                        value: (TP_value + 30),//这个改那个颜色刻度的
                        label: {
                            normal: {
                                show: true,
                                position: boxPosition,
                                width: 20,
                                height: 160,
                                formatter: '{back| ' + TP_value + ' }{unit|°C}\n{downTxt|' + TP_txt + '}',
                                rich: {
                                    back: {
                                        align: 'center',
                                        lineHeight: 50,
                                        fontSize: 50,
                                        fontFamily: 'digifacewide',
                                        color: '#1296db'
                                    },
                                    unit: {
                                        fontFamily: '微软雅黑',
                                        fontSize: 20,
                                        lineHeight: 50,
                                        color: '#1296db'
                                    },
                                    downTxt: {
                                        lineHeight: 50,
                                        fontSize: 30,
                                        align: 'center',
                                        color: '#fff'
                                    }
                                }
                            }
                        }
                    }],

                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                        }
                    },
                    z: 2
                }, {
                    name: '白框',
                    type: 'bar',
                    xAxisIndex: 1,
                    barGap: '-100%',
                    data: [134],
                    barWidth: 28,
                    itemStyle: {
                        normal: {
                            color: '#0C2E6D',
                            barBorderRadius: 50,
                        }
                    },
                    z: 1
                }, {
                    name: '外框',
                    type: 'bar',
                    xAxisIndex: 2,
                    barGap: '-100%',
                    data: [135],
                    barWidth: 38,
                    itemStyle: {
                        normal: {
                            color: '#4577BA',
                            barBorderRadius: 50,
                        }
                    },
                    z: 0
                }, {
                    name: '圆',
                    type: 'scatter',
                    hoverAnimation: false,
                    data: [0],
                    xAxisIndex: 0,
                    symbolSize: 48,
                    itemStyle: {
                        normal: {
                            color: '#93FE94',
                            opacity: 1,
                        }
                    },
                    z: 2
                }, {
                    name: '白圆',
                    type: 'scatter',
                    hoverAnimation: false,
                    data: [0],
                    xAxisIndex: 1,
                    symbolSize: 60,
                    itemStyle: {
                        normal: {
                            color: '#0C2E6D',
                            opacity: 1,
                        }
                    },
                    z: 1
                }, {
                    name: '外圆',
                    type: 'scatter',
                    hoverAnimation: false,
                    data: [0],
                    xAxisIndex: 2,
                    symbolSize: 70,
                    itemStyle: {
                        normal: {
                            color: '#4577BA',
                            opacity: 1,
                        }
                    },
                    z: 0
                }, {
                    name: '刻度',
                    type: 'bar',
                    yAxisIndex: 0,
                    xAxisIndex: 3,
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                            distance: 10,
                            color: 'white',
                            fontSize: 14,
                            formatter: function(params) {
                                if(params.dataIndex > 130 || params.dataIndex < 10) {
                                    return '';
                                } else {
                                    if((params.dataIndex - 10) % 20 === 0) {
                                        return params.dataIndex - 30;//这个改刻度的，当减70的时候刻度是从-60开始不是从零开始
                                    } else {
                                        return '';
                                    }
                                }
                            }
                        }
                    },
                    barGap: '-100%',
                    data: kd,
                    barWidth: 1,
                    itemStyle: {
                        normal: {
                            color: 'white',
                            barBorderRadius: 120,
                        }
                    },
                    z: 0
                }]
            };
                Thermometer.setOption(option);
                window.addEventListener('resize', () => { // 这里用箭头函数
                    Thermometer.resize()
                })
    },
    drawAirquality(){
      var Airquality = echarts.init(document.getElementById('Airquality'));
        Airquality.setOption({
          tooltip : {
            formatter: "{a} <br/>{c} {b}"
          },
          toolbox: {
            show: true,
          },
          series : [
           {
                    name: '空气质量:',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 500,
                    splitNumber: 10,
                    radius: '100%',
                    axisLine: {
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    grid:{
                        // top:'',
                        // left:'',
                        // right:'',
                        // bottom:'',
                        height:"100%"
                    },
                    title:{
                        color: '#fff',
                        fontSize:18,
                        borderRadius:21,
                        padding:5
                    },
                    axisTick: {
                        length: 15,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    //刻度分割线样式
                    splitLine: {
                        length: 25,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    //刻度数字样式
                    axisLabel: {
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    },
                    detail : {
                        backgroundColor: 'rgba(20,124,235,0.8)',
                        borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5,
                        offsetCenter: ['0', '60%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#fff'
                        }
                    },
                    data:[{value:this.aqiNum, name: 'AQI'}]
                },
          ]
        });
            // window.addEventListener('resize', () => {
            //     // 自动渲染echarts
            //     Airquality.resize();
            // })
                window.addEventListener('resize', () => { // 这里用箭头函数
                    Airquality.resize()
                })
    },
    }
  }
</script>