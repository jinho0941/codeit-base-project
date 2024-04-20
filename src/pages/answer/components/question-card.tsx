import { useState } from 'react'
import { formatDate } from '../../../utils/date'
import api from '../../../utils/api'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'
import { AnswerForm } from './answer-form'
import { IAnswer } from '../../../model/api'
import { Answer } from './answer'
import { DeleteQuestionButton } from './delete-question-button'

import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`
const FlexContainer = styled.div`
  display: flex;
`

const StyledButton = styled.button`
  margin-right: auto;
  border: 1px solid;
  border-radius: 0.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 0.875rem;
  font-weight: extrabold;
`

const StyledDiv2 = styled.div`
  margin-top: 1.5rem;
  font-size: 0.75rem;
  color: #718096;
  display: flex;
`

const StyledParagraph = styled.p`
  margin-left: 0.25rem;
`

const StyledDiv3 = styled.div`
  border-top: 1px solid #d1d5db;
  margin-top: 2rem;
`
const StyledContainer2 = styled.div`
  margin-top: 1.5rem; /* mt-6 */
  margin-bottom: 0.75rem; /* mb-3 */
  color: #718096; /* text-gray-500 */
`

const StyledStyledContainer3 = styled.div`
  display: flex;
  align-items: center; /* items-center */
  gap: 2rem; /* gap-x-8 */
`

const StyledLikeButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #4299e1; /* hover:text-blue-500 */
  }
`

const ThumbsUpIcon = styled(FaRegThumbsUp)`
  height: 1rem; /* h-4 */
  width: 1rem; /* w-4 */
`

const StyledSpan = styled.span`
  margin-left: 0.25rem; /* ml-1 */
`

const ThumbsDownIcon = styled(FaRegThumbsDown)`
  height: 1rem; /* h-4 */
  width: 1rem; /* w-4 */
`

const StyledDislikeButton = styled.button`
  display: flex;
  align-items: center;
  &:hover {
    color: #f43f5e; /* hover:text-rose-500 */
  }
`

type Props = {
  id: number
  createdAt: string
  content: string
  answer: IAnswer | undefined
  likes: number
  dislikes: number
  name: string
  img: string
  updateQuestions: () => void
}

export const QuestionCard = ({
  id,
  createdAt,
  content,
  answer,
  likes,
  dislikes,
  name,
  img,
  updateQuestions,
}: Props) => {
  const hasAnswered = !!answer
  const date = formatDate(createdAt)

  const [like, setLike] = useState(likes)
  const [dislike, setDislike] = useState(dislikes)
  const [cAnswer, setCAnswer] = useState<IAnswer | undefined | null>(answer)

  const likeClicked = async () => {
    try {
      const response = await api.post(`/questions/${id}/reaction/`, {
        type: 'like',
      })
      setLike(response.data.like)
    } catch (error) {
      console.log('some thing went wrong')
    }
  }

  const disLikeClicked = async () => {
    try {
      const response = await api.post(`/questions/${id}/reaction/`, {
        type: 'dislike',
      })
      setDislike(response.data.dislike)
    } catch (error) {
      console.log('some thing went wrong')
    }
  }

  const onAnswerCreate = async (textareaValue: string) => {
    try {
      const response = await api.post(`/questions/${id}/answers/`, {
        content: textareaValue,
        isRejected: false,
      })
      setCAnswer(response.data)
    } catch (error) {
      console.log('some thing went wrong')
    }
  }

  const onAnswerDelete = async () => {
    try {
      await api.delete(`/answers/${cAnswer!.id}/`)
      setCAnswer(null)
    } catch (error) {
      console.log('some thing went wrong')
    }
  }

  const onAnswerModify = async (content: string) => {
    try {
      const response = await api.patch(`/answers/${cAnswer!.id}/`, {
        content,
        idRejected: false,
      })
      setCAnswer(response.data)
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
    <StyledDiv>
      <FlexContainer>
        <div>
          <StyledButton
            style={{
              borderColor: hasAnswered ? '#ED8E18' : '#718096',
              color: hasAnswered ? '#ED8E18' : '#718096',
            }}
          >
            {hasAnswered ? '답변 완료' : '미답변'}
          </StyledButton>
          <StyledDiv2>
            <span>질문 ·</span>
            <StyledParagraph>{date}</StyledParagraph>
          </StyledDiv2>
          <p className='font-medium text-xl'>{content}</p>
        </div>
        <DeleteQuestionButton onDelete={onQuestionDelete} />
      </FlexContainer>
      {!cAnswer ? (
        <AnswerForm name={name} onCreate={onAnswerCreate} />
      ) : (
        <Answer
          img={img}
          name={name}
          createdAt={cAnswer.createdAt}
          content={cAnswer.content}
          onDelete={onAnswerDelete}
          onModify={onAnswerModify}
        />
      )}
      <StyledDiv3 />

      <StyledContainer2>
        <StyledStyledContainer3>
          <StyledLikeButton
            onClick={likeClicked}
            style={{
              color: like ? '#3182ce' : 'inherit',
            }}
          >
            <ThumbsUpIcon />
            <StyledSpan>좋아요</StyledSpan>
            {!!like && <StyledSpan>{like}</StyledSpan>}
          </StyledLikeButton>
          <StyledDislikeButton
            onClick={disLikeClicked}
            style={{
              color: !!dislike ? '#f43f5e' : 'inherit',
            }}
          >
            <ThumbsDownIcon />
            <StyledSpan>싫어요</StyledSpan>
            {!!dislike && <StyledSpan>{dislike}</StyledSpan>}
          </StyledDislikeButton>
        </StyledStyledContainer3>
      </StyledContainer2>
    </StyledDiv>
  )
}
