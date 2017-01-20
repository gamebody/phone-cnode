import { getUserByToken, getTopicCollect, dislike, like } from './api'

export const storeState = {
  state: {
    userInfo: {
      accessToken: '', // accessToken值
      isLogin: false, // 是否登陆
      info: { }, // 用户信息
      topicCollect: [] // 收藏topic的id
    }
  },
  getters: {
    getUserInfo ({ userInfo }) {
      return userInfo
    },
    isLogin ({ userInfo }) {
      return userInfo.isLogin
    },
    accessToken ({ userInfo }) {
      return userInfo.accessToken
    },
    userId ({ userInfo }) {
      return userInfo.info.id
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
    },
    setAccessToken (state, accessToken) {
      state.userInfo.accessToken = accessToken
    },
    removeTopicCollect (state, topicId) {
      const collect = state.userInfo.topicCollect.filter((item) => {
        return item !== topicId
      })
      state.userInfo.topicCollect = collect
    },
    addTopicCollect (state, topicId) {
      state.userInfo.topicCollect.push(topicId)
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
      commit('setAccessToken', accessToken)
      return dispatch('getUser', accessToken).then((username) => {
        getTopicCollect(username, (topicCollect) => {
          const collectId = []
          topicCollect.forEach((item) => {
            collectId.push(item.id)  // 把收藏的文章的id存到数组中
          })
          commit('setTopicCollect', collectId)
        })
      })
    },
    dislike ({ commit, dispatch, state }, topicId) {
      const accessToken = state.userInfo.accessToken
      dislike(accessToken, topicId, (data) => {
        if (data.success === true) {
          commit('removeTopicCollect', topicId)
        }
      })
    },
    like ({ commit, dispatch, state }, topicId) {
      const accessToken = state.userInfo.accessToken
      like(accessToken, topicId, (data) => {
        if (data.success === true) {
          commit('addTopicCollect', topicId)
        }
      })
    }
  }
}
