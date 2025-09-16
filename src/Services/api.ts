import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api', 
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      // redirect ke login atau hapus token
    }
    return Promise.reject(err)
  }
)

export default api
