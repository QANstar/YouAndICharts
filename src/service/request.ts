import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  validateStatus: (status) => status < 500
})

export default request
