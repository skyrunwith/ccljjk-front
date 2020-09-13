<template >
  <div class="el-container home-charts">
    <div  style="color: white;">{{nowTime}}</div>
    <div class="left-charts-container charts-box">
      
      <div class="long-charts">
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
        
        <div class="charts-item">
          <div class="title-img-box">
            <div data-v-79602b79="" class="title-img">
              &nbsp;
              马尔康空气质量实时数据
              <span data-v-79602b79="" class="words">Live</span></div>
          </div>
          <div id="cycle2" class="qa-box" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <div id="Airquality"  style="width: 380px; height: 240px;"></div>
            <div id="Thermometer"  style="width: 460px;height:180px;"></div>
            <div id="alarmLevel" style="position:relative;left: 17%;bottom: 37%;display:none;border-radius:20px;text-align:center;">
              <span style="color:#ffffff; fontFamily: '微软雅黑';padding: 10px 10px;">{{alarmType}}{{alarmLevel}}预警</span>
            </div>
            <div  style="position:relative;bottom: 11%;left: 18%;">
              <span style="color:#1296db; fontFamily: '微软雅黑';padding: 10px 10px;">{{wea}}&nbsp;&nbsp;{{lowerTemperature}}°C~{{higherTemperatureNum}}°C</span>
            </div>
            <div style="width: 60%;">
              <img  src="../../images/humidity.png"/><span style="color:#1296db; fontFamily: '微软雅黑';vertical-align: super;">相对湿度:&nbsp;&nbsp;{{humidityNum}}</span> 
              <img src="../../images/wind.png" style="padding-left: 5%"/><span style="color:#1296db; fontFamily: '微软雅黑';vertical-align: super;">{{winDirection}}</span> &nbsp;&nbsp;<span style="color:#1296db; fontFamily: '微软雅黑';vertical-align: super;">{{winSpeed}}</span>    
            </div>
          </div>
        </div>
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
      </div>
      <div class="long-charts">
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>

        <div class="charts-item">
          <div class="title-img-box">
            <div data-v-79602b79="" class="title-img">
              &nbsp;
              餐厅收运情况占比
              <span data-v-79602b79="" class="words">Scale</span></div>
          </div>
          <div id="cycle2" class="qa-box" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <div id="ctsyqkPie" style="width: 320px; height: 240px;">
              <!-- <img src="../../images/weather.png"/> -->
            </div>
          </div>
        </div>
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>

      </div>
    </div>
    <div class="right-charts-container charts-box">
      <div class="short-charts2">
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
        <div class="charts-item">
          <div class="title-img-box">
            <div data-v-79602b79="" class="title-img">
              &nbsp;
              待处理消息
            </div>
          </div>
          <div style="color: white">
            待处理消息内容
          </div>
        </div>
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
      </div>
      <div class="short-charts2">
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
        <div class="charts-item">
          <div class="title-img-box">
            <div data-v-79602b79="" class="title-img">
              &nbsp;
              餐厅收运概览
            </div>
          </div>
          <div style="color: white">
            内容
          </div>
        </div>
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
      </div>
      <div class="short-charts2"></div>
    </div>
    <div class="foot-charts-container charts-box">
      <div class="foot-charts">
        <div class="splite-cell"></div>
        <div class="charts-item">
          <div class="title-img-box">
            <div data-v-79602b79="" class="title-img">
              &nbsp;&nbsp;
              30天内餐厨收运总量日统计
              <span data-v-79602b79="" class="words">Statistics</span></div>
          </div>
          <div id="qabox" class="qa-box" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
            <div style="position: relative; overflow: hidden; width: 760px; height: 211px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
              <div style="width: 380px; height: 300px;">
                <img src="../../images/statistics.png"/>
              </div>
            </div>
          </div>
        </div>
        <div class="splite-cell"></div>
      </div>

    </div>
    <div class="cesium">
      <render-map></render-map>
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
import RenderMap from '@/views/dashboard/render-map'
export default {
  name: 'DataTotal',
  components: {RenderMap},
  data(){
    return {
        nowTime:'',
        weatherImg:'',//
        aqiNum:'',//空气质量数据
        temperatureNum:0,//温度数据
        humidityNum:'',//湿度数据
        winDirection:'',//风向
        alarmType:'',//预警类型
        alarmLevel: '',//预警级别
        // alarm:[{
        //   "id": "101042000",//城市ID
        //   "alarm_type": "大风",//预警类型
        //   "alarm_level": "蓝色",//预警级别
        //   "alarm_content": "巫山县气象局2020年2月13日17时15分发布大风蓝色预警信号:预计我县大部及沿江河谷地区将出现7级以上阵风，可能会造成大风灾害，请注意加强防范。【巫山县预警信息发布中心】（预警信息来源：国家预警信息发布中心）"
        //   }],
        winMeter:'',//风速
        lowerTemperature :'',//低温
        higherTemperatureNum:'',//高温
        winSpeed:'' ,//风速
        wea:'',//天气
        alarmShow: false //是否显示预警数据
    }
  },
    created(){},
    mounted(){
       this.drawCtsyqkPie();
       this.getWeather();
       
      //  this.nowTimes();
       
    },
    methods:{
      timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+':'+ss ;
    },
    nowTimes(){
      this.timeFormate(new Date());
      setInterval(this.nowTimes,1000);
      this.clear()
    },
    clear(){
      clearInterval(this.nowTimes)
      this.nowTimes = null;
    },
    setAlarmLevel(data){
      document.getElementById('alarmLevel').style.display = 'inline-block';
      if (data === "蓝色"){
        document.getElementById('alarmLevel').style.backgroundColor = '#1296db';
      }else if(data === "黄色"){
         document.getElementById('alarmLevel').style.backgroundColor = '#FFE153';
      }else if(data === "橙色"){
         document.getElementById('alarmLevel').style.backgroundColor = '#FF5809';
      }else if(data === "红色"){
         document.getElementById('alarmLevel').style.backgroundColor = '#FF2D2D';
      }else{

      }
      
    },
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
          console.log("预警类型",this.alarmType);
          console.log("预警等级",this.alarmLevel);
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
    },
    drawCtsyqkPie(){
      var CtsyqkPie = echarts.init(document.getElementById('ctsyqkPie'));
      CtsyqkPie.setOption({
        tooltip:{
              trigger: 'item',
              formatter: "{a} <br/>{b} :({d}%)",
              confine:true
        },
        series:[{
          name: '收运情况',
          type:'pie',
          radius:['40%', '60%'],
          center:['50%', '50%'],
          minAngle: 5,
          avoidLabelOverlap: true,
          data:[
                {value:275, name:'已收运'},
                {value:224, name:'未收运'},
                {value:30, name:'未营业'},
          ],
          itemStyle:{
            normal:{ 
                  label:{ 
                    show: true, 
                    formatter: '{b} :\n ({d}%)' ,
                    position:'outer',
                    alignTo:'edge',
                    margin:5,
                    width:'40px'
                  }, 
                   position: "inside",
                  labelLine :{show:true},
                  color:function(params){
                      var colorList = ['#33ff00','#FFFF00','	#6E6E6E'];
                      return colorList[params.dataIndex]
                  } 
                } 
          }
        }]
      });
    }
  }
  
}
</script>

