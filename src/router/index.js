import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import DepositView from '../views/DepositView.vue'
import WithdrawView from '../views/WithdrawView.vue'
import TransferView from '../views/TransferView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { transition: 'slide-right' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { transition: 'slide-right' },
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: DepositView,
      meta: { transition: 'slide-right' },
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: WithdrawView,
      meta: { transition: 'slide-right' },
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: TransferView,
      meta: { transition: 'slide-right' },
    }
  ]
})

export default router
