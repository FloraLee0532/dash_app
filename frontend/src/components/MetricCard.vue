
<template>
  <div class="w-full">
    <div class="flex justify-between items-start mb-2">
      <!-- 左侧：渐变色方块 + 标题（左对齐，垂直居中） -->
      <div class="flex items-center">
        <div 
          class="flex-shrink-0 w-5 h-5 mr-2 rounded shadow-soft-2xl bg-gradient-to-tl"
          :class="gradientStyle"
        ></div>
        
        <!-- 修改后的标题 -->
        <div class="h-[3rem] flex flex-col justify-center">  
          <p class="text-xs font-semibold line-clamp-2 dark:text-gray-200 text-left whitespace-pre-line">  <!-- 左对齐 -->
            {{ title }}
          </p>
        </div>
        
      </div>
      <div class="h-[3rem] flex flex-col justify-center">  
        <h4 class="font-bold text-right dark:text-white text-xs">{{ value }}</h4>
        </div>
      
      <!-- 右侧数值 -->
      
    </div>
    <hr class="my-2 border-t border-gray-600 dark:border-gray-600">
    <!-- 进度条 
    <div class="w-full h-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden" v-show=false>
      <div 
        class="h-full rounded-lg transition-all duration-600"
        :style="{ width: `${progress}%` }"
        :class="progressBarColor"
      ></div>
    </div>-->
  </div>
</template>


<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Users"
  },
  value: {
    type: [String, Number],
    default: "36K"
  },
  gradientStyle: {
    type: String,
    default: "from-purple-700 to-pink-500",
  },
  progress: {
    type: Number,
    default: 60,
    validator: value => value >= 0 && value <= 100
  }
});

</script>

<style scoped>
/* 可以添加自定义样式 */
</style>