<style scoped>
  .home-charts{background:#051435!important;width:100%;height:100%;min-height:calc(100vh - 40px);position:relative}
  .home-charts .left-charts-container {
    width: 26vw;
    height: calc(100% - 80px);
    position: fixed;
    left: 54px;
    top: 50px;
  }
  .home-charts .charts-box {
    background: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .home-charts .charts-box .long-charts, .home-charts .charts-box .short-charts {
    width: 95%;
    margin: 10px 0;
    border-left: 2px solid #425762;
    border-right: 2px solid #425762;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .home-charts .charts-box .long-charts {
    height: 64%;
  }
  .home-charts .splite-cell {
    width: 100%;
    height: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .home-charts .charts-box .charts-item {
    width: calc(100% - 4px);
    height: calc(100% - 8px);
  }
  .home-charts .charts-box .charts-item, .home-charts .charts-box .foot-charts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .home-charts .charts-box .charts-item .title-img-box {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 26px;
    color:white;
  }
  .home-charts .charts-box .charts-item .qa-box {
    width: 100%;
    height: calc(100% - 50px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .home-charts .charts-box .charts-item .qa-box .cell-diulei, .home-charts .charts-box .charts-item .qa-box .label-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .home-charts .charts-box .charts-item .qa-box .cell-diulei {
    width: 400px;
    height: 100px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .home-charts .charts-box .charts-item .qa-box .label-item {
    width: 33%;
    height: 40px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
  }
  .home-charts .charts-box .charts-item .qa-box .cell-diulei, .home-charts .charts-box .charts-item .qa-box .label-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .home-charts .charts-box .charts-item .title-img-box .title-img {
    line-height: 26px;
    height: 100%;
    width: 90%;
    background-color: #1a2e36;
    color: #fff;
    font-size: 15px;
    font-family: CUSTOM;
  }
  .home-charts .splite-cell .point {
    margin: 0 5px;
    width: 4px;
    height: 4px;
    background: #8e8f93;
  }
/* footer css */
  .home-charts .charts-box {
    background: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .home-charts .foot-charts-container {
    width: 44vw;
    height: 300px;
    position: fixed;
    bottom: 40px;
    left: 29.4vw;
  }
  .home-charts .charts-box .charts-item, .home-charts .charts-box .foot-charts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .home-charts .charts-box .foot-charts {
    margin: 10px 0;
    width: 100%;
    height: 100%;
    border-left: 2px solid #425762;
    border-right: 2px solid #425762;
  }

  .home-charts .right-charts-container {
    width: 26vw;
    height: calc(100% - 63px);
    position: fixed;
    top: 50px;
    right: 0;
  }

  .home-charts .charts-box .mini-charts, .home-charts .charts-box .short-charts2 {
    width: 95%;
    margin: 10px 0;
    border-left: 2px solid #425762;
    border-right: 2px solid #425762;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .home-charts .cesium {
    width: 44vw;
    left: 29.4vw;
    height: calc(100% - 420px);
    position: fixed;
    top: 60px;
  }
</style>
