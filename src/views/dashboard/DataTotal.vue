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
            <render-air></render-air>
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
          <div  class="qa-box" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <render-accounted></render-accounted>
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
              <span data-v-79602b79="" class="words">Information</span>
            </div>
          </div>
          <div style="color: white">
            <render-notify></render-notify>
          </div>
        </div>
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
      </div>
      <div class="short-charts3">
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
        <div class="charts-item">
          <div class="title-img-box">
            <div data-v-79602b79="" class="title-img">
              &nbsp;
              餐厅收运概览
              <span data-v-79602b79="" class="words">Overview</span>
            </div>
          </div>
          <div style="color: white" class="warn-box">
            <render-dining-statistics></render-dining-statistics>
          </div>
        </div>
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
      </div>
    </div>
    <div class="foot-charts-container charts-box">
      <div class="foot-charts">
        <div class="splite-cell"></div>
        <div class="charts-item">
          <div class="title-img-box">
            <div data-v-79602b79="" class="title-img">
              &nbsp;&nbsp;
              餐厨日收运趋势
              <span data-v-79602b79="" class="words">Tendency</span></div>
          </div>
          <div id="qabox" class="qa-box" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
            <div style="position: relative; overflow: hidden; width: 760px; height: 211px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
              <!--<div style="width: 380px; height: 300px;">
                <render-day-statistics></render-day-statistics>
              </div>-->
              <div style="width: 100%; height: 100%;">
                <render-day-statistics></render-day-statistics>
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
import RenderDiningStatistics from '@/views/dashboard/render-diningStatistics'
import RenderDayStatistics from '@/views/dashboard/render-dayStatistics'
import RenderNotify from '@/views/dashboard/render-notify'
import RenderAir from '@/views/dashboard/render-air'
import RenderAccounted from '@/views/dashboard/render-accounted'

export default {
  name: 'DataTotal',
  components: {
    RenderMap,
	  RenderDiningStatistics,
    RenderDayStatistics,
    RenderNotify,
    RenderAir,
    RenderAccounted},
  data(){
    return {
        nowTime:'',
    }
  },
    created(){
       
    },
    mounted(){

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
    height: 322px;
    position: fixed;
    bottom: 30px;
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
    height: 32%;
    margin: 10px 0px 36px 0px;
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
  .home-charts .charts-box .mini-charts, .home-charts .charts-box .short-charts3 {
    width: 95%;
    height: 64%;
    margin: 10px 0px 36px 0px;
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

  .warn-box {
    width: 100%;
    height: calc(100% - 40px);
    max-height: calc(100% - 40px);
    position: relative;
    padding: 0 10px;
  }

  .words {
    color: #8c7f7f
  }
</style>
