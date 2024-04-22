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
  margin-top: 100px;
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

function ContentsContainer({ profile, id }) {
  const [questions, setQuestions] = useState([]);
  const [questionsLength, setQuestionsLength] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 8;

  const handleLoadQuestions = async () => {
    let resData;
    try {
      setLoading(true);
      const res = await getQuestion({ offset, limit, id });
      resData = res.data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    if (offset === 0) {
      setQuestions(resData.results);
    } else {
      setQuestions((prevData) => [...prevData, ...resData.results]);
    }

    setOffset(offset + limit);
    setQuestionsLength(resData.count);
  };

  useEffect(() => {
    handleLoadQuestions();
  }, []);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      handleLoadQuestions();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <StyledContentsContainer>
      {questions ? (
        <>
          <ContentsTitle questionsLength={questionsLength} />
          <QuestionCardList questions={questions} profile={profile} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </StyledContentsContainer>
  );
}

export default ContentsContainer;
