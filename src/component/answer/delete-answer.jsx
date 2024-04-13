import styles from "./Style.module.css";
import styled from "styled-components";
import { useState } from "react";

//이미지 경로
import more from "./image/More.svg";
import Ellipse1 from "./image/Ellipse1.svg";
// import Rectangle from "./image/Rectangle.svg";
import thumbsUp from "./image/thumbs-up.svg";
import thumbsDown from "./image/thumbs-down.svg";

const AnswerInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

function DeleteAnswer() {
  const [thumbsUpCount, setThumbsUpCount] = useState(0);
  const [thumbsDownCount, setThumbsDownCount] = useState(0);
  const [thumbsUpColor, setThumbsUpColor] = useState("black");
  const [thumbsDownColor, setThumbsDownColor] = useState("black");

  const thumsUpButton = () => {
    setThumbsUpCount(thumbsUpCount + 1);
    setThumbsUpColor("blue");
  };

  const thumsDownButton = () => {
    setThumbsDownCount(thumbsDownCount + 1);
    setThumbsDownColor("red");
  };

  const thumbsUpStyle = {
    color: thumbsUpColor,
    cursor: "pointer",
  };

  const thumbsDownStyle = {
    color: thumbsDownColor,
    cursor: "pointer",
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.frame}>
          <div className={styles.badge2}>미답변</div>
          <img className={styles.kebab} src={more} alt="케밥버튼" />
        </div>
        <div className={styles.question}>
          <div className={styles.date}>질문 · 2주전</div>
          <div className={styles.title}>좋아하는 동물은?</div>
        </div>
        <div className={styles.answer}>
          <img src={Ellipse1} alt="사용자 프로필" />
          <div className={styles.answerContainer}>
            <AnswerInfo>
              <div className={styles.title}>아초는 고양이</div>
              <div className={styles.date}>2주전</div>
            </AnswerInfo>

            <textarea
              className={styles.inputAnswer}
              placeholder="답변을 입력해주세요"
            />

            <div className={styles.notModify}>수정완료</div>
          </div>
        </div>
        <div className={styles.answerBottom}>
          <div className="w-[30%] my-[1%] border-[1px] border-lightGray/30"></div>
          <div className={styles.reactionFrame}>
            <div className={styles.reaction}>
              <img
                onClick={thumsUpButton}
                style={thumbsUpStyle}
                src={thumbsUp}
                alt="좋아요 버튼 이미지"
              />
              <div onClick={thumsUpButton} style={thumbsUpStyle}>
                좋아요 {thumbsUpCount}
              </div>
            </div>
            <div className={styles.reaction}>
              <img
                onClick={thumsDownButton}
                style={thumbsDownStyle}
                src={thumbsDown}
                alt="싫어요 버튼 이미지"
              />
              <div onClick={thumsDownButton} style={thumbsDownStyle}>
                싫어요 {thumbsDownCount}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default DeleteAnswer;
