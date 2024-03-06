import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Programm from '../views/ProgramView.vue'
import Contact from '../views/ContactView.vue'
import Gallery from '../views/GalleryView.vue'
import Boat from '../views/BoatView.vue'
import Report from '../views/ReportView.vue'
import AboutUs from '../views/AboutUsView.vue'
import Young from '../views/YoungView.vue'
import Imprint from '../views/ImprintView.vue'
import Documents from '../views/DocumentsView.vue'
import Somemrnachtsfest from '../views/event/SommernachtsfestView.vue'
import Jungfischerkurs from '../views/event/JungfischerkursView.vue'
import Login from '../views/LoginView.vue'
import ResetPassword from '../views/ResetPasswordView.vue'
import NotFound from '../views/NotFoundView.vue'

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
    },
    {
      path: '/ueber-uns',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/jugend',
      name: 'Young',
      component: Young
    },
    {
      path: '/impressum',
      name: 'imprint',
      component: Imprint
    },
    {
      path: '/event/sommernachtsfest',
      name: 'sommernachtsfest',
      component: Somemrnachtsfest
    },
    {
      path: '/event/jungfischerkurs',
      name: 'jungfischerkurs',
      component: Jungfischerkurs
    },
    {
      path: '/dokumente',
      name: 'documents',
      component: Documents
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
