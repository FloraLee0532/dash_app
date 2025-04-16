// App.vue
<template>
  <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">
    <!-- Sidebar Component -->
    <Sidebar :isOpen="sidebarOpen" @close="sidebarOpen = false" />
    
    <!-- Main Content -->
    <main class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
      <!-- Navbar Component -->
      <Navbar @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      
      <!-- Dashboard Content -->
      <div class="w-full px-6 py-6 mx-auto">
        <!-- Statistics Cards Row -->
        <StatisticsCards />
        
        <!-- Info Cards Row -->
        <InfoCards />
        
        <!-- Charts Row -->
        <ChartsRow />
        
        <!-- Projects and Orders Row -->
        <div class="flex flex-wrap my-6 -mx-3">
          <ProjectsTable />
          <OrdersOverview />
        </div>
      </div>
    </main>
    
    <!-- Configuration Panel -->
    <ConfigPanel :isOpen="configOpen" @close="configOpen = false" @toggle="configOpen = !configOpen" />
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import StatisticsCards from './components/StatisticsCards.vue'
import InfoCards from './components/InfoCards.vue'
import ChartsRow from './components/ChartsRow.vue'
import ProjectsTable from './components/ProjectsTable.vue'
import OrdersOverview from './components/OrdersOverview.vue'
import ConfigPanel from './components/ConfigPanel.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar,
    StatisticsCards,
    InfoCards,
    ChartsRow,
    ProjectsTable,
    OrdersOverview,
    ConfigPanel
  },
  setup() {
    const sidebarOpen = ref(true)
    const configOpen = ref(false)
    
    onMounted(() => {
      // Initialize any scripts that were in the original dashboard
      initCharts()
    })
    
    const initCharts = () => {
      // This would contain the chart initialization code from the original
      // For chartjs implementation
      console.log('Charts initialized')
    }
    
    return {
      sidebarOpen,
      configOpen
    }
  }
}
</script>