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

function ModifyMenu() {
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
          <div className={styles.badge}>답변완료</div>
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
            <div className={styles.answerContent}>
              그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
              찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
              청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
              피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
              방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며,
              말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에
              있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은
              피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지
              것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히
              듣기만 운다.
            </div>
          </div>
        </div>
        <div className={styles.answerBottom}>
          {/* <img className={styles.rectangle} src={Rectangle} alt="구분선" /> */}
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

export default ModifyMenu;
