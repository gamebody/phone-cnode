import { login } from './api'

export const storeState = {
  state: {
    userInfo: {
      isLogin: false,
      info: { }
    }
  },
  getters: {
    getUserInfo ({ userInfo }) {
      return userInfo
    }
  },
  mutations: {
    setInfo (state, user) {
      state.userInfo.info = { ...user }
      state.userInfo.isLogin = true
    },
    deleteUserInfo (state) {
      state.userInfo.info = {}
      state.userInfo.isLogin = false
    }
  },
  actions: {
    login ({ commit, state }, accessToken) {
      login(accessToken, (userInfo) => {
        commit('setInfo', userInfo)
      })
    }
  }
}
