
<template>
    <el-affix position="bottom-right" :offset="20">
      <el-button 
        circle 
        type="primary" 
        :icon="store.showSideNav ? Expand : Fold" 
        @click="store.toggleSidenavCollapse"
        class="float-btn"
      />
    </el-affix>
    <Navbar />
    <router-view></router-view>
</template>

<script setup >
import Navbar from "@/layout/nav.vue";
import { useMainStore } from '@/stores'
import { Fold, Expand } from '@element-plus/icons-vue'
const store = useMainStore()

</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}


.float-btn {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
}
</style>