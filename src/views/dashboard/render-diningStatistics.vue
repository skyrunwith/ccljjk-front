<template>
  <div id="diningStatistics" style="height:100% ;width: 100%">
    <div data-v-e956f608="" data-v-fec8c6d4="" class="left-box">
      <div data-v-e956f608="" class="right-header right-row el-row" style="margin-left: -12px; margin-right: -12px;">
        <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">餐厅名称</div>
        <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">今日收运量</div>
        <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">昨日收运量</div>
        <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">收运状态</div>
      </div>
      <div data-v-e956f608="" id="warnList" class="main">
        <div data-v-e956f608="" id="warnList1">
          <div data-v-e956f608="" class="right-values right-row el-row" style="margin-left: -12px; margin-right: -12px;">
            <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">七椒渔府</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">120.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">120.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">已收运</div>
          </div>
          <div data-v-e956f608="" class="right-values right-row el-row" style="margin-left: -12px; margin-right: -12px;">
            <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">阿依拉拉藏餐厅</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">80.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">100.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">已收运</div>
          </div>
          <div data-v-e956f608="" class="right-values right-row el-row" style="margin-left: -12px; margin-right: -12px;">
            <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">有饭有菜</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">66.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">120.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">已收运</div>
          </div>
          <div data-v-e956f608="" class="right-values right-row el-row" style="margin-left: -12px; margin-right: -12px;">
            <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">马尔康美味藏餐厅</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">920.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">1000.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">已收运</div>
          </div>
          <div data-v-e956f608="" class="right-values right-row el-row" style="margin-left: -12px; margin-right: -12px;">
            <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">味美轩</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">--</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">100.36</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">未收运</div>
          </div>
          <div data-v-e956f608="" class="right-values right-row el-row" style="margin-left: -12px; margin-right: -12px;">
            <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">1点点</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">--</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">--</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">未营业</div>
          </div>
          <div data-v-e956f608="" class="right-values right-row el-row" style="margin-left: -12px; margin-right: -12px;">
            <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">人民食堂</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">63.30</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">110.10</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">已收运</div>
          </div>
          <div data-v-e956f608="" class="right-values right-row el-row" style="margin-left: -12px; margin-right: -12px;">
            <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">喜缘藏餐厅</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">100.40</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">89.30</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">已收运</div>
          </div>
          <div data-v-e956f608="" class="right-values right-row el-row" style="margin-left: -12px; margin-right: -12px;">
            <div data-v-e956f608="" class="el-col el-col-9" style="padding-left: 12px; padding-right: 12px;">王老二川菜馆</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">20.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">30.00</div>
            <div data-v-e956f608="" class="el-col el-col-5" style="padding-left: 12px; padding-right: 12px;">已收运</div>
          </div>


        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'RenderDiningStatistics',
    data: function () {
      return {

      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        // 请求接口，拿到数据并渲染
        // $("#diningStatistics").append();
      }
    }
  }
</script>

<style scoped>
  .left-box[data-v-e956f608] {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-family: CUSTOM;
  }

  .left-box .right-header[data-v-e956f608] {
    border-bottom: .1rem solid #405fc9;
    line-height: 2.2rem;
  }

  .left-box .right-row[data-v-e956f608] {
    width: 100%;
    margin: 0 !important;
    height: 3rem;
    line-height: 3rem;
    font-size: 0.5rem;
    color: #fff;
    text-align: center;
  }

  .el-row {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>

