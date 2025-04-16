<!-- src/components/Sidebar.vue -->
<template>
  <div class="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-xl transition-transform duration-200 xl:left-0 xl:translate-x-0 ">
    <div class="h-19.5">
      
      <h5 class="ml-1 font-semibold transition-all duration-200 ease-nav-brand block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700">CoE App Store</h5>
    </div>

    <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

    <div class="items-center block w-auto max-h-screen overflow-auto grow basis-full">
      <ul class="flex flex-col pl-0 mb-0">
        <SidebarNavItem 
          v-for="item in navItems" 
          :key="item.path" 
          :item="item" 
        />
        
        <SidebarSectionHeader title="About COE" />
        
        <SidebarNavItem 
          v-for="item in aboutItems" 
          :key="item.path" 
          :item="item" 
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref,shallowRef} from 'vue'
import { useMainStore } from '@/stores'
import SidebarNavItem from '@/layout/Sidebar/SidebarNavItem.vue'
import SidebarSectionHeader from '@/layout/Sidebar/SidebarSectionHeader.vue'

// Import all your icon components
import ShopIcon from '@/components/icons/ShopIcon.vue'
import OfficeIcon from '@/components/icons/OfficeIcon.vue'
import CreditCardIcon from '@/components/icons/CreditCardIcon.vue'
import Box3dIcon from '@/components/icons/Box3dIcon.vue'
import CustomerIcon from '@/components/icons/CustomerIcon.vue'
import DocumentIcon from '@/components/icons/DocumentIcon.vue'

const store = useMainStore()

// Navigation items data
const navItems = ref([
  {
    title: 'Target Analysis',
    path: '/dashboard',
    iconComponent: shallowRef(ShopIcon),
    iconBgClass: 'bg-gradient-to-tl from-purple-700 to-pink-500',
    highlight: true
  },
  {
    title: 'Skill Matrix',
    path: '/skill-matrix',
    iconComponent: shallowRef(OfficeIcon)
  },
  {
    title: 'OLE efficiency',
    path: '/ole-efficiency',
    iconComponent: shallowRef(CreditCardIcon)
  },
  {
    title: 'TBD1',
    path: '/tbd1',
    iconComponent: shallowRef(Box3dIcon)
  }
])

const aboutItems = ref([
  {
    title: 'About Us',
    path: '/about-us',
    iconComponent: shallowRef(CustomerIcon)
  },
  {
    title: 'Sign In',
    path: '/sign-in',
    iconComponent: shallowRef(CustomerIcon)
  }
])
</script>