<template>
  <div id="notifyDiv" style="height:100% ;width: 100%">
    待处理消息内容
  </div>
</template>

<script>
  export default {
    name: 'RenderNotify',
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
        // $("#notifyDiv").append();
      }
    }
  }
</script>

<style scoped>

</style>

