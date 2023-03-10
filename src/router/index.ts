import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Programm from '../views/ProgrammView.vue'
import Contact from '../views/ContactView.vue'
import Gallery from '../views/GalleryView.vue'
import Boat from '../views/BoatView.vue'
import Report from '../views/ReportView.vue'

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
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/boot',
      name: 'boat',
      component: Boat
    },
    {
      path: '/bericht',
      name: 'report',
      component: Report
    }
  ]
})

export default router
