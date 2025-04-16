import { createApp } from 'vue'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia';
import * as echarts from 'echarts';
import ECharts from 'vue-echarts';
const app = createApp(App)
app.use(router)
const pinia = createPinia();
app.use(pinia);
app.use(ElementPlus)
 
app.component('v-chart',ECharts)
app.config.globalProperties.$echarts = echarts
import './style.css'
app.mount('#app')
