import { useState } from 'react'
import api from '../../utils/api'
import { Answer } from './answer'

export const QuestionCard = ({
  id,
  content,
  like,
  dislike,
  createdAt,
  answer,
  updateQuestions,
  name,
  img,
}) => {
  const hasAnswered = !!answer
  const [text, setText] = useState('')
  const [cLike, setCLike] = useState(like)
  const [cDislike, setCDislike] = useState(dislike)
  const [cAnswer, setCAnswer] = useState(answer)

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const onAnswerCreate = async (id, content) => {
    try {
      const response = await api.post(`/questions/${id}/answers/`, {
        content,
        isRejected: false,
      })
      setCAnswer(response.data)
      updateQuestions()
    } catch (error) {
      console.log('some thing went wrong')
      console.log(error)
    }
  }

  const onAnswerModify = async (content) => {
    try {
      const response = await api.patch(`/answers/${cAnswer.id}/`, {
        content,
        idRejected: false,
      })
      setCAnswer(response.data)
      updateQuestions()
    } catch (error) {
      console.log(error)
    }
  }

  const onQuestionDelete = async () => {
    try {
      await api.delete(`/questions/${id}/`)
      updateQuestions()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={onQuestionDelete}>질문 삭제하기</button>
      {!hasAnswered ? <div>미답변</div> : <div>답변완료</div>}
      <div>생성 일자 {createdAt}</div>
      <div>{content}</div>
      {!hasAnswered ? (
        <>
          <input type='text' value={text} onChange={handleChange} />
          <button onClick={() => onAnswerCreate(id, text)}>답변달기</button>
        </>
      ) : (
        <Answer
          name={name}
          img={img}
          createdAt={answer.createdAt}
          content={answer.content}
          onAnswerModify={onAnswerModify}
        />
      )}
    </div>
  )
}
