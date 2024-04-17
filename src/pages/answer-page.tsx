import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/api'
import { Header } from '../components/answer/header'
import { ShareIcons } from '../components/answer/share-icons'
import { Questions } from '../components/answer/questions'

interface User {
  id: number
  name: string
  imageSource: string
  questionCount: number
  createdAt: string
}

const AnswerPage = () => {
  const params = useParams<{ postId: string }>()
  const postId = params.postId
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<User | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await api.get(`/subjects/${postId}/`)
        setData(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (postId) {
      fetchData()
    }
  }, [postId])

  if (!data) {
    return <div>loading</div>
  }
  return (
    <div className='relative'>
      <Header img={data.imageSource} />
      <div className='pt-20 flex flex-col items-center bg-slate-100'>
        <h1 className='text-4xl font-bold'>{data.name}</h1>
        <ShareIcons />
        <Questions questionCount={data.questionCount} name={data.name} />
      </div>
    </div>
  )
}

export default AnswerPage
