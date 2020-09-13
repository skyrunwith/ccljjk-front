<template>
  <!--<div id="dayStatistics" style="height:100% ;width: 100%">
    <img src="../../images/statistics.png"/>
  </div>-->

  <div id="myChart" style="height:260px ;width: 100%;padding-left: 33px;bottom: 23px;left: 4px;position: relative;"></div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'RenderDayStatistics',
    data: function () {
      return {}
    },
    created() {
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        let myChart = echarts.init(document.getElementById('myChart'));
        let option = {
          title: {
            text: '', //标题
            subtext: '',
            left: 'center',
            align: 'right'
          },
          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: true,
            feature: {
              // dataView: {show: true, readOnly: false},
              // magicType: {show: true, type: ['line', 'bar']},
              // restore: {show: true},
              // saveAsImage: {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: ["09/01","09/02","09/03","09/04","09/05","09/06","09/07","09/08","09/09","09/10","09/11","09/12",
                "09/13","09/14","09/15","09/16","09/17","09/18","09/19","09/20","09/21","09/22"],
              axisLabel: {
                color: "white", //刻度线标签颜色
                interval: 0, //显示所有
                rotate:40, //字体倾斜
              }
            }
          ],
          yAxis: [
            {
              name: '收运量(千克/kg)',
              type: 'value',
              axisLabel: {
                color: "white", //刻度线标签颜色
                // formatter: '{value}千克'
                formatter: '{value}'
              },
              nameTextStyle: {
                color: 'white'
              }
            }
          ],
          series: [
            {
              name: '收运量',
              type: 'bar',
              data: [5010, 2410, 3600, 800, 1000, 2000, 4000, 2200, 3600, 7500, 1200,
                2050, 5020, 2200, 3600, 1200, 1020, 6100, 500, 2000, 3600, 1700],
              markPoint: {
                data: [
                  // {type: 'max', name: '最大值'},
                  // {type: 'min', name: '最小值'}
                ]
              },
              itemStyle: {
                normal: {
                  label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                      color: 'white',
                      fontSize: 10
                    }
                  },
                  color: function(params){
                    if(params.data < 2000){
                      return '#C1232B';
                    }else if(params.data>=2000 && params.data<3000){
                      return '#FE8463';
                    }else if(params.data>=3000 && params.data<5000){
                      return '#FCCE10';
                    }else if(params.data>=5000 && params.data<=8000){
                      return '#B5C334';
                    }
                  }
                }
              }
            }
          ]
        };
        myChart.setOption(option);
        // myChart.resize({height:300});
      },
      init() {
        // 请求接口，拿到数据并渲染
        // $("#myChart").append();
      }
    }
  }
</script>

<style scoped>
  .error-text-span {
    position: absolute;
    bottom: 13px;
    left: 214px;
  }
</style>

