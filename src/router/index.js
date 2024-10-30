import { createRouter, createWebHistory } from 'vue-router'
import CarPriceCalculator from '../views/CarPriceCalculator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CarPriceCalculator
    },
  ]
})

export default router
