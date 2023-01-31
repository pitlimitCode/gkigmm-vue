import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path : '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  // },
  // {
  //   path: '/tes',
  //   name: 'tes',
  //   component: () => import('../views/TesView.vue'),
  //   meta: {
  //     title: 'Tes Page',
  //     metaTags: [
  //       {
  //         name: 'description',
  //         content: 'The test page - description.'
  //       },
  //       {
  //         property: 'og:description',
  //         content: 'The test page - property.'
  //       }
  //     ]
  //   }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
