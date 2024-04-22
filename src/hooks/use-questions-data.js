import { useEffect, useState } from 'react'
import api from '../utils/api'

const useQuestionsData = (postId) => {
  const initialOffset = 0
  const limit = 5

  const [questionsData, setQuestionsData] = useState([])
  const [questionCount, setQuestionCount] = useState(null)
  const [offset, setOffset] = useState(initialOffset)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/subjects/${postId}/questions/?limit=${limit}&offset=${offset}`
        const response = await api.get(url)
        const data = response.data
        const questions = data.results
        const count = data.count
        setQuestionCount(count)
        setQuestionsData((prev) => [...prev, ...questions])
        console.log(questions)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [offset, postId])

  const updateQuestions = async () => {
    try {
      const response = await api.get(
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
