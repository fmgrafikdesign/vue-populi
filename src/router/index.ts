import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Civilization from '@/views/Civilization.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/civilization/:name',
    name: 'Civilization',
    component: Civilization,
  },
  {
    path: '/',
    name: 'Loading...',
    component: Civilization,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
