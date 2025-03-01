import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidosView from '../views/PedidosView.vue'

const routes = [
  {
    path: '/home', name: 'home', component: HomeView
  },
  {
    path: '/pedidos', name: 'pedidos', component: PedidosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
