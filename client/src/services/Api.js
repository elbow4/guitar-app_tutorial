import axios from 'axios'

// connector to backend, points to URL
export default () => {
  // makes XMLHttpRequests from browser
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
