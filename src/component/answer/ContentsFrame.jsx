import styled from "styled-components";
import useQuestionsData from "../../hooks/use-questions-data";
import { useParams } from "react-router-dom";
import questionImg from "../../images/post-id-images/question.svg";
import { QuestionCard } from "./question-card";
import useSubjectIdData from "../../hooks/use-subject-id-data";

const StyledContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 600px);
  margin-top: 9px;
  margin-left: 300px;
  margin-right: 300px;
  margin-bottom: 50px;
  padding: 16px;

  border-radius: 16px;
  border: 1px solid #c7bbb5;
  background: #f5f1ee;

  @media only screen and (max-width: 1200px) {
    width: calc(100vw - 64px);
    margin-left: 32px;
    margin-right: 32px;
  }

  @media only screen and (max-width: 767px) {
    width: calc(100vw - 48px);
    margin-left: 24px;
    margin-right: 24px;
  }
`;

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
function ContentsFrame() {
  const params = useParams();
  const postId = params.postId;

  const { subjectIdData, isLoading } = useSubjectIdData(postId);
  const { questionCount, questionsData, updateQuestions } =
    useQuestionsData(postId);

  if (!subjectIdData) return null;

  return (
    <StyledContentsContainer>
      <StyledContentsTitle>
        <img src={questionImg} alt="question" />
        {questionCount !== 0 ? (
          <p>{questionCount} 개의 질문이 있습니다.</p>
        ) : (
          <p>아직 질문이 없습니다.</p>
        )}
      </StyledContentsTitle>
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
    </StyledContentsContainer>
  );
}

export default ContentsFrame;
