import styled from "styled-components";

const StyledAddQuestion = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  border-radius: 200px;
  background: #542f1a;

  /* 3pt */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */

  display: flex;
  width: 208px;
  height: 54px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    width: 123px;
    height: 54px;
    font-size: 18px;
    padding: 12px 24px;
  }
`;

const DesktopSize = styled.div`
  display: block;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileSize = styled.div`
  display: none;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

function AddQuestion({ onModalClick }) {
  return (
    <StyledAddQuestion onClick={onModalClick}>
      <DesktopSize>질문 작성하기</DesktopSize>
      <MobileSize>질문 작성</MobileSize>
    </StyledAddQuestion>
  );
}

export default AddQuestion;
