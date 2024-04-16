import styled from "styled-components";
import message from "../../images/list/Messages.svg";

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #818181;
  padding: 20px;
  color: #000000;

  @media (max-width: 982px) {
    display: ${(props) => (props.$hideonsmallscreen ? "none" : "block")};
  }
`;
const CardContent = styled.div`
  background-color: #fff;
`;
const CardImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
const CardMessageIcon = styled.img`
  width: 18px;
  height: 18px;
`;
const CardName = styled.p`
  background-color: #fff;

  font-size: 20px;
  font-weight: 400;
`;

const CardQuestionSection = styled.div`
  background-color: #fff;
`;
function Cards({ item }) {
  return (
    <Card>
      <CardContent>
        <CardImg src={item.imageSource} alt="아이템 이미지" />
        <CardName>{item.name}</CardName>
      </CardContent>
      <CardQuestionSection>
        <CardMessageIcon src={message} alt="메세지 아이콘" />
        받은 질문 {item.questionCount}
      </CardQuestionSection>
    </Card>
  );
}

export default Cards;
