import{createRouter,createWebHistory}from'vue-router'
import Dashboard from'@/views/Dashboard.vue'
import Login from'@/views/Login.vue'
import Discover from'@/views/Discover.vue'
import Portfolio from'@/views/Portfolio.vue'
import Rewards from'@/views/Rewards.vue'
import Verification from'@/views/Verification.vue'
const routes=[
{path:'/',name:'Dashboard',component:Dashboard},
{path:'/login',name:'Login',component:Login},
{path:'/discover',name:'Discover',component:Discover},
{path:'/portfolio',name:'Portfolio',component:Portfolio},
{path:'/rewards',name:'Rewards',component:Rewards},
{path:'/verification',name:'Verification',component:Verification},
]
const router=createRouter({
history:createWebHistory(),
routes
})
export default router
