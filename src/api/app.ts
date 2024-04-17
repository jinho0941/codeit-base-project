import api from '../utils/api'

export const createSubject = async (name: string) => {
  const response = await api.post('/subjects/', { name })
  return response.data
}
