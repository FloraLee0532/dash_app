<template>
    <!-- First Row - Stats Cards -->
    <div class="flex flex-wrap ">
      <div class="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
        <StatsCard 
          :value="target_num" 
          title="Targets" 
          description="In CoE DataBase"
        />
      </div>
      <div class="w-full max-w-full px-3 mt-6 md:flex-0 shrink-0 md:mt-0 md:w-6/12">
        <StatsCard 
          :value="task_num" 
          title="Tasks" 
          description="In CoE DataBase"
        />
      </div>
    </div>
  
    
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useTargetStore } from '@/stores/targetStore';
  import StatsCard from '@/components/StatsCard.vue';
  
  const store = useTargetStore();
  
  // Data from store
  const target_num = computed(() => store.rawData?.target_num ?? 0)
  const task_num = computed(() => store.rawData?.task_num ?? 0)
 
  
  
  </script>
  