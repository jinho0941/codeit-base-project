import { useNavigate, useParams } from 'react-router-dom'
import useSubjectIdData from '../hooks/use-subject-id-data'
import useQuestionsData from '../hooks/use-questions-data'
import useScrollEvent from '../hooks/use-scroll-event'
import { useEffect, useState } from 'react'
import { QuestionCard } from './answer/question-card'
import api from '../utils/api'

function AnswerPage() {
  const params = useParams()
  const postId = params.postId

  const navigate = useNavigate()

  const { subjectIdData, isLoading } = useSubjectIdData(postId)
  const { questionCount, questionsData, offset, setOffset, updateQuestions } =
    useQuestionsData(postId)

  const [currentOffset, setCurrentOffset] = useState(offset)

  useEffect(() => {
    setOffset(currentOffset)
  }, [currentOffset])

  useScrollEvent(() => {
    setCurrentOffset((value) => value + 5)
  })

  if (!subjectIdData && !isLoading) {
    localStorage.removeItem('postId')
    navigate('/')
    toast.error('이미 삭제된 페이지입니다. 다시 생성해 주세요.')
    return
  }

  if (!subjectIdData) return null

  const deleteSubject = async () => {
    try {
      await api.delete(`/subjects/${postId}/`)
      navigate('/list')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <button onClick={deleteSubject}>페이지 삭제하기</button>
      {/* header */}
      <section>
        <img src={subjectIdData.imageSource} />
        <span>{subjectIdData.name}</span>
      </section>
      {/* feed */}
      <section>
        <span>{questionCount} 개의 질문이 있습니다.</span>
        {/* question items */}
        {questionsData &&
          questionsData.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              content={question.content}
              like={question.like}
              dislike={question.dislike}
              createdAt={question.createdAt}
              answer={question.answer}
              updateQuestions={updateQuestions}
              name={subjectIdData.name}
              img={subjectIdData.imageSource}
            />
          ))}
      </section>
    </main>
  )
}

export default AnswerPage
