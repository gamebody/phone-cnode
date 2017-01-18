import { login } from './api'

export default {
  state: {
    userInfo: { }
  },
  getters: {
    getUserInfo ({ userInfo }) {
      return userInfo
    }
  },
  mutations: {
    setUserInfo ({ userInfo }, user) {
      userInfo = {
        ...user
      }
    }
  },
  actions: {
    login ({ commit, state }, accessToken) {
      const userInfo = login(accessToken)
      commit('setUserInfo', userInfo)
    }
  }
}
