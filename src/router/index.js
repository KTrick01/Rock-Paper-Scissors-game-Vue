import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { transition: 'slide-right' }


    },
    {
      path: '/game/:type',
      name: 'game',
      component: () => import('../views/GameView.vue'),
      meta: { transition: 'slide-right' }

    },
    {
      path: '',
      component: () => import('../views/HomeView.vue')

    }
    
  ]
})

export default router
