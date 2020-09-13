<template>
  <div id="mymap" style="height:100% ;width: 100%" />
</template>

<script>
import MapLoader from '@/utils/load-map'
import lajizhanIcon from '@/images/laji.png'
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
          center: [102.206339, 31.906765], // 地图中心点
          zoom: 15 // 地图显示的缩放级别
        })
        var styleName = 'amap://styles/darkblue'
        self.map.setMapStyle(styleName)
        this.init()
        this.initMark()
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
              fillColor: '#black',
              strokeColor: '#0091ea'
            })
            polygons.push(polygon)
          }
        }
        self.map.add(polygons)
        // self.map.setFitView(polygons)// 视口自适应
      })
    },
    initMark() {
      const lnglats = [
        [102.208501, 31.905558],
        [102.22585, 31.879612],
        [102.236149, 31.865034],
        [102.254689, 31.905263],
        [102.244732, 31.874364],
        [102.254689, 31.908178],
        [102.130063, 31.914881],
        [102.183278, 31.955671],
        [102.175572, 31.875797],
        [102.189648, 31.841971],
        [102.147934, 31.889061],
        [102.159092, 31.914128]
      ]
      let ne = this.map.getBounds().northEast
      let sw = this.map.getBounds().southWest
      var lngSpan = Math.abs(sw.lng - ne.lng);
      var latSpan = Math.abs(ne.lat - sw.lat);
      for (var i = 0; i < 25; i ++) {
        // var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
          const marker = new this.AMap.Marker({
            // eslint-disable-next-line new-cap
            position: new this.AMap.LngLat(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7)),
            offest: new this.AMap.Pixel(-10, -10),
            icon: lajizhanIcon,
            title: '马尔康'
          })
        this.map.add(marker)
      }
      // for (let i = 0; i < lnglats.length; i++) {
      //   const marker = new this.AMap.Marker({
      //     // eslint-disable-next-line new-cap
      //     position: new this.AMap.LngLat(lnglats[i][0], lnglats[i][1]),
      //     offest: new this.AMap.Pixel(-10, -10),
      //     icon: lajizhanIcon,
      //     title: '马尔康'
      //   })
      // }
    }
  }
}
</script>

<style scoped>

</style>
