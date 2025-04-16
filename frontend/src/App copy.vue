

​<template>
  <body class="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">
    <SideNav  v-if="store.showSideNav"/>
    
    <main class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
      <Navbar />
      <router-view></router-view>
    </main>
    
  </body>
    
</template>

<script setup >
import Navbar from "@/layout/nav.vue";
import SideNav from "@/layout/sidenav.vue";
import { useMainStore } from '@/stores'
const store = useMainStore()
/**

export default {
  setup() {
    
    <el-affix position="bottom-right" :offset="20">
  <el-button 
    circle 
    type="primary" 
    :icon="store.showSideNav ? Expand : Fold" 
    @click="store.toggleSidenavCollapse"
    class="float-btn"
  />
</el-affix> 
    const avg = ref(0);
    const isLoading = ref(false);
    const error = ref(null);

    const fetchData = async () => {
      try {
        isLoading.value = true;
        error.value = null;
        
        const response = await api.testtest();
        avg.value = response.data;
        console.log('Data fetched:', response.data);
        
        // 如果需要更新图表配置，可以在这里处理
        // updateChartOptions(response.data);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        error.value = err.message || 'Failed to fetch data';
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      // if (route.params.id) {
        fetchData();
      // }
    });

    return {
      avg,
      isLoading,
      /error
    };
  }
};*/
</script>


​