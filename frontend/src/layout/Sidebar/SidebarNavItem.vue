<!-- src/components/SidebarNavItem.vue -->
<template>
  <li class="mt-0.5 w-full">
    <router-link 
      :to="item.path" 
      class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
      :class="{ 
        'bg-gray-100': isActive,
        'shadow-soft-xl font-semibold': item.highlight
      }"
    >
      <div 
        class="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5"
        :class="item.iconBgClass"
      >
        <component :is="item.iconComponent" />
      </div>
      <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
        {{ item.title }}
      </span>
    </router-link>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const route = useRoute()
const isActive = computed(() => route.path === props.item.path)
</script>