import { useEffect, useState } from 'react'
import api from '../utils/api'
import { IQuestion, IQuestionsApiResponse } from '../model/api'

const useQuestionsData = (postId: string) => {
  const initialOffset = 0
  const limit = 5

  const [questionsData, setQuestionsData] = useState<IQuestion[]>([])
  const [questionCount, setQuestionCount] = useState<number | null>(null)
  const [offset, setOffset] = useState<number>(initialOffset)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/subjects/${postId}/questions/?limit=${limit}&offset=${offset}`
        console.log(url)
        const response = await api.get<IQuestionsApiResponse>(url)
        const data = response.data
        const questions = data.results
        const count = data.count
        setQuestionCount(count)
        setQuestionsData((prev: IQuestion[]) => [...prev, ...questions])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [offset, postId])

  const updateQuestions = async () => {
    try {
      const response = await api.get<IQuestionsApiResponse>(
        `/subjects/${postId}/questions/?limit=${offset}&offset=${0}`,
      )
      const data = response.data
      const questions = data.results
      const count = data.count
      setQuestionCount(count)
      setQuestionsData(questions)
    } catch (error) {
      console.log(error)
    }
  }

  return { questionsData, questionCount, offset, setOffset, updateQuestions }
}

export default useQuestionsData
