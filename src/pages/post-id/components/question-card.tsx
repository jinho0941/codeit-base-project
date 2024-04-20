import { useState } from 'react'
import { formatDate } from '../../../utils/date'
import api from '../../../utils/api'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'
import styled from 'styled-components'

const StyledContainer = styled.div`
  background-color: #fff; /* bg-white */
  width: 100%; /* w-full */
  border-radius: 1rem; /* rounded-xl */
  padding: 1.5rem; /* p-6 */
  display: flex;
  flex-direction: column; /* flex-col */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* shadow-lg */
`

const StyledButton = styled.button`
  margin-right: auto; /* mr-auto */
  border: 1px solid #a0aec0; /* border */
  border-radius: 0.375rem; /* rounded-lg */
  padding: 0.25rem 0.5rem; /* py-1 px-2 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 800; /* font-extrabold */
  cursor: pointer;
`

const StyledDiv = styled.div`
  margin-top: 1.5rem; /* mt-6 */
  font-size: 0.75rem; /* text-xs */
  color: #718096; /* text-gray-400 */
  display: flex;
`

const StyledParagraph = styled.p`
  font-weight: 500; /* font-medium */
  font-size: 1.5rem; /* text-xl */
`

const StyledDate = styled.p`
  margin-left: 0.25rem; /* ml-1 */
`

const StyledDivider = styled.div`
  border-top: 1px solid #cbd5e0; /* border-t */
  margin-top: 2rem; /* mt-8 */
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
  hasAnswered: boolean
  likes: number
  dislikes: number
}

export const QuestionCard = ({
  id,
  createdAt,
  content,
  hasAnswered,
  likes,
  dislikes,
}: Props) => {
  const date = formatDate(createdAt)

  const [like, setLike] = useState(likes)
  const [dislike, setDislike] = useState(dislikes)

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

  return (
    <StyledContainer>
      <StyledButton
        style={{
          border: hasAnswered ? '1px solid #f6e05e' : '1px solid #718096',
          color: hasAnswered ? '#f6e05e' : '#718096',
        }}
      >
        {hasAnswered ? '답변 완료' : '미답변'}
      </StyledButton>
      <StyledDiv>
        <span>질문 ·</span>
        <StyledDate>{date}</StyledDate>
      </StyledDiv>
      <StyledParagraph>{content}</StyledParagraph>
      <StyledDivider />

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
    </StyledContainer>
  )
}
