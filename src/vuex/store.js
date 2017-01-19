import { getUserByToken, getTopicCollect } from './api'

export const storeState = {
  state: {
    userInfo: {
      isLogin: false,
      info: { },
      topicCollect: []
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
    },
    setTopicCollect (state, topicsId) {
      state.userInfo.topicCollect = topicsId
    }
  },
  actions: {
    getUser ({ commit, state }, accessToken) {
      return new Promise((resolve, reject) => {
        getUserByToken(accessToken, (userInfo) => {
          commit('setInfo', userInfo)
          resolve(userInfo.loginname)
        })
      })
    },
    login ({ commit, dispatch }, accessToken) {
      return dispatch('getUser', accessToken).then((username) => {
        getTopicCollect(username, (topicCollect) => {
          commit('setTopicCollect', topicCollect)
        })
      })
    }
  }
}
