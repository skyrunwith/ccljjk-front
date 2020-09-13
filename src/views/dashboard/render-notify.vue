<template>
  <div id="notifyDiv">
    <div class="warn-div">
      <img src="../../images/notify_warn.png"/>
    </div>
    <div class="error-div">
      <img src="../../images/notify_error.png"/><br>
      <span class="warn-number-span"><span class="warn-title" v-html="warnNumber"></span>项</span>
      <span class="warn-text-span">收运异常</span>
      <span class="error-number-span"><span class="error-title" v-html="notifyNumber"></span>项</span>
      <span class="error-text-span">纠错请求</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RenderNotify',
    data: function () {
      return {
        warnNumber: 1,
        notifyNumber: 10
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        // 请求接口，拿到数据并渲染
        // $("#notifyDiv").append();
      }
    }
  }
</script>

<style scoped>
  #notifyDiv {
    height: 100%;
    width: 100%;
    text-align: center;
    position: relative;
  }

  .warn-div {
    float: left;
  }

  .warn-number-span {
    position: absolute;
    bottom: 88px;
    left: 55px;
  }

  .warn-text-span {
    position: absolute;
    bottom: 13px;
    left: 39px;
  }

  .warn-title {
    color: red;
    font-size: 3em;
  }

  .error-div {
    float: left;
    margin-left: 2em;
  }

  .error-number-span {
    position: absolute;
    bottom: 88px;
    left: 218px;
  }

  .error-text-span {
    position: absolute;
    bottom: 13px;
    left: 214px;
  }

  .error-title {
    color: #ffcb34;
    font-size: 3em;
  }


</style>

