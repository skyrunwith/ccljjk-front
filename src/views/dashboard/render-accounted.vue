<template>
  <div style="height:100% ;width: 100%;display: flex; align-items: center; justify-content: center; flex-direction: column;">
        <div id="ctsyqkPie" style="width: 320px; height: 240px;"></div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
// 引入饼状图组件
require('echarts/lib/chart/pie')
  export default {
    name: 'RenderAccounted',
    data: function () {
      return {
      }
    },
    created() {
        // this.drawCtsyqkPie();
    },
    mounted() {
        this.drawCtsyqkPie();
    },
    methods: {
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
        window.addEventListener('resize', () => { // 这里用箭头函数
             CtsyqkPie.resize()
        })
    }
    }
  }
</script>