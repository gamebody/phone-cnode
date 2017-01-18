import Axios from 'axios'

export const login = (access) => {
  Axios.post('https://cnodejs.org/api/v1/accesstoken', {
    params: {
      accesstoken: access
    }
  })
  .then((res) => {
    if (res.statusText === 'ok') {
      return res.data
    }
  })
  .catch((err) => {
    console.log(err)
  })
}
