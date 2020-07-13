### 垃圾回收系统

echarts:示例
https://echarts.apache.org/examples/zh/index.html#chart-type-pie

```js
餐厅收运情况占比:
option = {
     title: {
        text: '餐厅收运情况占比',
        subtext: '虚构数据',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'已收运'},
                {value:274, name:'未收运'},
                {value:310, name:'未营业'},
            ],
            itemStyle:{ 
            normal:{ 
                  label:{ 
                    show: true, 
                    formatter: '{b} : {c} ({d}%)' 
                  }, 
                  labelLine :{show:true} 
                } 
            } 
        }
    ]
};


```

```js
option = {
    title: {
        text: '餐厅收运情况占比',
        subtext: '虚构数据',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['已收运', '未收运', '未营业']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '已收运'},
                {value: 310, name: '未收运'},
                {value: 234, name: '未营业'}
            ],
            itemStyle:{ 
            normal:{ 
                  label:{ 
                    show: true, 
                    formatter: '{b} : {c} ({d}%)' 
                  }, 
                  labelLine :{show:true} 
                } 
            } 
        }
    ]
};
```