<!-- src/components/SidebarSectionHeader.vue -->
<template>
  <li class="w-full mt-4">
    <h6 class="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60">
      {{ title }}
    </h6>
  </li>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>