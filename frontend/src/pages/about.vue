<template>

    
    <div class="w-full px-6 py-6 mx-auto">
      <!-- row 1 -->
      <div class="flex flex-wrap -mx-3">
        <!-- card1 -->
        <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/2">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full max-w-full px-3 flex-0">
              <div class="border-black/12.5 shadow-soft-xl dark:shadow-soft-dark-xl bg-gradient-to-tl from-purple-700 to-pink-500 dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border dark:bg-none">
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
                              v-model="inputValue"
                              placeholder="输入逗号分隔的UniprotID列表（例如：P01116, P05067）"
                              @change="handleInputChange"
                          />
                      <span class="mb-0 mr-1 text-right text-white text-sm font-semibold"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap mt-6 -mx-3">
            <div class="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
              <div class="border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div class="flex-auto p-6 text-center">
                  <h1 class="relative z-10 text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"><span id="status1" countto="21">21</span> <span class="-ml-2 text-lg">°C</span></h1>
                  <h6 class="mb-0 font-bold dark:text-white">Living Room</h6>
                  <p class="mb-0 text-sm leading-normal opacity-80">Temperature</p>
                </div>
              </div>
            </div>
            <div class="w-full max-w-full px-3 mt-6 md:flex-0 shrink-0 md:mt-0 md:w-6/12">
              <div class="border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div class="flex-auto p-6 text-center">
                  <h1 class="relative z-10 text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"><span id="status2" countto="44">44</span> <span class="-ml-1 text-lg">%</span></h1>
                  <h6 class="mb-0 font-bold dark:text-white">Outside</h6>
                  <p class="mb-0 text-sm leading-normal opacity-80">Humidity</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap mt-6 -mx-3">
            <div class="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
              <div class="border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div class="flex-auto p-6 text-center">
                  <h1 class="relative z-10 text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"><span id="status3" countto="87">87</span> <span class="-ml-2 text-lg">m³</span></h1>
                  <h6 class="mb-0 font-bold dark:text-white">Water</h6>
                  <p class="mb-0 text-sm leading-normal opacity-80">Consumption</p>
                </div>
              </div>
            </div>
            <div class="w-full max-w-full px-3 mt-6 md:flex-0 shrink-0 md:mt-0 md:w-6/12">
              <div class="border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                <div class="flex-auto p-6 text-center">
                  <h1 class="relative z-10 text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"><span id="status4" countto="417">417</span> <span class="-ml-2 text-lg">GB</span></h1>
                  <h6 class="mb-0 font-bold dark:text-white">Internet</h6>
                  <p class="mb-0 text-sm leading-normal opacity-80">All devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

     


    </div>
</template>
<script setup>
import { ref } from 'vue';

const inputValue = ref('');
const list = ref([]);

const handleInputChange = () => {
// 去除空格后按逗号分割，过滤空值
list.value = inputValue.value
  .split(',')
  .map(item => item.trim())
  .filter(item => item !== '');
};
</script>
