import AMapLoader from '@amap/amap-jsapi-loader'

export default function MapLoader() {
  return AMapLoader.load({
    key: '158e6204bb5fb0053a4602cab7b0da10',
    version: '2.0',
    plugins: [
      'Map3D',
      'AMap.DistrictSearch',
      'AMap.DistrictLayer',
      'AMap.CitySearch'
    ],
    AMapUI: {
      // 是否加载 AMapUI，缺省不加载
      version: '1.1', // AMapUI 缺省 1.1
      plugins: ['geo/DistrictExplorer'] // 需要加载的 AMapUI ui插件
    }
    // Loca: {
    //   // 是否加载 Loca， 缺省不加载
    //   version: '1.3.2' // Loca 版本，缺省 1.3.2
    // }
  })
}
