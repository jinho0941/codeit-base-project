import styled from "styled-components";
import thumbsUpImg from "../../images/post-id-images/thumbs-up.svg";
import thumbsDownImg from "../../images/post-id-images/thumbs-down.svg";
import { calculateTimeDiff } from "./utils";
import { createDislike, createLike } from "../../api/post-id/post-api";
import { useState } from "react";

const QuestionCardWrapper = styled.div`
  padding: 32px;
  margin-top: 20px;
  width: 100%;
  border-radius: 16px;
  background: #fff;

  /* 1pt */
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
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

const QuestionCardQuestion = styled.div`
  margin: 32px 0px;
`;

const QuestionCardTerm = styled.div`
  display: flex;
  color: #818181;
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

const QuestionCardAnswer = styled.div`
  display: flex;

  & img {
    width: 48px;
    flex-shrink: 0;
    border-radius: 100px;
  }
`;

const QuestionCardAnswerContent = styled.div`
  margin-left: 12px;
`;

const QuestionCardAnswerProfile = styled.div`
  display: flex;

  & div {
    margin-right: 8px;
  }
`;

const QuestionCardBottom = styled.div`
  margin-top: 32px;
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
  color: #1877f2;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */

  cursor: pointer;
`;

const ThumbsDown = styled.div`
  color: #818181;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */

  cursor: pointer;
`;

function QuestionCard({ question, profile }) {
  const [like, setLike] = useState(question.like);
  const [dislike, setDislike] = useState(question.dislike);

  const handleLikeClick = async () => {
    const res = await createLike(question.id);
    setLike(res.data.like);
  };

  const handleDislikeClick = async () => {
    const res = await createDislike(question.id);
    setDislike(res.data.dislike);
  };

  return (
    <QuestionCardWrapper>
      <QuestionCardResult>
        {question.answer ? "답변완료" : "미답변"}
      </QuestionCardResult>
      <QuestionCardQuestion>
        <QuestionCardTerm>
          <div>질문 ·</div>
          <div>{calculateTimeDiff(question.createdAt)}</div>
        </QuestionCardTerm>
        <QuestionCardQuestionTitle>
          {question.content}
        </QuestionCardQuestionTitle>
      </QuestionCardQuestion>
      <QuestionCardAnswer>
        {question.answer ? (
          <img src={profile.imageSource} alt="profile"></img>
        ) : null}
        <QuestionCardAnswerContent>
          <QuestionCardAnswerProfile>
            <div>{question.answer ? profile.name : null}</div>
            <QuestionCardTerm>
              {question.answer
                ? `${calculateTimeDiff(question.answer.createdAt)}`
                : null}
            </QuestionCardTerm>
          </QuestionCardAnswerProfile>
          <div className="feedcard-answer-main">
            {question.answer ? (
              !question.answer.isRejected ? (
                `${question.answer.content}`
              ) : (
                <div style={{ color: "red" }}>답변거절</div>
              )
            ) : null}
          </div>
        </QuestionCardAnswerContent>
      </QuestionCardAnswer>
      <QuestionCardBottom>
        <QuestionCardBottomStatus>
          <img
            src={thumbsUpImg}
            alt="thumbs-up"
            onClick={handleLikeClick}
            style={{ cursor: "pointer" }}
          />
          <ThumbsUp onClick={handleLikeClick}>좋아요 {like}</ThumbsUp>
          <img
            src={thumbsDownImg}
            alt="thumbs-down"
            onClick={handleDislikeClick}
            style={{ cursor: "pointer" }}
          />
          <ThumbsDown onClick={handleDislikeClick}>싫어요 {dislike}</ThumbsDown>
        </QuestionCardBottomStatus>
      </QuestionCardBottom>
    </QuestionCardWrapper>
  );
}

export default QuestionCard;
