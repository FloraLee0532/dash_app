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
    path: '/dashboard',
    name: 'dashboard', // 必须与 NavItem 中的 route 属性匹配
    component: About
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