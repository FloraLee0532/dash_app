<template>
    <div class="mt-6 border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
      <div class="flex-auto p-6 text-center">
        <slot></slot>
        <h6 class="mb-0 font-bold dark:text-white">{{ title }}</h6>
        <p class="mb-0 text-sm leading-normal opacity-80">{{ description }}</p>
      </div>

      
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String
  });
  </script>