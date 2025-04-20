<template>

    
<div class="flex flex-wrap -mx-3 mt-6">
    <div class="w-full max-w-full px-3 flex-0">
        <div  class="border-black/12.5 shadow-soft-xl dark:shadow-soft-dark-xl bg-gradient-to-tl from-purple-700 to-pink-500 dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border dark:bg-none">
        <div class="flex-auto p-4">
            <div class="flex flex-wrap -mx-3">
            <div class="w-7/12 max-w-full px-3 my-auto flex-0">
                <div class="numbers">
                    <p class="mb-0 text-sm font-semibold leading-normal text-white capitalize opacity-70">Target Searchingb</p>
                    <h5 class="mb-0 font-bold text-white">靶点搜索</h5>
                </div>
            </div>
            <div class="w-5/12 max-w-full px-3 text-right flex-0 ">
                <el-input style="height: 80px; "
                        v-model="dateRange" 
                        placeholder="输入逗号分隔的UniprotID列表（例如：P01116, P05067）"
                        class="multiline-placeholder"
                    >
                    <template #suffix>
                        <el-button
                        :icon="Search"
                        size="large"
                        color="#344767" 
                        circle
                        plain 
                        @click="updateFilters"
                        style="margin-right: -8px; border: none; "/>
                    </template>
                </el-input>
                <span class="mb-0 mr-1 text-right text-white text-sm font-semibold"></span>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
     


</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTargetStore } from '@/stores/targetStore';
import { Search } from '@element-plus/icons-vue' // 引入搜索图标
const store = useTargetStore();
const { filters, processedData } = storeToRefs(store);
const inputValue = ref('');

// Safe initialization
const dateRange = ref(filters.value?.targetsInput || '');

const updateFilters = () => {
  store.filters.targetsInput = inputValue.value;
};

// Optional: watch for external changes to filters
watch(() => filters.value.targetsInput, (newVal) => {
  dateRange.value = newVal;
});
</script>
<style scoped>
/* 强制 placeholder 换行 */
.multiline-placeholder::placeholder {
  white-space: pre-wrap;  /* 保留空格和换行 */
  word-wrap: break-word;  /* 长单词换行 */
  line-height: 1.5;       /* 调整行高 */
  transform: translateY(10px);  /* 垂直居中（可选） */
}
</style>