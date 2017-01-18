import Axios from 'axios'

export const login = (access, callback) => {
  Axios.post(`https://cnodejs.org/api/v1/accesstoken?accesstoken=${access}`)
  .then((res) => {
    if (res.statusText === 'OK' && res.status === 200) {
      callback(res.data)
    }
  })
  .catch((err) => {
    console.log(err)
  })
}
