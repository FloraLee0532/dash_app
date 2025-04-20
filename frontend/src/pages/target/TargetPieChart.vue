<template>

  <!-- Second Row - Charts -->
  <div class="flex flex-wrap">
    <div class="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
      <ChartCard title="Development Stage" description="Defined by IDG Group">
        <v-chart class="w-full" style="height:150px" :option="targetDevChartOption" autoresize />
      </ChartCard>
    </div>
    <div class="w-full max-w-full px-3 mt-6 md:flex-0 shrink-0 md:mt-0 md:w-6/12">
      <ChartCard title="Target Family" description="Defined by IDG Group">
        <v-chart class="w-full" style="height:150px" :option="targetFamilyChartOption" autoresize />
      </ChartCard>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTargetStore } from '@/stores/targetStore';
import StatsCard from '@/components/StatsCard.vue';
import ChartCard from '@/components/ChartCard.vue';

const store = useTargetStore();

// Data from store
const target_num = computed(() => store.rawData?.target_num ?? 0)
const task_num = computed(() => store.rawData?.task_num ?? 0)
const pieTargetDev = computed(() => store.rawData?.pieTargetDev?? []);
const pieTargetFamily = computed(() => store.rawData?.pieTargetFamily?? []);


const generateChartOption = (name, data) => ({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: 'center',
    top: '85%',
   
    data: data.value.slice(0, 3).map(item => item?.name || '未知')
    },
  series: [{
    name,
    type: 'pie',
    center: ['50%', '35%'], // 上移图表 (原center是['50%', '50%']),
    radius: ['60%', '75%'] ,
    itemStyle: {
      borderRadius:  7,
      borderColor: '#fff',
      borderWidth: 2
    },
    label: {
      show: false,
      //formatter: '{b}: {d}%' 
      formatter: '{b}: {d}%' 
    },
    emphasis: {
      label: {
        show: true,
      }
    },
    data: data.value
  }],
  color:  ['#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'],
  //color:['#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899','#f43f5e','#ff2d55','#ff4777']

   
});

const targetDevChartOption = computed(() => 
  generateChartOption('Device Distribution', pieTargetDev)
);

const targetFamilyChartOption = computed(() => 
  generateChartOption('Family Distribution', pieTargetFamily)
);
</script>
