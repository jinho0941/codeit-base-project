import { useEffect, useState } from 'react'
import api from '../utils/api'

const useSubjectIdData = (postId) => {
  const [subjectIdData, setSubjectIdData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await api.get(`/subjects/${postId}/`)
        setSubjectIdData(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [postId])

  const updateSubjectIdData = async () => {
    try {
      const response = await api.get(`/subjects/${postId}/`)
      setSubjectIdData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return { subjectIdData, updateSubjectIdData, isLoading }
}

export default useSubjectIdData
