<template>
    <div class="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
      <div class="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
        <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
          <h6>Orders overview</h6>
          <p class="leading-normal text-sm">
            <i class="fa fa-arrow-up text-lime-500"></i>
            <span class="font-semibold">24%</span> this month
          </p>
        </div>
        <div class="flex-auto p-4">
          <div class="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
            <div v-for="(order, index) in orders" :key="index" class="relative mb-4 after:clear-both after:table after:content-['']" :class="{ 'mt-0': index === 0 }">
              <span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                <i :class="`relative z-10 text-transparent ni leading-none ni-${order.icon} leading-pro bg-gradient-to-tl ${order.color} bg-clip-text fill-transparent`"></i>
              </span>
              <div class="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                <h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700">{{ order.title }}</h6>
                <p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">{{ order.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrdersOverview',
    setup() {
      const orders = [
        {
          icon: 'bell-55',
          color: 'from-green-600 to-lime-400',
          title: '$2400, Design changes',
          date: '22 DEC 7:20 PM'
        },
        {
          icon: 'html5',
          color: 'from-red-600 to-rose-400',
          title: 'New order #1832412',
          date: '21 DEC 11 PM'
        },
        {
          icon: 'cart',
          color: 'from-blue-600 to-cyan-400',
          title: 'Server payments for April',
          date: '21 DEC 9:34 PM'
        },
        {
          icon: 'credit-card',
          color: 'from-red-500 to-yellow-400',
          title: 'New card added for order #4395133',
          date: '20 DEC 2:20 AM'
        },
        {
          icon: 'key-25',
          color: 'from-purple-700 to-pink-500',
          title: 'Unlock packages for development',
          date: '18 DEC 4:54 AM'
        },
        {
          icon: 'money-coins',
          color: 'from-gray-900 to-slate-800',
          title: 'New order #9583120',
          date: '17 DEC'
        }
      ]
      
      return {
        orders
      }
    }
  }
  </script>
  