import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
    return {
      username: '',
      accountBalance: '',
      isLogin: false
    }},
    getters: {
      //doubleCount: (state) => state.counter * 2
    },
    actions: {
      onLogin(username,isLogin) {
        this.username = username,
        this.accountBalance = Math.ceil(Math.random()*1000000),
        this.isLogin = isLogin
        console.log(' from state '+this.username);

      },
      handleDeposit(amount) {
        this.accountBalance = this.accountBalance + amount

      }
    }
  })
  