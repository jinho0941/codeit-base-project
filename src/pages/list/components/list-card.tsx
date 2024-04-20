import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Skeleton } from '../../../components/ui/skeleton'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem; /* p-6 */
  gap: 1.25rem; /* gap-y-5 */
  border: 1px solid #2d3748; /* border border-gray-800 */
  border-radius: 0.75rem; /* rounded-xl */
  cursor: pointer;

  &:hover {
    background-color: rgba(98, 124, 143, 0.1); /* hover:bg-slate-200/50 */
  }
`
const StyledImg = styled.img`
  border-radius: 9999px; /* rounded-full */
  height: 5rem; /* h-20 */
  width: 5rem; /* w-20 */
`

const StyledName = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; /* line-clamp-1 */
`

const StyledOuterDiv = styled.div`
  display: flex;
  justify-content: space-between; /* justify-between */
  color: #a0aec0; /* text-gray-400 */
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center; /* items-center */
`

const StyledParagraph = styled.p`
  margin-left: 0.25rem; /* ml-1 */
`

const StyledIcon = styled(IoChatbubbleEllipsesOutline)`
  height: 1.5rem; /* h-6 */
  width: 1.5rem; /* w-6 */
`

type Props = {
  id: number
  img: string
  name: string
  questionCount: number
}

export const ListCard = ({ id, img, name, questionCount }: Props) => {
  return (
    <StyledLink to={`/post/${id}`}>
      <StyledImg src={img} alt='img' />
      <StyledName>{name}</StyledName>
      <StyledOuterDiv>
        <StyledDiv>
          <StyledIcon />
          <StyledParagraph>받은 질문</StyledParagraph>
        </StyledDiv>
        <span>{questionCount}</span>
      </StyledOuterDiv>
    </StyledLink>
  )
}

ListCard.Skeleton = () => {
  return <Skeleton rounded='lg' height={200} />
}
