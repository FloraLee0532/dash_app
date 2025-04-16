<template>
    <div class="flex flex-wrap mt-6 -mx-3">
      <!-- Bar Chart Card -->
      <div class="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-5/12 lg:flex-none">
        <div class="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div class="flex-auto p-4">
            <div class="py-4 pr-1 mb-4 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-xl">
              <div>
                <canvas ref="chartBars" height="170"></canvas>
              </div>
            </div>
            <h6 class="mt-6 mb-0 ml-2">Active Users</h6>
            <p class="ml-2 leading-normal text-sm">(<span class="font-bold">+23%</span>) than last week</p>
            
            <!-- User metrics -->
            <div class="w-full px-6 mx-auto max-w-screen-2xl rounded-xl">
              <div class="flex flex-wrap mt-0 -mx-3">
                <!-- Users Metric -->
                <div class="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                  <div class="flex mb-2">
                    <div class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-purple-700 to-pink-500 text-neutral-900">
                      <i class="ni ni-document"></i>
                    </div>
                    <p class="mt-1 mb-0 font-semibold leading-tight text-xs">Users</p>
                  </div>
                  <h4 class="font-bold">36K</h4>
                  <div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div class="duration-600 ease-soft -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                
                <!-- Clicks Metric -->
                <div class="flex-none w-1/4 max-w-full py-4 pl-0 pr-3 mt-0">
                  <div class="flex mb-2">
                    <div class="flex items-center justify-center w-5 h-5 mr-2 text-center bg-center rounded fill-current shadow-soft-2xl bg-gradient-to-tl from-blue-600 to-cyan-400 text-neutral-900">
                      <i class="ni ni-spaceship"></i>
                    </div>
                    <p class="mt-1 mb-0 font-semibold leading-tight text-xs">Clicks</p>
                  </div>
                  <h4 class="font-bold">2m</h4>
                  <div class="text-xs h-0.75 flex w-3/4 overflow-visible rounded-lg bg-gray-200">
                    <div class="duration-600 ease-soft -mt-0.38 w-9/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded-lg bg-slate-700 text-center text-white transition-all" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                
                <!-- Sales & Items metrics would go here -->
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Line Chart Card -->
      <div class="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
        <div class="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
            <h6>Sales overview</h6>
            <p class="leading-normal text-sm">
              <i class="fa fa-arrow-up text-lime-500"></i>
              <span class="font-semibold">4% more</span> in 2021
            </p>
          </div>
          <div class="flex-auto p-4">
            <div>
              <canvas ref="chartLine" height="300"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import Chart from 'chart.js/auto'
  
  export default {
    name: 'ChartsRow',
    setup() {
      const chartBars = ref(null)
      const chartLine = ref(null)
      
      onMounted(() => {
        initBarChart()
        initLineChart()
      })
      
      const initBarChart = () => {
        const ctx = chartBars.value.getContext('2d')
        
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Active Users',
              data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
              backgroundColor: '#fff',
              borderWidth: 0,
              borderRadius: 4,
              maxBarThickness: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                grid: {
                  drawBorder: false,
                  display: true,
                  drawOnChartArea: true,
                  drawTicks: false,
                  borderDash: [5, 5],
                  color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                  display: true,
                  padding: 10,
                  color: '#f8f9fa',
                  font: {
                    size: 14,
                    weight: 300,
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  }
                }
              },
              x: {
                grid: {
                  drawBorder: false,
                  display: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                  borderDash: [5, 5]
                },
                ticks: {
                  display: true,
                  color: '#f8f9fa',
                  padding: 10,
                  font: {
                    size: 14,
                    weight: 300,
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  }
                }
              }
            }
          }
        })
      }
      
      const initLineChart = () => {
        const ctx = chartLine.value.getContext('2d')
        
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Mobile apps',
              data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
              tension: 0.4,
              borderWidth: 4,
              borderColor: '#3A416F',
              backgroundColor: 'transparent',
              pointBorderColor: '#3A416F',
              pointBackgroundColor: '#3A416F',
              pointBorderWidth: 2,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: '#3A416F',
              pointHoverBorderColor: '#3A416F',
              pointRadius: 4,
              pointHitRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                grid: {
                  drawBorder: false,
                  display: true,
                  drawOnChartArea: true,
                  drawTicks: false,
                  borderDash: [5, 5],
                  color: '#c1c4ce5c'
                },
                ticks: {
                  display: true,
                  padding: 10,
                  color: '#b2b9bf',
                  font: {
                    size: 11,
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  }
                }
              },
              x: {
                grid: {
                  drawBorder: false,
                  display: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                  borderDash: [5, 5]
                },
                ticks: {
                  display: true,
                  color: '#b2b9bf',
                  padding: 20,
                  font: {
                    size: 11,
                    family: "Roboto",
                    style: 'normal',
                    lineHeight: 2
                  }
                }
              }
            }
          }
        })
      }
      
      return {
        chartBars,
        chartLine
      }
    }
  }