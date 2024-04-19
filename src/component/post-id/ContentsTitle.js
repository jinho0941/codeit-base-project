import styled from "styled-components";
import questionImg from "../../images/post-id-images/question.svg";

const StyledContentsTitle = styled.div`
  display: flex;
  align-items: center;
  color: #542f1a;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */
`;

function ContentsTitle({ questionsLength }) {
  return (
    <StyledContentsTitle>
      <img src={questionImg} alt="question"></img>
      {questionsLength !== 0 ? (
        <p>{questionsLength}개의 질문이 있습니다.</p>
      ) : (
        <p>아직 질문이 없습니다.</p>
      )}
    </StyledContentsTitle>
  );
}

export default ContentsTitle;
