import styles from "./Style.module.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  createAnswer,
  inquiryAnswer,
  modifyAnswer,
} from "../../api/answer/answer";
import OptionMenu from "./option-menu";

//이미지 경로
// import more from "./image/More.svg";
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
  //질문들 가져오기
  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await getQuestion();
  //       setQuestions(response.data);
  //     } catch (error) {
  //       console.error("에러발성");
  //     }
  //   }
  //   fetchData();
  // });

  //input에 내용이 입력되면 버튼 색상 바꾸기
  const [inputContents, setInputContents] = useState("");
  const [isButtonActive, setIsButtonActive] = useState();
  const [isModifying, setIsModifying] = useState(true);
  const [request, setRequest] = useState();

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputContents(text);
    setIsButtonActive(text !== " ");
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const result = await createAnswer();
    setRequest(result.data);
    if (!isButtonActive) return;

    setIsModifying(false);
    if (isButtonActive) {
      try {
        const postResult = await createAnswer();
        console.log(postResult);
      } catch (error) {
        console.log("에러 발생: ", error.message);
      }
    }
  };

  //답변 완료 버튼을 눌렀을 때 기능
  const [modifiedContent, setModifiedContent] = useState("");

  const answerDone = async () => {
    try {
      let a = await inquiryAnswer(setModifiedContent);
      console.log(a);
    } catch (error) {
      console.log("내용을 받아오지 못했습니다.");
    }
  };
  useEffect(() => {
    answerDone();
  }, []);

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
          {isModifying && <div className={styles.badge2}>미답변</div>}
          {!isModifying && <div className={styles.badge}>답변완료</div>}
          <OptionMenu />
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
              <div>{request}</div>
            </AnswerInfo>

            {isModifying && (
              <div>
                <textarea
                  className={`${styles.inputAnswer} ${styles.notMofidy}`}
                  value={inputContents}
                  onChange={handleInputChange}
                  placeholder="답변을 입력해주세요"
                />
                <button
                  type="submit"
                  onClick={handleButtonClick}
                  className={
                    isButtonActive ? styles.modifyDone : styles.notModify
                  }
                  disabled={!isButtonActive}
                >
                  수정완료
                </button>
              </div>
            )}

            {!isModifying && (
              <div className={styles.answerContent}> {modifiedContent}</div>
            )}
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
