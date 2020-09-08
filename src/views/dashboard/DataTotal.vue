<template >
  <div class="el-container home-charts">
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
            <div style="width: 380px; height: 300px;">
              <img src="../../images/weather.png"/>
            </div>
            <div data-v-79602b79="" class="cell-diulei"><div data-v-79602b79="" class="label-item"><span data-v-79602b79="" style="font-family: CUSTOM; color: rgb(0, 120, 232);">PM25: </span> <span data-v-79602b79="" style="font-size: 12px;"><span data-v-79602b79="" style="font-size: 14px; color: rgb(1, 255, 1);">17.82</span></span></div><div data-v-79602b79="" class="label-item"><span data-v-79602b79="" style="font-family: CUSTOM; color: rgb(0, 120, 232);">PM10: </span> <span data-v-79602b79="" style="font-size: 12px;"><span data-v-79602b79="" style="font-size: 14px; color: rgb(1, 255, 1);">38.88</span></span></div><div data-v-79602b79="" class="label-item"><span data-v-79602b79="" style="font-family: CUSTOM; color: rgb(0, 120, 232);">SO2: </span> <span data-v-79602b79="" style="font-size: 12px;"><span data-v-79602b79="" style="font-size: 14px; color: rgb(1, 255, 1);">4.40</span></span></div><div data-v-79602b79="" class="label-item"><span data-v-79602b79="" style="font-family: CUSTOM; color: rgb(0, 120, 232);">NO2: </span> <span data-v-79602b79="" style="font-size: 12px;"><span data-v-79602b79="" style="font-size: 14px; color: rgb(1, 255, 1);">14.61</span></span></div><div data-v-79602b79="" class="label-item"><span data-v-79602b79="" style="font-family: CUSTOM; color: rgb(0, 120, 232);">CO: </span> <span data-v-79602b79="" style="font-size: 12px;"><span data-v-79602b79="" style="font-size: 14px; color: rgb(1, 255, 1);">0.59</span></span></div><div data-v-79602b79="" class="label-item"><span data-v-79602b79="" style="font-family: CUSTOM; color: rgb(0, 120, 232);">O3: </span> <span data-v-79602b79="" style="font-size: 12px;"><span data-v-79602b79="" style="font-size: 14px; color: rgb(1, 255, 1);">102.49</span></span></div></div>
          </div>
        </div>
        <div class="splite-cell">
          <div class="point"></div>
          <div class="point"></div>
        </div>
      </div>
      <div class="long-charts"></div>
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
            <render-notify></render-notify>
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
              30天内餐厨收运总量日统计
              <span data-v-79602b79="" class="words">Statistics</span></div>
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
import RenderMap from '@/views/dashboard/render-map'
import RenderDiningStatistics from '@/views/dashboard/render-diningStatistics'
import RenderDayStatistics from '@/views/dashboard/render-dayStatistics'
import RenderNotify from '@/views/dashboard/render-notify'

export default {
  name: 'DataTotal',
  components: {
    RenderMap,
    RenderDiningStatistics,
    RenderDayStatistics,
    RenderNotify
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
    height: 48%;
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
</style>
