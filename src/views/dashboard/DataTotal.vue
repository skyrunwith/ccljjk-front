<template >
  <div class="el-container home-charts">
    <div class="left-charts-container charts-box">

    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTotal'
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
</style>
