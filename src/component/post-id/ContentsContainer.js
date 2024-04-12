import styled from "styled-components";
import ContentsTitle from "./ContentsTitle";
import QuestionCardList from "./QuestionCardList";
import { useEffect, useState } from "react";
import { getQuestion } from "../../api/post-id/post-api";

const StyledContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  padding-bottom: 16px;
  margin-top: 200px;
  border-radius: 16px;
  border: 1px solid #c7bbb5;
  background: #f5f1ee;
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
