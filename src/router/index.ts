import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Programm from '../views/ProgrammView.vue'
import Contact from '../views/ContactView.vue'
import Galery from '../views/GaleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/programm',
      name: 'programm',
      
      component: Programm
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: Contact
    },
    {
      path: '/galerie',
      name: 'galery',
      component: Galery
    }
  ]
})

export default router
