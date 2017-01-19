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

export const dislike = (accessToken, topicId, callback) => {
  Axios.post('https://cnodejs.org/api/v1/topic_collect/de_collect', {
    accesstoken: accessToken,
    topic_id: topicId
  })
    .then((res) => {
      if (res.statusText === 'OK' && res.status === 200) {
        callback(res.data)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export const like = (accessToken, topicId, callback) => {
  Axios.post('https://cnodejs.org/api/v1/topic_collect/collect', {
    accesstoken: accessToken,
    topic_id: topicId
  })
    .then((res) => {
      if (res.statusText === 'OK' && res.status === 200) {
        callback(res.data)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
