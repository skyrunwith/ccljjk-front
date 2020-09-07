<template>
  <div id="mymap" style="height:100% ;width: 100%" />
</template>

<script>
import MapLoader from '@/utils/load-map'
export default {
  name: 'RenderMap',
  data: function() {
    return {
      map: null,
      AMap: null
    }
  },
  created() {
    const self = this
    MapLoader()
      .then(AMap => {
        self.AMap = AMap
        self.map = new AMap.Map('mymap', {
          center: [116.397428, 39.90923], // 地图中心点
          zoom: 11 // 地图显示的缩放级别
        })
        var styleName = 'amap://styles/darkblue'
        self.map.setMapStyle(styleName)
        this.init()
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    init() {
      const self = this
      let district = null
      let polygons = []
      // 加载行政区划插件
      if (!district) {
        // 实例化DistrictSearch
        const opts = {
          subdistrict: 0, // 获取边界不需要返回下级行政区
          extensions: 'all', // 返回行政区边界坐标组等具体信息
          level: 'district' // 查询行政级别为 市
        }
        district = new this.AMap.DistrictSearch(opts)
      }
      // 行政区查询
      district.setLevel('district')
      district.search('马尔康', (status, result) => {
        self.map.remove(polygons)// 清除上次结果
        polygons = []
        const bounds = result.districtList[0].boundaries
        if (bounds) {
          for (var i = 0, l = bounds.length; i < l; i++) {
            // 生成行政区划polygon
            const polygon = new this.AMap.Polygon({
              strokeWeight: 1,
              path: bounds[i],
              fillOpacity: 0.4,
              fillColor: '#80d8ff',
              strokeColor: '#0091ea'
            })
            polygons.push(polygon)
          }
        }
        self.map.add(polygons)
        self.map.setFitView(polygons)// 视口自适应
      })
    }
  }
}
</script>

<style scoped>

</style>
