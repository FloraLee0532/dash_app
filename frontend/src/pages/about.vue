<template>
    <button @click="store.toggleSidenavCollapse">{{ store.showSideNav }}</button>
    <el-menu
        default-active="3"
        class="el-menu-vertical-demo shadow-soft-2xl bg-gray-50 bg-opacity-25 max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block rounded-2xl border-0 p-3 "
        :collapse="store.showSideNav"
    >
        <el-menu-item index="1" class="h-19.5 ml-1 flex items-center justify-center font-semibold  ease-nav-brand">
            <template #title>
                <span class="text-center">CoE App Store</span>
            </template>
        </el-menu-item>
        <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
        <el-menu-item index="2" class="py-2">
            <el-icon><document /></el-icon>
            <template #title>About Us</template>
        </el-menu-item>
        <el-sub-menu index="3" >
            <template #title>
                <el-icon ><icon-menu /></el-icon>
            <span>App Store</span>
            </template>
            <el-menu-item-group >
                <template #title><span class="pt-5 font-bold leading-tight uppercase text-xs opacity-90">Target Section</span></template>
                <el-menu-item index="/home" class="text-xs ml-2 ">Target Score</el-menu-item>
                <el-menu-item index="3-2" class="text-xs ml-2 ">Search Tasks </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template #title><span class="pt-5 font-bold leading-tight uppercase text-xs opacity-90">Cell Section</span></template>
                <el-menu-item index="3-3" class="text-xs ml-2 ">Searh Tasks</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
      
      
        <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Others</template>
        </el-menu-item>
    </el-menu>

  </template>
  
  <script setup>
    import { ref } from 'vue'
    import {
        Document,
        Menu as IconMenu,
        Setting,
        CaretRight,
        CaretLeft
    } from '@element-plus/icons-vue'
    const isCollapse = ref(true)
    import { useMainStore } from '@/stores'
    const store = useMainStore()
    const handleOpen = () => {
        console.log('xxxxx')
        console.log(store.showSideNav)
        store.toggleSidenavCollapse()
        
    }
  
  </script>
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>