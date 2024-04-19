import axios from 'axios'

const BASE_URL = 'https://openmind-api.vercel.app/5-3'

const api = axios.create({
  baseURL: BASE_URL,
})

export default api
