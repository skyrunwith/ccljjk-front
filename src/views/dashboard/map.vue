<template >
  <div class="home-container">
    <h4 class="text-center">AMap疑难问题的解决方案及优秀实例解析</h4>
    <div class="flex-center">
      <div id="mymap" style="height:500px;width:500px"></div>
    </div>
  </div>
</template>

<script>
import MapLoader from '@/utils/load-map'
export default {
  name: 'Map',
  data: function() {
    return {
      map: null
    }
  },
  created() {
    MapLoader()
      .then(AMap => {
        this.map = new AMap.Map('mymap')
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>

</style>
