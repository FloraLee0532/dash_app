<template>
    <div class="flex flex-wrap -mx-3">
      <div v-for="(card, index) in cards" :key="index" class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="flex-auto p-4">
            <div class="flex flex-row -mx-3">
              <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p class="mb-0 font-sans font-semibold leading-normal text-sm">{{ card.title }}</p>
                  <h5 class="mb-0 font-bold">
                    {{ card.value }}
                    <span :class="`leading-normal text-sm font-weight-bolder ${card.changeColor}`">{{ card.change }}</span>
                  </h5>
                </div>
              </div>
              <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                  <i :class="`ni leading-none ni-${card.icon} text-lg relative top-3.5 text-white`"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatisticsCards',
    setup() {
      const cards = [
        {
          title: "Today's Money",
          value: "$53,000",
          change: "+55%",
          changeColor: "text-lime-500",
          icon: "money-coins"
        },
        {
          title: "Today's Users",
          value: "2,300",
          change: "+3%",
          changeColor: "text-lime-500",
          icon: "world"
        },
        {
          title: "New Clients",
          value: "+3,462",
          change: "-2%",
          changeColor: "text-red-600",
          icon: "paper-diploma"
        },
        {
          title: "Sales",
          value: "$103,430",
          change: "+5%",
          changeColor: "text-lime-500",
          icon: "cart"
        }
      ]
      
      return {
        cards
      }
    }
  }
  </script>
  