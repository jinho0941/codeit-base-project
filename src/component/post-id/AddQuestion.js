import styled from 'styled-components';

const StyledAddQuestion = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  border-radius: 200px;
  background: var(--Brown-40, #542f1a);

  /* 3pt */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: var(--Grayscale-10, #fff);
  font-feature-settings:
    'clig' off,
    'liga' off;
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
`;

function AddQuestion({ onModalClick }) {
  return (
    <StyledAddQuestion onClick={onModalClick}>질문 작성하기</StyledAddQuestion>
  );
}

export default AddQuestion;
