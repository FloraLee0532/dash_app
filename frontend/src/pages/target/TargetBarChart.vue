<template>
  <div class="mt-6 border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
      <div class="flex-auto p-6 text-center">
        <h6 class="mb-0 font-bold dark:text-white">{{ title }}</h6>
        
          <v-chart 
            v-if="hasData"
            :option="barOption"
            autoresize
            style="height:180px"
          />
          <div v-else class="flex items-center justify-center h-full text-gray-500">
            暂无柱状图数据
          </div>
      </div>
      <TargetScoreTable />
      
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useTargetStore } from '@/stores/targetStore'
  //import ChartCard from '@/components/ChartCard.vue'
  
  import TargetScoreTable from '@/pages/target/TargetScoreTable.vue'
  const store = useTargetStore()
  
  // 获取数据（带默认值）
  const barData = computed(() => ({
    categories: store.rawData.barData?.categories || [],
    series: store.rawData.barData?.series || []
  }))
  
  // 检查数据有效性
  const hasData = computed(() => 
    barData.value.categories.length > 0 && 
    barData.value.series.length > 0
  )
  
  // 柱状图配置
  const barOption = computed(() => ({
    tooltip: {
      trigger: 'axis',
      
    },
    grid: {
      top: '15%',
      left: '10%',
      right: '10%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: barData.value.categories,
      axisLabel: { rotate: 30 }
    },
    yAxis: [
      {
        type: 'value',
        splitLine: { show: false }, // 关闭横向网格线
        axisLine: { show: true }, // 保留轴线
        axisTick: { show: true } // 保留刻度  
      },
    ],
    series: barData.value.series.map((series, idx) => ({
      name: series.name,
      type: 'bar',
      barWidth: '7px',
      data: series.data,
      itemStyle: {
        color: '#344767', // 使用与热力图一致的色系
        borderRadius: [4, 4, 4, 4] // 顶部圆角
      },
      label: {
        show: false,
      }
    }))
  }))
  </script>