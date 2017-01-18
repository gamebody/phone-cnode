import { login } from './api'

export const storeState = {
  state: {
    userInfo: { }
  },
  getters: {
    getUserInfo ({ userInfo }) {
      return userInfo
    }
  },
  mutations: {
    setUserInfo (state, user) {
      state.userInfo = { ...user }
    },
    deleteUserInfo (state) {
      state.userInfo = {}
    }
  },
  actions: {
    login ({ commit, state }, accessToken) {
      login(accessToken, (userInfo) => {
        commit('setUserInfo', userInfo)
      })
    }
  }
}
