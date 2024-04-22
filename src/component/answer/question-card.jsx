import { useState } from "react";
import api from "../../utils/api";
import { Answer } from "./answer";
import styled from "styled-components";
import { calculateTimeDiff } from "../post-id/utils";
import thumbsUpImg from "../../images/post-id-images/thumbs-up.svg";
import thumbsDownImg from "../../images/post-id-images/thumbs-down.svg";

const QuestionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  margin-top: 20px;
  width: 100%;
  border-radius: 16px;
  background: #fff;

  /* 1pt */
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
`;

const AnswerStatus = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  margin-left: auto;

  cursor: pointer;
  width: 130px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: none;
  background: var(--Brown-40, #542f1a);
  color: var(--Grayscale-10, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const QuestionCardResult = styled.span`
  padding: 4px 12px;
  border: 1px solid black;
  border-radius: 8px;
  border: 1px solid #542f1a;
  background: #fff;

  color: #542f1a;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

const QuestionCardTerm = styled.div`
  display: flex;
  color: #818181;
  margin-top: 32px;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

const QuestionCardQuestionTitle = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  word-break: break-all;
`;

const AnswerInput = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 32px;
  gap: 12px;
  align-self: stretch;
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 48px;
`;

const UserName = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  word-break: break-all;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`;

const TextArea = styled.textarea`
  font-size: 16px;
  display: flex;
  padding: 12px 24px;
  border-radius: 8px;
  width: 100%;
  height: 186px;
  overflow-y: hidden;
  resize: none;
  background: var(--Grayscale-20, #f9f9f9);
  border: 1px solid var(--Brown-40, #542f1a);
  outline: 1px solid var(--Brown-40, #542f1a);
`;

const NotModifyButton = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  font-size: 16px;
  color: var(--Grayscale-10, #fff);
  background-color: var(--Brown-30, #c7bbb5);
  border-radius: 8px;
  border: none;
`;

const ModifyDoneButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  gap: 8px;
  font-size: 16px;
  color: var(--Grayscale-10, #fff);
  background: var(--Brown-40, #542f1a);
  border-radius: 8px;
  border: none;
`;

const QuestionCardBottom = styled.div`
  margin-top: 32px;
  width: 100%;
  border-top: 1px solid #cfcfcf;
`;

const QuestionCardBottomStatus = styled.div`
  display: flex;
  margin-top: 24px;

  & img {
    margin-right: 6px;
  }
`;

const ThumbsUp = styled.div`
  margin-right: 32px;
  cursor: pointer;
  color: var(--Blue-50, #1877f2);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

const ThumbsDown = styled.div`
  color: var(--Grayscale-40, #818181);
  cursor: pointer;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const QuestionCard = ({
  id,
  content,
  like,
  dislike,
  createdAt,
  answer,
  updateQuestions,
  name,
  img,
}) => {
  const hasAnswered = !!answer;
  const [text, setText] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [cLike, setCLike] = useState(like);
  const [cDislike, setCDislike] = useState(dislike);
  const [cAnswer, setCAnswer] = useState(answer);

  const handleChange = (event) => {
    setText(event.target.value);
    setIsButtonActive(text.trim().length > 0);
  };

  const onAnswerCreate = async (id, content) => {
    try {
      const response = await api.post(`/questions/${id}/answers/`, {
        content,
        isRejected: false,
      });
      setCAnswer(response.data);
      updateQuestions();
    } catch (error) {
      console.log("some thing went wrong");
      console.log(error);
    }
  };

  const onAnswerModify = async (content) => {
    try {
      const response = await api.patch(`/answers/${cAnswer.id}/`, {
        content,
        idRejected: false,
      });
      setCAnswer(response.data);
      updateQuestions();
    } catch (error) {
      console.log(error);
    }
  };

  const onQuestionDelete = async () => {
    try {
      await api.delete(`/questions/${id}/`);
      updateQuestions();
    } catch (error) {
      console.log(error);
    }
  };

  const likeClicked = async () => {
    try {
      const response = await api.post(`/questions/${id}/reaction/`, {
        type: "like",
      });
      setCLike(response.data.like);
      updateQuestions();
    } catch (error) {
      console.log("some thing went wrong");
    }
  };

  const disLikeClicked = async () => {
    try {
      const response = await api.post(`/questions/${id}/reaction/`, {
        type: "dislike",
      });
      setCDislike(response.data.dislike);
      updateQuestions();
    } catch (error) {
      console.log("some thing went wrong");
    }
  };

  return (
    <QuestionCardWrapper>
      <AnswerStatus>
        <QuestionCardResult>
          {!hasAnswered ? "미답변" : "답변완료"}
        </QuestionCardResult>
        <DeleteButton onClick={onQuestionDelete}>질문 삭제하기</DeleteButton>
      </AnswerStatus>
      <QuestionCardTerm>
        <div>질문 · {calculateTimeDiff(createdAt)}</div>
      </QuestionCardTerm>
      <QuestionCardQuestionTitle>
        <div>{content}</div>
      </QuestionCardQuestionTitle>
      <AnswerInput>
        {!hasAnswered ? (
          <>
            <UserImage src={img} alt="img" />
            <AnswerContainer>
              <UserName>{name}</UserName>
              <TextArea
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="답변을 입력해주세요"
              />
              {isButtonActive ? (
                <ModifyDoneButton onClick={() => onAnswerCreate(id, text)}>
                  답변완료
                </ModifyDoneButton>
              ) : (
                <NotModifyButton disabled>답변완료</NotModifyButton>
              )}
            </AnswerContainer>
          </>
        ) : (
          <Answer
            name={name}
            img={img}
            createdAt={answer.createdAt}
            content={answer.content}
            onAnswerModify={onAnswerModify}
          />
        )}
      </AnswerInput>
      <QuestionCardBottom>
        <QuestionCardBottomStatus>
          <img src={thumbsUpImg} alt="thumbs-up" onClick={likeClicked}></img>
          <ThumbsUp onClick={likeClicked}>좋아요 {like}</ThumbsUp>
          <img
            src={thumbsDownImg}
            alt="thumbs-down"
            onClick={disLikeClicked}
          ></img>
          <ThumbsDown onClick={disLikeClicked}>싫어요 {dislike}</ThumbsDown>
        </QuestionCardBottomStatus>
      </QuestionCardBottom>
    </QuestionCardWrapper>
  );
};
