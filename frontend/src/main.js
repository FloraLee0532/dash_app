import { createApp } from 'vue'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia';

const app = createApp(App)
app.use(router)
const pinia = createPinia();
app.use(pinia);
app.use(ElementPlus)
 
import './style.css'
app.mount('#app')
