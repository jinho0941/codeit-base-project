import styled from "styled-components";
import message from "../../images/list/Messages.svg";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #818181;
  padding: 20px;
  width: auto;
  height: 100%;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // @media (max-width: 982px) {
  //   display: ${(props) => (props.$hideonsmallscreen ? "none" : "block")};
  // }
`;

const StyledCardImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
const StyledCardName = styled.div`
  background-color: #fff;
  font-size: 20px;
  font-weight: 400;
`;
const StyledCardQuestionSection = styled.div`
  background-color: #fff;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
`;
const StyledCardMessageSection = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const StyledCardMessageText = styled.p`
  color: #818181;
  font-weight: 400;
  font-size: 16px;
`;
const StyledCardMessageIcon = styled.img`
  background-color: #fff;

  width: 18px;
  height: 18px;
`;

function Card({ item }) {
  return (
    <Link to={`/post/${item.id}`} style={{ textDecoration: "none" }}>
      <StyledCard>
        <StyledCardImg src={item.imageSource} alt="아이템 이미지" />
        <StyledCardName>{item.name}</StyledCardName>
        <StyledCardQuestionSection>
          <StyledCardMessageSection>
            <StyledCardMessageIcon src={message} alt="메세지 아이콘" />
            <StyledCardMessageText>받은 질문</StyledCardMessageText>
          </StyledCardMessageSection>
          <StyledCardMessageText>{item.questionCount}개</StyledCardMessageText>
        </StyledCardQuestionSection>
      </StyledCard>
    </Link>
  );
}

export default Card;
