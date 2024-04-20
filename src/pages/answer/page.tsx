import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserHeroHeader } from '../../components/user-hero-header'
import useSubjectIdData from '../../hooks/use-subject-id-data'
import { ShareIcons } from '../../components/share-icons'
import useQuestionsData from '../../hooks/use-questions-data'
import useScrollEvent from '../../hooks/use-scroll-event'
import { QuestionFeed } from './components/question-feed'
import { DeleteModal } from './components/delete-modal'
import { toast } from 'sonner'

const AnswerPage = () => {
  const params = useParams<{ postId: string }>()
  const postId = params.postId
  if (!postId) return null

  const navigate = useNavigate()

  const { subjectIdData, isLoading } = useSubjectIdData(postId)
  const { questionCount, questionsData, offset, setOffset, updateQuestions } =
    useQuestionsData(postId)

  const [onOpen, setOnOpen] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(offset)

  const onClose = () => {
    setOnOpen(false)
  }

  useEffect(() => {
    setOffset(currentOffset)
  }, [currentOffset])

  useScrollEvent(() => {
    setCurrentOffset((value) => value + 5)
  })

  if (isLoading) {
    return <div>loading</div>
  }

  if (!subjectIdData && !isLoading) {
    localStorage.removeItem('postId')
    navigate('/')
    toast.error('이미 삭제된 페이지입니다. 다시 생성해 주세요.')
    return
  }

  if (!subjectIdData) {
    navigate('/')
    return
  }

  return (
    <main className='h-screen'>
      {onOpen && <DeleteModal onClose={onClose} />}

      <UserHeroHeader
        imgUrl={subjectIdData?.imageSource}
        name={subjectIdData?.name}
      />
      <div className='flex justify-center'>
        <ShareIcons />
      </div>
      <QuestionFeed
        deleteModalOpen={() => setOnOpen(true)}
        questionCount={questionCount || 0}
        questions={questionsData}
        subject={subjectIdData}
        updateQuestions={updateQuestions}
      />
    </main>
  )
}

export default AnswerPage
