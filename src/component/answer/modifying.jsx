import styles from "./Style.module.css";
import styled from "styled-components";
import { useState } from "react";
import { postAnswer } from "../../api/answer/\bcreate-answer";

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

function Modifying() {
  //input에 내용이 입력되면 버튼
  const [inputContents, setInputContents] = useState("");
  const [isButtonActive, setIsButtonActive] = useState();

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputContents(text);
    setIsButtonActive(text !== " ");
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    if (!isButtonActive) return;

    if (isButtonActive) {
      try {
        await postAnswer(inputContents);
      } catch (error) {
        console.log("에러 발생: ", error.message);
      }
    }
  };

  //좋아요, 싫어요 버튼에 대한 기능
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
            </AnswerInfo>
            <textarea
              className={styles.inputAnswer}
              value={inputContents}
              onChange={handleInputChange}
              placeholder="답변을 입력해주세요"
            />

            {/* 이벤트에 따라서 버튼 색상이 바뀌게 하고 싶은데 css클래스를 어떻게 적용해야 할지 모르겠습니다. */}
            <button
              type="submit"
              onClick={handleButtonClick}
              className={isButtonActive ? "modidfyDone" : "notModify"}
              disabled={!isButtonActive}
            >
              수정완료
            </button>
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

export default Modifying;
