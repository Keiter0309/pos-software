import HelloWorld from "@/components/HelloWorld.vue";
import Homepage from "@/components/Homepage.vue";
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/dashboard', component: Homepage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router