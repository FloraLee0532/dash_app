import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { fetchData } from '@/api/target.js'

export const useTargetStore = defineStore('targetStore', () => {
  // 状态定义
  const rawData = ref({
    target_num: 2532,
    task_num: 184,
    barData: {
      categories: ['EGFR', 'HER2', 'KRAS', 'TP53'], // X轴分类
      series: [
        {
          name: '优先级评分',
          data: [45, 28, 36, 52]  // 对应每个分类的值
        },
      ]
    },
    pieTargetFamily: [
      { value: 1048, name: '路由器' },
      { value: 735, name: '摄像头' },
      { value: 580, name: '智能家居' },
      { value: 484, name: '工业设备' },
      { value: 300, name: '其他' }
    ],
    pieTargetDev: [
      { value: 620, name: 'Linux' },
      { value: 432, name: 'Windows' },
      { value: 220, name: '嵌入式系统' },
      { value: 178, name: 'Android' },
      { value: 95, name: 'iOS' }
    ],
    heatmapData: {
      targets: ['EGFR', 'HER2', 'KRAS'], // 横坐标靶点
      methods: ['WB', 'PCR', 'ELISA'],   // 纵坐标方法
      data: [                            // 热力数据
        [0, 0, 12], // EGFR+WB → 12次
        [0, 1, 25], // EGFR+PCR → 25次
        [1, 2, 8]   // HER2+ELISA → 8次
      ]
    }
  })
  const filters = ref({
    targetsInput: 'ras',
    
  })
  
  // 计算属性
  const processedData = computed(() => {
    if (!rawData.value) return null
    return transformData(rawData.value, filters.value)
  })
  
  // 数据获取
  const loadData = async () => {
    console.log('process')
    /***
    try {
      const response = await fetchData(filters.value)
      rawData.value = response.data
    } catch (error) {
      console.error('数据加载失败:', error)
    }
     */
  }
  
  // 自动数据更新
  const debouncedReload = debounce(loadData, 300)
  
  // 监听过滤器变化
  watch(filters, debouncedReload, { deep: true })

  return { 
    filters,
    rawData,
    processedData,
    loadData
  }
})

// 数据转换示例
function transformData(raw, filters) {
  return {
    metrics: calculateMetrics(raw),
    chartData: filterChartData(raw, filters)
  }
}

// 防抖函数
function debounce(fn, delay) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}
