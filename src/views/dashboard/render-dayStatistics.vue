<template>
  <!--<div id="dayStatistics" style="height:100% ;width: 100%">
    <img src="../../images/statistics.png"/>
  </div>-->
  <div id="myChart" style="height:100% ;width: 100%;padding-left: 33px;"></div>
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
            text: '',
            subtext: ''
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
              data: ["08/01","08/02","08/03","08/04","08/05","08/06","08/07","08/08","08/09","08/10","08/11","08/12",
                "08/13","08/14","08/15","08/16","08/17","08/18","08/19","08/20","08/21","08/22"],
              axisLabel: {
                color: "white", //刻度线标签颜色
                interval: 0, //显示所有
                rotate:40, //字体倾斜
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                color: "white", //刻度线标签颜色
                formatter: '{value}千克'
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
      },
      init() {
        // 请求接口，拿到数据并渲染
        // $("#myChart").append();
      }
    }
  }
</script>

<style scoped>

</style>

