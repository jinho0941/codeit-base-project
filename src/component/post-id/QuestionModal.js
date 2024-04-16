import questionImg from "../../images/post-id-images/question.svg";
import closeImg from "../../images/post-id-images/close.svg";
import styled from "styled-components";
import { useState } from "react";
import { createQuestion } from "../../api/post-id/post-api";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;

  display: ${({ modalVisible }) => (modalVisible ? "block" : "none")};
`;

const ModalWrapper = styled.div`
  width: 612px;
  height: 454px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--Grayscale-10, #fff);

  /* 2pt */
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
  margin: auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  margin: auto;

  z-index: 999;

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

const ModalContainerForm = styled.form`
  padding: 40px 40px 70px 40px;
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  color: var(--Grayscale-60, #000);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 125% */
`;

const ModalAskQuestion = styled.div`
  display: flex;
`;

const ModalSubject = styled.div`
  display: flex;
  align-items: center;

  color: var(--Grayscale-60, #000);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */

  & img {
    width: 28px;
    border-radius: 100px;
  }
`;

const ModalContent = styled.textarea`
  margin-top: 15px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: var(--Grayscale-20, #f9f9f9);
  padding: 16px;
  height: 180px;
`;

const ModalButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#C7BBB5" : "#542f1a")};
  /* background: var(--Brown-40, #542f1a); */
  padding: 12px 24px;
  color: var(--Grayscale-10, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;

function QuestionModal({ modalVisible, onModalState, profile }) {
  const [inputValue, setInputValue] = useState(undefined);
  const handleModalClose = () => onModalState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createQuestion(inputValue);
      handleModalClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ModalBackground modalVisible={modalVisible} onClick={handleModalClose} />
      <ModalWrapper>
        <ModalContainerForm onSubmit={handleSubmit}>
          <ModalTitle>
            <ModalAskQuestion>
              <img src={questionImg} alt="question" />
              <div>질문을 작성하세요</div>
            </ModalAskQuestion>
            <img
              src={closeImg}
              alt="close"
              width="28px"
              onClick={handleModalClose}
            />
          </ModalTitle>
          <ModalSubject>
            <div>To.</div>
            <img src={profile.imageSource} alt="profile" />
            <div>{profile.name}</div>
          </ModalSubject>
          <ModalContent
            placeholder="질문을 입력해주세요."
            value={inputValue}
            onChange={handleInputChange}
          />
          <ModalButton disabled={!inputValue} type="submit">
            질문 보내기
          </ModalButton>
        </ModalContainerForm>
      </ModalWrapper>
    </>
  );
}

export default QuestionModal;
