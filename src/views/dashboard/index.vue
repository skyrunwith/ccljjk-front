<template>
  <div class="dashboard-container">
    <panel-group/>
    <el-row>
      <baidu-map
        class="bm-view"
        :center="{lng: 102.213, lat: 31.911}"
        :zoom="17"
        ak="XIIBdQsH9l7GHx7UD671ZuIpAOayoaI7"
        :scroll-wheel-zoom="true"
        @ready="handler">
        <bm-marker
          v-for="(point, index) in points"
          :key="index"
          :position="point" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
          <!--<bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>-->
        </bm-marker>
      </baidu-map>
      <!--<baidu-map class="bm-view" :center="{lng: 116.404, lat: 39.915}" :zoom="15">-->
        <!--<bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">-->
          <!--<bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>-->
        <!--</bm-marker>-->
      <!--</baidu-map>-->
    </el-row>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import PanelGroup from './components/PanelGroup'
  import BaiduMap  from 'vue-baidu-map/components/map/Map'
  import BmView from 'vue-baidu-map/components/map/MapView.vue'
  import BmMarker from 'vue-baidu-map/components/overlays/Marker'
  import BmLabel from 'vue-baidu-map/components/overlays/Label'
  import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch.vue'

  export default {
    name: 'Dashboard',
    components: {
      PanelGroup,
      BaiduMap,
      BmMarker,
      BmLabel,
      BmView,
      BmLocalSearch
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    data(){
      return {
        points: [
          {lng: 102.213, lat: 31.911}
        ]
      }
    },
    mounted() {
    },
    methods: {
      handler ({BMap, map}) {
        this.initPoints({BMap, map})
      },
      initPoints({BMap, map}){
        // 随机向地图添加25个标注
        var bounds = map.getBounds();
        var sw = bounds.getSouthWest();
        var ne = bounds.getNorthEast();
        var lngSpan = Math.abs(sw.lng - ne.lng);
        var latSpan = Math.abs(ne.lat - sw.lat);
        for (var i = 0; i < 25; i ++) {
          var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
          this.addMarker({BMap, map},point);
        }
      },
      // 编写自定义函数,创建标注
      addMarker: function({BMap, map},point){
          var marker = new BMap.Marker(point);
          map.addOverlay(marker);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
  .bm-view {
    width: 100%;
    height: 700px;
  }
</style>
