import { useEffect, useState } from 'react'
import { IQuestionsApiResponse } from '../model/api'
import api from '../utils/api'

const useQuestionsData = (postId: string, limit: number, offset: number) => {
  const [questionsData, setQuestionsData] =
    useState<IQuestionsApiResponse | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/subjects/${postId}/questions/?limit=${limit}&offset=${offset}`,
        )
        setQuestionsData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [postId])

  return { questionsData }
}

export default useQuestionsData
