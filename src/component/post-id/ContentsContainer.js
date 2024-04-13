import styled from "styled-components";
import ContentsTitle from "./ContentsTitle";
import QuestionCardList from "./QuestionCardList";
import { useEffect, useState } from "react";
import { getQuestion } from "../../api/post-id/post-api";

const StyledContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 600px);
  margin-left: 300px;
  margin-right: 300px;
  padding: 16px;
  margin-top: 100px;

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

function ContentsContainer({ profile }) {
  const [questions, setQuestions] = useState([]);
  const handleLoadQuestions = async () => {
    const res = await getQuestion();

    return res.data.results;
  };

  useEffect(() => {
    handleLoadQuestions()
      .then((r) => {
        setQuestions(r);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!questions) {
    return <div>Loading...</div>;
  }

  return (
    <StyledContentsContainer>
      <ContentsTitle questions={questions} />
      <QuestionCardList questions={questions} profile={profile} />
    </StyledContentsContainer>
  );
}

export default ContentsContainer;
