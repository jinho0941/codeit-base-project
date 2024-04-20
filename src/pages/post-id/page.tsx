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

import styled from 'styled-components'

const Main = styled.main`
  height: 100vh;
`

const CenteredFlex = styled.div`
  display: flex;
  justify-content: center;
`

const PostIdPage = () => {
  const params = useParams<{ postId: string }>()
  const postId = params.postId
  if (!postId) return

  const { subjectIdData } = useSubjectIdData(postId)
  const { questionCount, questionsData, offset, setOffset, updateQuestions } =
    useQuestionsData(postId)

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
      <Main>
        <UserHeroHeader
          imgUrl={subjectIdData.imageSource}
          name={subjectIdData.name}
        />
        <CenteredFlex>
          <ShareIcons />
        </CenteredFlex>

        <QuestionFeed
          questionCount={questionCount || 0}
          questions={questionsData}
        />

        <QuestionModalButton onOpen={() => setIsModalOpen(true)} />
      </Main>
    </>
  )
}

export default PostIdPage
