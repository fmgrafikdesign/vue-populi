import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import CivilizationView from '@/views/CivilizationView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/civilization/:name',
    name: 'Civilization',
    component: CivilizationView,
  },
  {
    path: '/',
    name: 'Loading...',
    component: CivilizationView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
