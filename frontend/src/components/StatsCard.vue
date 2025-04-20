<template>
    <div class="border-black/12.5 mt-6 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
      <div class="flex-auto p-6 text-center">
        <h1 class="relative z-10 text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text">
          {{ value }}
        </h1>
        <h6 class="mb-0 font-bold dark:text-white">{{ title }}</h6>
        <p class="mb-0 text-sm leading-normal opacity-80">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    value: [String, Number],
    title: String,
    description: String
  });
  </script>