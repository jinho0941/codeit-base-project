import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserHeroHeader } from '../../components/user-hero-header'
import useSubjectIdData from '../../hooks/use-subject-id-data'
import { ShareIcons } from '../../components/share-icons'
import { CreateQuestionModal } from './components/create-question-modal'
import useQuestionsData from '../../hooks/use-questions-data'
import useScrollEvent from '../../hooks/use-scroll-event'
import { QuestionFeed } from './components/question-feed'
import { QuestionModalButton } from './components/question-modal-button'

const PostIdPage = () => {
  const params = useParams<{ postId: string }>()
  const postId = params.postId

  const { subjectIdData } = useSubjectIdData(postId!)
  const { questionCount, questionsData, offset, setOffset, updateQuestions } =
    useQuestionsData(postId!)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(offset)

  useEffect(() => {
    setOffset(currentOffset)
  }, [currentOffset])

  useScrollEvent(() => {
    setCurrentOffset((value) => value + 5)
  })

  const onClose = () => {
    setIsModalOpen(false)
    updateQuestions()
  }

  if (!subjectIdData) {
    return <div>loading</div>
  }

  return (
    <>
      {isModalOpen && (
        <CreateQuestionModal
          id={subjectIdData.id}
          img={subjectIdData.imageSource}
          name={subjectIdData.name}
          onClose={onClose}
        />
      )}
      <main className='h-screen'>
        <UserHeroHeader
          imgUrl={subjectIdData?.imageSource}
          name={subjectIdData?.name}
        />
        <div className='flex justify-center '>
          <ShareIcons />
        </div>

        <QuestionFeed
          questionCount={questionCount || 0}
          questions={questionsData}
          subject={subjectIdData}
        />

        <QuestionModalButton onOpen={() => setIsModalOpen(true)} />
      </main>
    </>
  )
}

export default PostIdPage
