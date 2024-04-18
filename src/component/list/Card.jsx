import styled from 'styled-components'
import message from '../../images/list/Messages.svg'
import { Link } from 'react-router-dom'

const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #818181;
  padding: 20px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // @media (max-width: 982px) {
  //   display: ${(props) => (props.$hideonsmallscreen ? 'none' : 'block')};
  // }
`
const CardContent = styled.div`
  background-color: #fff;
`
const CardImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`
const CardName = styled.div`
  background-color: #fff;
  font-size: 20px;
  font-weight: 400;
`
const CardQuestionSection = styled.div`
  background-color: #fff;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`
const CardMessage = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 4px;
`
const CardMessageIcon = styled.img`
  background-color: #fff;

  width: 18px;
  height: 18px;
`

function Cards({ item }) {
  return (
    <Link to={`/post/${item.id}`}>
      <StyledCard>
        <CardContent>
          <CardImg src={item.imageSource} alt='아이템 이미지' />
          <CardName>{item.name}</CardName>
        </CardContent>
        <CardQuestionSection>
          <CardMessage>
            <CardMessageIcon src={message} alt='메세지 아이콘' />
            <p>받은 질문</p>
          </CardMessage>
          <p>{item.questionCount}</p>
        </CardQuestionSection>
      </StyledCard>
    </Link>
  )
}

export default Cards
