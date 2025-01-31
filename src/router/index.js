import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/Registrar',
      name: 'Registrar',
      component: () => import('../modules/registro/views/Registrar.vue'),
    },
    {
      path: '/Contador',
      name: 'Contador',
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/ListDeTareas',
      name: 'ListaDeTareas',
      component: () => import('../modules/listaDeTareas/components/ListDeTareas.vue'),
  },
  ],
})

export default router
