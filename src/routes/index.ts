import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


//TS + Vue router
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@pages/index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router