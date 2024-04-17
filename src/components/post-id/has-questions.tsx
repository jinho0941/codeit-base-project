import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/api'
import { BsChatText } from 'react-icons/bs'
import { toast } from 'sonner'
import { QuestionCard } from './question-card'

export interface Answer {
  id: number
  subjectId: number
  content: string
  like: number
  dislike: number
  createdAt: string
  answer: any
}

interface AnswerResponse {
  count: number
  next: string | null
  previous: string | null
  results: Answer[]
}

type Props = {
  questionCount: number
}

export const HasQuestions = ({ questionCount }: Props) => {
  const [data, setData] = useState<AnswerResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams<{ postId: string }>()
  const postId = params.postId

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/subjects/${postId}/questions/?limit=5&offset=0`,
        )
        setData(response.data)
      } catch (error) {
        toast.error('something went wrong')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (!data) {
    return <div>loading</div>
  }
  return (
    <div className='flex flex-col py-5  px-5 w-full items-center'>
      <div className='flex items-center text-2xl text-amber-800'>
        <BsChatText className='h-6 w-6' />
        <span className='ml-2'>{questionCount}</span>
        <span>개의 질문이 있습니다.</span>
      </div>
      <ul className='mt-5 w-full space-y-5'>
        {data.results.map((result) => (
          <QuestionCard
            key={result.id}
            id={result.id}
            createdAt={result.createdAt}
            content={result.content}
            answer={result.answer}
            likes={result.like}
            dislikes={result.dislike}
          />
        ))}
      </ul>
    </div>
  )
}
