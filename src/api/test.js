import api from '../utils/api'

export async function getTest() {
  const response = await api.get('/subjects/')
  return response.data
}
