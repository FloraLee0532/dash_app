<template>

    
    <div class="w-full px-6 py-6 mx-auto">
      <!-- row 1 -->
      <div class="flex flex-wrap -mx-3">
        <!-- card1 -->
        <div class="w-full max-w-full px-5 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/2">
          <DataFilter />
          <TargetStatistic />
          <TargetHeatMap />
        </div>
        <div class="w-full max-w-full px-5 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/2">
          <TargetPieChart />
          <TargetBarChart />
          <TargetScoreTable />
        </div>
      </div>
     
    </div>
</template>
<script setup>
import DataFilter from '@/pages/target/DataFilter.vue'
import TargetPieChart from '@/pages/target/TargetPieChart.vue'
import TargetHeatMap from '@/pages/target/TargetHeatMap.vue'
import TargetBarChart from '@/pages/target/TargetBarChart.vue'
import TargetStatistic from '@/pages/target/TargetStatistic.vue'
import TargetScoreTable from '@/pages/target/TargetScoreTable.vue'
</script>
