import api from './api'

export const login = async (payload: { email: string, password: string }) => {
  const res = await api.post('/auth/login', payload)
  return res.data
}

export const getMe = async () => {
  const res = await api.get('/auth/me')
  return res.data
}

export const logout = async () => {
  const res = await api.post('/auth/logout')
  return res.data
}
