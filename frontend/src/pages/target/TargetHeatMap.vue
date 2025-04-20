<template>
    <div class="w-full mb-2 mt-6 px-3 " >
      <ChartCard title="靶点vs检测方法统计">
        <v-chart 
          v-if="hasData"
          :option="heatmapOption"
          autoresize
          style="height:350px"
        />
        <div v-else class="flex items-center justify-center h-full text-gray-500">
          暂无数据（需至少1个靶点和1个方法）
        </div>
      </ChartCard>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useTargetStore } from '@/stores/targetStore'
  import ChartCard from '@/components/ChartCard.vue'
  
  const store = useTargetStore()
  
  // 安全获取数据（自动初始化空结构）
  const heatmapData = computed(() => ({
    targets: store.rawData.heatmapData?.targets || [],
    methods: store.rawData.heatmapData?.methods || [],
    rawValues: store.rawData.heatmapData?.data || [] // 原始数据
  }))
  
  const filledData = computed(() => {
  const { targets, methods, rawValues } = heatmapData.value
  const result = targets.flatMap((_, targetIdx) => 
    methods.map((_, methodIdx) => {
      const existing = rawValues.find(d => d[0] === targetIdx && d[1] === methodIdx)
      return existing || [targetIdx, methodIdx, 0] // 缺失值自动补0
    })
  )
  console.log('filledData:', JSON.parse(JSON.stringify(result))) // 打印填充后的数据
  return result
})
  // 检查有效数据
  const hasData = computed(() => 
    heatmapData.value.targets.length > 0 && 
    heatmapData.value.methods.length > 0
  )
  
  // 热力图配置
  const heatmapOption = computed(() => ({
    tooltip: {
      position: 'top',
      formatter: params => {
        const value = params.data[2]
        return `
          <b>${heatmapData.value.methods[params.data[1]]}</b><br>
          靶点: ${heatmapData.value.targets[params.data[0]]}<br>
          次数: ${heatmapData.value.targets[params.data[2]]}
        `
      }
    },
    grid: {
      show: true,
      borderColor: '#ddd',
      top: 40,
      left: 80,
      right: 40,
      bottom: 60,
    },
    xAxis: {
      type: 'category',
      data: heatmapData.value.targets,
      axisLine: { show: true, lineStyle: { color: '#344767' } },
      axisLabel: { rotate: 45 }
    },
    yAxis: {
      type: 'category',
      data: heatmapData.value.methods,
      axisLine: { show: true, lineStyle: { color: '#344767' } }
    },
    visualMap: {
      min: 0,
      max: Math.max(...filledData.value.map(d => d[2])), // 自动计算最大值
      calculable: true,
      inRange: {
        color: ['#344767','#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'] // 正常值色系
      },
      outOfRange: {
        color: ['#344767'] // 0值专用颜色
      }
    },
    series: [{
      type: 'heatmap',
      data: filledData.value,
      itemStyle: {
        borderWidth: 0
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.3)'
        }
      }
    }]
  }))
  </script>