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
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
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
      component: WithdrawView
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: TransferView
    }
  ]
})

export default router
