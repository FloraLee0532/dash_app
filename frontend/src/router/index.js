import { createRouter, createWebHashHistory} from "vue-router"; 
import Index from '@/pages/Index.vue'
import About from '@/pages/about.vue'
import NotFound from '@/pages/page404.vue'  
import Login from '@/pages/login.vue'
//import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";

const routes = [{
    path:'/',
    component:Index
},{
    path:'/about',
    component:About
},,{
    path:'/login',
    component:Login
},{
    path:'/:pathMatch(.*)*',
    name:'NotFound',
    component:NotFound
}]
const router = createRouter({   
    history: createWebHashHistory(),
    routes
})
export default router