import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Civilization from '@/views/Civilization.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/civilization/:name',
    name: 'Civilization',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Civilization
  },
  {
    path: '/',
    name: 'Loading...',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Civilization
  }
]

const router = new VueRouter({
  routes
})

export default router
