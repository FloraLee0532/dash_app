
  <!-- Parent Component (MetricCardGrid.vue) -->
<template>
    <div class="p-6 ">
      <div v-if="loading" class="text-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
        <p class="mt-2 text-gray-600">Loading metrics...</p>
      </div>
  
      <div v-else-if="error" class="text-center py-8 text-red-500">
        Error loading metrics: {{ error }}
      </div>
  
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <MetricCard
          v-for="(metric, index) in metrics"
          :key="index"
          :title="metric.title"
          :value="metric.value"
          :gradientStyle="metric.gradient"
          :progress="metric.progress"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import MetricCard from '@/components/MetricCard.vue'
  
  // Initial metrics data
  const initialMetrics = [
    {
      title: "Development\nStage",
      value: "Tdark",
      progress: 72,
      gradient: "from-purple-700 to-pink-500 "
    },
    {
      title: "CoE检测次数",
      value: "10",
      progress: 45,
      gradient: "from-blue-500 to-violet-500"
    },
    {
      title: "对应Pathway\n数量",
      value: "45",
      progress: 23,
      gradient: "from-slate-600 to-slate-300"
    },
    {
      title: "对应Top50 Revenue\nPathway数量",
      value: "72",
      progress: 68,
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      title: "对应Top50 Frequency\nPathway数量",
      value: "44",
      progress: 82,
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      title: "客户关注度",
      value: "45",
      progress: 12,
      gradient: "from-red-500 to-yellow-400"
    }
  ];
  
  const metrics = ref([...initialMetrics]);
  const loading = ref(true);
  const error = ref(null);
  
  const fetchMetrics = async () => {
    try {
        console.log('xxx')
        console.log(metrics)
     /*** 
      loading.value = true;
      const response = await fetch('/api/target_info/');
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      const apiData = await response.json();
      
      // Merge API data with initial metrics
      metrics.value = initialMetrics.map((metric, index) => ({
        ...metric,
        ...(apiData[index] || {}), // Override with API data if available
        gradient: metric.gradient // Keep original gradient
      }));
      */
    } catch (err) {
      error.value = err.message;
      console.error('Error fetching metrics:', err);
      // Keep using initial metrics data if API fails
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    // Show initial data immediately, then try to fetch updates
    loading.value = false;
    fetchMetrics();
  });
  </script>