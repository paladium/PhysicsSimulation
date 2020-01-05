import Vue from 'vue'
import VueRouter from 'vue-router'
import Docs from '@/views/Docs.vue'
import Welcome from '@/views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/docs/:page',
        name: 'docs',
        component: Docs
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
