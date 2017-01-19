import Axios from 'axios'

export const getUserByToken = (accessToken, callback) => {
  Axios.post(`https://cnodejs.org/api/v1/accesstoken?accesstoken=${accessToken}`)
  .then((res) => {
    if (res.statusText === 'OK' && res.status === 200) {
      callback(res.data)
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getTopicCollect = (username, callback) => {
  Axios.get(`https://cnodejs.org/api/v1/topic_collect/${username}`)
    .then((res) => {
      if (res.statusText === 'OK' && res.status === 200) {
        callback(res.data.data)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
