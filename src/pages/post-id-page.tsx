import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/api'
import { Header } from '../components/post-id/header'
import { ShareIcons } from '../components/post-id/share-icons'
import { Questions } from '../components/post-id/questions'
import { Footer } from '../components/post-id/footer'
import { QuestionModal } from '../components/post-id/question-modal'

interface User {
  id: number
  name: string
  imageSource: string
  questionCount: number
  createdAt: string
}

const PostIdPage = () => {
  const params = useParams<{ postId: string }>()
  const postId = params.postId
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<User | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const onOpen = () => {
    setIsModalOpen(true)
  }

  const onClose = () => {
    setIsModalOpen(false)
  }

  if (!data) {
    return <div>loading</div>
  }
  return (
    <div className='relative'>
      {isModalOpen && (
        <QuestionModal
          id={data.id}
          img={data.imageSource}
          name={data.name}
          onClose={onClose}
        />
      )}

      <Header img={data.imageSource} />
      <div className='pt-20 flex flex-col items-center bg-slate-100'>
        <h1 className='text-4xl font-bold'>{data.name}</h1>
        <ShareIcons />
        <Questions questionCount={data.questionCount} name={data.name} />
        <Footer onOpen={onOpen} />
      </div>
    </div>
  )
}

export default PostIdPage
