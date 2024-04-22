import { useNavigate, useParams } from "react-router-dom";
import useSubjectIdData from "../hooks/use-subject-id-data";
import useQuestionsData from "../hooks/use-questions-data";
import useScrollEvent from "../hooks/use-scroll-event";
import { useEffect, useState } from "react";
import api from "../utils/api";
import Container, { ButtonWrapper } from "../component/answer/Container";

import { createGlobalStyle } from "styled-components";
import Background from "../component/post-id/Background";
import UserInfo from "../component/answer/UserInfo";
import ContentsFrame from "../component/answer/ContentsFrame";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

const DeleteButton = styled.button`
  margin-right: 0;
  margin-top: 10px;
  cursor: pointer;
  width: 100px;
  height: 35px;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: none;
  background: var(--Brown-40, #542f1a);
  color: var(--Grayscale-10, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

function AnswerPage() {
  const params = useParams();
  const postId = params.postId;

  const navigate = useNavigate();

  const { subjectIdData, isLoading } = useSubjectIdData(postId);
  const { offset, setOffset } = useQuestionsData(postId);

  const [currentOffset, setCurrentOffset] = useState(offset);

  useEffect(() => {
    setOffset(currentOffset);
  }, [currentOffset]);

  useScrollEvent(() => {
    setCurrentOffset((value) => value + 5);
  });

  if (!subjectIdData) return null;

  const deleteSubject = async () => {
    try {
      await api.delete(`/subjects/${postId}/`);
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Background />
        <UserInfo />
        <ButtonWrapper>
          <DeleteButton onClick={deleteSubject}>삭제하기</DeleteButton>
        </ButtonWrapper>
        <ContentsFrame />
      </Container>
    </>
  );
}

export default AnswerPage;
